import * as vscode from 'vscode';

export async function registerResetLanguageModelCommand(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'copilot-plus-plus.resetLanguageModel',
    async () => {
      await vscode.workspace
        .getConfiguration('copilotPlusPlus')
        // Passing undefined removes the user/workspace override -> resets to default
        .update('languageModel', undefined, true);
      vscode.window.showInformationMessage('Copilot++ model reset to default.');
    }
  );
  context.subscriptions.push(disposable);
}

