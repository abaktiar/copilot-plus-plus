import * as vscode from 'vscode';
import { ConfigService, CommitMessageConfig, PrDescriptionConfig } from './configService';

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

    // PR Description prompt templates
    private static readonly PR_DESCRIPTION_INTRO = 'Review the following git information to understand the changes between branches for a pull request description generation.';

    private static readonly PR_DESCRIPTION_INSTRUCTION = `Generate a comprehensive pull request description based on the provided git diff and commit information.
The description should include:
1. A clear, descriptive title that summarizes the changes
2. A detailed explanation of what was changed and why
{PR_STYLE_INSTRUCTION}
{TECHNICAL_INSTRUCTION}
{GROUP_COMMITS_INSTRUCTION}

Format the response as a JSON object with two fields:
{
  "title": "PR title here",
  "description": "Full PR description in markdown format here"
}`;

    private static readonly PR_DESCRIPTION_DETAILED = 'Create a detailed PR description with sections for Purpose, Approach, Technical Details, and Testing if applicable.';

    private static readonly PR_DESCRIPTION_CONCISE = 'Create a concise PR description that briefly summarizes the changes in a few sentences.';

    private static readonly PR_DESCRIPTION_CUSTOM = 'The PR description should match the style of provided examples in the repository.';
    
    private static readonly PR_TECHNICAL_INSTRUCTION = 'Include a "Technical Details" section that summarizes the key files changed and the nature of those changes.';
    
    private static readonly PR_GROUP_COMMITS_INSTRUCTION = 'Group related commits by their type (e.g., features, bug fixes, refactoring) in the PR description.';

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
     * Build prompt messages for PR description generation
     */
    public static buildPrDescriptionPrompt(context: {
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
    }): vscode.LanguageModelChatMessage[] {
        // Get configuration
        const config = ConfigService.getPrDescriptionConfig();
        
        // Format commits for display
        const commitsFormatted = context.commits.map(c => 
            `Hash: ${c.hash.substring(0, 7)}\nAuthor: ${c.author}\nDate: ${c.date}\nSubject: ${c.subject}\nBody: ${c.body}`
        ).join('\n\n');
        
        // Format files if available
        const filesFormatted = context.files && context.files.length > 0
            ? context.files.map(f => `${f.status} ${f.file}`).join('\n')
            : 'File list not available';
        
        // Build the context message
        const contextMessage = `
Pull Request Context:

Source Branch: ${context.sourceBranch}
Target Branch: ${context.targetBranch}

Commits (${context.commits.length}):
${commitsFormatted || 'No commits found between branches'}

Files Changed:
${filesFormatted}

Changes (git diff - truncated if large):
${context.diff.length > 10000 ? context.diff.substring(0, 10000) + '\n... (diff truncated)' : context.diff}
`;

        // Determine PR description style instruction based on config
        const prStyleInstruction = this.getPrDescriptionStyleInstruction(config);
        
        // Add technical details instruction if enabled
        const technicalInstruction = config.includeTechnicalDetails
            ? this.PR_TECHNICAL_INSTRUCTION
            : '';
        
        // Add group commits instruction if enabled
        const groupCommitsInstruction = config.groupCommitsByType && context.commits.length > 1
            ? this.PR_GROUP_COMMITS_INSTRUCTION
            : '';

        // Create the messages array
        return [
            vscode.LanguageModelChatMessage.User(this.PR_DESCRIPTION_INTRO),
            vscode.LanguageModelChatMessage.User(contextMessage),
            vscode.LanguageModelChatMessage.User(
                this.PR_DESCRIPTION_INSTRUCTION
                    .replace('{PR_STYLE_INSTRUCTION}', prStyleInstruction)
                    .replace('{TECHNICAL_INSTRUCTION}', technicalInstruction)
                    .replace('{GROUP_COMMITS_INSTRUCTION}', groupCommitsInstruction)
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

    /**
     * Get the appropriate PR description style instruction based on user configuration
     */
    private static getPrDescriptionStyleInstruction(config: PrDescriptionConfig): string {
        switch (config.style) {
            case 'concise':
                return this.PR_DESCRIPTION_CONCISE;
            case 'custom':
                return this.PR_DESCRIPTION_CUSTOM;
            case 'detailed':
            default:
                return this.PR_DESCRIPTION_DETAILED;
        }
    }
}