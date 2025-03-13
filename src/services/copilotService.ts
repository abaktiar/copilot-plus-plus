import * as vscode from 'vscode';
import { PromptService } from './promptService';
import { ConfigService } from './configService';

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

export class CopilotService {
    /**
     * Generate commit message using GitHub Copilot
     */
    async generateCommitMessage(commitContext: CommitContext): Promise<string> {
        try {
            // Get the configured language model family
            const modelFamily = ConfigService.getLanguageModelFamily();
            
            // Select the configured Copilot model
            const [model] = await vscode.lm.selectChatModels({ 
                vendor: 'copilot',
                family: modelFamily
            });

            if (!model) {
                throw new Error(`No suitable language model found for: ${modelFamily}. Please make sure GitHub Copilot is installed and enabled.`);
            }

            // Build the commit template using recent commits if available
            const commitTemplate = commitContext.commitTemplate || 
                (commitContext.recentCommits && commitContext.recentCommits.length > 0 
                    ? 'Recent commit style examples:\n' + commitContext.recentCommits.join('\n')
                    : undefined);

            // Get messages array from PromptService
            const messages = PromptService.buildPrompt({
                ...commitContext,
                commitTemplate
            });

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

    /**
     * Generate PR description using GitHub Copilot
     */
    async generatePrDescription(prContext: PrContext): Promise<{title: string, description: string}> {
        try {
            // Get the configured language model family
            const modelFamily = ConfigService.getLanguageModelFamily();
            
            // Select the configured Copilot model
            const [model] = await vscode.lm.selectChatModels({ 
                vendor: 'copilot',
                family: modelFamily
            });

            if (!model) {
                throw new Error(`No suitable language model found for: ${modelFamily}. Please make sure GitHub Copilot is installed and enabled.`);
            }

            // Get messages array from PromptService
            const messages = PromptService.buildPrDescriptionPrompt(prContext);

            // Send the request to the language model
            const response = await model.sendRequest(messages, {}, new vscode.CancellationTokenSource().token);

            // Stream and collect the response
            let responseContent = '';
            for await (const fragment of response.text) {
                responseContent += fragment;
            }

            // Parse the JSON response
            try {
                // Find JSON object in the response
                const jsonMatch = responseContent.match(/\{[\s\S]*\}/);
                const jsonString = jsonMatch ? jsonMatch[0] : responseContent;
                
                const result = JSON.parse(jsonString);
                
                if (!result.title || !result.description) {
                    throw new Error('Invalid response format');
                }
                
                return {
                    title: result.title.trim(),
                    description: result.description.trim()
                };
            } catch (parseError) {
                console.error('Error parsing PR description JSON:', parseError);
                
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
                
                return { title, description };
            }
        } catch (error) {
            console.error('Error generating PR description:', error);
            if (error instanceof vscode.LanguageModelError) {
                throw new Error(`Failed to generate PR description: ${error.message} (${error.code})`);
            }
            throw new Error('Failed to generate PR description: ' + (error instanceof Error ? error.message : String(error)));
        }
    }
}
