import React from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from '@shared';
import { PrReviewApp } from './PrReviewApp';

// Initialize the React app
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <ErrorBoundary>
      <PrReviewApp />
    </ErrorBoundary>
  );
} else {
  console.error('Root container not found');
}