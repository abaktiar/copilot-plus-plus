# PR Review Assistance

The PR Review Assistance feature uses GitHub Copilot to provide intelligent code review for your pull requests. It analyzes the code changes between branches and identifies potential issues, security vulnerabilities, and style inconsistencies.

## Getting Started

To use the PR Review assistance:

1. Open a Git repository in VS Code
2. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
3. Search for and select `Copilot++: Review PR Changes`
4. In the panel that appears, select your source and target branches
5. Click "Review PR Changes" to start the analysis

## Understanding the Results

The review results are presented in a convenient, navigable format:

- **Summary**: An overall assessment of the code changes
- **Issues**: Categorized by severity (Critical, High, Medium, Low)
- **Navigation**: Click on file paths to jump directly to the issue location
- **Suggestions**: Recommendations for addressing each issue

## Configuration Options

You can customize the PR review behavior in your VS Code settings:

```json
"copilotPlusPlus.prReview.includeSecurity": true,
"copilotPlusPlus.prReview.includeCodeStyle": true,
"copilotPlusPlus.prReview.includePerformance": true,
"copilotPlusPlus.prReview.includeBreakingChanges": true,
"copilotPlusPlus.prReview.enableInlineLinks": true,
"copilotPlusPlus.prReview.severityLevels": ["Critical", "High", "Medium", "Low"]
```

### Settings Details

| Setting | Description |
|---------|-------------|
| `includeSecurity` | Check for security vulnerabilities like injection flaws, authentication issues, etc. |
| `includeCodeStyle` | Review code style, naming conventions, and best practices |
| `includePerformance` | Analyze for performance concerns like inefficient algorithms or memory leaks |
| `includeBreakingChanges` | Identify breaking changes such as modified APIs or altered schemas |
| `enableInlineLinks` | Show clickable links to navigate directly to issue locations |
| `severityLevels` | Customize the severity categories used for issue classification |

## How It Works

The PR Review assistant:

1. Retrieves the code changes (diff) between selected branches
2. Analyzes the changes for potential issues using GitHub Copilot
3. Categorizes findings by severity and type
4. Presents them in an interactive interface with navigation links

## Tips for Effective PR Reviews

- Choose the appropriate base branch to correctly identify changes
- Review issues by severity, starting with Critical issues first
- Use the navigation links to quickly jump to problem areas
- Consider the suggestions provided when addressing issues
- Remember that AI-assisted reviews complement, but don't replace human review