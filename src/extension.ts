import * as vscode from 'vscode';
import { registerCommitMessageCommand } from './commands/commitMessageCommand';
import { registerPrReviewCommand } from './commands/prReviewCommand';
import { registerPrDescriptionCommand } from './commands/prDescriptionPanel';
import { registerBreakingChangesCommand } from './commands/breakingChangesCommand';
import { LoggingService } from './services/loggingService';
import { ConfigService } from './services/configService';
// Keep track of view provider removed - using standalone panels now

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
}
