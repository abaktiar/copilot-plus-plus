# Copilot Plus Plus

A VS Code extension that enhances GitHub Copilot capabilities with AI-powered development workflows.

## Features

### Current Features

- **Smart Commit Messages**: Automatically generates meaningful commit messages using GitHub's Language Model
  - Follows conventional commit format for consistency
  - Seamlessly integrates with VS Code's source control
  - Context-aware analysis of staged changes to generate relevant messages
  - Support for multiple commit styles (conventional, gitmoji)
  - Automatic ticket number detection from branch names

![Commit Message Generation](images/commit-message.gif)

### Coming Soon

- **PR Description Generation**: Automatically generate comprehensive PR descriptions based on your changes
- **PR Review Assistance**: Get AI-powered review comments and suggestions for your PRs
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

### Configuration

You can customize the extension's behavior through the following settings:

- `copilotPlusPlus.languageModel`: Choose which AI model to use for generations
- `copilotPlusPlus.commitStyle`: Select commit message style (conventional, gitmoji, etc.)
- `copilotPlusPlus.includeTicketNumber`: Automatically include ticket numbers from branch names
- `copilotPlusPlus.ticketPattern`: Customize regex pattern for ticket number detection

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

### 0.0.1

Initial release:
- Add commit message generation using GitHub's Language Model
- Implement conventional commit format
- Add SCM input box integration

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
