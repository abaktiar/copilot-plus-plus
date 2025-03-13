import * as vscode from 'vscode';
import { PrReviewPanel } from './prReviewPanel';

/**
 * Registers the PR Review command
 * @param context Extension context
 */
export function registerPrReviewCommand(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('copilot-plus-plus.reviewPrChanges', () => {
        try {
            PrReviewPanel.createOrShow(context.extensionUri);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            vscode.window.showErrorMessage(`Failed to open PR Review panel: ${errorMessage}`);
        }
    });
    
    context.subscriptions.push(disposable);
}