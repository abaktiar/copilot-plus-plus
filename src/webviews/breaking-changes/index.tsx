import React from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from '../shared/components';
import { BreakingChangesApp } from './BreakingChangesApp';

// Simple error fallback component
function ErrorFallback() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h3>Something went wrong</h3>
      <p>Please try refreshing the panel.</p>
    </div>
  );
}

// Ensure DOM is loaded before rendering
function initializeApp() {
  try {
    console.log('Initializing Breaking Changes app...');
    const domContainer = document.getElementById('root');
    if (!domContainer) {
      console.error('Root element not found');
      return;
    }

    console.log('Creating React root...');
    const root = createRoot(domContainer);
    
    console.log('Rendering BreakingChangesApp...');
    root.render(
      <ErrorBoundary fallback={<ErrorFallback />}>
        <BreakingChangesApp />
      </ErrorBoundary>
    );
    
    console.log('BreakingChangesApp rendered successfully');
    
  } catch (error) {
    console.error('Failed to initialize Breaking Changes app:', error);
    // Fallback rendering
    const domContainer = document.getElementById('root');
    if (domContainer) {
      domContainer.innerHTML = `
        <div style="padding: 20px; text-align: center;">
          <h3>Failed to load Breaking Changes Analyzer</h3>
          <p>Error: ${error instanceof Error ? error.message : 'Unknown error'}</p>
          <p>Please try refreshing the panel.</p>
        </div>
      `;
    }
  }
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // DOM is already ready
  initializeApp();
}