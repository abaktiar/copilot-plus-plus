import * as vscode from 'vscode';
import { registerCommitMessageCommand } from './commands/commitMessageCommand';
import { registerPrReviewCommand } from './commands/prReviewCommand';
import { registerPrDescriptionCommand } from './commands/prDescriptionPanel';
import { registerBreakingChangesCommand } from './commands/breakingChangesCommand';
import { LoggingService } from './services/loggingService';
import { ConfigService } from './services/configService';
import { CopilotPlusPlusViewProvider } from './commands/CopilotPlusPlusViewProvider';

// Keep track of view provider
let viewProvider: CopilotPlusPlusViewProvider | undefined;

export function activate(context: vscode.ExtensionContext) {
  // Get the logging service instance
  const logger = LoggingService.getInstance();
  logger.log('Copilot++ extension activated', 'Extension');

  // Register commands
  registerCommitMessageCommand(context);
  registerPrReviewCommand(context);
  registerPrDescriptionCommand(context);
  registerBreakingChangesCommand(context);

  // Register debug command to log available models
  const logModelsCommand = vscode.commands.registerCommand('copilot-plus-plus.logAvailableModels', async () => {
    const logger = LoggingService.getInstance();
    logger.log('Logging available language models...', 'Extension');

    try {
      await ConfigService.logAvailableModels();
      vscode.window.showInformationMessage('Available models logged to console. Check Developer Tools for details.');
    } catch (error) {
      logger.logError('Failed to log available models', error, 'Extension');
      vscode.window.showErrorMessage('Failed to log available models. See console for details.');
    }
  });
  context.subscriptions.push(logModelsCommand);

  // Create and register the PR Description view provider
  try {
    if (!viewProvider) {
      viewProvider = new CopilotPlusPlusViewProvider(context.extensionUri);
      context.subscriptions.push(
        vscode.window.registerWebviewViewProvider(CopilotPlusPlusViewProvider.viewType, viewProvider, {
          webviewOptions: {
            retainContextWhenHidden: true,
          },
        })
      );

      logger.log('PR Description view provider registered successfully', 'Extension');
    }
  } catch (error) {
    logger.logError('Failed to register PR Description view provider', error, 'Extension');
    vscode.window.showErrorMessage('Failed to initialize PR Description view');
  }

  // Register the logging service for disposal
  context.subscriptions.push({
    dispose: () => {
      logger.log('Disposing logging service', 'Extension');
      logger.dispose();
    },
  });
}

export function deactivate() {
  const logger = LoggingService.getInstance();
  logger.log('Copilot++ extension deactivated', 'Extension');
  viewProvider = undefined;
}
