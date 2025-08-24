import * as vscode from 'vscode';
import { ConfigService, CommitMessageConfig, PrDescriptionConfig, PrReviewConfig } from './configService';
import { DetailedDiffLine } from './gitService';

const MAX_CONTEXT_LENGTH = 100000; // 1 lakh characters
const MAX_FILE_CONTEXT = 20000; // Maximum characters per file

export class PromptService {
  private static readonly COMMIT_INTRO =
    'Review the following git command output to understand the changes you are about to generate a commit message for.';

  private static readonly COMMIT_INSTRUCTION = `Generate a commit message ONLY for the actual, functional code changes visible in the provided git diff. If there are no substantive changes (only whitespace/formatting, reordered imports, comment-only edits), DO NOT generate a commit message unless the change is formatting-only, in which case use the appropriate style/type for formatting.

Formatting-only changes policy (important):
- First, determine if ANY functional changes exist anywhere in the diff (logic, behavior, API signatures, conditionals, queries, data flow, constants, variable names impacting behavior, new/removed code paths, etc.).
- If functional changes exist in ANY file:
  - Focus the title and body exclusively on those functional changes.
  - For files/hunks that are formatting-only (no behavior change), add ONE succinct bullet at the end, e.g., "normalize code formatting in ancillary files". Do NOT generate a separate formatting-focused title.
  - Do NOT list every line or file mechanically; summarize formatting as a single line unless a small set of files needs explicit mention.
- If NO functional changes exist (all changes are formatting-only):
  - Generate a formatting commit using the appropriate style for the configured format (e.g., conventional: "style: ...", gitmoji: "🎨 format: ...", or template-specific equivalent).

How to classify formatting-only hunks (examples that should be treated as non-functional):
- Pure reflow of long lines / joining or splitting lines without altering code semantics (e.g., logger.log multi-line → single line as in the example provided).
- Indentation, whitespace, trailing commas/semicolons, quote style, import reorder/grouping with identical bindings, object literal/parameter list wrapping, comment reflow, ESLint/Prettier automatic fixes that do not change behavior.
- No new identifiers, altered literals that impact behavior, changed operators/conditions, added/removed statements affecting execution, or modified API calls.

Title rules:
- Single line, imperative mood, active voice, no trailing period
- Max 72 characters
- Must follow the required style
{COMMIT_STYLE_INSTRUCTION}
{SCOPE_INFERENCE_INSTRUCTION}
{BREAKING_CHANGE_RULES}
{TICKET_INSTRUCTION}

Body rules:
- Add a blank line after the title
- Use concise bullets that:
  - Start with "- " and group by functionality (not by file)
  - Emphasize intent/outcome; mention files only when clarifying
  - Avoid repeating the title or listing files mechanically
  - Wrap lines to ~72 chars; keep each bullet ≤100 chars
  - If functional and formatting-only changes are mixed: include exactly ONE final bullet summarizing formatting (e.g., "normalize formatting in non-functional files"), and keep all other bullets focused on functional changes
{INCLUDE_TESTS_DOCS_INSTRUCTION}

Footers (include only if provided by context):
{FOOTERS_INSTRUCTION}

Safety and constraints:
- Do not include secrets, stack traces, or >1 line of code
- Do not speculate beyond the visible diff; if truncated, generalize
- Output only the commit message (no backticks, no preamble)

Validation checklist before returning:
- Title ≤72 chars, imperative, correct style/scope
- Bullets grouped by functionality, non-redundant, wrapped
- Breaking changes correctly denoted with ! and footer when applicable
- Ticket formatting applied when provided
- Footers present only when provided by context
{DIFF_TRUNCATION_NOTE}

Format your response as:
- First line: commit title
- Blank line
- Bullet list (optional but recommended)
- Optional footers`;

  private static readonly CONVENTIONAL_STYLE =
    'Use conventional commit format: <type>(<scope>): <description> where type is one of feat, fix, docs, style, refactor, test, or chore.';

  private static readonly GITMOJI_STYLE =
    'Use gitmoji style with an appropriate emoji prefix based on the type of change, e.g., ✨ for new features, 🐛 for bug fixes.';

  private static readonly CUSTOM_STYLE =
    'The commit message should strictly adhere to the commit format from the shared git commit template.';

  private static readonly TICKET_INSTRUCTION =
    'Include the ticket number "{TICKET}" in the commit title. If using conventional commit format, place it immediately after the scope (if present) in square brackets: <type>(<scope>): [{TICKET}] <description>. Example: "fix(webviews): [HFMS-362] Fix issue". For other formats, place [{TICKET}] at the beginning of the commit message title.';

  // Additional commit helpers/placeholders
  private static readonly SCOPE_INFERENCE_INSTRUCTION =
    'Infer <scope> from dominant area of change (e.g., webviews, services, git, types). If ambiguous or cross-cutting, omit scope. Do not invent scopes.';

  private static readonly BREAKING_CHANGE_RULES =
    'If public APIs or serialized formats change, append ! to the type (e.g., feat! or refactor!) and include a BREAKING CHANGE footer with a 1–3 line migration note.';

  private static readonly INCLUDE_TESTS_DOCS_INSTRUCTION =
    'When tests or docs are added/updated, include succinct bullets like "add tests for X" or "update docs for Y".';

  private static readonly FOOTERS_INSTRUCTION =
    'Append recognized footers only if given in context, each on its own line: Closes #<id> | Refs <id> | Co-authored-by: Name <email> | Signed-off-by: Name <email>.';

  private static readonly DIFF_TRUNCATION_NOTE =
    'If the diff is summarized or truncated, avoid speculation and summarize only visible, certain changes. When both functional and formatting-only changes are present, prioritize functional changes and condense formatting into a single summary bullet.';

  // PR Description prompt templates
  private static readonly PR_DESCRIPTION_INTRO =
    'Review the following git information to understand the changes between branches for a pull request description generation.';

  private static readonly PR_DESCRIPTION_INSTRUCTION = `Generate a comprehensive pull request description based on the provided git diff and commit information.
The description should include:
1. A clear, descriptive title that summarizes the changes
2. A detailed explanation of what was changed and why
{PR_STYLE_INSTRUCTION}
{TECHNICAL_INSTRUCTION}
{GROUP_COMMITS_INSTRUCTION}

Format the response as a JSON object with two fields:
{
  "title": "PR title here",
  "description": "Full PR description in markdown format here"
}`;

  private static readonly PR_DESCRIPTION_DETAILED =
    'Create a detailed PR description with sections for Purpose, Approach, Technical Details, and Testing if applicable.';

  private static readonly PR_DESCRIPTION_CONCISE =
    'Create a concise PR description that briefly summarizes the changes in a few sentences.';

  private static readonly PR_DESCRIPTION_CUSTOM =
    'The PR description should match the style of provided examples in the repository.';

  private static readonly PR_TECHNICAL_INSTRUCTION =
    'Include a "Technical Details" section that summarizes the key files changed and the nature of those changes.';

  private static readonly PR_GROUP_COMMITS_INSTRUCTION =
    'Group related commits by their type (e.g., features, bug fixes, refactoring) in the PR description.';

  // PR Review prompt templates
  private static readonly PR_REVIEW_INTRO =
    'You are an expert code review assistant with deep technical knowledge across multiple programming languages and frameworks.';

  private static readonly PR_REVIEW_INSTRUCTION = `You are a code review expert. Analyze the provided git diff THOROUGHLY and provide a COMPLETE, COMPREHENSIVE review in a SINGLE response.
You must identify ALL issues across the following categories AT ONCE:
{SECURITY_INSTRUCTION}
{CODE_STYLE_INSTRUCTION}
{PERFORMANCE_INSTRUCTION}
{BREAKING_CHANGES_INSTRUCTION}
{LOGICAL_ERRORS_INSTRUCTION}
{TESTING_GAPS_INSTRUCTION}

IMPORTANT RULES FOR YOUR REVIEW:
1. Provide ALL findings in a SINGLE response - do not split your review across multiple responses
2. Be thorough and check for ALL possible issues in ALL categories
3. Review ALL changed files and code sections
4. For each issue found:
   - Assign a severity level from: {SEVERITY_LEVELS}
   - Provide a clear, specific description of the issue
   - Include the exact file path from the git diff
   - ALWAYS specify the precise line number shown in the git diff where the issue occurs
   - Offer a specific, actionable code suggestion to fix the issue
   - When possible, provide a complete code snippet showing how the fix should be implemented
   - Explain briefly why your suggestion is better

CRITICAL INSTRUCTION REGARDING CODE CONTEXT:
- Pay careful attention to what is being ADDED vs REMOVED in the diff
- Lines preceded by "-" are being REMOVED in the PR and should NOT be referenced as issues
- Lines preceded by "+" are being ADDED in the PR and these represent the NEW code to review
- When analyzing code changes, verify that your feedback refers ONLY to the NEW code (marked with +), not the old code being removed
- DO NOT suggest fixes for issues that are already being addressed in the PR itself
- When you see a line like "[old:X new:Y]" or similar notation, focus on the NEW line numbers (Y) for your review

IMPORTANT LINE NUMBER RULES:
- The git diff contains detailed line information showing both old and new line numbers
- When referring to lines, use the NEW line numbers (marked with + in the diff), not the old line numbers
- Be extremely precise with line numbers
- When a line number reference like "[old:X new:Y]" is shown, always use Y (the new line number) in your review

SCOPE OF REVIEW:
- Examine both added and modified code
- Focus on finding real issues that impact code quality, not stylistic preferences
- Consider both immediate and potential future impacts of the changes
- Look for patterns that might indicate systemic issues
- Avoid false positives by confirming issues exist in the NEW code, not just in the removed lines

SUMMARY REQUIREMENTS:
Provide a comprehensive summary that includes:
1. Overall code quality assessment
2. Key strengths of the changes
3. Most critical issues to address (if any)
4. Recommendations for improving the PR

FORMAT YOUR RESPONSE AS A SINGLE JSON OBJECT with this exact structure:
{
  "summary": {
    "assessment": "Overall assessment of the code changes",
    "strengths": ["Key strength 1", "Key strength 2"],
    "criticalIssues": ["Critical issue 1", "Critical issue 2"],
    "recommendations": ["Recommendation 1", "Recommendation 2"]
  },
  "issues": [
    {
      "severity": "Critical|High|Medium|Low",
      "category": "Security|Code Style|Performance|Breaking Change|Logical Error|Testing Gap|Other",
      "description": "Clear description of the issue",
      "filePath": "path/to/file.ext",
      "lineNumber": 123,
      "suggestion": "Brief suggestion to fix the issue",
      "suggestedCode": "Complete code snippet showing the fix implementation",
      "justification": "Brief explanation of why this suggestion improves the code"
    }
  ]
}

If no issues are found, return an empty issues array with a positive summary assessment.

VERIFICATION STEP: Before finalizing your review, verify each reported issue by:
1. Confirming the issue exists in the NEW (added/modified) code, not in code being removed
2. Double-checking that your suggestion isn't already implemented elsewhere in the PR
3. Ensuring you're using the correct NEW line numbers in your report

REMEMBER: This must be a COMPLETE review delivered in a SINGLE response. Do not split your findings across multiple responses.`;

  private static readonly PR_REVIEW_SECURITY =
    'Check for security vulnerabilities such as injection flaws, authentication issues, sensitive data exposure, broken access controls, insecure dependencies, improper error handling that leaks sensitive information, and missing input validation.';

  private static readonly PR_REVIEW_CODE_STYLE =
    'Verify code follows project conventions, maintains consistent formatting, uses meaningful variable/function names, includes proper documentation/comments, follows language idioms, and avoids code duplication.';

  private static readonly PR_REVIEW_PERFORMANCE =
    'Identify performance concerns such as inefficient algorithms, N+1 queries, memory leaks, unnecessary recomputation, unoptimized resource usage, inefficient data structures, and potential bottlenecks in critical paths.';

  private static readonly PR_REVIEW_BREAKING_CHANGES =
    'Check for breaking changes such as modified public APIs, changed function signatures, altered database schemas, incompatible dependency updates, renamed fields/methods, and changes to expected behavior.';

  private static readonly PR_REVIEW_LOGICAL_ERRORS =
    'Identify logical errors including off-by-one errors, incorrect conditionals, improper state management, race conditions, edge cases not handled, incorrect assumptions, and flawed business logic implementation.';

  private static readonly PR_REVIEW_TESTING_GAPS =
    "Check for missing or inadequate tests, particularly for new features or bug fixes, edge cases not covered, and test code that doesn't properly validate the expected behavior.";

  // Breaking changes prompt templates
  private static readonly BREAKING_CHANGES_INTRO =
    'Review the following code changes between branches to identify potential breaking changes.';

  private static readonly BREAKING_CHANGES_INSTRUCTION = `Analyze the provided code changes and their usages to identify potential breaking changes.
Focus on:
1. API signature changes (method names, parameters, return types)
2. Class/interface structure modifications
3. Enum/constant value changes
4. Removal or relocation of public members
5. Behavioral changes that could affect consumers

For each identified breaking change:
- Provide the location of the change (file path and line number)
- Describe what changed and why it creates a breaking change
- List all affected locations (file paths and line numbers)
- Suggest potential fixes or migration strategies

Format your response as a JSON object with the following structure:
{
  "breakingChanges": [
    {
      "id": "unique-id",
      "changeType": "one of [method-signature, class-structure, enum-value, member-removal, behavior-change, other]",
      "severity": "one of [critical, high, medium, low]",
      "changeLocation": { "filePath": "path/to/file", "lineNumber": 123 },
      "description": "Description of what changed",
      "affectedLocations": [
        { "filePath": "path/to/file", "lineNumber": 456, "codeSnippet": "relevant code" }
      ],
      "recommendation": "Suggested fix or migration strategy"
    }
  ],
  "summary": {
    "totalBreakingChanges": 5,
    "criticalCount": 1,
    "highCount": 2,
    "mediumCount": 1,
    "lowCount": 1
  }
}

Only include actual breaking changes in your response. If no breaking changes are found, return an empty array for breakingChanges.`;

  public static buildPrompt(context: {
    files: any[];
    diff: string;
    branch?: string;
    ticketNumber?: string;
    commitTemplate?: string;
  }): vscode.LanguageModelChatMessage[] {
    // Get configuration
    const config = ConfigService.getCommitMessageConfig();

    // Build the context message
    const filesContext = context.files.map((f) => `${f.status} ${f.file}`).join('\n');
    const contextMessage = `
Git changes context:

Current branch: ${context.branch || 'unknown'}
${context.ticketNumber ? `Ticket number: ${context.ticketNumber}` : ''}

Files changed:
${filesContext}

Changes (git diff):
${context.diff}

Previous commits style (if available):
${context.commitTemplate || 'Not available'}`;

    // Determine commit style instruction based on config
    const commitStyleInstruction = this.getCommitStyleInstruction(config, context.commitTemplate);

    // Add ticket instruction if applicable
    const ticketInstruction =
      context.ticketNumber && config.includeTicketNumber
        ? this.TICKET_INSTRUCTION.replace('{TICKET}', context.ticketNumber)
        : '';

    // Create the messages array
    // Assemble extra instructions
    const scopeInstruction = this.SCOPE_INFERENCE_INSTRUCTION;
    const breakingChangeRules = this.BREAKING_CHANGE_RULES;
    const includeTestsDocs = this.INCLUDE_TESTS_DOCS_INSTRUCTION;
    const footersInstruction = this.FOOTERS_INSTRUCTION;
    const truncationNote = this.DIFF_TRUNCATION_NOTE;

    return [
      vscode.LanguageModelChatMessage.User(this.COMMIT_INTRO),
      vscode.LanguageModelChatMessage.User(contextMessage),
      vscode.LanguageModelChatMessage.User(
        this.COMMIT_INSTRUCTION.replace('{COMMIT_STYLE_INSTRUCTION}', commitStyleInstruction)
          .replace('{SCOPE_INFERENCE_INSTRUCTION}', scopeInstruction)
          .replace('{BREAKING_CHANGE_RULES}', breakingChangeRules)
          .replace('{INCLUDE_TESTS_DOCS_INSTRUCTION}', includeTestsDocs)
          .replace('{FOOTERS_INSTRUCTION}', footersInstruction)
          .replace('{DIFF_TRUNCATION_NOTE}', truncationNote)
          .replace('{TICKET_INSTRUCTION}', ticketInstruction)
      ),
    ];
  }

  /**
   * Smart truncation that preserves complete file contexts up to a limit
   */
  private static smartTruncateContext(diff: string): string {
    // Split by file sections (git diff markers)
    const files = diff.split('diff --git');

    // Process each file, preserving complete file contexts where possible
    return files
      .map((file, index) => {
        // Skip empty sections or just whitespace
        if (!file.trim()) {
          return '';
        }

        // Add back the diff marker except for first empty section
        const prefix = index === 0 && !file.trim() ? '' : 'diff --git';

        // If the file section is too large, truncate it
        if (file.length > MAX_FILE_CONTEXT) {
          // Find the last complete hunk before the limit
          const truncateIndex = file.lastIndexOf('\n@@', MAX_FILE_CONTEXT);
          if (truncateIndex > 0) {
            // Truncate at the last complete hunk
            return prefix + file.substring(0, truncateIndex) + '\n... (file diff truncated)';
          }
          // If no hunk marker found, do a simple truncation
          return prefix + file.substring(0, MAX_FILE_CONTEXT) + '\n... (file diff truncated)';
        }

        return prefix + file;
      })
      .join('');
  }

  /**
   * Build prompt messages for PR description generation
   */
  public static buildPrDescriptionPrompt(context: {
    sourceBranch: string;
    targetBranch: string;
    commits: Array<{
      hash: string;
      subject: string;
      body: string;
      author: string;
      date: string;
    }>;
    diff: string;
    files?: Array<{ status: string; file: string }>;
  }): vscode.LanguageModelChatMessage[] {
    // Get configuration
    const config = ConfigService.getPrDescriptionConfig();

    // Format commits for display
    const commitsFormatted = context.commits
      .map(
        (c) =>
          `Hash: ${c.hash.substring(0, 7)}\nAuthor: ${c.author}\nDate: ${c.date}\nSubject: ${c.subject}\nBody: ${
            c.body
          }`
      )
      .join('\n\n');

    // Format files if available
    const filesFormatted =
      context.files && context.files.length > 0
        ? context.files.map((f) => `${f.status} ${f.file}`).join('\n')
        : 'File list not available';

    // Build the context message
    const contextMessage = `
Pull Request Context:

Source Branch: ${context.sourceBranch}
Target Branch: ${context.targetBranch}

Commits (${context.commits.length}):
${commitsFormatted || 'No commits found between branches'}

Files Changed:
${filesFormatted}

Changes (git diff - smartly truncated if large):
${context.diff.length > MAX_CONTEXT_LENGTH ? this.smartTruncateContext(context.diff) : context.diff}
`;

    // Determine PR description style instruction based on config
    const prStyleInstruction = this.getPrDescriptionStyleInstruction(config);

    // Add technical details instruction if enabled
    const technicalInstruction = config.includeTechnicalDetails ? this.PR_TECHNICAL_INSTRUCTION : '';

    // Add group commits instruction if enabled
    const groupCommitsInstruction =
      config.groupCommitsByType && context.commits.length > 1 ? this.PR_GROUP_COMMITS_INSTRUCTION : '';

    // Create the messages array
    return [
      vscode.LanguageModelChatMessage.User(this.PR_DESCRIPTION_INTRO),
      vscode.LanguageModelChatMessage.User(contextMessage),
      vscode.LanguageModelChatMessage.User(
        this.PR_DESCRIPTION_INSTRUCTION.replace('{PR_STYLE_INSTRUCTION}', prStyleInstruction)
          .replace('{TECHNICAL_INSTRUCTION}', technicalInstruction)
          .replace('{GROUP_COMMITS_INSTRUCTION}', groupCommitsInstruction)
      ),
    ];
  }

  /**
   * Build prompt messages for PR review with enhanced diff context
   */
  public static buildPrReviewPrompt(context: {
    sourceBranch: string;
    targetBranch: string;
    commits: Array<{
      hash: string;
      subject: string;
      body: string;
      author: string;
      date: string;
    }>;
    diff: string;
    detailedDiff?: Array<any>;
    files?: Array<{ status: string; file: string }>;
  }): vscode.LanguageModelChatMessage[] {
    // Get configuration
    const config = ConfigService.getPrReviewConfig();

    // Format commits for display, ensuring no undefined values
    const commitsFormatted = context.commits
      .filter((c) => c.hash && c.subject) // Only include commits with required info
      .map((c) => {
        const hash = c.hash?.substring(0, 7) || 'unknown';
        const author = c.author || 'unknown';
        const date = c.date || 'unknown';
        const subject = c.subject || 'no subject';
        const body = c.body || '';

        return `Commit: ${hash}\nAuthor: ${author}\nDate: ${date}\nSubject: ${subject}${body ? `\nBody: ${body}` : ''}`;
      })
      .join('\n\n');

    // Format files if available
    const filesFormatted =
      context.files && context.files.length > 0
        ? context.files.map((f) => `${f.status} ${f.file}`).join('\n')
        : 'No file list available';

    // Build the context message with smart truncation
    const contextMessage = `
Pull Request Review Context:
Source Branch: ${context.sourceBranch}
Target Branch: ${context.targetBranch}

Files Changed:
${filesFormatted}

Commits (${context.commits.length}):
${commitsFormatted || 'No commits found between branches'}

Diff Context and Line Information:
${context.detailedDiff ? this.formatDetailedDiff(context.detailedDiff) : 'No detailed diff available'}

Full Changes (git diff - smartly truncated if large):
${context.diff.length > MAX_CONTEXT_LENGTH ? this.smartTruncateContext(context.diff) : context.diff}`;

    // Add review instruction components based on config
    const securityInstruction = config.includeSecurity ? this.PR_REVIEW_SECURITY : '';
    const codeStyleInstruction = config.includeCodeStyle ? this.PR_REVIEW_CODE_STYLE : '';
    const performanceInstruction = config.includePerformance ? this.PR_REVIEW_PERFORMANCE : '';
    const breakingChangesInstruction = config.includeBreakingChanges ? this.PR_REVIEW_BREAKING_CHANGES : '';
    const logicalErrorsInstruction = config.includeLogicalErrors ? this.PR_REVIEW_LOGICAL_ERRORS : '';
    const testingGapsInstruction = config.includeTestingGaps ? this.PR_REVIEW_TESTING_GAPS : '';
    const severityLevels = config.severityLevels.join('|');

    // Create the final instruction
    const reviewInstruction = this.PR_REVIEW_INSTRUCTION.replace('{SECURITY_INSTRUCTION}', securityInstruction)
      .replace('{CODE_STYLE_INSTRUCTION}', codeStyleInstruction)
      .replace('{PERFORMANCE_INSTRUCTION}', performanceInstruction)
      .replace('{BREAKING_CHANGES_INSTRUCTION}', breakingChangesInstruction)
      .replace('{LOGICAL_ERRORS_INSTRUCTION}', logicalErrorsInstruction)
      .replace('{TESTING_GAPS_INSTRUCTION}', testingGapsInstruction)
      .replace('{SEVERITY_LEVELS}', severityLevels);

    // Create the messages array
    return [
      vscode.LanguageModelChatMessage.User(this.PR_REVIEW_INTRO),
      vscode.LanguageModelChatMessage.User(contextMessage),
      vscode.LanguageModelChatMessage.User(reviewInstruction),
    ];
  }

  /**
   * Format detailed diff information into a readable format
   */
  private static formatDetailedDiff(detailedDiff: any[]): string {
    if (!detailedDiff || detailedDiff.length === 0) {
      return 'No detailed diff information available';
    }

    let formattedDiff = '';

    detailedDiff.forEach((diff) => {
      formattedDiff += `\nFile: ${diff.filePath}\n`;
      if (diff.hunk) {
        formattedDiff += `Hunk: @@ -${diff.hunk.oldStart},${diff.hunk.oldLines} +${diff.hunk.newStart},${diff.hunk.newLines} @@\n`;

        // Add line information with clear mapping
        diff.hunk.lines.forEach((line: DetailedDiffLine) => {
          const prefix = line.type === 'added' ? '+' : line.type === 'removed' ? '-' : ' ';
          const oldLineInfo = line.oldLineNum ? `old:${line.oldLineNum.toString().padStart(4)}` : '    -   ';
          const newLineInfo = line.newLineNum ? `new:${line.newLineNum.toString().padStart(4)}` : '    -   ';
          formattedDiff += `[${oldLineInfo} ${newLineInfo}] ${prefix}${line.content}\n`;
        });
      }
      formattedDiff += '\n';
    });

    return formattedDiff;
  }

  /**
   * Get the appropriate commit style instruction based on user configuration
   */
  private static getCommitStyleInstruction(config: CommitMessageConfig, commitTemplate?: string): string {
    switch (config.commitStyle) {
      case 'gitmoji':
        return this.GITMOJI_STYLE;
      case 'custom':
        return commitTemplate ? this.CUSTOM_STYLE : this.CONVENTIONAL_STYLE;
      case 'conventional':
      default:
        return this.CONVENTIONAL_STYLE;
    }
  }

  /**
   * Get the appropriate PR description style instruction based on user configuration
   */
  private static getPrDescriptionStyleInstruction(config: PrDescriptionConfig): string {
    switch (config.style) {
      case 'concise':
        return this.PR_DESCRIPTION_CONCISE;
      case 'custom':
        return this.PR_DESCRIPTION_CUSTOM;
      case 'detailed':
      default:
        return this.PR_DESCRIPTION_DETAILED;
    }
  }

  /**
   * Build prompt for breaking changes analysis
   */
  public static buildBreakingChangesPrompt(context: {
    codeChanges: Array<{
      filePath: string;
      oldCode: string;
      newCode: string;
      lineNumber: number;
      changeType: string;
      symbolName?: string;
      symbolType?: string;
    }>;
    usages: Array<{
      filePath: string;
      lineNumber: number;
      codeSnippet: string;
      symbolName: string;
    }>;
    diffInfo: string;
    files: Array<{ status: string; file: string }>;
    config?: {
      includePrivateAPIs: boolean;
      includeInternal: boolean;
      detectionLevel: 'strict' | 'moderate' | 'lenient';
    };
  }): vscode.LanguageModelChatMessage[] {
    const messages: vscode.LanguageModelChatMessage[] = [];

    // System message (using Assistant role as System role may not be available)
    messages.push(
      vscode.LanguageModelChatMessage.Assistant(
        'You are a code analysis expert specializing in identifying breaking changes in code. You analyze code differences between branches and identify changes that could break existing functionality for consumers of the code.'
      )
    );

    // Introduction message
    messages.push(vscode.LanguageModelChatMessage.User(this.BREAKING_CHANGES_INTRO));

    // Context information
    let contextContent = '';

    // Add configuration information if available
    if (context.config) {
      contextContent += '## Analysis Configuration\n\n';
      contextContent += `Detection Level: ${context.config.detectionLevel}\n`;
      contextContent += `Include Private APIs: ${context.config.includePrivateAPIs ? 'Yes' : 'No'}\n`;
      contextContent += `Include Internal Implementation Details: ${context.config.includeInternal ? 'Yes' : 'No'}\n\n`;

      // Add specific instructions based on detection level
      if (context.config.detectionLevel === 'strict') {
        contextContent +=
          'Instructions: Be very thorough and report all potential breaking changes, including minor signature changes, renamed variables, and any other changes that could potentially break client code.\n\n';
      } else if (context.config.detectionLevel === 'moderate') {
        contextContent +=
          'Instructions: Focus on significant breaking changes that would affect most consumers, such as changed method signatures, removed public APIs, and altered behavior of commonly used functions.\n\n';
      } else if (context.config.detectionLevel === 'lenient') {
        contextContent +=
          'Instructions: Only report major breaking changes that would affect all consumers, such as removed classes, drastically altered APIs, or fundamental behavioral changes.\n\n';
      }
    }

    // Add files information
    contextContent += '## Changed Files\n\n';
    for (const file of context.files) {
      contextContent += `${file.status} ${file.file}\n`;
    }
    contextContent += '\n';

    // Add code changes information
    contextContent += '## Code Changes\n\n';
    for (const change of context.codeChanges) {
      contextContent += `### ${change.filePath}:${change.lineNumber}\n`;
      contextContent += `Type: ${change.changeType}\n`;
      if (change.symbolName) {
        contextContent += `Symbol: ${change.symbolName} (${change.symbolType || 'unknown'})\n`;
      }
      if (change.oldCode) {
        contextContent += `Old: \`${change.oldCode.trim()}\`\n`;
      }
      if (change.newCode) {
        contextContent += `New: \`${change.newCode.trim()}\`\n`;
      }
      contextContent += '\n';
    }

    // Add usages information
    if (context.usages.length > 0) {
      contextContent += '## Code Usages\n\n';

      // Use a Map instead of a plain object to handle special property names like "constructor"
      const usagesBySymbol = new Map<string, Array<(typeof context.usages)[0]>>();

      for (const usage of context.usages) {
        if (!usagesBySymbol.has(usage.symbolName)) {
          usagesBySymbol.set(usage.symbolName, []);
        }
        usagesBySymbol.get(usage.symbolName)!.push(usage);
      }

      for (const [symbolName, usages] of usagesBySymbol.entries()) {
        contextContent += `### Symbol: ${symbolName}\n`;
        contextContent += `Found ${usages.length} usages:\n\n`;

        // Limit to 10 usages per symbol to avoid overwhelming the model
        const limitedUsages = usages.slice(0, 10);
        for (const usage of limitedUsages) {
          contextContent += `- ${usage.filePath}:${usage.lineNumber} - \`${usage.codeSnippet}\`\n`;
        }

        if (usages.length > 10) {
          contextContent += `- ... and ${usages.length - 10} more usages\n`;
        }

        contextContent += '\n';
      }
    }

    // Add diff information (truncated to avoid overwhelming the model)
    const truncatedDiff = this.smartTruncateContext(context.diffInfo);
    if (truncatedDiff) {
      contextContent += '## Git Diff\n\n```diff\n' + truncatedDiff + '\n```\n';
    }

    // Add context message
    messages.push(vscode.LanguageModelChatMessage.User(contextContent));

    // Add instruction message
    messages.push(vscode.LanguageModelChatMessage.User(this.BREAKING_CHANGES_INSTRUCTION));

    return messages;
  }
}