import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BreakingChangesApp } from '../BreakingChangesApp';

// Mock the VSCode API
const mockPostMessage = jest.fn();
const mockAcquireVsCodeApi = jest.fn(() => ({
  postMessage: mockPostMessage,
  getState: jest.fn(),
  setState: jest.fn(),
}));

// Mock window.acquireVsCodeApi
Object.defineProperty(window, 'acquireVsCodeApi', {
  value: mockAcquireVsCodeApi,
});

// Mock shared model config
Object.defineProperty(window, 'sharedModelConfig', {
  value: {
    models: [
      { id: 'gpt-4o', name: 'GPT-4o' },
      { id: 'gpt-4o-mini', name: 'GPT-4o-mini' },
    ],
  },
});

describe('BreakingChangesApp', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the main title', () => {
    render(<BreakingChangesApp />);
    expect(screen.getByText('Breaking Changes Analysis')).toBeInTheDocument();
  });

  it('requests branches on mount', () => {
    render(<BreakingChangesApp />);
    expect(mockPostMessage).toHaveBeenCalledWith({ command: 'getBranches' });
  });

  it('displays branch selectors', () => {
    render(<BreakingChangesApp />);
    expect(screen.getByText('Source Branch (PR branch):')).toBeInTheDocument();
    expect(screen.getByText('Target Branch (base branch):')).toBeInTheDocument();
  });

  it('displays model selector', () => {
    render(<BreakingChangesApp />);
    expect(screen.getByText('Language Model:')).toBeInTheDocument();
  });

  it('shows analyze button', () => {
    render(<BreakingChangesApp />);
    expect(screen.getByText('Analyze Breaking Changes')).toBeInTheDocument();
  });

  it('disables analyze button when no branches are selected', () => {
    render(<BreakingChangesApp />);
    const analyzeButton = screen.getByText('Analyze Breaking Changes');
    expect(analyzeButton).toBeDisabled();
  });

  it('handles branch selection message', async () => {
    render(<BreakingChangesApp />);
    
    // Simulate receiving branches from extension
    const messageEvent = new MessageEvent('message', {
      data: {
        command: 'branchesList',
        branches: ['main', 'feature-branch'],
        currentBranch: 'feature-branch',
        defaultTargetBranch: 'main',
        languageModel: 'gpt-4o',
      },
    });
    
    window.dispatchEvent(messageEvent);
    
    await waitFor(() => {
      const sourceBranchSelect = screen.getByDisplayValue('feature-branch');
      const targetBranchSelect = screen.getByDisplayValue('main');
      expect(sourceBranchSelect).toBeInTheDocument();
      expect(targetBranchSelect).toBeInTheDocument();
    });
  });

  it('sends analyze message when analyze button is clicked with branches selected', async () => {
    render(<BreakingChangesApp />);
    
    // Simulate receiving branches
    const messageEvent = new MessageEvent('message', {
      data: {
        command: 'branchesList',
        branches: ['main', 'feature-branch'],
        currentBranch: 'feature-branch',
        defaultTargetBranch: 'main',
      },
    });
    
    window.dispatchEvent(messageEvent);
    
    await waitFor(() => {
      const analyzeButton = screen.getByText('Analyze Breaking Changes');
      expect(analyzeButton).not.toBeDisabled();
    });
    
    const analyzeButton = screen.getByText('Analyze Breaking Changes');
    fireEvent.click(analyzeButton);
    
    expect(mockPostMessage).toHaveBeenCalledWith({
      command: 'analyzeBreakingChanges',
      sourceBranch: 'feature-branch',
      targetBranch: 'main',
      modelFamily: 'gpt-4o-mini',
    });
  });

  it('displays loading state during analysis', async () => {
    render(<BreakingChangesApp />);
    
    // Simulate analyzing message
    const messageEvent = new MessageEvent('message', {
      data: {
        command: 'analyzing',
      },
    });
    
    window.dispatchEvent(messageEvent);
    
    await waitFor(() => {
      expect(screen.getByText('Analyzing breaking changes...')).toBeInTheDocument();
    });
  });

  it('displays analysis results', async () => {
    render(<BreakingChangesApp />);
    
    const mockResult = {
      summary: {
        totalBreakingChanges: 2,
        criticalCount: 1,
        highCount: 1,
        mediumCount: 0,
        lowCount: 0,
      },
      breakingChanges: [
        {
          id: '1',
          severity: 'critical' as const,
          changeType: 'method-signature' as const,
          description: 'Method signature changed',
          recommendation: 'Update method calls',
          changeLocation: {
            filePath: 'src/api.ts',
            lineNumber: 10,
            codeSnippet: 'function test() {}',
          },
          affectedLocations: [],
        },
      ],
    };
    
    // Simulate analysis result message
    const messageEvent = new MessageEvent('message', {
      data: {
        command: 'analysisResult',
        result: mockResult,
      },
    });
    
    window.dispatchEvent(messageEvent);
    
    await waitFor(() => {
      expect(screen.getByText('Analysis Results')).toBeInTheDocument();
      expect(screen.getByText('Summary')).toBeInTheDocument();
      expect(screen.getByText('2')).toBeInTheDocument(); // Total count
      expect(screen.getByText('Method signature changed')).toBeInTheDocument();
    });
  });

  it('displays error message', async () => {
    render(<BreakingChangesApp />);
    
    // Simulate error message
    const messageEvent = new MessageEvent('message', {
      data: {
        command: 'error',
        message: 'Analysis failed',
      },
    });
    
    window.dispatchEvent(messageEvent);
    
    await waitFor(() => {
      expect(screen.getByText('Error')).toBeInTheDocument();
      expect(screen.getByText('Analysis failed')).toBeInTheDocument();
    });
  });
});