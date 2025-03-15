import * as vscode from 'vscode';
import * as path from 'path';
import { GitService } from '../services/gitService';
import { BreakingChangeService } from '../services/breakingChangeService';
import { ConfigService } from '../services/configService';
import { LoggingService } from '../services/loggingService';

export class BreakingChangesPanel {
  public static currentPanel: BreakingChangesPanel | undefined;
  private readonly _panel: vscode.WebviewPanel;
  private readonly _extensionUri: vscode.Uri;
  private _disposables: vscode.Disposable[] = [];
  private readonly _gitService: GitService;
  private readonly _breakingChangeService: BreakingChangeService;
  private readonly _logger: LoggingService;

  public static createOrShow(extensionUri: vscode.Uri) {
    const column = vscode.window.activeTextEditor ? vscode.window.activeTextEditor.viewColumn : undefined;

    // If we already have a panel, show it
    if (BreakingChangesPanel.currentPanel) {
      BreakingChangesPanel.currentPanel._panel.reveal(column);
      return;
    }

    // Otherwise, create a new panel
    const panel = vscode.window.createWebviewPanel(
      'breakingChangesAnalyzer',
      'Breaking Changes Analyzer',
      column || vscode.ViewColumn.One,
      {
        enableScripts: true,
        localResourceRoots: [vscode.Uri.joinPath(extensionUri, 'media')],
        retainContextWhenHidden: true,
      }
    );

    // Set the webview icon using our custom icon file
    const iconWarning = vscode.Uri.joinPath(extensionUri, 'images', 'icon.png');
    panel.iconPath = iconWarning;

    BreakingChangesPanel.currentPanel = new BreakingChangesPanel(panel, extensionUri);
  }

  private constructor(panel: vscode.WebviewPanel, extensionUri: vscode.Uri) {
    this._panel = panel;
    this._extensionUri = extensionUri;
    this._gitService = new GitService();
    this._breakingChangeService = new BreakingChangeService();
    this._logger = LoggingService.getInstance();

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

          case 'analyzeBreakingChanges':
            try {
              await this.analyzeBreakingChanges(message.sourceBranch, message.targetBranch, message.modelFamily);
            } catch (error) {
              this._panel.webview.postMessage({
                command: 'error',
                message: error instanceof Error ? error.message : String(error),
              });
            }
            break;

          case 'openFile':
            try {
              await this.openFile(message.filePath, message.lineNumber);
            } catch (error) {
              vscode.window.showErrorMessage('Failed to open file');
            }
            break;
        }
      },
      null,
      this._disposables
    );
  }

  private async analyzeBreakingChanges(sourceBranch: string, targetBranch: string, modelFamily?: string) {
    try {
      this._logger.log(
        `Analyzing breaking changes between ${sourceBranch} and ${targetBranch}`,
        'BreakingChangesPanel'
      );

      // Update model if specified
      if (modelFamily) {
        await vscode.workspace.getConfiguration('copilotPlusPlus').update('languageModel', modelFamily, true);
      }

      // Show loading state
      this._panel.webview.postMessage({
        command: 'analyzing',
        sourceBranch,
        targetBranch,
      });

      // Analyze breaking changes
      const result = await this._breakingChangeService.analyzeBreakingChanges(sourceBranch, targetBranch);

      // Send results to webview
      this._panel.webview.postMessage({
        command: 'analysisResult',
        result,
        sourceBranch,
        targetBranch,
      });
    } catch (error) {
      this._logger.logError(`Error analyzing breaking changes: ${error}`, error, 'BreakingChangesPanel');
      this._panel.webview.postMessage({
        command: 'error',
        message: error instanceof Error ? error.message : String(error),
      });
    }
  }

  private async openFile(filePath: string, lineNumber: number) {
    try {
      const workspaceRoot = vscode.workspace.workspaceFolders?.[0].uri.fsPath;
      if (!workspaceRoot) {
        throw new Error('No workspace folder found');
      }

      const fullPath = path.join(workspaceRoot, filePath);
      const uri = vscode.Uri.file(fullPath);

      const document = await vscode.workspace.openTextDocument(uri);
      const editor = await vscode.window.showTextDocument(document);

      // Position is zero-indexed
      const position = new vscode.Position(lineNumber - 1, 0);
      editor.selection = new vscode.Selection(position, position);
      editor.revealRange(new vscode.Range(position, position), vscode.TextEditorRevealType.InCenter);
    } catch (error) {
      this._logger.logError(`Error opening file: ${error}`, error, 'BreakingChangesPanel');
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
      vscode.Uri.joinPath(this._extensionUri, 'media', 'breaking-changes', 'breaking-changes-panel.js')
    );
    const styleUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'media', 'breaking-changes', 'breaking-changes-panel.css')
    );
    const reactUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'media', 'lib', 'react-18.3.1.min.js')
    );
    const reactDomUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'media', 'lib', 'react-dom-18.3.1.min.js')
    );
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
      <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource} 'unsafe-inline'; script-src 'nonce-${nonce}'; img-src ${webview.cspSource} https:; connect-src https:; font-src ${webview.cspSource};">
      <link href="${styleUri}" rel="stylesheet">
      <title>Breaking Changes Analyzer</title>
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
    BreakingChangesPanel.currentPanel = undefined;

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
