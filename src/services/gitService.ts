import * as vscode from 'vscode';
import { exec } from 'child_process';
import { promisify } from 'util';
import { ConfigService } from './configService';

const execAsync = promisify(exec);

export class GitService {
    /**
     * Get the Git repository for the current workspace
     */
    async getGitRepo(): Promise<vscode.SourceControl | undefined> {
        const gitExtension = vscode.extensions.getExtension('vscode.git')?.exports;
        if (!gitExtension) {
            return undefined;
        }
        
        const api = gitExtension.getAPI(1);
        if (!api) {
            return undefined;
        }
        
        if (api.repositories.length === 0) {
            return undefined;
        }
        
        return api.repositories[0];
    }

    /**
     * Get the commit template if configured
     */
    async getCommitTemplate(workspaceRoot: string): Promise<string | undefined> {
        try {
            // Try to get local commit template
            const { stdout: localTemplate } = await execAsync('git config commit.template', { cwd: workspaceRoot }).catch(() => ({ stdout: '' }));
            if (localTemplate.trim()) {
                return localTemplate.trim();
            }

            // Try to get global commit template
            const { stdout: globalTemplate } = await execAsync('git config --global commit.template', { cwd: workspaceRoot }).catch(() => ({ stdout: '' }));
            return globalTemplate.trim() || undefined;
        } catch {
            return undefined;
        }
    }

    /**
     * Get recent commit messages for style reference
     */
    async getRecentCommits(workspaceRoot: string, count: number = 5): Promise<string[]> {
        try {
            const { stdout } = await execAsync(`git log -${count} --pretty=format:%s`, { cwd: workspaceRoot });
            return stdout.split('\n').filter(msg => msg.trim());
        } catch {
            return [];
        }
    }

    /**
     * Get the current branch name and extract ticket number
     */
    private async getBranchInfo(workspaceRoot: string): Promise<{ branch: string; ticketNumber: string | undefined }> {
        try {
            const { stdout: branchName } = await execAsync('git rev-parse --abbrev-ref HEAD', { cwd: workspaceRoot });
            const branch = branchName.trim();

            // Get ticket pattern from configuration
            const config = ConfigService.getCommitMessageConfig();
            const includeTicket = config.includeTicketNumber;
            
            // Only extract ticket if enabled in settings
            let ticketNumber: string | undefined = undefined;
            if (includeTicket) {
                const ticketRegex = new RegExp(config.ticketPattern);
                const ticketMatch = branch.match(ticketRegex);
                ticketNumber = ticketMatch ? ticketMatch[1] : undefined;
            }

            return { branch, ticketNumber };
        } catch (error) {
            console.error('Error getting branch info:', error);
            return { branch: 'unknown', ticketNumber: undefined };
        }
    }
    
    /**
     * Get commit context data to help generate meaningful commit messages
     */
    async getCommitContext(workspaceRoot: string): Promise<object> {
        try {
            const [diffResult, filesResult, template, recentCommits, branchInfo] = await Promise.all([
                execAsync('git diff --staged', { cwd: workspaceRoot }),
                execAsync('git diff --staged --name-status', { cwd: workspaceRoot }),
                this.getCommitTemplate(workspaceRoot),
                this.getRecentCommits(workspaceRoot),
                this.getBranchInfo(workspaceRoot)
            ]);
            
            const changedFiles = filesResult.stdout.trim().split('\n')
                .filter(line => line.length > 0)
                .map(line => {
                    const [status, ...fileParts] = line.split('\t');
                    const file = fileParts.join('\t');
                    return { status, file };
                });
                
            return {
                diff: diffResult.stdout,
                files: changedFiles,
                commitTemplate: template,
                recentCommits,
                branch: branchInfo.branch,
                ticketNumber: branchInfo.ticketNumber,
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            console.error('Error getting commit context:', error);
            return { error: 'Failed to get commit context' };
        }
    }

    /**
     * Get all available branches in the repository
     */
    async getAvailableBranches(): Promise<string[]> {
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
                .map(b => b.trim().replace(/^remotes\/origin\//, '')) // Remove remote prefix
                .filter(b => b && !b.includes('HEAD ->')) // Remove empty lines and HEAD pointers
                .filter((b, i, self) => self.indexOf(b) === i); // Remove duplicates
                
            return branches;
        } catch (error) {
            console.error('Error getting available branches:', error);
            return [];
        }
    }

    /**
     * Get commits between two branches
     * @param sourceBranch Source branch name (contains changes)
     * @param targetBranch Target branch name (to merge into)
     */
    async getCommitsBetweenBranches(sourceBranch: string, targetBranch: string): Promise<Array<{
        hash: string;
        subject: string;
        body: string;
        author: string;
        date: string;
    }>> {
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
                return [];
            }

            // Parse commits and map them to objects
            return stdout
                .split('\n')
                .filter(line => line.trim())
                .map(line => {
                    const [hash, subject, body, author, date] = line.split('|');
                    return { hash, subject, body, author, date };
                });
        } catch (error) {
            console.error('Error getting commits between branches:', error);
            return [];
        }
    }

    /**
     * Get diff between two branches
     * @param sourceBranch Source branch name
     * @param targetBranch Target branch name
     */
    async getDiffBetweenBranches(sourceBranch: string, targetBranch: string): Promise<string> {
        try {
            const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
            if (!workspaceRoot) {
                throw new Error('No workspace folder open');
            }

            // Get a diff between the two branches
            const { stdout } = await execAsync(
                `git diff --stat --patch ${targetBranch}...${sourceBranch}`,
                { cwd: workspaceRoot }
            );

            return stdout;
        } catch (error) {
            console.error('Error getting diff between branches:', error);
            return '';
        }
    }

    /**
     * Get list of changed files between branches with their status
     * @param sourceBranch Source branch name
     * @param targetBranch Target branch name
     */
    async getFilesBetweenBranches(sourceBranch: string, targetBranch: string): Promise<Array<{
        status: string;
        file: string;
    }>> {
        try {
            const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
            if (!workspaceRoot) {
                throw new Error('No workspace folder open');
            }

            // Get name-status format to see what files changed
            const { stdout } = await execAsync(
                `git diff --name-status ${targetBranch}...${sourceBranch}`,
                { cwd: workspaceRoot }
            );

            if (!stdout.trim()) {
                return [];
            }

            // Parse the output into an array of file objects
            return stdout
                .split('\n')
                .filter(line => line.trim())
                .map(line => {
                    const [status, ...fileParts] = line.split('\t');
                    const file = fileParts.join('\t');
                    return { status, file };
                });
        } catch (error) {
            console.error('Error getting files between branches:', error);
            return [];
        }
    }

    /**
     * Get file content from a specific branch
     * @param branch Branch name
     * @param filePath Path to the file
     */
    async getFileContentFromBranch(branch: string, filePath: string): Promise<string> {
        try {
            const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
            if (!workspaceRoot) {
                throw new Error('No workspace folder open');
            }

            // Get file content from the specified branch
            const { stdout } = await execAsync(
                `git show ${branch}:${filePath}`,
                { cwd: workspaceRoot }
            );

            return stdout;
        } catch (error) {
            console.error(`Error getting file content from branch ${branch}:`, error);
            return '';
        }
    }
}
