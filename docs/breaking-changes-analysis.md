# Breaking Changes Analysis

## Overview

The Breaking Changes Analysis feature helps developers identify potential breaking changes between different branches of their codebase. This is particularly useful when preparing for version upgrades, API changes, or any modifications that might affect consumers of your code.

By comparing two branches, the feature identifies changes that could break existing functionality, such as:
- Method signature changes
- Class structure modifications
- Enum value alterations
- Member removals
- Behavior changes

## Usage

1. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
2. Search for and select "Analyze Breaking Changes"
3. Select the source branch (typically your feature branch)
4. Select the target branch (typically the main/master branch)
5. Choose a language model for the analysis
6. Click "Analyze Breaking Changes"

The results will display in a webview panel, showing:
- A summary of breaking changes by severity
- Detailed information about each breaking change
- Recommendations for addressing the issues
- Affected code locations with navigation links

## Features

### Branch Selection
Choose any two branches in your repository to compare. The extension will analyze the differences between these branches to identify potential breaking changes.

### Language Model Selection
Select from various language models to perform the analysis:
- GPT-4o
- GPT-4o-mini
- Claude 3.5 Sonnet
- o1
- o1-mini

Different models may have different strengths in analyzing code changes.

### Breaking Change Detection
The feature detects various types of breaking changes:
- **Method Signature Changes**: Parameter changes, return type modifications
- **Class Structure Changes**: Property removals, interface changes
- **Enum Value Changes**: Removed or modified enum values
- **Member Removals**: Deleted public methods or properties
- **Behavior Changes**: Functional modifications that could affect consumers

### Severity Classification
Breaking changes are classified by severity:
- **Critical**: Changes that will definitely break existing code
- **High**: Changes likely to cause issues in most use cases
- **Medium**: Changes that might cause problems in some scenarios
- **Low**: Minor changes with limited impact

### Filtering and Search
Filter the results by:
- Severity level
- Change type
- Free text search across descriptions, files, and recommendations

### Code Navigation
Click on file locations to navigate directly to the affected code in your editor.

## Technical Implementation

### Architecture

The Breaking Changes Analysis feature is implemented using a modular architecture with several key components:

1. **Command Registration**: The feature is registered as a command in the extension
2. **Git Integration**: Uses Git to compare branches and extract changes
3. **Breaking Changes Service**: Analyzes code changes to identify breaking changes
4. **Webview Panel**: Displays results in an interactive UI
5. **Configuration Service**: Provides customization options
6. **Queue Management**: Handles processing of multiple files in parallel

### Detailed Flow Diagram

```
┌─────────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
│  Extension          │     │  Breaking Changes   │     │  Git Service        │
│  Activation         │────▶│  Command            │────▶│                     │
│  - Register Command │     │  - User Input       │     │  - Validate Repo    │
└─────────────────────┘     └─────────────────────┘     └──────────┬──────────┘
                                                                   │
                                                                   ▼
┌─────────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
│  Breaking Changes   │     │  Breaking Changes   │     │  Git Service        │
│  Panel              │◀────│  Panel              │◀────│                     │
│  - Display UI       │     │  - Create Webview   │     │  - Get Branches     │
└──────────┬──────────┘     └─────────────────────┘     └─────────────────────┘
           │
           ▼
┌─────────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
│  User Interface     │     │  Breaking Changes   │     │  Git Service        │
│  - Select Source    │────▶│  Panel              │────▶│                     │
│  - Select Target    │     │  - Process Request  │     │  - Get Diff         │
│  - Select Model     │     │                     │     │  - Get Files        │
└─────────────────────┘     └──────────┬──────────┘     └──────────┬──────────┘
                                       │                            │
                                       ▼                            ▼
┌─────────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
│  Breaking Changes   │     │  Breaking Changes   │     │  Changes Queue      │
│  Service            │◀────│  Service            │◀────│  Manager            │
│  - Process Results  │     │  - Analyze Changes  │     │  - Process Files    │
└──────────┬──────────┘     └──────────┬──────────┘     └──────────┬──────────┘
           │                            │                            │
           ▼                            ▼                            ▼
┌─────────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
│  Prompt Service     │     │  Language Model     │     │  Config Service     │
│  - Build Context    │────▶│  - Analyze Code     │◀────│  - Get Settings     │
│  - Format Prompt    │     │  - Generate Results │     │  - Get Model        │
└──────────┬──────────┘     └──────────┬──────────┘     └─────────────────────┘
           │                            │
           ▼                            ▼
┌─────────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
│  Breaking Changes   │     │  Breaking Changes   │     │  User Interface     │
│  Panel              │◀────│  Service            │────▶│  - Display Results  │
│  - Update UI        │     │  - Format Results   │     │  - Enable Filtering │
└─────────────────────┘     └─────────────────────┘     └─────────────────────┘
```

### Component Details

#### Breaking Changes Command (`src/commands/breakingChangesCommand.ts`)
- Registers the command in VS Code
- Validates the current workspace is a Git repository
- Creates and shows the Breaking Changes Panel

#### Breaking Changes Panel (`src/commands/breakingChangesPanel.ts`)
- Creates and manages the webview UI
- Handles communication between the extension and webview
- Processes user input for branch selection and model choice
- Initiates the breaking changes analysis
- Displays results in an interactive UI

#### Breaking Changes Service (`src/services/breakingChangeService.ts`)
- Core service that orchestrates the analysis process
- Integrates with Git Service to get code changes
- Uses the Changes Queue Manager to process files
- Formats and structures the analysis results
- Provides methods for analyzing breaking changes between branches

#### Changes Queue Manager (`src/services/breakingChanges/changesQueueManager.ts`)
- Manages the processing queue for analyzing multiple files
- Handles parallel processing of files for better performance
- Provides progress updates during analysis
- Manages error handling and recovery

#### Git Service (`src/services/gitService.ts`)
- Provides Git operations for the extension
- Gets available branches in the repository
- Retrieves diffs between branches
- Gets file changes and commit information
- Provides detailed diff information for context

#### Prompt Service (Integration with Language Models)
- Builds context for the language model
- Formats prompts with code changes and repository information
- Processes responses from language models
- Extracts structured data from model outputs

#### Webview UI (`media/breaking-changes/breaking-changes-panel.js`)
- React-based UI for displaying results
- Provides filtering and searching capabilities
- Enables navigation to affected code
- Displays severity distribution and statistics
- Offers an interactive interface for exploring breaking changes

### Data Flow

1. **Initialization**:
   - User activates the Breaking Changes command
   - Extension validates Git repository
   - Breaking Changes Panel is created and displayed

2. **User Input**:
   - User selects source branch, target branch, and language model
   - User clicks "Analyze Breaking Changes"
   - Panel sends analysis request to the Breaking Changes Service

3. **Git Operations**:
   - Git Service retrieves branch information
   - Git Service gets diff between selected branches
   - Git Service extracts changed files and code context

4. **Analysis Process**:
   - Changes Queue Manager processes files in parallel
   - For each file:
     - Extract code changes
     - Build context with repository information
     - Send to language model for analysis
     - Process and structure the results

5. **Result Processing**:
   - Breaking Changes Service aggregates results
   - Results are categorized by severity and change type
   - Affected locations are identified and linked to code
   - Recommendations are generated for each breaking change

6. **Result Display**:
   - Results are sent to the Breaking Changes Panel
   - Panel updates UI with summary statistics
   - Panel displays detailed breaking changes
   - User can filter, search, and navigate through results

### Implementation Details

#### Breaking Change Detection Algorithm

The detection algorithm follows these steps:

1. **Diff Analysis**:
   - Extract added, modified, and deleted lines from Git diff
   - Identify changed functions, classes, and interfaces
   - Extract context around changes for better analysis

2. **Context Building**:
   - Include file structure and imports
   - Add usage patterns from other files
   - Include repository structure information

3. **Language Model Analysis**:
   - Send context to selected language model
   - Use structured prompts to guide analysis
   - Extract breaking changes from model response

4. **Classification**:
   - Categorize changes by type (method signature, class structure, etc.)
   - Assign severity based on impact analysis
   - Generate recommendations for addressing each issue

#### Performance Optimizations

- **Parallel Processing**: Multiple files are analyzed concurrently
- **Incremental Analysis**: Only changed files are analyzed
- **Caching**: Results are cached to improve performance for repeated analyses
- **Selective Context**: Only relevant context is included in prompts

#### UI Components

The UI is built with React and includes:

- **Configuration Section**: Branch and model selection
- **Summary Section**: Statistics and severity distribution
- **Filters Section**: Search and filtering options
- **Results Section**: Detailed breaking changes with expandable details
- **Navigation**: Links to affected code locations

## Configuration Options

The Breaking Changes Analysis feature can be configured through the extension settings:

```json
"copilot-plus-plus.breakingChanges": {
  "detectionLevel": "moderate", // "strict", "moderate", or "lenient"
  "includePrivateAPIs": false,  // Whether to include private APIs in analysis
  "includeInternal": false,     // Whether to include internal details
  "maxParallelProcessing": 5,   // Maximum number of files to process in parallel
  "contextDepth": "medium"      // "shallow", "medium", or "deep"
}
```

- **detectionLevel**: Controls how strict the analysis should be
  - `strict`: Reports all potential breaking changes, even minor ones
  - `moderate`: Balanced approach, focusing on likely issues
  - `lenient`: Reports only the most critical breaking changes

- **includePrivateAPIs**: When enabled, analyzes changes to private APIs that might be used by consumers despite not being part of the public interface

- **includeInternal**: When enabled, includes internal implementation details that might indirectly affect consumers

- **maxParallelProcessing**: Controls how many files are processed in parallel during analysis

- **contextDepth**: Controls how much context is included in the analysis
  - `shallow`: Minimal context, faster but less accurate
  - `medium`: Balanced approach, good for most cases
  - `deep`: Maximum context, more accurate but slower

## Integration with Other Features

The Breaking Changes Analysis feature works well with other Copilot++ features:

- **PR Review Assistance**: Use Breaking Changes Analysis before submitting a PR to identify potential issues
- **Commit Message Generation**: Generate commit messages that highlight breaking changes
- **PR Description Generation**: Include breaking change information in PR descriptions
- **Code Documentation**: Generate documentation for breaking changes and migration paths

## Best Practices

- Run Breaking Changes Analysis before merging feature branches to main/master
- Pay special attention to Critical and High severity issues
- Consider using the "strict" detection level for public APIs and libraries
- Document breaking changes in your release notes
- When possible, provide backward compatibility or migration paths
- Use the analysis results to create migration guides for consumers
- Consider semantic versioning implications of breaking changes
- Run the analysis regularly during development to catch issues early

## Troubleshooting

### Common Issues

- **No branches found**: Ensure your workspace is a valid Git repository
- **Analysis timeout**: Try analyzing fewer files or using a faster language model
- **Inaccurate results**: Try a different language model or increase context depth
- **Performance issues**: Reduce parallel processing or use a more focused file selection

### Logging

The extension logs detailed information about the breaking changes analysis process. To view logs:

1. Open the Output panel in VS Code (`Ctrl+Shift+U` / `Cmd+Shift+U`)
2. Select "Copilot++" from the dropdown menu
3. Look for entries related to breaking changes analysis

## Future Enhancements

Planned improvements for the Breaking Changes Analysis feature:

- **Visual Diff View**: Side-by-side comparison of changes
- **Impact Analysis**: Estimate the scope of impact for each breaking change
- **Automatic Migration Suggestions**: Generate code to address breaking changes
- **Integration with CI/CD**: Run analysis automatically in CI pipelines
- **Historical Tracking**: Track breaking changes over time
- **Custom Rules**: Define custom rules for breaking change detection
- **Language-Specific Analysis**: Specialized analysis for different programming languages 