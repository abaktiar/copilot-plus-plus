import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, State> {
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
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h3>Something went wrong</h3>
          <p>An error occurred while rendering this component.</p>
          {this.state.error && (
            <details style={{ marginTop: '10px', textAlign: 'left' }}>
              <summary>Error details</summary>
              <pre style={{ fontSize: '12px', overflow: 'auto' }}>{this.state.error.message}</pre>
            </details>
          )}
          <button 
            style={{ 
              marginTop: '10px', 
              padding: '8px 16px', 
              backgroundColor: '#007acc', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
            onClick={() => this.setState({ hasError: false, error: undefined })}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}