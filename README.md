# Copilot++
A VS Code extension that enhances GitHub Copilot capabilities with AI-powered development workflows.

## Features

### Current Features

- **Smart Commit Messages**: Automatically generates meaningful commit messages using GitHub's Language Model
  - Follows conventional commit format for consistency
  - Seamlessly integrates with VS Code's source control
  - Context-aware analysis of staged changes to generate relevant messages
  - Support for multiple commit styles (conventional, gitmoji)
  - Automatic ticket number detection from branch names

![Commit Message Generation](images/commit-message-generation.gif)

- **PR Description Generation**: Automatically generate comprehensive PR descriptions based on your changes
  - Select source and target branches to analyze differences
  - Analyzes code changes and commit history
  - Generates detailed and structured PR descriptions
  - Easy copy-to-clipboard functionality for GitHub/GitLab/Azure DevOps
  - Customizable description styles and detail level

![PR Description Generation](images/pr-description-generation.gif)

- **PR Review Assistance**: Get AI-powered review comments and suggestions for your PRs
  - Analyze code changes between branches for potential issues
  - Identify security vulnerabilities, code style issues, and performance concerns
  - Detect potential breaking changes in APIs or interfaces
  - Navigate directly to problem areas in code with clickable file links
  - View issue severity and recommendations for fixes

![PR Review Assistance](images/pr-review-assistance.gif)

### Coming Soon
- **Code Usage Analysis**: Identify where and how specific code is used throughout your project
- **Impact Analysis**: Detect potential breaking changes when modifying critical code
- **Test Generation**: Generate unit tests for your code changes

## Requirements
- Visual Studio Code ^1.98.0
- GitHub Copilot extension installed and authenticated
- Git repository

## Installation
1. Install the extension from VS Code Marketplace
2. Make sure you have GitHub Copilot installed and authenticated
3. Open a Git repository in VS Code

## Usage

### Commit Message Generation
1. Stage your changes in Git
2. Open the Source Control view (Ctrl+Shift+G or Cmd+Shift+G on macOS)
3. Click the Copilot icon ($(sparkle)) next to the commit message input box
4. Wait for Copilot to generate a commit message based on your changes
5. Edit the generated message if needed and commit

### PR Description Generation
1. Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P on macOS)
2. Type "Copilot++: Generate PR Description" and select the command
3. Select the source branch (the branch with your changes)
4. Select the target branch (the branch you want to merge into)
5. Wait for the analysis to complete
6. Review and edit the generated PR description
7. Use the "Copy to Clipboard" option to copy the PR description

For more details, see the [PR Description Generation documentation](docs/pr-description-generation.md).

### PR Review Assistance
1. Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P on macOS)
2. Type "Copilot++: Review PR Changes" and select the command
3. Select the source branch (the branch with your changes)
4. Select the target branch (the branch you want to merge into)
5. Click "Review PR Changes" to start the analysis
6. View the identified issues categorized by severity
7. Click on file links to navigate directly to problem areas in code

For more details, see the [PR Review Assistance documentation](docs/pr-review-assistance.md).

### Configuration
You can customize the extension's behavior through the following settings:

- `copilotPlusPlus.languageModel`: Choose which AI model to use for generations
- `copilotPlusPlus.commitStyle`: Select commit message style (conventional, gitmoji, etc.)
- `copilotPlusPlus.includeTicketNumber`: Automatically include ticket numbers from branch names
- `copilotPlusPlus.ticketPattern`: Customize regex pattern for ticket number detection
- `copilotPlusPlus.prDescriptionStyle`: Choose PR description style (concise, detailed, etc.)
- `copilotPlusPlus.includeTechnicalDetails`: Include technical details in PR descriptions
- `copilotPlusPlus.groupCommitsByType`: Group commits by type in PR descriptions
- `copilotPlusPlus.prReview.includeSecurity`: Include security vulnerability checks in PR reviews
- `copilotPlusPlus.prReview.includeCodeStyle`: Check code style and best practices in PR reviews
- `copilotPlusPlus.prReview.includePerformance`: Analyze code for performance issues
- `copilotPlusPlus.prReview.includeBreakingChanges`: Detect potential breaking changes
- `copilotPlusPlus.prReview.enableInlineLinks`: Show clickable links to navigate to issue locations

## Development
1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Run the extension in debug mode:
   ```bash
   pnpm run debug
   ```

## Release Notes

### 0.0.5
- Add PR Review Assistance feature
- Improve PR description generation
- Fix minor bugs

### 0.0.3
- Add PR Description Generation feature
- Improve configuration options
- Fix minor bugs

### 0.0.1
Initial release:
- Add commit message generation using GitHub's Language Model
- Implement conventional commit format
- Add SCM input box integration

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
MIT
