import * as vscode from 'vscode';
import * as path from 'path';
import { GitService } from '../services/gitService';
import { CopilotService } from '../services/copilotService';

export class PrReviewPanel {
    public static currentPanel: PrReviewPanel | undefined;
    private readonly _panel: vscode.WebviewPanel;
    private readonly _extensionUri: vscode.Uri;
    private _disposables: vscode.Disposable[] = [];
    private readonly _gitService: GitService;
    private readonly _copilotService: CopilotService;

    public static createOrShow(extensionUri: vscode.Uri) {
        const column = vscode.window.activeTextEditor
            ? vscode.window.activeTextEditor.viewColumn
            : undefined;

        // If we already have a panel, show it
        if (PrReviewPanel.currentPanel) {
            PrReviewPanel.currentPanel._panel.reveal(column);
            return;
        }

        // Otherwise, create a new panel
        const panel = vscode.window.createWebviewPanel(
            'prReviewAssistant',
            'PR Review Assistant',
            column || vscode.ViewColumn.One,
            {
                enableScripts: true,
                localResourceRoots: [
                    vscode.Uri.joinPath(extensionUri, 'media')
                ],
                retainContextWhenHidden: true
            }
        );

        PrReviewPanel.currentPanel = new PrReviewPanel(panel, extensionUri);
    }

    private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
        this._panel = panel;
        this._extensionUri = extensionUri;
        this._gitService = new GitService();
        this._copilotService = new CopilotService();

        // Set the webview's initial html content
        this._update();

        // Listen for when the panel is disposed
        this._panel.onDidDispose(() => this.dispose(), null, this._disposables);

        // Handle messages from the webview
        this._panel.webview.onDidReceiveMessage(
            async (message) => {
                switch (message.command) {
                    case 'getBranches':
                        const branches = await this._gitService.getAvailableBranches();
                        const currentBranch = await this._gitService.getCurrentBranch();
                        this._panel.webview.postMessage({ 
                            command: 'branchesList', 
                            branches,
                            currentBranch
                        });
                        break;

                    case 'reviewPr':
                        try {
                            await this.reviewPr(message.sourceBranch, message.targetBranch);
                        } catch (error) {
                            this._panel.webview.postMessage({ 
                                command: 'error', 
                                message: error instanceof Error ? error.message : String(error) 
                            });
                        }
                        break;

                    case 'navigateToFile':
                        try {
                            await this.navigateToFile(message.filePath, message.lineNumber);
                        } catch (error) {
                            vscode.window.showErrorMessage('Failed to navigate to file');
                        }
                        break;
                }
            },
            null,
            this._disposables
        );
    }

    private async reviewPr(sourceBranch: string, targetBranch: string) {
        try {
            this._panel.webview.postMessage({ command: 'startLoading' });
            
            const [commits, diff, files] = await Promise.all([
                this._gitService.getCommitsBetweenBranches(sourceBranch, targetBranch),
                this._gitService.getDiffBetweenBranches(sourceBranch, targetBranch),
                this._gitService.getFilesBetweenBranches(sourceBranch, targetBranch)
            ]);

            if (!commits.length && !files.length) {
                throw new Error('No changes detected between the selected branches');
            }

            const prContext = {
                sourceBranch,
                targetBranch,
                commits,
                diff,
                files
            };

            const result = await this._copilotService.reviewPrChanges(prContext);
            
            this._panel.webview.postMessage({ 
                command: 'reviewComplete',
                result 
            });
        } catch (error) {
            console.error('PR review failed:', error);
            this._panel.webview.postMessage({ 
                command: 'error', 
                message: error instanceof Error ? error.message : String(error) 
            });
        }
    }

    private async navigateToFile(filePath: string, lineNumber: number) {
        try {
            // Get the workspace root
            const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
            if (!workspaceRoot) {
                throw new Error('No workspace folder open');
            }

            // Construct full path and open the file
            const fullPath = path.isAbsolute(filePath) 
                ? filePath 
                : path.join(workspaceRoot, filePath);
                
            const document = await vscode.workspace.openTextDocument(fullPath);
            const editor = await vscode.window.showTextDocument(document);
            
            // If line number provided, move to that line
            if (lineNumber !== undefined && lineNumber >= 0) {
                const position = new vscode.Position(lineNumber, 0);
                editor.selection = new vscode.Selection(position, position);
                editor.revealRange(
                    new vscode.Range(position, position),
                    vscode.TextEditorRevealType.InCenter
                );
            }
        } catch (error) {
            console.error('Navigation failed:', error);
            throw error;
        }
    }

    private _update() {
        const webview = this._panel.webview;
        this._panel.webview.html = this._getHtmlForWebview(webview);
    }

    private _getHtmlForWebview(webview: vscode.Webview) {
        // Get the local path to scripts and css
        const scriptUri = webview.asWebviewUri(
            vscode.Uri.joinPath(this._extensionUri, 'media', 'prReview.js')
        );
        
        const styleUri = webview.asWebviewUri(
            vscode.Uri.joinPath(this._extensionUri, 'media', 'prReview.css')
        );

        // Use a nonce to only allow specific scripts to be run
        const nonce = getNonce();

        return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}' https://unpkg.com/ 'unsafe-eval'; img-src ${webview.cspSource} https:;">
                <link href="${styleUri}" rel="stylesheet">
                <title>PR Review Assistant</title>
            </head>
            <body>
                <div id="root"></div>
                <script nonce="${nonce}" src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
                <script nonce="${nonce}" src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
                <script nonce="${nonce}" src="https://unpkg.com/marked@4.0.0/marked.min.js"></script>
                <script nonce="${nonce}" src="${scriptUri}"></script>
            </body>
            </html>`;
    }

    public dispose() {
        PrReviewPanel.currentPanel = undefined;
        // Clean up our resources
        this._panel.dispose();
        while (this._disposables.length) {
            const x = this._disposables.pop();
            if (x) {
                x.dispose();
            }
        }
    }
}

function getNonce() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 32; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}