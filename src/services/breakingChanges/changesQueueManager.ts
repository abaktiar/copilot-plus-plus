import * as vscode from 'vscode';
import { BreakingChangesFileGroup } from './fileGroupingService';
import { CopilotService } from '../copilotService';
import { LoggingService } from '../loggingService';
import { BreakingChange, BreakingChangesSummary } from '../breakingChangeService';

/**
 * Status of a file group in the changes queue
 */
export enum BreakingChangesStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

/**
 * Interface for a file group in the changes queue with status
 */
export interface QueuedBreakingChangesGroup extends BreakingChangesFileGroup {
  status: BreakingChangesStatus;
  result?: {
    breakingChanges: BreakingChange[];
    summary: BreakingChangesSummary;
  };
  error?: string;
}

/**
 * Interface for changes queue progress updates
 */
export interface BreakingChangesProgressUpdate {
  queueStatus: QueuedBreakingChangesGroup[];
  completedCount: number;
  totalCount: number;
  currentlyProcessing?: string;
  currentGroupIndex?: number;
}

/**
 * Service responsible for managing the queue of file groups for breaking changes analysis
 */
export class BreakingChangesQueueManager {
  private _logger: LoggingService;
  private _copilotService: CopilotService;
  private _queue: QueuedBreakingChangesGroup[] = [];
  private _isProcessing: boolean = false;
  private _progressCallback?: (update: BreakingChangesProgressUpdate) => void;
  private _completionCallback?: (results: any[]) => void;
  private _context: any;
  private _modelFamily?: string;
  private _currentGroupIndex: number = 0;

  // Rate limiting
  private static readonly MAX_CONCURRENT_ANALYSES = 1; // Process one group at a time
  private static readonly RATE_LIMIT_DELAY = 1000; // 1 second delay between requests

  constructor() {
    this._logger = LoggingService.getInstance();
    this._copilotService = new CopilotService();
  }

  /**
   * Initialize the queue with file groups
   * @param fileGroups Array of file groups to process
   * @param context Context information for breaking changes analysis
   * @param modelFamily Optional language model family to use
   */
  public initializeQueue(fileGroups: BreakingChangesFileGroup[], context: any, modelFamily?: string): void {
    this._queue = fileGroups.map((group) => ({
      ...group,
      status: BreakingChangesStatus.PENDING,
    }));

    this._context = context;
    this._modelFamily = modelFamily;

    this.log(`Initialized breaking changes queue with ${this._queue.length} file groups`);
  }

  /**
   * Set callback for progress updates
   * @param callback Function to call with progress updates
   */
  public onProgress(callback: (update: BreakingChangesProgressUpdate) => void): void {
    this._progressCallback = callback;
  }

  /**
   * Set callback for queue completion
   * @param callback Function to call when all groups are processed
   */
  public onComplete(callback: (results: any[]) => void): void {
    this._completionCallback = callback;
  }

  /**
   * Start processing the queue
   */
  public async startProcessing(): Promise<void> {
    if (this._isProcessing) {
      this.log('Queue is already being processed');
      return;
    }

    this._isProcessing = true;
    this.log('Starting to process breaking changes queue');
    this.sendProgressUpdate();

    try {
      await this.processQueue();
    } catch (error) {
      this.logError('Error processing queue', error);
    } finally {
      this._isProcessing = false;
    }
  }

  /**
   * Process all groups in the queue
   */
  private async processQueue(): Promise<void> {
    // Process groups in order of priority
    let groupIndex = 0;
    for (const group of this._queue) {
      if (group.status === BreakingChangesStatus.PENDING) {
        this._currentGroupIndex = groupIndex + 1;
        await this.processGroup(group);

        // Add a small delay between requests to avoid rate limiting
        await new Promise((resolve) => setTimeout(resolve, BreakingChangesQueueManager.RATE_LIMIT_DELAY));
      }
      groupIndex++;
    }

    // Check if all groups are processed
    const allCompleted = this._queue.every(
      (group) => group.status === BreakingChangesStatus.COMPLETED || group.status === BreakingChangesStatus.FAILED
    );

    if (allCompleted) {
      this.log('All file groups processed');

      // Collect all successful results
      const results = this._queue
        .filter((group) => group.status === BreakingChangesStatus.COMPLETED && group.result)
        .map((group) => group.result);

      // Call completion callback if set
      if (this._completionCallback) {
        this._completionCallback(results);
      }
    }
  }

  /**
   * Process a single file group
   * @param group File group to process
   */
  private async processGroup(group: QueuedBreakingChangesGroup): Promise<void> {
    try {
      // Update status to processing
      group.status = BreakingChangesStatus.PROCESSING;

      // Create a more concise file list for the progress message
      let fileDisplay = '';
      if (group.files.length === 1) {
        fileDisplay = group.files[0];
      } else if (group.files.length <= 3) {
        fileDisplay = group.files.join(', ');
      } else {
        // Show first file and count of remaining files
        fileDisplay = `${group.files[0]} and ${group.files.length - 1} other files`;
      }

      this.sendProgressUpdate(fileDisplay);

      // Create a modified context with only the files in this group
      const groupContext = {
        ...this._context,
        detailedDiff: group.detailedDiff,
        codeChanges: group.codeChanges,
        codeUsages: group.codeUsages,
      };

      // Call Copilot service to analyze this group
      this.log(`Processing group ${group.id} with ${group.files.length} files`);

      // Call the actual CopilotService to analyze breaking changes
      try {
        this.log(
          `Sending breaking changes analysis request to Copilot for group with ${groupContext.codeChanges.length} changes`
        );

        // Use the CopilotService to analyze breaking changes
        const result = await this._copilotService.analyzeBreakingChangesForGroup(
          groupContext.detailedDiff,
          groupContext.codeChanges,
          groupContext.codeUsages,
          this._modelFamily
        );

        this.log(`Received breaking changes analysis result with ${result.breakingChanges.length} breaking changes`);
        group.result = result;
        group.status = BreakingChangesStatus.COMPLETED;
        this.log(`Completed processing group ${group.id}`);
      } catch (error) {
        this.logError(`Error in breaking changes analysis`, error);
        // Update group with error
        group.status = BreakingChangesStatus.FAILED;
        group.error = error instanceof Error ? error.message : String(error);
        this.logError(`Failed to process group ${group.id}`, error);
      }
    } finally {
      // Send progress update
      this.sendProgressUpdate();
    }
  }

  /**
   * Send progress update to callback
   * @param currentlyProcessing Optional name of currently processing file(s)
   */
  private sendProgressUpdate(currentlyProcessing?: string): void {
    if (!this._progressCallback) {
      return;
    }

    const completedCount = this._queue.filter(
      (group) => group.status === BreakingChangesStatus.COMPLETED || group.status === BreakingChangesStatus.FAILED
    ).length;

    const update: BreakingChangesProgressUpdate = {
      queueStatus: [...this._queue],
      completedCount,
      totalCount: this._queue.length,
      currentlyProcessing,
      currentGroupIndex: this._currentGroupIndex,
    };

    this._progressCallback(update);
  }

  /**
   * Log message to output channel
   */
  private log(message: string): void {
    this._logger.log(message, 'BreakingChangesQueueManager');
  }

  /**
   * Log error to output channel
   */
  private logError(message: string, error?: any): void {
    this._logger.logError(message, error, 'BreakingChangesQueueManager');
  }
}
