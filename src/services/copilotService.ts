import * as vscode from 'vscode';

export class CopilotService {
  /**
   * Generate commit message using GitHub Copilot
   */
  async generateCommitMessage(commitContext: object): Promise<string> {
    try {
      // Select the Copilot GPT-4 model
      const [model] = await vscode.lm.selectChatModels({
        vendor: 'copilot',
        family: 'gpt-4o',
      });

      if (!model) {
        throw new Error('No suitable language model found. Please make sure GitHub Copilot is installed and enabled.');
      }

      const messages = [
        vscode.LanguageModelChatMessage.User(
          'You are an expert at writing clear, meaningful git commit messages. Generate a commit message for the changes I provide.'
        ),
        vscode.LanguageModelChatMessage.User(this.buildCommitPrompt(commitContext)),
      ];

      // Send the request to the language model
      const response = await model.sendRequest(messages, {}, new vscode.CancellationTokenSource().token);

      // Collect the streaming response
      let commitMessage = '';
      for await (const fragment of response.text) {
        commitMessage += fragment;
      }

      return commitMessage.trim();
    } catch (error) {
      console.error('Error generating commit message:', error);
      if (error instanceof vscode.LanguageModelError) {
        throw new Error(`Failed to generate commit message: ${error.message} (${error.code})`);
      }
      throw new Error('Failed to generate commit message: ' + (error instanceof Error ? error.message : String(error)));
    }
  }

  private buildCommitPrompt(context: any): string {
    const filesText = context.files?.map((f: any) => `${f.status} ${f.file}`).join('\n') || 'No files changed';
    const diffText = context.diff?.substring(0, 1500) || 'No diff available';

    return `Please generate a commit message for these changes:

Files modified:
${filesText}

Changes made:
${diffText}

Requirements:
- Use the conventional commit format: <type>(<scope>): <description>
- Valid types: feat, fix, docs, style, refactor, test, chore
- Keep the message under 72 characters
- Be specific and descriptive
- Use present tense, imperative mood
- Consider the changes and their impact
- Return ONLY the commit message, no explanations or additional text

Example format: feat(auth): add google oauth login support`;
  }
}
