import React from 'react';
import { render, screen } from '@testing-library/react';
import { ReviewDashboard } from '../components/ReviewDashboard';

// Mock the SeverityChart component
jest.mock('../components/SeverityChart', () => ({
  SeverityChart: ({ severityPercentages }: any) => (
    <div data-testid="severity-chart">
      {severityPercentages.map((item: any) => (
        <div key={item.severity}>
          {item.severity}: {item.percentage}%
        </div>
      ))}
    </div>
  ),
}));

describe('ReviewDashboard', () => {
  const mockStats = {
    total: 10,
    reviewed: 3,
    pending: 7,
    bySeverity: {
      Critical: 2,
      High: 3,
      Medium: 4,
      Low: 1,
    },
    byCategory: {
      Security: 3,
      'Code Style': 4,
      Performance: 2,
      'Testing Gap': 1,
    },
  };

  it('renders null when no stats provided', () => {
    const { container } = render(<ReviewDashboard stats={null} />);
    expect(container.firstChild).toBeNull();
  });

  it('displays review progress statistics', () => {
    render(<ReviewDashboard stats={mockStats} />);
    
    expect(screen.getByText('Review Progress')).toBeInTheDocument();
    expect(screen.getByText('Total Issues')).toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
    expect(screen.getByText('Reviewed')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('Pending')).toBeInTheDocument();
    expect(screen.getByText('7')).toBeInTheDocument();
  });

  it('displays progress bar with correct percentage', () => {
    render(<ReviewDashboard stats={mockStats} />);
    
    const progressBar = document.querySelector('.progress-bar');
    expect(progressBar).toHaveStyle('width: 30%'); // 3/10 * 100 = 30%
  });

  it('displays severity statistics', () => {
    render(<ReviewDashboard stats={mockStats} />);
    
    expect(screen.getByText('Issues by Severity')).toBeInTheDocument();
    expect(screen.getByText('Critical')).toBeInTheDocument();
    expect(screen.getByText('High')).toBeInTheDocument();
    expect(screen.getByText('Medium')).toBeInTheDocument();
    expect(screen.getByText('Low')).toBeInTheDocument();
    
    // Check severity counts
    const criticalStat = screen.getByText('Critical').closest('.stat-item');
    expect(criticalStat).toHaveTextContent('2');
    
    const highStat = screen.getByText('High').closest('.stat-item');
    expect(highStat).toHaveTextContent('3');
  });

  it('displays category statistics sorted by count', () => {
    render(<ReviewDashboard stats={mockStats} />);
    
    expect(screen.getByText('Issues by Category')).toBeInTheDocument();
    
    // Categories should be sorted by count (descending)
    const categoryStats = screen.getAllByText(/🎨|🔒|⚡|🧪/);
    
    // Code Style (4) should come first, then Security (3), etc.
    expect(screen.getByText('🎨 Code Style')).toBeInTheDocument();
    expect(screen.getByText('🔒 Security')).toBeInTheDocument();
    expect(screen.getByText('⚡ Performance')).toBeInTheDocument();
    expect(screen.getByText('🧪 Testing Gap')).toBeInTheDocument();
  });

  it('renders severity chart with correct percentages', () => {
    render(<ReviewDashboard stats={mockStats} />);
    
    const severityChart = screen.getByTestId('severity-chart');
    expect(severityChart).toBeInTheDocument();
    
    // Check that percentages are calculated correctly
    expect(severityChart).toHaveTextContent('Critical: 20%'); // 2/10 * 100
    expect(severityChart).toHaveTextContent('High: 30%'); // 3/10 * 100
    expect(severityChart).toHaveTextContent('Medium: 40%'); // 4/10 * 100
    expect(severityChart).toHaveTextContent('Low: 10%'); // 1/10 * 100
  });

  it('handles zero total issues correctly', () => {
    const emptyStats = {
      total: 0,
      reviewed: 0,
      pending: 0,
      bySeverity: {
        Critical: 0,
        High: 0,
        Medium: 0,
        Low: 0,
      },
      byCategory: {},
    };

    render(<ReviewDashboard stats={emptyStats} />);
    
    expect(screen.getByText('0')).toBeInTheDocument();
    
    const progressBar = document.querySelector('.progress-bar');
    expect(progressBar).toHaveStyle('width: 0%');
  });

  it('displays category emojis correctly', () => {
    render(<ReviewDashboard stats={mockStats} />);
    
    expect(screen.getByText('🔒 Security')).toBeInTheDocument();
    expect(screen.getByText('🎨 Code Style')).toBeInTheDocument();
    expect(screen.getByText('⚡ Performance')).toBeInTheDocument();
    expect(screen.getByText('🧪 Testing Gap')).toBeInTheDocument();
  });

  it('handles unknown categories with default emoji', () => {
    const statsWithUnknownCategory = {
      ...mockStats,
      byCategory: {
        ...mockStats.byCategory,
        'Unknown Category': 2,
      },
    };

    render(<ReviewDashboard stats={statsWithUnknownCategory} />);
    
    expect(screen.getByText('📝 Unknown Category')).toBeInTheDocument();
  });

  it('applies correct CSS classes for severity dots', () => {
    render(<ReviewDashboard stats={mockStats} />);
    
    const criticalStat = screen.getByText('Critical').closest('.severity-stat');
    expect(criticalStat).toHaveClass('severity-critical');
    
    const highStat = screen.getByText('High').closest('.severity-stat');
    expect(highStat).toHaveClass('severity-high');
    
    const mediumStat = screen.getByText('Medium').closest('.severity-stat');
    expect(mediumStat).toHaveClass('severity-medium');
    
    const lowStat = screen.getByText('Low').closest('.severity-stat');
    expect(lowStat).toHaveClass('severity-low');
  });
});