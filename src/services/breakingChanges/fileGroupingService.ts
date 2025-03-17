import * as vscode from 'vscode';
import { LoggingService } from '../loggingService';
import { ConfigService } from '../configService';
import { DetailedDiffResult } from '../gitService';
import { CodeChange, CodeUsage } from '../breakingChangeService';

/**
 * Interface for a file group that will be processed together
 */
export interface BreakingChangesFileGroup {
  id: string;
  files: string[];
  detailedDiff: DetailedDiffResult[];
  codeChanges: CodeChange[];
  codeUsages: CodeUsage[];
  tokenEstimate: number;
  priority: number;
}

/**
 * Service responsible for intelligently grouping files for breaking changes analysis
 */
export class BreakingChangesFileGroupingService {
  private _logger: LoggingService;

  // Token estimation constants
  private static readonly TOKEN_PER_LINE = 4;
  private static readonly TOKEN_PER_USAGE = 10;
  private static readonly API_PRIORITY_MULTIPLIER = 2;

  // Get max tokens per group from configuration
  private getMaxTokensPerGroup(): number {
    return ConfigService.getBreakingChangesConfig().maxTokensPerGroup || 16000;
  }

  constructor() {
    this._logger = LoggingService.getInstance();
  }

  /**
   * Group files based on related functionality, API surface, and dependencies
   * @param detailedDiff Detailed diff information from GitService
   * @param codeChanges Code changes extracted from the diff
   * @param codeUsages Code usages found in the codebase
   * @returns Array of file groups for processing
   */
  public groupFiles(
    detailedDiff: DetailedDiffResult[],
    codeChanges: CodeChange[],
    codeUsages: CodeUsage[]
  ): BreakingChangesFileGroup[] {
    const maxTokens = this.getMaxTokensPerGroup();
    this.log(`Grouping files for breaking changes analysis with max ${maxTokens} tokens per group`);

    if (!detailedDiff || detailedDiff.length === 0) {
      this.log('No diff data provided, returning empty group list');
      return [];
    }

    // Step 1: Estimate token usage for each file
    const fileTokenEstimates = this.estimateTokenUsage(detailedDiff, codeChanges, codeUsages);

    // Log token estimates for visibility
    let totalTokens = 0;
    fileTokenEstimates.forEach((tokens, file) => {
      totalTokens += tokens;
      this.log(`File ${file}: ~${tokens} tokens`);
    });
    this.log(`Total estimated tokens across all files: ${totalTokens}`);

    // Step 2: Organize files by path/directory
    const filesByPath = this.organizeFilesByPath(detailedDiff);

    // Step 3: Identify API files and dependencies
    const apiFiles = this.identifyApiFiles(codeChanges, codeUsages);
    const fileDependencies = this.buildFileDependencyGraph(codeChanges, codeUsages);

    // Step 4: Create optimized groups based on token limits and API importance
    let groups = this.createOptimizedGroups(
      filesByPath,
      fileTokenEstimates,
      detailedDiff,
      codeChanges,
      codeUsages,
      apiFiles,
      fileDependencies
    );

    // Step 5: Balance groups to ensure they fit within token limits
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
   * Identify files that contain public APIs or interfaces
   */
  private identifyApiFiles(codeChanges: CodeChange[], codeUsages: CodeUsage[]): Set<string> {
    const apiFiles = new Set<string>();

    // Files with changes to functions, classes, or interfaces are likely API files
    codeChanges.forEach((change) => {
      if (
        change.symbolType === 'function' ||
        change.symbolType === 'class' ||
        change.symbolType === 'interface' ||
        change.symbolType === 'enum'
      ) {
        apiFiles.add(change.filePath);
      }
    });

    // Files that are used by many other files are likely API files
    const fileUsageCount = new Map<string, number>();
    codeUsages.forEach((usage) => {
      const count = fileUsageCount.get(usage.filePath) || 0;
      fileUsageCount.set(usage.filePath, count + 1);
    });

    // Files with more than 3 usages are considered API files
    fileUsageCount.forEach((count, file) => {
      if (count > 3) {
        apiFiles.add(file);
      }
    });

    return apiFiles;
  }

  /**
   * Build a dependency graph between files
   */
  private buildFileDependencyGraph(codeChanges: CodeChange[], codeUsages: CodeUsage[]): Map<string, Set<string>> {
    const dependencies = new Map<string, Set<string>>();

    // Initialize dependency sets for all files
    const allFiles = new Set<string>();
    codeChanges.forEach((change) => allFiles.add(change.filePath));
    codeUsages.forEach((usage) => allFiles.add(usage.filePath));

    allFiles.forEach((file) => {
      dependencies.set(file, new Set<string>());
    });

    // Build dependencies based on usages
    codeUsages.forEach((usage) => {
      // Find the file that defines the symbol being used
      const definingFile = codeChanges.find((change) => change.symbolName === usage.symbolName)?.filePath;
      if (definingFile && definingFile !== usage.filePath) {
        // Add dependency: usage.filePath depends on definingFile
        const deps = dependencies.get(usage.filePath) || new Set<string>();
        deps.add(definingFile);
        dependencies.set(usage.filePath, deps);
      }
    });

    return dependencies;
  }

  /**
   * Estimate token usage for each file based on diff content and code usages
   */
  private estimateTokenUsage(
    detailedDiff: DetailedDiffResult[],
    codeChanges: CodeChange[],
    codeUsages: CodeUsage[]
  ): Map<string, number> {
    const fileTokenEstimates = new Map<string, number>();

    // Group diff chunks by file path
    const diffByFile = new Map<string, DetailedDiffResult[]>();
    detailedDiff.forEach((diff) => {
      if (!diffByFile.has(diff.filePath)) {
        diffByFile.set(diff.filePath, []);
      }
      diffByFile.get(diff.filePath)?.push(diff);
    });

    // Estimate tokens for each file based on diff content
    diffByFile.forEach((diffs, filePath) => {
      let lineCount = 0;

      // Count lines in each diff chunk
      diffs.forEach((diff) => {
        lineCount += diff.hunk.lines.length;
        lineCount += diff.contextBefore.length;
        lineCount += diff.contextAfter.length;
      });

      // Estimate tokens based on line count
      let tokenEstimate = lineCount * BreakingChangesFileGroupingService.TOKEN_PER_LINE;

      // Add tokens for code usages related to this file
      const fileUsages = codeUsages.filter((usage) => usage.filePath === filePath);
      tokenEstimate += fileUsages.length * BreakingChangesFileGroupingService.TOKEN_PER_USAGE;

      fileTokenEstimates.set(filePath, tokenEstimate);
    });

    return fileTokenEstimates;
  }

  /**
   * Create optimized groups based on token limits, API importance, and dependencies
   */
  private createOptimizedGroups(
    filesByPath: Map<string, string[]>,
    fileTokenEstimates: Map<string, number>,
    detailedDiff: DetailedDiffResult[],
    codeChanges: CodeChange[],
    codeUsages: CodeUsage[],
    apiFiles: Set<string>,
    fileDependencies: Map<string, Set<string>>
  ): BreakingChangesFileGroup[] {
    const groups: BreakingChangesFileGroup[] = [];
    let groupId = 1;
    const maxTokensPerGroup = this.getMaxTokensPerGroup();

    // First, handle files that exceed the token limit individually
    const oversizedFiles: string[] = [];
    const normalFiles: string[] = [];

    // Collect all files and sort them by priority (API files first, then by size)
    const allFiles: string[] = [];
    filesByPath.forEach((files) => {
      files.forEach((file) => {
        allFiles.push(file);
      });
    });

    // Sort files by API importance and then by token count
    allFiles.sort((a, b) => {
      const aIsApi = apiFiles.has(a) ? 1 : 0;
      const bIsApi = apiFiles.has(b) ? 1 : 0;

      // First sort by API importance
      if (aIsApi !== bIsApi) {
        return bIsApi - aIsApi;
      }

      // Then by token count
      return (fileTokenEstimates.get(b) || 0) - (fileTokenEstimates.get(a) || 0);
    });

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
      const fileCodeChanges = codeChanges.filter((change) => change.filePath === file);
      const fileCodeUsages = codeUsages.filter((usage) => usage.filePath === file);

      groups.push({
        id: `group-${groupId++}`,
        files: [file],
        detailedDiff: this.filterDiffByFiles(detailedDiff, [file]),
        codeChanges: fileCodeChanges,
        codeUsages: fileCodeUsages,
        tokenEstimate: fileTokenEstimates.get(file) || 0,
        priority: this.calculatePriority([file], fileTokenEstimates, apiFiles),
      });
    });

    // Group remaining files based on dependencies and directory structure
    const processedFiles = new Set<string>(oversizedFiles);
    const remainingFiles = normalFiles.filter((file) => !processedFiles.has(file));

    // Process API files first with their dependencies
    const apiFilesArray = Array.from(apiFiles).filter((file) => remainingFiles.includes(file));

    for (const apiFile of apiFilesArray) {
      if (processedFiles.has(apiFile)) {
        continue;
      }

      // Start a new group with this API file
      const groupFiles = [apiFile];
      let groupTokens = fileTokenEstimates.get(apiFile) || 0;
      processedFiles.add(apiFile);

      // Find files that depend on this API file
      remainingFiles.forEach((file) => {
        if (processedFiles.has(file)) {
          return;
        }

        const deps = fileDependencies.get(file);
        if (deps && deps.has(apiFile)) {
          const fileTokens = fileTokenEstimates.get(file) || 0;

          // Add to group if it fits within token limit
          if (groupTokens + fileTokens <= maxTokensPerGroup) {
            groupFiles.push(file);
            groupTokens += fileTokens;
            processedFiles.add(file);
          }
        }
      });

      // Create a group for this API file and its dependents
      if (groupFiles.length > 0) {
        const groupCodeChanges = codeChanges.filter((change) => groupFiles.includes(change.filePath));
        const groupCodeUsages = codeUsages.filter((usage) => groupFiles.includes(usage.filePath));

        groups.push({
          id: `group-${groupId++}`,
          files: groupFiles,
          detailedDiff: this.filterDiffByFiles(detailedDiff, groupFiles),
          codeChanges: groupCodeChanges,
          codeUsages: groupCodeUsages,
          tokenEstimate: groupTokens,
          priority: this.calculatePriority(groupFiles, fileTokenEstimates, apiFiles),
        });
      }
    }

    // Process remaining files by directory
    const directoryGroups = new Map<string, string[]>();
    const directoryTokens = new Map<string, number>();

    // Initialize directory groups
    filesByPath.forEach((files, directory) => {
      directoryGroups.set(directory, []);
      directoryTokens.set(directory, 0);
    });

    // Assign remaining files to their directory groups if they fit
    remainingFiles
      .filter((file) => !processedFiles.has(file))
      .forEach((file) => {
        const directory = this.getDirectory(file);
        const fileTokens = fileTokenEstimates.get(file) || 0;
        const currentDirTokens = directoryTokens.get(directory) || 0;

        if (currentDirTokens + fileTokens <= maxTokensPerGroup) {
          // File fits in its directory group
          directoryGroups.get(directory)?.push(file);
          directoryTokens.set(directory, currentDirTokens + fileTokens);
          processedFiles.add(file);
        } else {
          // Directory would exceed token limit, create a new directory group
          const existingFiles = directoryGroups.get(directory) || [];
          if (existingFiles.length > 0) {
            // Create a group from existing files
            const groupCodeChanges = codeChanges.filter((change) => existingFiles.includes(change.filePath));
            const groupCodeUsages = codeUsages.filter((usage) => existingFiles.includes(usage.filePath));

            groups.push({
              id: `group-${groupId++}`,
              files: [...existingFiles],
              detailedDiff: this.filterDiffByFiles(detailedDiff, existingFiles),
              codeChanges: groupCodeChanges,
              codeUsages: groupCodeUsages,
              tokenEstimate: directoryTokens.get(directory) || 0,
              priority: this.calculatePriority(existingFiles, fileTokenEstimates, apiFiles),
            });
          }

          // Reset the directory group
          directoryGroups.set(directory, [file]);
          directoryTokens.set(directory, fileTokens);
          processedFiles.add(file);
        }
      });

    // Create groups from any remaining directory groups
    directoryGroups.forEach((files, directory) => {
      if (files.length > 0) {
        const groupCodeChanges = codeChanges.filter((change) => files.includes(change.filePath));
        const groupCodeUsages = codeUsages.filter((usage) => files.includes(usage.filePath));

        groups.push({
          id: `group-${groupId++}`,
          files: [...files],
          detailedDiff: this.filterDiffByFiles(detailedDiff, files),
          codeChanges: groupCodeChanges,
          codeUsages: groupCodeUsages,
          tokenEstimate: directoryTokens.get(directory) || 0,
          priority: this.calculatePriority(files, fileTokenEstimates, apiFiles),
        });
      }
    });

    // Optimize: Merge small groups if they can fit together
    return this.mergeSmallGroups(groups, maxTokensPerGroup);
  }

  /**
   * Merge small groups to reduce the number of LLM calls
   */
  private mergeSmallGroups(groups: BreakingChangesFileGroup[], maxTokensPerGroup: number): BreakingChangesFileGroup[] {
    if (groups.length <= 1) {
      return groups;
    }

    // Sort groups by token count (ascending)
    groups.sort((a, b) => a.tokenEstimate - b.tokenEstimate);

    const mergedGroups: BreakingChangesFileGroup[] = [];
    let currentGroup: BreakingChangesFileGroup | null = null;

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
        currentGroup.codeChanges = [...currentGroup.codeChanges, ...group.codeChanges];
        currentGroup.codeUsages = [...currentGroup.codeUsages, ...group.codeUsages];
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
  private balanceGroups(groups: BreakingChangesFileGroup[]): BreakingChangesFileGroup[] {
    // Sort groups by priority (descending)
    return groups.sort((a, b) => b.priority - a.priority);
  }

  /**
   * Calculate priority score for a group based on API importance and change volume
   */
  private calculatePriority(files: string[], fileTokenEstimates: Map<string, number>, apiFiles: Set<string>): number {
    // Base priority is the total token count
    let priority = files.reduce((sum, file) => sum + (fileTokenEstimates.get(file) || 0), 0);

    // Boost priority for groups containing API files
    const apiFileCount = files.filter((file) => apiFiles.has(file)).length;
    if (apiFileCount > 0) {
      priority *= BreakingChangesFileGroupingService.API_PRIORITY_MULTIPLIER;
    }

    return priority;
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
    this._logger.log(message, 'BreakingChangesFileGroupingService');
  }
}
