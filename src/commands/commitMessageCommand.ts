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

        // Get commit context from git service
        const context = await gitService.getCommitContext(workspaceRoot);

        // Check if there are any staged files before proceeding
        if (!context.files || context.files.length === 0) {
          const stageFilesAction = 'How to stage files';
          const result = await vscode.window.showInformationMessage(
            'No staged files found. You need to stage your changes before generating a commit message.',
            stageFilesAction
          );

          // If user clicks on the action, show help about staging
          if (result === stageFilesAction) {
            vscode.env.openExternal(
              vscode.Uri.parse(
                'https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository#_staging_modified_files'
              )
            );
          }
          return;
        }

        let repo = await gitService.getGitRepo();
        if (!repo) {
          throw new Error('No Git repository found');
        }

        let animationFrame = 0;
        const animationInterval = setInterval(() => {
          const dots = '.'.repeat(animationFrame % 4);
          repo.inputBox.value = `Working on it${dots}`;
          animationFrame++;
        }, 300);

        try {
          // Generate commit message using the copilot service
          const message = await copilotService.generateCommitMessage(context);

          clearInterval(animationInterval);

          if (message) {
            repo.inputBox.value = message;
            vscode.window.showInformationMessage('Commit message generated and applied!');
          }
        } catch (error) {
          clearInterval(animationInterval);
          throw error;
        }
      } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        vscode.window.showErrorMessage(`Failed to generate commit message: ${errorMessage}`);
      }
    });
    
    context.subscriptions.push(disposable);
}