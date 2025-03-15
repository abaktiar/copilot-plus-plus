# Change Log
All notable changes to the "copilot-plus-plus" extension will be documented in this file.
Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.0.11] - 2025-03-15
### Added
- Breaking Changes Analysis feature
  - Compare branches to identify potential breaking changes
  - Classify changes by severity and type
  - Filter and search through results
  - Navigate directly to affected code locations
  - Configure detection level and analysis scope
- New configuration options for Breaking Changes Analysis
- Comprehensive documentation for the Breaking Changes feature

### Changed
- Improved UI for branch selection and model choice
- Enhanced webview panels for better user experience
- Updated README with new feature information

### Fixed
- Performance improvements for Git operations
- Better error handling for branch comparisons
- UI responsiveness in webview panels

## [0.0.10] - 2025-03-15
### Added
- New configuration option for testing gap detection in PR reviews
- Extended severity levels for issue categorization
- Enhanced error handling for API requests

### Changed
- Improved prompt templates for more accurate results
- Enhanced configuration documentation
- Optimized PR review response processing

### Fixed
- Performance improvements in large repositories
- Minor UI responsiveness issues
- Bug fixes in commit message generation

## [0.0.8] - 2025-03-14
### Added
- PR Review Assistance feature
  - Analyze code changes between branches for potential issues
  - Identify security vulnerabilities, code style issues, and performance concerns
  - Detect breaking changes in APIs or interfaces
  - Navigate directly to problem areas with clickable file links
  - View issues categorized by severity with suggestions for fixes
- New configuration options for PR review customization
- Documentation for PR Review assistance feature

### Changed
- Updated UI for better user experience
- Improved prompt generation for more accurate results

### Fixed
- Minor bug fixes and performance improvements

## [0.0.3] - 2025-03-14
### Added
- PR Description Generation feature
- Improved configuration options

### Fixed
- Minor bugs

## [0.0.1] - 2025-03-13
### Added
- Initial release
- Commit message generation using GitHub's Language Model
- Conventional commit format support
- SCM input box integration