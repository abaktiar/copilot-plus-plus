import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { FilterControls } from '../components/FilterControls';

describe('FilterControls', () => {
  const defaultProps = {
    filterSeverity: 'all',
    filterChangeType: 'all',
    searchTerm: '',
    onFilterSeverityChange: jest.fn(),
    onFilterChangeTypeChange: jest.fn(),
    onSearchTermChange: jest.fn(),
    filteredCount: 5,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders filter controls', () => {
    render(<FilterControls {...defaultProps} />);
    
    expect(screen.getByText('Filters')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search in descriptions, files, etc.')).toBeInTheDocument();
    expect(screen.getByText('Severity:')).toBeInTheDocument();
    expect(screen.getByText('Change Type:')).toBeInTheDocument();
  });

  it('displays filtered count', () => {
    render(<FilterControls {...defaultProps} />);
    expect(screen.getByText('Breaking Changes (5)')).toBeInTheDocument();
  });

  it('calls onSearchTermChange when search input changes', () => {
    render(<FilterControls {...defaultProps} />);
    
    const searchInput = screen.getByPlaceholderText('Search in descriptions, files, etc.');
    fireEvent.change(searchInput, { target: { value: 'test search' } });
    
    expect(defaultProps.onSearchTermChange).toHaveBeenCalledWith('test search');
  });

  it('calls onFilterSeverityChange when severity filter changes', () => {
    render(<FilterControls {...defaultProps} />);
    
    const severitySelect = screen.getByDisplayValue('All Severities');
    fireEvent.change(severitySelect, { target: { value: 'critical' } });
    
    expect(defaultProps.onFilterSeverityChange).toHaveBeenCalledWith('critical');
  });

  it('calls onFilterChangeTypeChange when change type filter changes', () => {
    render(<FilterControls {...defaultProps} />);
    
    const changeTypeSelect = screen.getByDisplayValue('All Types');
    fireEvent.change(changeTypeSelect, { target: { value: 'method-signature' } });
    
    expect(defaultProps.onFilterChangeTypeChange).toHaveBeenCalledWith('method-signature');
  });

  it('displays current filter values', () => {
    const props = {
      ...defaultProps,
      filterSeverity: 'critical',
      filterChangeType: 'method-signature',
      searchTerm: 'test',
    };
    
    render(<FilterControls {...props} />);
    
    expect(screen.getByDisplayValue('Critical')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Method Signature')).toBeInTheDocument();
    expect(screen.getByDisplayValue('test')).toBeInTheDocument();
  });

  it('shows all severity options', () => {
    render(<FilterControls {...defaultProps} />);
    
    const severitySelect = screen.getByDisplayValue('All Severities');
    expect(severitySelect).toBeInTheDocument();
    
    // Check that options exist
    expect(screen.getByText('All Severities')).toBeInTheDocument();
    expect(screen.getByText('Critical')).toBeInTheDocument();
    expect(screen.getByText('High')).toBeInTheDocument();
    expect(screen.getByText('Medium')).toBeInTheDocument();
    expect(screen.getByText('Low')).toBeInTheDocument();
  });

  it('shows all change type options', () => {
    render(<FilterControls {...defaultProps} />);
    
    const changeTypeSelect = screen.getByDisplayValue('All Types');
    expect(changeTypeSelect).toBeInTheDocument();
    
    // Check that options exist
    expect(screen.getByText('All Types')).toBeInTheDocument();
    expect(screen.getByText('Method Signature')).toBeInTheDocument();
    expect(screen.getByText('Class Structure')).toBeInTheDocument();
    expect(screen.getByText('Enum Value')).toBeInTheDocument();
    expect(screen.getByText('Member Removal')).toBeInTheDocument();
    expect(screen.getByText('Behavior Change')).toBeInTheDocument();
    expect(screen.getByText('Other')).toBeInTheDocument();
  });
});