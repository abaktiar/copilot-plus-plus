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
}
