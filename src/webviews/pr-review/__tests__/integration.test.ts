/**
 * Integration tests for PR Review Assistant
 * Tests the complete workflow from configuration to results display
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { simulateVSCodeMessage, mockVSCodeAPI, mockReviewIssues } from '../../test-utils';
import { PrReviewApp } from '../PrReviewApp';

describe('PR Review Assistant Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockVSCodeAPI.getState.mockReturnValue({});
  });

  test('should complete a full review workflow', async () => {
    const user = userEvent.setup();
    render(React.createElement(PrReviewApp));

    // Verify initial state - component requests branches
    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'getBranches'
    });

    // Simulate receiving branches
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature-branch', 'develop'],
      currentBranch: 'feature-branch',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue('feature-branch')).toBeInTheDocument();
      expect(screen.getByDisplayValue('main')).toBeInTheDocument();
    });

    // Start review
    const reviewButton = screen.getByText('Start Review');
    await user.click(reviewButton);

    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'reviewPrChanges',
      sourceBranch: 'feature-branch',
      targetBranch: 'main',
      modelFamily: 'gpt-4o-mini'
    });

    // Simulate review start
    simulateVSCodeMessage('startLoading');

    await waitFor(() => {
      expect(screen.getByText('Reviewing changes...')).toBeInTheDocument();
      expect(screen.getByText('Cancel Review')).toBeInTheDocument();
    });

    // Simulate progress updates
    simulateVSCodeMessage('progressUpdate', {
      update: {
        progress: 5,
        total: 10,
        message: 'Processing src/component.js'
      }
    });

    await waitFor(() => {
      expect(screen.getByText('Processing src/component.js')).toBeInTheDocument();
      expect(screen.getByText('5 / 10')).toBeInTheDocument();
    });

    // Simulate review completion
    const mockResult = {
      summary: {
        assessment: 'The code shows good overall structure with some areas for improvement.',
        strengths: [
          'Clean separation of concerns',
          'Good error handling in most functions',
          'Consistent naming conventions'
        ],
        criticalIssues: [
          'Potential security vulnerability in user input handling'
        ],
        recommendations: [
          'Add input validation',
          'Improve test coverage',
          'Add JSDoc comments'
        ]
      },
      issues: mockReviewIssues
    };

    simulateVSCodeMessage('reviewComplete', {
      result: mockResult,
      reviewKey: 'feature-branch:main'
    });

    await waitFor(() => {
      expect(screen.getByText('Review Complete')).toBeInTheDocument();
      expect(screen.getByText('The code shows good overall structure')).toBeInTheDocument();
      expect(screen.getByText('Potential XSS vulnerability')).toBeInTheDocument();
      expect(screen.getByText('Inefficient loop')).toBeInTheDocument();
    });

    // Test issue filtering
    const severityFilter = screen.getByLabelText('Filter by severity');
    await user.selectOptions(severityFilter, 'High');

    await waitFor(() => {
      expect(screen.getByText('Potential XSS vulnerability')).toBeInTheDocument();
      expect(screen.queryByText('Inefficient loop')).not.toBeInTheDocument();
    });

    // Test search functionality
    await user.selectOptions(severityFilter, 'All');
    
    const searchInput = screen.getByPlaceholderText('Search issues...');
    await user.type(searchInput, 'XSS');

    await waitFor(() => {
      expect(screen.getByText('Potential XSS vulnerability')).toBeInTheDocument();
      expect(screen.queryByText('Inefficient loop')).not.toBeInTheDocument();
    });
  });

  test('should handle error states correctly', async () => {
    render(React.createElement(PrReviewApp));

    // Simulate error during review
    simulateVSCodeMessage('error', {
      message: 'Failed to analyze changes: Git repository not found'
    });

    await waitFor(() => {
      expect(screen.getByText('Error')).toBeInTheDocument();
      expect(screen.getByText('Failed to analyze changes: Git repository not found')).toBeInTheDocument();
    });

    // Error should be dismissible
    const dismissButton = screen.getByText('Dismiss');
    fireEvent.click(dismissButton);

    await waitFor(() => {
      expect(screen.queryByText('Failed to analyze changes: Git repository not found')).not.toBeInTheDocument();
    });
  });

  test('should persist and restore reviewed issues state', async () => {
    // Set up saved state
    const savedState = {
      'feature-branch:main': [
        'src/component.ts:42:Critical:User input is not sanitized before processing'
      ]
    };
    mockVSCodeAPI.getState.mockReturnValue(savedState);

    render(React.createElement(PrReviewApp));

    // Verify that getState was called to restore saved state
    expect(mockVSCodeAPI.getState).toHaveBeenCalled();

    // Simulate review completion with the same key
    simulateVSCodeMessage('reviewComplete', {
      result: {
        summary: {
          assessment: 'Test assessment',
          strengths: [],
          criticalIssues: [],
          recommendations: []
        },
        issues: mockReviewIssues
      },
      reviewKey: 'feature-branch:main'
    });

    await waitFor(() => {
      expect(screen.getByText('Review Complete')).toBeInTheDocument();
    });

    // Check that setState is called to save new state
    expect(mockVSCodeAPI.setState).toHaveBeenCalled();
  });

  test('should handle keyboard navigation', async () => {
    render(React.createElement(PrReviewApp));

    // Set up review results with multiple issues
    simulateVSCodeMessage('reviewComplete', {
      result: {
        summary: {
          assessment: 'Test assessment',
          strengths: [],
          criticalIssues: [],
          recommendations: []
        },
        issues: mockReviewIssues
      },
      reviewKey: 'test:main'
    });

    await waitFor(() => {
      expect(screen.getByText('Review Complete')).toBeInTheDocument();
    });

    // Test keyboard navigation
    fireEvent.keyDown(document, { key: 'j' }); // Next issue
    fireEvent.keyDown(document, { key: 'k' }); // Previous issue
    fireEvent.keyDown(document, { key: 'd' }); // Dismiss issue
    fireEvent.keyDown(document, { key: 'f' }); // Focus search

    // Should handle keyboard events without errors
    expect(screen.getByText('Potential XSS vulnerability')).toBeInTheDocument();
  });

  test('should handle file navigation clicks', async () => {
    const user = userEvent.setup();
    render(React.createElement(PrReviewApp));

    // Set up review results
    simulateVSCodeMessage('reviewComplete', {
      result: {
        summary: {
          assessment: 'Test assessment',
          strengths: [],
          criticalIssues: [],
          recommendations: []
        },
        issues: mockReviewIssues
      },
      reviewKey: 'test:main'
    });

    await waitFor(() => {
      expect(screen.getByText('src/component.ts:42')).toBeInTheDocument();
    });

    // Click on file location
    const fileLocation = screen.getByText('src/component.ts:42');
    await user.click(fileLocation);

    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'openFile',
      filePath: 'src/component.ts',
      lineNumber: 42,
      data: { filePath: 'src/component.ts', lineNumber: 42 }
    });
  });

  test('should handle review cancellation', async () => {
    const user = userEvent.setup();
    render(React.createElement(PrReviewApp));

    // Set up branches and start review
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature-branch'],
      currentBranch: 'feature-branch',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      expect(screen.getByText('Start Review')).toBeInTheDocument();
    });

    await user.click(screen.getByText('Start Review'));

    simulateVSCodeMessage('startLoading');

    await waitFor(() => {
      expect(screen.getByText('Cancel Review')).toBeInTheDocument();
    });

    // Cancel the review
    await user.click(screen.getByText('Cancel Review'));

    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'cancelReview'
    });

    await waitFor(() => {
      expect(screen.getByText('Start Review')).toBeInTheDocument();
    });
  });

  test('should handle issue dismissal and restoration', async () => {
    const user = userEvent.setup();
    render(React.createElement(PrReviewApp));

    // Set up review results
    simulateVSCodeMessage('reviewComplete', {
      result: {
        summary: {
          assessment: 'Test assessment',
          strengths: [],
          criticalIssues: [],
          recommendations: []
        },
        issues: mockReviewIssues
      },
      reviewKey: 'test:main'
    });

    await waitFor(() => {
      expect(screen.getByText('Potential XSS vulnerability')).toBeInTheDocument();
    });

    // Dismiss an issue
    const dismissButtons = screen.getAllByText('Dismiss');
    await user.click(dismissButtons[0]);

    await waitFor(() => {
      expect(screen.queryByText('Potential XSS vulnerability')).not.toBeInTheDocument();
    });

    // Check that state was saved
    expect(mockVSCodeAPI.setState).toHaveBeenCalled();

    // Show dismissed issues
    const showDismissedButton = screen.getByText('Show Dismissed (1)');
    await user.click(showDismissedButton);

    await waitFor(() => {
      expect(screen.getByText('Potential XSS vulnerability')).toBeInTheDocument();
    });

    // Restore dismissed issue
    const restoreButton = screen.getByText('Restore');
    await user.click(restoreButton);

    await waitFor(() => {
      expect(screen.getByText('Potential XSS vulnerability')).toBeInTheDocument();
      expect(screen.queryByText('Show Dismissed')).not.toBeInTheDocument();
    });
  });

  test('should handle configuration changes', async () => {
    const user = userEvent.setup();
    render(React.createElement(PrReviewApp));

    // Set up branches
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature-branch', 'develop'],
      currentBranch: 'feature-branch',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue('feature-branch')).toBeInTheDocument();
    });

    // Change source branch
    const sourceBranchSelect = screen.getByDisplayValue('feature-branch');
    await user.selectOptions(sourceBranchSelect, 'develop');

    await waitFor(() => {
      expect(screen.getByDisplayValue('develop')).toBeInTheDocument();
    });

    // Change model
    const modelSelect = screen.getByDisplayValue('GPT-4o Mini');
    await user.selectOptions(modelSelect, 'gpt-4o');

    await waitFor(() => {
      expect(screen.getByDisplayValue('GPT-4o')).toBeInTheDocument();
    });

    // Start review with new configuration
    await user.click(screen.getByText('Start Review'));

    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'reviewPrChanges',
      sourceBranch: 'develop',
      targetBranch: 'main',
      modelFamily: 'gpt-4o'
    });
  });
});