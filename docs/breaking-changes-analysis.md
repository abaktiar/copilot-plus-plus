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

The Breaking Changes Analysis feature is implemented using a combination of services and components:

1. **Command Registration**: The feature is registered as a command in the extension
2. **Git Integration**: Uses Git to compare branches and extract changes
3. **Breaking Changes Service**: Analyzes code changes to identify breaking changes
4. **Webview Panel**: Displays results in an interactive UI
5. **Configuration Service**: Provides customization options

### Flow Diagram

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Command        │     │  Git Service    │     │  Breaking       │
│  Palette        │────▶│  - Get Branches │────▶│  Changes        │
│  - User Input   │     │  - Compare Diff │     │  Service        │
└─────────────────┘     └─────────────────┘     └────────┬────────┘
                                                         │
                                                         ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Breaking       │     │  Prompt         │     │  Language       │
│  Changes        │◀────│  Service        │◀────│  Model          │
│  Panel          │     │  - Build Context│     │  - Analyze      │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

### Key Components

#### Breaking Changes Command
- Registered in `extension.ts`
- Implemented in `src/commands/breakingChangesCommand.ts`
- Handles user interaction for branch selection and initiates the analysis

#### Breaking Changes Service
- Located in `src/services/breakingChangeService.ts`
- Core logic for analyzing code changes
- Integrates with the language model through the Prompt Service
- Uses configuration from Config Service

#### Breaking Changes Panel
- Implemented in `src/commands/breakingChangesPanel.ts`
- Creates and manages the webview UI
- Handles messages between the extension and webview

#### Webview UI
- Implemented in `media/breaking-changes-panel.js`
- React-based UI for displaying results
- Provides filtering, searching, and navigation capabilities

### Analysis Process

1. **Branch Comparison**:
   - The Git Service extracts the diff between the selected branches
   - It identifies changed files, added/removed lines, and commit information

2. **Context Building**:
   - The Prompt Service builds a comprehensive context for the language model
   - Includes code changes, file structure, and usage patterns

3. **Breaking Change Detection**:
   - The language model analyzes the context to identify potential breaking changes
   - It classifies changes by type and severity
   - It provides recommendations for addressing each issue

4. **Result Presentation**:
   - The Breaking Changes Panel displays the analysis results
   - Users can filter, search, and navigate through the findings

## Configuration Options

The Breaking Changes Analysis feature can be configured through the extension settings:

```json
"copilot-plus-plus.breakingChanges": {
  "detectionLevel": "moderate", // "strict", "moderate", or "lenient"
  "includePrivateAPIs": false,  // Whether to include private APIs in analysis
  "includeInternal": false      // Whether to include internal details
}
```

- **detectionLevel**: Controls how strict the analysis should be
  - `strict`: Reports all potential breaking changes, even minor ones
  - `moderate`: Balanced approach, focusing on likely issues
  - `lenient`: Reports only the most critical breaking changes

- **includePrivateAPIs**: When enabled, analyzes changes to private APIs that might be used by consumers despite not being part of the public interface

- **includeInternal**: When enabled, includes internal implementation details that might indirectly affect consumers

## Integration with Other Features

The Breaking Changes Analysis feature works well with other Copilot++ features:

- **PR Review Assistance**: Use Breaking Changes Analysis before submitting a PR to identify potential issues
- **Commit Message Generation**: Generate commit messages that highlight breaking changes
- **PR Description Generation**: Include breaking change information in PR descriptions

## Best Practices

- Run Breaking Changes Analysis before merging feature branches to main/master
- Pay special attention to Critical and High severity issues
- Consider using the "strict" detection level for public APIs and libraries
- Document breaking changes in your release notes
- When possible, provide backward compatibility or migration paths 