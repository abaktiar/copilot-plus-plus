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
     * Get the staged changes as a string representation
     */
    async getStagedChanges(workspaceRoot: string): Promise<string> {
        try {
            const { stdout } = await execAsync('git diff --staged', { cwd: workspaceRoot });
            return stdout;
        } catch (error) {
            console.error('Error getting staged changes:', error);
            return '';
        }
    }
    
    /**
     * Get commit context data to help generate meaningful commit messages
     */
    async getCommitContext(workspaceRoot: string): Promise<object> {
        try {
            const [diffResult, filesResult] = await Promise.all([
                execAsync('git diff --staged', { cwd: workspaceRoot }),
                execAsync('git diff --staged --name-status', { cwd: workspaceRoot })
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
                timestamp: new Date().toISOString()
            };
        } catch (error) {
            console.error('Error getting commit context:', error);
            return { error: 'Failed to get commit context' };
        }
    }
}
