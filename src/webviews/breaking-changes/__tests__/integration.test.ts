/**
 * Integration tests for Breaking Changes Analyzer
 * Tests the complete workflow from user interaction to results display
 */

// Mock VSCode API
const mockPostMessage = jest.fn();
const mockAcquireVsCodeApi = jest.fn(() => ({
  postMessage: mockPostMessage,
  getState: jest.fn(),
  setState: jest.fn(),
}));

// Setup global mocks
beforeAll(() => {
  Object.defineProperty(window, 'acquireVsCodeApi', {
    value: mockAcquireVsCodeApi,
  });

  Object.defineProperty(window, 'sharedModelConfig', {
    value: {
      models: [
        { id: 'gpt-4o', name: 'GPT-4o' },
        { id: 'gpt-4o-mini', name: 'GPT-4o-mini' },
        { id: 'claude-3.5-sonnet', name: 'Claude 3.5 Sonnet' },
      ],
    },
  });
});

describe('Breaking Changes Analyzer Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should handle complete analysis workflow', async () => {
    // This test verifies the complete workflow:
    // 1. Component mounts and requests branches
    // 2. Extension responds with branch list
    // 3. User selects branches and triggers analysis
    // 4. Extension responds with analysis results
    // 5. Results are displayed with filtering capabilities

    const { render, screen, fireEvent, waitFor } = await import('@testing-library/react');
    const React = await import('react');
    const { BreakingChangesApp } = await import('../BreakingChangesApp');

    // Step 1: Mount component
    render(React.createElement(BreakingChangesApp));

    // Verify initial state
    expect(screen.getByText('Breaking Changes Analysis')).toBeInTheDocument();
    expect(mockPostMessage).toHaveBeenCalledWith({ command: 'getBranches' });

    // Step 2: Simulate branch list response
    const branchesMessage = new MessageEvent('message', {
      data: {
        command: 'branchesList',
        branches: ['main', 'develop', 'feature/new-api'],
        currentBranch: 'feature/new-api',
        defaultTargetBranch: 'main',
        languageModel: 'gpt-4o-mini',
      },
    });

    window.dispatchEvent(branchesMessage);

    await waitFor(() => {
      expect(screen.getByDisplayValue('feature/new-api')).toBeInTheDocument();
      expect(screen.getByDisplayValue('main')).toBeInTheDocument();
    });

    // Step 3: Trigger analysis
    const analyzeButton = screen.getByText('Analyze Breaking Changes');
    expect(analyzeButton).not.toBeDisabled();

    fireEvent.click(analyzeButton);

    expect(mockPostMessage).toHaveBeenCalledWith({
      command: 'analyzeBreakingChanges',
      sourceBranch: 'feature/new-api',
      targetBranch: 'main',
      modelFamily: 'gpt-4o-mini',
    });

    // Step 4: Simulate analysis start
    const analyzingMessage = new MessageEvent('message', {
      data: {
        command: 'analyzing',
      },
    });

    window.dispatchEvent(analyzingMessage);

    await waitFor(() => {
      expect(screen.getByText('Analyzing breaking changes...')).toBeInTheDocument();
    });

    // Step 5: Simulate analysis results
    const mockAnalysisResult = {
      summary: {
        totalBreakingChanges: 3,
        criticalCount: 1,
        highCount: 1,
        mediumCount: 1,
        lowCount: 0,
      },
      breakingChanges: [
        {
          id: '1',
          severity: 'critical',
          changeType: 'method-signature',
          description: 'API method signature changed',
          recommendation: 'Update all API calls to use new signature',
          changeLocation: {
            filePath: 'src/api/user.ts',
            lineNumber: 15,
            codeSnippet: 'function getUser(id: string): Promise<User>',
          },
          affectedLocations: [
            {
              filePath: 'src/components/UserProfile.tsx',
              lineNumber: 25,
              codeSnippet: 'const user = await getUser(userId);',
            },
          ],
        },
        {
          id: '2',
          severity: 'high',
          changeType: 'class-structure',
          description: 'User class properties modified',
          recommendation: 'Update User interface and related code',
          changeLocation: {
            filePath: 'src/types/User.ts',
            lineNumber: 5,
            codeSnippet: 'interface User { id: string; name: string; }',
          },
          affectedLocations: [],
        },
        {
          id: '3',
          severity: 'medium',
          changeType: 'enum-value',
          description: 'Status enum values changed',
          recommendation: 'Update status handling logic',
          changeLocation: {
            filePath: 'src/types/Status.ts',
            lineNumber: 3,
            codeSnippet: 'enum Status { ACTIVE, INACTIVE }',
          },
          affectedLocations: [],
        },
      ],
    };

    const resultsMessage = new MessageEvent('message', {
      data: {
        command: 'analysisResult',
        result: mockAnalysisResult,
      },
    });

    window.dispatchEvent(resultsMessage);

    // Step 6: Verify results display
    await waitFor(() => {
      expect(screen.getByText('Analysis Results')).toBeInTheDocument();
      expect(screen.getByText('Summary')).toBeInTheDocument();
      
      // Check summary stats
      expect(screen.getByText('3')).toBeInTheDocument(); // Total
      expect(screen.getByText('1')).toBeInTheDocument(); // Critical, High, Medium counts
      
      // Check breaking changes are displayed
      expect(screen.getByText('API method signature changed')).toBeInTheDocument();
      expect(screen.getByText('User class properties modified')).toBeInTheDocument();
      expect(screen.getByText('Status enum values changed')).toBeInTheDocument();
    });

    // Step 7: Test filtering functionality
    expect(screen.getByText('Breaking Changes (3)')).toBeInTheDocument();

    // Filter by severity
    const severityFilter = screen.getByDisplayValue('All Severities');
    fireEvent.change(severityFilter, { target: { value: 'critical' } });

    await waitFor(() => {
      expect(screen.getByText('Breaking Changes (1)')).toBeInTheDocument();
      expect(screen.getByText('API method signature changed')).toBeInTheDocument();
      expect(screen.queryByText('User class properties modified')).not.toBeInTheDocument();
    });

    // Reset filter and test search
    fireEvent.change(severityFilter, { target: { value: 'all' } });

    const searchInput = screen.getByPlaceholderText('Search in descriptions, files, etc.');
    fireEvent.change(searchInput, { target: { value: 'User' } });

    await waitFor(() => {
      expect(screen.getByText('Breaking Changes (1)')).toBeInTheDocument();
      expect(screen.getByText('User class properties modified')).toBeInTheDocument();
      expect(screen.queryByText('API method signature changed')).not.toBeInTheDocument();
    });

    // Step 8: Test file navigation
    fireEvent.change(searchInput, { target: { value: '' } }); // Clear search

    await waitFor(() => {
      expect(screen.getByText('Breaking Changes (3)')).toBeInTheDocument();
    });

    const fileLocation = screen.getByText('src/api/user.ts:15');
    fireEvent.click(fileLocation);

    expect(mockPostMessage).toHaveBeenCalledWith({
      command: 'openFile',
      data: { filePath: 'src/api/user.ts', lineNumber: 15 },
      filePath: 'src/api/user.ts',
      lineNumber: 15,
    });
  });

  it('should handle error scenarios gracefully', async () => {
    const { render, screen, waitFor } = await import('@testing-library/react');
    const React = await import('react');
    const { BreakingChangesApp } = await import('../BreakingChangesApp');

    render(React.createElement(BreakingChangesApp));

    // Simulate error during analysis
    const errorMessage = new MessageEvent('message', {
      data: {
        command: 'error',
        message: 'Failed to analyze breaking changes: Network error',
      },
    });

    window.dispatchEvent(errorMessage);

    await waitFor(() => {
      expect(screen.getByText('Error')).toBeInTheDocument();
      expect(screen.getByText('Failed to analyze breaking changes: Network error')).toBeInTheDocument();
    });
  });

  it('should validate branch selection before analysis', async () => {
    const { render, screen, fireEvent } = await import('@testing-library/react');
    const React = await import('react');
    const { BreakingChangesApp } = await import('../BreakingChangesApp');

    render(React.createElement(BreakingChangesApp));

    // Try to analyze without selecting branches
    const analyzeButton = screen.getByText('Analyze Breaking Changes');
    expect(analyzeButton).toBeDisabled();

    // Simulate partial branch selection
    const branchesMessage = new MessageEvent('message', {
      data: {
        command: 'branchesList',
        branches: ['main', 'feature'],
        currentBranch: '',
        defaultTargetBranch: '',
      },
    });

    window.dispatchEvent(branchesMessage);

    // Button should still be disabled
    expect(analyzeButton).toBeDisabled();
  });
});