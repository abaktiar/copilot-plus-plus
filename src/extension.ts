import * as vscode from 'vscode';
import { CopilotPlusPlusViewProvider } from './commands/CopilotPlusPlusViewProvider';
import { registerCommitMessageCommand } from './commands/commitMessageCommand';
import { registerPrReviewCommand } from './commands/prReviewCommand';
import { LoggingService } from './services/loggingService';

// Keep track of view provider
let viewProvider: CopilotPlusPlusViewProvider | undefined;

export function activate(context: vscode.ExtensionContext) {
  // Get the logging service instance
  const logger = LoggingService.getInstance();
  logger.log('Copilot++ extension activated', 'Extension');

  // Register commands
  registerCommitMessageCommand(context);
  registerPrReviewCommand(context);

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