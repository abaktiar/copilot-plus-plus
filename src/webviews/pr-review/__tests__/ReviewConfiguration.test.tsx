import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ReviewConfiguration } from '../components/ReviewConfiguration';

// Mock shared components
jest.mock('../../shared/components', () => ({
  ModelSelector: ({ selectedModel, onModelChange, models }: any) => (
    <select
      data-testid="model-selector"
      value={selectedModel}
      onChange={(e) => onModelChange(e.target.value)}
    >
      {models.map((model: any) => (
        <option key={model.id} value={model.id}>
          {model.name}
        </option>
      ))}
    </select>
  ),
  Button: ({ children, onClick, disabled, loading }: any) => (
    <button
      data-testid="review-button"
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? 'Loading...' : children}
    </button>
  ),
}));

describe('ReviewConfiguration', () => {
  const defaultProps = {
    branches: ['main', 'feature-branch', 'develop'],
    currentBranch: 'feature-branch',
    sourceBranch: 'feature-branch',
    targetBranch: 'main',
    selectedModel: 'gpt-4',
    models: [
      { id: 'gpt-4', name: 'GPT-4' },
      { id: 'gpt-3.5', name: 'GPT-3.5' },
    ],
    isLoading: false,
    onSourceBranchChange: jest.fn(),
    onTargetBranchChange: jest.fn(),
    onModelChange: jest.fn(),
    onReview: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the configuration form', () => {
    render(<ReviewConfiguration {...defaultProps} />);
    
    expect(screen.getByText('PR Review Assistant')).toBeInTheDocument();
    expect(screen.getByTestId('model-selector')).toBeInTheDocument();
    expect(screen.getByLabelText('Source Branch (with changes):')).toBeInTheDocument();
    expect(screen.getByLabelText('Target Branch (base branch):')).toBeInTheDocument();
    expect(screen.getByTestId('review-button')).toBeInTheDocument();
  });

  it('displays branches with current branch indicator', () => {
    render(<ReviewConfiguration {...defaultProps} />);
    
    const sourceBranchSelect = screen.getByLabelText('Source Branch (with changes):');
    expect(sourceBranchSelect).toHaveValue('feature-branch');
    
    // Check that current branch is indicated
    const options = sourceBranchSelect.querySelectorAll('option');
    const currentBranchOption = Array.from(options).find(
      option => option.textContent?.includes('(current)')
    );
    expect(currentBranchOption).toBeTruthy();
    expect(currentBranchOption?.textContent).toBe('feature-branch (current)');
  });

  it('calls onSourceBranchChange when source branch is changed', () => {
    render(<ReviewConfiguration {...defaultProps} />);
    
    const sourceBranchSelect = screen.getByLabelText('Source Branch (with changes):');
    fireEvent.change(sourceBranchSelect, { target: { value: 'develop' } });
    
    expect(defaultProps.onSourceBranchChange).toHaveBeenCalledWith('develop');
  });

  it('calls onTargetBranchChange when target branch is changed', () => {
    render(<ReviewConfiguration {...defaultProps} />);
    
    const targetBranchSelect = screen.getByLabelText('Target Branch (base branch):');
    fireEvent.change(targetBranchSelect, { target: { value: 'develop' } });
    
    expect(defaultProps.onTargetBranchChange).toHaveBeenCalledWith('develop');
  });

  it('calls onModelChange when model is changed', () => {
    render(<ReviewConfiguration {...defaultProps} />);
    
    const modelSelect = screen.getByTestId('model-selector');
    fireEvent.change(modelSelect, { target: { value: 'gpt-3.5' } });
    
    expect(defaultProps.onModelChange).toHaveBeenCalledWith('gpt-3.5');
  });

  it('calls onReview when review button is clicked', () => {
    render(<ReviewConfiguration {...defaultProps} />);
    
    const reviewButton = screen.getByTestId('review-button');
    fireEvent.click(reviewButton);
    
    expect(defaultProps.onReview).toHaveBeenCalled();
  });

  it('disables source branch select when loading', () => {
    render(<ReviewConfiguration {...defaultProps} isLoading={true} />);
    
    const sourceBranchSelect = screen.getByLabelText('Source Branch (with changes):');
    expect(sourceBranchSelect).toBeDisabled();
  });

  it('shows loading state on review button when loading', () => {
    render(<ReviewConfiguration {...defaultProps} isLoading={true} />);
    
    const reviewButton = screen.getByTestId('review-button');
    expect(reviewButton).toBeDisabled();
    expect(reviewButton).toHaveTextContent('Loading...');
  });

  it('displays all available branches in both selectors', () => {
    render(<ReviewConfiguration {...defaultProps} />);
    
    const sourceBranchSelect = screen.getByLabelText('Source Branch (with changes):');
    const targetBranchSelect = screen.getByLabelText('Target Branch (base branch):');
    
    // Check source branch options
    const sourceOptions = sourceBranchSelect.querySelectorAll('option');
    expect(sourceOptions).toHaveLength(3);
    
    // Check target branch options
    const targetOptions = targetBranchSelect.querySelectorAll('option');
    expect(targetOptions).toHaveLength(3);
    expect(targetOptions[0]).toHaveTextContent('main');
    expect(targetOptions[1]).toHaveTextContent('feature-branch');
    expect(targetOptions[2]).toHaveTextContent('develop');
  });
});