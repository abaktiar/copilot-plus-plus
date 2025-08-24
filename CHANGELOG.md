# Change Log
All notable changes to the "copilot-plus-plus" extension will be documented in this file.
Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.1.2] - 2025-08-24 - Major Frontend Architecture Overhaul
This major release represents a complete modernization of the extension's frontend architecture with significant improvements to user experience, performance, and maintainability.

### Added
- Complete React/TypeScript frontend migration for all webview panels
- Shared component library foundation for consistent UI across features
- Comprehensive webview testing framework with Jest and React Testing Library
- Enhanced build system integrating React with extension development workflow
- Markdown rendering support using marked library with proper test mocks
- Multiple case-insensitive ticket extraction support from branch names
- Centralized model configuration across all webview components
- Enhanced Content Security Policy (CSP) and build validation
- Modern development workflow with hot reloading and optimized builds

### Changed
- **BREAKING**: Complete rewrite of all webview panels from raw HTML/JS to React with TypeScript
- Migrated Breaking Changes Analyzer to JSX/TypeScript with improved UI
- Migrated PR Description Generator to JSX/TypeScript with enhanced controls
- Migrated PR Review Assistant to JSX/TypeScript with better navigation
- Standardized branch and model selection dropdowns across all features
- Enhanced PR description UI with improved controls and user feedback
- Streamlined PR review interface with tighter UI and better issue presentation
- Upgraded to React 19.1 with latest TypeScript support
- Improved development scripts for better developer experience

### Removed
- Legacy webview assets and raw HTML/JS implementations
- Legacy sidebar implementation in favor of standalone panels
- Legacy media breaking-changes panel and model configuration
- Enhancement plan document for streamlined PR review architecture
- Unused and deprecated webview files

### Fixed
- Improved error handling and validation across webview components
- Enhanced type safety with full TypeScript coverage
- Better build reliability with hardened CSP policies
- Resolved legacy asset cleanup and improved .gitignore patterns

### Technical Details
- **Frontend Stack**: React 19.1, TypeScript, Webpack
- **Testing**: Jest with React Testing Library and JSDOM
- **Build System**: Webpack for webviews, esbuild for extension
- **Development**: Hot reloading, watch mode, comprehensive type checking
- **Architecture**: Shared component library, centralized configuration, modern development practices

This release establishes a solid foundation for future feature development with modern web technologies and significantly improves the maintainability and user experience of the extension.

## [0.0.17] - 2025-08-15
### Added
- Added GPT-5 (`gpt-5`) and GPT-5 Mini (`gpt-5-mini`) to the available language model selection
- Updated webview model lists, UI components, and documentation to include GPT-5 and GPT-5 Mini

## [0.0.16] - 2025-07-07
### Added
- Enhanced language model support with expanded model selection
  - Added GPT-4.1 with enhanced capabilities
  - Added Claude 4 Sonnet with advanced reasoning capabilities

## [0.0.12] - 2025-03-16
### Added
- Configuration option to enable/disable debug logging for PR reviews
- State persistence for reviewed issues in PR Review Assistant
- Visual chart for severity distribution in PR Review dashboard
- Keyboard shortcuts for navigation in PR Review UI
- Collapsible sections in PR Review results

### Changed
- Improved error handling for JSON parsing in LLM responses
- Enhanced file grouping algorithm for large PRs
- Optimized token usage for better performance with large PRs
- Refactored services for better separation of concerns
- Updated default maxTokensPerGroup to 16000 for better PR analysis

### Fixed
- JSON parsing errors with certain response formats
- UI responsiveness in PR Review webview
- Progress notification accuracy during PR reviews
- Memory usage optimizations for large PRs

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