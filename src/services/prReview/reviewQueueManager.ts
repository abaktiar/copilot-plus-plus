import * as vscode from 'vscode';
import { FileGroup } from './fileGroupingService';
import { CopilotService } from '../copilotService';
import { LoggingService } from '../loggingService';
import { ConfigService } from '../configService';

/**
 * Status of a file group in the review queue
 */
export enum ReviewStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed',
}

/**
 * Interface for a file group in the review queue with status
 */
export interface QueuedFileGroup extends FileGroup {
  status: ReviewStatus;
  result?: any;
  error?: string;
}

/**
 * Interface for review queue progress updates
 */
export interface ReviewProgressUpdate {
  queueStatus: QueuedFileGroup[];
  completedCount: number;
  totalCount: number;
  currentlyProcessing?: string;
  currentGroupIndex?: number;
}

/**
 * Service responsible for managing the queue of file groups for PR review
 */
export class ReviewQueueManager {
  private _logger: LoggingService;
  private _copilotService: CopilotService;
  private _queue: QueuedFileGroup[] = [];
  private _isProcessing: boolean = false;
  private _progressCallback?: (update: ReviewProgressUpdate) => void;
  private _completionCallback?: (results: any[]) => void;
  private _prContext: any;
  private _modelFamily?: string;
  private _currentGroupIndex: number = 0;

  // Rate limiting
  private static readonly MAX_CONCURRENT_REVIEWS = 1; // Process one group at a time
  private static readonly RATE_LIMIT_DELAY = 1000; // 1 second delay between requests

  constructor() {
    this._logger = LoggingService.getInstance();
    this._copilotService = new CopilotService();
  }

  /**
   * Initialize the queue with file groups
   * @param fileGroups Array of file groups to process
   * @param prContext PR context information
   * @param modelFamily Optional language model family to use
   */
  public initializeQueue(fileGroups: FileGroup[], prContext: any, modelFamily?: string): void {
    this._queue = fileGroups.map((group) => ({
      ...group,
      status: ReviewStatus.PENDING,
    }));

    this._prContext = prContext;
    this._modelFamily = modelFamily;

    this.log(`Initialized review queue with ${this._queue.length} file groups`);
  }

  /**
   * Set callback for progress updates
   * @param callback Function to call with progress updates
   */
  public onProgress(callback: (update: ReviewProgressUpdate) => void): void {
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
    this.log('Starting to process review queue');
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
      if (group.status === ReviewStatus.PENDING) {
        this._currentGroupIndex = groupIndex + 1;
        await this.processGroup(group);

        // Add a small delay between requests to avoid rate limiting
        await new Promise((resolve) => setTimeout(resolve, ReviewQueueManager.RATE_LIMIT_DELAY));
      }
      groupIndex++;
    }

    // Check if all groups are processed
    const allCompleted = this._queue.every(
      (group) => group.status === ReviewStatus.COMPLETED || group.status === ReviewStatus.FAILED
    );

    if (allCompleted) {
      this.log('All file groups processed');

      // Collect all successful results
      const results = this._queue
        .filter((group) => group.status === ReviewStatus.COMPLETED && group.result)
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
  private async processGroup(group: QueuedFileGroup): Promise<void> {
    try {
      // Update status to processing
      group.status = ReviewStatus.PROCESSING;

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

      // Create a modified PR context with only the files in this group
      const groupContext = {
        ...this._prContext,
        detailedDiff: group.detailedDiff,
      };

      // Call Copilot service to review this group
      this.log(`Processing group ${group.id} with ${group.files.length} files`);
      const result = await this._copilotService.reviewPrChanges(groupContext, this._modelFamily);

      // Update group with result
      group.result = result;
      group.status = ReviewStatus.COMPLETED;
      this.log(`Completed processing group ${group.id}`);
    } catch (error) {
      // Update group with error
      group.status = ReviewStatus.FAILED;
      group.error = error instanceof Error ? error.message : String(error);
      this.logError(`Failed to process group ${group.id}`, error);
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
      (group) => group.status === ReviewStatus.COMPLETED || group.status === ReviewStatus.FAILED
    ).length;

    const update: ReviewProgressUpdate = {
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
    this._logger.log(message, 'ReviewQueueManager');
  }

  /**
   * Log error to output channel
   */
  private logError(message: string, error?: any): void {
    this._logger.logError(message, error, 'ReviewQueueManager');
  }
}
