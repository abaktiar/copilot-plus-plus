import React, { useState } from 'react';
import { BreakingChange } from '../BreakingChangesApp';

interface BreakingChangeItemProps {
  change: BreakingChange;
  onOpenFile: (filePath: string, lineNumber: number) => void;
}

// Helper function to format change type for display
function formatChangeType(changeType: string): string {
  switch (changeType) {
    case 'method-signature':
      return 'Method Signature';
    case 'class-structure':
      return 'Class Structure';
    case 'enum-value':
      return 'Enum Value';
    case 'member-removal':
      return 'Member Removal';
    case 'behavior-change':
      return 'Behavior Change';
    case 'other':
      return 'Other';
    default:
      return changeType;
  }
}

export function BreakingChangeItem({ change, onOpenFile }: BreakingChangeItemProps) {
  const [expanded, setExpanded] = useState(false);

  // Get severity class
  const severityClass = `severity-${change.severity}`;

  const handleFileClick = (event: React.MouseEvent, filePath: string, lineNumber: number) => {
    event.stopPropagation();
    onOpenFile(filePath, lineNumber);
  };

  return (
    <div className={`breaking-change-item ${severityClass}`}>
      {/* Header (always visible) */}
      <div className="breaking-change-header" onClick={() => setExpanded(!expanded)}>
        <div className="breaking-change-title">
          <span className={`severity-badge ${severityClass}`}>{change.severity}</span>
          <span className="change-type-badge">{formatChangeType(change.changeType)}</span>
          <span className="breaking-change-description">{change.description}</span>
        </div>
        <div className="breaking-change-location">
          <span
            className="file-location"
            onClick={(event) => handleFileClick(event, change.changeLocation.filePath, change.changeLocation.lineNumber)}
            title="Click to open file"
          >
            {`${change.changeLocation.filePath}:${change.changeLocation.lineNumber}`}
          </span>
          <span className="expand-icon">{expanded ? '▼' : '▶'}</span>
        </div>
      </div>

      {/* Details (visible when expanded) */}
      {expanded && (
        <div className="breaking-change-details">
          {/* Recommendation */}
          <div className="recommendation">
            <h4>Recommendation</h4>
            <p>{change.recommendation}</p>
          </div>

          {/* Affected locations */}
          <div className="affected-locations">
            <h4>Affected Locations ({change.affectedLocations.length})</h4>
            {change.affectedLocations.length === 0 ? (
              <p>No affected locations found.</p>
            ) : (
              <ul className="locations-list">
                {change.affectedLocations.map((location, index) => (
                  <li key={index} className="location-item">
                    <div className="location-header">
                      <span
                        className="file-location"
                        onClick={() => onOpenFile(location.filePath, location.lineNumber)}
                        title="Click to open file"
                      >
                        {`${location.filePath}:${location.lineNumber}`}
                      </span>
                    </div>
                    <div className="code-snippet">
                      <pre>{location.codeSnippet}</pre>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}