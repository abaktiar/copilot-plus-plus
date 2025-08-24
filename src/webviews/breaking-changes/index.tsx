import React from 'react';
import { createRoot } from 'react-dom/client';
import { BreakingChangesApp } from './BreakingChangesApp';

// Render the React app
const domContainer = document.getElementById('root');
if (domContainer) {
  const root = createRoot(domContainer);
  root.render(<BreakingChangesApp />);
}