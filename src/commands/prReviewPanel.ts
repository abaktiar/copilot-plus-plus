import * as vscode from 'vscode';
import * as path from 'path';
import { GitService } from '../services/gitService';
import { CopilotService } from '../services/copilotService';
import { ConfigService } from '../services/configService';

export class PrReviewPanel {
  public static currentPanel: PrReviewPanel | undefined;
  private readonly _panel: vscode.WebviewPanel;
  private readonly _extensionUri: vscode.Uri;
  private _disposables: vscode.Disposable[] = [];
  private readonly _gitService: GitService;
  private readonly _copilotService: CopilotService;

  public static createOrShow(extensionUri: vscode.Uri) {
    const column = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;

    // If we already have a panel, show it
    if (PrReviewPanel.currentPanel) {
      PrReviewPanel.currentPanel._panel.reveal(column);
      return;
    }

    // Otherwise, create a new panel
    const panel = vscode.window.createWebviewPanel(
      'prReviewAssistant',
      'PR Review Assistant',
      column || vscode.ViewColumn.One,
      {
        enableScripts: true,
        localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'media')],
        retainContextWhenHidden: true,
      }
    );

    // Set the webview icon using our custom icon file
    const iconCode = vscode.Uri.joinPath(extensionUri, 'images', 'icon.png');
    panel.iconPath = iconCode;

    PrReviewPanel.currentPanel = new PrReviewPanel(panel, extensionUri);
  }

  private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
    this._panel = panel;
    this._extensionUri = extensionUri;
    this._gitService = new GitService();
    this._copilotService = new CopilotService();

    // Set the webview's initial html content
    this._update();

    // Listen for when the panel is disposed
    this._panel.onDidDispose(() => this.dispose(), null, this._disposables);

    // Handle messages from the webview
    this._panel.webview.onDidReceiveMessage(
      async (message) => {
        switch (message.command) {
          case 'getBranches':
            const branches = await this._gitService.getAvailableBranches();
            const currentBranch = await this._gitService.getCurrentBranch();
            const defaultTargetBranch = this._gitService.getDefaultTargetBranch();
            const languageModel = ConfigService.getLanguageModelFamily();

            this._panel.webview.postMessage({
              command: 'branchesList',
              branches,
              currentBranch,
              defaultTargetBranch,
              languageModel,
            });
            break;

          case 'reviewPr':
            try {
              await this.reviewPr(message.sourceBranch, message.targetBranch, message.modelFamily);
            } catch (error) {
              this._panel.webview.postMessage({
                command: 'error',
                message: error instanceof Error ? error.message : String(error),
              });
            }
            break;

          case 'navigateToFile':
            try {
              await this.navigateToFile(message.filePath, message.lineNumber, message.codeContext);
            } catch (error) {
              vscode.window.showErrorMessage('Failed to navigate to file');
            }
            break;
        }
      },
      null,
      this._disposables
    );
  }

  private async reviewPr(sourceBranch: string, targetBranch: string, modelFamily?: string) {
    try {
      this._panel.webview.postMessage({ command: 'startLoading' });

      // Get diff data with enhanced line information
      const [commits, diff, files, detailedDiff] = await Promise.all([
        this._gitService.getCommitsBetweenBranches(sourceBranch, targetBranch),
        this._gitService.getDiffBetweenBranches(sourceBranch, targetBranch),
        this._gitService.getFilesBetweenBranches(sourceBranch, targetBranch),
        this._gitService.getDetailedDiffBetweenBranches(sourceBranch, targetBranch),
      ]);

      if (!commits.length && !files.length) {
        throw new Error('No changes detected between the selected branches');
      }

      const prContext = {
        sourceBranch,
        targetBranch,
        commits,
        diff,
        files,
        detailedDiff,
      };

      const result = await this._copilotService.reviewPrChanges(prContext, modelFamily);

      // Process review results to enhance navigation
      const enhancedResult = this.enhanceReviewResults(result, detailedDiff);

      this._panel.webview.postMessage({
        command: 'reviewComplete',
        result: enhancedResult,
      });
    } catch (error) {
      console.error('PR review failed:', error);
      this._panel.webview.postMessage({
        command: 'error',
        message: error instanceof Error ? error.message : String(error),
      });
    }
  }

  /**
   * Enhance review results with additional context for better navigation
   */
  private enhanceReviewResults(result: any, detailedDiff: any[]): any {
    // Clone the result to avoid modifying the original
    const enhancedResult = JSON.parse(JSON.stringify(result));

    // Process each issue to add context
    if (enhancedResult.issues && Array.isArray(enhancedResult.issues)) {
      enhancedResult.issues.forEach((issue: any) => {
        // Skip issues without filePath
        if (!issue.filePath) {
          return;
        }

        // Find file context in detailed diff
        const fileMatches = detailedDiff.filter((d) => d.filePath === issue.filePath);
        if (!fileMatches.length) {
          return;
        }

        // Find the closest matching line
        const closestMatch = this.findClosestMatchingContext(fileMatches, issue);

        if (closestMatch) {
          // Add enhanced context
          issue.lineContext = {
            linesBefore: closestMatch.contextBefore,
            linesAfter: closestMatch.contextAfter,
            exactMatch: closestMatch.exactMatch,
            newLineNumber: closestMatch.newLineNumber,
            codeSnippet: this.formatCodeSnippet(closestMatch),
          };
        }
      });
    }

    return enhancedResult;
  }

  /**
   * Find the closest matching hunk for an issue
   */
  private findClosestMatchingContext(fileMatches: any[], issue: any): any | null {
    // Skip if no line number provided
    if (!issue.lineNumber) {
      return null;
    }

    let bestMatch = null;
    let smallestDistance = Infinity;

    for (const fileMatch of fileMatches) {
      const hunk = fileMatch.hunk;

      // Check if the line number is in this hunk
      for (const line of hunk.lines) {
        if (!line.newLineNum) {
          continue;
        }

        // Calculate distance to reported issue line
        const distance = Math.abs(line.newLineNum - issue.lineNumber);

        // If this is the closest match so far
        if (distance < smallestDistance) {
          smallestDistance = distance;

          // Get context around the matching line
          const lineIndex = hunk.lines.indexOf(line);
          const relevantLines = hunk.lines.slice(
            Math.max(0, lineIndex - 3),
            Math.min(hunk.lines.length, lineIndex + 4)
          );

          bestMatch = {
            contextBefore: fileMatch.contextBefore,
            contextAfter: fileMatch.contextAfter,
            exactMatch: distance === 0,
            newLineNumber: line.newLineNum,
            oldLineNumber: line.oldLineNum,
            relevantLines: relevantLines,
            distance: distance,
          };

          // If exact match found, we can stop searching
          if (distance === 0) {
            break;
          }
        }
      }

      // If exact match found, we can stop searching
      if (bestMatch && bestMatch.exactMatch) {
        break;
      }
    }

    return bestMatch;
  }

  /**
   * Format a code snippet for display
   */
  private formatCodeSnippet(match: any): string {
    if (!match || !match.relevantLines) {
      return '';
    }

    return match.relevantLines
      .map((line: any) => {
        const prefix = line.type === 'added' ? '+ ' : line.type === 'removed' ? '- ' : '  ';
        return prefix + line.content;
      })
      .join('\n');
  }

  private async navigateToFile(filePath: string, lineNumber: number, codeContext?: string) {
    try {
      // Get the workspace root
      const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
      if (!workspaceRoot) {
        throw new Error('No workspace folder open');
      }

      // Construct full path and open the file
      const fullPath = path.isAbsolute(filePath) ? filePath : path.join(workspaceRoot, filePath);

      const document = await vscode.workspace.openTextDocument(fullPath);
      const editor = await vscode.window.showTextDocument(document);

      // If code context is provided, try to find it first
      if (codeContext && codeContext.trim()) {
        const text = document.getText();
        const contextLines = codeContext
          .split('\n')
          .filter((line) => !line.startsWith('+ ') && !line.startsWith('- '))
          .map((line) => (line.startsWith('  ') ? line.substring(2) : line))
          .filter((line) => line.trim());

        // Need at least 2 context lines to perform a reliable search
        if (contextLines.length >= 2) {
          const searchPattern = contextLines.slice(0, 3).join('\n'); // Use first 3 lines at most
          const searchIndex = text.indexOf(searchPattern);

          if (searchIndex !== -1) {
            // Found context, calculate position
            const precedingText = text.substring(0, searchIndex);
            const linesBefore = precedingText.split('\n').length - 1;

            const position = new vscode.Position(linesBefore, 0);
            editor.selection = new vscode.Selection(position, position);
            editor.revealRange(new vscode.Range(position, position), vscode.TextEditorRevealType.InCenter);
            return;
          }
        }
      }

      // Fallback to line number if context search failed
      if (lineNumber !== undefined && lineNumber >= 0) {
        const position = new vscode.Position(lineNumber - 1, 0);
        editor.selection = new vscode.Selection(position, position);
        editor.revealRange(new vscode.Range(position, position), vscode.TextEditorRevealType.InCenter);
      }
    } catch (error) {
      console.error('Navigation failed:', error);
      throw error;
    }
  }

  private _update() {
    const webview = this._panel.webview;
    this._panel.webview.html = this._getHtmlForWebview(webview);
  }

  private _getHtmlForWebview(webview: vscode.Webview) {
    // Get the local path to scripts and css
    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'media', 'pr-review', 'prReview.js')
    );
    const styleUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'media', 'pr-review', 'prReview.css')
    );
    const reactUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'media', 'lib', 'react-18.3.1.min.js')
    );
    const reactDomUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'media', 'lib', 'react-dom-18.3.1.min.js')
    );
    const markedUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'media', 'lib', 'marked-4.0.0.min.js')
    );
     const modelConfigUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'modelConfig.js'));

     // Use a nonce to only allow specific scripts to be run
     const nonce = getNonce();

     return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta name="color-scheme" content="dark light">
                <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; font-src ${webview.cspSource}; script-src 'nonce-${nonce}'; img-src ${webview.cspSource} https:;">
                <link href="${styleUri}" rel="stylesheet">
                <title>PR Review Assistant</title>
            </head>
            <body>
                <div id="root"></div>
                <script nonce="${nonce}" src="${reactUri}"></script>
                <script nonce="${nonce}" src="${reactDomUri}"></script>
                <script nonce="${nonce}" src="${markedUri}"></script>
                <script nonce="${nonce}" src="${modelConfigUri}"></script>
                <script nonce="${nonce}" src="${scriptUri}"></script>
            </body>
            </html>`;
  }

  public dispose() {
    PrReviewPanel.currentPanel = undefined;
    // Clean up our resources
    this._panel.dispose();
    while (this._disposables.length) {
      const x = this._disposables.pop();
      if (x) {
        x.dispose();
      }
    }
  }
}

function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}