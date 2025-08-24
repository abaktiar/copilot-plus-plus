import React from 'react';
import { createRoot } from 'react-dom/client';
import { PrDescriptionApp } from './PrDescriptionApp';

// Initialize React application
console.log('PR Description: Starting React app initialization');
const domContainer = document.getElementById('root');
if (domContainer) {
  console.log('PR Description: Root element found, creating React root');
  const root = createRoot(domContainer);
  root.render(<PrDescriptionApp />);
  console.log('PR Description: React app rendered successfully');
} else {
  console.error('PR Description: Root element not found');
}