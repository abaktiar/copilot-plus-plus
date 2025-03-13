import * as vscode from 'vscode';
import { PromptService } from './promptService';
import { ConfigService } from './configService';
import { LoggingService } from './loggingService';

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
  files?: Array<{ status: string; file: string }>;
}

interface PrReviewResult {
  summary: string;
  issues: Array<{
    severity: string;
    category: string;
    description: string;
    filePath: string;
    lineNumber?: number;
    suggestion?: string;
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

          // Parse the JSON response
          try {
            // Find JSON object in the response
            const jsonMatch = responseContent.match(/\{[\s\S]*\}/);
            const jsonString = jsonMatch ? jsonMatch[0] : responseContent;

            const result = JSON.parse(jsonString);

            if (!result.title || !result.description) {
              throw new Error('Invalid response format');
            }

            const title = result.title.trim();
            const description = result.description.trim();

            this.log('PR description generated successfully');
            this.log(`Generated title: ${title}`);

            return { title, description };
          } catch (parseError) {
            this.logError('Error parsing PR description JSON: ' + parseError);

            // Fallback: Try to extract title and description manually
            const lines = responseContent.split('\n');
            let title = '';
            let description = '';

            // Find a line that looks like a title (first non-empty line that doesn't start with '{')
            for (const line of lines) {
              const trimmedLine = line.trim();
              if (trimmedLine && !trimmedLine.startsWith('{') && !trimmedLine.startsWith('"')) {
                title = trimmedLine.replace(/^#\s*/, ''); // Remove leading # if present
                break;
              }
            }

            // Everything else is the description
            description = responseContent.replace(title, '').trim();

            this.log('Fallback parsing used for PR description');
            this.log(`Generated title: ${title}`);

            return { title, description };
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

  /**
   * Review PR changes using GitHub Copilot
   */
  async reviewPrChanges(prContext: PrContext): Promise<PrReviewResult> {
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
          const messages = PromptService.buildPrReviewPrompt(prContext);
          this.log('Prompt built, sending request to Copilot...');

          progress.report({ increment: 30, message: 'Analyzing code changes...' });

          // Send the request to the language model
          const response = await model.sendRequest(messages, {}, token);

          // Stream and collect the response
          let responseContent = '';
          progress.report({ increment: 20, message: 'Receiving analysis...' });
          for await (const fragment of response.text) {
            responseContent += fragment;
          }

          progress.report({ increment: 10, message: 'Processing results...' });

          // Parse the JSON response
          try {
            // Find JSON object in the response
            const jsonMatch = responseContent.match(/\{[\s\S]*\}/);
            const jsonString = jsonMatch ? jsonMatch[0] : responseContent;
            const result = JSON.parse(jsonString) as PrReviewResult;

            if (!result.summary || !result.issues) {
              throw new Error('Invalid response format');
            }

            this.log('PR review completed successfully');
            this.log(`Found ${result.issues.length} issues`);

            return result;
          } catch (parseError) {
            this.logError('Error parsing PR review JSON: ' + parseError);

            // Fallback: Create a basic result with error information
            const fallbackResult: PrReviewResult = {
              summary: 'Error while parsing review results. See raw response below.',
              issues: [
                {
                  severity: 'Error',
                  category: 'Parser Error',
                  description:
                    'Failed to parse the response from Copilot. Raw response: ' +
                    responseContent.substring(0, 200) +
                    '...',
                  filePath: '',
                  suggestion: 'Try running the review again or check the output log for more details.',
                },
              ],
            };

            return fallbackResult;
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
