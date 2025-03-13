(function () {
  const vscode = acquireVsCodeApi();

  // State management
  let branches = [];
  let currentBranch = '';
  let reviewResult = null;
  let isLoading = false;

  // Elements
  let sourceBranchSelect;
  let targetBranchSelect;
  let reviewButton;
  let resultsContainer;

  // Once the DOM is ready, initialize the UI
  window.addEventListener('DOMContentLoaded', () => {
    initializeUI();
    vscode.postMessage({ command: 'getBranches' });
  });

  function initializeUI() {
    const root = document.getElementById('root');
    root.innerHTML = `
      <h1>PR Review Assistant</h1>
      <div class="branches-form">
        <h2>Select branches to compare</h2>
        <div class="form-row">
          <div class="form-column">
            <label for="sourceBranch">Source Branch (PR branch)</label>
            <select id="sourceBranch"></select>
          </div>
          <div class="form-column">
            <label for="targetBranch">Target Branch (base branch)</label>
            <select id="targetBranch"></select>
          </div>
        </div>
        <button id="reviewButton">Review PR Changes</button>
      </div>
      <div id="results"></div>
    `;

    sourceBranchSelect = document.getElementById('sourceBranch');
    targetBranchSelect = document.getElementById('targetBranch');
    reviewButton = document.getElementById('reviewButton');
    resultsContainer = document.getElementById('results');

    reviewButton.addEventListener('click', () => {
      if (sourceBranchSelect.value === targetBranchSelect.value) {
        showError('Source and target branches must be different');
        return;
      }
      
      startReview(sourceBranchSelect.value, targetBranchSelect.value);
    });
  }

  // Handle messages from the extension
  window.addEventListener('message', (event) => {
    const message = event.data;

    switch (message.command) {
      case 'branchesList':
        handleBranchesList(message.branches, message.currentBranch);
        break;
      case 'startLoading':
        showLoading();
        break;
      case 'reviewComplete':
        showReviewResults(message.result);
        break;
      case 'error':
        showError(message.message);
        break;
    }
  });

  function handleBranchesList(branchesList, current) {
    branches = branchesList;
    currentBranch = current;
    
    populateBranchSelects();
  }

  function populateBranchSelects() {
    sourceBranchSelect.innerHTML = '';
    targetBranchSelect.innerHTML = '';
    
    branches.forEach(branch => {
      const sourceOption = document.createElement('option');
      sourceOption.value = branch;
      sourceOption.textContent = branch;
      if (branch === currentBranch) {
        sourceOption.selected = true;
      }
      sourceBranchSelect.appendChild(sourceOption);
      
      const targetOption = document.createElement('option');
      targetOption.value = branch;
      targetOption.textContent = branch;
      if (branch === 'main' || branch === 'master') {
        targetOption.selected = true;
      }
      targetBranchSelect.appendChild(targetOption);
    });
  }

  function startReview(sourceBranch, targetBranch) {
    vscode.postMessage({
      command: 'reviewPr',
      sourceBranch,
      targetBranch
    });
  }

  function showLoading() {
    isLoading = true;
    resultsContainer.innerHTML = `
      <div class="loading">
        <div class="loading-spinner"></div>
        <p>Analyzing code changes...</p>
      </div>
    `;
  }

  function showReviewResults(result) {
    isLoading = false;
    reviewResult = result;

    let html = `
      <div class="pr-summary">
        <h2>Review Summary</h2>
        <div class="summary-section">
          <h3>Overall Assessment</h3>
          <p>${result.summary.assessment}</p>
        </div>

        <div class="summary-section">
          <h3>Key Strengths</h3>
          <ul>
            ${result.summary.strengths.map((strength) => `<li>${strength}</li>`).join('')}
          </ul>
        </div>

        ${
          result.summary.criticalIssues.length > 0
            ? `
          <div class="summary-section">
            <h3>Critical Issues to Address</h3>
            <ul class="critical-issues">
              ${result.summary.criticalIssues.map((issue) => `<li>${issue}</li>`).join('')}
            </ul>
          </div>
        `
            : ''
        }

        <div class="summary-section">
          <h3>Recommendations</h3>
          <ul>
            ${result.summary.recommendations.map((rec) => `<li>${rec}</li>`).join('')}
          </ul>
        </div>
      </div>
    `;

    if (!result.issues || result.issues.length === 0) {
      html += `
        <div class="no-issues">
          <h3>No Issues Found</h3>
          <p>Great job! The code review found no significant issues.</p>
        </div>
      `;
    } else {
      html += `<div class="issues-container">
        <h2>Detailed Issues (${result.issues.length})</h2>
      `;

      // Group issues by severity for better UX
      const severityOrder = ['Critical', 'High', 'Medium', 'Low'];
      const issuesBySeverity = {};

      severityOrder.forEach((severity) => {
        issuesBySeverity[severity] = result.issues.filter(
          (issue) => issue.severity.toLowerCase() === severity.toLowerCase()
        );
      });

      // Display issues in order of severity
      severityOrder.forEach((severity) => {
        const issues = issuesBySeverity[severity];
        if (issues && issues.length > 0) {
          html += `
            <div class="severity-group">
              <h3>${severity} Severity Issues (${issues.length})</h3>
              ${issues.map((issue) => createIssueHtml(issue)).join('')}
            </div>
          `;
        }
      });

      html += '</div>';
    }

    resultsContainer.innerHTML = html;

    // Add event listeners to file links
    document.querySelectorAll('.issue-file-link').forEach((link) => {
      link.addEventListener('click', (e) => {
        const filePath = e.currentTarget.dataset.file;
        const lineNumber = parseInt(e.currentTarget.dataset.line, 10) || 0;
        const codeContext = e.currentTarget.dataset.codeContext
          ? decodeURIComponent(e.currentTarget.dataset.codeContext)
          : undefined;

        vscode.postMessage({
          command: 'navigateToFile',
          filePath,
          lineNumber,
          codeContext,
        });
      });
    });
  }

  function createIssueHtml(issue) {
    const severityLower = issue.severity.toLowerCase();
    const hasFilePath = issue.filePath && issue.filePath.trim() !== '';

    // Get code snippet if available
    const hasCodeSnippet = issue.lineContext && issue.lineContext.codeSnippet;

    return `
      <div class="issue issue-${severityLower}">
        <div class="issue-header">
          <span class="issue-severity issue-severity-${severityLower}">${issue.severity}</span>
          <span class="issue-category">${issue.category}</span>
        </div>
        
        <div class="issue-description">
          <p>${issue.description}</p>
        </div>
        
        ${
          hasFilePath
            ? `
          <div class="issue-file-link" 
               data-file="${issue.filePath}" 
               data-line="${issue.lineNumber || 0}"
               ${hasCodeSnippet ? `data-code-context="${encodeURIComponent(issue.lineContext.codeSnippet)}"` : ''}>
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 1h13l.5.5v13l-.5.5h-13l-.5-.5v-13l.5-.5zM2 2v12h12V2H2zm6 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            </svg>
            ${issue.filePath}${issue.lineNumber ? `:${issue.lineNumber}` : ''}
            ${
              issue.lineContext?.exactMatch
                ? '<span class="exact-match-badge" title="Exact match">✓</span>'
                : '<span class="approximate-match-badge" title="Approximate location">~</span>'
            }
          </div>
        `
            : ''
        }
        
        ${
          hasCodeSnippet
            ? `
          <div class="code-snippet">
            <div class="code-snippet-header">
              <span>Code context</span>
            </div>
            <pre>${escapeHtml(issue.lineContext.codeSnippet)}</pre>
          </div>
        `
            : ''
        }
        
        ${
          issue.suggestion
            ? `
          <div class="issue-suggestion">
            <strong>Suggestion:</strong> ${issue.suggestion}
            ${
              issue.justification
                ? `<div class="issue-justification"><strong>Why:</strong> ${issue.justification}</div>`
                : ''
            }
          </div>
        `
            : ''
        }
      </div>
    `;
  }

  // Helper function to escape HTML
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function showError(message) {
    isLoading = false;
    resultsContainer.innerHTML = `
      <div class="error-message">
        <h3>Error</h3>
        <p>${message}</p>
      </div>
    `;
  }
})();