import * as vscode from 'vscode';
import * as path from 'path';
import { GitService, DetailedDiffResult } from './gitService';
import { CopilotService } from './copilotService';
import { LoggingService } from './loggingService';
import { PromptService } from './promptService';
import { ConfigService, BreakingChangesConfig } from './configService';
import {
  BreakingChangesFileGroupingService,
  BreakingChangesQueueManager,
  BreakingChangesResultAggregationService,
} from './breakingChanges';

export interface CodeChange {
  filePath: string;
  oldCode: string;
  newCode: string;
  lineNumber: number;
  changeType: 'added' | 'modified' | 'removed';
  symbolName?: string;
  symbolType?: 'function' | 'class' | 'interface' | 'enum' | 'variable' | 'other';
}

export interface CodeUsage {
  filePath: string;
  lineNumber: number;
  codeSnippet: string;
  symbolName: string;
}

export interface BreakingChange {
  id: string;
  changeType: 'method-signature' | 'class-structure' | 'enum-value' | 'member-removal' | 'behavior-change' | 'other';
  severity: 'critical' | 'high' | 'medium' | 'low';
  changeLocation: {
    filePath: string;
    lineNumber: number;
  };
  description: string;
  affectedLocations: Array<{
    filePath: string;
    lineNumber: number;
    codeSnippet: string;
  }>;
  recommendation: string;
}

export interface BreakingChangesSummary {
  totalBreakingChanges: number;
  criticalCount: number;
  highCount: number;
  mediumCount: number;
  lowCount: number;
}

export interface BreakingChangesResult {
  breakingChanges: BreakingChange[];
  summary: BreakingChangesSummary;
}

export class BreakingChangeService {
  private _logger: LoggingService;
  private _gitService: GitService;
  private _copilotService: CopilotService;
  private _config: BreakingChangesConfig;
  private _fileGroupingService: BreakingChangesFileGroupingService;
  private _changesQueueManager: BreakingChangesQueueManager;
  private _resultAggregationService: BreakingChangesResultAggregationService;

  constructor() {
    this._logger = LoggingService.getInstance();
    this._gitService = new GitService();
    this._copilotService = new CopilotService();
    this._config = ConfigService.getBreakingChangesConfig();
    this._fileGroupingService = new BreakingChangesFileGroupingService();
    this._changesQueueManager = new BreakingChangesQueueManager();
    this._resultAggregationService = new BreakingChangesResultAggregationService();

    // Listen for configuration changes
    vscode.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration('copilotPlusPlus.breakingChanges')) {
        this._config = ConfigService.getBreakingChangesConfig();
        this.log('Breaking changes configuration updated');
      }
    });
  }

  /**
   * Log message to the output channel
   */
  private log(message: string): void {
    this._logger.log(message, 'BreakingChangeService');
  }

  /**
   * Log error to the output channel
   */
  private logError(error: string | Error): void {
    const errorMessage = error instanceof Error ? error.message : String(error);
    this._logger.logError(errorMessage, error, 'BreakingChangeService');
  }

  /**
   * Analyze code changes and identify potential breaking changes
   */
  async analyzeBreakingChanges(sourceBranch: string, targetBranch: string): Promise<BreakingChangesResult> {
    return await vscode.window.withProgress(
      {
        location: vscode.ProgressLocation.Notification,
        title: 'Analyzing Breaking Changes',
        cancellable: true,
      },
      async (progress, token) => {
        try {
          this.log(`Starting breaking change analysis between branches: ${sourceBranch} and ${targetBranch}`);
          progress.report({ increment: 10, message: 'Getting diff information...' });

          // Get diff information between branches
          const diffInfo = await this._gitService.getDiffBetweenBranches(sourceBranch, targetBranch);
          const detailedDiff = await this._gitService.getDetailedDiffBetweenBranches(sourceBranch, targetBranch);
          const files = await this._gitService.getFilesBetweenBranches(sourceBranch, targetBranch);

          progress.report({ increment: 20, message: 'Extracting code changes...' });
          // Extract the code changes (functions, classes, etc.)
          const codeChanges = await this.extractCodeChanges(detailedDiff);

          progress.report({ increment: 10, message: 'Finding code usages...' });
          // Find usages of changed code
          const usages = await this.findCodeUsages(codeChanges);

          // Create context for analysis
          const context = {
            sourceBranch,
            targetBranch,
            diffInfo,
            files,
            detailedDiff,
            codeChanges,
            usages,
            config: this._config,
          };

          // Determine if we should use chunking based on the number of files changed
          const shouldUseChunking = files.length > 10 || detailedDiff.length > 20;

          if (!shouldUseChunking) {
            // For small changes, use the standard analysis process
            this.log('Small change set detected, using standard analysis process');
            progress.report({ increment: 40, message: 'Analyzing potential breaks...' });
            return await this.analyzeWithCopilot(codeChanges, usages, diffInfo, files);
          }

          // For larger changes, use the chunked analysis process
          this.log('Large change set detected, using chunked analysis process');
          progress.report({ increment: 10, message: 'Grouping files for analysis...' });

          // Group files for processing
          const fileGroups = this._fileGroupingService.groupFiles(detailedDiff, codeChanges, usages);
          this.log(`Created ${fileGroups.length} file groups for processing`);

          // Initialize the changes queue
          this._changesQueueManager.initializeQueue(fileGroups, context, ConfigService.getLanguageModelFamily());

          // Set up progress callback
          this._changesQueueManager.onProgress((update) => {
            const percent = Math.floor((update.completedCount / update.totalCount) * 40);

            // Create a progress message that includes the group number
            let progressMessage = '';
            if (update.currentlyProcessing && update.currentGroupIndex) {
              progressMessage = `[${update.currentGroupIndex}/${update.totalCount}] Processing ${update.currentlyProcessing}...`;
            } else {
              progressMessage = `Processed ${update.completedCount} of ${update.totalCount} file groups`;
            }

            progress.report({
              increment: percent > 0 ? percent / update.totalCount : 0,
              message: progressMessage,
            });
          });

          // Process the queue and wait for results
          const analysisPromise = new Promise<any[]>((resolve) => {
            this._changesQueueManager.onComplete((results) => {
              resolve(results);
            });
            this._changesQueueManager.startProcessing();
          });

          // Wait for all analyses to complete
          const results = await analysisPromise;

          // Aggregate results
          progress.report({ increment: 10, message: 'Aggregating results...' });
          const aggregatedResult = await this._resultAggregationService.aggregateResults(
            results,
            context,
            ConfigService.getLanguageModelFamily()
          );

          this.log('Breaking changes analysis completed successfully');
          return aggregatedResult;
        } catch (error) {
          this.logError(`Failed to analyze breaking changes: ${error}`);
          throw error;
        }
      }
    );
  }

  /**
   * Extract code changes from diff information
   */
  private async extractCodeChanges(detailedDiff: DetailedDiffResult[]): Promise<CodeChange[]> {
    this.log('Extracting code changes from diff information');
    const codeChanges: CodeChange[] = [];

    for (const diff of detailedDiff) {
      const { filePath, hunk } = diff;

      // Skip non-code files
      if (!this.isCodeFile(filePath)) {
        continue;
      }

      for (const line of hunk.lines) {
        if (line.type === 'added' || line.type === 'removed') {
          const lineNumber = line.type === 'added' ? line.newLineNum || 0 : line.oldLineNum || 0;

          codeChanges.push({
            filePath,
            oldCode: line.type === 'removed' ? line.content : '',
            newCode: line.type === 'added' ? line.content : '',
            lineNumber,
            changeType: line.type === 'added' ? (line.oldLineNum ? 'modified' : 'added') : 'removed',
          });
        }
      }
    }

    // Try to identify symbol names and types
    await this.enrichCodeChangesWithSymbolInfo(codeChanges);

    return codeChanges;
  }

  /**
   * Enrich code changes with symbol information
   */
  private async enrichCodeChangesWithSymbolInfo(codeChanges: CodeChange[]): Promise<void> {
    this.log('Enriching code changes with symbol information');

    // Group changes by file to process them more efficiently
    const changesByFile: Record<string, CodeChange[]> = {};
    for (const change of codeChanges) {
      if (!changesByFile[change.filePath]) {
        changesByFile[change.filePath] = [];
      }
      changesByFile[change.filePath].push(change);
    }

    // Process each file
    for (const [filePath, changes] of Object.entries(changesByFile)) {
      try {
        const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
        if (!workspaceRoot) {
          continue;
        }

        const fullPath = path.join(workspaceRoot, filePath);
        const uri = vscode.Uri.file(fullPath);

        // Try to get document and symbols
        try {
          const document = await vscode.workspace.openTextDocument(uri);
          const symbols = await vscode.commands.executeCommand<vscode.DocumentSymbol[]>(
            'vscode.executeDocumentSymbolProvider',
            uri
          );

          if (symbols && symbols.length > 0) {
            // Match changes with symbols
            for (const change of changes) {
              const matchingSymbol = this.findSymbolAtLine(symbols, change.lineNumber);
              if (matchingSymbol) {
                change.symbolName = matchingSymbol.name;
                change.symbolType = this.mapSymbolKindToType(matchingSymbol.kind);
              }
            }
          }
        } catch (error) {
          this.log(`Could not get symbols for ${filePath}: ${error}`);
        }
      } catch (error) {
        this.log(`Error processing file ${filePath}: ${error}`);
      }
    }
  }

  /**
   * Find symbol at a specific line
   */
  private findSymbolAtLine(symbols: vscode.DocumentSymbol[], lineNumber: number): vscode.DocumentSymbol | undefined {
    for (const symbol of symbols) {
      // Check if the line is within this symbol's range
      if (symbol.range.start.line <= lineNumber && symbol.range.end.line >= lineNumber) {
        // Check children first for more specific match
        const childMatch = symbol.children.length > 0 ? this.findSymbolAtLine(symbol.children, lineNumber) : undefined;

        return childMatch || symbol;
      }
    }
    return undefined;
  }

  /**
   * Map VS Code symbol kind to our symbol type
   */
  private mapSymbolKindToType(kind: vscode.SymbolKind): CodeChange['symbolType'] {
    switch (kind) {
      case vscode.SymbolKind.Function:
      case vscode.SymbolKind.Method:
        return 'function';
      case vscode.SymbolKind.Class:
        return 'class';
      case vscode.SymbolKind.Interface:
        return 'interface';
      case vscode.SymbolKind.Enum:
        return 'enum';
      case vscode.SymbolKind.Variable:
      case vscode.SymbolKind.Constant:
      case vscode.SymbolKind.Property:
        return 'variable';
      default:
        return 'other';
    }
  }

  /**
   * Find all usages/references of changed code across the codebase
   * @param codeChanges Array of code changes to find usages for. Each change contains information about modified code including file path, line number, and symbol details
   * @returns Array of CodeUsage objects containing information about where the changed code is used:
   * - filePath: Relative path to the file containing the usage
   * - lineNumber: Line number where the usage occurs (1-based)
   * - codeSnippet: The line of code containing the usage
   * - symbolName: Name of the symbol being referenced
   *
   * This method:
   * 1. Filters code changes to only process those with symbol information
   * 2. For each change, uses VS Code's reference provider to find all references
   * 3. Processes each reference to extract usage details
   * 4. Skips self-references (usage in same file at same line as change)
   * 5. Returns consolidated list of all usages found
   */
  private async findCodeUsages(codeChanges: CodeChange[]): Promise<CodeUsage[]> {
    this.log('Finding usages of changed code');
    const usages: CodeUsage[] = [];
    const BATCH_SIZE = 10; // Process changes in batches of 10

    // Filter changes to only include those with symbol information
    const changesWithSymbols = codeChanges.filter((change) => change.symbolName);

    this.log(`Processing ${changesWithSymbols.length} code changes with symbols in batches of ${BATCH_SIZE}`);

    // Process changes in batches
    for (let i = 0; i < changesWithSymbols.length; i += BATCH_SIZE) {
      const batch = changesWithSymbols.slice(i, i + BATCH_SIZE);
      this.log(
        `Processing batch ${Math.floor(i / BATCH_SIZE) + 1} of ${Math.ceil(changesWithSymbols.length / BATCH_SIZE)}`
      );

      // Process each batch in parallel
      const batchResults = await Promise.all(batch.map((change) => this.findUsagesForChange(change)));

      // Flatten and add results to the usages array
      for (const result of batchResults) {
        usages.push(...result);
      }
    }

    return usages;
  }

  /**
   * Find usages for a single code change
   * @param change The code change to find usages for
   * @returns Array of usages for this code change
   */
  private async findUsagesForChange(change: CodeChange): Promise<CodeUsage[]> {
    const usages: CodeUsage[] = [];
    try {
      if (!change.symbolName) {
        return usages;
      }

      const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
      if (!workspaceRoot) {
        return usages;
      }

      const fullPath = path.join(workspaceRoot, change.filePath);
      const uri = vscode.Uri.file(fullPath);

      // Find references to this symbol
      const references = await vscode.commands.executeCommand<vscode.Location[]>(
        'vscode.executeReferenceProvider',
        uri,
        new vscode.Position(change.lineNumber - 1, 0)
      );

      if (!references || references.length === 0) {
        return usages;
      }

      for (const reference of references) {
        // Skip self-references
        if (reference.uri.fsPath === uri.fsPath && reference.range.start.line === change.lineNumber - 1) {
          continue;
        }

        try {
          const document = await vscode.workspace.openTextDocument(reference.uri);
          const referenceLine = reference.range.start.line;

          // Get document symbols to find the containing function/method/class
          const symbols = await vscode.commands.executeCommand<vscode.DocumentSymbol[]>(
            'vscode.executeDocumentSymbolProvider',
            reference.uri
          );

          // Find the smallest symbol that contains our reference line
          const containingSymbol = this.findSmallestContainingSymbol(symbols, referenceLine);

          let codeSnippet = '';
          if (containingSymbol) {
            // Get the entire text range of the containing symbol
            const startLine = containingSymbol.range.start.line;
            const endLine = containingSymbol.range.end.line;

            // Build the code block for the entire symbol
            for (let i = startLine; i <= endLine; i++) {
              codeSnippet += document.lineAt(i).text + '\n';
            }

            // Add symbol info to the code snippet
            codeSnippet = `// ${containingSymbol.kind.toString()}: ${containingSymbol.name}\n${codeSnippet}`;
          } else {
            // Fallback to just the line if no containing symbol found
            codeSnippet = document.lineAt(referenceLine).text;
          }

          // Get relative path from workspace root
          const relativePath = path.relative(workspaceRoot, reference.uri.fsPath);

          usages.push({
            filePath: relativePath,
            lineNumber: referenceLine + 1, // Convert to 1-indexed
            codeSnippet: codeSnippet.trim(),
            symbolName: change.symbolName,
          });
        } catch (error) {
          this.log(`Error getting code snippet: ${error}`);
        }
      }
    } catch (error) {
      this.log(`Error finding references for ${change.filePath}:${change.lineNumber}: ${error}`);
    }

    return usages;
  }

  /**
   * Find the smallest symbol that contains the given line
   */
  private findSmallestContainingSymbol(
    symbols: vscode.DocumentSymbol[] | undefined,
    lineNumber: number
  ): vscode.DocumentSymbol | undefined {
    if (!symbols) {
      return undefined;
    }
    let smallestSymbol: vscode.DocumentSymbol | undefined = undefined;
    let smallestRange = Number.MAX_SAFE_INTEGER;
    for (const symbol of symbols) {
      // Check if the line is within this symbol's range
      if (symbol.range.start.line <= lineNumber && symbol.range.end.line >= lineNumber) {
        // Calculate the size of this symbol's range
        const rangeSize = symbol.range.end.line - symbol.range.start.line;
        // If this is smaller than our current smallest, update it
        if (rangeSize < smallestRange) {
          smallestRange = rangeSize;
          smallestSymbol = symbol;
        }
        // Recursively check children for an even smaller containing symbol
        const childSymbol = this.findSmallestContainingSymbol(symbol.children, lineNumber);
        if (childSymbol) {
          const childRangeSize = childSymbol.range.end.line - childSymbol.range.start.line;
          if (childRangeSize < smallestRange) {
            smallestRange = childRangeSize;
            smallestSymbol = childSymbol;
          }
        }
      }
    }
    return smallestSymbol;
  }

  /**
   * Analyze code changes and usages with Copilot to identify breaking changes
   */
  private async analyzeWithCopilot(
    codeChanges: CodeChange[],
    usages: CodeUsage[],
    diffInfo: string,
    files: Array<{ status: string; file: string }>
  ): Promise<any> {
    this.log('Analyzing code changes with Copilot');

    // Prepare context for Copilot
    const context = {
      codeChanges,
      usages,
      diffInfo,
      files,
      config: this._config, // Pass configuration to the prompt
    };

    // Get language model
    const modelFamily = ConfigService.getLanguageModelFamily();
    this.log(`Using language model family: ${modelFamily}`);

    // Create prompt for breaking changes analysis
    const messages = PromptService.buildBreakingChangesPrompt(context);

    // Send to Copilot
    try {
      // Select the configured Copilot model
      const [model] = await vscode.lm.selectChatModels({
        vendor: 'copilot',
        family: modelFamily,
      });

      if (!model) {
        const errorMsg = `No suitable language model found for: ${modelFamily}. Please make sure GitHub Copilot is installed and enabled.`;
        this.logError(errorMsg);
        throw new Error(errorMsg);
      }

      this.log('Prompt built, sending request to Copilot...');

      // Send the request to the language model
      const response = await model.sendRequest(messages);

      // Stream and collect the response
      let responseContent = '';
      for await (const fragment of response.text) {
        responseContent += fragment;
      }

      // Parse the response
      try {
        if (!responseContent) {
          this.logError('No response content from language model');
          return {
            breakingChanges: [],
            summary: {
              totalBreakingChanges: 0,
              criticalCount: 0,
              highCount: 0,
              mediumCount: 0,
              lowCount: 0,
            },
          };
        }

        // Extract JSON from the response
        const jsonMatch = responseContent.match(/```json\n([\s\S]*?)\n```/) || responseContent.match(/({[\s\S]*})/);

        if (jsonMatch && jsonMatch[1]) {
          const jsonContent = jsonMatch[1].trim();
          return JSON.parse(jsonContent);
        } else {
          this.logError('Could not extract JSON from Copilot response');
          return {
            breakingChanges: [],
            summary: {
              totalBreakingChanges: 0,
              criticalCount: 0,
              highCount: 0,
              mediumCount: 0,
              lowCount: 0,
            },
          };
        }
      } catch (error) {
        this.logError(`Error parsing Copilot response: ${error}`);
        throw error;
      }
    } catch (error) {
      this.logError(`Error communicating with Copilot: ${error}`);
      throw error;
    }
  }

  /**
   * Check if a file is a code file that should be analyzed
   */
  private isCodeFile(filePath: string): boolean {
    const codeExtensions = [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.vue',
      '.svelte',
      '.java',
      '.kt',
      '.scala',
      '.py',
      '.rb',
      '.php',
      '.go',
      '.rs',
      '.c',
      '.cpp',
      '.h',
      '.hpp',
      '.cs',
      '.swift',
      '.m',
      '.mm',
    ];

    const extension = path.extname(filePath).toLowerCase();
    return codeExtensions.includes(extension);
  }
}
