import * as vscode from 'vscode';
import { GitService } from './services/gitService';
import { CopilotService } from './services/copilotService';

// Create an output channel for the extension
const outputChannel = vscode.window.createOutputChannel("Copilot Plus Plus");

export function activate(context: vscode.ExtensionContext) {
    // Add visible notification on activation
    vscode.window.showInformationMessage('Copilot Plus Plus extension is now active!');
    
    outputChannel.appendLine('Congratulations, your extension "copilot-plus-plus" is now active!');
    outputChannel.show();
    console.log('Congratulations, your extension "copilot-plus-plus" is now active!');

    const gitService = new GitService();
    const copilotService = new CopilotService();

    // Register the generate commit message command
    const disposable = vscode.commands.registerCommand('copilot-plus-plus.generateCommitMessage', async () => {
        try {
            outputChannel.appendLine('Generating commit message...');
            
            // Show a loading indicator
            const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 100);
            statusBarItem.text = '$(sync~spin) Generating commit message...';
            statusBarItem.show();

            // Get the Git repository
            const repo = await gitService.getGitRepo();
            if (!repo) {
                vscode.window.showErrorMessage('No Git repository found');
                outputChannel.appendLine('Error: No Git repository found');
                statusBarItem.hide();
                return;
            }

            // Get workspace root folder
            const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
            if (!workspaceRoot) {
                vscode.window.showErrorMessage('No workspace folder open');
                outputChannel.appendLine('Error: No workspace folder open');
                statusBarItem.hide();
                return;
            }

            // Store the original input box value
            const sourceControl = repo.inputBox;
            if (!sourceControl) {
                throw new Error('Could not access the Git source control input box');
            }
            const originalValue = sourceControl.value;

            // Update input box to show generating status
            sourceControl.value = 'Generating commit message...';

            // Get context for the commit
            outputChannel.appendLine('Getting commit context...');
            const commitContext = await gitService.getCommitContext(workspaceRoot);

            // Cast the context to the expected type
            const typedContext = commitContext as {
                diff: string;
                files: Array<{ status: string; file: string }>;
                commitTemplate?: string;
                recentCommits?: string[];
            };

            // Generate commit message using Copilot
            outputChannel.appendLine('Calling Copilot to generate commit message...');
            const commitMessage = await copilotService.generateCommitMessage(typedContext);

            // Update the input box with the generated message
            sourceControl.value = commitMessage;
            outputChannel.appendLine(`Generated commit message: ${commitMessage}`);
            statusBarItem.hide();
            vscode.window.showInformationMessage('Commit message generated!');
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            outputChannel.appendLine(`Error: ${errorMessage}`);
            vscode.window.showErrorMessage(`Error: ${errorMessage}`);
        }
    });

    // Register the generate PR description command
    const generatePrDescription = vscode.commands.registerCommand('copilot-plus-plus.generatePrDescription', async () => {
        try {
            // Step 1: Get all branches
            const branches = await gitService.getAvailableBranches();
            if (branches.length === 0) {
                vscode.window.showErrorMessage('No Git branches found');
                return;
            }

            // Step 2: Ask for source branch
            const sourceBranch = await vscode.window.showQuickPick(branches, {
                placeHolder: 'Select source branch (the branch with your changes)',
                title: 'Select Source Branch'
            });
            
            if (!sourceBranch) {
                return; // User cancelled
            }

            // Step 3: Ask for target branch
            const targetBranch = await vscode.window.showQuickPick(
                branches.filter(b => b !== sourceBranch),
                {
                    placeHolder: 'Select target branch (the branch you want to merge into)',
                    title: 'Select Target Branch'
                }
            );
            
            if (!targetBranch) {
                return; // User cancelled
            }

            // Show progress notification
            await vscode.window.withProgress({
                location: vscode.ProgressLocation.Notification,
                title: 'Generating PR Description',
                cancellable: true
            }, async (progress, token) => {
                try {
                    // Get workspace root folder
                    const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
                    if (!workspaceRoot) {
                        throw new Error('No workspace folder open');
                    }

                    // Step 4: Get commits between branches
                    progress.report({ message: 'Analyzing commits between branches...', increment: 20 });
                    const commits = await gitService.getCommitsBetweenBranches(sourceBranch, targetBranch);
                    
                    // Step 5: Get diff between branches
                    progress.report({ message: 'Analyzing code changes...', increment: 40 });
                    const diff = await gitService.getDiffBetweenBranches(sourceBranch, targetBranch);

                    // Prepare context for PR description generation
                    const prContext = {
                        sourceBranch,
                        targetBranch,
                        commits,
                        diff,
                        files: [] // We'll fill this later if needed
                    };
                    
                    // Step 6: Generate PR description
                    progress.report({ message: 'Generating PR description...', increment: 30 });
                    const { title, description } = await copilotService.generatePrDescription(prContext);
                    
                    // Step 7: Show the generated PR description
                    progress.report({ message: 'PR description ready', increment: 10 });
                    
                    // Create a document to show the PR description
                    const document = await vscode.workspace.openTextDocument({
                        content: `# ${title}\n\n${description}`,
                        language: 'markdown'
                    });
                    
                    await vscode.window.showTextDocument(document);
                    
                    // Show copy button
                    const copyAction = await vscode.window.showInformationMessage(
                        'PR description generated!', 
                        'Copy to Clipboard'
                    );
                    
                    if (copyAction === 'Copy to Clipboard') {
                        await vscode.env.clipboard.writeText(`# ${title}\n\n${description}`);
                        vscode.window.showInformationMessage('PR description copied to clipboard!');
                    }
                    
                } catch (error) {
                    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
                    outputChannel.appendLine(`Error: ${errorMessage}`);
                    vscode.window.showErrorMessage(`Error generating PR description: ${errorMessage}`);
                }
            });
            
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            outputChannel.appendLine(`Error: ${errorMessage}`);
            vscode.window.showErrorMessage(`Error: ${errorMessage}`);
        }
    });

    context.subscriptions.push(disposable);
    context.subscriptions.push(generatePrDescription);
    context.subscriptions.push(outputChannel);
}

export function deactivate() {
    outputChannel.appendLine('Deactivating Copilot Plus Plus extension');
}
