import React, { useMemo } from 'react';

interface ReviewResult {
  issues: Array<{ category: string }>;
}

interface FilterBarProps {
  searchQuery: string;
  severityFilter: string;
  categoryFilter: string;
  showReviewed: boolean;
  reviewResult: ReviewResult;
  onSearchChange: (query: string) => void;
  onSeverityFilterChange: (filter: string) => void;
  onCategoryFilterChange: (filter: string) => void;
  onShowReviewedChange: (show: boolean) => void;
}

export function FilterBar({
  searchQuery,
  severityFilter,
  categoryFilter,
  showReviewed,
  reviewResult,
  onSearchChange,
  onSeverityFilterChange,
  onCategoryFilterChange,
  onShowReviewedChange,
}: FilterBarProps) {
  // Extract all unique categories from issues
  const categories = useMemo(() => {
    if (!reviewResult?.issues) return [];

    const uniqueCategories = new Set<string>();
    reviewResult.issues.forEach((issue) => {
      if (issue.category) {
        uniqueCategories.add(issue.category);
      }
    });

    return ['All', ...Array.from(uniqueCategories)];
  }, [reviewResult]);

  return (
    <div className="filter-bar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search issues..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="filter-container">
        <div className="filter-group">
          <label htmlFor="severityFilter">Severity:</label>
          <select
            id="severityFilter"
            value={severityFilter}
            onChange={(e) => onSeverityFilterChange(e.target.value)}
            className="filter-select"
          >
            <option value="All">All Severities</option>
            <option value="Critical">Critical</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="categoryFilter">Category:</label>
          <select
            id="categoryFilter"
            value={categoryFilter}
            onChange={(e) => onCategoryFilterChange(e.target.value)}
            className="filter-select"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="statusFilter">Status:</label>
          <select
            id="statusFilter"
            value={showReviewed ? 'reviewed' : 'pending'}
            onChange={(e) => onShowReviewedChange(e.target.value === 'reviewed')}
            className="filter-select"
          >
            <option value="pending">Pending</option>
            <option value="reviewed">Done</option>
          </select>
        </div>
      </div>
    </div>
  );
}