import * as vscode from 'vscode';
import { PromptService } from './promptService';

interface CommitContext {
    diff: string;
    files: Array<{ status: string; file: string }>;
    commitTemplate?: string;
    recentCommits?: string[];
}

export class CopilotService {
    /**
     * Generate commit message using GitHub Copilot
     */
    async generateCommitMessage(commitContext: CommitContext): Promise<string> {
        try {
            // Select the Copilot GPT-4 model
            const [model] = await vscode.lm.selectChatModels({ 
                vendor: 'copilot',
                family: 'gpt-4o'
            });

            if (!model) {
                throw new Error('No suitable language model found. Please make sure GitHub Copilot is installed and enabled.');
            }

            // Build the commit template using recent commits if available
            const commitTemplate = commitContext.commitTemplate || 
                (commitContext.recentCommits && commitContext.recentCommits.length > 0 
                    ? 'Recent commit style examples:\n' + commitContext.recentCommits.join('\n')
                    : undefined);

            // Get messages array from PromptService
            const messages = PromptService.buildPrompt(commitContext, commitTemplate);

            // Send the request to the language model
            const response = await model.sendRequest(messages, {}, new vscode.CancellationTokenSource().token);

            // Stream and collect the response
            let commitMessage = '';
            for await (const fragment of response.text) {
                commitMessage += fragment;
            }

            // Clean up and return the commit message
            return commitMessage.trim();
        } catch (error) {
            console.error('Error generating commit message:', error);
            if (error instanceof vscode.LanguageModelError) {
                throw new Error(`Failed to generate commit message: ${error.message} (${error.code})`);
            }
            throw new Error('Failed to generate commit message: ' + (error instanceof Error ? error.message : String(error)));
        }
    }
}
