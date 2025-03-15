import * as vscode from 'vscode';
import { PromptService } from './promptService';
import { ConfigService } from './configService';
import { LoggingService } from './loggingService';
import { DetailedDiffResult } from './gitService';

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

  constructor() {
    this._logger = LoggingService.getInstance();
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

          // Send the request to the language model
          const response = await model.sendRequest(messages, {}, token);

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
  async generatePrDescription(prContext: PrContext): Promise<{ title: string; description: string }> {
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

          // Get the configured language model family
          const modelFamily = ConfigService.getLanguageModelFamily();
          this.log(`Using language model family: ${modelFamily}`);

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

          progress.report({ increment: 20, message: 'Building prompt...' });

          // Get messages array from PromptService
          const messages = PromptService.buildPrDescriptionPrompt(prContext);

          this.log('Prompt built, sending request to Copilot...');
          progress.report({ increment: 30, message: 'Asking Copilot...' });

          // Send the request to the language model
          const response = await model.sendRequest(messages, {}, token);

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

          const [model] = await vscode.lm.selectChatModels({
            vendor: 'copilot',
            family: selectedModelFamily,
          });

          if (!model) {
            const errorMsg = `No suitable language model found for: ${selectedModelFamily}. Please make sure GitHub Copilot is installed and enabled.`;
            this.logError(errorMsg);
            throw new Error(errorMsg);
          }

          progress.report({ increment: 20, message: 'Building prompt...' });
          const messages = PromptService.buildPrReviewPrompt(prContext);

          this.log('Prompt built, sending request to Copilot...');
          progress.report({ increment: 20, message: 'Analyzing code changes...' });

          // Send the request to the language model
          const response = await model.sendRequest(messages, {}, token);

          // Stream and collect the response
          let responseContent = '';
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
          // Parse the JSON response
          try {
            // Find JSON object in the response
            const jsonMatch = responseContent.match(/\{[\s\S]*\}/);
            const jsonString = jsonMatch ? jsonMatch[0] : responseContent;

            const parsedResult = JSON.parse(jsonString);
            const result = CopilotService.extendedPrReviewResponse(parsedResult);

            this.log('PR review completed successfully');
            this.log(`Found ${result.issues.length} issues`);

            progress.report({ increment: 10, message: 'Complete!' });
            return result;
          } catch (parseError) {
            this.logError('Error parsing PR review JSON: ' + parseError);
            this.log(`Failed JSON content sample: ${responseContent.substring(0, 300)}...`);
            this.log('Falling back to error response format');
            return CopilotService.extendedPrReviewResponse(responseContent);
          }
        } catch (error) {
          this.logError('Error reviewing PR changes: ' + error);
          if (error instanceof vscode.LanguageModelError) {
            throw new Error(`Failed to review PR changes: ${error.message} (${error.code})`);
          }
          throw new Error('Failed to review PR changes: ' + (error instanceof Error ? error.message : String(error)));
        }
      }
    );
  }
}
