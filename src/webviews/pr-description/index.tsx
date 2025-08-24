import React from 'react';
import { createRoot } from 'react-dom/client';
import { PrDescriptionApp } from './PrDescriptionApp';

// Initialize React application
const domContainer = document.getElementById('root');
if (domContainer) {
  const root = createRoot(domContainer);
  root.render(<PrDescriptionApp />);
} else {
  console.error('Root element not found');
}