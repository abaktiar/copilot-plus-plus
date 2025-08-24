/**
 * Integration tests for PR Review Assistant
 * Tests the complete workflow from configuration to results display
 */

import { JSDOM } from 'jsdom';

// Set up DOM environment
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="root"></div></body></html>', {
  url: 'http://localhost',
  pretendToBeVisual: true,
  resources: 'usable'
});

global.window = dom.window as any;
global.document = dom.window.document;
global.navigator = dom.window.navigator;

// Mock VSCode API
const mockVSCodeAPI = {
  postMessage: jest.fn(),
  getState: jest.fn().mockReturnValue({}),
  setState: jest.fn(),
};

(global.window as any).acquireVsCodeApi = () => mockVSCodeAPI;

// Mock shared model config
(global.window as any).sharedModelConfig = {
  models: [
    { id: 'gpt-4', name: 'GPT-4' },
    { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo' },
  ],
};

describe('PR Review Assistant Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockVSCodeAPI.getState.mockReturnValue({});
  });

  it('should complete a full review workflow', async () => {
    // Import React components after DOM setup
    const React = require('react');
    const { createRoot } = require('react-dom/client');
    const { PrReviewApp } = require('../PrReviewApp');

    // Render the app
    const container = document.getElementById('root');
    const root = createRoot(container);
    
    await new Promise<void>((resolve) => {
      root.render(React.createElement(PrReviewApp));
      setTimeout(resolve, 0);
    });

    // Verify initial state
    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'getBranches',
    });

    // Simulate receiving branches
    const messageEvent = new MessageEvent('message', {
      data: {
        command: 'branchesList',
        branches: ['main', 'feature-branch', 'develop'],
        currentBranch: 'feature-branch',
        defaultTargetBranch: 'main',
        languageModel: 'gpt-4',
      },
    });

    window.dispatchEvent(messageEvent);

    // Wait for state updates
    await new Promise(resolve => setTimeout(resolve, 0));

    // Simulate starting a review
    const startReviewEvent = new MessageEvent('message', {
      data: {
        command: 'startLoading',
      },
    });

    window.dispatchEvent(startReviewEvent);

    // Simulate progress updates
    const progressEvent = new MessageEvent('message', {
      data: {
        command: 'progressUpdate',
        update: {
          progress: 5,
          total: 10,
          message: 'Processing src/component.js',
        },
      },
    });

    window.dispatchEvent(progressEvent);

    // Simulate review completion
    const reviewCompleteEvent = new MessageEvent('message', {
      data: {
        command: 'reviewComplete',
        result: {
          summary: {
            assessment: 'The code shows good overall structure with some areas for improvement.',
            strengths: [
              'Clean separation of concerns',
              'Good error handling in most functions',
              'Consistent naming conventions',
            ],
            criticalIssues: [
              'Potential security vulnerability in user input handling',
            ],
            recommendations: [
              'Add input validation',
              'Improve test coverage',
              'Add JSDoc comments',
            ],
          },
          issues: [
            {
              filePath: 'src/component.js',
              lineNumber: 42,
              severity: 'Critical',
              category: 'Security',
              description: 'User input is not sanitized before processing',
              suggestion: 'Add input sanitization using a trusted library',
              suggestedCode: 'const sanitized = DOMPurify.sanitize(userInput);',
              justification: 'Unsanitized user input can lead to XSS attacks',
              lineContext: {
                linesBefore: ['function processUserInput(input) {'],
                codeSnippet: '  return processData(input);',
                linesAfter: ['}'],
              },
            },
            {
              filePath: 'src/utils.js',
              lineNumber: 15,
              severity: 'Medium',
              category: 'Code Style',
              description: 'Missing semicolon at end of statement',
              suggestion: 'Add semicolon for consistency',
            },
            {
              filePath: 'src/test.js',
              lineNumber: 8,
              severity: 'Low',
              category: 'Testing Gap',
              description: 'Missing test for error case',
              suggestion: 'Add test to cover error handling path',
            },
          ],
        },
        reviewKey: 'feature-branch:main',
      },
    });

    window.dispatchEvent(reviewCompleteEvent);

    // Wait for final state updates
    await new Promise(resolve => setTimeout(resolve, 0));

    // Verify the DOM contains expected elements
    expect(document.body.innerHTML).toContain('PR Review Assistant');
    expect(document.body.innerHTML).toContain('Review Progress');
    expect(document.body.innerHTML).toContain('Issues by Severity');
    expect(document.body.innerHTML).toContain('Review Summary');

    // Clean up
    root.unmount();
  });

  it('should handle error states correctly', async () => {
    const React = require('react');
    const { createRoot } = require('react-dom/client');
    const { PrReviewApp } = require('../PrReviewApp');

    const container = document.getElementById('root');
    const root = createRoot(container);
    
    await new Promise<void>((resolve) => {
      root.render(React.createElement(PrReviewApp));
      setTimeout(resolve, 0);
    });

    // Simulate an error
    const errorEvent = new MessageEvent('message', {
      data: {
        command: 'error',
        message: 'Failed to analyze changes: Git repository not found',
      },
    });

    window.dispatchEvent(errorEvent);

    // Wait for state updates
    await new Promise(resolve => setTimeout(resolve, 0));

    // Verify error is displayed
    expect(document.body.innerHTML).toContain('Failed to analyze changes: Git repository not found');

    root.unmount();
  });

  it('should persist and restore reviewed issues state', async () => {
    // Set up saved state
    const savedState = {
      'feature-branch:main': [
        'src/component.js:Critical:User input is not sanitized before processing',
      ],
    };
    mockVSCodeAPI.getState.mockReturnValue(savedState);

    const React = require('react');
    const { createRoot } = require('react-dom/client');
    const { PrReviewApp } = require('../PrReviewApp');

    const container = document.getElementById('root');
    const root = createRoot(container);
    
    await new Promise<void>((resolve) => {
      root.render(React.createElement(PrReviewApp));
      setTimeout(resolve, 0);
    });

    // Simulate review completion with the same key
    const reviewCompleteEvent = new MessageEvent('message', {
      data: {
        command: 'reviewComplete',
        result: {
          summary: {
            assessment: 'Test assessment',
            strengths: [],
            criticalIssues: [],
            recommendations: [],
          },
          issues: [
            {
              filePath: 'src/component.js',
              severity: 'Critical',
              category: 'Security',
              description: 'User input is not sanitized before processing',
            },
          ],
        },
        reviewKey: 'feature-branch:main',
      },
    });

    window.dispatchEvent(reviewCompleteEvent);

    // Wait for state updates
    await new Promise(resolve => setTimeout(resolve, 0));

    // Verify that getState was called to restore saved state
    expect(mockVSCodeAPI.getState).toHaveBeenCalled();

    root.unmount();
  });

  it('should handle keyboard navigation', async () => {
    const React = require('react');
    const { createRoot } = require('react-dom/client');
    const { PrReviewApp } = require('../PrReviewApp');

    const container = document.getElementById('root');
    const root = createRoot(container);
    
    await new Promise<void>((resolve) => {
      root.render(React.createElement(PrReviewApp));
      setTimeout(resolve, 0);
    });

    // Simulate review completion with multiple issues
    const reviewCompleteEvent = new MessageEvent('message', {
      data: {
        command: 'reviewComplete',
        result: {
          summary: {
            assessment: 'Test assessment',
            strengths: [],
            criticalIssues: [],
            recommendations: [],
          },
          issues: [
            {
              filePath: 'src/component1.js',
              severity: 'High',
              category: 'Security',
              description: 'Issue 1',
            },
            {
              filePath: 'src/component2.js',
              severity: 'Medium',
              category: 'Performance',
              description: 'Issue 2',
            },
          ],
        },
        reviewKey: 'test:main',
      },
    });

    window.dispatchEvent(reviewCompleteEvent);

    // Wait for state updates
    await new Promise(resolve => setTimeout(resolve, 0));

    // Simulate keyboard navigation
    const keydownEvent = new KeyboardEvent('keydown', { key: 'k' });
    window.dispatchEvent(keydownEvent);

    const keydownEvent2 = new KeyboardEvent('keydown', { key: 'j' });
    window.dispatchEvent(keydownEvent2);

    const keydownEvent3 = new KeyboardEvent('keydown', { key: 'd' });
    window.dispatchEvent(keydownEvent3);

    const keydownEvent4 = new KeyboardEvent('keydown', { key: 'f' });
    window.dispatchEvent(keydownEvent4);

    // Should handle keyboard events without errors
    expect(document.body.innerHTML).toContain('Issues');

    root.unmount();
  });
});