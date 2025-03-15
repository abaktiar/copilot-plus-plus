// @ts-check

// Script run within the webview itself.
(function () {
  // Get access to the VS Code API from within the webview
  // @ts-ignore
  const vscode = acquireVsCodeApi();

  // Just like a regular webpage we need to wait for the webview
  // DOM to load before we can reference any of the HTML elements
  window.addEventListener('load', main);

  // Main function that gets executed once the webview DOM loads
  function main() {
    // Create the main React component
    // @ts-ignore
    const e = React.createElement;

    // Icons components for better UI
    const Icons = {
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
    };

    // Helper function to format change type for display
    function formatChangeType(changeType) {
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

    // Breaking Changes App - Main component
    function BreakingChangesApp() {
      // State hooks
      const [branches, setBranches] = React.useState([]);
      const [currentBranch, setCurrentBranch] = React.useState('');
      const [defaultTargetBranch, setDefaultTargetBranch] = React.useState('');
      const [sourceBranch, setSourceBranch] = React.useState('');
      const [targetBranch, setTargetBranch] = React.useState('');
      const [isLoading, setIsLoading] = React.useState(false);
      const [error, setError] = React.useState(null);
      const [result, setResult] = React.useState(null);
      const [languageModel, setLanguageModel] = React.useState('gpt-4o');
      const [filterSeverity, setFilterSeverity] = React.useState('all');
      const [filterChangeType, setFilterChangeType] = React.useState('all');
      const [searchTerm, setSearchTerm] = React.useState('');

      // Get models from shared config
      // @ts-ignore - sharedModelConfig is defined in modelConfig.js
      const models = window.sharedModelConfig?.models || [
        { id: 'gpt-4o', name: 'GPT-4o' },
        { id: 'gpt-4o-mini', name: 'GPT-4o-mini' },
        { id: 'claude-3.5-sonnet', name: 'Claude 3.5 Sonnet' },
        { id: 'o1', name: 'o1' },
        { id: 'o1-mini', name: 'o1-mini' },
      ];

      // Effect hook for message listener and initial branches request
      React.useEffect(() => {
        // Request branches when component mounts
        vscode.postMessage({ command: 'getBranches' });

        // Listen for messages from the extension
        const messageHandler = (event) => {
          const message = event.data;
          switch (message.command) {
            case 'branchesList':
              setBranches(message.branches || []);
              setCurrentBranch(message.currentBranch || '');
              setDefaultTargetBranch(message.defaultTargetBranch || '');
              setSourceBranch(message.currentBranch || '');

              // Set target branch with the same logic as PR Review panel
              if (message.branches && message.branches.length > 0) {
                // First check for defaultTargetBranch from config
                if (message.defaultTargetBranch && message.branches.includes(message.defaultTargetBranch)) {
                  setTargetBranch(message.defaultTargetBranch);
                } else {
                  // Fall back to main/master if available, or first branch that's not the source
                  const targetBranch =
                    message.branches.find((b) => b === 'main' || b === 'master') ||
                    message.branches.find((b) => b !== message.currentBranch) ||
                    message.branches[0];

                  setTargetBranch(targetBranch);
                }
              }

              if (message.languageModel) {
                setLanguageModel(message.languageModel);
              }
              break;

            case 'analyzing':
              setIsLoading(true);
              setError(null);
              setResult(null);
              break;

            case 'analysisResult':
              setIsLoading(false);
              setResult(message.result);
              setError(null);
              break;

            case 'error':
              setIsLoading(false);
              setError(message.message);
              break;
          }
        };

        window.addEventListener('message', messageHandler);
        return () => window.removeEventListener('message', messageHandler);
      }, []);

      // Handle analyze button click
      const handleAnalyzeClick = () => {
        if (!sourceBranch || !targetBranch) {
          setError('Please select both source and target branches');
          return;
        }

        vscode.postMessage({
          command: 'analyzeBreakingChanges',
          sourceBranch,
          targetBranch,
          modelFamily: languageModel,
        });
      };

      // Handle opening a file at a specific location
      const handleOpenFile = (filePath, lineNumber) => {
        vscode.postMessage({
          command: 'openFile',
          filePath,
          lineNumber,
        });
      };

      // Get filtered breaking changes based on current filters
      const getFilteredBreakingChanges = () => {
        if (!result || !result.breakingChanges) {
          return [];
        }

        return result.breakingChanges.filter((change) => {
          // Filter by severity
          if (filterSeverity !== 'all' && change.severity !== filterSeverity) {
            return false;
          }

          // Filter by change type
          if (filterChangeType !== 'all' && change.changeType !== filterChangeType) {
            return false;
          }

          // Filter by search term
          if (searchTerm) {
            const searchLower = searchTerm.toLowerCase();
            return (
              (change.description && change.description.toLowerCase().includes(searchLower)) ||
              (change.changeLocation && change.changeLocation.filePath.toLowerCase().includes(searchLower)) ||
              (change.recommendation && change.recommendation.toLowerCase().includes(searchLower))
            );
          }

          return true;
        });
      };

      // Get filtered breaking changes
      const filteredBreakingChanges = getFilteredBreakingChanges();

      return e(
        'div',
        { className: 'container' },

        // Configuration section
        e(
          'div',
          { className: 'section' },
          e(
            'h2',
            null,
            e(
              'div',
              { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
              e(Icons.Branch),
              'Breaking Changes Analysis'
            )
          ),
          // Branch selection row
          e(
            'div',
            { style: { display: 'flex', gap: '16px', marginBottom: '16px' } },
            // Source branch
            e(
              'div',
              { style: { flex: 1 } },
              e('label', { htmlFor: 'sourceBranch' }, 'Source Branch (PR branch)'),
              e(
                'select',
                {
                  id: 'sourceBranch',
                  value: sourceBranch,
                  onChange: (e) => setSourceBranch(e.target.value),
                  disabled: isLoading,
                  style: { width: '100%' },
                },
                e('option', { value: '' }, 'Select source branch'),
                branches.map((branch) => e('option', { key: branch, value: branch }, branch))
              )
            ),
            // Target branch
            e(
              'div',
              { style: { flex: 1 } },
              e('label', { htmlFor: 'targetBranch' }, 'Target Branch (base branch)'),
              e(
                'select',
                {
                  id: 'targetBranch',
                  value: targetBranch,
                  onChange: (e) => setTargetBranch(e.target.value),
                  disabled: isLoading,
                  style: { width: '100%' },
                },
                e('option', { value: '' }, 'Select target branch'),
                branches.map((branch) => e('option', { key: branch, value: branch }, branch))
              )
            )
          ),
          // Model selection row
          e(
            'div',
            { style: { marginBottom: '16px' } },
            e('label', { htmlFor: 'modelSelect' }, 'Language Model'),
            e(
              'select',
              {
                id: 'modelSelect',
                value: languageModel,
                onChange: (e) => setLanguageModel(e.target.value),
                disabled: isLoading,
                style: { width: '100%' },
              },
              models.map((model) => e('option', { key: model.id, value: model.id }, model.name))
            )
          ),
          // Analyze button row
          e(
            'div',
            null,
            e(
              'button',
              {
                onClick: handleAnalyzeClick,
                disabled: isLoading || !sourceBranch || !targetBranch,
                style: { marginTop: '4px' },
              },
              isLoading ? 'Analyzing...' : 'Analyze Breaking Changes'
            )
          )
        ),

        // Error message
        error && e('div', { className: 'error-message' }, e('h3', null, 'Error'), e('p', null, error)),

        // Loading indicator
        isLoading &&
          e(
            'div',
            { className: 'loading-container' },
            e('div', { className: 'loading-spinner' }),
            e('p', null, 'Analyzing breaking changes...')
          ),

        // Results section
        !isLoading &&
          result &&
          e(
            'div',
            { className: 'section' },
            e('h2', null, 'Analysis Results'),

            // Summary
            e(
              'div',
              { className: 'summary' },
              e('h3', null, 'Summary'),
              e(
                'div',
                { className: 'summary-stats' },
                e(
                  'div',
                  { className: 'stat' },
                  e('span', { className: 'stat-label' }, 'Total:'),
                  e('span', { className: 'stat-value' }, result.summary.totalBreakingChanges)
                ),
                e(
                  'div',
                  { className: 'stat critical' },
                  e('span', { className: 'stat-label' }, 'Critical:'),
                  e('span', { className: 'stat-value' }, result.summary.criticalCount)
                ),
                e(
                  'div',
                  { className: 'stat high' },
                  e('span', { className: 'stat-label' }, 'High:'),
                  e('span', { className: 'stat-value' }, result.summary.highCount)
                ),
                e(
                  'div',
                  { className: 'stat medium' },
                  e('span', { className: 'stat-label' }, 'Medium:'),
                  e('span', { className: 'stat-value' }, result.summary.mediumCount)
                ),
                e(
                  'div',
                  { className: 'stat low' },
                  e('span', { className: 'stat-label' }, 'Low:'),
                  e('span', { className: 'stat-value' }, result.summary.lowCount)
                )
              )
            ),

            // Filters
            e(
              'div',
              { className: 'filters' },
              e('h3', null, 'Filters'),
              e(
                'div',
                { className: 'filter-controls' },
                e(
                  'div',
                  { className: 'filter-group' },
                  e('label', null, 'Severity:'),
                  e(
                    'select',
                    {
                      value: filterSeverity,
                      onChange: (e) => setFilterSeverity(e.target.value),
                    },
                    e('option', { value: 'all' }, 'All Severities'),
                    e('option', { value: 'critical' }, 'Critical'),
                    e('option', { value: 'high' }, 'High'),
                    e('option', { value: 'medium' }, 'Medium'),
                    e('option', { value: 'low' }, 'Low')
                  )
                ),
                e(
                  'div',
                  { className: 'filter-group' },
                  e('label', null, 'Change Type:'),
                  e(
                    'select',
                    {
                      value: filterChangeType,
                      onChange: (e) => setFilterChangeType(e.target.value),
                    },
                    e('option', { value: 'all' }, 'All Types'),
                    e('option', { value: 'method-signature' }, 'Method Signature'),
                    e('option', { value: 'class-structure' }, 'Class Structure'),
                    e('option', { value: 'enum-value' }, 'Enum Value'),
                    e('option', { value: 'member-removal' }, 'Member Removal'),
                    e('option', { value: 'behavior-change' }, 'Behavior Change'),
                    e('option', { value: 'other' }, 'Other')
                  )
                ),
                e(
                  'div',
                  { className: 'filter-group' },
                  e('label', null, 'Search:'),
                  e('input', {
                    type: 'text',
                    value: searchTerm,
                    onChange: (e) => setSearchTerm(e.target.value),
                    placeholder: 'Search in descriptions, files, etc.',
                  })
                )
              )
            ),

            // Breaking changes list
            e(
              'div',
              { className: 'breaking-changes-list' },
              e('h3', null, `Breaking Changes (${filteredBreakingChanges.length})`),
              filteredBreakingChanges.length === 0
                ? e('p', { className: 'no-results' }, 'No breaking changes found matching the current filters.')
                : filteredBreakingChanges.map((change) =>
                    e(BreakingChangeItem, {
                      key: change.id,
                      change,
                      onOpenFile: handleOpenFile,
                    })
                  )
            )
          )
      );
    }

    // Component for a single breaking change item
    function BreakingChangeItem({ change, onOpenFile }) {
      const [expanded, setExpanded] = React.useState(false);

      // Get severity class
      const severityClass = `severity-${change.severity}`;

      return e(
        'div',
        { className: `breaking-change-item ${severityClass}` },

        // Header (always visible)
        e(
          'div',
          { className: 'breaking-change-header', onClick: () => setExpanded(!expanded) },
          e(
            'div',
            { className: 'breaking-change-title' },
            e('span', { className: `severity-badge ${severityClass}` }, change.severity),
            e('span', { className: 'change-type-badge' }, formatChangeType(change.changeType)),
            e('span', { className: 'breaking-change-description' }, change.description)
          ),
          e(
            'div',
            { className: 'breaking-change-location' },
            e(
              'span',
              {
                className: 'file-location',
                onClick: (event) => {
                  event.stopPropagation();
                  onOpenFile(change.changeLocation.filePath, change.changeLocation.lineNumber);
                },
                title: 'Click to open file',
              },
              `${change.changeLocation.filePath}:${change.changeLocation.lineNumber}`
            ),
            e('span', { className: 'expand-icon' }, expanded ? '▼' : '▶')
          )
        ),

        // Details (visible when expanded)
        expanded &&
          e(
            'div',
            { className: 'breaking-change-details' },

            // Recommendation
            e(
              'div',
              { className: 'recommendation' },
              e('h4', null, 'Recommendation'),
              e('p', null, change.recommendation)
            ),

            // Affected locations
            e(
              'div',
              { className: 'affected-locations' },
              e('h4', null, `Affected Locations (${change.affectedLocations.length})`),
              change.affectedLocations.length === 0
                ? e('p', null, 'No affected locations found.')
                : e(
                    'ul',
                    { className: 'locations-list' },
                    change.affectedLocations.map((location, index) =>
                      e(
                        'li',
                        { key: index, className: 'location-item' },
                        e(
                          'div',
                          { className: 'location-header' },
                          e(
                            'span',
                            {
                              className: 'file-location',
                              onClick: () => onOpenFile(location.filePath, location.lineNumber),
                              title: 'Click to open file',
                            },
                            `${location.filePath}:${location.lineNumber}`
                          )
                        ),
                        e('div', { className: 'code-snippet' }, e('pre', null, location.codeSnippet))
                      )
                    )
                  )
            )
          )
      );
    }

    // Render the React app
    const domContainer = document.getElementById('root');
    // @ts-ignore
    const root = ReactDOM.createRoot(domContainer);
    root.render(e(BreakingChangesApp));
  }
})();
