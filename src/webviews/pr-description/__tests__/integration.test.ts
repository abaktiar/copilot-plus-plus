/**
 * Integration tests for PR Description Generator
 * Tests webview communication and component integration
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { simulateVSCodeMessage, mockVSCodeAPI } from '../../test-utils';
import { PrDescriptionApp } from '../PrDescriptionApp';

describe('PR Description Generator Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should request branches on component mount', async () => {
    render(React.createElement(PrDescriptionApp));

    // Verify that the component requests branches when it mounts
    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'getBranches'
    });
  });

  test('should handle branch list response and update UI', async () => {
    render(React.createElement(PrDescriptionApp));

    // Simulate receiving branches from extension
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature/test', 'develop'],
      currentBranch: 'feature/test',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      // Check that branch selectors are populated
      expect(screen.getByDisplayValue('feature/test')).toBeInTheDocument();
      expect(screen.getByDisplayValue('main')).toBeInTheDocument();
    });

    // Check that model selector shows the correct model
    expect(screen.getByDisplayValue('GPT-4o Mini')).toBeInTheDocument();
  });

  test('should send generate PR description message with correct format', async () => {
    render(React.createElement(PrDescriptionApp));

    // Set up branches
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature/test'],
      currentBranch: 'feature/test',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue('feature/test')).toBeInTheDocument();
    });

    // Click generate button
    const generateButton = screen.getByText('Generate PR Description');
    fireEvent.click(generateButton);

    // Verify the correct message was sent
    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'generatePrDescription',
      sourceBranch: 'feature/test',
      targetBranch: 'main',
      data: { modelFamily: 'gpt-4o-mini' }
    });
  });

  test('should show loading state during generation', async () => {
    render(React.createElement(PrDescriptionApp));

    // Set up branches
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature/test'],
      currentBranch: 'feature/test',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      expect(screen.getByText('Generate PR Description')).toBeInTheDocument();
    });

    // Start generation
    fireEvent.click(screen.getByText('Generate PR Description'));

    // Simulate loading state
    simulateVSCodeMessage('generating');

    await waitFor(() => {
      expect(screen.getByText('Generating...')).toBeInTheDocument();
      expect(screen.getByText('Cancel')).toBeInTheDocument();
    });
  });

  test('should display results when generation completes', async () => {
    render(React.createElement(PrDescriptionApp));

    // Set up branches and start generation
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature/test'],
      currentBranch: 'feature/test',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      fireEvent.click(screen.getByText('Generate PR Description'));
    });

    // Simulate successful generation
    const mockResult = {
      title: 'Add user authentication feature',
      description: '## Summary\n\nThis PR adds user authentication functionality.\n\n## Changes\n\n- Added login component\n- Implemented JWT tokens\n- Added user session management'
    };

    simulateVSCodeMessage('generationComplete', { result: mockResult });

    await waitFor(() => {
      expect(screen.getByText('Add user authentication feature')).toBeInTheDocument();
      expect(screen.getByText(/This PR adds user authentication functionality/)).toBeInTheDocument();
      expect(screen.getByText('Copy Title')).toBeInTheDocument();
      expect(screen.getByText('Copy Description')).toBeInTheDocument();
      expect(screen.getByText('Copy Complete PR')).toBeInTheDocument();
    });
  });

  test('should handle copy to clipboard functionality', async () => {
    render(React.createElement(PrDescriptionApp));

    // Set up result state
    const mockResult = {
      title: 'Test PR Title',
      description: 'Test PR Description'
    };

    simulateVSCodeMessage('generationComplete', { result: mockResult });

    await waitFor(() => {
      expect(screen.getByText('Copy Title')).toBeInTheDocument();
    });

    // Test copy title
    fireEvent.click(screen.getByText('Copy Title'));
    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'copyToClipboard',
      text: 'Test PR Title',
      data: { text: 'Test PR Title' }
    });

    // Test copy description
    fireEvent.click(screen.getByText('Copy Description'));
    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'copyToClipboard',
      text: 'Test PR Description',
      data: { text: 'Test PR Description' }
    });

    // Test copy complete PR
    fireEvent.click(screen.getByText('Copy Complete PR'));
    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'copyToClipboard',
      text: 'Test PR Title\n\nTest PR Description',
      data: { text: 'Test PR Title\n\nTest PR Description' }
    });
  });

  test('should handle error messages appropriately', async () => {
    render(React.createElement(PrDescriptionApp));

    // Simulate error
    simulateVSCodeMessage('error', {
      error: 'Failed to generate PR description: Git repository not found'
    });

    await waitFor(() => {
      expect(screen.getByText('Error')).toBeInTheDocument();
      expect(screen.getByText('Failed to generate PR description: Git repository not found')).toBeInTheDocument();
    });
  });

  test('should handle model selection changes', async () => {
    render(React.createElement(PrDescriptionApp));

    // Set up branches
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature/test'],
      currentBranch: 'feature/test',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue('GPT-4o Mini')).toBeInTheDocument();
    });

    // Change model selection
    const modelSelect = screen.getByDisplayValue('GPT-4o Mini');
    fireEvent.change(modelSelect, { target: { value: 'gpt-4o' } });

    await waitFor(() => {
      expect(screen.getByDisplayValue('GPT-4o')).toBeInTheDocument();
    });

    // Generate with new model
    fireEvent.click(screen.getByText('Generate PR Description'));

    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'generatePrDescription',
      sourceBranch: 'feature/test',
      targetBranch: 'main',
      data: { modelFamily: 'gpt-4o' }
    });
  });

  test('should handle branch selection changes', async () => {
    render(React.createElement(PrDescriptionApp));

    // Set up branches
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature/test', 'develop'],
      currentBranch: 'feature/test',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue('feature/test')).toBeInTheDocument();
    });

    // Change source branch
    const sourceBranchSelect = screen.getByDisplayValue('feature/test');
    fireEvent.change(sourceBranchSelect, { target: { value: 'develop' } });

    await waitFor(() => {
      expect(screen.getByDisplayValue('develop')).toBeInTheDocument();
    });

    // Generate with new branch selection
    fireEvent.click(screen.getByText('Generate PR Description'));

    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'generatePrDescription',
      sourceBranch: 'develop',
      targetBranch: 'main',
      data: { modelFamily: 'gpt-4o-mini' }
    });
  });

  test('should handle cancellation during generation', async () => {
    render(React.createElement(PrDescriptionApp));

    // Set up and start generation
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature/test'],
      currentBranch: 'feature/test',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      fireEvent.click(screen.getByText('Generate PR Description'));
    });

    simulateVSCodeMessage('generating');

    await waitFor(() => {
      expect(screen.getByText('Cancel')).toBeInTheDocument();
    });

    // Cancel generation
    fireEvent.click(screen.getByText('Cancel'));

    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'cancelGeneration'
    });

    await waitFor(() => {
      expect(screen.getByText('Generate PR Description')).toBeInTheDocument();
    });
  });
});

describe('Component Lifecycle and State Management', () => {
  test('should maintain state during component lifecycle', async () => {
    const { rerender } = render(React.createElement(PrDescriptionApp));

    // Set up initial state
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature/test'],
      currentBranch: 'feature/test',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue('feature/test')).toBeInTheDocument();
    });

    // Rerender component
    rerender(React.createElement(PrDescriptionApp));

    // State should be preserved
    expect(screen.getByDisplayValue('feature/test')).toBeInTheDocument();
    expect(screen.getByDisplayValue('main')).toBeInTheDocument();
  });

  test('should handle component unmount gracefully', async () => {
    const { unmount } = render(React.createElement(PrDescriptionApp));

    // Set up some state
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature/test'],
      currentBranch: 'feature/test',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue('feature/test')).toBeInTheDocument();
    });

    // Unmount should not throw errors
    expect(() => unmount()).not.toThrow();
  });
});