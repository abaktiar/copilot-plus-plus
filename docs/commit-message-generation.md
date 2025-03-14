# Commit Message Generation

## Overview

The Commit Message Generation feature in Copilot++ uses AI to automatically generate contextually relevant commit messages based on your staged changes. This feature integrates directly with VS Code's built-in Git source control interface, providing a seamless experience for creating meaningful commit messages.

## How It Works

1. The extension analyzes your staged changes to understand what was modified
2. It sends this information to the selected language model (e.g., GPT-4o)
3. The AI generates a commit message following the specified format
4. The message is inserted into the commit message input field

The feature aims to save time and promote consistency in commit message styles across your projects, while ensuring that the content of the message accurately reflects the changes made.

## Usage

1. Stage your changes in Git using VS Code's source control panel
2. In the Source Control view, hover over the "Changes" section and click on the sparkle icon ($(sparkle)) that appears on the right side
3. The AI will generate a commit message based on your staged changes
4. Review and edit the generated message if needed
5. Commit your changes as usual

![Commit Message Generation](../images/commit-message.gif)

## Configuration Options

### Language Model Selection

Control which AI model is used for all generation features.

```json
"copilotPlusPlus.languageModel": "gpt-4o"
```

| Value | Description |
|-------|-------------|
| `gpt-4o` | OpenAI's most advanced general-purpose model, offering excellent code understanding |
| `gpt-4o-mini` | Faster and more cost-effective version of GPT-4o |
| `claude-3.5-sonnet` | Anthropic's model with excellent context understanding and reasoning |
| `o1` | OpenAI's o1 model optimized for reasoning tasks |
| `o1-mini` | Smaller, faster version of the o1 model |

Consider your specific needs when selecting a model:
- For highest quality output: `gpt-4o` or `claude-3.5-sonnet`
- For faster response times: `gpt-4o-mini` or `o1-mini`
- For complex reasoning about code changes: `o1`

### Commit Style

Define the format and style of generated commit messages.

```json
"copilotPlusPlus.commitStyle": "conventional"
```

| Value | Description | Example |
|-------|-------------|---------|
| `conventional` | [Conventional Commits](https://www.conventionalcommits.org/) format | `feat(api): add new endpoint for user authentication` |
| `gitmoji` | [Gitmoji](https://gitmoji.dev/) style with emojis | `✨ Add new endpoint for user authentication` |
| `custom` | Custom format defined in commitTemplate | Depends on template |

#### Setting Up Custom Commit Style

To use a custom commit style, you need to:

1. Set the commit style to `custom`:
```json
"copilotPlusPlus.commitStyle": "custom"
```

2. Define a custom template with the upcoming `commitMessageTemplate` setting (coming soon):
```json
"copilotPlusPlus.commitMessageTemplate": "{type}({scope}): {summary} [#{ticket}]"
```

The custom template will support the following tokens:
- `{type}`: The type of change (feat, fix, docs, etc.)
- `{scope}`: The scope of the change (component name, module, etc.)
- `{summary}`: A brief description of the change
- `{ticket}`: The ticket number extracted from the branch name
- `{body}`: An optional detailed description of the change
- `{breaking}`: Breaking change notes if applicable
- `{emoji}`: An appropriate emoji for the change type

### Ticket Number Inclusion

Enable or disable automatic inclusion of ticket numbers from branch names.

```json
"copilotPlusPlus.includeTicketNumber": true
```

When enabled, the extension will extract ticket numbers (like JIRA issue IDs) from your branch name and include them in the commit message.

### Ticket Number Pattern

Define the regular expression used to extract ticket numbers from branch names.

```json
"copilotPlusPlus.ticketPattern": "(?:^|\\/)([A-Z]+-\\d+)(?:\\/|$|[-_])"
```

The default pattern is designed to match common Jira ticket formats in branch names. You can customize this pattern to match your team's specific branch naming conventions.

#### Example Branch Name Formats Supported by Default

| Branch Name | Extracted Ticket |
|-------------|-----------------|
| `feature/ABC-123-new-feature` | `ABC-123` |
| `ABC-123/feature-branch` | `ABC-123` |
| `ABC-123-feature-description` | `ABC-123` |
| `bugfix/ABC-123/fix-issue` | `ABC-123` |
| `john/ABC-123_new-feature` | `ABC-123` |

#### Custom Ticket Pattern Examples

For GitHub issues:
```json
"copilotPlusPlus.ticketPattern": "(?:^|\\/)(?:GH-|#)(\\d+)(?:\\/|$|[-_])"
```

For Azure DevOps work items:
```json
"copilotPlusPlus.ticketPattern": "(?:^|\\/)(?:AB#)(\\d+)(?:\\/|$|[-_])"
```

## Coming Soon

The following configuration options will be available in upcoming releases:

### Commit Message Template

```json
"copilotPlusPlus.commitMessageTemplate": "{type}({scope}): {summary} [#{ticket}]"
```

This will allow you to define a custom format for your commit messages with special tokens that get replaced with AI-generated or extracted values.

### Affected Files Scope

```json
"copilotPlusPlus.detectScope": true
```

When enabled, the extension will try to determine the scope for conventional commits based on which files or directories were modified.

### Scope Map

```json
"copilotPlusPlus.scopeMap": {
  "src/api/": "api",
  "src/ui/": "ui",
  "tests/": "test",
  "docs/": "docs"
}
```

This will allow you to define mappings from file paths to scope names for conventional commits.

## Best Practices

1. **Review Generated Messages**: Always review the AI-generated commit messages before finalizing them. The AI might not always capture every nuance of your changes.

2. **Stage Related Changes Together**: For the best results, stage logically related changes together. Too many unrelated changes might result in overly generic commit messages.

3. **Use Consistent Branch Naming**: Keep your branch naming consistent to help with ticket number extraction and context understanding.

4. **Provide Feedback**: If you find that the generated messages aren't meeting your needs, consider adjusting the configuration options.

## Troubleshooting

### Common Issues

1. **No Commit Message Generated**: 
   - Ensure you have staged changes
   - Check that your authentication to GitHub Copilot is valid
   - Verify your internet connection

2. **Incorrect Ticket Numbers**:
   - Review and adjust your `ticketPattern` setting to match your branch naming convention
   - Consider disabling this feature if not needed

3. **Undesired Message Style**:
   - Change the `commitStyle` setting to match your preferred style

4. **Sparkle Icon Not Visible**:
   - Make sure you're hovering over the "Changes" section in the Source Control view
   - Verify that the extension is properly installed and enabled
   - Try restarting VS Code if the icon doesn't appear

### Logs

If you encounter issues, you can view the extension logs in the "Output" panel in VS Code by selecting "Copilot++" from the dropdown menu. These logs may help diagnose any problems with the commit message generation feature.

## Command Usage

You can also trigger commit message generation using the Command Palette:

1. Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P on macOS)
2. Type "Copilot++: Generate Commit Message"
3. Press Enter to execute the command

## Keyboard Shortcuts

To add a keyboard shortcut for quicker access:

1. Open the Command Palette (Ctrl+Shift+P or Cmd+Shift+P on macOS)
2. Type "Preferences: Open Keyboard Shortcuts"
3. Search for "Copilot++: Generate Commit Message"
4. Click the + icon to add a shortcut of your choice

## Configuration Examples

### Example: Team Configuration with JIRA

```json
{
  "copilotPlusPlus.languageModel": "gpt-4o-mini",
  "copilotPlusPlus.commitStyle": "conventional",
  "copilotPlusPlus.includeTicketNumber": true,
  "copilotPlusPlus.ticketPattern": "(?:^|\\/)([A-Z]+-\\d+)(?:\\/|$|[-_])"
}
```

### Example: Personal GitHub Projects

```json
{
  "copilotPlusPlus.languageModel": "gpt-4o",
  "copilotPlusPlus.commitStyle": "gitmoji",
  "copilotPlusPlus.includeTicketNumber": true,
  "copilotPlusPlus.ticketPattern": "(?:^|\\/)(?:issue-?)(\\d+)(?:\\/|$|[-_])"
}
```

## Privacy and Security

Commit message generation sends your staged changes to the selected language model. The extension only includes the diff content and does not send any unrelated files or personal information. All communication with the AI service follows the same security protocols as GitHub Copilot.