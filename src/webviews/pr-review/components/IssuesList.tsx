import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useVSCodeAPI } from '../../shared/hooks/useVSCodeAPI';
import { Button, Icon } from '../../shared/components';

interface ReviewIssue {
  filePath: string;
  lineNumber?: number;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  category: string;
  description: string;
  suggestion?: string;
  suggestedCode?: string;
  justification?: string;
  lineContext?: {
    linesBefore?: string[];
    codeSnippet: string;
    linesAfter?: string[];
  };
}

interface IssuesListProps {
  issues: ReviewIssue[];
  searchQuery: string;
  severityFilter: string;
  categoryFilter: string;
  showReviewed: boolean;
  reviewedIssues: Set<string>;
  onMarkAsReviewed: (issue: ReviewIssue) => void;
}

interface IssueItemProps {
  issue: ReviewIssue;
  isReviewed: boolean;
  isFocused: boolean;
  onMarkAsReviewed: () => void;
  onNavigateToFile: () => void;
}

const severityEmojis: Record<string, string> = {
  Critical: '🚨',
  High: '⚠️',
  Medium: '⚡',
  Low: 'ℹ️',
};

const categoryEmojis: Record<string, string> = {
  Security: '🔒',
  'Code Style': '🎨',
  Performance: '⚡',
  'Breaking Change': '💥',
  'Logical Error': '🐛',
  'Testing Gap': '🧪',
  Other: '📝',
};

function IssueItem({ 
  issue, 
  isReviewed, 
  isFocused, 
  onMarkAsReviewed, 
  onNavigateToFile 
}: IssueItemProps) {
  const [isCopied, setIsCopied] = useState(false);

  const formatIssueAsMarkdown = (issue: ReviewIssue) => {
    const severityEmoji = severityEmojis[issue.severity] || '📝';
    const categoryEmoji = categoryEmojis[issue.category] || categoryEmojis['Other'];

    let markdown = `### ${severityEmoji} ${issue.severity} Severity: ${categoryEmoji} ${issue.category}\n\n`;
    markdown += `**Location**: \`${issue.filePath}:${issue.lineNumber || '?'}\`\n\n`;
    markdown += `**Description**:\n${issue.description}\n\n`;

    // Add code context if available
    if (issue.lineContext) {
      markdown += '**Current Code**:\n```\n';
      if (issue.lineContext.linesBefore) {
        markdown += issue.lineContext.linesBefore.join('\n') + '\n';
      }
      markdown += issue.lineContext.codeSnippet + '\n';
      if (issue.lineContext.linesAfter) {
        markdown += issue.lineContext.linesAfter.join('\n');
      }
      markdown += '\n```\n\n';
    }

    if (issue.suggestion) {
      markdown += `**Suggestion**:\n${issue.suggestion}\n\n`;
    }

    if (issue.suggestedCode) {
      markdown += '**Suggested Implementation**:\n```\n';
      markdown += issue.suggestedCode + '\n';
      markdown += '```\n\n';
    }

    if (issue.justification) {
      markdown += `**Why**: ${issue.justification}\n\n`;
    }

    return markdown;
  };

  const handleCopyIssue = async () => {
    try {
      const markdown = formatIssueAsMarkdown(issue);
      await navigator.clipboard.writeText(markdown);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  return (
    <div className={`issue ${isReviewed ? 'issue-reviewed' : ''} ${isFocused ? 'issue-focused' : ''}`}>
      <div className="issue-header">
        <div className="issue-header-left">
          <span className={`issue-severity issue-severity-${issue.severity.toLowerCase()}`}>
            {severityEmojis[issue.severity]} {issue.severity}
          </span>
          <span className="issue-category">
            {categoryEmojis[issue.category] || categoryEmojis['Other']} {issue.category}
          </span>
        </div>
        
        <div className="issue-actions">
          <Button
            variant="secondary"
            size="small"
            onClick={handleCopyIssue}
            className="copy-issue-button"
          >
            <Icon name={isCopied ? 'check' : 'copy'} size={14} />
            {isCopied ? 'Copied!' : 'Copy'}
          </Button>
          
          <Button
            variant="secondary"
            size="small"
            onClick={onMarkAsReviewed}
            className={`review-button ${isReviewed ? 'reviewed' : ''}`}
          >
            <Icon name={isReviewed ? 'check' : 'circle'} size={14} />
            {isReviewed ? 'Done' : 'Mark Done'}
          </Button>
        </div>
      </div>

      <div className="issue-description">
        {issue.description}
      </div>

      <div 
        className="issue-file-link"
        onClick={onNavigateToFile}
        role="button"
        tabIndex={0}
      >
        <Icon name="file" size={14} />
        {issue.filePath}:{issue.lineNumber || '?'}
      </div>

      {issue.lineContext && (
        <div className="code-snippet">
          <pre>
            {issue.lineContext.linesBefore?.join('\n')}
            {issue.lineContext.linesBefore && '\n'}
            {issue.lineContext.codeSnippet}
            {issue.lineContext.linesAfter && '\n'}
            {issue.lineContext.linesAfter?.join('\n')}
          </pre>
        </div>
      )}

      {issue.suggestion && (
        <div className="issue-suggestion">
          <strong>Suggestion:</strong> {issue.suggestion}
        </div>
      )}

      {issue.suggestedCode && (
        <div className="suggested-code-container">
          <div className="suggestion-header">
            <strong>Suggested Implementation:</strong>
          </div>
          <pre className="suggested-code">{issue.suggestedCode}</pre>
        </div>
      )}

      {issue.justification && (
        <div className="issue-justification">
          <strong>Why:</strong> {issue.justification}
        </div>
      )}
    </div>
  );
}

export function IssuesList({
  issues,
  searchQuery,
  severityFilter,
  categoryFilter,
  showReviewed,
  reviewedIssues,
  onMarkAsReviewed,
}: IssuesListProps) {
  const { postMessage } = useVSCodeAPI();
  const [focusedIssueIndex, setFocusedIssueIndex] = useState(-1);

  // Filter issues based on search query and filters
  const filteredIssues = useMemo(() => {
    return issues.filter((issue) => {
      // Check if the issue is reviewed or pending based on the toggle
      const issueId = `${issue.filePath}:${issue.severity}:${issue.description}`;
      const isReviewed = reviewedIssues.has(issueId);

      if (showReviewed !== isReviewed) {
        return false;
      }

      // Apply severity filter
      if (severityFilter !== 'All' && issue.severity !== severityFilter) {
        return false;
      }

      // Apply category filter
      if (categoryFilter !== 'All' && issue.category !== categoryFilter) {
        return false;
      }

      // Apply search query
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        return (
          (issue.description && issue.description.toLowerCase().includes(searchLower)) ||
          (issue.filePath && issue.filePath.toLowerCase().includes(searchLower)) ||
          (issue.suggestion && issue.suggestion.toLowerCase().includes(searchLower)) ||
          (issue.category && issue.category.toLowerCase().includes(searchLower))
        );
      }

      return true;
    });
  }, [issues, searchQuery, severityFilter, categoryFilter, reviewedIssues, showReviewed]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle keyboard shortcuts when issues are visible
      if (filteredIssues.length === 0) return;

      switch (e.key) {
        case 'k': // Next issue
          setFocusedIssueIndex((prev) => 
            prev < filteredIssues.length - 1 ? prev + 1 : prev
          );
          break;
        case 'j': // Previous issue
          setFocusedIssueIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case 'd': // Mark/unmark as done
          if (focusedIssueIndex >= 0 && focusedIssueIndex < filteredIssues.length) {
            onMarkAsReviewed(filteredIssues[focusedIssueIndex]);
          }
          break;
        case 'f': // Navigate to file
          if (focusedIssueIndex >= 0 && focusedIssueIndex < filteredIssues.length) {
            const issue = filteredIssues[focusedIssueIndex];
            postMessage({
              command: 'navigateToFile',
              filePath: issue.filePath,
              lineNumber: issue.lineNumber,
            });
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredIssues, focusedIssueIndex, onMarkAsReviewed, postMessage]);

  // Reset focused issue when filtered issues change
  useEffect(() => {
    setFocusedIssueIndex(filteredIssues.length > 0 ? 0 : -1);
  }, [filteredIssues.length]);

  const handleNavigateToFile = useCallback((issue: ReviewIssue) => {
    postMessage({
      command: 'navigateToFile',
      filePath: issue.filePath,
      lineNumber: issue.lineNumber,
    });
  }, [postMessage]);

  if (filteredIssues.length === 0) {
    return (
      <div className="no-issues">
        <h3>{showReviewed ? 'No Done Issues' : 'No Pending Issues'}</h3>
        <p>
          {showReviewed
            ? "You haven't marked any issues as done yet."
            : searchQuery || severityFilter !== 'All' || categoryFilter !== 'All'
            ? 'No issues match the current filters.'
            : 'Great job! The code review found no significant issues.'}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="filtered-count">
        <span>Showing {filteredIssues.length} {showReviewed ? 'done' : 'pending'} issues</span>
        {filteredIssues.length > 0 && (
          <div className="keyboard-shortcuts">
            <span>Keyboard shortcuts: </span>
            <kbd>j</kbd>
            <span> previous, </span>
            <kbd>k</kbd>
            <span> next, </span>
            <kbd>d</kbd>
            <span> mark as done, </span>
            <kbd>f</kbd>
            <span> go to file</span>
          </div>
        )}
      </div>

      <div className="issues-container">
        {filteredIssues.map((issue, index) => {
          const issueId = `${issue.filePath}:${issue.severity}:${issue.description}`;
          const isReviewed = reviewedIssues.has(issueId);
          const isFocused = index === focusedIssueIndex;

          return (
            <IssueItem
              key={issueId}
              issue={issue}
              isReviewed={isReviewed}
              isFocused={isFocused}
              onMarkAsReviewed={() => onMarkAsReviewed(issue)}
              onNavigateToFile={() => handleNavigateToFile(issue)}
            />
          );
        })}
      </div>
    </div>
  );
}