import React, { Component } from 'react';
import { ErrorBoundaryProps } from '../types';

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Webview Error:', error, errorInfo);
    
    // Send error to extension for logging
    try {
      const vscode = (window as any).acquireVsCodeApi?.();
      if (vscode) {
        vscode.postMessage({
          command: 'error',
          data: { 
            error: error.message, 
            stack: error.stack,
            componentStack: errorInfo.componentStack
          }
        });
      }
    } catch (e) {
      console.error('Failed to send error to extension:', e);
    }
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="error-boundary">
          <div className="error-content">
            <h3>Something went wrong</h3>
            <p>An error occurred while rendering this component.</p>
            {this.state.error && (
              <details className="error-details">
                <summary>Error details</summary>
                <pre>{this.state.error.message}</pre>
              </details>
            )}
            <button 
              className="btn btn-primary"
              onClick={() => this.setState({ hasError: false, error: undefined })}
            >
              Try again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}