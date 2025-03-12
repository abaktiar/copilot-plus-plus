import * as vscode from 'vscode';

interface GitContext {
    files: any[];
    diff: string;
    branch?: string;
    ticketNumber?: string;
}

export class PromptService {
    private static readonly COMMIT_INTRO = 'Review the following git command output to understand the changes you are about to generate a commit message for.';

    private static readonly COMMIT_INSTRUCTION = `Provide an informative commit message for only the code changes outlined in the shared git diff output.
If provided, the title of the commit message must align with the style of the shared previous commit titles.
{COMMIT_TEMPLATE}
{TICKET_INSTRUCTION}
Do not enclose the suggested commit message in backticks. Skip preamble. Only respond with the commit message.`;

    private static readonly COMMIT_TEMPLATE = 'The commit message should strictly adhere to the commit format from the shared git commit template.';

    private static readonly COMMIT_TEMPLATE_NOT_FOUND = 'The commit message should adhere to the conventional commit format';

    private static readonly TICKET_INSTRUCTION = 'Include the ticket number "{TICKET}" at the beginning of the commit message in square brackets.';

    public static buildPrompt(context: GitContext, commitTemplate?: string): vscode.LanguageModelChatMessage[] {
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
${commitTemplate || 'Not available'}`;

        const ticketInstruction = context.ticketNumber 
            ? this.TICKET_INSTRUCTION.replace('{TICKET}', context.ticketNumber)
            : '';

        // Create the messages array
        return [
            vscode.LanguageModelChatMessage.User(this.COMMIT_INTRO),
            vscode.LanguageModelChatMessage.User(contextMessage),
            vscode.LanguageModelChatMessage.User(
                this.COMMIT_INSTRUCTION
                    .replace('{COMMIT_TEMPLATE}', commitTemplate ? this.COMMIT_TEMPLATE : this.COMMIT_TEMPLATE_NOT_FOUND)
                    .replace('{TICKET_INSTRUCTION}', ticketInstruction)
            ),
        ];
    }
}