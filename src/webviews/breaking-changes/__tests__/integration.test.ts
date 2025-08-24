/**
 * Integration tests for Breaking Changes Analyzer
 * Tests the complete workflow from user interaction to results display
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { simulateVSCodeMessage, mockVSCodeAPI, mockBreakingChanges } from '../../test-utils';
import { BreakingChangesApp } from '../BreakingChangesApp';

describe('Breaking Changes Analyzer Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should handle complete analysis workflow', async () => {
    const user = userEvent.setup();
    render(React.createElement(BreakingChangesApp));

    // Step 1: Verify initial state
    expect(screen.getByText('Breaking Changes Analysis')).toBeInTheDocument();
    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({ command: 'getBranches' });

    // Step 2: Simulate branch list response
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'develop', 'feature/new-api'],
      currentBranch: 'feature/new-api',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue('feature/new-api')).toBeInTheDocument();
      expect(screen.getByDisplayValue('main')).toBeInTheDocument();
    });

    // Step 3: Trigger analysis
    const analyzeButton = screen.getByText('Analyze Breaking Changes');
    expect(analyzeButton).not.toBeDisabled();

    await user.click(analyzeButton);

    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'analyzeBreakingChanges',
      sourceBranch: 'feature/new-api',
      targetBranch: 'main',
      modelFamily: 'gpt-4o-mini'
    });

    // Step 4: Simulate analysis start
    simulateVSCodeMessage('analyzing');

    await waitFor(() => {
      expect(screen.getByText('Analyzing breaking changes...')).toBeInTheDocument();
      expect(screen.getByText('Cancel Analysis')).toBeInTheDocument();
    });

    // Step 5: Simulate analysis results
    const mockAnalysisResult = {
      summary: {
        totalBreakingChanges: 2,
        criticalCount: 0,
        highCount: 1,
        mediumCount: 1,
        lowCount: 0
      },
      breakingChanges: mockBreakingChanges
    };

    simulateVSCodeMessage('analysisResult', {
      result: mockAnalysisResult
    });

    // Step 6: Verify results display
    await waitFor(() => {
      expect(screen.getByText('Analysis Results')).toBeInTheDocument();
      expect(screen.getByText('Summary')).toBeInTheDocument();
      
      // Check summary stats
      expect(screen.getByText('2')).toBeInTheDocument(); // Total
      expect(screen.getByText('1')).toBeInTheDocument(); // High and Medium counts
      
      // Check breaking changes are displayed
      expect(screen.getByText('Function parameter order changed')).toBeInTheDocument();
      expect(screen.getByText('Required property added to interface')).toBeInTheDocument();
    });

    // Step 7: Test filtering functionality
    expect(screen.getByText('Breaking Changes (2)')).toBeInTheDocument();

    // Filter by severity
    const severityFilter = screen.getByLabelText('Filter by severity');
    await user.selectOptions(severityFilter, 'High');

    await waitFor(() => {
      expect(screen.getByText('Breaking Changes (1)')).toBeInTheDocument();
      expect(screen.getByText('Function parameter order changed')).toBeInTheDocument();
      expect(screen.queryByText('Required property added to interface')).not.toBeInTheDocument();
    });

    // Reset filter and test search
    await user.selectOptions(severityFilter, 'All');

    const searchInput = screen.getByPlaceholderText('Search in descriptions, files, etc.');
    await user.type(searchInput, 'interface');

    await waitFor(() => {
      expect(screen.getByText('Breaking Changes (1)')).toBeInTheDocument();
      expect(screen.getByText('Required property added to interface')).toBeInTheDocument();
      expect(screen.queryByText('Function parameter order changed')).not.toBeInTheDocument();
    });

    // Step 8: Test file navigation
    await user.clear(searchInput);

    await waitFor(() => {
      expect(screen.getByText('Breaking Changes (2)')).toBeInTheDocument();
    });

    const fileLocation = screen.getByText('src/api.ts');
    await user.click(fileLocation);

    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'openFile',
      filePath: 'src/api.ts',
      lineNumber: undefined,
      data: { filePath: 'src/api.ts' }
    });
  });

  test('should handle error scenarios gracefully', async () => {
    render(React.createElement(BreakingChangesApp));

    // Simulate error during analysis
    simulateVSCodeMessage('error', {
      message: 'Failed to analyze breaking changes: Network error'
    });

    await waitFor(() => {
      expect(screen.getByText('Error')).toBeInTheDocument();
      expect(screen.getByText('Failed to analyze breaking changes: Network error')).toBeInTheDocument();
    });

    // Error should be dismissible
    const dismissButton = screen.getByText('Dismiss');
    fireEvent.click(dismissButton);

    await waitFor(() => {
      expect(screen.queryByText('Failed to analyze breaking changes: Network error')).not.toBeInTheDocument();
    });
  });

  test('should validate branch selection before analysis', async () => {
    render(React.createElement(BreakingChangesApp));

    // Try to analyze without selecting branches
    const analyzeButton = screen.getByText('Analyze Breaking Changes');
    expect(analyzeButton).toBeDisabled();

    // Simulate partial branch selection
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature'],
      currentBranch: '',
      defaultTargetBranch: ''
    });

    await waitFor(() => {
      // Button should still be disabled without proper branch selection
      expect(analyzeButton).toBeDisabled();
    });

    // Provide proper branch selection
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature'],
      currentBranch: 'feature',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      expect(analyzeButton).not.toBeDisabled();
    });
  });

  test('should handle analysis cancellation', async () => {
    const user = userEvent.setup();
    render(React.createElement(BreakingChangesApp));

    // Set up branches and start analysis
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature'],
      currentBranch: 'feature',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      expect(screen.getByText('Analyze Breaking Changes')).toBeInTheDocument();
    });

    await user.click(screen.getByText('Analyze Breaking Changes'));

    simulateVSCodeMessage('analyzing');

    await waitFor(() => {
      expect(screen.getByText('Cancel Analysis')).toBeInTheDocument();
    });

    // Cancel the analysis
    await user.click(screen.getByText('Cancel Analysis'));

    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'cancelAnalysis'
    });

    await waitFor(() => {
      expect(screen.getByText('Analyze Breaking Changes')).toBeInTheDocument();
    });
  });

  test('should handle configuration changes', async () => {
    const user = userEvent.setup();
    render(React.createElement(BreakingChangesApp));

    // Set up branches
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature', 'develop'],
      currentBranch: 'feature',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue('feature')).toBeInTheDocument();
    });

    // Change source branch
    const sourceBranchSelect = screen.getByDisplayValue('feature');
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

    // Start analysis with new configuration
    await user.click(screen.getByText('Analyze Breaking Changes'));

    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'analyzeBreakingChanges',
      sourceBranch: 'develop',
      targetBranch: 'main',
      modelFamily: 'gpt-4o'
    });
  });

  test('should handle change type filtering', async () => {
    const user = userEvent.setup();
    render(React.createElement(BreakingChangesApp));

    // Set up analysis results
    simulateVSCodeMessage('analysisResult', {
      result: {
        summary: {
          totalBreakingChanges: 2,
          criticalCount: 0,
          highCount: 1,
          mediumCount: 1,
          lowCount: 0
        },
        breakingChanges: mockBreakingChanges
      }
    });

    await waitFor(() => {
      expect(screen.getByText('Breaking Changes (2)')).toBeInTheDocument();
    });

    // Filter by change type
    const changeTypeFilter = screen.getByLabelText('Filter by type');
    await user.selectOptions(changeTypeFilter, 'Function Signature Change');

    await waitFor(() => {
      expect(screen.getByText('Breaking Changes (1)')).toBeInTheDocument();
      expect(screen.getByText('Function parameter order changed')).toBeInTheDocument();
      expect(screen.queryByText('Required property added to interface')).not.toBeInTheDocument();
    });
  });

  test('should handle impact assessment display', async () => {
    render(React.createElement(BreakingChangesApp));

    // Set up analysis results
    simulateVSCodeMessage('analysisResult', {
      result: {
        summary: {
          totalBreakingChanges: 2,
          criticalCount: 0,
          highCount: 1,
          mediumCount: 1,
          lowCount: 0
        },
        breakingChanges: mockBreakingChanges
      }
    });

    await waitFor(() => {
      expect(screen.getByText('All callers need to update parameter order')).toBeInTheDocument();
      expect(screen.getByText('Existing implementations need to add version property')).toBeInTheDocument();
    });

    // Check that impact details are displayed
    expect(screen.getByText('Impact Assessment')).toBeInTheDocument();
  });

  test('should handle empty results', async () => {
    render(React.createElement(BreakingChangesApp));

    // Simulate analysis with no breaking changes
    simulateVSCodeMessage('analysisResult', {
      result: {
        summary: {
          totalBreakingChanges: 0,
          criticalCount: 0,
          highCount: 0,
          mediumCount: 0,
          lowCount: 0
        },
        breakingChanges: []
      }
    });

    await waitFor(() => {
      expect(screen.getByText('No breaking changes detected')).toBeInTheDocument();
      expect(screen.getByText('Great! Your changes appear to be backward compatible.')).toBeInTheDocument();
    });
  });
});