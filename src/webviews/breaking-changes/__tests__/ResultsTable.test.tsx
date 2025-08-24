import React from 'react';
import { render, screen } from '@testing-library/react';
import { ResultsTable } from '../components/ResultsTable';
import { BreakingChange } from '../BreakingChangesApp';

describe('ResultsTable', () => {
  const mockBreakingChanges: BreakingChange[] = [
    {
      id: '1',
      severity: 'critical',
      changeType: 'method-signature',
      description: 'Method signature changed',
      recommendation: 'Update method calls',
      changeLocation: {
        filePath: 'src/api.ts',
        lineNumber: 10,
        codeSnippet: 'function test() {}',
      },
      affectedLocations: [],
    },
    {
      id: '2',
      severity: 'high',
      changeType: 'class-structure',
      description: 'Class structure modified',
      recommendation: 'Update class usage',
      changeLocation: {
        filePath: 'src/model.ts',
        lineNumber: 5,
        codeSnippet: 'class Model {}',
      },
      affectedLocations: [],
    },
  ];

  const mockOnOpenFile = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders breaking changes when provided', () => {
    render(<ResultsTable breakingChanges={mockBreakingChanges} onOpenFile={mockOnOpenFile} />);
    
    expect(screen.getByText('Method signature changed')).toBeInTheDocument();
    expect(screen.getByText('Class structure modified')).toBeInTheDocument();
  });

  it('renders no results message when no breaking changes', () => {
    render(<ResultsTable breakingChanges={[]} onOpenFile={mockOnOpenFile} />);
    
    expect(screen.getByText('No breaking changes found matching the current filters.')).toBeInTheDocument();
  });

  it('renders multiple breaking change items', () => {
    render(<ResultsTable breakingChanges={mockBreakingChanges} onOpenFile={mockOnOpenFile} />);
    
    // Should render both items
    expect(screen.getByText('critical')).toBeInTheDocument();
    expect(screen.getByText('high')).toBeInTheDocument();
    expect(screen.getByText('Method Signature')).toBeInTheDocument();
    expect(screen.getByText('Class Structure')).toBeInTheDocument();
  });

  it('passes onOpenFile callback to breaking change items', () => {
    render(<ResultsTable breakingChanges={mockBreakingChanges} onOpenFile={mockOnOpenFile} />);
    
    // The onOpenFile function should be passed to each BreakingChangeItem
    // We can verify this by checking that file locations are clickable
    expect(screen.getByText('src/api.ts:10')).toBeInTheDocument();
    expect(screen.getByText('src/model.ts:5')).toBeInTheDocument();
  });

  it('handles empty breaking changes array gracefully', () => {
    render(<ResultsTable breakingChanges={[]} onOpenFile={mockOnOpenFile} />);
    
    const noResultsElement = screen.getByText('No breaking changes found matching the current filters.');
    expect(noResultsElement).toHaveClass('no-results');
  });

  it('renders with proper container class', () => {
    const { container } = render(<ResultsTable breakingChanges={mockBreakingChanges} onOpenFile={mockOnOpenFile} />);
    
    const listContainer = container.querySelector('.breaking-changes-list');
    expect(listContainer).toBeInTheDocument();
  });
});