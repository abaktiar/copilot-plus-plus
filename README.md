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

- **Breaking Changes Analysis**: Identify and analyze potential breaking changes in your code
  - Detect API changes, interface modifications, and dependency updates
  - Compare changes between branches to highlight compatibility issues
  - Provide detailed impact analysis for affected code areas
  - Generate reports with severity levels and recommended fixes
  - Automatic detection of semver implications

### Coming Soon
- **Code Usage Analysis**: Identify where and how specific code is used throughout your project
- **Impact Analysis**: Detect potential breaking changes when modifying critical code
- **Test Generation**: Generate unit tests for your code changes

### PR Review Assistance
Analyze pull requests to identify potential issues, bugs, and improvements. [Learn more](docs/pr-review-assistance.md)

### Commit Message Generation
Generate commit messages that follow best practices and include ticket numbers. [Learn more](docs/commit-message-generation.md)

### PR Description Generation
Generate comprehensive PR descriptions based on your changes. [Learn more](docs/pr-description-generation.md)

### Breaking Changes Analysis
Identify potential breaking changes between branches to prevent compatibility issues. [Learn more](docs/breaking-changes-analysis.md)

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

### Breaking Changes Analysis
1. Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P on macOS)
2. Type "Copilot++: Analyze Breaking Changes" and select the command
3. Select the source branch (typically your feature branch)
4. Select the target branch (typically the main/master branch)
5. Choose a language model for the analysis
6. Click "Analyze Breaking Changes" to start the analysis
7. View the breaking changes categorized by severity and type
8. Use the filters to narrow down results by severity, change type, or search term
9. Click on file locations to navigate directly to the affected code

For more details, see the [Breaking Changes Analysis documentation](docs/breaking-changes-analysis.md).

### Configuration
You can customize the extension's behavior through the following settings:

- `copilotPlusPlus.languageModel`: Choose which AI model to use for generations
  - **GPT-4o**: Most capable model, best for complex understanding
  - **GPT-4o-mini**: Faster variant with slightly reduced capabilities
  - **GPT-4.1**: Latest GPT-4 model with enhanced capabilities
  - **GPT-5**: Next generation GPT model with larger context and improved capability
  - **GPT-5 Mini**: Next generation mini model with improved efficiency and capabilities
  - **Claude 3.5 Sonnet**: Anthropic's most capable model with advanced reasoning
  - **Claude 4 Sonnet**: Latest Anthropic model with enhanced capabilities
  - **o1**: OpenAI o1 model, highest reasoning capabilities
  - **o1-mini**: Smaller, faster OpenAI o1 model
- `copilotPlusPlus.commitStyle`: Select commit message style (conventional, gitmoji, etc.)
- `copilotPlusPlus.includeTicketNumber`: Automatically include ticket numbers from branch names (supports multiple tickets)
- `copilotPlusPlus.ticketPattern`: Customize regex pattern for ticket number detection (case-insensitive, supports multiple matches)
- `copilotPlusPlus.prDescriptionStyle`: Choose PR description style (concise, detailed, etc.)
- `copilotPlusPlus.includeTechnicalDetails`: Include technical details in PR descriptions
- `copilotPlusPlus.groupCommitsByType`: Group commits by type in PR descriptions
- `copilotPlusPlus.prReview.includeSecurity`: Include security vulnerability checks in PR reviews
- `copilotPlusPlus.prReview.includeCodeStyle`: Check code style and best practices in PR reviews
- `copilotPlusPlus.prReview.includePerformance`: Analyze code for performance issues
- `copilotPlusPlus.prReview.includeBreakingChanges`: Detect potential breaking changes
- `copilotPlusPlus.prReview.enableInlineLinks`: Show clickable links to navigate to issue locations
- `copilotPlusPlus.defaultTargetBranch`: Set a default target branch for PR operations (e.g., "main" or "develop")
- `copilotPlusPlus.breakingChanges.detectionLevel`: Set sensitivity level for breaking changes detection ("strict", "moderate", or "lenient")
- `copilotPlusPlus.breakingChanges.includePrivateAPIs`: Include private APIs in breaking changes analysis
- `copilotPlusPlus.breakingChanges.includeInternal`: Include internal implementation details in breaking changes analysis

## Development

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended package manager)
- Visual Studio Code

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/abaktiar/copilot-plus-plus.git
   cd copilot-plus-plus
   ```
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start development mode with hot reloading:
   ```bash
   pnpm run dev
   ```

### Development Scripts
- `pnpm run watch` - Watch mode for both webviews and extension (recommended for development)
- `pnpm run build` - Build both webviews and extension
- `pnpm run build:webviews` - Build React webviews only
- `pnpm run build:extension` - Build extension backend only
- `pnpm run test:all` - Run all tests (webviews + extension)
- `pnpm run test:webviews` - Run React component tests
- `pnpm run dev:fast` - Fast development mode with optimized builds

### Architecture
The extension is built with a modern architecture:
- **Backend**: TypeScript-based VS Code extension API
- **Frontend**: React 19.1 with TypeScript for all webview panels  
- **Build System**: Webpack for webviews, esbuild for extension
- **Testing**: Jest for webview tests, VS Code Test for extension tests
- **Type Safety**: Full TypeScript coverage across frontend and backend

## Release Notes

### 0.1.0 (2025-08-24) - Major Frontend Architecture Overhaul
This major release represents a complete modernization of the extension's frontend architecture with significant improvements to user experience, performance, and maintainability.

#### 🚀 Major Architecture Changes
- **Complete Frontend Migration to React/TypeScript**: Migrated all webview panels from raw HTML/JS to modern React with TypeScript for better maintainability and type safety
- **Shared Component Library**: Created a centralized component library foundation for consistent UI across all features
- **Enhanced Build System**: Integrated React build pipeline with extension development workflow for streamlined development
- **Comprehensive Testing Framework**: Added extensive webview tests with centralized model configuration and hardened build/CSP policies

#### ✨ Enhanced User Interface
- **Modernized UI Components**: All panels now use React-based components with improved styling and responsiveness
- **Shared Dropdowns and Controls**: Branch and model selection dropdowns are now standardized across all features
- **Improved PR Description UI**: Enhanced PR description generation interface with better controls and user feedback
- **Tightened PR Review UI**: Streamlined PR review interface with better navigation and issue presentation

#### 🔧 Technical Improvements
- **Integrated Markdown Rendering**: Added marked library for proper PR markdown rendering with test mocks
- **Enhanced Ticket Extraction**: Support for multiple case-insensitive ticket number extraction from branch names
- **Cleaner Architecture**: Removed legacy webview assets and sidebar implementations for cleaner codebase
- **Improved Development Workflow**: Enhanced build processes and development experience with better error handling

#### 🧪 Quality Assurance
- **Comprehensive Test Coverage**: Added extensive tests for webview functionality and communication
- **Type Safety**: Full TypeScript implementation across all frontend components
- **Build Hardening**: Enhanced Content Security Policy (CSP) and build validation

This release marks a significant milestone in the extension's evolution, providing a solid foundation for future feature development with modern web technologies.

### 0.0.17 (2025-08-15)
- Added GPT-5 (`gpt-5`) and GPT-5 Mini (`gpt-5-mini`) to the available language model selection
- Updated UI components and documentation to include GPT-5 and GPT-5 Mini (README, docs, and webview model lists)
- Small fixes and consistency updates for model configuration across webviews

### 0.0.16 (2025-07-07)
- Enhanced language model support with expanded model selection
  - Added GPT-4.1 with enhanced capabilities
  - Added Claude 4 Sonnet with advanced reasoning capabilities

### 0.0.12 (2025-03-16)
- Added state persistence for reviewed issues in PR Review Assistant
- Added visual chart for severity distribution in PR Review dashboard
- Added configuration option to enable/disable debug logging
- Improved error handling for JSON parsing in LLM responses
- Enhanced file grouping algorithm for large PRs
- Optimized token usage and memory management for better performance
- Added keyboard shortcuts for navigation in PR Review UI
- Added collapsible sections in PR Review results

### 0.0.11 (2025-03-15)
- Added Breaking Changes Analysis feature
- Improved UI for branch selection and model choice
- Enhanced webview panels for better user experience
- Performance improvements for Git operations
- Better error handling for branch comparisons

### 0.0.10 (2025-03-15)
- Enhanced configuration options for PR review customization
- Improved prompt generation for more accurate results
- Added testing gap detection in PR reviews
- Bug fixes and performance optimizations

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
