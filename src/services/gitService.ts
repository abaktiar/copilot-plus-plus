import * as vscode from 'vscode';
import { exec } from 'child_process';
import { promisify } from 'util';
import { ConfigService } from './configService';
import { LoggingService } from './loggingService';

const execAsync = promisify(exec);

interface CommitContext {
  diff: string;
  files: Array<{ status: string; file: string }>;
  commitTemplate?: string;
  recentCommits?: string[];
  branch?: string;
  ticketNumber?: string;
  timestamp?: string;
}

export class GitService {
  private _logger: LoggingService;

  constructor() {
    this._logger = LoggingService.getInstance();
  }

  /**
   * Log a message to the output channel
   */
  private log(message: string): void {
    this._logger.log(message, 'GitService');
  }

  /**
   * Log an error to the output channel
   */
  private logError(message: string, error?: any): void {
    this._logger.logError(message, error, 'GitService');
  }

  /**
   * Get the Git repository for the current workspace
   */
  async getGitRepo(): Promise<vscode.SourceControl | undefined> {
    this.log('Getting Git repository for current workspace');
    try {
      const gitExtension = vscode.extensions.getExtension('vscode.git')?.exports;
      if (!gitExtension) {
        this.logError('Git extension not found');
        return undefined;
      }

      const api = gitExtension.getAPI(1);
      if (!api) {
        this.logError('Git API not available');
        return undefined;
      }

      if (api.repositories.length === 0) {
        this.logError('No Git repositories found in workspace');
        return undefined;
      }

      this.log(`Found Git repository: ${api.repositories[0].rootUri.fsPath}`);
      return api.repositories[0];
    } catch (error) {
      this.logError('Failed to get Git repository', error);
      return undefined;
    }
  }

  /**
   * Get the commit template if configured
   */
  async getCommitTemplate(workspaceRoot: string): Promise<string | undefined> {
    this.log('Getting commit template');
    try {
      // Try to get local commit template
      const { stdout: localTemplate } = await execAsync('git config commit.template', { cwd: workspaceRoot }).catch(
        () => ({ stdout: '' })
      );
      if (localTemplate.trim()) {
        this.log('Found local commit template');
        return localTemplate.trim();
      }

      // Try to get global commit template
      const { stdout: globalTemplate } = await execAsync('git config --global commit.template', {
        cwd: workspaceRoot,
      }).catch(() => ({ stdout: '' }));

      if (globalTemplate.trim()) {
        this.log('Found global commit template');
      } else {
        this.log('No commit template found');
      }

      return globalTemplate.trim() || undefined;
    } catch (error) {
      this.logError('Error getting commit template', error);
      return undefined;
    }
  }

  /**
   * Get recent commit messages for style reference
   */
  async getRecentCommits(workspaceRoot: string, count: number = 5): Promise<string[]> {
    this.log(`Getting ${count} recent commit messages`);
    try {
      const { stdout } = await execAsync(`git log -${count} --pretty=format:%s`, { cwd: workspaceRoot });
      const commits = stdout.split('\n').filter((msg) => msg.trim());
      this.log(`Found ${commits.length} recent commits`);
      return commits;
    } catch (error) {
      this.logError('Error getting recent commits', error);
      return [];
    }
  }

  /**
   * Get the current branch name and extract ticket number
   */
  private async getBranchInfo(workspaceRoot: string): Promise<{ branch: string; ticketNumber: string | undefined }> {
    this.log('Getting branch info');
    try {
      const { stdout: branchName } = await execAsync('git rev-parse --abbrev-ref HEAD', { cwd: workspaceRoot });
      const branch = branchName.trim();
      this.log(`Current branch: ${branch}`);

      // Get ticket pattern from configuration
      const config = ConfigService.getCommitMessageConfig();
      const includeTicket = config.includeTicketNumber;

      // Only extract ticket if enabled in settings
      let ticketNumber: string | undefined = undefined;
      if (includeTicket) {
        const ticketRegex = new RegExp(config.ticketPattern);
        const ticketMatch = branch.match(ticketRegex);
        ticketNumber = ticketMatch ? ticketMatch[1] : undefined;
        if (ticketNumber) {
          this.log(`Extracted ticket number: ${ticketNumber}`);
        } else {
          this.log('No ticket number found in branch name');
        }
      }

      return { branch, ticketNumber };
    } catch (error) {
      this.logError('Error getting branch info', error);
      return { branch: 'unknown', ticketNumber: undefined };
    }
  }

  /**
   * Get commit context data to help generate meaningful commit messages
   */
  async getCommitContext(workspaceRoot: string): Promise<CommitContext> {
    this.log('Getting commit context');
    try {
      const [diffResult, filesResult, template, recentCommits, branchInfo] = await Promise.all([
        execAsync('git diff --staged', { cwd: workspaceRoot }),
        execAsync('git diff --staged --name-status', { cwd: workspaceRoot }),
        this.getCommitTemplate(workspaceRoot),
        this.getRecentCommits(workspaceRoot),
        this.getBranchInfo(workspaceRoot),
      ]);

      const changedFiles = filesResult.stdout
        .trim()
        .split('\n')
        .filter((line) => line.length > 0)
        .map((line) => {
          const [status, ...fileParts] = line.split('\t');
          const file = fileParts.join('\t');
          return { status, file };
        });

      this.log(`Found ${changedFiles.length} changed files`);

      return {
        diff: diffResult.stdout,
        files: changedFiles,
        commitTemplate: template,
        recentCommits,
        branch: branchInfo.branch,
        ticketNumber: branchInfo.ticketNumber,
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      this.logError('Error getting commit context', error);
      // Return empty but valid CommitContext on error
      return {
        diff: '',
        files: [],
      };
    }
  }

  /**
   * Get all available branches in the repository
   */
  async getAvailableBranches(): Promise<string[]> {
    this.log('Getting available branches');
    try {
      const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
      if (!workspaceRoot) {
        throw new Error('No workspace folder open');
      }

      // Get both local and remote branches
      const { stdout } = await execAsync('git branch --format="%(refname:short)" --all', { cwd: workspaceRoot });

      // Clean up branch names and filter out duplicates
      const branches = stdout
        .split('\n')
        .map((b) => b.trim().replace(/^remotes\/origin\//, '')) // Remove remote prefix
        .filter((b) => b && !b.includes('HEAD ->')) // Remove empty lines and HEAD pointers
        .filter((b, i, self) => self.indexOf(b) === i); // Remove duplicates

      this.log(`Found ${branches.length} branches`);
      return branches;
    } catch (error) {
      this.logError('Error getting available branches', error);
      return [];
    }
  }

  /**
   * Get commits between two branches
   * @param sourceBranch Source branch name (contains changes)
   * @param targetBranch Target branch name (to merge into)
   */
  async getCommitsBetweenBranches(
    sourceBranch: string,
    targetBranch: string
  ): Promise<
    Array<{
      hash: string;
      subject: string;
      body: string;
      author: string;
      date: string;
    }>
  > {
    this.log(`Getting commits between branches: ${sourceBranch} and ${targetBranch}`);
    try {
      const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
      if (!workspaceRoot) {
        throw new Error('No workspace folder open');
      }

      // Get commits that are in source but not in target
      const { stdout } = await execAsync(
        `git log --pretty=format:"%H|%s|%b|%an|%ad" ${targetBranch}..${sourceBranch}`,
        { cwd: workspaceRoot }
      );

      if (!stdout.trim()) {
        this.log('No commits found between branches');
        return [];
      }

      // Parse commits and map them to objects
      const commits = stdout
        .split('\n')
        .filter((line) => line.trim())
        .map((line) => {
          const [hash, subject, body, author, date] = line.split('|');
          return { hash, subject, body, author, date };
        });

      this.log(`Found ${commits.length} commits between branches`);
      return commits;
    } catch (error) {
      this.logError('Error getting commits between branches', error);
      return [];
    }
  }

  /**
   * Get diff between two branches
   * @param sourceBranch Source branch name
   * @param targetBranch Target branch name
   */
  async getDiffBetweenBranches(sourceBranch: string, targetBranch: string): Promise<string> {
    this.log(`Getting diff between branches: ${sourceBranch} and ${targetBranch}`);
    try {
      const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
      if (!workspaceRoot) {
        throw new Error('No workspace folder open');
      }

      // Get a diff between the two branches
      const { stdout } = await execAsync(`git diff --stat --patch ${targetBranch}...${sourceBranch}`, {
        cwd: workspaceRoot,
      });

      if (!stdout.trim()) {
        this.log('No diff found between branches');
      } else {
        this.log(`Got diff between branches (${stdout.length} bytes)`);
      }

      return stdout;
    } catch (error) {
      this.logError('Error getting diff between branches', error);
      return '';
    }
  }

  /**
   * Get list of changed files between branches with their status
   * @param sourceBranch Source branch name
   * @param targetBranch Target branch name
   */
  async getFilesBetweenBranches(
    sourceBranch: string,
    targetBranch: string
  ): Promise<
    Array<{
      status: string;
      file: string;
    }>
  > {
    this.log(`Getting changed files between branches: ${sourceBranch} and ${targetBranch}`);
    try {
      const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
      if (!workspaceRoot) {
        throw new Error('No workspace folder open');
      }

      // Get name-status format to see what files changed
      const { stdout } = await execAsync(`git diff --name-status ${targetBranch}...${sourceBranch}`, {
        cwd: workspaceRoot,
      });

      if (!stdout.trim()) {
        this.log('No files changed between branches');
        return [];
      }

      // Parse the output into an array of file objects
      const files = stdout
        .split('\n')
        .filter((line) => line.trim())
        .map((line) => {
          const [status, ...fileParts] = line.split('\t');
          const file = fileParts.join('\t');
          return { status, file };
        });

      this.log(`Found ${files.length} changed files between branches`);
      return files;
    } catch (error) {
      this.logError('Error getting files between branches', error);
      return [];
    }
  }

  /**
   * Get file content from a specific branch
   * @param branch Branch name
   * @param filePath Path to the file
   */
  async getFileContentFromBranch(branch: string, filePath: string): Promise<string> {
    this.log(`Getting file content from branch ${branch}: ${filePath}`);
    try {
      const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
      if (!workspaceRoot) {
        throw new Error('No workspace folder open');
      }

      // Get file content from the specified branch
      const { stdout } = await execAsync(`git show ${branch}:${filePath}`, { cwd: workspaceRoot });

      this.log(`Got file content from ${branch}:${filePath} (${stdout.length} bytes)`);
      return stdout;
    } catch (error) {
      this.logError(`Error getting file content from branch ${branch}: ${filePath}`, error);
      return '';
    }
  }

  /**
   * Get the current branch name
   */
  async getCurrentBranch(): Promise<string> {
    this.log('Getting current branch name');
    try {
      const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
      if (!workspaceRoot) {
        throw new Error('No workspace folder open');
      }

      const { stdout } = await execAsync('git rev-parse --abbrev-ref HEAD', { cwd: workspaceRoot });
      const branch = stdout.trim();

      this.log(`Current branch: ${branch}`);
      return branch;
    } catch (error) {
      this.logError('Error getting current branch', error);
      return '';
    }
  }
}
