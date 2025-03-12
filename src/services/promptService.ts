import * as vscode from 'vscode';
import { ConfigService, CommitMessageConfig } from './configService';

export class PromptService {
    private static readonly COMMIT_INTRO = 'Review the following git command output to understand the changes you are about to generate a commit message for.';

    private static readonly COMMIT_INSTRUCTION = `Provide an informative commit message for only the code changes outlined in the shared git diff output.
If provided, the title of the commit message must align with the style of the shared previous commit titles.
{COMMIT_STYLE_INSTRUCTION}
{TICKET_INSTRUCTION}
Do not enclose the suggested commit message in backticks. Skip preamble. Only respond with the commit message.`;

    private static readonly CONVENTIONAL_STYLE = 'Use conventional commit format: <type>(<scope>): <description> where type is one of feat, fix, docs, style, refactor, test, or chore.';

    private static readonly GITMOJI_STYLE = 'Use gitmoji style with an appropriate emoji prefix based on the type of change, e.g., ✨ for new features, 🐛 for bug fixes.';

    private static readonly CUSTOM_STYLE = 'The commit message should strictly adhere to the commit format from the shared git commit template.';

    private static readonly TICKET_INSTRUCTION = 'Include the ticket number "{TICKET}" at the beginning of the commit message in square brackets.';

    public static buildPrompt(context: {
        files: any[];
        diff: string;
        branch?: string;
        ticketNumber?: string;
        commitTemplate?: string;
    }): vscode.LanguageModelChatMessage[] {
        // Get configuration
        const config = ConfigService.getCommitMessageConfig();
        
        // Build the context message
        const filesContext = context.files.map(f => `${f.status} ${f.file}`).join('\n');
        const contextMessage = `
Git changes context:

Current branch: ${context.branch || 'unknown'}
${context.ticketNumber ? `Ticket number: ${context.ticketNumber}` : ''}

Files changed:
${filesContext}

Changes (git diff):
${context.diff}

Previous commits style (if available):
${context.commitTemplate || 'Not available'}`;

        // Determine commit style instruction based on config
        const commitStyleInstruction = this.getCommitStyleInstruction(config, context.commitTemplate);
        
        // Add ticket instruction if applicable
        const ticketInstruction = context.ticketNumber && config.includeTicketNumber
            ? this.TICKET_INSTRUCTION.replace('{TICKET}', context.ticketNumber)
            : '';

        // Create the messages array
        return [
            vscode.LanguageModelChatMessage.User(this.COMMIT_INTRO),
            vscode.LanguageModelChatMessage.User(contextMessage),
            vscode.LanguageModelChatMessage.User(
                this.COMMIT_INSTRUCTION
                    .replace('{COMMIT_STYLE_INSTRUCTION}', commitStyleInstruction)
                    .replace('{TICKET_INSTRUCTION}', ticketInstruction)
            ),
        ];
    }

    /**
     * Get the appropriate commit style instruction based on user configuration
     */
    private static getCommitStyleInstruction(config: CommitMessageConfig, commitTemplate?: string): string {
        switch (config.commitStyle) {
            case 'gitmoji':
                return this.GITMOJI_STYLE;
            case 'custom':
                return commitTemplate ? this.CUSTOM_STYLE : this.CONVENTIONAL_STYLE;
            case 'conventional':
            default:
                return this.CONVENTIONAL_STYLE;
        }
    }
}