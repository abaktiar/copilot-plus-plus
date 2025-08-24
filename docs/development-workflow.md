# Development Workflow

This document describes the development workflow for the VSCode extension with React webviews.

## Build Scripts

### Development
- `pnpm run compile` - Build both webviews and extension for development
- `pnpm run build:webviews` - Build only webviews in development mode
- `pnpm run build:extension` - Build only the extension

### Production
- `pnpm run package` - Build everything for production (optimized bundles)
- `pnpm run build:webviews:prod` - Build only webviews for production

### Watch Mode
- `pnpm run watch` - Watch all files (webviews, extension, and types)
- `pnpm run watch:webviews` - Watch only webview files
- `pnpm run watch:webviews:dev` - Watch webviews with enhanced development config
- `pnpm run watch:extension` - Watch only extension files
- `pnpm run watch:types` - Watch TypeScript files for type checking

### Development Server
- `pnpm run serve:webviews` - Start webpack dev server for standalone webview development
- `pnpm run dev:fast` - Start fast development mode with enhanced watching

## Development Features

### Source Maps
- Development builds include eval-source-map for fast rebuilds and debugging
- Production builds include source-map for debugging in production

### Fast Rebuilds
- Filesystem caching enabled for faster subsequent builds
- TypeScript transpileOnly mode in development for faster compilation
- Optimized watch options for responsive file watching

### Hot Reloading
- Webpack dev server supports hot module replacement
- File watching with automatic rebuilds
- Enhanced error overlay for better debugging

## Recommended Development Workflow

1. **Initial Setup**: Run `pnpm install` to install dependencies
2. **Development**: Use `pnpm run dev:fast` for the fastest development experience
3. **Testing**: Use `pnpm run compile` before testing to ensure everything builds
4. **Production**: Use `pnpm run package` to create production builds

## File Structure

```
src/webviews/
├── shared/           # Shared components and utilities
├── pr-description/   # PR Description Generator
├── pr-review/        # PR Review Assistant
└── breaking-changes/ # Breaking Changes Analyzer

media/                # Compiled output
├── shared/           # Shared bundles (vendors, shared components)
├── pr-description/   # PR Description bundle
├── pr-review/        # PR Review bundle
└── breaking-changes/ # Breaking Changes bundle
```

## Performance Optimization

### Bundle Splitting
- Vendor libraries are split into a shared vendors bundle
- Shared components are split into a shared bundle
- Each webview has its own feature-specific bundle

### Development Optimizations
- Faster TypeScript compilation with transpileOnly
- Filesystem caching for faster rebuilds
- Optimized watch options for responsive development

### Production Optimizations
- Minification and tree shaking
- Source maps for debugging
- Bundle size optimization