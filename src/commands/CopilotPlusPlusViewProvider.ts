import * as vscode from 'vscode';
import { GitService } from '../services/gitService';
import { CopilotService } from '../services/copilotService';

export class CopilotPlusPlusViewProvider implements vscode.WebviewViewProvider {
    public static readonly viewType = 'copilotPlusPlusView';
    private _view?: vscode.WebviewView;
    private readonly _gitService: GitService;
    private readonly _copilotService: CopilotService;
    private readonly _outputChannel: vscode.OutputChannel;

    constructor(
        private readonly _extensionUri: vscode.Uri,
    ) {
        this._gitService = new GitService();
        this._copilotService = new CopilotService();
        this._outputChannel = vscode.window.createOutputChannel('Copilot++ PR Description');
        this.log('PR Description view provider initialized');
    }

    private log(message: string) {
        const timestamp = new Date().toISOString();
        this._outputChannel.appendLine(`[${timestamp}] ${message}`);
    }

    private logError(error: string | Error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        const timestamp = new Date().toISOString();
        this._outputChannel.appendLine(`[${timestamp}] ERROR: ${errorMessage}`);
        if (error instanceof Error && error.stack) {
            this._outputChannel.appendLine(`Stack trace:\n${error.stack}`);
        }
    }

    public resolveWebviewView(
        webviewView: vscode.WebviewView,
        context: vscode.WebviewViewResolveContext,
        _token: vscode.CancellationToken,
    ) {
        try {
            this._view = webviewView;
            this.log('Resolving webview view...');

            webviewView.webview.options = {
                enableScripts: true,
                localResourceRoots: [
                    this._extensionUri
                ]
            };

            // Set title and preserve focus
            webviewView.title = "PR Description";
            webviewView.description = "Generate PR descriptions";
            webviewView.show(true); // preserve focus

            webviewView.webview.html = this._getHtml(webviewView.webview);
            this.log('Webview HTML content set');

            // Handle messages from the webview
            webviewView.webview.onDidReceiveMessage(async (message) => {
                this.log(`Received message from webview: ${message.command}`);
                
                try {
                    switch (message.command) {
                        case 'getBranches':
                            const branches = await this._gitService.getAvailableBranches();
                            const currentBranch = await this._gitService.getCurrentBranch();
                            this.log(`Found ${branches.length} branches, current branch: ${currentBranch}`);
                            webviewView.webview.postMessage({
                                command: 'branchesList',
                                branches,
                                currentBranch
                            });
                            break;

                        case 'generatePrDescription':
                            try {
                                this.log(`Generating PR description: ${message.sourceBranch} → ${message.targetBranch}`);
                                webviewView.show(true);
                                const { sourceBranch, targetBranch } = message;
                                const [commits, diff, files] = await Promise.all([
                                    this._gitService.getCommitsBetweenBranches(sourceBranch, targetBranch),
                                    this._gitService.getDiffBetweenBranches(sourceBranch, targetBranch),
                                    this._gitService.getFilesBetweenBranches(sourceBranch, targetBranch)
                                ]);

                                if (!commits.length && !files.length) {
                                    throw new Error('No changes detected between the selected branches');
                                }

                                this.log(`Found ${commits.length} commits and ${files.length} changed files`);

                                const prContext = {
                                    sourceBranch,
                                    targetBranch,
                                    commits,
                                    diff,
                                    files
                                };

                                const result = await this._copilotService.generatePrDescription(prContext);
                                this.log('PR description generated successfully');
                                webviewView.webview.postMessage({
                                    command: 'generationComplete',
                                    result
                                });
                            } catch (error: unknown) {
                                this.logError(error instanceof Error ? error : String(error));
                                webviewView.webview.postMessage({
                                    command: 'error',
                                    message: error instanceof Error ? error.message : String(error)
                                });
                            }
                            break;

                        case 'copyToClipboard':
                            try {
                                this.log('Copying content to clipboard');
                                await vscode.env.clipboard.writeText(message.text);
                                vscode.window.showInformationMessage('Copied to clipboard!');
                            } catch (error: unknown) {
                                this.logError(error instanceof Error ? error : String(error));
                                vscode.window.showErrorMessage('Failed to copy to clipboard');
                            }
                            break;

                        case 'log':
                            this.log(`[Webview] ${message.message}`);
                            break;

                        case 'logError':
                            this.logError(`[Webview] ${message.message}`);
                            break;
                    }
                } catch (error: unknown) {
                    this.logError(error instanceof Error ? error : String(error));
                    webviewView.webview.postMessage({
                        command: 'error',
                        message: error instanceof Error ? error.message : String(error)
                    });
                }
            });
        } catch (error: unknown) {
            this.logError(error instanceof Error ? error : String(error));
            throw error; // Re-throw to let VS Code handle it
        }
    }

    private _getHtml(webview: vscode.Webview): string {
        try {
            // Get the local path to scripts and css
            const scriptUri = webview.asWebviewUri(
                vscode.Uri.joinPath(this._extensionUri, 'media', 'sidebar.js')
            );
            const styleUri = webview.asWebviewUri(
                vscode.Uri.joinPath(this._extensionUri, 'media', 'sidebar.css')
            );

            const nonce = this._getNonce();
            this.log('Generated webview HTML content');

            return `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}' https://unpkg.com/ 'unsafe-eval'; img-src ${webview.cspSource} https:; connect-src https:; font-src ${webview.cspSource};">
                    <link href="${styleUri}" rel="stylesheet">
                    <title>PR Description Generator</title>
                </head>
                <body>
                    <div id="root"></div>
                    <script nonce="${nonce}" src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
                    <script nonce="${nonce}" src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
                    <script nonce="${nonce}" src="https://unpkg.com/marked@4.0.0/marked.min.js"></script>
                    <script nonce="${nonce}" src="${scriptUri}"></script>
                </body>
                </html>`;
        } catch (error: unknown) {
            this.logError(error instanceof Error ? error : String(error));
            throw error;
        }
    }

    private _getNonce() {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 32; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}