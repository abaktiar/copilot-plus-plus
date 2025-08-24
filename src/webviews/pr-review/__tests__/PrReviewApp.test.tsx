import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { PrReviewApp } from '../PrReviewApp';

// Mock the VSCode API
const mockPostMessage = jest.fn();
const mockGetState = jest.fn();
const mockSetState = jest.fn();

// Mock the useVSCodeAPI hook
jest.mock('../shared/hooks/useVSCodeAPI', () => ({
  useVSCodeAPI: () => ({
    postMessage: mockPostMessage,
    getState: mockGetState,
    setState: mockSetState,
  }),
  useMessageListener: (callback: Function) => {
    // Store the callback for later use in tests
    (window as any).messageCallback = callback;
  },
  useLoadingState: (initial = false) => {
    const [isLoading, setIsLoading] = React.useState(initial);
    return {
      isLoading,
      startLoading: () => setIsLoading(true),
      stopLoading: () => setIsLoading(false),
      setIsLoading,
    };
  },
  useErrorState: () => {
    const [error, setError] = React.useState<string | null>(null);
    return {
      error,
      setError,
      clearError: () => setError(null),
      hasError: error !== null,
    };
  },
  useWebviewState: (initialState: any) => {
    const [state, setState] = React.useState(initialState);
    return [state, setState];
  },
}));

// Mock shared components
jest.mock('../shared/components', () => ({
  LoadingSpinner: ({ message }: { message?: string }) => (
    <div data-testid="loading-spinner">{message}</div>
  ),
}));

// Mock PR Review components
jest.mock('../components/ReviewConfiguration', () => ({
  ReviewConfiguration: (props: any) => (
    <div data-testid="review-configuration">
      <button onClick={props.onReview} data-testid="review-button">
        Review PR Changes
      </button>
    </div>
  ),
}));

jest.mock('../components/ProgressIndicator', () => ({
  ProgressIndicator: ({ progress }: any) => (
    <div data-testid="progress-indicator">
      {progress.completed}/{progress.total}
    </div>
  ),
}));

jest.mock('../components/ReviewDashboard', () => ({
  ReviewDashboard: ({ stats }: any) => (
    <div data-testid="review-dashboard">
      Total: {stats?.total || 0}
    </div>
  ),
}));

jest.mock('../components/ReviewSummary', () => ({
  ReviewSummary: ({ summary }: any) => (
    <div data-testid="review-summary">
      {summary.assessment}
    </div>
  ),
}));

jest.mock('../components/IssuesList', () => ({
  IssuesList: ({ issues }: any) => (
    <div data-testid="issues-list">
      Issues: {issues.length}
    </div>
  ),
}));

jest.mock('../components/FilterBar', () => ({
  FilterBar: () => <div data-testid="filter-bar">Filter Bar</div>,
}));

describe('PrReviewApp', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockGetState.mockReturnValue({});
    // Mock shared model config
    (window as any).sharedModelConfig = {
      models: [
        { id: 'gpt-4', name: 'GPT-4' },
        { id: 'gpt-3.5', name: 'GPT-3.5' },
      ],
    };
  });

  afterEach(() => {
    delete (window as any).messageCallback;
    delete (window as any).sharedModelConfig;
  });

  it('renders the PR Review configuration form', () => {
    render(<PrReviewApp />);
    
    expect(screen.getByTestId('review-configuration')).toBeInTheDocument();
  });

  it('requests branches on mount', () => {
    render(<PrReviewApp />);
    
    expect(mockPostMessage).toHaveBeenCalledWith({
      command: 'getBranches',
    });
  });

  it('handles branches list message', () => {
    render(<PrReviewApp />);
    
    const messageCallback = (window as any).messageCallback;
    messageCallback({
      command: 'branchesList',
      branches: ['main', 'feature-branch'],
      currentBranch: 'feature-branch',
      languageModel: 'gpt-4',
      defaultTargetBranch: 'main',
    });

    // Component should update with branch data
    expect(screen.getByTestId('review-configuration')).toBeInTheDocument();
  });

  it('shows loading spinner when review starts', () => {
    render(<PrReviewApp />);
    
    const messageCallback = (window as any).messageCallback;
    messageCallback({
      command: 'startLoading',
    });

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });

  it('shows progress indicator during review', () => {
    render(<PrReviewApp />);
    
    const messageCallback = (window as any).messageCallback;
    
    // Start loading
    messageCallback({
      command: 'startLoading',
    });

    // Send progress update
    messageCallback({
      command: 'progressUpdate',
      update: {
        progress: 5,
        total: 10,
        message: 'Processing file.js',
      },
    });

    expect(screen.getByTestId('progress-indicator')).toBeInTheDocument();
    expect(screen.getByText('5/10')).toBeInTheDocument();
  });

  it('displays review results when complete', () => {
    render(<PrReviewApp />);
    
    const messageCallback = (window as any).messageCallback;
    
    const mockResult = {
      summary: {
        assessment: 'Good code quality overall',
        strengths: ['Clean code', 'Good tests'],
        criticalIssues: [],
        recommendations: ['Add more comments'],
      },
      issues: [
        {
          filePath: 'src/test.js',
          severity: 'Medium',
          category: 'Code Style',
          description: 'Missing semicolon',
        },
      ],
    };

    messageCallback({
      command: 'reviewComplete',
      result: mockResult,
      reviewKey: 'feature:main',
    });

    expect(screen.getByTestId('review-dashboard')).toBeInTheDocument();
    expect(screen.getByTestId('review-summary')).toBeInTheDocument();
    expect(screen.getByTestId('issues-list')).toBeInTheDocument();
    expect(screen.getByText('Good code quality overall')).toBeInTheDocument();
    expect(screen.getByText('Issues: 1')).toBeInTheDocument();
  });

  it('displays error message when review fails', () => {
    render(<PrReviewApp />);
    
    const messageCallback = (window as any).messageCallback;
    messageCallback({
      command: 'error',
      message: 'Failed to analyze changes',
    });

    expect(screen.getByText('Failed to analyze changes')).toBeInTheDocument();
  });

  it('sends review request when review button is clicked', () => {
    render(<PrReviewApp />);
    
    // Set up branches first
    const messageCallback = (window as any).messageCallback;
    messageCallback({
      command: 'branchesList',
      branches: ['main', 'feature-branch'],
      currentBranch: 'feature-branch',
      languageModel: 'gpt-4',
      defaultTargetBranch: 'main',
    });

    const reviewButton = screen.getByTestId('review-button');
    fireEvent.click(reviewButton);

    expect(mockPostMessage).toHaveBeenCalledWith({
      command: 'reviewPr',
      sourceBranch: 'feature-branch',
      targetBranch: 'main',
      modelFamily: 'gpt-4',
    });
  });

  it('persists reviewed issues state', () => {
    const mockSavedState = {
      'feature:main': ['src/test.js:Medium:Missing semicolon'],
    };
    mockGetState.mockReturnValue(mockSavedState);

    render(<PrReviewApp />);
    
    const messageCallback = (window as any).messageCallback;
    
    // Complete a review
    messageCallback({
      command: 'reviewComplete',
      result: {
        summary: { assessment: 'Test', strengths: [], criticalIssues: [], recommendations: [] },
        issues: [],
        reviewKey: 'feature:main',
      },
    });

    // Should load saved state
    expect(mockGetState).toHaveBeenCalled();
  });
});