# PR Description Generation

## Overview

The PR Description Generation feature allows you to automatically generate comprehensive pull request descriptions based on the differences between branches. Using VS Code's Language Model (the same one that powers GitHub Copilot), it analyzes code changes and commit history to create a structured description that helps reviewers understand the purpose and scope of your changes.

## Usage

1. Open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS)
2. Type "Copilot++: Generate PR Description" and select the command
3. Select the source branch (the branch with your changes)
4. Select the target branch (the branch you want to merge into)
5. Wait for the analysis to complete
6. Review and edit the generated PR description
7. Use the "Copy to Clipboard" option to copy the PR description for pasting into your Git provider's UI

You can also access this feature from the Source Control view by clicking on the "Generate PR Description" button in the title bar.

## Configuration

You can customize the PR Description Generation through the following settings:

- `copilotPlusPlus.prDescriptionStyle`: Choose between different styles of PR descriptions:
  - `concise`: Brief summary focused on high-level changes
  - `detailed`: Comprehensive description with technical details (default)
  - `custom`: Custom format defined by additional templates

- `copilotPlusPlus.includeTechnicalDetails`: When enabled, includes a summary of file changes in the PR description (default: true)

- `copilotPlusPlus.groupCommitsByType`: When enabled, groups commits by their type in the PR description (default: true)

## Examples

### Detailed PR Description

```markdown
# Implement user authentication system

This pull request implements a comprehensive user authentication system with the following features:

- User registration with email verification
- Login with email/password
- Password reset functionality
- OAuth integration with Google and GitHub
- Session management with JWT tokens

## Technical Details

- Added 3 new API endpoints in `auth.controller.ts`
- Created user model and authentication service
- Implemented email service for verification emails
- Added token-based middleware for protected routes
- Updated frontend components to support login/registration flows

## Testing

All new endpoints are covered by unit tests, and integration tests have been added for the authentication flow.
```

### Concise PR Description

```markdown
# Add user authentication system

Implements user registration, login, password reset, and OAuth integration with Google and GitHub. Uses JWT tokens for session management.
```

## Best Practices

- Select branches with meaningful differences to get the best results
- Try to keep PRs focused on a single feature or bug fix
- Review and edit the generated description before submitting your PR
- Add any manual testing steps or considerations that might not be evident from the code changes