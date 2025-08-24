# Design Document

## Overview

This design outlines the conversion of the VSCode extension's compiled React code into a modern React development workflow with JSX, TypeScript support, and proper build tooling. The solution maintains all existing functionality while enabling developers to write maintainable React components using modern development practices.

The current architecture uses vanilla JavaScript files with React.createElement calls loaded directly into VSCode webviews. The new architecture will introduce a proper React build pipeline that compiles JSX/TSX components into optimized bundles for webview consumption.

## Architecture

### Current Architecture
```
Extension Backend (TypeScript) → Webview HTML → Vanilla JS (React.createElement) → React Runtime
```

### New Architecture
```
Extension Backend (TypeScript) → Webview HTML → Compiled React Bundles → React Runtime
                                                        ↑
React Source (JSX/TSX) → Build Pipeline (Webpack/esbuild) → Optimized Bundles
```

### Key Architectural Decisions

1. **Dual Build System**: Maintain the existing esbuild setup for the extension backend while adding a separate build pipeline for React components
2. **Preserve Webview Loading**: Keep the existing HTML generation and script loading mechanism to ensure compatibility
3. **Incremental Migration**: Convert existing components one by one to minimize risk
4. **Shared Configuration**: Use a centralized configuration system for models and other shared data

## Components and Interfaces

### Directory Structure
```
src/
├── extension.ts                    # Extension entry point
├── commands/                       # Webview panel commands
├── services/                       # Backend services
└── webviews/                       # NEW: React source code
    ├── shared/                     # Shared components and utilities
    │   ├── components/             # Reusable UI components
    │   ├── hooks/                  # Custom React hooks
    │   ├── types/                  # TypeScript type definitions
    │   └── utils/                  # Utility functions
    ├── pr-description/             # PR Description Generator
    │   ├── components/             # Feature-specific components
    │   ├── PrDescriptionApp.tsx    # Main app component
    │   └── index.tsx               # Entry point
    ├── pr-review/                  # PR Review Assistant
    │   ├── components/             # Feature-specific components
    │   ├── PrReviewApp.tsx         # Main app component
    │   └── index.tsx               # Entry point
    └── breaking-changes/           # Breaking Changes Analyzer
        ├── components/             # Feature-specific components
        ├── BreakingChangesApp.tsx  # Main app component
        └── index.tsx               # Entry point

media/                              # Compiled output (generated)
├── lib/                           # Third-party libraries (React, etc.)
├── shared/                        # Compiled shared components
├── pr-description/                # Compiled PR description bundle
├── pr-review/                     # Compiled PR review bundle
└── breaking-changes/              # Compiled breaking changes bundle
```

### Component Architecture

#### Shared Components
- **ModelSelector**: Dropdown for selecting AI models
- **BranchSelector**: Git branch selection component  
- **LoadingSpinner**: Consistent loading indicator
- **ErrorBoundary**: Error handling wrapper
- **Button**: Standardized button component
- **Icons**: SVG icon components

#### Feature-Specific Components
Each webview will have its own set of components organized by feature:

**PR Description Generator**:
- `PrDescriptionApp`: Main application container
- `BranchSelection`: Source/target branch selection
- `GenerationForm`: Form for triggering PR description generation
- `ResultDisplay`: Display generated PR description with copy functionality

**PR Review Assistant**:
- `PrReviewApp`: Main application container
- `ReviewConfiguration`: Settings for review parameters
- `ProgressIndicator`: Real-time progress display
- `IssuesList`: Display categorized review issues
- `SeverityChart`: Visual severity distribution

**Breaking Changes Analyzer**:
- `BreakingChangesApp`: Main application container
- `AnalysisConfiguration`: Analysis settings and filters
- `ResultsTable`: Tabular display of breaking changes
- `FilterControls`: Search and filter functionality

### Build System Integration

#### Webpack Configuration
```typescript
// webpack.config.js
module.exports = {
  entry: {
    'pr-description': './src/webviews/pr-description/index.tsx',
    'pr-review': './src/webviews/pr-review/index.tsx',
    'breaking-changes': './src/webviews/breaking-changes/index.tsx',
    'shared': './src/webviews/shared/index.ts'
  },
  output: {
    path: path.resolve(__dirname, 'media'),
    filename: '[name]/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};
```

#### Package.json Scripts Integration
```json
{
  "scripts": {
    "compile": "npm run build:webviews && npm run build:extension",
    "build:webviews": "webpack --mode=development",
    "build:webviews:prod": "webpack --mode=production",
    "build:extension": "pnpm run check-types && pnpm run lint && node esbuild.js",
    "watch": "npm-run-all -p watch:*",
    "watch:webviews": "webpack --mode=development --watch",
    "watch:extension": "node esbuild.js --watch"
  }
}
```

## Data Models

### Message Interface
```typescript
// Webview ↔ Extension communication
interface WebviewMessage {
  command: string;
  data?: any;
}

// Extension → Webview messages
interface ExtensionMessage extends WebviewMessage {
  command: 'branchesList' | 'result' | 'error' | 'progressUpdate';
  branches?: string[];
  currentBranch?: string;
  defaultTargetBranch?: string;
  languageModel?: string;
  result?: any;
  error?: string;
  update?: ProgressUpdate;
}

// Webview → Extension messages  
interface WebviewRequest extends WebviewMessage {
  command: 'getBranches' | 'generateDescription' | 'reviewChanges' | 'analyzeBreaking';
  sourceBranch?: string;
  targetBranch?: string;
  selectedModel?: string;
}
```

### Component Props
```typescript
// Shared component props
interface ModelSelectorProps {
  selectedModel: string;
  onModelChange: (model: string) => void;
  models: ModelConfig[];
}

interface BranchSelectorProps {
  branches: string[];
  selectedBranch: string;
  onBranchChange: (branch: string) => void;
  label: string;
}

// Feature-specific props
interface PrDescriptionAppProps {
  vscode: VSCodeAPI;
}

interface ResultDisplayProps {
  result: string | null;
  isLoading: boolean;
  error: string | null;
}
```

### Configuration Types
```typescript
interface ModelConfig {
  id: string;
  name: string;
}

interface WebviewConfig {
  models: ModelConfig[];
  defaultModel: string;
}
```

## Error Handling

### Error Boundary Implementation
```typescript
class WebviewErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Webview Error:', error, errorInfo);
    // Send error to extension for logging
    vscode.postMessage({
      command: 'error',
      data: { error: error.message, stack: error.stack }
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-fallback">
          <h2>Something went wrong</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### Error Handling Strategy
1. **Component Level**: Use error boundaries to catch React component errors
2. **API Level**: Handle webview message errors gracefully with user feedback
3. **Build Level**: Ensure build failures are caught and reported clearly
4. **Runtime Level**: Provide fallback UI for failed components

## Testing Strategy

### Unit Testing
- **Components**: Test React components using React Testing Library
- **Hooks**: Test custom hooks with React Hooks Testing Library
- **Utilities**: Test utility functions with Jest

### Integration Testing
- **Webview Communication**: Test message passing between extension and webviews
- **Build Process**: Verify that builds produce correct output files
- **Component Integration**: Test component interactions within each app

### End-to-End Testing
- **Webview Loading**: Verify webviews load correctly in VSCode
- **Feature Workflows**: Test complete user workflows for each feature
- **Cross-Platform**: Ensure functionality works across different operating systems

### Testing Setup
```typescript
// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/webviews/test-setup.ts'],
  moduleNameMapping: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  testMatch: [
    '<rootDir>/src/webviews/**/__tests__/**/*.test.{ts,tsx}',
    '<rootDir>/src/webviews/**/*.test.{ts,tsx}'
  ]
};
```

## Migration Strategy

### Phase 1: Infrastructure Setup
1. Set up Webpack build configuration
2. Create shared component library
3. Set up TypeScript configuration for webviews
4. Implement build script integration

### Phase 2: Component Conversion
1. Convert PR Description Generator (simplest)
2. Convert Breaking Changes Analyzer (medium complexity)
3. Convert PR Review Assistant (most complex)

### Phase 3: Enhancement and Optimization
1. Add hot module replacement for development
2. Optimize bundle sizes
3. Add comprehensive testing
4. Performance optimization

### Backward Compatibility
- Keep existing compiled files during migration
- Use feature flags to switch between old and new implementations
- Gradual rollout with fallback mechanisms