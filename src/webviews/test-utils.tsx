import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { mockVSCodeAPI } from './test-setup';

// Custom render function that includes common providers
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => {
  return render(ui, {
    // Add any global providers here if needed
    ...options,
  });
};

// Helper to create mock VSCode message events
export const createMockMessageEvent = (command: string, data?: any) => {
  return new MessageEvent('message', {
    data: { command, ...data },
    origin: 'vscode-webview://',
  });
};

// Helper to simulate VSCode API message
export const simulateVSCodeMessage = (command: string, data?: any) => {
  const event = createMockMessageEvent(command, data);
  window.dispatchEvent(event);
};

// Helper to wait for async operations
export const waitForAsync = () => new Promise(resolve => setTimeout(resolve, 0));

// Mock data generators
export const mockBranches = ['main', 'develop', 'feature/test-branch'];

export const mockModelConfig = {
  models: [
    { id: 'gpt-4o-mini', name: 'GPT-4o Mini' },
    { id: 'gpt-4o', name: 'GPT-4o' },
    { id: 'claude-3.5-sonnet', name: 'Claude 3.5 Sonnet' }
  ]
};

export const mockPRDescription = `# Feature Implementation

## Summary
This PR implements the new feature as requested.

## Changes
- Added new component
- Updated existing functionality
- Fixed bug in edge case

## Testing
- Unit tests added
- Integration tests updated`;

export const mockReviewIssues = [
  {
    id: '1',
    file: 'src/component.ts',
    line: 42,
    severity: 'High',
    category: 'Security',
    title: 'Potential XSS vulnerability',
    description: 'User input is not properly sanitized',
    suggestion: 'Use proper input validation'
  },
  {
    id: '2',
    file: 'src/utils.ts',
    line: 15,
    severity: 'Medium',
    category: 'Performance',
    title: 'Inefficient loop',
    description: 'Consider using more efficient algorithm',
    suggestion: 'Use Array.map() instead of forEach'
  }
];

export const mockBreakingChanges = [
  {
    id: '1',
    file: 'src/api.ts',
    type: 'Function Signature Change',
    severity: 'High',
    description: 'Function parameter order changed',
    oldSignature: 'function process(id: string, options: Options)',
    newSignature: 'function process(options: Options, id: string)',
    impact: 'All callers need to update parameter order'
  },
  {
    id: '2',
    file: 'src/types.ts',
    type: 'Interface Change',
    severity: 'Medium',
    description: 'Required property added to interface',
    oldSignature: 'interface Config { name: string }',
    newSignature: 'interface Config { name: string; version: number }',
    impact: 'Existing implementations need to add version property'
  }
];

// Re-export everything from testing library
export * from '@testing-library/react';
export * from '@testing-library/user-event';
export { customRender as render };
export { mockVSCodeAPI };