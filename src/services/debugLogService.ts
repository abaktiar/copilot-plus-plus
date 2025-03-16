import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { LoggingService } from './loggingService';
import { ConfigService } from './configService';

/**
 * Service for handling debug logging and error information capture
 */
export class DebugLogService {
  private static _instance: DebugLogService;
  private _logger: LoggingService;
  private _debugLogDir: string | null = null;

  private constructor() {
    this._logger = LoggingService.getInstance();
    // Only initialize the debug log directory if needed
    // We'll create it on-demand when saving debug info
  }

  /**
   * Get the singleton instance of DebugLogService
   */
  public static getInstance(): DebugLogService {
    if (!DebugLogService._instance) {
      DebugLogService._instance = new DebugLogService();
    }
    return DebugLogService._instance;
  }

  /**
   * Check if debug logging is enabled in the configuration
   * @param serviceType The type of service to check configuration for
   * @returns True if debug logging is enabled, false otherwise
   */
  private isDebugLoggingEnabled(serviceType: string): boolean {
    if (serviceType === 'pr-review') {
      return ConfigService.getPrReviewConfig().enableDebugLogging;
    }
    // For other service types, default to false
    // In the future, we can add configuration for other services
    return false;
  }

  /**
   * Initialize debug log directory if it doesn't exist
   * @returns True if directory was initialized successfully, false otherwise
   */
  private initializeDebugLogDir(): boolean {
    if (this._debugLogDir) {
      return true; // Already initialized
    }

    try {
      const extensionContext = vscode.extensions.getExtension('albaktiar.copilot-plus-plus')?.extensionUri;
      if (extensionContext) {
        const logDir = path.join(extensionContext.fsPath, 'debug-logs');
        if (!fs.existsSync(logDir)) {
          fs.mkdirSync(logDir, { recursive: true });
        }
        this._debugLogDir = logDir;
        this.log(`Debug log directory initialized at: ${logDir}`);
        return true;
      }
    } catch (error) {
      this.logError(`Failed to initialize debug log directory: ${error}`);
    }
    return false;
  }

  /**
   * Save debug information to file when errors occur
   * @param prompt The prompt sent to the LLM
   * @param response The raw response from the LLM
   * @param error The error that occurred
   * @param serviceType The type of service that encountered the error (e.g., 'pr-review', 'commit-message')
   */
  public saveDebugInfo(prompt: any[], response: string, error: any, serviceType: string = 'llm-service'): void {
    // Check if debug logging is enabled for this service type
    if (!this.isDebugLoggingEnabled(serviceType)) {
      this.log(`Debug logging is disabled for ${serviceType}, skipping debug info save`);
      return;
    }

    // Initialize the debug log directory on-demand
    if (!this.initializeDebugLogDir()) {
      this.logError('Cannot save debug info: failed to initialize debug log directory');
      return;
    }

    try {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const errorType = error instanceof Error ? error.constructor.name : 'UnknownError';
      const filename = `${serviceType}-error-${errorType}-${timestamp}`;

      // Save prompt
      const promptPath = path.join(this._debugLogDir!, `${filename}-prompt.json`);
      fs.writeFileSync(promptPath, JSON.stringify(prompt, null, 2), 'utf8');

      // Save response
      const responsePath = path.join(this._debugLogDir!, `${filename}-response.txt`);
      fs.writeFileSync(responsePath, response, 'utf8');

      // Save error details
      const errorPath = path.join(this._debugLogDir!, `${filename}-error.txt`);
      const errorDetails =
        error instanceof Error ? `${error.name}: ${error.message}\n${error.stack || ''}` : String(error);
      fs.writeFileSync(errorPath, errorDetails, 'utf8');

      this.log(`Debug information saved to ${this._debugLogDir}`);
      this.log(`Prompt: ${promptPath}`);
      this.log(`Response: ${responsePath}`);
      this.log(`Error: ${errorPath}`);
    } catch (saveError) {
      this.logError(`Failed to save debug information: ${saveError}`);
    }
  }

  /**
   * Log message to the output channel
   */
  private log(message: string): void {
    this._logger.log(message, 'DebugLogService');
  }

  /**
   * Log error to the output channel
   */
  private logError(error: string | Error): void {
    const errorMessage = error instanceof Error ? error.message : String(error);
    this._logger.logError(errorMessage, error, 'DebugLogService');
  }
}
