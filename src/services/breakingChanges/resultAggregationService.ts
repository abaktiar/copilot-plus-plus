import * as vscode from 'vscode';
import { LoggingService } from '../loggingService';
import { CopilotService } from '../copilotService';
import { ConfigService } from '../configService';
import { PromptService } from '../promptService';
import { BreakingChange, BreakingChangesSummary, BreakingChangesResult } from '../breakingChangeService';

/**
 * Service responsible for aggregating results from multiple file group analyses
 */
export class BreakingChangesResultAggregationService {
  private _logger: LoggingService;
  private _copilotService: CopilotService;

  constructor() {
    this._logger = LoggingService.getInstance();
    this._copilotService = new CopilotService();
  }

  /**
   * Aggregate results from multiple file group analyses
   * @param results Array of individual group analysis results
   * @param context Original context for breaking changes analysis
   * @param modelFamily Optional language model family to use
   * @returns Aggregated breaking changes result
   */
  public async aggregateResults(
    results: Array<{
      breakingChanges: BreakingChange[];
      summary: BreakingChangesSummary;
    }>,
    context: any,
    modelFamily?: string
  ): Promise<BreakingChangesResult> {
    this.log(`Aggregating results from ${results.length} file group analyses`);

    if (results.length === 0) {
      throw new Error('No results to aggregate');
    }

    // If only one result, return it directly
    if (results.length === 1) {
      this.log('Only one result, returning directly');
      return {
        breakingChanges: results[0].breakingChanges,
        summary: results[0].summary,
      };
    }

    try {
      // Merge breaking changes from all results
      const mergedBreakingChanges = this.mergeBreakingChanges(results);

      // Generate overall summary
      const summary = await this.generateOverallSummary(results, context, modelFamily);

      // Combine into final result
      const aggregatedResult: BreakingChangesResult = {
        breakingChanges: mergedBreakingChanges,
        summary,
      };

      this.log('Successfully aggregated results');
      return aggregatedResult;
    } catch (error) {
      this.logError('Error aggregating results', error);
      throw error;
    }
  }

  /**
   * Merge breaking changes from multiple results, removing duplicates
   * @param results Array of individual group analysis results
   * @returns Merged array of breaking changes
   */
  private mergeBreakingChanges(
    results: Array<{
      breakingChanges: BreakingChange[];
      summary: BreakingChangesSummary;
    }>
  ): BreakingChange[] {
    // Collect all breaking changes
    const allBreakingChanges = results.flatMap((result) => result.breakingChanges || []);

    // Create a map to track unique breaking changes
    const uniqueBreakingChanges = new Map<string, BreakingChange>();

    // Process each breaking change
    allBreakingChanges.forEach((breakingChange) => {
      // Create a key based on file path, change type, and description
      const key = `${breakingChange.changeLocation.filePath}:${breakingChange.changeType}:${breakingChange.description}`;

      // If this is a new unique breaking change or has more details than existing one, add it
      if (
        !uniqueBreakingChanges.has(key) ||
        breakingChange.affectedLocations.length > (uniqueBreakingChanges.get(key)?.affectedLocations.length || 0)
      ) {
        uniqueBreakingChanges.set(key, breakingChange);
      } else if (uniqueBreakingChanges.has(key)) {
        // Merge affected locations if this is a duplicate
        const existing = uniqueBreakingChanges.get(key)!;
        const existingLocations = new Set(existing.affectedLocations.map((loc) => `${loc.filePath}:${loc.lineNumber}`));

        // Add new affected locations that don't exist in the current set
        breakingChange.affectedLocations.forEach((location) => {
          const locationKey = `${location.filePath}:${location.lineNumber}`;
          if (!existingLocations.has(locationKey)) {
            existing.affectedLocations.push(location);
          }
        });

        // Update the breaking change with merged affected locations
        uniqueBreakingChanges.set(key, existing);
      }
    });

    // Convert map back to array and sort by severity (critical first)
    const sortedBreakingChanges = Array.from(uniqueBreakingChanges.values()).sort((a, b) => {
      const severityOrder = { critical: 0, high: 1, medium: 2, low: 3 };
      return severityOrder[a.severity] - severityOrder[b.severity];
    });

    return sortedBreakingChanges;
  }

  /**
   * Generate an overall summary based on all results
   * @param results Array of individual group analysis results
   * @param context Original context for breaking changes analysis
   * @param modelFamily Optional language model family to use
   * @returns Overall summary
   */
  private async generateOverallSummary(
    results: Array<{
      breakingChanges: BreakingChange[];
      summary: BreakingChangesSummary;
    }>,
    context: any,
    modelFamily?: string
  ): Promise<BreakingChangesSummary> {
    this.log('Generating overall summary from individual results');

    // Calculate total counts across all results
    let totalBreakingChanges = 0;
    let criticalCount = 0;
    let highCount = 0;
    let mediumCount = 0;
    let lowCount = 0;

    // Get unique breaking changes to avoid double-counting
    const uniqueBreakingChanges = this.mergeBreakingChanges(results);

    // Count by severity
    uniqueBreakingChanges.forEach((breakingChange) => {
      totalBreakingChanges++;
      switch (breakingChange.severity) {
        case 'critical':
          criticalCount++;
          break;
        case 'high':
          highCount++;
          break;
        case 'medium':
          mediumCount++;
          break;
        case 'low':
          lowCount++;
          break;
      }
    });

    // Create the summary
    const summary: BreakingChangesSummary = {
      totalBreakingChanges,
      criticalCount,
      highCount,
      mediumCount,
      lowCount,
    };

    return summary;
  }

  /**
   * Extract directory structure from context
   * @param context Context for breaking changes analysis
   * @returns Formatted directory structure
   */
  private extractDirectoryStructure(context: any): string {
    if (!context.files || !Array.isArray(context.files)) {
      return 'No directory structure available';
    }

    // Extract directories from file paths
    const directories = new Set<string>();
    context.files.forEach((file: any) => {
      if (file.file) {
        const filePath = file.file;
        const directory = filePath.substring(0, filePath.lastIndexOf('/'));
        if (directory) {
          directories.add(directory);
        }
      }
    });

    // Format directory structure
    return Array.from(directories).sort().join('\n');
  }

  /**
   * Log message to output channel
   */
  private log(message: string): void {
    this._logger.log(message, 'BreakingChangesResultAggregationService');
  }

  /**
   * Log error to output channel
   */
  private logError(message: string, error?: any): void {
    this._logger.logError(message, error, 'BreakingChangesResultAggregationService');
  }
}
