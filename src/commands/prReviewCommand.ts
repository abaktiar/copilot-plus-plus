import * as vscode from 'vscode';
import { GitService } from '../services/gitService';
import { PrReviewPanel } from './prReviewPanel';
import { LoggingService } from '../services/loggingService';

export class PrReviewCommand {
  private _logger: LoggingService;
  private _gitService: GitService;

  constructor() {
    this._logger = LoggingService.getInstance();
    this._gitService = new GitService();
  }

  public async execute() {
    try {
      const workspacePath = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
      if (!workspacePath) {
        throw new Error('No workspace folder found');
      }

      if (!(await this._gitService.isGitRepository(workspacePath))) {
        throw new Error('Not a git repository');
      }

      // Show the review panel
      PrReviewPanel.createOrShow(vscode.Uri.file(workspacePath));
    } catch (error) {
      vscode.window.showErrorMessage(
        'Failed to initialize PR review: ' + (error instanceof Error ? error.message : String(error))
      );
    }
  }
}

/**
 * Registers the PR Review command
 * @param context Extension context
 */
export function registerPrReviewCommand(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('copilot-plus-plus.reviewPrChanges', async () => {
    const prReviewCommand = new PrReviewCommand();
    await prReviewCommand.execute();
  });

  context.subscriptions.push(disposable);
}