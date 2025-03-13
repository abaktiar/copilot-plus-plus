import * as vscode from 'vscode';
import { CopilotPlusPlusViewProvider } from './commands/CopilotPlusPlusViewProvider';
import { registerCommitMessageCommand } from './commands/commitMessageCommand';

let viewProvider: CopilotPlusPlusViewProvider | undefined;

export function activate(context: vscode.ExtensionContext) {
    // Register the commit message command
    registerCommitMessageCommand(context);

    // Create and register the PR Description view provider
    try {
        if (!viewProvider) {
            viewProvider = new CopilotPlusPlusViewProvider(context.extensionUri);
            context.subscriptions.push(
                vscode.window.registerWebviewViewProvider(
                    CopilotPlusPlusViewProvider.viewType,
                    viewProvider,
                    {
                        webviewOptions: {
                            retainContextWhenHidden: true
                        }
                    }
                )
            );
        }
    } catch (error) {
        console.error('Failed to register PR Description view provider:', error);
        vscode.window.showErrorMessage('Failed to initialize PR Description view');
    }
}

export function deactivate() {
    viewProvider = undefined;
}
