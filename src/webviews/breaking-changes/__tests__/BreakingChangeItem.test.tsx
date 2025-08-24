import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BreakingChangeItem } from '../components/BreakingChangeItem';
import { BreakingChange } from '../BreakingChangesApp';

describe('BreakingChangeItem', () => {
  const mockChange: BreakingChange = {
    id: '1',
    severity: 'critical',
    changeType: 'method-signature',
    description: 'Method signature changed',
    recommendation: 'Update all method calls to use new signature',
    changeLocation: {
      filePath: 'src/api.ts',
      lineNumber: 10,
      codeSnippet: 'function oldMethod() {}',
    },
    affectedLocations: [
      {
        filePath: 'src/component.ts',
        lineNumber: 25,
        codeSnippet: 'oldMethod();',
      },
      {
        filePath: 'src/service.ts',
        lineNumber: 15,
        codeSnippet: 'this.oldMethod();',
      },
    ],
  };

  const mockOnOpenFile = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders breaking change header', () => {
    render(<BreakingChangeItem change={mockChange} onOpenFile={mockOnOpenFile} />);
    
    expect(screen.getByText('critical')).toBeInTheDocument();
    expect(screen.getByText('Method Signature')).toBeInTheDocument();
    expect(screen.getByText('Method signature changed')).toBeInTheDocument();
    expect(screen.getByText('src/api.ts:10')).toBeInTheDocument();
  });

  it('shows expand icon when collapsed', () => {
    render(<BreakingChangeItem change={mockChange} onOpenFile={mockOnOpenFile} />);
    expect(screen.getByText('▶')).toBeInTheDocument();
  });

  it('expands when header is clicked', () => {
    render(<BreakingChangeItem change={mockChange} onOpenFile={mockOnOpenFile} />);
    
    const header = screen.getByText('Method signature changed').closest('.breaking-change-header');
    fireEvent.click(header!);
    
    expect(screen.getByText('▼')).toBeInTheDocument();
    expect(screen.getByText('Recommendation')).toBeInTheDocument();
    expect(screen.getByText('Update all method calls to use new signature')).toBeInTheDocument();
  });

  it('shows affected locations when expanded', () => {
    render(<BreakingChangeItem change={mockChange} onOpenFile={mockOnOpenFile} />);
    
    const header = screen.getByText('Method signature changed').closest('.breaking-change-header');
    fireEvent.click(header!);
    
    expect(screen.getByText('Affected Locations (2)')).toBeInTheDocument();
    expect(screen.getByText('src/component.ts:25')).toBeInTheDocument();
    expect(screen.getByText('src/service.ts:15')).toBeInTheDocument();
    expect(screen.getByText('oldMethod();')).toBeInTheDocument();
    expect(screen.getByText('this.oldMethod();')).toBeInTheDocument();
  });

  it('calls onOpenFile when file location is clicked', () => {
    render(<BreakingChangeItem change={mockChange} onOpenFile={mockOnOpenFile} />);
    
    const fileLocation = screen.getByText('src/api.ts:10');
    fireEvent.click(fileLocation);
    
    expect(mockOnOpenFile).toHaveBeenCalledWith('src/api.ts', 10);
  });

  it('calls onOpenFile when affected location is clicked', () => {
    render(<BreakingChangeItem change={mockChange} onOpenFile={mockOnOpenFile} />);
    
    // Expand first
    const header = screen.getByText('Method signature changed').closest('.breaking-change-header');
    fireEvent.click(header!);
    
    // Click on affected location
    const affectedLocation = screen.getByText('src/component.ts:25');
    fireEvent.click(affectedLocation);
    
    expect(mockOnOpenFile).toHaveBeenCalledWith('src/component.ts', 25);
  });

  it('prevents event propagation when file location is clicked', () => {
    render(<BreakingChangeItem change={mockChange} onOpenFile={mockOnOpenFile} />);
    
    const fileLocation = screen.getByText('src/api.ts:10');
    const clickEvent = new MouseEvent('click', { bubbles: true });
    const stopPropagationSpy = jest.spyOn(clickEvent, 'stopPropagation');
    
    fireEvent(fileLocation, clickEvent);
    
    expect(stopPropagationSpy).toHaveBeenCalled();
  });

  it('applies correct severity class', () => {
    const { container } = render(<BreakingChangeItem change={mockChange} onOpenFile={mockOnOpenFile} />);
    
    const item = container.querySelector('.breaking-change-item');
    expect(item).toHaveClass('severity-critical');
  });

  it('handles change with no affected locations', () => {
    const changeWithNoAffected = {
      ...mockChange,
      affectedLocations: [],
    };
    
    render(<BreakingChangeItem change={changeWithNoAffected} onOpenFile={mockOnOpenFile} />);
    
    // Expand
    const header = screen.getByText('Method signature changed').closest('.breaking-change-header');
    fireEvent.click(header!);
    
    expect(screen.getByText('Affected Locations (0)')).toBeInTheDocument();
    expect(screen.getByText('No affected locations found.')).toBeInTheDocument();
  });

  it('formats different change types correctly', () => {
    const changeTypes = [
      { type: 'class-structure', expected: 'Class Structure' },
      { type: 'enum-value', expected: 'Enum Value' },
      { type: 'member-removal', expected: 'Member Removal' },
      { type: 'behavior-change', expected: 'Behavior Change' },
      { type: 'other', expected: 'Other' },
    ];
    
    changeTypes.forEach(({ type, expected }) => {
      const changeWithType = {
        ...mockChange,
        changeType: type as any,
      };
      
      const { unmount } = render(<BreakingChangeItem change={changeWithType} onOpenFile={mockOnOpenFile} />);
      expect(screen.getByText(expected)).toBeInTheDocument();
      unmount();
    });
  });
});