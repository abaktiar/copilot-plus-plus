import * as vscode from 'vscode';
import { GitService } from '../services/gitService';
import { LoggingService } from '../services/loggingService';
import { BreakingChangesPanel } from './breakingChangesPanel';

/**
 * Register the breaking changes analysis command
 */
export function registerBreakingChangesCommand(context: vscode.ExtensionContext): void {
  const logger = LoggingService.getInstance();
  const gitService = new GitService();

  // Register the command
  const disposable = vscode.commands.registerCommand('copilot-plus-plus.analyzeBreakingChanges', async () => {
    try {
      logger.log('Breaking changes analysis command invoked', 'BreakingChangesCommand');

      const workspacePath = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
      if (!workspacePath) {
        throw new Error('No workspace folder found');
      }

      if (!(await gitService.isGitRepository(workspacePath))) {
        throw new Error('Not a git repository');
      }

      // Show the breaking changes panel
      BreakingChangesPanel.createOrShow(vscode.Uri.file(workspacePath));
    } catch (error) {
      logger.logError(`Error analyzing breaking changes: ${error}`, error, 'BreakingChangesCommand');
      vscode.window.showErrorMessage(
        `Error analyzing breaking changes: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  });

  context.subscriptions.push(disposable);
  logger.log('Breaking changes command registered', 'BreakingChangesCommand');
}
