import React from 'react';

interface FilterControlsProps {
  filterSeverity: string;
  filterChangeType: string;
  searchTerm: string;
  onFilterSeverityChange: (severity: string) => void;
  onFilterChangeTypeChange: (changeType: string) => void;
  onSearchTermChange: (searchTerm: string) => void;
  filteredCount: number;
}

export function FilterControls({
  filterSeverity,
  filterChangeType,
  searchTerm,
  onFilterSeverityChange,
  onFilterChangeTypeChange,
  onSearchTermChange,
  filteredCount
}: FilterControlsProps) {
  return (
    <div className="filters-section">
      <h3>Filters</h3>

      {/* Search row */}
      <div className="search-row">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
          placeholder="Search in descriptions, files, etc."
          className="dark-input"
        />
      </div>

      {/* Filter select inputs row */}
      <div className="filter-row">
        <div className="filter-column">
          <label>Severity:</label>
          <select
            value={filterSeverity}
            onChange={(e) => onFilterSeverityChange(e.target.value)}
            className="dark-select"
          >
            <option value="all">All Severities</option>
            <option value="critical">Critical</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="filter-column">
          <label>Change Type:</label>
          <select
            value={filterChangeType}
            onChange={(e) => onFilterChangeTypeChange(e.target.value)}
            className="dark-select"
          >
            <option value="all">All Types</option>
            <option value="method-signature">Method Signature</option>
            <option value="class-structure">Class Structure</option>
            <option value="enum-value">Enum Value</option>
            <option value="member-removal">Member Removal</option>
            <option value="behavior-change">Behavior Change</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      {/* Breaking changes count */}
      <div className="filter-actions">
        <h3>Breaking Changes ({filteredCount})</h3>
      </div>
    </div>
  );
}