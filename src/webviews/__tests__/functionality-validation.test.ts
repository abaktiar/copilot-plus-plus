/**
 * End-to-end validation tests to ensure all existing functionality works identically
 * Tests complete workflows and cross-platform compatibility
 */

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { 
  simulateVSCodeMessage, 
  mockVSCodeAPI, 
  mockReviewIssues, 
  mockBreakingChanges,
  mockPRDescription 
} from '../test-utils';

// Import all main components
import { PrDescriptionApp } from '../pr-description/PrDescriptionApp';
import { PrReviewApp } from '../pr-review/PrReviewApp';
import { BreakingChangesApp } from '../breaking-changes/BreakingChangesApp';

describe('Functionality Validation - PR Description Generator', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should preserve complete PR description workflow', async () => {
    const user = userEvent.setup();
    render(React.createElement(PrDescriptionApp));

    // 1. Initial load - requests branches
    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'getBranches'
    });

    // 2. Receive branches and populate UI
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature/auth', 'develop'],
      currentBranch: 'feature/auth',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue('feature/auth')).toBeInTheDocument();
      expect(screen.getByDisplayValue('main')).toBeInTheDocument();
      expect(screen.getByDisplayValue('GPT-4o Mini')).toBeInTheDocument();
    });

    // 3. Verify all UI elements are present
    expect(screen.getByText('PR Description Generator')).toBeInTheDocument();
    expect(screen.getByText('Source Branch')).toBeInTheDocument();
    expect(screen.getByText('Target Branch')).toBeInTheDocument();
    expect(screen.getByText('Model')).toBeInTheDocument();
    expect(screen.getByText('Generate PR Description')).toBeInTheDocument();

    // 4. Change model selection
    const modelSelect = screen.getByDisplayValue('GPT-4o Mini');
    await user.selectOptions(modelSelect, 'gpt-4o');

    await waitFor(() => {
      expect(screen.getByDisplayValue('GPT-4o')).toBeInTheDocument();
    });

    // 5. Generate PR description
    await user.click(screen.getByText('Generate PR Description'));

    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'generatePrDescription',
      sourceBranch: 'feature/auth',
      targetBranch: 'main',
      data: { modelFamily: 'gpt-4o' }
    });

    // 6. Show loading state
    simulateVSCodeMessage('generating');

    await waitFor(() => {
      expect(screen.getByText('Generating...')).toBeInTheDocument();
      expect(screen.getByText('Cancel')).toBeInTheDocument();
    });

    // 7. Complete generation with results
    simulateVSCodeMessage('generationComplete', {
      result: {
        title: 'Add user authentication system',
        description: mockPRDescription
      }
    });

    await waitFor(() => {
      expect(screen.getByText('Add user authentication system')).toBeInTheDocument();
      expect(screen.getByText(/Feature Implementation/)).toBeInTheDocument();
      expect(screen.getByText('Copy Title')).toBeInTheDocument();
      expect(screen.getByText('Copy Description')).toBeInTheDocument();
      expect(screen.getByText('Copy Complete PR')).toBeInTheDocument();
    });

    // 8. Test copy functionality
    await user.click(screen.getByText('Copy Title'));
    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'copyToClipboard',
      text: 'Add user authentication system',
      data: { text: 'Add user authentication system' }
    });

    await user.click(screen.getByText('Copy Description'));
    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'copyToClipboard',
      text: mockPRDescription,
      data: { text: mockPRDescription }
    });

    await user.click(screen.getByText('Copy Complete PR'));
    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'copyToClipboard',
      text: `Add user authentication system\n\n${mockPRDescription}`,
      data: { text: `Add user authentication system\n\n${mockPRDescription}` }
    });

    // 9. Test error handling
    simulateVSCodeMessage('error', {
      error: 'Network connection failed'
    });

    await waitFor(() => {
      expect(screen.getByText('Error')).toBeInTheDocument();
      expect(screen.getByText('Network connection failed')).toBeInTheDocument();
    });
  });

  test('should handle branch switching correctly', async () => {
    const user = userEvent.setup();
    render(React.createElement(PrDescriptionApp));

    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature/auth', 'feature/ui', 'develop'],
      currentBranch: 'feature/auth',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue('feature/auth')).toBeInTheDocument();
    });

    // Switch source branch
    const sourceBranchSelect = screen.getByDisplayValue('feature/auth');
    await user.selectOptions(sourceBranchSelect, 'feature/ui');

    await waitFor(() => {
      expect(screen.getByDisplayValue('feature/ui')).toBeInTheDocument();
    });

    // Switch target branch
    const targetBranchSelect = screen.getByDisplayValue('main');
    await user.selectOptions(targetBranchSelect, 'develop');

    await waitFor(() => {
      expect(screen.getByDisplayValue('develop')).toBeInTheDocument();
    });

    // Generate with new branch selection
    await user.click(screen.getByText('Generate PR Description'));

    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'generatePrDescription',
      sourceBranch: 'feature/ui',
      targetBranch: 'develop',
      data: { modelFamily: 'gpt-4o-mini' }
    });
  });
});

describe('Functionality Validation - PR Review Assistant', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockVSCodeAPI.getState.mockReturnValue({});
  });

  test('should preserve complete PR review workflow', async () => {
    const user = userEvent.setup();
    render(React.createElement(PrReviewApp));

    // 1. Initial load
    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'getBranches'
    });

    // 2. Setup branches
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature/security-fix'],
      currentBranch: 'feature/security-fix',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue('feature/security-fix')).toBeInTheDocument();
      expect(screen.getByDisplayValue('main')).toBeInTheDocument();
    });

    // 3. Verify UI elements
    expect(screen.getByText('PR Review Assistant')).toBeInTheDocument();
    expect(screen.getByText('Start Review')).toBeInTheDocument();

    // 4. Start review
    await user.click(screen.getByText('Start Review'));

    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'reviewPrChanges',
      sourceBranch: 'feature/security-fix',
      targetBranch: 'main',
      modelFamily: 'gpt-4o-mini'
    });

    // 5. Show loading state
    simulateVSCodeMessage('startLoading');

    await waitFor(() => {
      expect(screen.getByText('Reviewing changes...')).toBeInTheDocument();
      expect(screen.getByText('Cancel Review')).toBeInTheDocument();
    });

    // 6. Progress updates
    simulateVSCodeMessage('progressUpdate', {
      update: {
        progress: 3,
        total: 8,
        message: 'Analyzing src/auth.ts'
      }
    });

    await waitFor(() => {
      expect(screen.getByText('Analyzing src/auth.ts')).toBeInTheDocument();
      expect(screen.getByText('3 / 8')).toBeInTheDocument();
    });

    // 7. Complete review
    simulateVSCodeMessage('reviewComplete', {
      result: {
        summary: {
          assessment: 'Code review completed successfully',
          strengths: ['Good error handling', 'Clear variable names'],
          criticalIssues: ['Security vulnerability found'],
          recommendations: ['Add input validation', 'Update dependencies']
        },
        issues: mockReviewIssues
      },
      reviewKey: 'feature/security-fix:main'
    });

    await waitFor(() => {
      expect(screen.getByText('Review Complete')).toBeInTheDocument();
      expect(screen.getByText('Code review completed successfully')).toBeInTheDocument();
      expect(screen.getByText('Potential XSS vulnerability')).toBeInTheDocument();
      expect(screen.getByText('Inefficient loop')).toBeInTheDocument();
    });

    // 8. Test filtering
    const severityFilter = screen.getByLabelText('Filter by severity');
    await user.selectOptions(severityFilter, 'High');

    await waitFor(() => {
      expect(screen.getByText('Potential XSS vulnerability')).toBeInTheDocument();
      expect(screen.queryByText('Inefficient loop')).not.toBeInTheDocument();
    });

    // 9. Test file navigation
    const fileLink = screen.getByText('src/component.ts:42');
    await user.click(fileLink);

    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'openFile',
      filePath: 'src/component.ts',
      lineNumber: 42,
      data: { filePath: 'src/component.ts', lineNumber: 42 }
    });

    // 10. Test issue dismissal
    const dismissButtons = screen.getAllByText('Dismiss');
    await user.click(dismissButtons[0]);

    await waitFor(() => {
      expect(screen.queryByText('Potential XSS vulnerability')).not.toBeInTheDocument();
    });

    expect(mockVSCodeAPI.setState).toHaveBeenCalled();
  });

  test('should handle keyboard navigation', async () => {
    render(React.createElement(PrReviewApp));

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

    // Test keyboard shortcuts
    fireEvent.keyDown(document, { key: 'j' }); // Next issue
    fireEvent.keyDown(document, { key: 'k' }); // Previous issue
    fireEvent.keyDown(document, { key: 'd' }); // Dismiss issue
    fireEvent.keyDown(document, { key: 'f' }); // Focus search

    // Should not throw errors
    expect(screen.getByText('Potential XSS vulnerability')).toBeInTheDocument();
  });
});

describe('Functionality Validation - Breaking Changes Analyzer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should preserve complete breaking changes workflow', async () => {
    const user = userEvent.setup();
    render(React.createElement(BreakingChangesApp));

    // 1. Initial load
    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'getBranches'
    });

    // 2. Setup branches
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature/api-changes'],
      currentBranch: 'feature/api-changes',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue('feature/api-changes')).toBeInTheDocument();
      expect(screen.getByDisplayValue('main')).toBeInTheDocument();
    });

    // 3. Verify UI elements
    expect(screen.getByText('Breaking Changes Analysis')).toBeInTheDocument();
    expect(screen.getByText('Analyze Breaking Changes')).toBeInTheDocument();

    // 4. Start analysis
    await user.click(screen.getByText('Analyze Breaking Changes'));

    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'analyzeBreakingChanges',
      sourceBranch: 'feature/api-changes',
      targetBranch: 'main',
      modelFamily: 'gpt-4o-mini'
    });

    // 5. Show analyzing state
    simulateVSCodeMessage('analyzing');

    await waitFor(() => {
      expect(screen.getByText('Analyzing breaking changes...')).toBeInTheDocument();
      expect(screen.getByText('Cancel Analysis')).toBeInTheDocument();
    });

    // 6. Complete analysis
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
      expect(screen.getByText('Analysis Results')).toBeInTheDocument();
      expect(screen.getByText('Summary')).toBeInTheDocument();
      expect(screen.getByText('Function parameter order changed')).toBeInTheDocument();
      expect(screen.getByText('Required property added to interface')).toBeInTheDocument();
    });

    // 7. Test filtering by severity
    const severityFilter = screen.getByLabelText('Filter by severity');
    await user.selectOptions(severityFilter, 'High');

    await waitFor(() => {
      expect(screen.getByText('Breaking Changes (1)')).toBeInTheDocument();
      expect(screen.getByText('Function parameter order changed')).toBeInTheDocument();
      expect(screen.queryByText('Required property added to interface')).not.toBeInTheDocument();
    });

    // 8. Test search functionality
    await user.selectOptions(severityFilter, 'All');
    
    const searchInput = screen.getByPlaceholderText('Search in descriptions, files, etc.');
    await user.type(searchInput, 'interface');

    await waitFor(() => {
      expect(screen.getByText('Breaking Changes (1)')).toBeInTheDocument();
      expect(screen.getByText('Required property added to interface')).toBeInTheDocument();
      expect(screen.queryByText('Function parameter order changed')).not.toBeInTheDocument();
    });

    // 9. Test file navigation
    await user.clear(searchInput);

    await waitFor(() => {
      expect(screen.getByText('Breaking Changes (2)')).toBeInTheDocument();
    });

    const fileLink = screen.getByText('src/api.ts');
    await user.click(fileLink);

    expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
      command: 'openFile',
      filePath: 'src/api.ts',
      lineNumber: undefined,
      data: { filePath: 'src/api.ts' }
    });
  });

  test('should handle empty results correctly', async () => {
    render(React.createElement(BreakingChangesApp));

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

describe('Cross-Component Functionality', () => {
  test('should handle model configuration consistently across components', async () => {
    // Test that all components use the same model configuration
    const testModelConfig = {
      models: [
        { id: 'gpt-4o', name: 'GPT-4o' },
        { id: 'claude-3.5-sonnet', name: 'Claude 3.5 Sonnet' }
      ]
    };

    // Temporarily update model config
    const originalConfig = window.sharedModelConfig;
    (window as any).sharedModelConfig = testModelConfig;

    // Test PR Description component
    const { unmount: unmountPR } = render(React.createElement(PrDescriptionApp));
    
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature'],
      currentBranch: 'feature',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o'
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue('GPT-4o')).toBeInTheDocument();
    });

    unmountPR();

    // Test PR Review component
    const { unmount: unmountReview } = render(React.createElement(PrReviewApp));
    
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature'],
      currentBranch: 'feature',
      defaultTargetBranch: 'main',
      languageModel: 'claude-3.5-sonnet'
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue('Claude 3.5 Sonnet')).toBeInTheDocument();
    });

    unmountReview();

    // Test Breaking Changes component
    const { unmount: unmountBreaking } = render(React.createElement(BreakingChangesApp));
    
    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature'],
      currentBranch: 'feature',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o'
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue('GPT-4o')).toBeInTheDocument();
    });

    unmountBreaking();

    // Restore original config
    (window as any).sharedModelConfig = originalConfig;
  });

  test('should handle VSCode API consistently across components', async () => {
    // Test that all components use VSCode API the same way
    const components = [
      { name: 'PrDescriptionApp', component: PrDescriptionApp },
      { name: 'PrReviewApp', component: PrReviewApp },
      { name: 'BreakingChangesApp', component: BreakingChangesApp }
    ];

    for (const { name, component } of components) {
      jest.clearAllMocks();
      
      const { unmount } = render(React.createElement(component));

      // All components should request branches on mount
      expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({
        command: 'getBranches'
      });

      unmount();
    }
  });
});

describe('Performance and Reliability', () => {
  test('should handle rapid user interactions without errors', async () => {
    const user = userEvent.setup();
    render(React.createElement(PrDescriptionApp));

    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature1', 'feature2', 'feature3'],
      currentBranch: 'feature1',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue('feature1')).toBeInTheDocument();
    });

    // Rapid branch switching
    const sourceBranchSelect = screen.getByDisplayValue('feature1');
    
    await user.selectOptions(sourceBranchSelect, 'feature2');
    await user.selectOptions(sourceBranchSelect, 'feature3');
    await user.selectOptions(sourceBranchSelect, 'feature1');

    // Rapid model switching
    const modelSelect = screen.getByDisplayValue('GPT-4o Mini');
    
    await user.selectOptions(modelSelect, 'gpt-4o');
    await user.selectOptions(modelSelect, 'gpt-4o-mini');

    // Multiple rapid clicks on generate button
    const generateButton = screen.getByText('Generate PR Description');
    
    await user.click(generateButton);
    await user.click(generateButton);
    await user.click(generateButton);

    // Should not crash or throw errors
    expect(screen.getByText('Generate PR Description')).toBeInTheDocument();
  });

  test('should handle memory cleanup on component unmount', async () => {
    // Test that components clean up properly
    const { unmount } = render(React.createElement(PrDescriptionApp));

    simulateVSCodeMessage('branchesList', {
      branches: ['main', 'feature'],
      currentBranch: 'feature',
      defaultTargetBranch: 'main',
      languageModel: 'gpt-4o-mini'
    });

    await waitFor(() => {
      expect(screen.getByDisplayValue('feature')).toBeInTheDocument();
    });

    // Unmount should not throw errors
    expect(() => unmount()).not.toThrow();
  });
});