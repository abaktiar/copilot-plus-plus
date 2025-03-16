import * as vscode from 'vscode';
import { DetailedDiffResult } from '../gitService';
import { LoggingService } from '../loggingService';
import { ConfigService } from '../configService';

/**
 * Interface for a file group that will be processed together
 */
export interface FileGroup {
  id: string;
  files: string[];
  detailedDiff: DetailedDiffResult[];
  tokenEstimate: number;
  priority: number;
}

/**
 * Service responsible for intelligently grouping files for PR review
 */
export class FileGroupingService {
  private _logger: LoggingService;

  // Token estimation constants - adjust to be less conservative
  private static readonly TOKEN_PER_LINE = 4; // Reduced from 5 to be less conservative

  // Get max tokens per group from configuration
  private getMaxTokensPerGroup(): number {
    return ConfigService.getPrReviewConfig().maxTokensPerGroup;
  }

  constructor() {
    this._logger = LoggingService.getInstance();
  }

  /**
   * Group files based on related functionality, change volume, and dependencies
   * @param detailedDiff Detailed diff information from GitService
   * @returns Array of file groups for processing
   */
  public groupFiles(detailedDiff: DetailedDiffResult[]): FileGroup[] {
    const maxTokens = this.getMaxTokensPerGroup();
    this.log(`Grouping files for PR review processing with max ${maxTokens} tokens per group`);

    if (!detailedDiff || detailedDiff.length === 0) {
      this.log('No diff data provided, returning empty group list');
      return [];
    }

    // Step 1: Estimate token usage for each file
    const fileTokenEstimates = this.estimateTokenUsage(detailedDiff);

    // Log token estimates for visibility
    let totalTokens = 0;
    fileTokenEstimates.forEach((tokens, file) => {
      totalTokens += tokens;
      this.log(`File ${file}: ~${tokens} tokens`);
    });
    this.log(`Total estimated tokens across all files: ${totalTokens}`);

    // Step 2: Organize files by path/directory
    const filesByPath = this.organizeFilesByPath(detailedDiff);

    // Step 3: Create optimized groups based on token limits
    let groups = this.createOptimizedGroups(filesByPath, fileTokenEstimates, detailedDiff);

    // Step 4: Balance groups to ensure they fit within token limits
    groups = this.balanceGroups(groups);

    // Log detailed group information
    groups.forEach((group) => {
      this.log(
        `Group ${group.id}: ${group.files.length} files, ~${group.tokenEstimate} tokens (${Math.round(
          (group.tokenEstimate / maxTokens) * 100
        )}% of limit)`
      );
      group.files.forEach((file) => {
        this.log(`  - ${file}: ~${fileTokenEstimates.get(file)} tokens`);
      });
    });

    this.log(`Created ${groups.length} file groups for processing`);
    return groups;
  }

  /**
   * Organize files by their directory path
   */
  private organizeFilesByPath(detailedDiff: DetailedDiffResult[]): Map<string, string[]> {
    const filesByPath = new Map<string, string[]>();

    // Extract unique file paths
    const uniqueFilePaths = [...new Set(detailedDiff.map((diff) => diff.filePath))];

    // Group by directory
    uniqueFilePaths.forEach((filePath) => {
      const directory = this.getDirectory(filePath);
      if (!filesByPath.has(directory)) {
        filesByPath.set(directory, []);
      }
      filesByPath.get(directory)?.push(filePath);
    });

    return filesByPath;
  }

  /**
   * Get directory path from file path
   */
  private getDirectory(filePath: string): string {
    const lastSlashIndex = filePath.lastIndexOf('/');
    return lastSlashIndex > 0 ? filePath.substring(0, lastSlashIndex) : '';
  }

  /**
   * Estimate token usage for each file based on diff content
   */
  private estimateTokenUsage(detailedDiff: DetailedDiffResult[]): Map<string, number> {
    const fileTokenEstimates = new Map<string, number>();

    // Group diff chunks by file path
    const diffByFile = new Map<string, DetailedDiffResult[]>();
    detailedDiff.forEach((diff) => {
      if (!diffByFile.has(diff.filePath)) {
        diffByFile.set(diff.filePath, []);
      }
      diffByFile.get(diff.filePath)?.push(diff);
    });

    // Estimate tokens for each file
    diffByFile.forEach((diffs, filePath) => {
      let lineCount = 0;

      // Count lines in each diff chunk
      diffs.forEach((diff) => {
        lineCount += diff.hunk.lines.length;
        lineCount += diff.contextBefore.length;
        lineCount += diff.contextAfter.length;
      });

      // Estimate tokens based on line count
      const tokenEstimate = lineCount * FileGroupingService.TOKEN_PER_LINE;
      fileTokenEstimates.set(filePath, tokenEstimate);
    });

    return fileTokenEstimates;
  }

  /**
   * Create optimized groups based on token limits
   * This approach prioritizes filling groups to their capacity rather than
   * strictly adhering to directory boundaries
   */
  private createOptimizedGroups(
    filesByPath: Map<string, string[]>,
    fileTokenEstimates: Map<string, number>,
    detailedDiff: DetailedDiffResult[]
  ): FileGroup[] {
    const groups: FileGroup[] = [];
    let groupId = 1;
    const maxTokensPerGroup = this.getMaxTokensPerGroup();

    // First, handle files that exceed the token limit individually
    const oversizedFiles: string[] = [];
    const normalFiles: string[] = [];

    // Collect all files and sort them by size (largest first)
    const allFiles: string[] = [];
    filesByPath.forEach((files) => {
      files.forEach((file) => {
        allFiles.push(file);
      });
    });

    // Sort all files by token count (descending)
    allFiles.sort((a, b) => (fileTokenEstimates.get(b) || 0) - (fileTokenEstimates.get(a) || 0));

    // Separate oversized files
    allFiles.forEach((file) => {
      const tokens = fileTokenEstimates.get(file) || 0;
      if (tokens > maxTokensPerGroup) {
        oversizedFiles.push(file);
        this.log(`File ${file} exceeds token limit with ~${tokens} tokens and will be processed individually`);
      } else {
        normalFiles.push(file);
      }
    });

    // Create individual groups for oversized files
    oversizedFiles.forEach((file) => {
      groups.push({
        id: `group-${groupId++}`,
        files: [file],
        detailedDiff: this.filterDiffByFiles(detailedDiff, [file]),
        tokenEstimate: fileTokenEstimates.get(file) || 0,
        priority: this.calculatePriority([file], fileTokenEstimates),
      });
    });

    // Now create optimized groups from remaining files
    // Try to keep files from the same directory together when possible

    // First, group by directory but respect token limits
    const directoryGroups = new Map<string, string[]>();
    const directoryTokens = new Map<string, number>();

    // Initialize directory groups
    filesByPath.forEach((files, directory) => {
      directoryGroups.set(directory, []);
      directoryTokens.set(directory, 0);
    });

    // Assign normal files to their directory groups if they fit
    normalFiles.forEach((file) => {
      const directory = this.getDirectory(file);
      const fileTokens = fileTokenEstimates.get(file) || 0;
      const currentDirTokens = directoryTokens.get(directory) || 0;

      if (currentDirTokens + fileTokens <= maxTokensPerGroup) {
        // File fits in its directory group
        directoryGroups.get(directory)?.push(file);
        directoryTokens.set(directory, currentDirTokens + fileTokens);
      } else {
        // Directory would exceed token limit, create a new directory group
        const existingFiles = directoryGroups.get(directory) || [];
        if (existingFiles.length > 0) {
          // Create a group from existing files
          groups.push({
            id: `group-${groupId++}`,
            files: [...existingFiles],
            detailedDiff: this.filterDiffByFiles(detailedDiff, existingFiles),
            tokenEstimate: directoryTokens.get(directory) || 0,
            priority: this.calculatePriority(existingFiles, fileTokenEstimates),
          });
        }

        // Reset the directory group
        directoryGroups.set(directory, [file]);
        directoryTokens.set(directory, fileTokens);
      }
    });

    // Create groups from any remaining directory groups
    directoryGroups.forEach((files, directory) => {
      if (files.length > 0) {
        groups.push({
          id: `group-${groupId++}`,
          files: [...files],
          detailedDiff: this.filterDiffByFiles(detailedDiff, files),
          tokenEstimate: directoryTokens.get(directory) || 0,
          priority: this.calculatePriority(files, fileTokenEstimates),
        });
      }
    });

    // Optimize: Merge small groups if they can fit together
    return this.mergeSmallGroups(groups, maxTokensPerGroup);
  }

  /**
   * Merge small groups to reduce the number of LLM calls
   */
  private mergeSmallGroups(groups: FileGroup[], maxTokensPerGroup: number): FileGroup[] {
    if (groups.length <= 1) {
      return groups;
    }

    // Sort groups by token count (ascending)
    groups.sort((a, b) => a.tokenEstimate - b.tokenEstimate);

    const mergedGroups: FileGroup[] = [];
    let currentGroup: FileGroup | null = null;

    for (const group of groups) {
      if (!currentGroup) {
        currentGroup = { ...group };
        continue;
      }

      // Check if we can merge this group with the current one
      if (currentGroup.tokenEstimate + group.tokenEstimate <= maxTokensPerGroup) {
        // Merge groups
        currentGroup.files = [...currentGroup.files, ...group.files];
        currentGroup.detailedDiff = [...currentGroup.detailedDiff, ...group.detailedDiff];
        currentGroup.tokenEstimate += group.tokenEstimate;
        currentGroup.priority = Math.max(currentGroup.priority, group.priority);

        this.log(`Merged group ${group.id} into ${currentGroup.id}, new token count: ${currentGroup.tokenEstimate}`);
      } else {
        // Can't merge, add current group to results and start a new one
        mergedGroups.push(currentGroup);
        currentGroup = { ...group };
      }
    }

    // Add the last group if there is one
    if (currentGroup) {
      mergedGroups.push(currentGroup);
    }

    // Reassign IDs to be sequential
    mergedGroups.forEach((group, index) => {
      group.id = `group-${index + 1}`;
    });

    this.log(`Reduced from ${groups.length} to ${mergedGroups.length} groups by merging`);
    return mergedGroups;
  }

  /**
   * Balance groups to ensure they fit within token limits
   */
  private balanceGroups(groups: FileGroup[]): FileGroup[] {
    // Sort groups by priority (descending)
    return groups.sort((a, b) => b.priority - a.priority);
  }

  /**
   * Calculate priority score for a group based on change volume
   */
  private calculatePriority(files: string[], fileTokenEstimates: Map<string, number>): number {
    // Priority based on total token count (more changes = higher priority)
    return files.reduce((sum, file) => sum + (fileTokenEstimates.get(file) || 0), 0);
  }

  /**
   * Filter detailed diff to only include specified files
   */
  private filterDiffByFiles(detailedDiff: DetailedDiffResult[], files: string[]): DetailedDiffResult[] {
    return detailedDiff.filter((diff) => files.includes(diff.filePath));
  }

  /**
   * Log message to output channel
   */
  private log(message: string): void {
    this._logger.log(message, 'FileGroupingService');
  }
}
