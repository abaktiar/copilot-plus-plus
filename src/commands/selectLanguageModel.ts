import * as vscode from 'vscode';
import { getAvailableCopilotModels } from '../services/modelService';
import { LoggingService } from '../services/loggingService';

export async function registerSelectLanguageModelCommand(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'copilot-plus-plus.selectLanguageModel',
    async () => {
      const logger = LoggingService.getInstance();
      try {
        const models = await getAvailableCopilotModels();
        if (!models.length) {
          vscode.window.showWarningMessage(
            'No Copilot models detected. Ensure GitHub Copilot is installed and enabled.'
          );
          return;
        }

        const picks = models.map((m) => ({
          label: m.usageTag ? `${m.name} — ${m.usageTag}` : m.name,
          description: m.id,
          detail: [
            m.supportsVision ? 'vision' : undefined,
            m.contextWindow ? `~${m.contextWindow} ctx` : undefined,
          ]
            .filter(Boolean)
            .join(' · '),
          modelId: m.id,
        }));

        const selection = await vscode.window.showQuickPick(picks, {
          title: 'Select Language Model (VS Code supported only)',
          placeHolder: 'Choose a model family to use',
          ignoreFocusOut: true,
        });
        if (!selection) return;

        await vscode.workspace
          .getConfiguration('copilotPlusPlus')
          .update('languageModel', selection.modelId, true);

        vscode.window.showInformationMessage(
          `Copilot++ model set to: ${selection.description}`
        );
      } catch (err) {
        logger.logError('Failed to select language model', err, 'SelectModel');
        vscode.window.showErrorMessage('Failed to update language model.');
      }
    }
  );

  context.subscriptions.push(disposable);
}
