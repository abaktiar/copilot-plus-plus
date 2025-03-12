import * as vscode from 'vscode';
import { exec } from 'child_process';
import { promisify } from 'util';

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
     * Get commit context data to help generate meaningful commit messages
     */
    async getCommitContext(workspaceRoot: string): Promise<object> {
        try {
            const [diffResult, filesResult, template, recentCommits] = await Promise.all([
                execAsync('git diff --staged', { cwd: workspaceRoot }),
                execAsync('git diff --staged --name-status', { cwd: workspaceRoot }),
                this.getCommitTemplate(workspaceRoot),
                this.getRecentCommits(workspaceRoot)
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
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            console.error('Error getting commit context:', error);
            return { error: 'Failed to get commit context' };
        }
    }
}
