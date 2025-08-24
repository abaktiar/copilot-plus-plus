import React, { useMemo } from 'react';
import { SeverityChart } from './SeverityChart';

interface ReviewStats {
  total: number;
  reviewed: number;
  pending: number;
  bySeverity: Record<string, number>;
  byCategory: Record<string, number>;
}

interface ReviewDashboardProps {
  stats: ReviewStats | null;
}

const categoryEmojis: Record<string, string> = {
  Security: '🔒',
  'Code Style': '🎨',
  Performance: '⚡',
  'Breaking Change': '💥',
  'Logical Error': '🐛',
  'Testing Gap': '🧪',
  Other: '📝',
};

export function ReviewDashboard({ stats }: ReviewDashboardProps) {
  if (!stats) return null;

  // Calculate percentages for the severity chart
  const severityPercentages = useMemo(() => {
    if (!stats.total) return [];

    return Object.entries(stats.bySeverity).map(([severity, count]) => ({
      severity,
      count,
      percentage: (count / stats.total) * 100,
    }));
  }, [stats]);

  return (
    <div className="dashboard">
      <div className="dashboard-section">
        <h3>Review Progress</h3>
        <div className="progress-stats">
          <div className="stat-item">
            <span className="stat-label">Total Issues</span>
            <span className="stat-value">{stats.total}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Reviewed</span>
            <span className="stat-value">{stats.reviewed}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Pending</span>
            <span className="stat-value">{stats.pending}</span>
          </div>
          <div className="progress-bar-container dashboard-progress">
            <div 
              className="progress-bar"
              style={{ 
                width: `${stats.total > 0 ? (stats.reviewed / stats.total) * 100 : 0}%` 
              }}
            />
          </div>
        </div>
      </div>

      <div className="dashboard-section">
        <h3>Issues by Severity</h3>
        <SeverityChart severityPercentages={severityPercentages} />
        <div className="severity-stats">
          {Object.entries(stats.bySeverity).map(([severity, count]) => (
            <div 
              key={severity}
              className={`stat-item severity-stat severity-${severity.toLowerCase()}`}
            >
              <span className="stat-label">
                <span className="severity-dot" />
                {severity}
              </span>
              <span className="stat-value">{count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="dashboard-section">
        <h3>Issues by Category</h3>
        <div className="category-stats">
          {Object.entries(stats.byCategory)
            .sort((a, b) => b[1] - a[1]) // Sort by count descending
            .map(([category, count]) => (
              <div key={category} className="stat-item category-stat">
                <span className="stat-label">
                  <span>{categoryEmojis[category] || categoryEmojis['Other']}</span>
                  {' '}
                  {category}
                </span>
                <span className="stat-value">{count}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}