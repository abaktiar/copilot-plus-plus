import * as vscode from 'vscode';
import { GitService, DetailedDiffResult } from '../gitService';
import { CopilotService } from '../copilotService';
import { LoggingService } from '../loggingService';
import { ConfigService } from '../configService';
import { FileGroupingService, FileGroup } from './fileGroupingService';
import { ReviewQueueManager, ReviewProgressUpdate } from './reviewQueueManager';
import { ResultAggregationService } from './resultAggregationService';

/**
 * Service responsible for coordinating the enhanced PR review process
 */
export class PrReviewService {
  private _logger: LoggingService;
  private _gitService: GitService;
  private _copilotService: CopilotService;
  private _fileGroupingService: FileGroupingService;
  private _reviewQueueManager: ReviewQueueManager;
  private _resultAggregationService: ResultAggregationService;

  constructor() {
    this._logger = LoggingService.getInstance();
    this._gitService = new GitService();
    this._copilotService = new CopilotService();
    this._fileGroupingService = new FileGroupingService();
    this._reviewQueueManager = new ReviewQueueManager();
    this._resultAggregationService = new ResultAggregationService();
  }

  /**
   * Review PR changes between two branches with enhanced chunking for large PRs
   * @param sourceBranch Source branch name (contains changes)
   * @param targetBranch Target branch name (to merge into)
   * @param modelFamily Optional language model family to use
   * @param progressCallback Optional callback for progress updates
   * @returns PR review result
   */
  public async reviewPrChanges(
    sourceBranch: string,
    targetBranch: string,
    modelFamily?: string,
    progressCallback?: (update: ReviewProgressUpdate) => void
  ): Promise<any> {
    return await vscode.window.withProgress(
      {
        location: vscode.ProgressLocation.Notification,
        title: 'Reviewing PR changes...',
        cancellable: true,
      },
      async (progress, token) => {
        try {
          this._logger.show(true);
          this.log('Starting enhanced PR review...');
          this.log(`Source branch: ${sourceBranch}`);
          this.log(`Target branch: ${targetBranch}`);

          progress.report({ increment: 10, message: 'Fetching diff data...' });

          // Get diff data with enhanced line information
          const [commits, diff, files, detailedDiff] = await Promise.all([
            this._gitService.getCommitsBetweenBranches(sourceBranch, targetBranch),
            this._gitService.getDiffBetweenBranches(sourceBranch, targetBranch),
            this._gitService.getFilesBetweenBranches(sourceBranch, targetBranch),
            this._gitService.getDetailedDiffBetweenBranches(sourceBranch, targetBranch),
          ]);

          if (!commits.length && !files.length) {
            throw new Error('No changes detected between the selected branches');
          }

          this.log(`Found ${files.length} changed files`);

          // Create PR context
          const prContext = {
            sourceBranch,
            targetBranch,
            commits,
            diff,
            files,
            detailedDiff,
          };

          progress.report({ increment: 10, message: 'Analyzing file changes...' });

          // Group files for processing
          const fileGroups = this._fileGroupingService.groupFiles(detailedDiff);
          this.log(`Created ${fileGroups.length} file groups for processing`);

          // If only one small group, use the standard review process
          if (fileGroups.length === 1 && fileGroups[0].tokenEstimate < 6000) {
            this.log('Small PR detected, using standard review process');
            progress.report({ increment: 10, message: 'Processing review...' });
            return await this._copilotService.reviewPrChanges(prContext, modelFamily);
          }

          // For larger PRs, use the chunked review process
          this.log('Large PR detected, using chunked review process');
          progress.report({ increment: 10, message: 'Initializing review queue...' });

          // Initialize the review queue
          this._reviewQueueManager.initializeQueue(fileGroups, prContext, modelFamily);

          // Set up progress callback
          if (progressCallback) {
            this._reviewQueueManager.onProgress(progressCallback);
          }

          // Set up internal progress reporting
          this._reviewQueueManager.onProgress((update) => {
            const percent = Math.floor((update.completedCount / update.totalCount) * 60);

            // Create a progress message that includes the group number
            let progressMessage = '';
            if (update.currentlyProcessing && update.currentGroupIndex) {
              progressMessage = `[${update.currentGroupIndex}/${update.totalCount}] Processing ${update.currentlyProcessing}...`;
            } else {
              progressMessage = `Processed ${update.completedCount} of ${update.totalCount} file groups`;
            }

            progress.report({
              increment: percent > 0 ? percent / update.totalCount : 0,
              message: progressMessage,
            });
          });

          // Process the queue and wait for results
          const reviewPromise = new Promise<any[]>((resolve) => {
            this._reviewQueueManager.onComplete((results) => {
              resolve(results);
            });
            this._reviewQueueManager.startProcessing();
          });

          // Wait for all reviews to complete
          const results = await reviewPromise;

          // Aggregate results
          progress.report({ increment: 10, message: 'Aggregating results...' });
          const aggregatedResult = await this._resultAggregationService.aggregateResults(
            results,
            prContext,
            modelFamily
          );

          this.log('PR review completed successfully');
          return aggregatedResult;
        } catch (error) {
          this.logError('Error reviewing PR changes', error);
          throw error;
        }
      }
    );
  }

  /**
   * Log message to output channel
   */
  private log(message: string): void {
    this._logger.log(message, 'PrReviewService');
  }

  /**
   * Log error to output channel
   */
  private logError(message: string, error?: any): void {
    this._logger.logError(message, error, 'PrReviewService');
  }
}
