import * as vscode from 'vscode';
import { PromptService } from './promptService';
import { ConfigService } from './configService';
import { LoggingService } from './loggingService';
import { DetailedDiffResult } from './gitService';
import { DebugLogService } from './debugLogService';
import { JsonSanitizationService } from './jsonSanitizationService';
import { CodeChange, CodeUsage, BreakingChange, BreakingChangesSummary } from './breakingChangeService';

interface CommitContext {
  diff: string;
  files: Array<{ status: string; file: string }>;
  commitTemplate?: string;
  recentCommits?: string[];
  branch?: string;
  ticketNumber?: string;
}

interface PrContext {
  sourceBranch: string;
  targetBranch: string;
  commits: Array<{
    hash: string;
    subject: string;
    body: string;
    author: string;
    date: string;
  }>;
  diff: string;
  detailedDiff?: DetailedDiffResult[];
  files?: Array<{ status: string; file: string }>;
}

interface PrReviewResult {
  summary: {
    assessment: string;
    strengths: string[];
    criticalIssues: string[];
    recommendations: string[];
  };
  issues: Array<{
    severity: string;
    category: string;
    description: string;
    filePath: string;
    lineNumber?: number;
    suggestion?: string;
    justification?: string;
  }>;
}

export class CopilotService {
  private _logger: LoggingService;
  private _debugLogService: DebugLogService;
  private _jsonSanitizationService: JsonSanitizationService;

  constructor() {
    this._logger = LoggingService.getInstance();
    this._debugLogService = DebugLogService.getInstance();
    this._jsonSanitizationService = JsonSanitizationService.getInstance();
  }

  /**
   * Determine if an error indicates the selected model is not supported
   */
  private shouldFallbackToGpt41(error: unknown): boolean {
    const msg = error instanceof Error ? (error as Error).message : String(error);
    const code = (error as any)?.code ?? (error as any)?.error?.code;
    const param = (error as any)?.param ?? (error as any)?.error?.param;
    // Heuristics based on observed responses from Copilot/OpenAI bridges
    const textHints = [
      'model is not supported',
      'requested model is not supported',
      'model_not_supported',
      'unsupported model',
    ];
    const matchesText = textHints.some((h) => msg?.toLowerCase().includes(h));
    const matchesCode = typeof code === 'string' && code.toLowerCase().includes('model_not_supported');
    const matchesParam = typeof param === 'string' && param.toLowerCase() === 'model';
    return Boolean(matchesText || matchesCode || matchesParam);
  }

  /**
   * Select a Copilot chat model by family or throw with a helpful error
   */
  private async selectModelByFamily(family: string): Promise<vscode.LanguageModelChat> {
    const [model] = await vscode.lm.selectChatModels({ vendor: 'copilot', family });
    if (!model) {
      const errorMsg = `No suitable language model found for: ${family}. Please make sure GitHub Copilot is installed and enabled.`;
      this.logError(errorMsg);
      throw new Error(errorMsg);
    }
    return model;
  }

  /**
   * Send a request with the given family and fallback to gpt-4.1 on model-not-supported errors
   */
  private async sendRequestWithFallback(
    messages: vscode.LanguageModelChatMessage[],
    primaryFamily: string,
    token?: vscode.CancellationToken
  ): Promise<vscode.LanguageModelChatResponse> {
    try {
      const primaryModel = await this.selectModelByFamily(primaryFamily);
      return await primaryModel.sendRequest(messages, {}, token);
    } catch (err) {
      // If the primary family is not 4.1 and the error suggests unsupported model, retry with 4.1
      if (primaryFamily !== 'gpt-4.1' && this.shouldFallbackToGpt41(err)) {
        this.log(
          `Model family '${primaryFamily}' not supported. Falling back to 'gpt-4.1' and retrying...`
        );
        try {
          const fallbackModel = await this.selectModelByFamily('gpt-4.1');
          return await fallbackModel.sendRequest(messages, {}, token);
        } catch (fallbackErr) {
          // Log both errors; throw the fallback error for visibility
          this.logError(`Fallback to gpt-4.1 failed: ${fallbackErr}`);
          throw fallbackErr;
        }
      }
      throw err;
    }
  }

  /**
   * Log message to the output channel
   */
  private log(message: string): void {
    this._logger.log(message, 'CopilotService');
  }

  /**
   * Log error to the output channel
   */
  private logError(error: string | Error): void {
    const errorMessage = error instanceof Error ? error.message : String(error);
    this._logger.logError(errorMessage, error, 'CopilotService');
  }

  /**
   * Generate commit message using GitHub Copilot
   */
  async generateCommitMessage(commitContext: CommitContext): Promise<string> {
    return await vscode.window.withProgress(
      {
        location: vscode.ProgressLocation.Notification,
        title: 'Generating commit message...',
        cancellable: true,
      },
      async (progress, token) => {
        try {
          this._logger.show(true);
          this.log('Starting commit message generation...');
          this.log(`Branch: ${commitContext.branch || 'unknown'}`);
          this.log(`Files changed: ${commitContext.files.length}`);

          progress.report({ increment: 20, message: 'Initializing language model...' });

          // Get the configured language model family
          const modelFamily = ConfigService.getLanguageModelFamily();
          this.log(`Using language model family: ${modelFamily}`);

          // Prepare to send the request with fallback logic if needed

          progress.report({ increment: 20, message: 'Building prompt...' });

          // Build the commit template using recent commits if available
          const commitTemplate =
            commitContext.commitTemplate ||
            (commitContext.recentCommits && commitContext.recentCommits.length > 0
              ? 'Recent commit style examples:\n' + commitContext.recentCommits.join('\n')
              : undefined);

          // Get messages array from PromptService
          const messages = PromptService.buildPrompt({
            ...commitContext,
            commitTemplate,
          });

          this.log('Prompt built, sending request to Copilot...');
          progress.report({ increment: 30, message: 'Asking Copilot...' });

          // Send the request to the language model with fallback to gpt-4.1 on model-not-supported
          const response = await this.sendRequestWithFallback(messages, modelFamily, token);

          // Stream and collect the response
          let commitMessage = '';
          progress.report({ increment: 20, message: 'Receiving response...' });

          for await (const fragment of response.text) {
            commitMessage += fragment;
          }

          progress.report({ increment: 10, message: 'Done!' });
          this.log('Commit message generated successfully');
          this.log(`Generated message: ${commitMessage.trim().split('\n')[0]}...`);

          // Clean up and return the commit message
          return commitMessage.trim();
        } catch (error) {
          this.logError('Error generating commit message: ' + error);
          if (error instanceof vscode.LanguageModelError) {
            throw new Error(`Failed to generate commit message: ${error.message} (${error.code})`);
          }
          throw new Error(
            'Failed to generate commit message: ' + (error instanceof Error ? error.message : String(error))
          );
        }
      }
    );
  }

  /**
   * Generate PR description using GitHub Copilot
   */
  async generatePrDescription(
    prContext: PrContext,
    modelFamily?: string
  ): Promise<{ title: string; description: string }> {
    return await vscode.window.withProgress(
      {
        location: vscode.ProgressLocation.Notification,
        title: 'Generating PR description...',
        cancellable: true,
      },
      async (progress, token) => {
        try {
          this._logger.show(true);
          this.log('Starting PR description generation...');
          this.log(`Source branch: ${prContext.sourceBranch}`);
          this.log(`Target branch: ${prContext.targetBranch}`);
          this.log(`Commits: ${prContext.commits.length}`);
          this.log(`Files changed: ${prContext.files?.length || 'unknown'}`);

          progress.report({ increment: 20, message: 'Initializing language model...' });

          // Use provided model family or fall back to config
          const selectedModelFamily = modelFamily || ConfigService.getLanguageModelFamily();
          this.log(`Using language model family: ${selectedModelFamily}`);

          // Prepare to send the request with fallback

          progress.report({ increment: 20, message: 'Building prompt...' });

          // Get messages array from PromptService
          const messages = PromptService.buildPrDescriptionPrompt(prContext);

          this.log('Prompt built, sending request to Copilot...');
          progress.report({ increment: 30, message: 'Asking Copilot...' });

          // Send the request to the language model with fallback to gpt-4.1 on model-not-supported
          const response = await this.sendRequestWithFallback(messages, selectedModelFamily, token);

          // Stream and collect the response
          let responseContent = '';
          progress.report({ increment: 20, message: 'Receiving response...' });

          for await (const fragment of response.text) {
            responseContent += fragment;
          }

          progress.report({ increment: 10, message: 'Processing response...' });

          // Log the raw response for debugging
          this.log(`Raw response length: ${responseContent.length}`);
          this.log(`Response sample: ${responseContent.substring(0, 200)}...`);

          // Parse the JSON response, with enhanced error handling for different LLM formats
          try {
            // For Claude 3.5 and other models that might include other text before or after the JSON
            // First try to extract a JSON object from the response
            const jsonMatch = responseContent.match(/\{[\s\S]*?\}/g);

            if (jsonMatch) {
              // Try each JSON match until we find a valid one with the right fields
              for (const potentialJson of jsonMatch) {
                try {
                  const result = JSON.parse(potentialJson);
                  if (result.title && result.description) {
                    const title = result.title.trim();
                    const description = result.description.trim();

                    this.log('PR description successfully parsed from JSON');
                    this.log(`Generated title: ${title}`);
                    return { title, description };
                  }
                } catch (innerErr) {
                  // Continue to the next candidate
                }
              }
            }

            // If we got here, we didn't find a valid JSON structure with title and description
            // Try direct parsing of the whole response
            try {
              const result = JSON.parse(responseContent);
              if (result.title && result.description) {
                const title = result.title.trim();
                const description = result.description.trim();

                this.log('PR description parsed from full JSON response');
                this.log(`Generated title: ${title}`);
                return { title, description };
              }
            } catch (err) {
              this.log('Response is not valid JSON, trying fallback parsing');
            }

            // Fallback: Try to extract title and description manually
            this.log('Using fallback extraction for title and description');
            const lines = responseContent.split('\n');
            let title = '';
            let description = '';
            let descriptionStarted = false;

            for (const line of lines) {
              const trimmedLine = line.trim();

              // Skip empty lines and obvious JSON markers
              if (!trimmedLine || trimmedLine === '{' || trimmedLine === '}') {
                continue;
              }

              // If we haven't found a title yet, look for it
              if (!title && !trimmedLine.startsWith('"')) {
                // Clean potential markdown headers or JSON field indicators
                title = trimmedLine
                  .replace(/^#\s*/, '') // Remove markdown heading marker
                  .replace(/^"title"[:]\s*["']?/, '') // Remove JSON field
                  .replace(/["',]$/, ''); // Remove trailing quotes or commas
                continue;
              }

              // After finding the title, everything else is the description
              if (title && !descriptionStarted) {
                if (
                  trimmedLine.includes('description') ||
                  trimmedLine.startsWith('#') ||
                  trimmedLine.startsWith('-') ||
                  trimmedLine.startsWith('*')
                ) {
                  descriptionStarted = true;
                }
              }

              if (descriptionStarted) {
                // Exclude lines that look like JSON field names
                if (!trimmedLine.match(/^"[^"]+"\s*:/)) {
                  description += line + '\n';
                }
              }
            }

            // Fallback to simple extraction if we still don't have a title
            if (!title) {
              for (const line of lines) {
                const trimmedLine = line.trim();
                if (trimmedLine && !trimmedLine.startsWith('{') && !trimmedLine.startsWith('"')) {
                  title = trimmedLine;
                  break;
                }
              }

              // Everything else is the description
              description = responseContent.replace(title, '').trim();
            }

            this.log('Fallback parsing used for PR description');
            this.log(`Generated title: ${title}`);

            return {
              title: title || 'PR Title', // Provide default if we couldn't extract one
              description: description || responseContent, // Use full response if no description found
            };
          } catch (parseError) {
            this.logError('Error processing PR description: ' + parseError);

            // Last resort fallback
            return {
              title: 'PR Title (extraction failed)',
              description: responseContent,
            };
          }
        } catch (error) {
          this.logError('Error generating PR description: ' + error);
          if (error instanceof vscode.LanguageModelError) {
            throw new Error(`Failed to generate PR description: ${error.message} (${error.code})`);
          }
          throw new Error(
            'Failed to generate PR description: ' + (error instanceof Error ? error.message : String(error))
          );
        }
      }
    );
  }

  private static extendedPrReviewResponse(result: any): PrReviewResult {
    // Return valid response format even on parsing errors
    const fallbackResult: PrReviewResult = {
      summary: {
        assessment: 'Error while parsing review results. See raw response below.',
        strengths: [],
        criticalIssues: ['Failed to parse the Copilot response'],
        recommendations: ['Try running the review again'],
      },
      issues: [
        {
          severity: 'Error',
          category: 'Parser Error',
          description:
            'Failed to parse the response from Copilot. Raw response: ' +
            (typeof result === 'string' ? result.substring(0, 200) + '...' : 'Invalid response type'),
          filePath: '',
          suggestion: 'Try running the review again or check the output log for more details.',
        },
      ],
    };

    // Validate the response format
    if (!result?.summary?.assessment || !Array.isArray(result?.issues)) {
      return fallbackResult;
    }

    // Ensure all arrays exist even if empty
    result.summary.strengths = Array.isArray(result.summary.strengths) ? result.summary.strengths : [];
    result.summary.criticalIssues = Array.isArray(result.summary.criticalIssues) ? result.summary.criticalIssues : [];
    result.summary.recommendations = Array.isArray(result.summary.recommendations)
      ? result.summary.recommendations
      : [];

    return result;
  }

  /**
   * Review PR changes using GitHub Copilot
   */
  async reviewPrChanges(prContext: PrContext, modelFamily?: string): Promise<PrReviewResult> {
    return await vscode.window.withProgress(
      {
        location: vscode.ProgressLocation.Notification,
        title: 'Reviewing PR changes...',
        cancellable: true,
      },
      async (progress, token) => {
        let messages: vscode.LanguageModelChatMessage[] = [];
        let responseContent = '';

        try {
          this._logger.show(true);
          this.log('Starting PR review...');
          this.log(`Source branch: ${prContext.sourceBranch}`);
          this.log(`Target branch: ${prContext.targetBranch}`);
          this.log(`Commits: ${prContext.commits.length}`);
          this.log(`Files changed: ${prContext.files?.length || 'unknown'}`);

          progress.report({ increment: 20, message: 'Initializing language model...' });

          // Use provided model family or fall back to config
          const selectedModelFamily = modelFamily || ConfigService.getLanguageModelFamily();
          this.log(`Using language model family: ${selectedModelFamily}`);


          progress.report({ increment: 20, message: 'Building prompt...' });
          messages = PromptService.buildPrReviewPrompt(prContext);

          this.log('Prompt built, sending request to Copilot...');
          progress.report({ increment: 20, message: 'Analyzing code changes...' });

          // Send the request to the language model with fallback
          const response = await this.sendRequestWithFallback(messages, selectedModelFamily, token);

          // Stream and collect the response
          responseContent = '';
          let progressIncrement = 30; // Remaining progress to distribute
          let chunkCount = 0;

          this.log('Receiving streamed response...');
          for await (const fragment of response.text) {
            responseContent += fragment;
            chunkCount++;

            // Update progress every few chunks
            if (chunkCount % 5 === 0) {
              const currentIncrement = Math.min(2, progressIncrement);
              progressIncrement -= currentIncrement;
              progress.report({
                increment: currentIncrement,
                message: 'Processing analysis...',
              });
            }
          }

          this.log('Response received, parsing results...');
          progress.report({ increment: progressIncrement, message: 'Finalizing results...' });

          // Parse the JSON response
          try {
            // Extract JSON from the response
            const jsonString = this._jsonSanitizationService.extractJsonFromResponse(responseContent);

            try {
              const parsedResult = JSON.parse(jsonString);
              const result = CopilotService.extendedPrReviewResponse(parsedResult);

              this.log('PR review completed successfully');
              this.log(`Found ${result.issues.length} issues`);

              progress.report({ increment: 10, message: 'Complete!' });
              return result;
            } catch (parseError) {
              this.logError('Error parsing PR review JSON: ' + parseError);
              this.log(`Failed JSON content sample: ${jsonString.substring(0, 300)}...`);

              // Save debug information for the parsing error
              this._debugLogService.saveDebugInfo(messages, responseContent, parseError, 'pr-review');

              // Try preprocessing the JSON to handle backticks in code blocks
              try {
                const preprocessed = this._jsonSanitizationService.preprocessJsonWithCodeBlocks(jsonString);
                const parsedResult = JSON.parse(preprocessed);
                const result = CopilotService.extendedPrReviewResponse(parsedResult);

                this.log('PR review completed successfully after preprocessing');
                this.log(`Found ${result.issues.length} issues`);

                progress.report({ increment: 10, message: 'Complete!' });
                return result;
              } catch (secondError) {
                // Try a more aggressive sanitization approach
                try {
                  this.logError('Attempting aggressive JSON sanitization');
                  const sanitized = this._jsonSanitizationService.sanitizeJsonString(jsonString);
                  const parsedResult = JSON.parse(sanitized);
                  const result = CopilotService.extendedPrReviewResponse(parsedResult);

                  this.log('PR review completed successfully after sanitization');
                  this.log(`Found ${result.issues.length} issues`);

                  progress.report({ increment: 10, message: 'Complete!' });
                  return result;
                } catch (thirdError) {
                  this.logError('Error parsing PR review JSON after all attempts: ' + thirdError);
                  this.log('Falling back to error response format');

                  // Save debug information for the final parsing error
                  this._debugLogService.saveDebugInfo(messages, responseContent, thirdError, 'pr-review');

                  return CopilotService.extendedPrReviewResponse(responseContent);
                }
              }
            }
          } catch (error) {
            this.logError('Error in PR review: ' + error);

            // Save debug information for general processing error
            this._debugLogService.saveDebugInfo(messages, responseContent, error, 'pr-review');

            throw error;
          }
        } catch (error) {
          this.logError('Error reviewing PR changes: ' + error);

          // Save debug information for any other errors
          if (messages.length > 0 && responseContent) {
            this._debugLogService.saveDebugInfo(messages, responseContent, error, 'pr-review');
          }

          if (error instanceof vscode.LanguageModelError) {
            throw new Error(`Failed to review PR changes: ${error.message} (${error.code})`);
          }
          throw new Error('Failed to review PR changes: ' + (error instanceof Error ? error.message : String(error)));
        }
      }
    );
  }

  /**
   * Get a response from the Copilot API for PR review
   */
  public async getPrReviewResponse(
    prompt: vscode.LanguageModelChatMessage[],
    progressCallback?: (progress: number) => void
  ): Promise<DetailedDiffResult[]> {
    try {
      const response = await this.getChatResponse(prompt, progressCallback);
      return this.parseJsonResponse(response, prompt, 'pr-review');
    } catch (error) {
      this._logger.logError(`Error in getPrReviewResponse: ${error}`, error);
      throw error;
    }
  }

  /**
   * Get a response from the Copilot API for commit message generation
   */
  public async getCommitMessageResponse(prompt: vscode.LanguageModelChatMessage[]): Promise<string> {
    try {
      const response = await this.getChatResponse(prompt);
      return response;
    } catch (error) {
      this._logger.logError(`Error in getCommitMessageResponse: ${error}`, error);
      throw error;
    }
  }

  /**
   * Get a chat response from the Copilot API
   * @param prompt The prompt to send to the API
   * @param progressCallback Optional callback for progress updates
   * @returns The response from the API
   */
  private async getChatResponse(
    prompt: vscode.LanguageModelChatMessage[],
    progressCallback?: (progress: number) => void
  ): Promise<string> {
    try {
      // Get the configured language model family
      const modelFamily = ConfigService.getLanguageModelFamily();
      this.log(`Using language model family: ${modelFamily}`);

      // Send with fallback
      const response = await this.sendRequestWithFallback(prompt, modelFamily);

      // Stream and collect the response
      let responseContent = '';
      let chunkCount = 0;

      for await (const fragment of response.text) {
        responseContent += fragment;
        chunkCount++;

        // Call progress callback if provided
        if (progressCallback && chunkCount % 5 === 0) {
          progressCallback(Math.min(90, chunkCount));
        }
      }

      // Final progress update
      if (progressCallback) {
        progressCallback(100);
      }

      return responseContent;
    } catch (error) {
      this.logError(`Error in getChatResponse: ${error instanceof Error ? error.message : String(error)}`);
      throw error;
    }
  }

  /**
   * Parse JSON response from the Copilot API
   */
  private parseJsonResponse(
    response: string,
    prompt: vscode.LanguageModelChatMessage[],
    serviceType: string = 'llm-service'
  ): any {
    try {
      // Use the JsonSanitizationService instance to clean and parse the response
      const jsonString = this._jsonSanitizationService.extractJsonFromResponse(response);
      return JSON.parse(jsonString);
    } catch (parseError) {
      this._logger.logError(`Error parsing JSON response: ${parseError}`, parseError);

      // Save debug information for troubleshooting
      this._debugLogService.saveDebugInfo(prompt, response, parseError, serviceType);

      throw new Error(
        `Failed to parse JSON response: ${parseError instanceof Error ? parseError.message : String(parseError)}`
      );
    }
  }

  /**
   * Analyze a group of files for breaking changes
   * @param detailedDiff Detailed diff information for the files in this group
   * @param codeChanges Code changes in this group
   * @param codeUsages Code usages in this group
   * @param modelFamily Optional language model family to use
   * @returns Analysis result with breaking changes and summary
   */
  public async analyzeBreakingChangesForGroup(
    detailedDiff: DetailedDiffResult[],
    codeChanges: CodeChange[],
    codeUsages: CodeUsage[],
    modelFamily?: string
  ): Promise<{
    breakingChanges: BreakingChange[];
    summary: BreakingChangesSummary;
  }> {
    this.log('Analyzing breaking changes for file group');

    try {
      // Get the breaking changes config
      const config = ConfigService.getBreakingChangesConfig();

      // Create a context object for the prompt
      const context = {
        codeChanges,
        usages: codeUsages,
        diffInfo: JSON.stringify(detailedDiff),
        files: detailedDiff.map((diff) => ({ status: 'modified', file: diff.filePath })),
        config,
      };

      // Build the prompt using PromptService
      const messages = PromptService.buildBreakingChangesPrompt(context);

      // Get the language model
      const modelName = modelFamily || ConfigService.getLanguageModelFamily();
      this.log(`Using language model family: ${modelName}`);

      this.log('Prompt built, sending request to Copilot...');

      // Send the request to the language model with fallback
      const response = await this.sendRequestWithFallback(messages, modelName);

      // Stream and collect the response
      let responseContent = '';
      for await (const fragment of response.text) {
        responseContent += fragment;
      }

      // Parse the response
      if (!responseContent) {
        this.logError('No response from language model');
        return this.getEmptyBreakingChangesResult();
      }

      // Extract JSON from the response
      try {
        // Extract JSON from the response
        const jsonMatch = responseContent.match(/```json\n([\s\S]*?)\n```/) || responseContent.match(/({[\s\S]*})/);
        let result;

        if (jsonMatch && jsonMatch[1]) {
          const jsonContent = jsonMatch[1].trim();
          result = JSON.parse(jsonContent);
        } else {
          this.logError('Could not extract JSON from response');
          return this.getEmptyBreakingChangesResult();
        }

        // Validate the result structure
        if (!result || !result.breakingChanges || !result.summary) {
          this.logError('Invalid response structure from language model');
          return this.getEmptyBreakingChangesResult();
        }

        this.log(`Found ${result.breakingChanges.length} breaking changes in group`);
        return result;
      } catch (error) {
        // Log the error and save debug information if enabled
        this.logError(`Error parsing breaking changes response: ${error}`);

        // Save debug log if debug logging is enabled
        const breakingChangesConfig = ConfigService.getBreakingChangesConfig();
        if (breakingChangesConfig.enableDebugLogging) {
          // Save debug information to a file
          const debugInfo = {
            prompt: JSON.stringify(messages),
            context: JSON.stringify(context),
            response: responseContent,
            error: error instanceof Error ? error.message : String(error),
          };

          // Log the debug information
          this.log(`Saving debug information for breaking changes analysis error`);

          // Write debug info to file system
          const fs = require('fs');
          const path = require('path');
          const debugDir = path.join(__dirname, '..', '..', 'debug-logs');

          // Create directory if it doesn't exist
          if (!fs.existsSync(debugDir)) {
            fs.mkdirSync(debugDir, { recursive: true });
          }

          // Write debug info to file
          const timestamp = new Date().toISOString().replace(/:/g, '-');
          const debugFile = path.join(debugDir, `breaking-changes-error-${timestamp}.json`);
          fs.writeFileSync(debugFile, JSON.stringify(debugInfo, null, 2));
          this.log(`Debug information saved to ${debugFile}`);
        }

        return this.getEmptyBreakingChangesResult();
      }
    } catch (error) {
      this.logError(`Error in breaking changes analysis: ${error}`);
      return this.getEmptyBreakingChangesResult();
    }
  }

  /**
   * Get an empty breaking changes result
   */
  private getEmptyBreakingChangesResult(): {
    breakingChanges: BreakingChange[];
    summary: BreakingChangesSummary;
  } {
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
}
