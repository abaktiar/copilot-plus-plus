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

  function App() {
    const [branches, setBranches] = React.useState([]);
    const [currentBranch, setCurrentBranch] = React.useState('');
    const [sourceBranch, setSourceBranch] = React.useState('');
    const [targetBranch, setTargetBranch] = React.useState('');
    const [reviewResult, setReviewResult] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

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
            setTargetBranch(message.branches.find((b) => b === 'main' || b === 'master') || message.branches[0]);
            break;

          case 'startLoading':
            setIsLoading(true);
            setError(null);
            break;

          case 'reviewComplete':
            setIsLoading(false);
            setReviewResult(message.result);
            setError(null);
            break;

          case 'error':
            setIsLoading(false);
            setError(message.message);
            setReviewResult(null);
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
      });
    };

    return e(
      'div',
      { className: 'container' },
      e('h1', null, 'PR Review Assistant'),
      e(
        'div',
        { className: 'branches-form' },
        e(
          'h2',
          null,
          e(
            'div',
            { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
            e(Icons.Branch),
            'Select branches to compare'
          )
        ),
        e(
          'div',
          { className: 'form-row' },
          e(
            'div',
            { className: 'form-column' },
            e('label', { htmlFor: 'sourceBranch' }, 'Source Branch (PR branch)'),
            e(
              'select',
              {
                id: 'sourceBranch',
                value: sourceBranch,
                onChange: (e) => setSourceBranch(e.target.value),
              },
              branches.map((branch) => e('option', { key: branch, value: branch }, branch))
            )
          ),
          e(
            'div',
            { className: 'form-column' },
            e('label', { htmlFor: 'targetBranch' }, 'Target Branch (base branch)'),
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
          'button',
          {
            onClick: handleReview,
            disabled: isLoading,
          },
          isLoading ? 'Reviewing...' : 'Review PR Changes'
        )
      ),
      error && e('div', { className: 'error-message' }, e('h3', null, 'Error'), e('p', null, error)),
      isLoading &&
        e(
          'div',
          { className: 'loading' },
          e('div', { className: 'loading-spinner' }),
          e('p', null, 'Analyzing code changes...')
        ),
      !isLoading && reviewResult && e(ReviewResults, { result: reviewResult })
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

  function ReviewResults({ result }) {
    const [isCopied, setIsCopied] = React.useState(false);
    const handleCopyMarkdown = (event) => {
      const markdown = formatReviewAsMarkdown(result);
      navigator.clipboard.writeText(markdown);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    };

    return e(
      'div',
      null,
      e(
        'div',
        { className: 'pr-summary' },
        e(
          'div',
          { className: 'summary-header' },
          e('h2', null, 'Review Summary'),
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
          content: result.summary.assessment,
        }),
        e(SummarySection, {
          title: 'Key Strengths',
          items: result.summary.strengths,
        }),
        result.summary.criticalIssues.length > 0 &&
          e(SummarySection, {
            title: 'Critical Issues to Address',
            items: result.summary.criticalIssues,
            className: 'critical-issues',
          }),
        e(SummarySection, {
          title: 'Recommendations',
          items: result.summary.recommendations,
        })
      ),
      result.issues && result.issues.length > 0
        ? e(IssuesList, { issues: result.issues })
        : e(
            'div',
            { className: 'no-issues' },
            e('h3', null, 'No Issues Found'),
            e('p', null, 'Great job! The code review found no significant issues.')
          )
    );
  }

  function IssuesList({ issues }) {
    const severityOrder = ['Critical', 'High', 'Medium', 'Low'];
    const issuesBySeverity = {};

    severityOrder.forEach((severity) => {
      issuesBySeverity[severity] = issues.filter((issue) => issue.severity.toLowerCase() === severity.toLowerCase());
    });

    return e(
      'div',
      { className: 'issues-container' },
      e('h2', null, `Detailed Issues (${issues.length})`),
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
            severityIssues.map((issue, index) =>
              e(IssueDetails, {
                key: `${severity}-${index}`,
                issue: issue,
              })
            )
          )
        );
      })
    );
  }

  function IssueDetails({ issue }) {
    const [isCopied, setIsCopied] = React.useState(false);
    const [isCodeCopied, setIsCodeCopied] = React.useState(false);

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
      { className: `issue issue-${issue.severity.toLowerCase()}` },
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
          'button',
          {
            className: `copy-issue-button ${isCopied ? 'copied' : ''}`,
            onClick: handleCopyIssue,
            title: 'Copy issue as markdown',
          },
          isCopied ? e(Icons.Check) : e(Icons.Copy),
          isCopied ? 'Copied!' : 'Copy Issue'
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