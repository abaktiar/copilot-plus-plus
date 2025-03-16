(function () {
  const vscode = acquireVsCodeApi();
  const e = React.createElement;

  // Icon components for better UI
  const Icons = {
    Copy: () =>
      e(
        'div',
        { className: 'icon-container' },
        e(
          'svg',
          {
            viewBox: '0 0 16 16',
            fill: 'currentColor',
          },
          e('path', {
            fillRule: 'evenodd',
            d: 'M4 2h8l2 2v10H6V2H4zm2 0v11h7V4.5L11.5 3H6z',
          })
        )
      ),
    File: () =>
      e(
        'div',
        { className: 'icon-container' },
        e(
          'svg',
          {
            viewBox: '0 0 16 16',
            fill: 'currentColor',
          },
          e('path', {
            fillRule: 'evenodd',
            d: 'M3 2h10l1 1v10l-1 1H3l-1-1V3l1-1zm0 1v10h10V3H3z',
          })
        )
      ),
    Check: () =>
      e(
        'div',
        { className: 'icon-container' },
        e(
          'svg',
          {
            viewBox: '0 0 16 16',
            fill: 'currentColor',
          },
          e('path', {
            fillRule: 'evenodd',
            d: 'M14.431 3.323l-8.47 8.47L1.323 7.16l1.246-1.247 3.392 3.392 7.216-7.215 1.254 1.233z',
          })
        )
      ),
    Branch: () =>
      e(
        'div',
        { className: 'icon-container' },
        e(
          'svg',
          {
            viewBox: '0 0 16 16',
            fill: 'currentColor',
          },
          e('path', {
            fillRule: 'evenodd',
            d: 'M10.5 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1v3c0 2 1.34 3.657 3.962 4.138C7.972 11.044 8 11 8 11h1V7.138C6.34 6.657 5 3 5 3H4zm6.5 0v3c0 2-1.34 3.657-3.962 4.138C6.528 11.044 6.5 11 6.5 11H5.5V7.138C7.16 6.657 8.5 3 8.5 3h2z',
          })
        )
      ),
  };

  function formatIssueAsMarkdown(issue) {
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
  }

  function formatReviewAsMarkdown(result) {
    let markdown = '## Code Review Summary\n\n';

    // Add overall assessment
    markdown += '### Overall Assessment\n';
    markdown += result.summary.assessment + '\n\n';

    // Add strengths
    if (result.summary.strengths && result.summary.strengths.length > 0) {
      markdown += '### Key Strengths ✨\n';
      result.summary.strengths.forEach((strength) => {
        markdown += `* ${strength}\n`;
      });
      markdown += '\n';
    }

    // Add critical issues if any
    if (result.summary.criticalIssues && result.summary.criticalIssues.length > 0) {
      markdown += '### Critical Issues to Address 🚨\n';
      result.summary.criticalIssues.forEach((issue) => {
        markdown += `* ${issue}\n`;
      });
      markdown += '\n';
    }

    // Add recommendations
    if (result.summary.recommendations && result.summary.recommendations.length > 0) {
      markdown += '### Recommendations 💡\n';
      result.summary.recommendations.forEach((rec) => {
        markdown += `* ${rec}\n`;
      });
      markdown += '\n';
    }

    // Add detailed issues
    if (result.issues && result.issues.length > 0) {
      markdown += '## Detailed Issues\n\n';

      // Group issues by severity
      const severityOrder = ['Critical', 'High', 'Medium', 'Low'];
      const issuesBySeverity = {};
      severityOrder.forEach((severity) => {
        issuesBySeverity[severity] = result.issues.filter(
          (issue) => issue.severity.toLowerCase() === severity.toLowerCase()
        );
      });

      // Add issues grouped by severity
      severityOrder.forEach((severity) => {
        const issues = issuesBySeverity[severity];
        if (issues && issues.length > 0) {
          const severityEmoji = severityEmojis[severity] || '📝';
          markdown += `### ${severity} Severity Issues ${severityEmoji}\n\n`;
          issues.forEach((issue) => {
            markdown += formatIssueAsMarkdown(issue);
            markdown += '---\n\n';
          });
        }
      });
    }

    return markdown;
  }

  // Add a new ProgressIndicator component
  function ProgressIndicator({ progress }) {
    if (!progress) return null;

    const { completed, total, currentFile } = progress;
    const percent = Math.floor((completed / total) * 100);

    return e(
      'div',
      { className: 'progress-container' },
      e(
        'div',
        { className: 'progress-header' },
        e('span', {}, `Processing ${completed} of ${total} file groups (${percent}%)`)
      ),
      e(
        'div',
        { className: 'progress-bar-container' },
        e('div', {
          className: 'progress-bar',
          style: { width: `${percent}%` },
        })
      ),
      currentFile &&
        e('div', { className: 'progress-current-file' }, e('span', {}, `Currently processing: ${currentFile}`))
    );
  }

  function App() {
    const [branches, setBranches] = React.useState([]);
    const [currentBranch, setCurrentBranch] = React.useState('');
    const [sourceBranch, setSourceBranch] = React.useState('');
    const [targetBranch, setTargetBranch] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const [reviewResult, setReviewResult] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [selectedModel, setSelectedModel] = React.useState('');
    const [progress, setProgress] = React.useState(null);
    const [isSummaryCollapsed, setIsSummaryCollapsed] = React.useState(false);
    const [isCopied, setIsCopied] = React.useState(false);

    // New state for filtering and tracking
    const [searchQuery, setSearchQuery] = React.useState('');
    const [severityFilter, setSeverityFilter] = React.useState('All');
    const [categoryFilter, setCategoryFilter] = React.useState('All');
    const [reviewedIssues, setReviewedIssues] = React.useState(new Set());
    const [showReviewed, setShowReviewed] = React.useState(false);
    const [currentReviewKey, setCurrentReviewKey] = React.useState('');

    // Get models from shared config
    const models = window.sharedModelConfig?.models || [];

    // Load saved reviewed issues from storage when review is complete
    React.useEffect(() => {
      if (currentReviewKey && reviewResult) {
        try {
          // Try to load saved reviewed issues from storage
          const savedState = vscode.getState() || {};
          const savedReviewed = savedState[currentReviewKey] || [];

          if (savedReviewed.length > 0) {
            setReviewedIssues(new Set(savedReviewed));
          }
        } catch (e) {
          console.error('Failed to load saved review state:', e);
        }
      }
    }, [currentReviewKey, reviewResult]);

    React.useEffect(() => {
      // Request branches when component mounts
      vscode.postMessage({ command: 'getBranches' });

      // Listen for messages from the extension
      const messageHandler = (event) => {
        const message = event.data;
        switch (message.command) {
          case 'branchesList':
            setBranches(message.branches);
            setCurrentBranch(message.currentBranch);
            setSourceBranch(message.currentBranch);
            if (message.languageModel) {
              setSelectedModel(message.languageModel);
            }

            // First check for defaultTargetBranch from config
            if (message.defaultTargetBranch && message.branches.includes(message.defaultTargetBranch)) {
              setTargetBranch(message.defaultTargetBranch);
            } else {
              // Fall back to main/master if available, or first branch that's not the source
              setTargetBranch(
                message.branches.find((b) => b === 'main' || b === 'master') ||
                  message.branches.find((b) => b !== message.currentBranch) ||
                  message.branches[0]
              );
            }
            break;

          case 'startLoading':
            setIsLoading(true);
            setError(null);
            setProgress(null);
            // Reset filters and reviewed issues when starting a new review
            setSearchQuery('');
            setSeverityFilter('All');
            setCategoryFilter('All');
            setReviewedIssues(new Set());
            setShowReviewed(false);
            setCurrentReviewKey('');
            break;

          case 'progressUpdate':
            setProgress(message.update);
            break;

          case 'reviewComplete':
            setIsLoading(false);
            setReviewResult(message.result);
            setError(null);
            setProgress(null);

            // Set the review key for persistence
            if (message.reviewKey) {
              setCurrentReviewKey(message.reviewKey);
            }
            break;

          case 'error':
            setIsLoading(false);
            setError(message.message);
            setReviewResult(null);
            setProgress(null);
            break;
        }
      };

      window.addEventListener('message', messageHandler);
      return () => window.removeEventListener('message', messageHandler);
    }, []);

    const handleReview = () => {
      if (sourceBranch === targetBranch) {
        setError('Source and target branches must be different');
        return;
      }

      setReviewResult(null);
      setError(null);
      vscode.postMessage({
        command: 'reviewPr',
        sourceBranch,
        targetBranch,
        modelFamily: selectedModel,
      });
    };

    // Handle marking an issue as reviewed
    const handleMarkAsReviewed = (issue) => {
      const issueId = `${issue.filePath}:${issue.severity}:${issue.description}`;
      const newReviewedIssues = new Set(reviewedIssues);

      if (newReviewedIssues.has(issueId)) {
        newReviewedIssues.delete(issueId);
      } else {
        newReviewedIssues.add(issueId);
      }

      setReviewedIssues(newReviewedIssues);

      // Save to storage if we have a review key
      if (currentReviewKey) {
        try {
          const savedState = vscode.getState() || {};
          savedState[currentReviewKey] = Array.from(newReviewedIssues);
          vscode.setState(savedState);
        } catch (e) {
          console.error('Failed to save review state:', e);
        }
      }
    };

    // Calculate issue statistics for the dashboard
    const calculateStats = () => {
      if (!reviewResult || !reviewResult.issues) return null;

      const stats = {
        total: reviewResult.issues.length,
        reviewed: reviewedIssues.size,
        pending: reviewResult.issues.length - reviewedIssues.size,
        bySeverity: {
          Critical: 0,
          High: 0,
          Medium: 0,
          Low: 0,
        },
        byCategory: {},
      };

      reviewResult.issues.forEach((issue) => {
        // Count by severity
        if (stats.bySeverity.hasOwnProperty(issue.severity)) {
          stats.bySeverity[issue.severity]++;
        }

        // Count by category
        if (!stats.byCategory[issue.category]) {
          stats.byCategory[issue.category] = 0;
        }
        stats.byCategory[issue.category]++;
      });

      return stats;
    };

    const handleCopyMarkdown = (event) => {
      const markdown = formatReviewAsMarkdown(reviewResult);
      navigator.clipboard.writeText(markdown);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    };

    return e(
      'div',
      { className: 'container' },
      e(
        'div',
        { className: 'form-container' },
        e(
          'div',
          { className: 'header-row' },
          e('h2', {}, 'PR Review Assistant'),
          e(
            'div',
            { className: 'model-selector' },
            e('label', { htmlFor: 'modelSelect' }, 'Model:'),
            e(
              'select',
              {
                id: 'modelSelect',
                value: selectedModel,
                onChange: (e) => setSelectedModel(e.target.value),
              },
              models.map((model) => e('option', { key: model.id, value: model.id }, model.name))
            )
          )
        ),
        e(
          'div',
          { className: 'branches-row' },
          e(
            'div',
            { className: 'branch-selector' },
            e('label', { htmlFor: 'sourceBranch' }, 'Source Branch (with changes):'),
            e(
              'select',
              {
                id: 'sourceBranch',
                value: sourceBranch,
                onChange: (e) => setSourceBranch(e.target.value),
                disabled: isLoading,
              },
              branches.map((branch) =>
                e(
                  'option',
                  {
                    key: branch,
                    value: branch,
                  },
                  branch + (branch === currentBranch ? ' (current)' : '')
                )
              )
            )
          ),
          e(
            'div',
            { className: 'branch-selector' },
            e('label', { htmlFor: 'targetBranch' }, 'Target Branch (base branch):'),
            e(
              'select',
              {
                id: 'targetBranch',
                value: targetBranch,
                onChange: (e) => setTargetBranch(e.target.value),
              },
              branches.map((branch) => e('option', { key: branch, value: branch }, branch))
            )
          )
        ),
        e(
          'div',
          { className: 'button-container' },
          e(
            'button',
            {
              onClick: handleReview,
              disabled: isLoading,
              className: 'review-pr-button',
            },
            isLoading ? 'Reviewing...' : 'Review PR Changes'
          )
        )
      ),

      // Add the progress indicator
      isLoading && progress && e(ProgressIndicator, { progress }),

      // Loading indicator
      isLoading && !progress && e('div', { className: 'loading' }, 'Analyzing PR changes...'),

      // Error message
      error && e('div', { className: 'error' }, error),

      // Review results with new dashboard, filters, and issue tracking
      !isLoading &&
        !error &&
        reviewResult &&
        e(
          React.Fragment,
          null,
          e(ReviewDashboard, { stats: calculateStats() }),
          e(
            'div',
            { className: 'summary-container' },
            e(
              'div',
              {
                className: 'summary-toggle',
                onClick: () => setIsSummaryCollapsed(!isSummaryCollapsed),
              },
              e('h2', null, 'Review Summary'),
              e('span', { className: 'toggle-icon' }, isSummaryCollapsed ? '▶' : '▼')
            ),
            !isSummaryCollapsed &&
              e(
                'div',
                { className: 'pr-summary' },
                e(
                  'div',
                  { className: 'summary-header' },
                  e(
                    'button',
                    {
                      className: 'copy-markdown-button',
                      onClick: handleCopyMarkdown,
                      title: 'Copy all review',
                    },
                    isCopied ? e(Icons.Check) : e(Icons.Copy),
                    isCopied ? 'Copied!' : 'Copy All Review'
                  )
                ),
                e(SummarySection, {
                  title: 'Overall Assessment',
                  content: reviewResult.summary.assessment,
                }),
                e(SummarySection, {
                  title: 'Key Strengths',
                  items: reviewResult.summary.strengths,
                  className: 'key-strengths',
                }),
                reviewResult.summary.criticalIssues.length > 0 &&
                  e(SummarySection, {
                    title: 'Critical Issues to Address',
                    items: reviewResult.summary.criticalIssues,
                    className: 'critical-issues',
                  }),
                e(SummarySection, {
                  title: 'Recommendations',
                  items: reviewResult.summary.recommendations,
                })
              )
          ),
          e(
            'div',
            { className: 'issues-section' },
            e('h2', { className: 'issues-heading' }, 'Issues'),
            e(FilterBar, {
              searchQuery,
              setSearchQuery,
              severityFilter,
              setSeverityFilter,
              categoryFilter,
              setCategoryFilter,
              showReviewed,
              setShowReviewed,
              reviewResult,
            }),
            e(ReviewResults, {
              result: reviewResult,
              searchQuery,
              severityFilter,
              categoryFilter,
              reviewedIssues,
              handleMarkAsReviewed,
              showReviewed,
            })
          )
        )
    );
  }

  // New component for the dashboard
  function ReviewDashboard({ stats }) {
    if (!stats) return null;

    // Calculate percentages for the severity chart
    const severityPercentages = React.useMemo(() => {
      if (!stats.total) return [];

      return Object.entries(stats.bySeverity).map(([severity, count]) => ({
        severity,
        count,
        percentage: (count / stats.total) * 100,
      }));
    }, [stats]);

    return e(
      'div',
      { className: 'dashboard' },
      e(
        'div',
        { className: 'dashboard-section' },
        e('h3', {}, 'Review Progress'),
        e(
          'div',
          { className: 'progress-stats' },
          e(
            'div',
            { className: 'stat-item' },
            e('span', { className: 'stat-label' }, 'Total Issues'),
            e('span', { className: 'stat-value' }, stats.total)
          ),
          e(
            'div',
            { className: 'stat-item' },
            e('span', { className: 'stat-label' }, 'Reviewed'),
            e('span', { className: 'stat-value' }, stats.reviewed)
          ),
          e(
            'div',
            { className: 'stat-item' },
            e('span', { className: 'stat-label' }, 'Pending'),
            e('span', { className: 'stat-value' }, stats.pending)
          ),
          e(
            'div',
            { className: 'progress-bar-container dashboard-progress' },
            e('div', {
              className: 'progress-bar',
              style: { width: `${stats.total > 0 ? (stats.reviewed / stats.total) * 100 : 0}%` },
            })
          )
        )
      ),
      e(
        'div',
        { className: 'dashboard-section' },
        e('h3', {}, 'Issues by Severity'),
        e(
          'div',
          { className: 'severity-chart' },
          severityPercentages.length > 0 &&
            e(
              'div',
              { className: 'stacked-bar' },
              severityPercentages.map(({ severity, percentage }) =>
                e('div', {
                  key: severity,
                  className: `severity-bar severity-${severity.toLowerCase()}`,
                  style: { width: `${percentage}%` },
                  title: `${severity}: ${Math.round(percentage)}%`,
                })
              )
            )
        ),
        e(
          'div',
          { className: 'severity-stats' },
          Object.entries(stats.bySeverity).map(([severity, count]) =>
            e(
              'div',
              {
                key: severity,
                className: `stat-item severity-stat severity-${severity.toLowerCase()}`,
              },
              e('span', { className: 'stat-label' }, e('span', { className: 'severity-dot' }), severity),
              e('span', { className: 'stat-value' }, count)
            )
          )
        )
      ),
      e(
        'div',
        { className: 'dashboard-section' },
        e('h3', {}, 'Issues by Category'),
        e(
          'div',
          { className: 'category-stats' },
          Object.entries(stats.byCategory)
            .sort((a, b) => b[1] - a[1]) // Sort by count descending
            .map(([category, count]) =>
              e(
                'div',
                {
                  key: category,
                  className: 'stat-item category-stat',
                },
                e(
                  'span',
                  { className: 'stat-label' },
                  e('span', {}, categoryEmojis[category] || categoryEmojis['Other']),
                  ' ',
                  category
                ),
                e('span', { className: 'stat-value' }, count)
              )
            )
        )
      )
    );
  }

  // New component for filters and search
  function FilterBar({
    searchQuery,
    setSearchQuery,
    severityFilter,
    setSeverityFilter,
    categoryFilter,
    setCategoryFilter,
    showReviewed,
    setShowReviewed,
    reviewResult,
  }) {
    // Extract all unique categories from issues
    const categories = React.useMemo(() => {
      if (!reviewResult || !reviewResult.issues) return [];

      const uniqueCategories = new Set();
      reviewResult.issues.forEach((issue) => {
        if (issue.category) {
          uniqueCategories.add(issue.category);
        }
      });

      return ['All', ...Array.from(uniqueCategories)];
    }, [reviewResult]);

    return e(
      'div',
      { className: 'filter-bar' },
      e(
        'div',
        { className: 'search-container' },
        e('input', {
          type: 'text',
          placeholder: 'Search issues...',
          value: searchQuery,
          onChange: (e) => setSearchQuery(e.target.value),
          className: 'search-input',
        })
      ),
      e(
        'div',
        { className: 'filter-container' },
        e(
          'div',
          { className: 'filter-group' },
          e('label', { htmlFor: 'severityFilter' }, 'Severity:'),
          e(
            'select',
            {
              id: 'severityFilter',
              value: severityFilter,
              onChange: (e) => setSeverityFilter(e.target.value),
              className: 'filter-select',
            },
            e('option', { value: 'All' }, 'All Severities'),
            e('option', { value: 'Critical' }, 'Critical'),
            e('option', { value: 'High' }, 'High'),
            e('option', { value: 'Medium' }, 'Medium'),
            e('option', { value: 'Low' }, 'Low')
          )
        ),
        e(
          'div',
          { className: 'filter-group' },
          e('label', { htmlFor: 'categoryFilter' }, 'Category:'),
          e(
            'select',
            {
              id: 'categoryFilter',
              value: categoryFilter,
              onChange: (e) => setCategoryFilter(e.target.value),
              className: 'filter-select',
            },
            categories.map((category) => e('option', { key: category, value: category }, category))
          )
        ),
        e(
          'div',
          { className: 'filter-group' },
          e('label', { htmlFor: 'statusFilter' }, 'Status:'),
          e(
            'select',
            {
              id: 'statusFilter',
              value: showReviewed ? 'reviewed' : 'pending',
              onChange: (e) => setShowReviewed(e.target.value === 'reviewed'),
              className: 'filter-select',
            },
            e('option', { value: 'pending' }, 'Pending'),
            e('option', { value: 'reviewed' }, 'Done')
          )
        )
      )
    );
  }

  const severityEmojis = {
    Critical: '🚨',
    High: '⚠️',
    Medium: '⚡',
    Low: 'ℹ️',
  };

  const categoryEmojis = {
    Security: '🔒',
    'Code Style': '🎨',
    Performance: '⚡',
    'Breaking Change': '💥',
    'Logical Error': '🐛',
    'Testing Gap': '🧪',
    Other: '📝',
  };

  function ReviewResults({
    result,
    searchQuery,
    severityFilter,
    categoryFilter,
    reviewedIssues,
    handleMarkAsReviewed,
    showReviewed,
  }) {
    const [focusedIssueIndex, setFocusedIssueIndex] = React.useState(-1);

    // Filter issues based on search query and filters
    const filteredIssues = React.useMemo(() => {
      if (!result.issues) return [];

      return result.issues.filter((issue) => {
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
    }, [result.issues, searchQuery, severityFilter, categoryFilter, reviewedIssues, showReviewed]);

    // Add keyboard navigation
    React.useEffect(() => {
      const handleKeyDown = (e) => {
        // Only handle keyboard shortcuts when issues are visible
        if (filteredIssues.length === 0) return;

        switch (e.key) {
          case 'k': // Next issue
            setFocusedIssueIndex((prev) => (prev < filteredIssues.length - 1 ? prev + 1 : prev));
            break;
          case 'j': // Previous issue
            setFocusedIssueIndex((prev) => (prev > 0 ? prev - 1 : prev));
            break;
          case 'd': // Mark/unmark as done
            if (focusedIssueIndex >= 0 && focusedIssueIndex < filteredIssues.length) {
              handleMarkAsReviewed(filteredIssues[focusedIssueIndex]);
            }
            break;
          case 'f': // Navigate to file
            if (focusedIssueIndex >= 0 && focusedIssueIndex < filteredIssues.length) {
              const issue = filteredIssues[focusedIssueIndex];
              vscode.postMessage({
                command: 'navigateToFile',
                filePath: issue.filePath,
                lineNumber: issue.lineNumber,
                codeContext: issue.lineContext?.codeSnippet,
              });
            }
            break;
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [filteredIssues, focusedIssueIndex, handleMarkAsReviewed]);

    // Reset focused issue when filtered issues change
    React.useEffect(() => {
      setFocusedIssueIndex(filteredIssues.length > 0 ? 0 : -1);
    }, [filteredIssues.length]);

    return e(
      'div',
      null,
      e(
        'div',
        { className: 'filtered-count' },
        e('span', {}, `Showing ${filteredIssues.length} ${showReviewed ? 'done' : 'pending'} issues`),
        filteredIssues.length > 0 &&
          e(
            'div',
            { className: 'keyboard-shortcuts' },
            e('span', {}, 'Keyboard shortcuts: '),
            e('kbd', {}, 'j'),
            e('span', {}, ' previous, '),
            e('kbd', {}, 'k'),
            e('span', {}, ' next, '),
            e('kbd', {}, 'd'),
            e('span', {}, ' mark as done, '),
            e('kbd', {}, 'f'),
            e('span', {}, ' go to file')
          )
      ),

      filteredIssues.length > 0
        ? e(IssuesList, {
            issues: filteredIssues,
            reviewedIssues,
            handleMarkAsReviewed,
            focusedIssueIndex,
            setFocusedIssueIndex,
          })
        : e(
            'div',
            { className: 'no-issues' },
            e('h3', null, showReviewed ? 'No Done Issues' : 'No Pending Issues'),
            e(
              'p',
              null,
              showReviewed
                ? "You haven't marked any issues as done yet."
                : searchQuery || severityFilter !== 'All' || categoryFilter !== 'All'
                ? 'No issues match the current filters.'
                : 'Great job! The code review found no significant issues.'
            )
          )
    );
  }

  function IssuesList({ issues, reviewedIssues, handleMarkAsReviewed, focusedIssueIndex, setFocusedIssueIndex }) {
    const severityOrder = ['Critical', 'High', 'Medium', 'Low'];
    const issuesBySeverity = {};

    severityOrder.forEach((severity) => {
      issuesBySeverity[severity] = issues.filter((issue) => issue.severity.toLowerCase() === severity.toLowerCase());
    });

    // Create a flat list of issues for keyboard navigation
    const flatIssuesList = React.useMemo(() => {
      return severityOrder.flatMap((severity) => issuesBySeverity[severity] || []);
    }, [issues]);

    return e(
      'div',
      { className: 'issues-container' },
      severityOrder.map((severity) => {
        const severityIssues = issuesBySeverity[severity];
        return (
          severityIssues &&
          severityIssues.length > 0 &&
          e(
            'div',
            {
              key: severity,
              className: 'severity-group',
            },
            e('h3', null, `${severity} Severity Issues (${severityIssues.length})`),
            severityIssues.map((issue, index) => {
              // Calculate the global index for this issue in the flat list
              const globalIndex = flatIssuesList.findIndex(
                (i) =>
                  i.filePath === issue.filePath && i.severity === issue.severity && i.description === issue.description
              );

              return e(IssueDetails, {
                key: `${severity}-${index}`,
                issue: issue,
                isReviewed: reviewedIssues.has(`${issue.filePath}:${issue.severity}:${issue.description}`),
                onMarkAsReviewed: () => handleMarkAsReviewed(issue),
                isFocused: globalIndex === focusedIssueIndex,
                onFocus: () => setFocusedIssueIndex(globalIndex),
              });
            })
          )
        );
      })
    );
  }

  function IssueDetails({ issue, isReviewed, onMarkAsReviewed, isFocused, onFocus }) {
    const [isCopied, setIsCopied] = React.useState(false);
    const [isCodeCopied, setIsCodeCopied] = React.useState(false);
    const issueRef = React.useRef(null);

    // Scroll into view when focused
    React.useEffect(() => {
      if (isFocused && issueRef.current) {
        issueRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, [isFocused]);

    const handleClick = () => {
      vscode.postMessage({
        command: 'navigateToFile',
        filePath: issue.filePath,
        lineNumber: issue.lineNumber,
        codeContext: issue.lineContext?.codeSnippet,
      });
    };

    const handleCopyCode = (event, code) => {
      navigator.clipboard.writeText(code);
      setIsCodeCopied(true);
      setTimeout(() => setIsCodeCopied(false), 2000);
    };

    const handleCopyIssue = (event) => {
      const markdown = formatIssueAsMarkdown(issue);
      navigator.clipboard.writeText(markdown);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    };

    return e(
      'div',
      {
        className: `issue issue-${issue.severity.toLowerCase()} ${isReviewed ? 'issue-reviewed' : ''} ${
          isFocused ? 'issue-focused' : ''
        }`,
        ref: issueRef,
        onClick: onFocus,
      },
      e(
        'div',
        { className: 'issue-header' },
        e(
          'div',
          { className: 'issue-header-left' },
          e(
            'span',
            {
              className: `issue-severity issue-severity-${issue.severity.toLowerCase()}`,
            },
            issue.severity
          ),
          e('span', { className: 'issue-category' }, issue.category)
        ),
        e(
          'div',
          { className: 'issue-actions' },
          e(
            'button',
            {
              className: `review-button ${isReviewed ? 'reviewed' : ''}`,
              onClick: onMarkAsReviewed,
              title: isReviewed ? 'Mark as pending' : 'Mark as done',
            },
            isReviewed ? 'Done ✓' : 'Mark as Done'
          ),
          e(
            'button',
            {
              className: `copy-issue-button ${isCopied ? 'copied' : ''}`,
              onClick: handleCopyIssue,
              title: 'Copy issue as markdown',
            },
            isCopied ? e(Icons.Check) : e(Icons.Copy),
            isCopied ? 'Copied!' : 'Copy Issue'
          )
        )
      ),
      e('div', { className: 'issue-description' }, issue.description),
      e(
        'div',
        {
          className: 'issue-file-link',
          onClick: handleClick,
          title: 'Click to navigate to file',
        },
        e(Icons.File),
        `${issue.filePath}:${issue.lineNumber || '?'}`
      ),
      issue.lineContext && e(CodeSnippet, { context: issue.lineContext }),
      issue.suggestion &&
        e('div', { className: 'issue-suggestion' }, e('strong', null, 'Suggestion: '), issue.suggestion),
      issue.suggestedCode &&
        e(
          'div',
          { className: 'suggested-code-container' },
          e(
            'div',
            { className: 'suggestion-header' },
            e('strong', null, 'Suggested Implementation:'),
            e(
              'div',
              { className: 'suggestion-actions' },
              e(
                'button',
                {
                  className: `copy-button ${isCodeCopied ? 'copied' : ''}`,
                  onClick: (event) => handleCopyCode(event, issue.suggestedCode),
                  title: 'Copy suggested code',
                },
                isCodeCopied ? e(Icons.Check) : e(Icons.Copy),
                isCodeCopied ? 'Copied!' : 'Copy Code'
              )
            )
          ),
          e('pre', { className: 'suggested-code' }, issue.suggestedCode)
        ),
      issue.justification &&
        e('div', { className: 'issue-justification' }, e('strong', null, 'Why: '), issue.justification)
    );
  }

  function CodeSnippet({ context }) {
    return e(
      'div',
      { className: 'code-snippet' },
      e(
        'pre',
        null,
        context.linesBefore &&
          context.linesBefore.map((line, i) =>
            e(
              'div',
              {
                key: `before-${i}`,
                'data-line-type': 'context',
              },
              line
            )
          ),
        e(
          'div',
          {
            'data-line-type': context.exactMatch ? 'exact' : 'approximate',
          },
          context.codeSnippet
        ),
        context.linesAfter &&
          context.linesAfter.map((line, i) =>
            e(
              'div',
              {
                key: `after-${i}`,
                'data-line-type': 'context',
              },
              line
            )
          )
      )
    );
  }

  function SummarySection({ title, content, items, className }) {
    return e(
      'div',
      { className: 'summary-section' },
      e('h3', null, title),
      content && e('p', null, content),
      items &&
        e(
          'ul',
          { className },
          items.map((item, index) => e('li', { key: index }, item))
        )
    );
  }

  // Initialize React app
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(e(App));
})();