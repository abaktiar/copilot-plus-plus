import * as vscode from 'vscode';
import { PrReviewPanel } from './prReviewPanel';
import { GitService } from '../services/gitService';

/**
 * Registers the PR Review command
 * @param context Extension context
 */
export function registerPrReviewCommand(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('copilot-plus-plus.reviewPrChanges', async () => {
      try {
        // Create the PR Review panel
        PrReviewPanel.createOrShow(context.extensionUri);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        vscode.window.showErrorMessage(`Failed to open PR Review panel: ${errorMessage}`);
      }
    });
    
    context.subscriptions.push(disposable);
}