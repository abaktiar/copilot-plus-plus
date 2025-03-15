import * as vscode from 'vscode';
import { GitService } from '../services/gitService';
import { LoggingService } from '../services/loggingService';
import { BreakingChangesPanel } from './breakingChangesPanel';

export class BreakingChangesCommand {
  private _logger: LoggingService;
  private _gitService: GitService;
  private _extensionContext: vscode.ExtensionContext;

  constructor(context: vscode.ExtensionContext) {
    this._logger = LoggingService.getInstance();
    this._gitService = new GitService();
    this._extensionContext = context;
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

      // Show the breaking changes panel with the extension URI instead of workspace URI
      BreakingChangesPanel.createOrShow(this._extensionContext.extensionUri);
    } catch (error) {
      vscode.window.showErrorMessage(
        'Failed to initialize breaking changes detection: ' + (error instanceof Error ? error.message : String(error))
      );
    }
  }
}

/**
 * Registers the Breaking Changes command
 * @param context Extension context
 */
export function registerBreakingChangesCommand(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand('copilot-plus-plus.analyzeBreakingChanges', async () => {
    const breakingChangesCommand = new BreakingChangesCommand(context);
    await breakingChangesCommand.execute();
  });

  context.subscriptions.push(disposable);
}
