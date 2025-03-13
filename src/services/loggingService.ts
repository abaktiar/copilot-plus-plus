import * as vscode from 'vscode';

/**
 * A centralized service for logging extension messages
 */
export class LoggingService {
  private static instance: LoggingService;
  private _outputChannel: vscode.OutputChannel;

  private constructor() {
    this._outputChannel = vscode.window.createOutputChannel('Copilot++');
  }

  /**
   * Get the singleton instance of LoggingService
   */
  public static getInstance(): LoggingService {
    if (!LoggingService.instance) {
      LoggingService.instance = new LoggingService();
    }
    return LoggingService.instance;
  }

  /**
   * Get the output channel
   */
  public get outputChannel(): vscode.OutputChannel {
    return this._outputChannel;
  }

  /**
   * Log a message with timestamp and optional source
   * @param message The message to log
   * @param source Optional source identifier
   */
  public log(message: string, source?: string): void {
    const timestamp = new Date().toISOString();
    const sourcePrefix = source ? ` [${source}]` : '';
    this._outputChannel.appendLine(`[${timestamp}]${sourcePrefix} ${message}`);
  }

  /**
   * Log an error with timestamp and optional source
   * @param message The error message to log
   * @param error Optional error object for stack trace
   * @param source Optional source identifier
   */
  public logError(message: string, error?: any, source?: string): void {
    const timestamp = new Date().toISOString();
    const sourcePrefix = source ? ` [${source}]` : '';
    this._outputChannel.appendLine(`[${timestamp}]${sourcePrefix} ERROR: ${message}`);
    
    if (error) {
      if (error instanceof Error && error.stack) {
        this._outputChannel.appendLine(`Stack trace:\n${error.stack}`);
      } else {
        this._outputChannel.appendLine(`Error details: ${String(error)}`);
      }
    }
  }

  /**
   * Show the output channel
   * @param preserveFocus Whether to preserve focus (default: false)
   */
  public show(preserveFocus: boolean = false): void {
    this._outputChannel.show(preserveFocus);
  }

  /**
   * Dispose the output channel
   */
  public dispose(): void {
    this._outputChannel.dispose();
  }
}