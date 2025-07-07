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
- **Severity Chart**: Visual representation of issue distribution by severity
- **Category Breakdown**: Issues grouped by category for easier navigation

### New Features in v0.0.12

- **State Persistence**: Reviewed issues are now saved between sessions
- **Severity Chart**: Visual representation of issues by severity level
- **Keyboard Navigation**: Use keyboard shortcuts to navigate through issues
- **Collapsible Sections**: Expand/collapse sections for better organization
- **Filter Toggle**: Show/hide reviewed issues with a single click

## Configuration Options

You can customize the PR review behavior in your VS Code settings:

```json
"copilotPlusPlus.prReview.includeSecurity": true,
"copilotPlusPlus.prReview.includeCodeStyle": true,
"copilotPlusPlus.prReview.includePerformance": true,
"copilotPlusPlus.prReview.includeBreakingChanges": true,
"copilotPlusPlus.prReview.enableInlineLinks": true,
"copilotPlusPlus.prReview.severityLevels": ["Critical", "High", "Medium", "Low"],
"copilotPlusPlus.prReview.includeLogicalErrors": true,
"copilotPlusPlus.prReview.includeTestingGaps": true,
"copilotPlusPlus.prReview.maxTokensPerGroup": 6000,
"copilotPlusPlus.prReview.enableDebugLogging": false
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
| `includeLogicalErrors` | Check for logical errors, edge cases, and flawed business logic |
| `includeTestingGaps` | Identify missing or inadequate test coverage |
| `maxTokensPerGroup` | Maximum tokens per file group when processing large PRs (higher values process more files together) |
| `enableDebugLogging` | When enabled, saves debug logs for troubleshooting JSON parsing issues |

## Advanced Configuration

### Token Limits for Large PRs

The `maxTokensPerGroup` setting controls how many files are processed together in a single request to the language model. This is particularly important for large PRs:

```json
"copilotPlusPlus.prReview.maxTokensPerGroup": 6000
```

Recommended values based on model:
- **6000-8000**: For GPT-4o-mini or similar smaller models
- **16000-32000**: For GPT-4o, GPT-4.1, Claude 3.5 Sonnet, Claude 4 Sonnet, or similar standard models
- **Up to 64000**: For latest models with expanded context windows

Increasing this value allows more files to be processed together, potentially improving the quality of the review by giving the model more context. However, it requires more capable models with larger context windows.

## Technical Architecture

The PR Review Assistant uses a modular architecture to efficiently process and analyze code changes:

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  PrReviewService│────▶│FileGroupingService│──▶│ ReviewQueueManager│
│                 │     │                 │     │                 │
└────────┬────────┘     └─────────────────┘     └────────┬────────┘
         │                                               │
         │                                               ▼
┌────────▼────────┐                           ┌─────────────────┐
│                 │                           │                 │
│   GitService    │                           │CopilotService   │
│                 │                           │                 │
└─────────────────┘                           └────────┬────────┘
                                                       │
                                                       ▼
                                              ┌─────────────────┐
                                              │                 │
                                              │ResultAggregation│
                                              │    Service      │
                                              └────────┬────────┘
                                                       │
                                                       ▼
                                              ┌─────────────────┐
                                              │                 │
                                              │  WebView UI     │
                                              │                 │
                                              └─────────────────┘
```

### Processing Flow

1. **PrReviewService**: Coordinates the entire review process
   - Retrieves diff data using GitService
   - Initializes file grouping and review queue

2. **FileGroupingService**: Optimizes processing of large PRs
   - Groups files based on related changes
   - Estimates token usage for each group
   - Ensures groups stay within token limits

3. **ReviewQueueManager**: Manages the review process
   - Processes file groups in sequence
   - Provides progress updates
   - Handles cancellation and error recovery

4. **CopilotService**: Interfaces with GitHub Copilot
   - Sends prompts to the language model
   - Processes and sanitizes responses
   - Handles error cases and retries

5. **ResultAggregationService**: Combines results from multiple reviews
   - Merges issues from different file groups
   - Removes duplicates
   - Generates a comprehensive summary

6. **WebView UI**: Presents results in an interactive interface
   - Displays issues by severity and category
   - Provides navigation to issue locations
   - Supports filtering and state persistence

### Large PR Handling

For large PRs, the extension uses a sophisticated chunking strategy:

1. Files are grouped based on related changes and dependencies
2. Each group is processed independently by the language model
3. Results are aggregated and deduplicated
4. A final summary is generated based on all findings

This approach allows the extension to handle PRs of any size, even with models that have context limitations.

### Error Handling and Debugging

The PR Review Assistant includes robust error handling:

- **JSON Sanitization**: Automatically cleans and repairs malformed JSON responses
- **Debug Logging**: Optional logging of raw requests and responses for troubleshooting
- **Graceful Degradation**: Falls back to partial results when errors occur
- **Progress Reporting**: Detailed progress updates during processing

To enable debug logging for troubleshooting:

```json
"copilotPlusPlus.prReview.enableDebugLogging": true
```

When enabled, debug logs are saved to the extension's storage directory when errors occur.

## How It Works

The PR Review assistant:

1. Retrieves the code changes (diff) between selected branches
2. Groups related files to optimize processing
3. Analyzes each group for potential issues using GitHub Copilot
4. Aggregates and categorizes findings by severity and type
5. Presents them in an interactive interface with navigation links
6. Persists review state between sessions

## Tips for Effective PR Reviews

- Choose the appropriate base branch to correctly identify changes
- Review issues by severity, starting with Critical issues first
- Use the navigation links to quickly jump to problem areas
- Mark issues as reviewed to track your progress
- Use keyboard shortcuts (j/k) to navigate between issues
- Consider the suggestions provided when addressing issues
- Remember that AI-assisted reviews complement, but don't replace human review

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `k` | Navigate to next issue |
| `j` | Navigate to previous issue |
| `f` | Open the current issue's file |
| `d` | Toggle the current issue as reviewed |