import * as vscode from 'vscode';
import * as path from 'path';
import { GitService } from '../services/gitService';
import { CopilotService } from '../services/copilotService';
import { ConfigService } from '../services/configService';

export class PrDescriptionPanel {
  public static currentPanel: PrDescriptionPanel | undefined;
  private readonly _panel: vscode.WebviewPanel;
  private readonly _extensionUri: vscode.Uri;
  private _disposables: vscode.Disposable[] = [];
  private readonly _gitService: GitService;
  private readonly _copilotService: CopilotService;

  public static createOrShow(extensionUri: vscode.Uri) {
    const column = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;

    // If we already have a panel, show it
    if (PrDescriptionPanel.currentPanel) {
      PrDescriptionPanel.currentPanel._panel.reveal(column);
      return;
    }

    // Otherwise, create a new panel
    const panel = vscode.window.createWebviewPanel(
      'prDescriptionGenerator',
      'PR Description Generator',
      column || vscode.ViewColumn.One,
      {
        enableScripts: true,
        localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'media')],
        retainContextWhenHidden: true,
      }
    );

    PrDescriptionPanel.currentPanel = new PrDescriptionPanel(panel, extensionUri);
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
            const defaultTargetBranch = this._gitService.getDefaultTargetBranch();
            const languageModel = ConfigService.getLanguageModelFamily();

            this._panel.webview.postMessage({
              command: 'branchesList',
              branches,
              currentBranch,
              defaultTargetBranch,
              languageModel,
            });
            break;

          case 'generatePrDescription':
            try {
              await this.generatePrDescription(
                message.sourceBranch, 
                message.targetBranch, 
                message.modelFamily
              );
            } catch (error) {
              this._panel.webview.postMessage({
                command: 'error',
                message: error instanceof Error ? error.message : String(error),
              });
            }
            break;

          case 'copyToClipboard':
            try {
              await vscode.env.clipboard.writeText(message.text);
              vscode.window.showInformationMessage('Copied to clipboard!');
            } catch (error) {
              vscode.window.showErrorMessage('Failed to copy to clipboard');
            }
            break;
        }
      },
      null,
      this._disposables
    );
  }

  private async generatePrDescription(sourceBranch: string, targetBranch: string, modelFamily?: string) {
    try {
      this._panel.webview.postMessage({ command: 'startLoading' });

      const [commits, diff, files] = await Promise.all([
        this._gitService.getCommitsBetweenBranches(sourceBranch, targetBranch),
        this._gitService.getDiffBetweenBranches(sourceBranch, targetBranch),
        this._gitService.getFilesBetweenBranches(sourceBranch, targetBranch),
      ]);

      if (!commits.length && !files.length) {
        throw new Error('No changes detected between the selected branches');
      }

      const prContext = {
        sourceBranch,
        targetBranch,
        commits,
        diff,
        files,
      };

      const result = await this._copilotService.generatePrDescription(prContext, modelFamily);
      this._panel.webview.postMessage({
        command: 'generationComplete',
        result,
      });
    } catch (error) {
      console.error('PR description generation failed:', error);
      this._panel.webview.postMessage({
        command: 'error',
        message: error instanceof Error ? error.message : String(error),
      });
    }
  }

  private _update() {
    const webview = this._panel.webview;
    this._panel.webview.html = this._getHtmlForWebview(webview);
  }

  private _getHtmlForWebview(webview: vscode.Webview) {
    // Get the local path to scripts and css
    const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'prDescription.js'));
    const styleUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'prDescription.css'));
    const reactUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'lib', 'react-18.3.1.min.js'));
    const reactDomUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'lib', 'react-dom-18.3.1.min.js'));
    const markedUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'media', 'lib', 'marked-4.0.0.min.js')
    );
    const modelConfigUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, 'media', 'modelConfig.js'));

    // Use a nonce to only allow specific scripts to be run
    const nonce = getNonce();

    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}'; img-src ${webview.cspSource} https:;">
                <link href="${styleUri}" rel="stylesheet">
                <title>PR Description Generator</title>
            </head>
            <body>
                <div id="root"></div>
                <script nonce="${nonce}" src="${reactUri}"></script>
                <script nonce="${nonce}" src="${reactDomUri}"></script>
                <script nonce="${nonce}" src="${markedUri}"></script>
                <script nonce="${nonce}" src="${modelConfigUri}"></script>
                <script nonce="${nonce}" src="${scriptUri}"></script>
            </body>
            </html>`;
  }

  public dispose() {
    PrDescriptionPanel.currentPanel = undefined;

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