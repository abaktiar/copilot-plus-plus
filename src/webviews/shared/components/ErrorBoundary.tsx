import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

// Simple error boundary wrapper - for now just render children
// In a real implementation, we'd use a proper error boundary library
export function ErrorBoundary({ children, fallback }: Props) {
  // For now, just render the children directly
  // TODO: Implement proper error boundary in a future task
  return <>{children}</>;
}