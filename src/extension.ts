import * as vscode from 'vscode';
import { GitService } from './services/gitService';
import { CopilotService } from './services/copilotService';

// Create an output channel for the extension
const outputChannel = vscode.window.createOutputChannel('Copilot Plus Plus');

export function activate(context: vscode.ExtensionContext) {
  // Add visible notification on activation
  vscode.window.showInformationMessage('Copilot Plus Plus extension is now active!');

  outputChannel.appendLine('Congratulations, your extension "copilot-plus-plus" is now active!');
  outputChannel.show(); // Force the output channel to show
  console.log('Congratulations, your extension "copilot-plus-plus" is now active!');

  const gitService = new GitService();
  const copilotService = new CopilotService();

  // Add a simple test command that's easy to invoke
  const testCommand = vscode.commands.registerCommand('copilot-plus-plus.helloWorld', () => {
    vscode.window.showInformationMessage('Hello from Copilot Plus Plus!');
    outputChannel.appendLine('Hello World command executed');
    outputChannel.show();
  });
  context.subscriptions.push(testCommand);

  // Register the generate commit message command
  const disposable = vscode.commands.registerCommand('copilot-plus-plus.generateCommitMessage', async () => {
    try {
      outputChannel.appendLine('Generating commit message...');

      // Show a loading indicator
      const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
      statusBarItem.text = '$(sync~spin) Generating commit message...';
      statusBarItem.show();

      // Get the Git repository
      const repo = await gitService.getGitRepo();
      if (!repo) {
        vscode.window.showErrorMessage('No Git repository found');
        outputChannel.appendLine('Error: No Git repository found');
        statusBarItem.hide();
        return;
      }

      // Get workspace root folder
      const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
      if (!workspaceRoot) {
        vscode.window.showErrorMessage('No workspace folder open');
        outputChannel.appendLine('Error: No workspace folder open');
        statusBarItem.hide();
        return;
      }

      // Get context for the commit
      outputChannel.appendLine('Getting commit context...');
      const commitContext = await gitService.getCommitContext(workspaceRoot);

      // Generate commit message using Copilot
      outputChannel.appendLine('Calling Copilot to generate commit message...');
      const commitMessage = await copilotService.generateCommitMessage(commitContext);

      // Set the generated message in the SCM input box
      // Get the input box from the repository's sourceControl
      const sourceControl = repo.inputBox;
      if (!sourceControl) {
        throw new Error('Could not access the Git source control input box');
      }
      sourceControl.value = commitMessage;

      outputChannel.appendLine(`Generated commit message: ${commitMessage}`);
      statusBarItem.hide();
      vscode.window.showInformationMessage('Commit message generated!');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      outputChannel.appendLine(`Error: ${errorMessage}`);
      vscode.window.showErrorMessage(`Error: ${errorMessage}`);
    }
  });

  context.subscriptions.push(disposable);

  // Register the output channel to be disposed when extension is deactivated
  context.subscriptions.push(outputChannel);
}

export function deactivate() {
  outputChannel.appendLine('Deactivating Copilot Plus Plus extension');
}
