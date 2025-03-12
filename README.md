# Copilot Plus Plus

A VS Code extension that enhances GitHub Copilot capabilities by adding AI-powered commit message generation.

## Features

- **Smart Commit Messages**: Automatically generates meaningful commit messages using GitHub's Language Model
- **Conventional Commit Format**: Follows the conventional commit format for consistency
- **Git Integration**: Seamlessly integrates with VS Code's source control
- **Context-Aware**: Analyzes staged changes to generate relevant commit messages

![Commit Message Generation](images/commit-message.gif)

## Requirements

- Visual Studio Code ^1.98.0
- GitHub Copilot extension installed and authenticated
- Git repository

## Installation

1. Install the extension from VS Code Marketplace
2. Make sure you have GitHub Copilot installed and authenticated
3. Open a Git repository in VS Code

## Usage

1. Stage your changes in Git
2. Open the Source Control view (Ctrl+Shift+G or Cmd+Shift+G on macOS)
3. Click the Copilot icon ($(copilot)) next to the commit message input box
4. Wait for Copilot to generate a commit message based on your changes
5. Edit the generated message if needed and commit

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

## Known Issues

- Requires the proposed API for SCM input box menu contribution
- Requires GitHub Copilot to be installed and authenticated

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
