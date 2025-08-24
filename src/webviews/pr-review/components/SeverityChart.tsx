import React from 'react';

interface SeverityPercentage {
  severity: string;
  count: number;
  percentage: number;
}

interface SeverityChartProps {
  severityPercentages: SeverityPercentage[];
}

export function SeverityChart({ severityPercentages }: SeverityChartProps) {
  if (severityPercentages.length === 0) {
    return (
      <div className="severity-chart">
        <div className="no-data">No issues to display</div>
      </div>
    );
  }

  return (
    <div className="severity-chart">
      <div className="stacked-bar">
        {severityPercentages.map(({ severity, percentage }) => (
          <div
            key={severity}
            className={`severity-bar severity-${severity.toLowerCase()}`}
            style={{ width: `${percentage}%` }}
            title={`${severity}: ${Math.round(percentage)}%`}
          />
        ))}
      </div>
    </div>
  );
}