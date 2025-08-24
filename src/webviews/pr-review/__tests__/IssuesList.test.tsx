import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { IssuesList } from '../components/IssuesList';

// Mock the VSCode API hook
const mockPostMessage = jest.fn();
jest.mock('../../shared/hooks/useVSCodeAPI', () => ({
  useVSCodeAPI: () => ({
    postMessage: mockPostMessage,
  }),
}));

// Mock shared components
jest.mock('../../shared/components', () => ({
  Button: ({ children, onClick, className }: any) => (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  ),
  Icon: ({ name }: any) => <span data-testid={`icon-${name}`}>{name}</span>,
}));

describe('IssuesList', () => {
  const mockIssues = [
    {
      filePath: 'src/component.js',
      lineNumber: 42,
      severity: 'High' as const,
      category: 'Security',
      description: 'Potential XSS vulnerability',
      suggestion: 'Sanitize user input',
      suggestedCode: 'const sanitized = sanitizeInput(userInput);',
      justification: 'User input should always be sanitized',
      lineContext: {
        linesBefore: ['function processInput(input) {'],
        codeSnippet: '  return input;',
        linesAfter: ['}'],
      },
    },
    {
      filePath: 'src/utils.js',
      lineNumber: 15,
      severity: 'Medium' as const,
      category: 'Code Style',
      description: 'Missing semicolon',
      suggestion: 'Add semicolon at end of statement',
    },
    {
      filePath: 'src/test.js',
      lineNumber: 8,
      severity: 'Low' as const,
      category: 'Testing Gap',
      description: 'Missing test coverage',
    },
  ];

  const defaultProps = {
    issues: mockIssues,
    searchQuery: '',
    severityFilter: 'All',
    categoryFilter: 'All',
    showReviewed: false,
    reviewedIssues: new Set<string>(),
    onMarkAsReviewed: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all issues when no filters are applied', () => {
    render(<IssuesList {...defaultProps} />);
    
    expect(screen.getByText('Showing 3 pending issues')).toBeInTheDocument();
    expect(screen.getByText('Potential XSS vulnerability')).toBeInTheDocument();
    expect(screen.getByText('Missing semicolon')).toBeInTheDocument();
    expect(screen.getByText('Missing test coverage')).toBeInTheDocument();
  });

  it('filters issues by severity', () => {
    render(<IssuesList {...defaultProps} severityFilter="High" />);
    
    expect(screen.getByText('Showing 1 pending issues')).toBeInTheDocument();
    expect(screen.getByText('Potential XSS vulnerability')).toBeInTheDocument();
    expect(screen.queryByText('Missing semicolon')).not.toBeInTheDocument();
  });

  it('filters issues by category', () => {
    render(<IssuesList {...defaultProps} categoryFilter="Security" />);
    
    expect(screen.getByText('Showing 1 pending issues')).toBeInTheDocument();
    expect(screen.getByText('Potential XSS vulnerability')).toBeInTheDocument();
    expect(screen.queryByText('Missing semicolon')).not.toBeInTheDocument();
  });

  it('filters issues by search query', () => {
    render(<IssuesList {...defaultProps} searchQuery="XSS" />);
    
    expect(screen.getByText('Showing 1 pending issues')).toBeInTheDocument();
    expect(screen.getByText('Potential XSS vulnerability')).toBeInTheDocument();
    expect(screen.queryByText('Missing semicolon')).not.toBeInTheDocument();
  });

  it('shows reviewed issues when showReviewed is true', () => {
    const reviewedIssues = new Set(['src/component.js:High:Potential XSS vulnerability']);
    
    render(
      <IssuesList 
        {...defaultProps} 
        showReviewed={true}
        reviewedIssues={reviewedIssues}
      />
    );
    
    expect(screen.getByText('Showing 1 done issues')).toBeInTheDocument();
    expect(screen.getByText('Potential XSS vulnerability')).toBeInTheDocument();
    expect(screen.queryByText('Missing semicolon')).not.toBeInTheDocument();
  });

  it('calls onMarkAsReviewed when mark done button is clicked', () => {
    render(<IssuesList {...defaultProps} />);
    
    const markDoneButtons = screen.getAllByText('Mark Done');
    fireEvent.click(markDoneButtons[0]);
    
    expect(defaultProps.onMarkAsReviewed).toHaveBeenCalledWith(mockIssues[0]);
  });

  it('navigates to file when file link is clicked', () => {
    render(<IssuesList {...defaultProps} />);
    
    const fileLink = screen.getByText('src/component.js:42');
    fireEvent.click(fileLink);
    
    expect(mockPostMessage).toHaveBeenCalledWith({
      command: 'navigateToFile',
      filePath: 'src/component.js',
      lineNumber: 42,
    });
  });

  it('displays issue severity with correct styling', () => {
    render(<IssuesList {...defaultProps} />);
    
    const highSeverityBadge = screen.getByText('🚨 High');
    const mediumSeverityBadge = screen.getByText('⚡ Medium');
    const lowSeverityBadge = screen.getByText('ℹ️ Low');
    
    expect(highSeverityBadge).toBeInTheDocument();
    expect(mediumSeverityBadge).toBeInTheDocument();
    expect(lowSeverityBadge).toBeInTheDocument();
  });

  it('displays issue categories with emojis', () => {
    render(<IssuesList {...defaultProps} />);
    
    expect(screen.getByText('🔒 Security')).toBeInTheDocument();
    expect(screen.getByText('🎨 Code Style')).toBeInTheDocument();
    expect(screen.getByText('🧪 Testing Gap')).toBeInTheDocument();
  });

  it('shows code context when available', () => {
    render(<IssuesList {...defaultProps} />);
    
    expect(screen.getByText('function processInput(input) {')).toBeInTheDocument();
    expect(screen.getByText('  return input;')).toBeInTheDocument();
    expect(screen.getByText('}')).toBeInTheDocument();
  });

  it('shows suggestion when available', () => {
    render(<IssuesList {...defaultProps} />);
    
    expect(screen.getByText('Suggestion:')).toBeInTheDocument();
    expect(screen.getByText('Sanitize user input')).toBeInTheDocument();
  });

  it('shows suggested code when available', () => {
    render(<IssuesList {...defaultProps} />);
    
    expect(screen.getByText('Suggested Implementation:')).toBeInTheDocument();
    expect(screen.getByText('const sanitized = sanitizeInput(userInput);')).toBeInTheDocument();
  });

  it('shows justification when available', () => {
    render(<IssuesList {...defaultProps} />);
    
    expect(screen.getByText('Why:')).toBeInTheDocument();
    expect(screen.getByText('User input should always be sanitized')).toBeInTheDocument();
  });

  it('shows no issues message when no issues match filters', () => {
    render(<IssuesList {...defaultProps} searchQuery="nonexistent" />);
    
    expect(screen.getByText('No Pending Issues')).toBeInTheDocument();
    expect(screen.getByText('No issues match the current filters.')).toBeInTheDocument();
  });

  it('shows keyboard shortcuts help', () => {
    render(<IssuesList {...defaultProps} />);
    
    expect(screen.getByText('Keyboard shortcuts:')).toBeInTheDocument();
    expect(screen.getByText('j')).toBeInTheDocument();
    expect(screen.getByText('k')).toBeInTheDocument();
    expect(screen.getByText('d')).toBeInTheDocument();
    expect(screen.getByText('f')).toBeInTheDocument();
  });

  it('copies issue to clipboard when copy button is clicked', async () => {
    // Mock clipboard API
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockResolvedValue(undefined),
      },
    });

    render(<IssuesList {...defaultProps} />);
    
    const copyButtons = screen.getAllByTestId('icon-copy');
    fireEvent.click(copyButtons[0]);
    
    expect(navigator.clipboard.writeText).toHaveBeenCalled();
  });

  it('handles keyboard navigation', () => {
    render(<IssuesList {...defaultProps} />);
    
    // Simulate keyboard events
    fireEvent.keyDown(window, { key: 'k' });
    fireEvent.keyDown(window, { key: 'j' });
    fireEvent.keyDown(window, { key: 'd' });
    fireEvent.keyDown(window, { key: 'f' });
    
    // Should handle keyboard events without errors
    expect(screen.getByText('Showing 3 pending issues')).toBeInTheDocument();
  });
});