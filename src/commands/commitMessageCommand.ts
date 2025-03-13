import * as vscode from 'vscode';
import { GitService } from '../services/gitService';
import { CopilotService } from '../services/copilotService';

export function registerCommitMessageCommand(context: vscode.ExtensionContext) {
    const gitService = new GitService();
    const copilotService = new CopilotService();
    
    const disposable = vscode.commands.registerCommand('copilot-plus-plus.generateCommitMessage', async () => {
        try {
            const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
            if (!workspaceRoot) {
                throw new Error('No workspace folder open');
            }

            const context = await gitService.getCommitContext(workspaceRoot);
            const message = await copilotService.generateCommitMessage(context);
            
            if (message) {
                const repo = await gitService.getGitRepo();
                if (repo) {
                    repo.inputBox.value = message;
                }
            }
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            vscode.window.showErrorMessage(`Failed to generate commit message: ${errorMessage}`);
        }
    });

    context.subscriptions.push(disposable);
}