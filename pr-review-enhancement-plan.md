# PR Review Assistant Enhancement Plan

## Current System Analysis

The PR review tool currently:
- Retrieves diff data between two branches using GitService
- Uses `getDetailedDiffBetweenBranches` for rich context with line numbers
- Sends the entire diff in a single request to the Copilot LLM
- Uses a structured prompt with configurable checks for security, code style, performance, breaking changes, etc.
- Returns results in a JSON format with severity levels (Critical, High, Medium, Low)
- Shows results in a React-based card UI grouped by severity
- Provides navigation links to jump directly to issue locations in files
- Allows copying issues and suggestions to clipboard

The key limitation is that large PRs with many files exceed the context limit of the LLM, causing the review to fail completely.

## Proposed Solution

Implement a file-based chunking system that processes code changes in logical groups with an enhanced UI that shows per-file status and results.

## Architecture Enhancements

### 1. File Processing System
- **FileGroupingService**: Groups files using the existing detailed diff data already gathered by GitService
- **ReviewQueueManager**: Processes file groups while maintaining the same PR review prompt structure
- **ResultAggregationService**: Merges individual reviews while preserving the existing result format

### 2. Modern UI Components
- Enhanced card-based file representation with collapsible details
- Interactive heat map for issue visualization
- Visual issue clustering using existing severity and category system
- Real-time progress indication with per-file status

## Implementation Details

### Module 1: Smart File Chunking
```
Purpose: Intelligently divide PR changes into processable chunks
```
- Leverage existing `getDetailedDiffBetweenBranches` method for rich diff data
- Group files by:
  - Related functionality (files in same directory)
  - Change volume (to balance chunks)
  - Related components (identify imports/dependencies)
- Maintain existing prompt structure from `promptService.ts` but adapt it for file subsets
- Use token estimation to ensure chunks fit within LLM context limits

### Module 2: Progressive Processing Engine
```
Purpose: Process file groups in sequence with status tracking
```
- Create a queue system that:
  - Prioritizes modified files with most changes
  - Processes each group with existing analysis categories from `PR_REVIEW_INSTRUCTION`
  - Maintains state of reviewed vs. pending files
- Update the frontend to show per-file progress
- Reuse existing `CopilotService.reviewPrChanges()` method but modify to handle chunks
- Support parallel processing with configurable rate limiting

### Module 3: Result Aggregation System
```
Purpose: Combine partial reviews into complete assessment
```
- Maintain existing result format:
```json
{
  "summary": {
    "assessment": "Overall assessment of the code changes",
    "strengths": ["Key strength 1", "Key strength 2"],
    "criticalIssues": ["Critical issue 1", "Critical issue 2"],
    "recommendations": ["Recommendation 1", "Recommendation 2"]
  },
  "issues": [...]
}
```
- Merge issues from multiple reviews with duplicate detection
- Create custom prompt for generating overall assessment once all chunks are processed
- Apply existing `enhanceReviewResults` function to combined results for code context

### Module 4: Enhanced File-Centric UI
```
Purpose: Create an interface optimized for large PRs
```
- Transform existing card-based UI to center on files rather than issues
- Each file card shows:
  - Processing status (pending, in-progress, completed)
  - Issue count by severity with existing severity colors
  - Expandable section with current issue presentation
- Maintain existing severity indicators and styling:
```css
.issue-severity-critical {
  background-color: var(--vscode-errorForeground);
  color: var(--vscode-editor-background);
}
```
- Add heat map visualization using current severity color scheme
- Reuse existing code snippet and suggestion UI for file details

## Prompt Engineering Updates

### 1. File Group Analysis Prompt
Adapt the existing `PR_REVIEW_INSTRUCTION` to focus on specific file subsets:

```
You are reviewing a SUBSET of files from a larger PR. Focus ONLY on these specific files:
{FILE_LIST}

These files are part of a PR from branch {SOURCE_BRANCH} to {TARGET_BRANCH}.

[... existing prompt content about reviewing thoroughly ...]

IMPORTANT: Only analyze the listed files. Ignore references to other files that might appear in the diff but aren't in the file list.
```

### 2. Summary Generation Prompt
Add a new prompt type to generate an overall summary after all file groups are processed:

```
You are synthesizing the results of multiple file-specific code reviews into an overall PR summary.

The PR includes these directories with changes:
{DIRECTORY_STRUCTURE}

Here are the key findings from each file group:
{FILE_GROUP_SUMMARIES}

Provide a comprehensive PR review summary following this format:
{
  "summary": {
    "assessment": "Overall assessment of the code changes across all files",
    "strengths": ["Key strength 1", "Key strength 2"],
    "criticalIssues": ["Most critical issue 1", "Most critical issue 2"],
    "recommendations": ["Overall recommendation 1", "Overall recommendation 2"]
  }
}

Consider patterns across files and prioritize the most impactful issues in your summary.
```

## User Flow

1. User selects source/target branches and model (preserves current interface)
2. System analyzes diff and organizes files into logical groups
3. UI displays card grid with all files in pending state
4. System processes files in batches, updating UI in real-time
5. Each file card updates as processing completes:
   - Severity indicators use existing color scheme
   - Issues are grouped using current categorization
6. When all files are processed, system generates overall summary
7. Users can expand/collapse file details, filter by severity or file type
8. Existing issue details remain, including:
   - Code snippets with context
   - Navigation links to jump to issues
   - Suggested fixes with copy functionality

## Flow Diagram

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  User Input     │     │  Git Service    │     │  File Analysis  │
│  (Branches,     │────▶│  (Get changed   │────▶│  & Prioritization│
│   Model)        │     │   files & diffs)│     │                 │
└─────────────────┘     └─────────────────┘     └────────┬────────┘
                                                         │
                                                         ▼
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Card-Based UI  │     │  Visual Issue   │     │  Review Queue   │
│  (File cards,   │◀────│  Map            │◀────│  Manager        │
│   Filters)      │     │  (Real-time)    │     │                 │
└───────┬─────────┘     └─────────────────┘     └────────┬────────┘
        │                         ▲                      │
        │                         │                      ▼
        │                         │              ┌─────────────────┐
        │                         │              │  Copilot        │
        ▼                         │              │  Service        │
┌─────────────────┐     ┌─────────────────┐     │  (Process file  │
│  User           │     │  Progressive    │◀────│  groups)        │
│  Interaction    │     │  Results        │     └─────────────────┘
│  (Navigate,     │────▶│  Aggregation    │               │
│   Filter)       │     │                 │               ▼
└─────────────────┘     └─────────────────┘     ┌─────────────────┐
                                                │  Cross-File     │
                                                │  Analysis       │
                                                └─────────────────┘
```

## UI Component Details

### 1. File Card Component
- Header with file name, path breadcrumb, and icon for file type
- Status indicator (pending, processing, complete, has issues)
- Issue counters by severity using existing severity colors
- Expandable content area with:
  - Issues grouped by severity (reusing current issue card design)
  - Syntax-highlighted code snippets (reusing existing code snippet component)
  - Navigation links to source files (using current implementation)
  - Copy buttons for code and issue details (maintaining existing functionality)

### 2. Issue Heat Map
- Interactive visualization where:
  - Each file is represented as a rectangle
  - Size corresponds to change magnitude
  - Color intensity shows issue severity using existing color scheme:
    - Critical: var(--vscode-errorForeground)
    - High: var(--vscode-testing-iconFailed)
    - Medium: var(--vscode-testing-iconSkipped)
    - Low: var(--vscode-testing-iconQueued)
  - Grouping by directory structure
  - Hover for quick summary, click to navigate (leveraging existing navigation function)

### 3. Filter and Control Panel
- Search input with fuzzy matching for file paths and issue content
- Toggle filters:
  - Severity levels (using existing severityEmojis)
  - Issue categories (using existing categoryEmojis)
  - File types and directories
- Sort options:
  - By severity count
  - By file size/change volume
  - By path
- View options:
  - Card grid (default)
  - Heat map
  - Compact list

### 4. Summary Dashboard
- PR health score with visual indicator
- Issue breakdown chart by severity and category
- Most affected files highlighted
- Processing progress and ETA display

## Implementation Phases

### Phase 1: File Processing Architecture
- Implement file grouping algorithm
- Add tokenization to estimate LLM context usage
- Modify PR review request to handle subsets of files
- Create processing queue with prioritization

### Phase 2: Enhanced UI Framework
- Extend the current React-based UI for file-centric view
- Add file status indicators
- Maintain existing issue card styling
- Implement collapsible file sections

### Phase 3: Result Aggregation
- Create system to merge partial results
- Implement cross-file analysis
- Design summary generation from multiple reviews
- Handle duplicate issue detection

### Phase 4: Final Integration
- Connect all components with proper state management
- Add heat map visualization
- Integrate search and filtering
- Optimize performance for large PRs

By building on the existing codebase and maintaining the established UI patterns, this approach provides a scalable solution for large PR reviews while preserving the current functionality that works well for smaller PRs.