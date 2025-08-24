import React from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from '@shared';
import { BreakingChangesApp } from './BreakingChangesApp';

// Initialize the React app
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <ErrorBoundary>
      <BreakingChangesApp />
    </ErrorBoundary>
  );
} else {
  console.error('Root container not found');
}