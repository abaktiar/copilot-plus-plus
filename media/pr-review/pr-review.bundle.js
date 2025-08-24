/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./src/webviews/pr-review/styles/pr-review.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./src/webviews/pr-review/styles/pr-review.css ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --container-padding: 20px;
  --border-radius: 8px;
  --transition-speed: 0.2s;
  --card-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  --hover-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

body {
  padding: 24px;
  color: var(--vscode-foreground);
  font-size: var(--vscode-font-size);
  font-weight: var(--vscode-font-weight);
  font-family: var(--vscode-font-family);
  background-color: var(--vscode-editor-background);
  line-height: 1.5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-size: 24px;
  margin-bottom: 24px;
  font-weight: 600;
}

h2 {
  font-size: 20px;
  margin-bottom: 16px;
  font-weight: 500;
}

h3 {
  font-size: 16px;
  margin-bottom: 12px;
  font-weight: 500;
}

/* Form layout improvements */
.form-container {
  background: var(--vscode-editor-background);
  border: 1px solid var(--vscode-widget-border);
  border-radius: var(--border-radius);
  padding: 20px;
  margin-bottom: 32px;
  box-shadow: var(--card-shadow);
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header-row h2 {
  margin: 0;
}

.model-selector {
  display: flex;
  align-items: center;
  gap: 10px;
}

.branches-row {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.branch-selector {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.button-container {
  display: flex;
  justify-content: flex-end;
}

.review-pr-button {
  background: var(--vscode-button-background);
  color: var(--vscode-button-foreground);
  border: none;
  padding: 8px 16px;
  font-weight: 500;
}

.review-pr-button:hover:not(:disabled) {
  background: var(--vscode-button-hoverBackground);
}

/* Progress indicator styles */
.progress-container {
  margin: 20px 0;
  padding: 15px;
  background-color: var(--vscode-editor-background);
  border: 1px solid var(--vscode-panel-border);
  border-radius: 4px;
}

.progress-header {
  margin-bottom: 10px;
  font-weight: 500;
}

.progress-bar-container {
  height: 8px;
  background-color: var(--vscode-input-background);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 10px;
}

.progress-bar {
  height: 100%;
  background-color: var(--vscode-progressBar-background);
  transition: width 0.3s ease;
}

.progress-current-file {
  font-size: 0.9em;
  color: var(--vscode-descriptionForeground);
  margin-top: 8px;
}

/* Dashboard styles */
.dashboard {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 24px;
}

.dashboard-section {
  background: var(--vscode-editor-background);
  border: 1px solid var(--vscode-widget-border);
  border-radius: var(--border-radius);
  padding: 16px;
  box-shadow: var(--card-shadow);
}

.dashboard-section h3 {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 16px;
  font-weight: 500;
  border-bottom: 1px solid var(--vscode-widget-border);
  padding-bottom: 8px;
}

.progress-stats, .severity-stats, .category-stats {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stat-label {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stat-value {
  font-weight: 500;
  font-size: 16px;
}

.severity-dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.severity-stat.severity-critical .severity-dot {
  background-color: var(--vscode-errorForeground);
}

.severity-stat.severity-high .severity-dot {
  background-color: var(--vscode-testing-iconFailed);
}

.severity-stat.severity-medium .severity-dot {
  background-color: var(--vscode-testing-iconSkipped);
}

.severity-stat.severity-low .severity-dot {
  background-color: var(--vscode-testing-iconQueued);
}

.dashboard-progress {
  margin-top: 12px;
  height: 6px;
}

/* Severity chart styles */
.severity-chart {
  margin-bottom: 16px;
}

.stacked-bar {
  display: flex;
  width: 100%;
  height: 24px;
  border-radius: var(--border-radius);
  overflow: hidden;
}

.severity-bar {
  height: 100%;
  transition: width 0.3s ease;
}

.severity-bar.severity-critical {
  background-color: var(--vscode-errorForeground);
}

.severity-bar.severity-high {
  background-color: var(--vscode-testing-iconFailed);
}

.severity-bar.severity-medium {
  background-color: var(--vscode-testing-iconSkipped);
}

.severity-bar.severity-low {
  background-color: var(--vscode-testing-iconQueued);
}

.no-data {
  text-align: center;
  color: var(--vscode-descriptionForeground);
  font-style: italic;
  padding: 12px;
}

/* Collapsible summary section */
.summary-container {
  margin-bottom: 24px;
}

.summary-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: var(--vscode-editor-background);
  border: 1px solid var(--vscode-widget-border);
  border-radius: var(--border-radius);
  cursor: pointer;
  box-shadow: var(--card-shadow);
  transition: background-color 0.2s ease;
}

.summary-toggle:hover {
  background-color: var(--vscode-list-hoverBackground);
}

.summary-toggle h2 {
  margin: 0;
}

.toggle-icon {
  font-size: 14px;
  transition: transform 0.2s ease;
}

.pr-summary {
  background: var(--vscode-editor-background);
  border: 1px solid var(--vscode-widget-border);
  border-radius: var(--border-radius);
  padding: 24px;
  margin-top: 1px;
  box-shadow: var(--card-shadow);
}

.summary-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--vscode-widget-border);
  gap: 16px;
}

.summary-section {
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--vscode-widget-border);
}

.summary-section:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.critical-issues li {
  color: var(--vscode-errorForeground);
}

/* Filter bar styles */
.filter-bar {
  background: var(--vscode-editor-background);
  border: 1px solid var(--vscode-widget-border);
  border-radius: var(--border-radius);
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: var(--card-shadow);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.search-container {
  width: 100%;
}

.search-input {
  width: 100%;
  padding: 8px 12px;
  border-radius: var(--border-radius);
  border: 1px solid var(--vscode-input-border);
  background: var(--vscode-input-background);
  color: var(--vscode-input-foreground);
  font-size: 14px;
}

.search-input:focus {
  border-color: var(--vscode-focusBorder);
  outline: none;
}

.filter-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 150px;
}

.filter-select {
  padding: 6px 10px;
  border-radius: var(--border-radius);
  border: 1px solid var(--vscode-dropdown-border);
  background: var(--vscode-dropdown-background);
  color: var(--vscode-dropdown-foreground);
  font-size: 13px;
}

/* Issues section */
.issues-section {
  margin-bottom: 24px;
}

.issues-heading {
  margin-bottom: 16px;
}

.filtered-count {
  display: flex;
  align-items: center;
  margin: 10px 0;
  padding: 5px 10px;
  background-color: var(--vscode-editor-background);
  border-radius: 4px;
  font-size: 14px;
  color: var(--vscode-descriptionForeground);
}

/* Keyboard shortcuts */
.keyboard-shortcuts {
  display: inline-block;
  margin-left: 10px;
  font-size: 0.9em;
  color: var(--vscode-descriptionForeground);
}

.keyboard-shortcuts kbd {
  display: inline-block;
  padding: 2px 5px;
  font-family: var(--vscode-editor-font-family);
  font-size: 0.9em;
  line-height: 1;
  color: var(--vscode-editor-foreground);
  background-color: var(--vscode-button-secondaryBackground);
  border-radius: 3px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  margin: 0 2px;
}

.issues-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.issue {
  background: var(--vscode-input-background);
  border-radius: var(--border-radius);
  padding: 12px;
  transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
}

.issue:hover {
  transform: translateY(-2px);
  box-shadow: var(--hover-shadow);
}

.issue-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  gap: 12px;
}

.issue-header-left {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.issue-severity {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
}

.issue-severity-critical {
  background-color: var(--vscode-errorForeground);
  color: var(--vscode-editor-background);
}

.issue-severity-high {
  background-color: var(--vscode-testing-iconFailed);
  color: var(--vscode-editor-background);
}

.issue-severity-medium {
  background-color: var(--vscode-testing-iconSkipped);
  color: var(--vscode-editor-background);
}

.issue-severity-low {
  background-color: var(--vscode-testing-iconQueued);
  color: var(--vscode-editor-background);
}

.issue-category {
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 12px;
  background: var(--vscode-button-secondaryBackground);
  color: var(--vscode-button-secondaryForeground);
}

.issue-actions {
  display: flex;
  gap: 8px;
}

.issue-description {
  margin-bottom: 12px;
}

.issue-file-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--vscode-textBlockQuote-background);
  border-radius: var(--border-radius);
  font-family: var(--vscode-editor-font-family);
  font-size: 13px;
  cursor: pointer;
  transition: background var(--transition-speed) ease;
  margin-bottom: 12px;
}

.issue-file-link:hover {
  background: var(--vscode-list-hoverBackground);
}

.code-snippet {
  background: var(--vscode-textBlockQuote-background);
  border-radius: var(--border-radius);
  margin: 8px 0;
  max-width: 100%;
  overflow: hidden;
}

.code-snippet pre {
  margin: 0;
  padding: 10px;
  font-family: var(--vscode-editor-font-family);
  font-size: 13px;
  line-height: 1.5;
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-all;
}

.issue-suggestion {
  margin: 12px 0;
  padding: 12px;
  background: var(--vscode-textBlockQuote-background);
  border-radius: var(--border-radius);
}

.suggested-code-container {
  margin-top: 16px;
  background: var(--vscode-editor-background);
  border-radius: var(--border-radius);
  overflow: hidden;
  max-width: 100%;
}

.suggestion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: var(--vscode-button-secondaryBackground);
}

.suggestion-header strong {
  margin: 0;
  font-size: 13px;
}

.suggested-code {
  padding: 16px;
  margin: 0;
  font-family: var(--vscode-editor-font-family);
  font-size: 13px;
  line-height: 1.5;
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-all;
  max-width: 100%;
}

.issue-justification {
  margin: 12px 0;
  padding: 12px;
  background: var(--vscode-textBlockQuote-background);
  border-radius: var(--border-radius);
}

/* Issue review button */
.review-button {
  background: var(--vscode-button-secondaryBackground);
  color: var(--vscode-button-secondaryForeground);
  border: 1px solid var(--vscode-button-border);
  padding: 6px 12px;
  border-radius: var(--border-radius);
  font-size: 12px;
  transition: all var(--transition-speed) ease;
  white-space: nowrap;
}

.review-button:hover {
  background: var(--vscode-button-secondaryHoverBackground);
}

.review-button.reviewed {
  background: var(--vscode-badge-background);
  color: var(--vscode-badge-foreground);
  border-color: var(--vscode-badge-background);
}

.issue-reviewed {
  opacity: 0.7;
  border-left: 4px solid var(--vscode-badge-background);
}

/* Focused issue */
.issue-focused {
  border-left: 3px solid var(--vscode-focusBorder);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: border-left-color 0.2s ease, box-shadow 0.2s ease;
}

.copy-button, .copy-issue-button, .copy-markdown-button {
  background: var(--vscode-button-secondaryBackground);
  color: var(--vscode-button-secondaryForeground);
  border: 1px solid var(--vscode-button-border);
  padding: 6px 12px;
  border-radius: var(--border-radius);
  font-size: 12px;
  transition: all var(--transition-speed) ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 28px;
  min-width: fit-content;
  white-space: nowrap;
}

.copy-button:hover, 
.copy-issue-button:hover, 
.copy-markdown-button:hover {
  background: var(--vscode-button-secondaryHoverBackground);
}

.copied {
  background: var(--vscode-badge-background) !important;
  color: var(--vscode-badge-foreground) !important;
  border-color: var(--vscode-badge-background) !important;
}

.error-message {
  background: var(--vscode-errorBackground);
  color: var(--vscode-errorForeground);
  padding: 16px;
  border-radius: var(--border-radius);
  margin-bottom: 24px;
}

.no-issues {
  text-align: center;
  padding: 32px;
  background: var(--vscode-editor-background);
  border: 1px solid var(--vscode-widget-border);
  border-radius: var(--border-radius);
  box-shadow: var(--card-shadow);
}

/* Responsive layout */
@media (max-width: 1000px) {
  .dashboard {
    grid-template-columns: 1fr;
  }
  
  .branches-row {
    flex-direction: column;
  }
  
  .header-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  
  .filter-container {
    flex-direction: column;
  }
}

/* Add horizontal scrollbar styling */
.code-snippet pre::-webkit-scrollbar,
.suggested-code::-webkit-scrollbar {
  height: 8px;
  background-color: var(--vscode-scrollbarSlider-background);
}

.code-snippet pre::-webkit-scrollbar-thumb,
.suggested-code::-webkit-scrollbar-thumb {
  background-color: var(--vscode-scrollbarSlider-hoverBackground);
  border-radius: 4px;
}

.code-snippet pre::-webkit-scrollbar-thumb:hover,
.suggested-code::-webkit-scrollbar-thumb:hover {
  background-color: var(--vscode-scrollbarSlider-activeBackground);
}`, "",{"version":3,"sources":["webpack://./src/webviews/pr-review/styles/pr-review.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --container-padding: 20px;\n  --border-radius: 8px;\n  --transition-speed: 0.2s;\n  --card-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  --hover-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n\nbody {\n  padding: 24px;\n  color: var(--vscode-foreground);\n  font-size: var(--vscode-font-size);\n  font-weight: var(--vscode-font-weight);\n  font-family: var(--vscode-font-family);\n  background-color: var(--vscode-editor-background);\n  line-height: 1.5;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\nh1 {\n  font-size: 24px;\n  margin-bottom: 24px;\n  font-weight: 600;\n}\n\nh2 {\n  font-size: 20px;\n  margin-bottom: 16px;\n  font-weight: 500;\n}\n\nh3 {\n  font-size: 16px;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n\n/* Form layout improvements */\n.form-container {\n  background: var(--vscode-editor-background);\n  border: 1px solid var(--vscode-widget-border);\n  border-radius: var(--border-radius);\n  padding: 20px;\n  margin-bottom: 32px;\n  box-shadow: var(--card-shadow);\n}\n\n.header-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.header-row h2 {\n  margin: 0;\n}\n\n.model-selector {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.branches-row {\n  display: flex;\n  gap: 20px;\n  margin-bottom: 20px;\n}\n\n.branch-selector {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.button-container {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.review-pr-button {\n  background: var(--vscode-button-background);\n  color: var(--vscode-button-foreground);\n  border: none;\n  padding: 8px 16px;\n  font-weight: 500;\n}\n\n.review-pr-button:hover:not(:disabled) {\n  background: var(--vscode-button-hoverBackground);\n}\n\n/* Progress indicator styles */\n.progress-container {\n  margin: 20px 0;\n  padding: 15px;\n  background-color: var(--vscode-editor-background);\n  border: 1px solid var(--vscode-panel-border);\n  border-radius: 4px;\n}\n\n.progress-header {\n  margin-bottom: 10px;\n  font-weight: 500;\n}\n\n.progress-bar-container {\n  height: 8px;\n  background-color: var(--vscode-input-background);\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 10px;\n}\n\n.progress-bar {\n  height: 100%;\n  background-color: var(--vscode-progressBar-background);\n  transition: width 0.3s ease;\n}\n\n.progress-current-file {\n  font-size: 0.9em;\n  color: var(--vscode-descriptionForeground);\n  margin-top: 8px;\n}\n\n/* Dashboard styles */\n.dashboard {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 20px;\n  margin-bottom: 24px;\n}\n\n.dashboard-section {\n  background: var(--vscode-editor-background);\n  border: 1px solid var(--vscode-widget-border);\n  border-radius: var(--border-radius);\n  padding: 16px;\n  box-shadow: var(--card-shadow);\n}\n\n.dashboard-section h3 {\n  margin-top: 0;\n  margin-bottom: 16px;\n  font-size: 16px;\n  font-weight: 500;\n  border-bottom: 1px solid var(--vscode-widget-border);\n  padding-bottom: 8px;\n}\n\n.progress-stats, .severity-stats, .category-stats {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.stat-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.stat-label {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.stat-value {\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.severity-dot {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n}\n\n.severity-stat.severity-critical .severity-dot {\n  background-color: var(--vscode-errorForeground);\n}\n\n.severity-stat.severity-high .severity-dot {\n  background-color: var(--vscode-testing-iconFailed);\n}\n\n.severity-stat.severity-medium .severity-dot {\n  background-color: var(--vscode-testing-iconSkipped);\n}\n\n.severity-stat.severity-low .severity-dot {\n  background-color: var(--vscode-testing-iconQueued);\n}\n\n.dashboard-progress {\n  margin-top: 12px;\n  height: 6px;\n}\n\n/* Severity chart styles */\n.severity-chart {\n  margin-bottom: 16px;\n}\n\n.stacked-bar {\n  display: flex;\n  width: 100%;\n  height: 24px;\n  border-radius: var(--border-radius);\n  overflow: hidden;\n}\n\n.severity-bar {\n  height: 100%;\n  transition: width 0.3s ease;\n}\n\n.severity-bar.severity-critical {\n  background-color: var(--vscode-errorForeground);\n}\n\n.severity-bar.severity-high {\n  background-color: var(--vscode-testing-iconFailed);\n}\n\n.severity-bar.severity-medium {\n  background-color: var(--vscode-testing-iconSkipped);\n}\n\n.severity-bar.severity-low {\n  background-color: var(--vscode-testing-iconQueued);\n}\n\n.no-data {\n  text-align: center;\n  color: var(--vscode-descriptionForeground);\n  font-style: italic;\n  padding: 12px;\n}\n\n/* Collapsible summary section */\n.summary-container {\n  margin-bottom: 24px;\n}\n\n.summary-toggle {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 16px;\n  background: var(--vscode-editor-background);\n  border: 1px solid var(--vscode-widget-border);\n  border-radius: var(--border-radius);\n  cursor: pointer;\n  box-shadow: var(--card-shadow);\n  transition: background-color 0.2s ease;\n}\n\n.summary-toggle:hover {\n  background-color: var(--vscode-list-hoverBackground);\n}\n\n.summary-toggle h2 {\n  margin: 0;\n}\n\n.toggle-icon {\n  font-size: 14px;\n  transition: transform 0.2s ease;\n}\n\n.pr-summary {\n  background: var(--vscode-editor-background);\n  border: 1px solid var(--vscode-widget-border);\n  border-radius: var(--border-radius);\n  padding: 24px;\n  margin-top: 1px;\n  box-shadow: var(--card-shadow);\n}\n\n.summary-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--vscode-widget-border);\n  gap: 16px;\n}\n\n.summary-section {\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--vscode-widget-border);\n}\n\n.summary-section:last-child {\n  border-bottom: none;\n  margin-bottom: 0;\n  padding-bottom: 0;\n}\n\n.critical-issues li {\n  color: var(--vscode-errorForeground);\n}\n\n/* Filter bar styles */\n.filter-bar {\n  background: var(--vscode-editor-background);\n  border: 1px solid var(--vscode-widget-border);\n  border-radius: var(--border-radius);\n  padding: 16px;\n  margin-bottom: 16px;\n  box-shadow: var(--card-shadow);\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.search-container {\n  width: 100%;\n}\n\n.search-input {\n  width: 100%;\n  padding: 8px 12px;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--vscode-input-border);\n  background: var(--vscode-input-background);\n  color: var(--vscode-input-foreground);\n  font-size: 14px;\n}\n\n.search-input:focus {\n  border-color: var(--vscode-focusBorder);\n  outline: none;\n}\n\n.filter-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n\n.filter-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 150px;\n}\n\n.filter-select {\n  padding: 6px 10px;\n  border-radius: var(--border-radius);\n  border: 1px solid var(--vscode-dropdown-border);\n  background: var(--vscode-dropdown-background);\n  color: var(--vscode-dropdown-foreground);\n  font-size: 13px;\n}\n\n/* Issues section */\n.issues-section {\n  margin-bottom: 24px;\n}\n\n.issues-heading {\n  margin-bottom: 16px;\n}\n\n.filtered-count {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n  padding: 5px 10px;\n  background-color: var(--vscode-editor-background);\n  border-radius: 4px;\n  font-size: 14px;\n  color: var(--vscode-descriptionForeground);\n}\n\n/* Keyboard shortcuts */\n.keyboard-shortcuts {\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 0.9em;\n  color: var(--vscode-descriptionForeground);\n}\n\n.keyboard-shortcuts kbd {\n  display: inline-block;\n  padding: 2px 5px;\n  font-family: var(--vscode-editor-font-family);\n  font-size: 0.9em;\n  line-height: 1;\n  color: var(--vscode-editor-foreground);\n  background-color: var(--vscode-button-secondaryBackground);\n  border-radius: 3px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  margin: 0 2px;\n}\n\n.issues-container {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.issue {\n  background: var(--vscode-input-background);\n  border-radius: var(--border-radius);\n  padding: 12px;\n  transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;\n}\n\n.issue:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--hover-shadow);\n}\n\n.issue-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n  gap: 12px;\n}\n\n.issue-header-left {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.issue-severity {\n  padding: 4px 12px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.issue-severity-critical {\n  background-color: var(--vscode-errorForeground);\n  color: var(--vscode-editor-background);\n}\n\n.issue-severity-high {\n  background-color: var(--vscode-testing-iconFailed);\n  color: var(--vscode-editor-background);\n}\n\n.issue-severity-medium {\n  background-color: var(--vscode-testing-iconSkipped);\n  color: var(--vscode-editor-background);\n}\n\n.issue-severity-low {\n  background-color: var(--vscode-testing-iconQueued);\n  color: var(--vscode-editor-background);\n}\n\n.issue-category {\n  font-size: 12px;\n  padding: 4px 12px;\n  border-radius: 12px;\n  background: var(--vscode-button-secondaryBackground);\n  color: var(--vscode-button-secondaryForeground);\n}\n\n.issue-actions {\n  display: flex;\n  gap: 8px;\n}\n\n.issue-description {\n  margin-bottom: 12px;\n}\n\n.issue-file-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  background: var(--vscode-textBlockQuote-background);\n  border-radius: var(--border-radius);\n  font-family: var(--vscode-editor-font-family);\n  font-size: 13px;\n  cursor: pointer;\n  transition: background var(--transition-speed) ease;\n  margin-bottom: 12px;\n}\n\n.issue-file-link:hover {\n  background: var(--vscode-list-hoverBackground);\n}\n\n.code-snippet {\n  background: var(--vscode-textBlockQuote-background);\n  border-radius: var(--border-radius);\n  margin: 8px 0;\n  max-width: 100%;\n  overflow: hidden;\n}\n\n.code-snippet pre {\n  margin: 0;\n  padding: 10px;\n  font-family: var(--vscode-editor-font-family);\n  font-size: 13px;\n  line-height: 1.5;\n  overflow-x: auto;\n  white-space: pre-wrap;\n  word-break: break-all;\n}\n\n.issue-suggestion {\n  margin: 12px 0;\n  padding: 12px;\n  background: var(--vscode-textBlockQuote-background);\n  border-radius: var(--border-radius);\n}\n\n.suggested-code-container {\n  margin-top: 16px;\n  background: var(--vscode-editor-background);\n  border-radius: var(--border-radius);\n  overflow: hidden;\n  max-width: 100%;\n}\n\n.suggestion-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 16px;\n  background: var(--vscode-button-secondaryBackground);\n}\n\n.suggestion-header strong {\n  margin: 0;\n  font-size: 13px;\n}\n\n.suggested-code {\n  padding: 16px;\n  margin: 0;\n  font-family: var(--vscode-editor-font-family);\n  font-size: 13px;\n  line-height: 1.5;\n  overflow-x: auto;\n  white-space: pre-wrap;\n  word-break: break-all;\n  max-width: 100%;\n}\n\n.issue-justification {\n  margin: 12px 0;\n  padding: 12px;\n  background: var(--vscode-textBlockQuote-background);\n  border-radius: var(--border-radius);\n}\n\n/* Issue review button */\n.review-button {\n  background: var(--vscode-button-secondaryBackground);\n  color: var(--vscode-button-secondaryForeground);\n  border: 1px solid var(--vscode-button-border);\n  padding: 6px 12px;\n  border-radius: var(--border-radius);\n  font-size: 12px;\n  transition: all var(--transition-speed) ease;\n  white-space: nowrap;\n}\n\n.review-button:hover {\n  background: var(--vscode-button-secondaryHoverBackground);\n}\n\n.review-button.reviewed {\n  background: var(--vscode-badge-background);\n  color: var(--vscode-badge-foreground);\n  border-color: var(--vscode-badge-background);\n}\n\n.issue-reviewed {\n  opacity: 0.7;\n  border-left: 4px solid var(--vscode-badge-background);\n}\n\n/* Focused issue */\n.issue-focused {\n  border-left: 3px solid var(--vscode-focusBorder);\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  transition: border-left-color 0.2s ease, box-shadow 0.2s ease;\n}\n\n.copy-button, .copy-issue-button, .copy-markdown-button {\n  background: var(--vscode-button-secondaryBackground);\n  color: var(--vscode-button-secondaryForeground);\n  border: 1px solid var(--vscode-button-border);\n  padding: 6px 12px;\n  border-radius: var(--border-radius);\n  font-size: 12px;\n  transition: all var(--transition-speed) ease;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 28px;\n  min-width: fit-content;\n  white-space: nowrap;\n}\n\n.copy-button:hover, \n.copy-issue-button:hover, \n.copy-markdown-button:hover {\n  background: var(--vscode-button-secondaryHoverBackground);\n}\n\n.copied {\n  background: var(--vscode-badge-background) !important;\n  color: var(--vscode-badge-foreground) !important;\n  border-color: var(--vscode-badge-background) !important;\n}\n\n.error-message {\n  background: var(--vscode-errorBackground);\n  color: var(--vscode-errorForeground);\n  padding: 16px;\n  border-radius: var(--border-radius);\n  margin-bottom: 24px;\n}\n\n.no-issues {\n  text-align: center;\n  padding: 32px;\n  background: var(--vscode-editor-background);\n  border: 1px solid var(--vscode-widget-border);\n  border-radius: var(--border-radius);\n  box-shadow: var(--card-shadow);\n}\n\n/* Responsive layout */\n@media (max-width: 1000px) {\n  .dashboard {\n    grid-template-columns: 1fr;\n  }\n  \n  .branches-row {\n    flex-direction: column;\n  }\n  \n  .header-row {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  \n  .filter-container {\n    flex-direction: column;\n  }\n}\n\n/* Add horizontal scrollbar styling */\n.code-snippet pre::-webkit-scrollbar,\n.suggested-code::-webkit-scrollbar {\n  height: 8px;\n  background-color: var(--vscode-scrollbarSlider-background);\n}\n\n.code-snippet pre::-webkit-scrollbar-thumb,\n.suggested-code::-webkit-scrollbar-thumb {\n  background-color: var(--vscode-scrollbarSlider-hoverBackground);\n  border-radius: 4px;\n}\n\n.code-snippet pre::-webkit-scrollbar-thumb:hover,\n.suggested-code::-webkit-scrollbar-thumb:hover {\n  background-color: var(--vscode-scrollbarSlider-activeBackground);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/webviews/pr-review/PrReviewApp.tsx":
/*!************************************************!*\
  !*** ./src/webviews/pr-review/PrReviewApp.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrReviewApp: () => (/* binding */ PrReviewApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/hooks/useVSCodeAPI */ "./src/webviews/shared/hooks/useVSCodeAPI.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components */ "./src/webviews/shared/components/index.ts");
/* harmony import */ var _components_ReviewConfiguration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ReviewConfiguration */ "./src/webviews/pr-review/components/ReviewConfiguration.tsx");
/* harmony import */ var _components_ProgressIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ProgressIndicator */ "./src/webviews/pr-review/components/ProgressIndicator.tsx");
/* harmony import */ var _components_ReviewDashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ReviewDashboard */ "./src/webviews/pr-review/components/ReviewDashboard.tsx");
/* harmony import */ var _components_ReviewSummary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ReviewSummary */ "./src/webviews/pr-review/components/ReviewSummary.tsx");
/* harmony import */ var _components_IssuesList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/IssuesList */ "./src/webviews/pr-review/components/IssuesList.tsx");
/* harmony import */ var _components_FilterBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/FilterBar */ "./src/webviews/pr-review/components/FilterBar.tsx");










function PrReviewApp() {
    const { postMessage, getState, setState } = (0,_shared_hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__.useVSCodeAPI)();
    const { isLoading, startLoading, stopLoading } = (0,_shared_hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__.useLoadingState)();
    const { error, setError, clearError } = (0,_shared_hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__.useErrorState)();
    // Branch and model state
    const [branches, setBranches] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [currentBranch, setCurrentBranch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [sourceBranch, setSourceBranch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [targetBranch, setTargetBranch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [selectedModel, setSelectedModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [models, setModels] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    // Review state
    const [reviewResult, setReviewResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [currentReviewKey, setCurrentReviewKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    // UI state with persistence
    const [reviewState, setReviewState] = (0,_shared_hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__.useWebviewState)({
        reviewedIssues: [],
        searchQuery: '',
        severityFilter: 'All',
        categoryFilter: 'All',
        showReviewed: false,
        isSummaryCollapsed: false,
    });
    // Load models from shared config
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const sharedConfig = window.sharedModelConfig;
        if (sharedConfig?.models) {
            setModels(sharedConfig.models);
        }
    }, []);
    // Request branches on mount
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        postMessage({ command: 'getBranches' });
    }, [postMessage]);
    // Handle messages from extension
    const handleMessage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((message) => {
        switch (message.command) {
            case 'branchesList':
                setBranches(message.branches || []);
                setCurrentBranch(message.currentBranch || '');
                setSourceBranch(message.currentBranch || '');
                if (message.languageModel) {
                    setSelectedModel(message.languageModel);
                }
                // Set target branch
                const branches = message.branches || [];
                if (message.defaultTargetBranch && branches.includes(message.defaultTargetBranch)) {
                    setTargetBranch(message.defaultTargetBranch);
                }
                else {
                    setTargetBranch(branches.find(b => b === 'main' || b === 'master') ||
                        branches.find(b => b !== message.currentBranch) ||
                        branches[0] || '');
                }
                break;
            case 'startLoading':
                startLoading();
                clearError();
                setProgress(null);
                // Reset review state for new review
                setReviewState(prev => ({
                    ...prev,
                    reviewedIssues: [],
                    searchQuery: '',
                    severityFilter: 'All',
                    categoryFilter: 'All',
                    showReviewed: false,
                }));
                setCurrentReviewKey('');
                break;
            case 'progressUpdate':
                const update = message.update;
                if (update) {
                    setProgress({
                        completed: update.progress || 0,
                        total: update.total || 0,
                        currentFile: update.message,
                    });
                }
                else {
                    setProgress(null);
                }
                break;
            case 'reviewComplete':
                stopLoading();
                setReviewResult(message.result);
                clearError();
                setProgress(null);
                if (message.result?.reviewKey) {
                    setCurrentReviewKey(message.result.reviewKey);
                }
                break;
            case 'error':
                stopLoading();
                setError(message.message || 'An error occurred');
                setReviewResult(null);
                setProgress(null);
                break;
        }
    }, [startLoading, stopLoading, clearError, setError, setReviewState]);
    (0,_shared_hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__.useMessageListener)(handleMessage);
    // Load saved reviewed issues when review is complete
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (currentReviewKey && reviewResult) {
            try {
                const savedState = getState() || {};
                const savedReviewed = savedState[currentReviewKey] || [];
                if (savedReviewed.length > 0) {
                    setReviewState(prev => ({
                        ...prev,
                        reviewedIssues: savedReviewed,
                    }));
                }
            }
            catch (e) {
                console.error('Failed to load saved review state:', e);
            }
        }
    }, [currentReviewKey, reviewResult, getState, setReviewState]);
    const handleReview = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        if (sourceBranch === targetBranch) {
            setError('Source and target branches must be different');
            return;
        }
        setReviewResult(null);
        clearError();
        postMessage({
            command: 'reviewPr',
            sourceBranch,
            targetBranch,
            modelFamily: selectedModel,
        });
    }, [sourceBranch, targetBranch, selectedModel, setError, clearError, postMessage]);
    const handleMarkAsReviewed = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((issue) => {
        const issueId = `${issue.filePath}:${issue.severity}:${issue.description}`;
        setReviewState(prev => {
            const newReviewedIssues = [...prev.reviewedIssues];
            const index = newReviewedIssues.indexOf(issueId);
            if (index >= 0) {
                newReviewedIssues.splice(index, 1);
            }
            else {
                newReviewedIssues.push(issueId);
            }
            // Save to storage if we have a review key
            if (currentReviewKey) {
                try {
                    const savedState = getState() || {};
                    savedState[currentReviewKey] = newReviewedIssues;
                    setState(savedState);
                }
                catch (e) {
                    console.error('Failed to save review state:', e);
                }
            }
            return {
                ...prev,
                reviewedIssues: newReviewedIssues,
            };
        });
    }, [currentReviewKey, getState, setState, setReviewState]);
    // Calculate statistics
    const stats = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        if (!reviewResult?.issues)
            return null;
        const reviewedSet = new Set(reviewState.reviewedIssues);
        const stats = {
            total: reviewResult.issues.length,
            reviewed: reviewedSet.size,
            pending: reviewResult.issues.length - reviewedSet.size,
            bySeverity: {
                Critical: 0,
                High: 0,
                Medium: 0,
                Low: 0,
            },
            byCategory: {},
        };
        reviewResult.issues.forEach(issue => {
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
    }, [reviewResult, reviewState.reviewedIssues]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "container", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ReviewConfiguration__WEBPACK_IMPORTED_MODULE_4__.ReviewConfiguration, { branches: branches, currentBranch: currentBranch, sourceBranch: sourceBranch, targetBranch: targetBranch, selectedModel: selectedModel, models: models, isLoading: isLoading, onSourceBranchChange: setSourceBranch, onTargetBranchChange: setTargetBranch, onModelChange: setSelectedModel, onReview: handleReview }), isLoading && progress && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ProgressIndicator__WEBPACK_IMPORTED_MODULE_5__.ProgressIndicator, { progress: progress })), isLoading && !progress && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components__WEBPACK_IMPORTED_MODULE_3__.LoadingSpinner, { message: "Analyzing PR changes..." })), error && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "error-message", children: error })), !isLoading && !error && reviewResult && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ReviewDashboard__WEBPACK_IMPORTED_MODULE_6__.ReviewDashboard, { stats: stats }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ReviewSummary__WEBPACK_IMPORTED_MODULE_7__.ReviewSummary, { summary: reviewResult.summary, isCollapsed: reviewState.isSummaryCollapsed, onToggleCollapse: () => setReviewState(prev => ({
                            ...prev,
                            isSummaryCollapsed: !prev.isSummaryCollapsed,
                        })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "issues-section", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { className: "issues-heading", children: "Issues" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_FilterBar__WEBPACK_IMPORTED_MODULE_9__.FilterBar, { searchQuery: reviewState.searchQuery, severityFilter: reviewState.severityFilter, categoryFilter: reviewState.categoryFilter, showReviewed: reviewState.showReviewed, reviewResult: reviewResult, onSearchChange: (query) => setReviewState(prev => ({ ...prev, searchQuery: query })), onSeverityFilterChange: (filter) => setReviewState(prev => ({ ...prev, severityFilter: filter })), onCategoryFilterChange: (filter) => setReviewState(prev => ({ ...prev, categoryFilter: filter })), onShowReviewedChange: (show) => setReviewState(prev => ({ ...prev, showReviewed: show })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_IssuesList__WEBPACK_IMPORTED_MODULE_8__.IssuesList, { issues: reviewResult.issues, searchQuery: reviewState.searchQuery, severityFilter: reviewState.severityFilter, categoryFilter: reviewState.categoryFilter, showReviewed: reviewState.showReviewed, reviewedIssues: new Set(reviewState.reviewedIssues), onMarkAsReviewed: handleMarkAsReviewed })] })] }))] }));
}


/***/ }),

/***/ "./src/webviews/pr-review/components/FilterBar.tsx":
/*!*********************************************************!*\
  !*** ./src/webviews/pr-review/components/FilterBar.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterBar: () => (/* binding */ FilterBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function FilterBar({ searchQuery, severityFilter, categoryFilter, showReviewed, reviewResult, onSearchChange, onSeverityFilterChange, onCategoryFilterChange, onShowReviewedChange, }) {
    // Extract all unique categories from issues
    const categories = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        if (!reviewResult?.issues)
            return [];
        const uniqueCategories = new Set();
        reviewResult.issues.forEach((issue) => {
            if (issue.category) {
                uniqueCategories.add(issue.category);
            }
        });
        return ['All', ...Array.from(uniqueCategories)];
    }, [reviewResult]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "filter-bar", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "search-container", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", placeholder: "Search issues...", value: searchQuery, onChange: (e) => onSearchChange(e.target.value), className: "search-input" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "filter-container", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "filter-group", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { htmlFor: "severityFilter", children: "Severity:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { id: "severityFilter", value: severityFilter, onChange: (e) => onSeverityFilterChange(e.target.value), className: "filter-select", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "All", children: "All Severities" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "Critical", children: "Critical" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "High", children: "High" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "Medium", children: "Medium" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "Low", children: "Low" })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "filter-group", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { htmlFor: "categoryFilter", children: "Category:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", { id: "categoryFilter", value: categoryFilter, onChange: (e) => onCategoryFilterChange(e.target.value), className: "filter-select", children: categories.map((category) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: category, children: category }, category))) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "filter-group", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { htmlFor: "statusFilter", children: "Status:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { id: "statusFilter", value: showReviewed ? 'reviewed' : 'pending', onChange: (e) => onShowReviewedChange(e.target.value === 'reviewed'), className: "filter-select", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "pending", children: "Pending" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "reviewed", children: "Done" })] })] })] })] }));
}


/***/ }),

/***/ "./src/webviews/pr-review/components/IssuesList.tsx":
/*!**********************************************************!*\
  !*** ./src/webviews/pr-review/components/IssuesList.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IssuesList: () => (/* binding */ IssuesList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/hooks/useVSCodeAPI */ "./src/webviews/shared/hooks/useVSCodeAPI.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components */ "./src/webviews/shared/components/index.ts");




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
function IssueItem({ issue, isReviewed, isFocused, onMarkAsReviewed, onNavigateToFile }) {
    const [isCopied, setIsCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const formatIssueAsMarkdown = (issue) => {
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
        }
        catch (error) {
            console.error('Failed to copy to clipboard:', error);
        }
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: `issue ${isReviewed ? 'issue-reviewed' : ''} ${isFocused ? 'issue-focused' : ''}`, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "issue-header", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "issue-header-left", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: `issue-severity issue-severity-${issue.severity.toLowerCase()}`, children: [severityEmojis[issue.severity], " ", issue.severity] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "issue-category", children: [categoryEmojis[issue.category] || categoryEmojis['Other'], " ", issue.category] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "issue-actions", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared_components__WEBPACK_IMPORTED_MODULE_3__.Button, { variant: "secondary", size: "small", onClick: handleCopyIssue, className: "copy-issue-button", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: isCopied ? 'check' : 'copy', size: 14 }), isCopied ? 'Copied!' : 'Copy'] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared_components__WEBPACK_IMPORTED_MODULE_3__.Button, { variant: "secondary", size: "small", onClick: onMarkAsReviewed, className: `review-button ${isReviewed ? 'reviewed' : ''}`, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: isReviewed ? 'check' : 'circle', size: 14 }), isReviewed ? 'Done' : 'Mark Done'] })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "issue-description", children: issue.description }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "issue-file-link", onClick: onNavigateToFile, role: "button", tabIndex: 0, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "file", size: 14 }), issue.filePath, ":", issue.lineNumber || '?'] }), issue.lineContext && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "code-snippet", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("pre", { children: [issue.lineContext.linesBefore?.join('\n'), issue.lineContext.linesBefore && '\n', issue.lineContext.codeSnippet, issue.lineContext.linesAfter && '\n', issue.lineContext.linesAfter?.join('\n')] }) })), issue.suggestion && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "issue-suggestion", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "Suggestion:" }), " ", issue.suggestion] })), issue.suggestedCode && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "suggested-code-container", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "suggestion-header", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "Suggested Implementation:" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { className: "suggested-code", children: issue.suggestedCode })] })), issue.justification && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "issue-justification", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: "Why:" }), " ", issue.justification] }))] }));
}
function IssuesList({ issues, searchQuery, severityFilter, categoryFilter, showReviewed, reviewedIssues, onMarkAsReviewed, }) {
    const { postMessage } = (0,_shared_hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__.useVSCodeAPI)();
    const [focusedIssueIndex, setFocusedIssueIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
    // Filter issues based on search query and filters
    const filteredIssues = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
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
                return ((issue.description && issue.description.toLowerCase().includes(searchLower)) ||
                    (issue.filePath && issue.filePath.toLowerCase().includes(searchLower)) ||
                    (issue.suggestion && issue.suggestion.toLowerCase().includes(searchLower)) ||
                    (issue.category && issue.category.toLowerCase().includes(searchLower)));
            }
            return true;
        });
    }, [issues, searchQuery, severityFilter, categoryFilter, reviewedIssues, showReviewed]);
    // Handle keyboard navigation
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        const handleKeyDown = (e) => {
            // Only handle keyboard shortcuts when issues are visible
            if (filteredIssues.length === 0)
                return;
            switch (e.key) {
                case 'k': // Next issue
                    setFocusedIssueIndex((prev) => prev < filteredIssues.length - 1 ? prev + 1 : prev);
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
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        setFocusedIssueIndex(filteredIssues.length > 0 ? 0 : -1);
    }, [filteredIssues.length]);
    const handleNavigateToFile = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((issue) => {
        postMessage({
            command: 'navigateToFile',
            filePath: issue.filePath,
            lineNumber: issue.lineNumber,
        });
    }, [postMessage]);
    if (filteredIssues.length === 0) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "no-issues", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: showReviewed ? 'No Done Issues' : 'No Pending Issues' }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: showReviewed
                        ? "You haven't marked any issues as done yet."
                        : searchQuery || severityFilter !== 'All' || categoryFilter !== 'All'
                            ? 'No issues match the current filters.'
                            : 'Great job! The code review found no significant issues.' })] }));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "filtered-count", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: ["Showing ", filteredIssues.length, " ", showReviewed ? 'done' : 'pending', " issues"] }), filteredIssues.length > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "keyboard-shortcuts", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "Keyboard shortcuts: " }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("kbd", { children: "j" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: " previous, " }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("kbd", { children: "k" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: " next, " }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("kbd", { children: "d" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: " mark as done, " }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("kbd", { children: "f" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: " go to file" })] }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "issues-container", children: filteredIssues.map((issue, index) => {
                    const issueId = `${issue.filePath}:${issue.severity}:${issue.description}`;
                    const isReviewed = reviewedIssues.has(issueId);
                    const isFocused = index === focusedIssueIndex;
                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IssueItem, { issue: issue, isReviewed: isReviewed, isFocused: isFocused, onMarkAsReviewed: () => onMarkAsReviewed(issue), onNavigateToFile: () => handleNavigateToFile(issue) }, issueId));
                }) })] }));
}


/***/ }),

/***/ "./src/webviews/pr-review/components/ProgressIndicator.tsx":
/*!*****************************************************************!*\
  !*** ./src/webviews/pr-review/components/ProgressIndicator.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressIndicator: () => (/* binding */ ProgressIndicator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js");

function ProgressIndicator({ progress }) {
    if (!progress)
        return null;
    const { completed, total, currentFile } = progress;
    const percent = Math.floor((completed / total) * 100);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "progress-container", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "progress-header", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: ["Processing ", completed, " of ", total, " file groups (", percent, "%)"] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "progress-bar-container", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "progress-bar", style: { width: `${percent}%` } }) }), currentFile && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "progress-current-file", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: ["Currently processing: ", currentFile] }) }))] }));
}


/***/ }),

/***/ "./src/webviews/pr-review/components/ReviewConfiguration.tsx":
/*!*******************************************************************!*\
  !*** ./src/webviews/pr-review/components/ReviewConfiguration.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewConfiguration: () => (/* binding */ ReviewConfiguration)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components */ "./src/webviews/shared/components/index.ts");


function ReviewConfiguration({ branches, currentBranch, sourceBranch, targetBranch, selectedModel, models, isLoading, onSourceBranchChange, onTargetBranchChange, onModelChange, onReview, }) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "form-container", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "header-row", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { children: "PR Review Assistant" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "model-selector", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components__WEBPACK_IMPORTED_MODULE_1__.ModelSelector, { selectedModel: selectedModel, onModelChange: onModelChange, models: models }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "branches-row", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "branch-selector", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { htmlFor: "sourceBranch", children: "Source Branch (with changes):" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", { id: "sourceBranch", value: sourceBranch, onChange: (e) => onSourceBranchChange(e.target.value), disabled: isLoading, children: branches.map((branch) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: branch, children: branch + (branch === currentBranch ? ' (current)' : '') }, branch))) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "branch-selector", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { htmlFor: "targetBranch", children: "Target Branch (base branch):" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", { id: "targetBranch", value: targetBranch, onChange: (e) => onTargetBranchChange(e.target.value), children: branches.map((branch) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: branch, children: branch }, branch))) })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "button-container", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "primary", onClick: onReview, disabled: isLoading, loading: isLoading, className: "review-pr-button", children: isLoading ? 'Reviewing...' : 'Review PR Changes' }) })] }));
}


/***/ }),

/***/ "./src/webviews/pr-review/components/ReviewDashboard.tsx":
/*!***************************************************************!*\
  !*** ./src/webviews/pr-review/components/ReviewDashboard.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewDashboard: () => (/* binding */ ReviewDashboard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SeverityChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SeverityChart */ "./src/webviews/pr-review/components/SeverityChart.tsx");



const categoryEmojis = {
    Security: '🔒',
    'Code Style': '🎨',
    Performance: '⚡',
    'Breaking Change': '💥',
    'Logical Error': '🐛',
    'Testing Gap': '🧪',
    Other: '📝',
};
function ReviewDashboard({ stats }) {
    if (!stats)
        return null;
    // Calculate percentages for the severity chart
    const severityPercentages = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
        if (!stats.total)
            return [];
        return Object.entries(stats.bySeverity).map(([severity, count]) => ({
            severity,
            count,
            percentage: (count / stats.total) * 100,
        }));
    }, [stats]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "dashboard", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "dashboard-section", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "Review Progress" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "progress-stats", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "stat-item", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "stat-label", children: "Total Issues" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "stat-value", children: stats.total })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "stat-item", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "stat-label", children: "Reviewed" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "stat-value", children: stats.reviewed })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "stat-item", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "stat-label", children: "Pending" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "stat-value", children: stats.pending })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "progress-bar-container dashboard-progress", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "progress-bar", style: {
                                        width: `${stats.total > 0 ? (stats.reviewed / stats.total) * 100 : 0}%`
                                    } }) })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "dashboard-section", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "Issues by Severity" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_SeverityChart__WEBPACK_IMPORTED_MODULE_2__.SeverityChart, { severityPercentages: severityPercentages }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "severity-stats", children: Object.entries(stats.bySeverity).map(([severity, count]) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: `stat-item severity-stat severity-${severity.toLowerCase()}`, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "stat-label", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "severity-dot" }), severity] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "stat-value", children: count })] }, severity))) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "dashboard-section", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "Issues by Category" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "category-stats", children: Object.entries(stats.byCategory)
                            .sort((a, b) => b[1] - a[1]) // Sort by count descending
                            .map(([category, count]) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "stat-item category-stat", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { className: "stat-label", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: categoryEmojis[category] || categoryEmojis['Other'] }), ' ', category] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "stat-value", children: count })] }, category))) })] })] }));
}


/***/ }),

/***/ "./src/webviews/pr-review/components/ReviewSummary.tsx":
/*!*************************************************************!*\
  !*** ./src/webviews/pr-review/components/ReviewSummary.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReviewSummary: () => (/* binding */ ReviewSummary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components */ "./src/webviews/shared/components/index.ts");



function SummarySection({ title, content, items, className }) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: `summary-section ${className || ''}`, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: title }), content && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: content }), items && items.length > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { children: items.map((item, index) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: item }, index))) }))] }));
}
function ReviewSummary({ summary, isCollapsed, onToggleCollapse }) {
    const [isCopied, setIsCopied] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const formatReviewAsMarkdown = (summary) => {
        let markdown = '## Code Review Summary\n\n';
        // Add overall assessment
        markdown += '### Overall Assessment\n';
        markdown += summary.assessment + '\n\n';
        // Add strengths
        if (summary.strengths && summary.strengths.length > 0) {
            markdown += '### Key Strengths ✨\n';
            summary.strengths.forEach((strength) => {
                markdown += `* ${strength}\n`;
            });
            markdown += '\n';
        }
        // Add critical issues if any
        if (summary.criticalIssues && summary.criticalIssues.length > 0) {
            markdown += '### Critical Issues to Address 🚨\n';
            summary.criticalIssues.forEach((issue) => {
                markdown += `* ${issue}\n`;
            });
            markdown += '\n';
        }
        // Add recommendations
        if (summary.recommendations && summary.recommendations.length > 0) {
            markdown += '### Recommendations 💡\n';
            summary.recommendations.forEach((rec) => {
                markdown += `* ${rec}\n`;
            });
            markdown += '\n';
        }
        return markdown;
    };
    const handleCopyMarkdown = async () => {
        try {
            const markdown = formatReviewAsMarkdown(summary);
            await navigator.clipboard.writeText(markdown);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        }
        catch (error) {
            console.error('Failed to copy to clipboard:', error);
        }
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "summary-container", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "summary-toggle", onClick: onToggleCollapse, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { children: "Review Summary" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "toggle-icon", children: isCollapsed ? '▶' : '▼' })] }), !isCollapsed && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "pr-summary", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "summary-header", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared_components__WEBPACK_IMPORTED_MODULE_2__.Button, { variant: "secondary", size: "small", onClick: handleCopyMarkdown, className: "copy-markdown-button", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components__WEBPACK_IMPORTED_MODULE_2__.Icon, { name: isCopied ? 'check' : 'copy', size: 14 }), isCopied ? 'Copied!' : 'Copy All Review'] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SummarySection, { title: "Overall Assessment", content: summary.assessment }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SummarySection, { title: "Key Strengths", items: summary.strengths, className: "key-strengths" }), summary.criticalIssues.length > 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SummarySection, { title: "Critical Issues to Address", items: summary.criticalIssues, className: "critical-issues" })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SummarySection, { title: "Recommendations", items: summary.recommendations })] }))] }));
}


/***/ }),

/***/ "./src/webviews/pr-review/components/SeverityChart.tsx":
/*!*************************************************************!*\
  !*** ./src/webviews/pr-review/components/SeverityChart.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeverityChart: () => (/* binding */ SeverityChart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js");

function SeverityChart({ severityPercentages }) {
    if (severityPercentages.length === 0) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "severity-chart", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "no-data", children: "No issues to display" }) }));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "severity-chart", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "stacked-bar", children: severityPercentages.map(({ severity, percentage }) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: `severity-bar severity-${severity.toLowerCase()}`, style: { width: `${percentage}%` }, title: `${severity}: ${Math.round(percentage)}%` }, severity))) }) }));
}


/***/ }),

/***/ "./src/webviews/pr-review/index.tsx":
/*!******************************************!*\
  !*** ./src/webviews/pr-review/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/.pnpm/react-dom@19.1.1_react@19.1.1/node_modules/react-dom/client.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/components */ "./src/webviews/shared/components/index.ts");
/* harmony import */ var _PrReviewApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PrReviewApp */ "./src/webviews/pr-review/PrReviewApp.tsx");
/* harmony import */ var _styles_pr_review_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/pr-review.css */ "./src/webviews/pr-review/styles/pr-review.css");





// Initialize the React app
const container = document.getElementById('root');
if (container) {
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
    root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components__WEBPACK_IMPORTED_MODULE_2__.ErrorBoundary, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PrReviewApp__WEBPACK_IMPORTED_MODULE_3__.PrReviewApp, {}) }));
}
else {
    console.error('Root container not found');
}


/***/ }),

/***/ "./src/webviews/pr-review/styles/pr-review.css":
/*!*****************************************************!*\
  !*** ./src/webviews/pr-review/styles/pr-review.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/.pnpm/style-loader@4.0.0_webpack@5.101.3/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_pr_review_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./pr-review.css */ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./src/webviews/pr-review/styles/pr-review.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_pr_review_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_pr_review_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_pr_review_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_pr_review_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"pr-review": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcopilot_plus_plus"] = self["webpackChunkcopilot_plus_plus"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors","shared"], () => (__webpack_require__("./src/webviews/pr-review/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHItcmV2aWV3L3ByLXJldmlldy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDdUs7QUFDakI7QUFDdEosOEJBQThCLHNJQUEyQixDQUFDLCtJQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDhHQUE4RyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLFlBQVksTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlB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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEU7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsNEc7Ozs7O1dDaERBLG1DOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9wci1yZXZpZXcvc3R5bGVzL3ByLXJldmlldy5jc3MiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3MvcHItcmV2aWV3L1ByUmV2aWV3QXBwLnRzeCIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9wci1yZXZpZXcvY29tcG9uZW50cy9GaWx0ZXJCYXIudHN4Iiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL3ByLXJldmlldy9jb21wb25lbnRzL0lzc3Vlc0xpc3QudHN4Iiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL3ByLXJldmlldy9jb21wb25lbnRzL1Byb2dyZXNzSW5kaWNhdG9yLnRzeCIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9wci1yZXZpZXcvY29tcG9uZW50cy9SZXZpZXdDb25maWd1cmF0aW9uLnRzeCIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9wci1yZXZpZXcvY29tcG9uZW50cy9SZXZpZXdEYXNoYm9hcmQudHN4Iiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL3ByLXJldmlldy9jb21wb25lbnRzL1Jldmlld1N1bW1hcnkudHN4Iiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL3ByLXJldmlldy9jb21wb25lbnRzL1NldmVyaXR5Q2hhcnQudHN4Iiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL3ByLXJldmlldy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3MvcHItcmV2aWV3L3N0eWxlcy9wci1yZXZpZXcuY3NzP2IzM2QiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANy4xLjJfd2VicGFja0A1LjEwMS4zL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA3LjEuMl93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tY29udGFpbmVyLXBhZGRpbmc6IDIwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xuICAtLXRyYW5zaXRpb24tc3BlZWQ6IDAuMnM7XG4gIC0tY2FyZC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAtLWhvdmVyLXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbmJvZHkge1xuICBwYWRkaW5nOiAyNHB4O1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWZvcmVncm91bmQpO1xuICBmb250LXNpemU6IHZhcigtLXZzY29kZS1mb250LXNpemUpO1xuICBmb250LXdlaWdodDogdmFyKC0tdnNjb2RlLWZvbnQtd2VpZ2h0KTtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXZzY29kZS1mb250LWZhbWlseSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1lZGl0b3ItYmFja2dyb3VuZCk7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi8qIEZvcm0gbGF5b3V0IGltcHJvdmVtZW50cyAqL1xuLmZvcm0tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWVkaXRvci1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLXdpZGdldC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xufVxuXG4uaGVhZGVyLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmhlYWRlci1yb3cgaDIge1xuICBtYXJnaW46IDA7XG59XG5cbi5tb2RlbC1zZWxlY3RvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuLmJyYW5jaGVzLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmJyYW5jaC1zZWxlY3RvciB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5yZXZpZXctcHItYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tZm9yZWdyb3VuZCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5yZXZpZXctcHItYnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWJ1dHRvbi1ob3ZlckJhY2tncm91bmQpO1xufVxuXG4vKiBQcm9ncmVzcyBpbmRpY2F0b3Igc3R5bGVzICovXG4ucHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1lZGl0b3ItYmFja2dyb3VuZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1wYW5lbC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5wcm9ncmVzcy1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXQtYmFja2dyb3VuZCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLXByb2dyZXNzQmFyLWJhY2tncm91bmQpO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG59XG5cbi5wcm9ncmVzcy1jdXJyZW50LWZpbGUge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWRlc2NyaXB0aW9uRm9yZWdyb3VuZCk7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLyogRGFzaGJvYXJkIHN0eWxlcyAqL1xuLmRhc2hib2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLmRhc2hib2FyZC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWVkaXRvci1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLXdpZGdldC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgcGFkZGluZzogMTZweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xufVxuXG4uZGFzaGJvYXJkLXNlY3Rpb24gaDMge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtd2lkZ2V0LWJvcmRlcik7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi5wcm9ncmVzcy1zdGF0cywgLnNldmVyaXR5LXN0YXRzLCAuY2F0ZWdvcnktc3RhdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG5cbi5zdGF0LWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdGF0LWxhYmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5zdGF0LXZhbHVlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uc2V2ZXJpdHktZG90IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5zZXZlcml0eS1zdGF0LnNldmVyaXR5LWNyaXRpY2FsIC5zZXZlcml0eS1kb3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcbn1cblxuLnNldmVyaXR5LXN0YXQuc2V2ZXJpdHktaGlnaCAuc2V2ZXJpdHktZG90IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLXRlc3RpbmctaWNvbkZhaWxlZCk7XG59XG5cbi5zZXZlcml0eS1zdGF0LnNldmVyaXR5LW1lZGl1bSAuc2V2ZXJpdHktZG90IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLXRlc3RpbmctaWNvblNraXBwZWQpO1xufVxuXG4uc2V2ZXJpdHktc3RhdC5zZXZlcml0eS1sb3cgLnNldmVyaXR5LWRvdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS10ZXN0aW5nLWljb25RdWV1ZWQpO1xufVxuXG4uZGFzaGJvYXJkLXByb2dyZXNzIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgaGVpZ2h0OiA2cHg7XG59XG5cbi8qIFNldmVyaXR5IGNoYXJ0IHN0eWxlcyAqL1xuLnNldmVyaXR5LWNoYXJ0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnN0YWNrZWQtYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5zZXZlcml0eS1iYXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbn1cblxuLnNldmVyaXR5LWJhci5zZXZlcml0eS1jcml0aWNhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xufVxuXG4uc2V2ZXJpdHktYmFyLnNldmVyaXR5LWhpZ2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtdGVzdGluZy1pY29uRmFpbGVkKTtcbn1cblxuLnNldmVyaXR5LWJhci5zZXZlcml0eS1tZWRpdW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtdGVzdGluZy1pY29uU2tpcHBlZCk7XG59XG5cbi5zZXZlcml0eS1iYXIuc2V2ZXJpdHktbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLXRlc3RpbmctaWNvblF1ZXVlZCk7XG59XG5cbi5uby1kYXRhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWRlc2NyaXB0aW9uRm9yZWdyb3VuZCk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgcGFkZGluZzogMTJweDtcbn1cblxuLyogQ29sbGFwc2libGUgc3VtbWFyeSBzZWN0aW9uICovXG4uc3VtbWFyeS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uc3VtbWFyeS10b2dnbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWVkaXRvci1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLXdpZGdldC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xufVxuXG4uc3VtbWFyeS10b2dnbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtbGlzdC1ob3ZlckJhY2tncm91bmQpO1xufVxuXG4uc3VtbWFyeS10b2dnbGUgaDIge1xuICBtYXJnaW46IDA7XG59XG5cbi50b2dnbGUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbn1cblxuLnByLXN1bW1hcnkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtd2lkZ2V0LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcbn1cblxuLnN1bW1hcnktaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXZzY29kZS13aWRnZXQtYm9yZGVyKTtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uc3VtbWFyeS1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtd2lkZ2V0LWJvcmRlcik7XG59XG5cbi5zdW1tYXJ5LXNlY3Rpb246bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uY3JpdGljYWwtaXNzdWVzIGxpIHtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xufVxuXG4vKiBGaWx0ZXIgYmFyIHN0eWxlcyAqL1xuLmZpbHRlci1iYXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtd2lkZ2V0LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cblxuLnNlYXJjaC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlYXJjaC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1pbnB1dC1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtaW5wdXQtYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXQtZm9yZWdyb3VuZCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnNlYXJjaC1pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdnNjb2RlLWZvY3VzQm9yZGVyKTtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmZpbHRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTZweDtcbn1cblxuLmZpbHRlci1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xuICBtaW4td2lkdGg6IDE1MHB4O1xufVxuXG4uZmlsdGVyLXNlbGVjdCB7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWRyb3Bkb3duLWJvcmRlcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS1kcm9wZG93bi1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1kcm9wZG93bi1mb3JlZ3JvdW5kKTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4vKiBJc3N1ZXMgc2VjdGlvbiAqL1xuLmlzc3Vlcy1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLmlzc3Vlcy1oZWFkaW5nIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmZpbHRlcmVkLWNvdW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1kZXNjcmlwdGlvbkZvcmVncm91bmQpO1xufVxuXG4vKiBLZXlib2FyZCBzaG9ydGN1dHMgKi9cbi5rZXlib2FyZC1zaG9ydGN1dHMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWRlc2NyaXB0aW9uRm9yZWdyb3VuZCk7XG59XG5cbi5rZXlib2FyZC1zaG9ydGN1dHMga2JkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAycHggNXB4O1xuICBmb250LWZhbWlseTogdmFyKC0tdnNjb2RlLWVkaXRvci1mb250LWZhbWlseSk7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWVkaXRvci1mb3JlZ3JvdW5kKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1zZWNvbmRhcnlCYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBtYXJnaW46IDAgMnB4O1xufVxuXG4uaXNzdWVzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cblxuLmlzc3VlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWlucHV0LWJhY2tncm91bmQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgcGFkZGluZzogMTJweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpIGVhc2UsIGJveC1zaGFkb3cgdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgZWFzZTtcbn1cblxuLmlzc3VlOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiB2YXIoLS1ob3Zlci1zaGFkb3cpO1xufVxuXG4uaXNzdWUtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBnYXA6IDEycHg7XG59XG5cbi5pc3N1ZS1oZWFkZXItbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5pc3N1ZS1zZXZlcml0eSB7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5pc3N1ZS1zZXZlcml0eS1jcml0aWNhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWVkaXRvci1iYWNrZ3JvdW5kKTtcbn1cblxuLmlzc3VlLXNldmVyaXR5LWhpZ2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtdGVzdGluZy1pY29uRmFpbGVkKTtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lZGl0b3ItYmFja2dyb3VuZCk7XG59XG5cbi5pc3N1ZS1zZXZlcml0eS1tZWRpdW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtdGVzdGluZy1pY29uU2tpcHBlZCk7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpO1xufVxuXG4uaXNzdWUtc2V2ZXJpdHktbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLXRlc3RpbmctaWNvblF1ZXVlZCk7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpO1xufVxuXG4uaXNzdWUtY2F0ZWdvcnkge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDRweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtYnV0dG9uLXNlY29uZGFyeUJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1zZWNvbmRhcnlGb3JlZ3JvdW5kKTtcbn1cblxuLmlzc3VlLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cblxuLmlzc3VlLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmlzc3VlLWZpbGUtbGluayB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS10ZXh0QmxvY2tRdW90ZS1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS12c2NvZGUtZWRpdG9yLWZvbnQtZmFtaWx5KTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgZWFzZTtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmlzc3VlLWZpbGUtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS1saXN0LWhvdmVyQmFja2dyb3VuZCk7XG59XG5cbi5jb2RlLXNuaXBwZXQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtdGV4dEJsb2NrUXVvdGUtYmFja2dyb3VuZCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBtYXJnaW46IDhweCAwO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb2RlLXNuaXBwZXQgcHJlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LWZhbWlseTogdmFyKC0tdnNjb2RlLWVkaXRvci1mb250LWZhbWlseSk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbi5pc3N1ZS1zdWdnZXN0aW9uIHtcbiAgbWFyZ2luOiAxMnB4IDA7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS10ZXh0QmxvY2tRdW90ZS1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG5cbi5zdWdnZXN0ZWQtY29kZS1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uc3VnZ2VzdGlvbi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtYnV0dG9uLXNlY29uZGFyeUJhY2tncm91bmQpO1xufVxuXG4uc3VnZ2VzdGlvbi1oZWFkZXIgc3Ryb25nIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5zdWdnZXN0ZWQtY29kZSB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLXZzY29kZS1lZGl0b3ItZm9udC1mYW1pbHkpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5pc3N1ZS1qdXN0aWZpY2F0aW9uIHtcbiAgbWFyZ2luOiAxMnB4IDA7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS10ZXh0QmxvY2tRdW90ZS1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG59XG5cbi8qIElzc3VlIHJldmlldyBidXR0b24gKi9cbi5yZXZpZXctYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWJ1dHRvbi1zZWNvbmRhcnlCYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5Rm9yZWdyb3VuZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1idXR0b24tYm9yZGVyKTtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKSBlYXNlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ucmV2aWV3LWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5SG92ZXJCYWNrZ3JvdW5kKTtcbn1cblxuLnJldmlldy1idXR0b24ucmV2aWV3ZWQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtYmFkZ2UtYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtYmFkZ2UtZm9yZWdyb3VuZCk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdnNjb2RlLWJhZGdlLWJhY2tncm91bmQpO1xufVxuXG4uaXNzdWUtcmV2aWV3ZWQge1xuICBvcGFjaXR5OiAwLjc7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tdnNjb2RlLWJhZGdlLWJhY2tncm91bmQpO1xufVxuXG4vKiBGb2N1c2VkIGlzc3VlICovXG4uaXNzdWUtZm9jdXNlZCB7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tdnNjb2RlLWZvY3VzQm9yZGVyKTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IGJvcmRlci1sZWZ0LWNvbG9yIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XG59XG5cbi5jb3B5LWJ1dHRvbiwgLmNvcHktaXNzdWUtYnV0dG9uLCAuY29weS1tYXJrZG93bi1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtYnV0dG9uLXNlY29uZGFyeUJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1zZWNvbmRhcnlGb3JlZ3JvdW5kKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWJ1dHRvbi1ib3JkZXIpO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpIGVhc2U7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDZweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uY29weS1idXR0b246aG92ZXIsIFxuLmNvcHktaXNzdWUtYnV0dG9uOmhvdmVyLCBcbi5jb3B5LW1hcmtkb3duLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5SG92ZXJCYWNrZ3JvdW5kKTtcbn1cblxuLmNvcGllZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS1iYWRnZS1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWJhZGdlLWZvcmVncm91bmQpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdnNjb2RlLWJhZGdlLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWVycm9yQmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5uby1pc3N1ZXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDMycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS1lZGl0b3ItYmFja2dyb3VuZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS13aWRnZXQtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcbn1cblxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmRhc2hib2FyZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbiAgXG4gIC5icmFuY2hlcy1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgXG4gIC5oZWFkZXItcm93IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMTZweDtcbiAgfVxuICBcbiAgLmZpbHRlci1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cblxuLyogQWRkIGhvcml6b250YWwgc2Nyb2xsYmFyIHN0eWxpbmcgKi9cbi5jb2RlLXNuaXBwZXQgcHJlOjotd2Via2l0LXNjcm9sbGJhcixcbi5zdWdnZXN0ZWQtY29kZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLXNjcm9sbGJhclNsaWRlci1iYWNrZ3JvdW5kKTtcbn1cblxuLmNvZGUtc25pcHBldCBwcmU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxuLnN1Z2dlc3RlZC1jb2RlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1zY3JvbGxiYXJTbGlkZXItaG92ZXJCYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uY29kZS1zbmlwcGV0IHByZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIsXG4uc3VnZ2VzdGVkLWNvZGU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLXNjcm9sbGJhclNsaWRlci1hY3RpdmVCYWNrZ3JvdW5kKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy93ZWJ2aWV3cy9wci1yZXZpZXcvc3R5bGVzL3ByLXJldmlldy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4Qiw0Q0FBNEM7RUFDNUMsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixrQ0FBa0M7RUFDbEMsc0NBQXNDO0VBQ3RDLHNDQUFzQztFQUN0QyxpREFBaUQ7RUFDakQsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUEsNkJBQTZCO0FBQzdCO0VBQ0UsMkNBQTJDO0VBQzNDLDZDQUE2QztFQUM3QyxtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixt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REFBZ0Q7RUFDaEQsc0NBQXNDO0VBQ3RDLDZEQUE2RDtBQUMvRDs7QUFFQTtFQUNFLG9EQUFvRDtFQUNwRCwrQ0FBK0M7RUFDL0MsNkNBQTZDO0VBQzdDLGlCQUFpQjtFQUNqQixtQ0FBbUM7RUFDbkMsZUFBZTtFQUNmLDRDQUE0QztFQUM1QyxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFFBQVE7RUFDUixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UseURBQXlEO0FBQzNEOztBQUVBO0VBQ0UscURBQXFEO0VBQ3JELGdEQUFnRDtFQUNoRCx1REFBdUQ7QUFDekQ7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiwyQ0FBMkM7RUFDM0MsNkNBQTZDO0VBQzdDLG1DQUFtQztFQUNuQyw4QkFBOEI7QUFDaEM7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFNBQVM7RUFDWDs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGOztBQUVBLHFDQUFxQztBQUNyQzs7RUFFRSxXQUFXO0VBQ1gsMERBQTBEO0FBQzVEOztBQUVBOztFQUVFLCtEQUErRDtFQUMvRCxrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsZ0VBQWdFO0FBQ2xFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC0tY29udGFpbmVyLXBhZGRpbmc6IDIwcHg7XFxuICAtLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gIC0tdHJhbnNpdGlvbi1zcGVlZDogMC4ycztcXG4gIC0tY2FyZC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcbiAgLS1ob3Zlci1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWZvcmVncm91bmQpO1xcbiAgZm9udC1zaXplOiB2YXIoLS12c2NvZGUtZm9udC1zaXplKTtcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS12c2NvZGUtZm9udC13ZWlnaHQpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXZzY29kZS1mb250LWZhbWlseSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4vKiBGb3JtIGxheW91dCBpbXByb3ZlbWVudHMgKi9cXG4uZm9ybS1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWVkaXRvci1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS13aWRnZXQtYm9yZGVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XFxuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XFxufVxcblxcbi5oZWFkZXItcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLmhlYWRlci1yb3cgaDIge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubW9kZWwtc2VsZWN0b3Ige1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5icmFuY2hlcy1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5icmFuY2gtc2VsZWN0b3Ige1xcbiAgZmxleDogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5idXR0b24tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ucmV2aWV3LXByLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtYnV0dG9uLWJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tZm9yZWdyb3VuZCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5yZXZpZXctcHItYnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS1idXR0b24taG92ZXJCYWNrZ3JvdW5kKTtcXG59XFxuXFxuLyogUHJvZ3Jlc3MgaW5kaWNhdG9yIHN0eWxlcyAqL1xcbi5wcm9ncmVzcy1jb250YWluZXIge1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWVkaXRvci1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1wYW5lbC1ib3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4ucHJvZ3Jlc3MtaGVhZGVyIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ucHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1pbnB1dC1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ucHJvZ3Jlc3MtYmFyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1wcm9ncmVzc0Jhci1iYWNrZ3JvdW5kKTtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcXG59XFxuXFxuLnByb2dyZXNzLWN1cnJlbnQtZmlsZSB7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1kZXNjcmlwdGlvbkZvcmVncm91bmQpO1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbn1cXG5cXG4vKiBEYXNoYm9hcmQgc3R5bGVzICovXFxuLmRhc2hib2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdhcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcblxcbi5kYXNoYm9hcmQtc2VjdGlvbiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLXdpZGdldC1ib3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xcbn1cXG5cXG4uZGFzaGJvYXJkLXNlY3Rpb24gaDMge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXZzY29kZS13aWRnZXQtYm9yZGVyKTtcXG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XFxufVxcblxcbi5wcm9ncmVzcy1zdGF0cywgLnNldmVyaXR5LXN0YXRzLCAuY2F0ZWdvcnktc3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5zdGF0LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdGF0LWxhYmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbi5zdGF0LXZhbHVlIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi5zZXZlcml0eS1kb3Qge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5zZXZlcml0eS1zdGF0LnNldmVyaXR5LWNyaXRpY2FsIC5zZXZlcml0eS1kb3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XFxufVxcblxcbi5zZXZlcml0eS1zdGF0LnNldmVyaXR5LWhpZ2ggLnNldmVyaXR5LWRvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtdGVzdGluZy1pY29uRmFpbGVkKTtcXG59XFxuXFxuLnNldmVyaXR5LXN0YXQuc2V2ZXJpdHktbWVkaXVtIC5zZXZlcml0eS1kb3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLXRlc3RpbmctaWNvblNraXBwZWQpO1xcbn1cXG5cXG4uc2V2ZXJpdHktc3RhdC5zZXZlcml0eS1sb3cgLnNldmVyaXR5LWRvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtdGVzdGluZy1pY29uUXVldWVkKTtcXG59XFxuXFxuLmRhc2hib2FyZC1wcm9ncmVzcyB7XFxuICBtYXJnaW4tdG9wOiAxMnB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxufVxcblxcbi8qIFNldmVyaXR5IGNoYXJ0IHN0eWxlcyAqL1xcbi5zZXZlcml0eS1jaGFydCB7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4uc3RhY2tlZC1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uc2V2ZXJpdHktYmFyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcXG59XFxuXFxuLnNldmVyaXR5LWJhci5zZXZlcml0eS1jcml0aWNhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcXG59XFxuXFxuLnNldmVyaXR5LWJhci5zZXZlcml0eS1oaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS10ZXN0aW5nLWljb25GYWlsZWQpO1xcbn1cXG5cXG4uc2V2ZXJpdHktYmFyLnNldmVyaXR5LW1lZGl1bSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtdGVzdGluZy1pY29uU2tpcHBlZCk7XFxufVxcblxcbi5zZXZlcml0eS1iYXIuc2V2ZXJpdHktbG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS10ZXN0aW5nLWljb25RdWV1ZWQpO1xcbn1cXG5cXG4ubm8tZGF0YSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWRlc2NyaXB0aW9uRm9yZWdyb3VuZCk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cXG4vKiBDb2xsYXBzaWJsZSBzdW1tYXJ5IHNlY3Rpb24gKi9cXG4uc3VtbWFyeS1jb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuXFxuLnN1bW1hcnktdG9nZ2xlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWVkaXRvci1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS13aWRnZXQtYm9yZGVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XFxufVxcblxcbi5zdW1tYXJ5LXRvZ2dsZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtbGlzdC1ob3ZlckJhY2tncm91bmQpO1xcbn1cXG5cXG4uc3VtbWFyeS10b2dnbGUgaDIge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4udG9nZ2xlLWljb24ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcXG59XFxuXFxuLnByLXN1bW1hcnkge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWVkaXRvci1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS13aWRnZXQtYm9yZGVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgcGFkZGluZzogMjRweDtcXG4gIG1hcmdpbi10b3A6IDFweDtcXG4gIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcXG59XFxuXFxuLnN1bW1hcnktaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXZzY29kZS13aWRnZXQtYm9yZGVyKTtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLnN1bW1hcnktc2VjdGlvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLXdpZGdldC1ib3JkZXIpO1xcbn1cXG5cXG4uc3VtbWFyeS1zZWN0aW9uOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuXFxuLmNyaXRpY2FsLWlzc3VlcyBsaSB7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XFxufVxcblxcbi8qIEZpbHRlciBiYXIgc3R5bGVzICovXFxuLmZpbHRlci1iYXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWVkaXRvci1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS13aWRnZXQtYm9yZGVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLnNlYXJjaC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWlucHV0LWJvcmRlcik7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtaW5wdXQtYmFja2dyb3VuZCk7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0LWZvcmVncm91bmQpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0OmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdnNjb2RlLWZvY3VzQm9yZGVyKTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5maWx0ZXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbi5maWx0ZXItZ3JvdXAge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDhweDtcXG4gIG1pbi13aWR0aDogMTUwcHg7XFxufVxcblxcbi5maWx0ZXItc2VsZWN0IHtcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtZHJvcGRvd24tYm9yZGVyKTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS1kcm9wZG93bi1iYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZHJvcGRvd24tZm9yZWdyb3VuZCk7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi8qIElzc3VlcyBzZWN0aW9uICovXFxuLmlzc3Vlcy1zZWN0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcblxcbi5pc3N1ZXMtaGVhZGluZyB7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4uZmlsdGVyZWQtY291bnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWVkaXRvci1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZGVzY3JpcHRpb25Gb3JlZ3JvdW5kKTtcXG59XFxuXFxuLyogS2V5Ym9hcmQgc2hvcnRjdXRzICovXFxuLmtleWJvYXJkLXNob3J0Y3V0cyB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWRlc2NyaXB0aW9uRm9yZWdyb3VuZCk7XFxufVxcblxcbi5rZXlib2FyZC1zaG9ydGN1dHMga2JkIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDJweCA1cHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tdnNjb2RlLWVkaXRvci1mb250LWZhbWlseSk7XFxuICBmb250LXNpemU6IDAuOWVtO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWVkaXRvci1mb3JlZ3JvdW5kKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5QmFja2dyb3VuZCk7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgbWFyZ2luOiAwIDJweDtcXG59XFxuXFxuLmlzc3Vlcy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbi5pc3N1ZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtaW5wdXQtYmFja2dyb3VuZCk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgZWFzZSwgYm94LXNoYWRvdyB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKSBlYXNlO1xcbn1cXG5cXG4uaXNzdWU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0taG92ZXItc2hhZG93KTtcXG59XFxuXFxuLmlzc3VlLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICBnYXA6IDEycHg7XFxufVxcblxcbi5pc3N1ZS1oZWFkZXItbGVmdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uaXNzdWUtc2V2ZXJpdHkge1xcbiAgcGFkZGluZzogNHB4IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcblxcbi5pc3N1ZS1zZXZlcml0eS1jcml0aWNhbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uaXNzdWUtc2V2ZXJpdHktaGlnaCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtdGVzdGluZy1pY29uRmFpbGVkKTtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uaXNzdWUtc2V2ZXJpdHktbWVkaXVtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS10ZXN0aW5nLWljb25Ta2lwcGVkKTtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uaXNzdWUtc2V2ZXJpdHktbG93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS10ZXN0aW5nLWljb25RdWV1ZWQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lZGl0b3ItYmFja2dyb3VuZCk7XFxufVxcblxcbi5pc3N1ZS1jYXRlZ29yeSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBwYWRkaW5nOiA0cHggMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtYnV0dG9uLXNlY29uZGFyeUJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5Rm9yZWdyb3VuZCk7XFxufVxcblxcbi5pc3N1ZS1hY3Rpb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLmlzc3VlLWRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxufVxcblxcbi5pc3N1ZS1maWxlLWxpbmsge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS10ZXh0QmxvY2tRdW90ZS1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXZzY29kZS1lZGl0b3ItZm9udC1mYW1pbHkpO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKSBlYXNlO1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG59XFxuXFxuLmlzc3VlLWZpbGUtbGluazpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtbGlzdC1ob3ZlckJhY2tncm91bmQpO1xcbn1cXG5cXG4uY29kZS1zbmlwcGV0IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS10ZXh0QmxvY2tRdW90ZS1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgbWFyZ2luOiA4cHggMDtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5jb2RlLXNuaXBwZXQgcHJlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LWZhbWlseTogdmFyKC0tdnNjb2RlLWVkaXRvci1mb250LWZhbWlseSk7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLmlzc3VlLXN1Z2dlc3Rpb24ge1xcbiAgbWFyZ2luOiAxMnB4IDA7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLXRleHRCbG9ja1F1b3RlLWJhY2tncm91bmQpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5zdWdnZXN0ZWQtY29kZS1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS1lZGl0b3ItYmFja2dyb3VuZCk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zdWdnZXN0aW9uLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWJ1dHRvbi1zZWNvbmRhcnlCYWNrZ3JvdW5kKTtcXG59XFxuXFxuLnN1Z2dlc3Rpb24taGVhZGVyIHN0cm9uZyB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5zdWdnZXN0ZWQtY29kZSB7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXZzY29kZS1lZGl0b3ItZm9udC1mYW1pbHkpO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pc3N1ZS1qdXN0aWZpY2F0aW9uIHtcXG4gIG1hcmdpbjogMTJweCAwO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS10ZXh0QmxvY2tRdW90ZS1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4vKiBJc3N1ZSByZXZpZXcgYnV0dG9uICovXFxuLnJldmlldy1idXR0b24ge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWJ1dHRvbi1zZWNvbmRhcnlCYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLXNlY29uZGFyeUZvcmVncm91bmQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWJ1dHRvbi1ib3JkZXIpO1xcbiAgcGFkZGluZzogNnB4IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKSBlYXNlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLnJldmlldy1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWJ1dHRvbi1zZWNvbmRhcnlIb3ZlckJhY2tncm91bmQpO1xcbn1cXG5cXG4ucmV2aWV3LWJ1dHRvbi5yZXZpZXdlZCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtYmFkZ2UtYmFja2dyb3VuZCk7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWJhZGdlLWZvcmVncm91bmQpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS12c2NvZGUtYmFkZ2UtYmFja2dyb3VuZCk7XFxufVxcblxcbi5pc3N1ZS1yZXZpZXdlZCB7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHZhcigtLXZzY29kZS1iYWRnZS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLyogRm9jdXNlZCBpc3N1ZSAqL1xcbi5pc3N1ZS1mb2N1c2VkIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tdnNjb2RlLWZvY3VzQm9yZGVyKTtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWxlZnQtY29sb3IgMC4ycyBlYXNlLCBib3gtc2hhZG93IDAuMnMgZWFzZTtcXG59XFxuXFxuLmNvcHktYnV0dG9uLCAuY29weS1pc3N1ZS1idXR0b24sIC5jb3B5LW1hcmtkb3duLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtYnV0dG9uLXNlY29uZGFyeUJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5Rm9yZWdyb3VuZCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtYnV0dG9uLWJvcmRlcik7XFxuICBwYWRkaW5nOiA2cHggMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpIGVhc2U7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDZweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uY29weS1idXR0b246aG92ZXIsIFxcbi5jb3B5LWlzc3VlLWJ1dHRvbjpob3ZlciwgXFxuLmNvcHktbWFya2Rvd24tYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5SG92ZXJCYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmNvcGllZCB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtYmFkZ2UtYmFja2dyb3VuZCkgIWltcG9ydGFudDtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtYmFkZ2UtZm9yZWdyb3VuZCkgIWltcG9ydGFudDtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdnNjb2RlLWJhZGdlLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XFxufVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS1lcnJvckJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuXFxuLm5vLWlzc3VlcyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzMnB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWVkaXRvci1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS13aWRnZXQtYm9yZGVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xcbn1cXG5cXG4vKiBSZXNwb25zaXZlIGxheW91dCAqL1xcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5kYXNoYm9hcmQge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIH1cXG4gIFxcbiAgLmJyYW5jaGVzLXJvdyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICBcXG4gIC5oZWFkZXItcm93IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIGdhcDogMTZweDtcXG4gIH1cXG4gIFxcbiAgLmZpbHRlci1jb250YWluZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbn1cXG5cXG4vKiBBZGQgaG9yaXpvbnRhbCBzY3JvbGxiYXIgc3R5bGluZyAqL1xcbi5jb2RlLXNuaXBwZXQgcHJlOjotd2Via2l0LXNjcm9sbGJhcixcXG4uc3VnZ2VzdGVkLWNvZGU6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIGhlaWdodDogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLXNjcm9sbGJhclNsaWRlci1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmNvZGUtc25pcHBldCBwcmU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxcbi5zdWdnZXN0ZWQtY29kZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLXNjcm9sbGJhclNsaWRlci1ob3ZlckJhY2tncm91bmQpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4uY29kZS1zbmlwcGV0IHByZTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIsXFxuLnN1Z2dlc3RlZC1jb2RlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtc2Nyb2xsYmFyU2xpZGVyLWFjdGl2ZUJhY2tncm91bmQpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgXG4gIHVzZVZTQ29kZUFQSSwgXG4gIHVzZU1lc3NhZ2VMaXN0ZW5lciwgXG4gIHVzZUxvYWRpbmdTdGF0ZSwgXG4gIHVzZUVycm9yU3RhdGUsXG4gIHVzZVdlYnZpZXdTdGF0ZSBcbn0gZnJvbSAnLi4vc2hhcmVkL2hvb2tzL3VzZVZTQ29kZUFQSSc7XG5pbXBvcnQgeyBMb2FkaW5nU3Bpbm5lciB9IGZyb20gJy4uL3NoYXJlZC9jb21wb25lbnRzJztcbmltcG9ydCB7IEV4dGVuc2lvbk1lc3NhZ2UsIE1vZGVsQ29uZmlnIH0gZnJvbSAnLi4vc2hhcmVkL3R5cGVzJztcbmltcG9ydCB7IFJldmlld0NvbmZpZ3VyYXRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvUmV2aWV3Q29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBQcm9ncmVzc0luZGljYXRvciB9IGZyb20gJy4vY29tcG9uZW50cy9Qcm9ncmVzc0luZGljYXRvcic7XG5pbXBvcnQgeyBSZXZpZXdEYXNoYm9hcmQgfSBmcm9tICcuL2NvbXBvbmVudHMvUmV2aWV3RGFzaGJvYXJkJztcbmltcG9ydCB7IFJldmlld1N1bW1hcnkgfSBmcm9tICcuL2NvbXBvbmVudHMvUmV2aWV3U3VtbWFyeSc7XG5pbXBvcnQgeyBJc3N1ZXNMaXN0IH0gZnJvbSAnLi9jb21wb25lbnRzL0lzc3Vlc0xpc3QnO1xuaW1wb3J0IHsgRmlsdGVyQmFyIH0gZnJvbSAnLi9jb21wb25lbnRzL0ZpbHRlckJhcic7XG5cbmludGVyZmFjZSBSZXZpZXdSZXN1bHQge1xuICBzdW1tYXJ5OiB7XG4gICAgYXNzZXNzbWVudDogc3RyaW5nO1xuICAgIHN0cmVuZ3Roczogc3RyaW5nW107XG4gICAgY3JpdGljYWxJc3N1ZXM6IHN0cmluZ1tdO1xuICAgIHJlY29tbWVuZGF0aW9uczogc3RyaW5nW107XG4gIH07XG4gIGlzc3VlczogUmV2aWV3SXNzdWVbXTtcbn1cblxuaW50ZXJmYWNlIFJldmlld0lzc3VlIHtcbiAgZmlsZVBhdGg6IHN0cmluZztcbiAgbGluZU51bWJlcj86IG51bWJlcjtcbiAgc2V2ZXJpdHk6ICdDcml0aWNhbCcgfCAnSGlnaCcgfCAnTWVkaXVtJyB8ICdMb3cnO1xuICBjYXRlZ29yeTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBzdWdnZXN0aW9uPzogc3RyaW5nO1xuICBzdWdnZXN0ZWRDb2RlPzogc3RyaW5nO1xuICBqdXN0aWZpY2F0aW9uPzogc3RyaW5nO1xuICBsaW5lQ29udGV4dD86IHtcbiAgICBsaW5lc0JlZm9yZT86IHN0cmluZ1tdO1xuICAgIGNvZGVTbmlwcGV0OiBzdHJpbmc7XG4gICAgbGluZXNBZnRlcj86IHN0cmluZ1tdO1xuICB9O1xufVxuXG5pbnRlcmZhY2UgUHJQcm9ncmVzc1VwZGF0ZSB7XG4gIGNvbXBsZXRlZDogbnVtYmVyO1xuICB0b3RhbDogbnVtYmVyO1xuICBjdXJyZW50RmlsZT86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFJldmlld1N0YXRlIHtcbiAgcmV2aWV3ZWRJc3N1ZXM6IHN0cmluZ1tdO1xuICBzZWFyY2hRdWVyeTogc3RyaW5nO1xuICBzZXZlcml0eUZpbHRlcjogc3RyaW5nO1xuICBjYXRlZ29yeUZpbHRlcjogc3RyaW5nO1xuICBzaG93UmV2aWV3ZWQ6IGJvb2xlYW47XG4gIGlzU3VtbWFyeUNvbGxhcHNlZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFByUmV2aWV3QXBwKCkge1xuICBjb25zdCB7IHBvc3RNZXNzYWdlLCBnZXRTdGF0ZSwgc2V0U3RhdGUgfSA9IHVzZVZTQ29kZUFQSSgpO1xuICBjb25zdCB7IGlzTG9hZGluZywgc3RhcnRMb2FkaW5nLCBzdG9wTG9hZGluZyB9ID0gdXNlTG9hZGluZ1N0YXRlKCk7XG4gIGNvbnN0IHsgZXJyb3IsIHNldEVycm9yLCBjbGVhckVycm9yIH0gPSB1c2VFcnJvclN0YXRlKCk7XG5cbiAgLy8gQnJhbmNoIGFuZCBtb2RlbCBzdGF0ZVxuICBjb25zdCBbYnJhbmNoZXMsIHNldEJyYW5jaGVzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFtjdXJyZW50QnJhbmNoLCBzZXRDdXJyZW50QnJhbmNoXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NvdXJjZUJyYW5jaCwgc2V0U291cmNlQnJhbmNoXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3RhcmdldEJyYW5jaCwgc2V0VGFyZ2V0QnJhbmNoXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NlbGVjdGVkTW9kZWwsIHNldFNlbGVjdGVkTW9kZWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbbW9kZWxzLCBzZXRNb2RlbHNdID0gdXNlU3RhdGU8TW9kZWxDb25maWdbXT4oW10pO1xuXG4gIC8vIFJldmlldyBzdGF0ZVxuICBjb25zdCBbcmV2aWV3UmVzdWx0LCBzZXRSZXZpZXdSZXN1bHRdID0gdXNlU3RhdGU8UmV2aWV3UmVzdWx0IHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGU8UHJQcm9ncmVzc1VwZGF0ZSB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbY3VycmVudFJldmlld0tleSwgc2V0Q3VycmVudFJldmlld0tleV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgLy8gVUkgc3RhdGUgd2l0aCBwZXJzaXN0ZW5jZVxuICBjb25zdCBbcmV2aWV3U3RhdGUsIHNldFJldmlld1N0YXRlXSA9IHVzZVdlYnZpZXdTdGF0ZTxSZXZpZXdTdGF0ZT4oe1xuICAgIHJldmlld2VkSXNzdWVzOiBbXSxcbiAgICBzZWFyY2hRdWVyeTogJycsXG4gICAgc2V2ZXJpdHlGaWx0ZXI6ICdBbGwnLFxuICAgIGNhdGVnb3J5RmlsdGVyOiAnQWxsJyxcbiAgICBzaG93UmV2aWV3ZWQ6IGZhbHNlLFxuICAgIGlzU3VtbWFyeUNvbGxhcHNlZDogZmFsc2UsXG4gIH0pO1xuXG4gIC8vIExvYWQgbW9kZWxzIGZyb20gc2hhcmVkIGNvbmZpZ1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNoYXJlZENvbmZpZyA9ICh3aW5kb3cgYXMgYW55KS5zaGFyZWRNb2RlbENvbmZpZztcbiAgICBpZiAoc2hhcmVkQ29uZmlnPy5tb2RlbHMpIHtcbiAgICAgIHNldE1vZGVscyhzaGFyZWRDb25maWcubW9kZWxzKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICAvLyBSZXF1ZXN0IGJyYW5jaGVzIG9uIG1vdW50XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcG9zdE1lc3NhZ2UoeyBjb21tYW5kOiAnZ2V0QnJhbmNoZXMnIH0pO1xuICB9LCBbcG9zdE1lc3NhZ2VdKTtcblxuICAvLyBIYW5kbGUgbWVzc2FnZXMgZnJvbSBleHRlbnNpb25cbiAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IHVzZUNhbGxiYWNrKChtZXNzYWdlOiBFeHRlbnNpb25NZXNzYWdlKSA9PiB7XG4gICAgc3dpdGNoIChtZXNzYWdlLmNvbW1hbmQpIHtcbiAgICAgIGNhc2UgJ2JyYW5jaGVzTGlzdCc6XG4gICAgICAgIHNldEJyYW5jaGVzKG1lc3NhZ2UuYnJhbmNoZXMgfHwgW10pO1xuICAgICAgICBzZXRDdXJyZW50QnJhbmNoKG1lc3NhZ2UuY3VycmVudEJyYW5jaCB8fCAnJyk7XG4gICAgICAgIHNldFNvdXJjZUJyYW5jaChtZXNzYWdlLmN1cnJlbnRCcmFuY2ggfHwgJycpO1xuICAgICAgICBcbiAgICAgICAgaWYgKG1lc3NhZ2UubGFuZ3VhZ2VNb2RlbCkge1xuICAgICAgICAgIHNldFNlbGVjdGVkTW9kZWwobWVzc2FnZS5sYW5ndWFnZU1vZGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0YXJnZXQgYnJhbmNoXG4gICAgICAgIGNvbnN0IGJyYW5jaGVzID0gbWVzc2FnZS5icmFuY2hlcyB8fCBbXTtcbiAgICAgICAgaWYgKG1lc3NhZ2UuZGVmYXVsdFRhcmdldEJyYW5jaCAmJiBicmFuY2hlcy5pbmNsdWRlcyhtZXNzYWdlLmRlZmF1bHRUYXJnZXRCcmFuY2gpKSB7XG4gICAgICAgICAgc2V0VGFyZ2V0QnJhbmNoKG1lc3NhZ2UuZGVmYXVsdFRhcmdldEJyYW5jaCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0VGFyZ2V0QnJhbmNoKFxuICAgICAgICAgICAgYnJhbmNoZXMuZmluZChiID0+IGIgPT09ICdtYWluJyB8fCBiID09PSAnbWFzdGVyJykgfHxcbiAgICAgICAgICAgIGJyYW5jaGVzLmZpbmQoYiA9PiBiICE9PSBtZXNzYWdlLmN1cnJlbnRCcmFuY2gpIHx8XG4gICAgICAgICAgICBicmFuY2hlc1swXSB8fCAnJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3N0YXJ0TG9hZGluZyc6XG4gICAgICAgIHN0YXJ0TG9hZGluZygpO1xuICAgICAgICBjbGVhckVycm9yKCk7XG4gICAgICAgIHNldFByb2dyZXNzKG51bGwpO1xuICAgICAgICAvLyBSZXNldCByZXZpZXcgc3RhdGUgZm9yIG5ldyByZXZpZXdcbiAgICAgICAgc2V0UmV2aWV3U3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgcmV2aWV3ZWRJc3N1ZXM6IFtdLFxuICAgICAgICAgIHNlYXJjaFF1ZXJ5OiAnJyxcbiAgICAgICAgICBzZXZlcml0eUZpbHRlcjogJ0FsbCcsXG4gICAgICAgICAgY2F0ZWdvcnlGaWx0ZXI6ICdBbGwnLFxuICAgICAgICAgIHNob3dSZXZpZXdlZDogZmFsc2UsXG4gICAgICAgIH0pKTtcbiAgICAgICAgc2V0Q3VycmVudFJldmlld0tleSgnJyk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdwcm9ncmVzc1VwZGF0ZSc6XG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9IG1lc3NhZ2UudXBkYXRlO1xuICAgICAgICBpZiAodXBkYXRlKSB7XG4gICAgICAgICAgc2V0UHJvZ3Jlc3Moe1xuICAgICAgICAgICAgY29tcGxldGVkOiB1cGRhdGUucHJvZ3Jlc3MgfHwgMCxcbiAgICAgICAgICAgIHRvdGFsOiB1cGRhdGUudG90YWwgfHwgMCxcbiAgICAgICAgICAgIGN1cnJlbnRGaWxlOiB1cGRhdGUubWVzc2FnZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRQcm9ncmVzcyhudWxsKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncmV2aWV3Q29tcGxldGUnOlxuICAgICAgICBzdG9wTG9hZGluZygpO1xuICAgICAgICBzZXRSZXZpZXdSZXN1bHQobWVzc2FnZS5yZXN1bHQpO1xuICAgICAgICBjbGVhckVycm9yKCk7XG4gICAgICAgIHNldFByb2dyZXNzKG51bGwpO1xuICAgICAgICBcbiAgICAgICAgaWYgKG1lc3NhZ2UucmVzdWx0Py5yZXZpZXdLZXkpIHtcbiAgICAgICAgICBzZXRDdXJyZW50UmV2aWV3S2V5KG1lc3NhZ2UucmVzdWx0LnJldmlld0tleSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgc3RvcExvYWRpbmcoKTtcbiAgICAgICAgc2V0RXJyb3IobWVzc2FnZS5tZXNzYWdlIHx8ICdBbiBlcnJvciBvY2N1cnJlZCcpO1xuICAgICAgICBzZXRSZXZpZXdSZXN1bHQobnVsbCk7XG4gICAgICAgIHNldFByb2dyZXNzKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sIFtzdGFydExvYWRpbmcsIHN0b3BMb2FkaW5nLCBjbGVhckVycm9yLCBzZXRFcnJvciwgc2V0UmV2aWV3U3RhdGVdKTtcblxuICB1c2VNZXNzYWdlTGlzdGVuZXIoaGFuZGxlTWVzc2FnZSk7XG5cbiAgLy8gTG9hZCBzYXZlZCByZXZpZXdlZCBpc3N1ZXMgd2hlbiByZXZpZXcgaXMgY29tcGxldGVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY3VycmVudFJldmlld0tleSAmJiByZXZpZXdSZXN1bHQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNhdmVkU3RhdGUgPSBnZXRTdGF0ZSgpIHx8IHt9O1xuICAgICAgICBjb25zdCBzYXZlZFJldmlld2VkID0gc2F2ZWRTdGF0ZVtjdXJyZW50UmV2aWV3S2V5XSB8fCBbXTtcbiAgICAgICAgXG4gICAgICAgIGlmIChzYXZlZFJldmlld2VkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzZXRSZXZpZXdTdGF0ZShwcmV2ID0+ICh7XG4gICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgcmV2aWV3ZWRJc3N1ZXM6IHNhdmVkUmV2aWV3ZWQsXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIHNhdmVkIHJldmlldyBzdGF0ZTonLCBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtjdXJyZW50UmV2aWV3S2V5LCByZXZpZXdSZXN1bHQsIGdldFN0YXRlLCBzZXRSZXZpZXdTdGF0ZV0pO1xuXG4gIGNvbnN0IGhhbmRsZVJldmlldyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoc291cmNlQnJhbmNoID09PSB0YXJnZXRCcmFuY2gpIHtcbiAgICAgIHNldEVycm9yKCdTb3VyY2UgYW5kIHRhcmdldCBicmFuY2hlcyBtdXN0IGJlIGRpZmZlcmVudCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldFJldmlld1Jlc3VsdChudWxsKTtcbiAgICBjbGVhckVycm9yKCk7XG4gICAgcG9zdE1lc3NhZ2Uoe1xuICAgICAgY29tbWFuZDogJ3Jldmlld1ByJyxcbiAgICAgIHNvdXJjZUJyYW5jaCxcbiAgICAgIHRhcmdldEJyYW5jaCxcbiAgICAgIG1vZGVsRmFtaWx5OiBzZWxlY3RlZE1vZGVsLFxuICAgIH0pO1xuICB9LCBbc291cmNlQnJhbmNoLCB0YXJnZXRCcmFuY2gsIHNlbGVjdGVkTW9kZWwsIHNldEVycm9yLCBjbGVhckVycm9yLCBwb3N0TWVzc2FnZV0pO1xuXG4gIGNvbnN0IGhhbmRsZU1hcmtBc1Jldmlld2VkID0gdXNlQ2FsbGJhY2soKGlzc3VlOiBSZXZpZXdJc3N1ZSkgPT4ge1xuICAgIGNvbnN0IGlzc3VlSWQgPSBgJHtpc3N1ZS5maWxlUGF0aH06JHtpc3N1ZS5zZXZlcml0eX06JHtpc3N1ZS5kZXNjcmlwdGlvbn1gO1xuICAgIFxuICAgIHNldFJldmlld1N0YXRlKHByZXYgPT4ge1xuICAgICAgY29uc3QgbmV3UmV2aWV3ZWRJc3N1ZXMgPSBbLi4ucHJldi5yZXZpZXdlZElzc3Vlc107XG4gICAgICBjb25zdCBpbmRleCA9IG5ld1Jldmlld2VkSXNzdWVzLmluZGV4T2YoaXNzdWVJZCk7XG4gICAgICBcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIG5ld1Jldmlld2VkSXNzdWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdSZXZpZXdlZElzc3Vlcy5wdXNoKGlzc3VlSWQpO1xuICAgICAgfVxuXG4gICAgICAvLyBTYXZlIHRvIHN0b3JhZ2UgaWYgd2UgaGF2ZSBhIHJldmlldyBrZXlcbiAgICAgIGlmIChjdXJyZW50UmV2aWV3S2V5KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3Qgc2F2ZWRTdGF0ZSA9IGdldFN0YXRlKCkgfHwge307XG4gICAgICAgICAgc2F2ZWRTdGF0ZVtjdXJyZW50UmV2aWV3S2V5XSA9IG5ld1Jldmlld2VkSXNzdWVzO1xuICAgICAgICAgIHNldFN0YXRlKHNhdmVkU3RhdGUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNhdmUgcmV2aWV3IHN0YXRlOicsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXYsXG4gICAgICAgIHJldmlld2VkSXNzdWVzOiBuZXdSZXZpZXdlZElzc3VlcyxcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sIFtjdXJyZW50UmV2aWV3S2V5LCBnZXRTdGF0ZSwgc2V0U3RhdGUsIHNldFJldmlld1N0YXRlXSk7XG5cbiAgLy8gQ2FsY3VsYXRlIHN0YXRpc3RpY3NcbiAgY29uc3Qgc3RhdHMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoIXJldmlld1Jlc3VsdD8uaXNzdWVzKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IHJldmlld2VkU2V0ID0gbmV3IFNldChyZXZpZXdTdGF0ZS5yZXZpZXdlZElzc3Vlcyk7XG4gICAgY29uc3Qgc3RhdHMgPSB7XG4gICAgICB0b3RhbDogcmV2aWV3UmVzdWx0Lmlzc3Vlcy5sZW5ndGgsXG4gICAgICByZXZpZXdlZDogcmV2aWV3ZWRTZXQuc2l6ZSxcbiAgICAgIHBlbmRpbmc6IHJldmlld1Jlc3VsdC5pc3N1ZXMubGVuZ3RoIC0gcmV2aWV3ZWRTZXQuc2l6ZSxcbiAgICAgIGJ5U2V2ZXJpdHk6IHtcbiAgICAgICAgQ3JpdGljYWw6IDAsXG4gICAgICAgIEhpZ2g6IDAsXG4gICAgICAgIE1lZGl1bTogMCxcbiAgICAgICAgTG93OiAwLFxuICAgICAgfSBhcyBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+LFxuICAgICAgYnlDYXRlZ29yeToge30gYXMgUmVjb3JkPHN0cmluZywgbnVtYmVyPixcbiAgICB9O1xuXG4gICAgcmV2aWV3UmVzdWx0Lmlzc3Vlcy5mb3JFYWNoKGlzc3VlID0+IHtcbiAgICAgIC8vIENvdW50IGJ5IHNldmVyaXR5XG4gICAgICBpZiAoc3RhdHMuYnlTZXZlcml0eS5oYXNPd25Qcm9wZXJ0eShpc3N1ZS5zZXZlcml0eSkpIHtcbiAgICAgICAgc3RhdHMuYnlTZXZlcml0eVtpc3N1ZS5zZXZlcml0eV0rKztcbiAgICAgIH1cblxuICAgICAgLy8gQ291bnQgYnkgY2F0ZWdvcnlcbiAgICAgIGlmICghc3RhdHMuYnlDYXRlZ29yeVtpc3N1ZS5jYXRlZ29yeV0pIHtcbiAgICAgICAgc3RhdHMuYnlDYXRlZ29yeVtpc3N1ZS5jYXRlZ29yeV0gPSAwO1xuICAgICAgfVxuICAgICAgc3RhdHMuYnlDYXRlZ29yeVtpc3N1ZS5jYXRlZ29yeV0rKztcbiAgICB9KTtcblxuICAgIHJldHVybiBzdGF0cztcbiAgfSwgW3Jldmlld1Jlc3VsdCwgcmV2aWV3U3RhdGUucmV2aWV3ZWRJc3N1ZXNdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8UmV2aWV3Q29uZmlndXJhdGlvblxuICAgICAgICBicmFuY2hlcz17YnJhbmNoZXN9XG4gICAgICAgIGN1cnJlbnRCcmFuY2g9e2N1cnJlbnRCcmFuY2h9XG4gICAgICAgIHNvdXJjZUJyYW5jaD17c291cmNlQnJhbmNofVxuICAgICAgICB0YXJnZXRCcmFuY2g9e3RhcmdldEJyYW5jaH1cbiAgICAgICAgc2VsZWN0ZWRNb2RlbD17c2VsZWN0ZWRNb2RlbH1cbiAgICAgICAgbW9kZWxzPXttb2RlbHN9XG4gICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxuICAgICAgICBvblNvdXJjZUJyYW5jaENoYW5nZT17c2V0U291cmNlQnJhbmNofVxuICAgICAgICBvblRhcmdldEJyYW5jaENoYW5nZT17c2V0VGFyZ2V0QnJhbmNofVxuICAgICAgICBvbk1vZGVsQ2hhbmdlPXtzZXRTZWxlY3RlZE1vZGVsfVxuICAgICAgICBvblJldmlldz17aGFuZGxlUmV2aWV3fVxuICAgICAgLz5cblxuICAgICAge2lzTG9hZGluZyAmJiBwcm9ncmVzcyAmJiAoXG4gICAgICAgIDxQcm9ncmVzc0luZGljYXRvciBwcm9ncmVzcz17cHJvZ3Jlc3N9IC8+XG4gICAgICApfVxuXG4gICAgICB7aXNMb2FkaW5nICYmICFwcm9ncmVzcyAmJiAoXG4gICAgICAgIDxMb2FkaW5nU3Bpbm5lciBtZXNzYWdlPVwiQW5hbHl6aW5nIFBSIGNoYW5nZXMuLi5cIiAvPlxuICAgICAgKX1cblxuICAgICAge2Vycm9yICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCI+XG4gICAgICAgICAge2Vycm9yfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHshaXNMb2FkaW5nICYmICFlcnJvciAmJiByZXZpZXdSZXN1bHQgJiYgKFxuICAgICAgICA8PlxuICAgICAgICAgIDxSZXZpZXdEYXNoYm9hcmQgc3RhdHM9e3N0YXRzfSAvPlxuICAgICAgICAgIFxuICAgICAgICAgIDxSZXZpZXdTdW1tYXJ5XG4gICAgICAgICAgICBzdW1tYXJ5PXtyZXZpZXdSZXN1bHQuc3VtbWFyeX1cbiAgICAgICAgICAgIGlzQ29sbGFwc2VkPXtyZXZpZXdTdGF0ZS5pc1N1bW1hcnlDb2xsYXBzZWR9XG4gICAgICAgICAgICBvblRvZ2dsZUNvbGxhcHNlPXsoKSA9PiBcbiAgICAgICAgICAgICAgc2V0UmV2aWV3U3RhdGUocHJldiA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLnByZXYsXG4gICAgICAgICAgICAgICAgaXNTdW1tYXJ5Q29sbGFwc2VkOiAhcHJldi5pc1N1bW1hcnlDb2xsYXBzZWQsXG4gICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3Vlcy1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaXNzdWVzLWhlYWRpbmdcIj5Jc3N1ZXM8L2gyPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8RmlsdGVyQmFyXG4gICAgICAgICAgICAgIHNlYXJjaFF1ZXJ5PXtyZXZpZXdTdGF0ZS5zZWFyY2hRdWVyeX1cbiAgICAgICAgICAgICAgc2V2ZXJpdHlGaWx0ZXI9e3Jldmlld1N0YXRlLnNldmVyaXR5RmlsdGVyfVxuICAgICAgICAgICAgICBjYXRlZ29yeUZpbHRlcj17cmV2aWV3U3RhdGUuY2F0ZWdvcnlGaWx0ZXJ9XG4gICAgICAgICAgICAgIHNob3dSZXZpZXdlZD17cmV2aWV3U3RhdGUuc2hvd1Jldmlld2VkfVxuICAgICAgICAgICAgICByZXZpZXdSZXN1bHQ9e3Jldmlld1Jlc3VsdH1cbiAgICAgICAgICAgICAgb25TZWFyY2hDaGFuZ2U9eyhxdWVyeSkgPT4gXG4gICAgICAgICAgICAgICAgc2V0UmV2aWV3U3RhdGUocHJldiA9PiAoeyAuLi5wcmV2LCBzZWFyY2hRdWVyeTogcXVlcnkgfSkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgb25TZXZlcml0eUZpbHRlckNoYW5nZT17KGZpbHRlcikgPT4gXG4gICAgICAgICAgICAgICAgc2V0UmV2aWV3U3RhdGUocHJldiA9PiAoeyAuLi5wcmV2LCBzZXZlcml0eUZpbHRlcjogZmlsdGVyIH0pKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9uQ2F0ZWdvcnlGaWx0ZXJDaGFuZ2U9eyhmaWx0ZXIpID0+IFxuICAgICAgICAgICAgICAgIHNldFJldmlld1N0YXRlKHByZXYgPT4gKHsgLi4ucHJldiwgY2F0ZWdvcnlGaWx0ZXI6IGZpbHRlciB9KSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvblNob3dSZXZpZXdlZENoYW5nZT17KHNob3cpID0+IFxuICAgICAgICAgICAgICAgIHNldFJldmlld1N0YXRlKHByZXYgPT4gKHsgLi4ucHJldiwgc2hvd1Jldmlld2VkOiBzaG93IH0pKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8SXNzdWVzTGlzdFxuICAgICAgICAgICAgICBpc3N1ZXM9e3Jldmlld1Jlc3VsdC5pc3N1ZXN9XG4gICAgICAgICAgICAgIHNlYXJjaFF1ZXJ5PXtyZXZpZXdTdGF0ZS5zZWFyY2hRdWVyeX1cbiAgICAgICAgICAgICAgc2V2ZXJpdHlGaWx0ZXI9e3Jldmlld1N0YXRlLnNldmVyaXR5RmlsdGVyfVxuICAgICAgICAgICAgICBjYXRlZ29yeUZpbHRlcj17cmV2aWV3U3RhdGUuY2F0ZWdvcnlGaWx0ZXJ9XG4gICAgICAgICAgICAgIHNob3dSZXZpZXdlZD17cmV2aWV3U3RhdGUuc2hvd1Jldmlld2VkfVxuICAgICAgICAgICAgICByZXZpZXdlZElzc3Vlcz17bmV3IFNldChyZXZpZXdTdGF0ZS5yZXZpZXdlZElzc3Vlcyl9XG4gICAgICAgICAgICAgIG9uTWFya0FzUmV2aWV3ZWQ9e2hhbmRsZU1hcmtBc1Jldmlld2VkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufSIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgUmV2aWV3UmVzdWx0IHtcbiAgaXNzdWVzOiBBcnJheTx7IGNhdGVnb3J5OiBzdHJpbmcgfT47XG59XG5cbmludGVyZmFjZSBGaWx0ZXJCYXJQcm9wcyB7XG4gIHNlYXJjaFF1ZXJ5OiBzdHJpbmc7XG4gIHNldmVyaXR5RmlsdGVyOiBzdHJpbmc7XG4gIGNhdGVnb3J5RmlsdGVyOiBzdHJpbmc7XG4gIHNob3dSZXZpZXdlZDogYm9vbGVhbjtcbiAgcmV2aWV3UmVzdWx0OiBSZXZpZXdSZXN1bHQ7XG4gIG9uU2VhcmNoQ2hhbmdlOiAocXVlcnk6IHN0cmluZykgPT4gdm9pZDtcbiAgb25TZXZlcml0eUZpbHRlckNoYW5nZTogKGZpbHRlcjogc3RyaW5nKSA9PiB2b2lkO1xuICBvbkNhdGVnb3J5RmlsdGVyQ2hhbmdlOiAoZmlsdGVyOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uU2hvd1Jldmlld2VkQ2hhbmdlOiAoc2hvdzogYm9vbGVhbikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEZpbHRlckJhcih7XG4gIHNlYXJjaFF1ZXJ5LFxuICBzZXZlcml0eUZpbHRlcixcbiAgY2F0ZWdvcnlGaWx0ZXIsXG4gIHNob3dSZXZpZXdlZCxcbiAgcmV2aWV3UmVzdWx0LFxuICBvblNlYXJjaENoYW5nZSxcbiAgb25TZXZlcml0eUZpbHRlckNoYW5nZSxcbiAgb25DYXRlZ29yeUZpbHRlckNoYW5nZSxcbiAgb25TaG93UmV2aWV3ZWRDaGFuZ2UsXG59OiBGaWx0ZXJCYXJQcm9wcykge1xuICAvLyBFeHRyYWN0IGFsbCB1bmlxdWUgY2F0ZWdvcmllcyBmcm9tIGlzc3Vlc1xuICBjb25zdCBjYXRlZ29yaWVzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgaWYgKCFyZXZpZXdSZXN1bHQ/Lmlzc3VlcykgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgdW5pcXVlQ2F0ZWdvcmllcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIHJldmlld1Jlc3VsdC5pc3N1ZXMuZm9yRWFjaCgoaXNzdWUpID0+IHtcbiAgICAgIGlmIChpc3N1ZS5jYXRlZ29yeSkge1xuICAgICAgICB1bmlxdWVDYXRlZ29yaWVzLmFkZChpc3N1ZS5jYXRlZ29yeSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gWydBbGwnLCAuLi5BcnJheS5mcm9tKHVuaXF1ZUNhdGVnb3JpZXMpXTtcbiAgfSwgW3Jldmlld1Jlc3VsdF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItYmFyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1jb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGlzc3Vlcy4uLlwiXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFF1ZXJ5fVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25TZWFyY2hDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzZXZlcml0eUZpbHRlclwiPlNldmVyaXR5OjwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgaWQ9XCJzZXZlcml0eUZpbHRlclwiXG4gICAgICAgICAgICB2YWx1ZT17c2V2ZXJpdHlGaWx0ZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uU2V2ZXJpdHlGaWx0ZXJDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyLXNlbGVjdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkFsbFwiPkFsbCBTZXZlcml0aWVzPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiQ3JpdGljYWxcIj5Dcml0aWNhbDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTG93XCI+TG93PC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWdyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjYXRlZ29yeUZpbHRlclwiPkNhdGVnb3J5OjwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgaWQ9XCJjYXRlZ29yeUZpbHRlclwiXG4gICAgICAgICAgICB2YWx1ZT17Y2F0ZWdvcnlGaWx0ZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2F0ZWdvcnlGaWx0ZXJDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyLXNlbGVjdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSkgPT4gKFxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Y2F0ZWdvcnl9IHZhbHVlPXtjYXRlZ29yeX0+XG4gICAgICAgICAgICAgICAge2NhdGVnb3J5fVxuICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3RhdHVzRmlsdGVyXCI+U3RhdHVzOjwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgaWQ9XCJzdGF0dXNGaWx0ZXJcIlxuICAgICAgICAgICAgdmFsdWU9e3Nob3dSZXZpZXdlZCA/ICdyZXZpZXdlZCcgOiAncGVuZGluZyd9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uU2hvd1Jldmlld2VkQ2hhbmdlKGUudGFyZ2V0LnZhbHVlID09PSAncmV2aWV3ZWQnKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbHRlci1zZWxlY3RcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwZW5kaW5nXCI+UGVuZGluZzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJldmlld2VkXCI+RG9uZTwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVZTQ29kZUFQSSB9IGZyb20gJy4uLy4uL3NoYXJlZC9ob29rcy91c2VWU0NvZGVBUEknO1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMnO1xuXG5pbnRlcmZhY2UgUmV2aWV3SXNzdWUge1xuICBmaWxlUGF0aDogc3RyaW5nO1xuICBsaW5lTnVtYmVyPzogbnVtYmVyO1xuICBzZXZlcml0eTogJ0NyaXRpY2FsJyB8ICdIaWdoJyB8ICdNZWRpdW0nIHwgJ0xvdyc7XG4gIGNhdGVnb3J5OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHN1Z2dlc3Rpb24/OiBzdHJpbmc7XG4gIHN1Z2dlc3RlZENvZGU/OiBzdHJpbmc7XG4gIGp1c3RpZmljYXRpb24/OiBzdHJpbmc7XG4gIGxpbmVDb250ZXh0Pzoge1xuICAgIGxpbmVzQmVmb3JlPzogc3RyaW5nW107XG4gICAgY29kZVNuaXBwZXQ6IHN0cmluZztcbiAgICBsaW5lc0FmdGVyPzogc3RyaW5nW107XG4gIH07XG59XG5cbmludGVyZmFjZSBJc3N1ZXNMaXN0UHJvcHMge1xuICBpc3N1ZXM6IFJldmlld0lzc3VlW107XG4gIHNlYXJjaFF1ZXJ5OiBzdHJpbmc7XG4gIHNldmVyaXR5RmlsdGVyOiBzdHJpbmc7XG4gIGNhdGVnb3J5RmlsdGVyOiBzdHJpbmc7XG4gIHNob3dSZXZpZXdlZDogYm9vbGVhbjtcbiAgcmV2aWV3ZWRJc3N1ZXM6IFNldDxzdHJpbmc+O1xuICBvbk1hcmtBc1Jldmlld2VkOiAoaXNzdWU6IFJldmlld0lzc3VlKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgSXNzdWVJdGVtUHJvcHMge1xuICBpc3N1ZTogUmV2aWV3SXNzdWU7XG4gIGlzUmV2aWV3ZWQ6IGJvb2xlYW47XG4gIGlzRm9jdXNlZDogYm9vbGVhbjtcbiAgb25NYXJrQXNSZXZpZXdlZDogKCkgPT4gdm9pZDtcbiAgb25OYXZpZ2F0ZVRvRmlsZTogKCkgPT4gdm9pZDtcbn1cblxuY29uc3Qgc2V2ZXJpdHlFbW9qaXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIENyaXRpY2FsOiAn8J+aqCcsXG4gIEhpZ2g6ICfimqDvuI8nLFxuICBNZWRpdW06ICfimqEnLFxuICBMb3c6ICfihLnvuI8nLFxufTtcblxuY29uc3QgY2F0ZWdvcnlFbW9qaXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIFNlY3VyaXR5OiAn8J+UkicsXG4gICdDb2RlIFN0eWxlJzogJ/CfjqgnLFxuICBQZXJmb3JtYW5jZTogJ+KaoScsXG4gICdCcmVha2luZyBDaGFuZ2UnOiAn8J+SpScsXG4gICdMb2dpY2FsIEVycm9yJzogJ/CfkJsnLFxuICAnVGVzdGluZyBHYXAnOiAn8J+nqicsXG4gIE90aGVyOiAn8J+TnScsXG59O1xuXG5mdW5jdGlvbiBJc3N1ZUl0ZW0oeyBcbiAgaXNzdWUsIFxuICBpc1Jldmlld2VkLCBcbiAgaXNGb2N1c2VkLCBcbiAgb25NYXJrQXNSZXZpZXdlZCwgXG4gIG9uTmF2aWdhdGVUb0ZpbGUgXG59OiBJc3N1ZUl0ZW1Qcm9wcykge1xuICBjb25zdCBbaXNDb3BpZWQsIHNldElzQ29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBmb3JtYXRJc3N1ZUFzTWFya2Rvd24gPSAoaXNzdWU6IFJldmlld0lzc3VlKSA9PiB7XG4gICAgY29uc3Qgc2V2ZXJpdHlFbW9qaSA9IHNldmVyaXR5RW1vamlzW2lzc3VlLnNldmVyaXR5XSB8fCAn8J+TnSc7XG4gICAgY29uc3QgY2F0ZWdvcnlFbW9qaSA9IGNhdGVnb3J5RW1vamlzW2lzc3VlLmNhdGVnb3J5XSB8fCBjYXRlZ29yeUVtb2ppc1snT3RoZXInXTtcblxuICAgIGxldCBtYXJrZG93biA9IGAjIyMgJHtzZXZlcml0eUVtb2ppfSAke2lzc3VlLnNldmVyaXR5fSBTZXZlcml0eTogJHtjYXRlZ29yeUVtb2ppfSAke2lzc3VlLmNhdGVnb3J5fVxcblxcbmA7XG4gICAgbWFya2Rvd24gKz0gYCoqTG9jYXRpb24qKjogXFxgJHtpc3N1ZS5maWxlUGF0aH06JHtpc3N1ZS5saW5lTnVtYmVyIHx8ICc/J31cXGBcXG5cXG5gO1xuICAgIG1hcmtkb3duICs9IGAqKkRlc2NyaXB0aW9uKio6XFxuJHtpc3N1ZS5kZXNjcmlwdGlvbn1cXG5cXG5gO1xuXG4gICAgLy8gQWRkIGNvZGUgY29udGV4dCBpZiBhdmFpbGFibGVcbiAgICBpZiAoaXNzdWUubGluZUNvbnRleHQpIHtcbiAgICAgIG1hcmtkb3duICs9ICcqKkN1cnJlbnQgQ29kZSoqOlxcbmBgYFxcbic7XG4gICAgICBpZiAoaXNzdWUubGluZUNvbnRleHQubGluZXNCZWZvcmUpIHtcbiAgICAgICAgbWFya2Rvd24gKz0gaXNzdWUubGluZUNvbnRleHQubGluZXNCZWZvcmUuam9pbignXFxuJykgKyAnXFxuJztcbiAgICAgIH1cbiAgICAgIG1hcmtkb3duICs9IGlzc3VlLmxpbmVDb250ZXh0LmNvZGVTbmlwcGV0ICsgJ1xcbic7XG4gICAgICBpZiAoaXNzdWUubGluZUNvbnRleHQubGluZXNBZnRlcikge1xuICAgICAgICBtYXJrZG93biArPSBpc3N1ZS5saW5lQ29udGV4dC5saW5lc0FmdGVyLmpvaW4oJ1xcbicpO1xuICAgICAgfVxuICAgICAgbWFya2Rvd24gKz0gJ1xcbmBgYFxcblxcbic7XG4gICAgfVxuXG4gICAgaWYgKGlzc3VlLnN1Z2dlc3Rpb24pIHtcbiAgICAgIG1hcmtkb3duICs9IGAqKlN1Z2dlc3Rpb24qKjpcXG4ke2lzc3VlLnN1Z2dlc3Rpb259XFxuXFxuYDtcbiAgICB9XG5cbiAgICBpZiAoaXNzdWUuc3VnZ2VzdGVkQ29kZSkge1xuICAgICAgbWFya2Rvd24gKz0gJyoqU3VnZ2VzdGVkIEltcGxlbWVudGF0aW9uKio6XFxuYGBgXFxuJztcbiAgICAgIG1hcmtkb3duICs9IGlzc3VlLnN1Z2dlc3RlZENvZGUgKyAnXFxuJztcbiAgICAgIG1hcmtkb3duICs9ICdgYGBcXG5cXG4nO1xuICAgIH1cblxuICAgIGlmIChpc3N1ZS5qdXN0aWZpY2F0aW9uKSB7XG4gICAgICBtYXJrZG93biArPSBgKipXaHkqKjogJHtpc3N1ZS5qdXN0aWZpY2F0aW9ufVxcblxcbmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcmtkb3duO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNvcHlJc3N1ZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbWFya2Rvd24gPSBmb3JtYXRJc3N1ZUFzTWFya2Rvd24oaXNzdWUpO1xuICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQobWFya2Rvd24pO1xuICAgICAgc2V0SXNDb3BpZWQodHJ1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldElzQ29waWVkKGZhbHNlKSwgMjAwMCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBjb3B5IHRvIGNsaXBib2FyZDonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Bpc3N1ZSAke2lzUmV2aWV3ZWQgPyAnaXNzdWUtcmV2aWV3ZWQnIDogJyd9ICR7aXNGb2N1c2VkID8gJ2lzc3VlLWZvY3VzZWQnIDogJyd9YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3VlLWhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3VlLWhlYWRlci1sZWZ0XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgaXNzdWUtc2V2ZXJpdHkgaXNzdWUtc2V2ZXJpdHktJHtpc3N1ZS5zZXZlcml0eS50b0xvd2VyQ2FzZSgpfWB9PlxuICAgICAgICAgICAge3NldmVyaXR5RW1vamlzW2lzc3VlLnNldmVyaXR5XX0ge2lzc3VlLnNldmVyaXR5fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpc3N1ZS1jYXRlZ29yeVwiPlxuICAgICAgICAgICAge2NhdGVnb3J5RW1vamlzW2lzc3VlLmNhdGVnb3J5XSB8fCBjYXRlZ29yeUVtb2ppc1snT3RoZXInXX0ge2lzc3VlLmNhdGVnb3J5fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3VlLWFjdGlvbnNcIj5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDb3B5SXNzdWV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb3B5LWlzc3VlLWJ1dHRvblwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb24gbmFtZT17aXNDb3BpZWQgPyAnY2hlY2snIDogJ2NvcHknfSBzaXplPXsxNH0gLz5cbiAgICAgICAgICAgIHtpc0NvcGllZCA/ICdDb3BpZWQhJyA6ICdDb3B5J31cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICBcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICBvbkNsaWNrPXtvbk1hcmtBc1Jldmlld2VkfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmV2aWV3LWJ1dHRvbiAke2lzUmV2aWV3ZWQgPyAncmV2aWV3ZWQnIDogJyd9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBuYW1lPXtpc1Jldmlld2VkID8gJ2NoZWNrJyA6ICdjaXJjbGUnfSBzaXplPXsxNH0gLz5cbiAgICAgICAgICAgIHtpc1Jldmlld2VkID8gJ0RvbmUnIDogJ01hcmsgRG9uZSd9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWUtZGVzY3JpcHRpb25cIj5cbiAgICAgICAge2lzc3VlLmRlc2NyaXB0aW9ufVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgXG4gICAgICAgIGNsYXNzTmFtZT1cImlzc3VlLWZpbGUtbGlua1wiXG4gICAgICAgIG9uQ2xpY2s9e29uTmF2aWdhdGVUb0ZpbGV9XG4gICAgICAgIHJvbGU9XCJidXR0b25cIlxuICAgICAgICB0YWJJbmRleD17MH1cbiAgICAgID5cbiAgICAgICAgPEljb24gbmFtZT1cImZpbGVcIiBzaXplPXsxNH0gLz5cbiAgICAgICAge2lzc3VlLmZpbGVQYXRofTp7aXNzdWUubGluZU51bWJlciB8fCAnPyd9XG4gICAgICA8L2Rpdj5cblxuICAgICAge2lzc3VlLmxpbmVDb250ZXh0ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlLXNuaXBwZXRcIj5cbiAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAge2lzc3VlLmxpbmVDb250ZXh0LmxpbmVzQmVmb3JlPy5qb2luKCdcXG4nKX1cbiAgICAgICAgICAgIHtpc3N1ZS5saW5lQ29udGV4dC5saW5lc0JlZm9yZSAmJiAnXFxuJ31cbiAgICAgICAgICAgIHtpc3N1ZS5saW5lQ29udGV4dC5jb2RlU25pcHBldH1cbiAgICAgICAgICAgIHtpc3N1ZS5saW5lQ29udGV4dC5saW5lc0FmdGVyICYmICdcXG4nfVxuICAgICAgICAgICAge2lzc3VlLmxpbmVDb250ZXh0LmxpbmVzQWZ0ZXI/LmpvaW4oJ1xcbicpfVxuICAgICAgICAgIDwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtpc3N1ZS5zdWdnZXN0aW9uICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZS1zdWdnZXN0aW9uXCI+XG4gICAgICAgICAgPHN0cm9uZz5TdWdnZXN0aW9uOjwvc3Ryb25nPiB7aXNzdWUuc3VnZ2VzdGlvbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7aXNzdWUuc3VnZ2VzdGVkQ29kZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VnZ2VzdGVkLWNvZGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWdnZXN0aW9uLWhlYWRlclwiPlxuICAgICAgICAgICAgPHN0cm9uZz5TdWdnZXN0ZWQgSW1wbGVtZW50YXRpb246PC9zdHJvbmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJzdWdnZXN0ZWQtY29kZVwiPntpc3N1ZS5zdWdnZXN0ZWRDb2RlfTwvcHJlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtpc3N1ZS5qdXN0aWZpY2F0aW9uICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZS1qdXN0aWZpY2F0aW9uXCI+XG4gICAgICAgICAgPHN0cm9uZz5XaHk6PC9zdHJvbmc+IHtpc3N1ZS5qdXN0aWZpY2F0aW9ufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBJc3N1ZXNMaXN0KHtcbiAgaXNzdWVzLFxuICBzZWFyY2hRdWVyeSxcbiAgc2V2ZXJpdHlGaWx0ZXIsXG4gIGNhdGVnb3J5RmlsdGVyLFxuICBzaG93UmV2aWV3ZWQsXG4gIHJldmlld2VkSXNzdWVzLFxuICBvbk1hcmtBc1Jldmlld2VkLFxufTogSXNzdWVzTGlzdFByb3BzKSB7XG4gIGNvbnN0IHsgcG9zdE1lc3NhZ2UgfSA9IHVzZVZTQ29kZUFQSSgpO1xuICBjb25zdCBbZm9jdXNlZElzc3VlSW5kZXgsIHNldEZvY3VzZWRJc3N1ZUluZGV4XSA9IHVzZVN0YXRlKC0xKTtcblxuICAvLyBGaWx0ZXIgaXNzdWVzIGJhc2VkIG9uIHNlYXJjaCBxdWVyeSBhbmQgZmlsdGVyc1xuICBjb25zdCBmaWx0ZXJlZElzc3VlcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBpc3N1ZXMuZmlsdGVyKChpc3N1ZSkgPT4ge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhlIGlzc3VlIGlzIHJldmlld2VkIG9yIHBlbmRpbmcgYmFzZWQgb24gdGhlIHRvZ2dsZVxuICAgICAgY29uc3QgaXNzdWVJZCA9IGAke2lzc3VlLmZpbGVQYXRofToke2lzc3VlLnNldmVyaXR5fToke2lzc3VlLmRlc2NyaXB0aW9ufWA7XG4gICAgICBjb25zdCBpc1Jldmlld2VkID0gcmV2aWV3ZWRJc3N1ZXMuaGFzKGlzc3VlSWQpO1xuXG4gICAgICBpZiAoc2hvd1Jldmlld2VkICE9PSBpc1Jldmlld2VkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gQXBwbHkgc2V2ZXJpdHkgZmlsdGVyXG4gICAgICBpZiAoc2V2ZXJpdHlGaWx0ZXIgIT09ICdBbGwnICYmIGlzc3VlLnNldmVyaXR5ICE9PSBzZXZlcml0eUZpbHRlcikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIEFwcGx5IGNhdGVnb3J5IGZpbHRlclxuICAgICAgaWYgKGNhdGVnb3J5RmlsdGVyICE9PSAnQWxsJyAmJiBpc3N1ZS5jYXRlZ29yeSAhPT0gY2F0ZWdvcnlGaWx0ZXIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBBcHBseSBzZWFyY2ggcXVlcnlcbiAgICAgIGlmIChzZWFyY2hRdWVyeSkge1xuICAgICAgICBjb25zdCBzZWFyY2hMb3dlciA9IHNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgKGlzc3VlLmRlc2NyaXB0aW9uICYmIGlzc3VlLmRlc2NyaXB0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoTG93ZXIpKSB8fFxuICAgICAgICAgIChpc3N1ZS5maWxlUGF0aCAmJiBpc3N1ZS5maWxlUGF0aC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaExvd2VyKSkgfHxcbiAgICAgICAgICAoaXNzdWUuc3VnZ2VzdGlvbiAmJiBpc3N1ZS5zdWdnZXN0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoTG93ZXIpKSB8fFxuICAgICAgICAgIChpc3N1ZS5jYXRlZ29yeSAmJiBpc3N1ZS5jYXRlZ29yeS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaExvd2VyKSlcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG4gIH0sIFtpc3N1ZXMsIHNlYXJjaFF1ZXJ5LCBzZXZlcml0eUZpbHRlciwgY2F0ZWdvcnlGaWx0ZXIsIHJldmlld2VkSXNzdWVzLCBzaG93UmV2aWV3ZWRdKTtcblxuICAvLyBIYW5kbGUga2V5Ym9hcmQgbmF2aWdhdGlvblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgLy8gT25seSBoYW5kbGUga2V5Ym9hcmQgc2hvcnRjdXRzIHdoZW4gaXNzdWVzIGFyZSB2aXNpYmxlXG4gICAgICBpZiAoZmlsdGVyZWRJc3N1ZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgY2FzZSAnayc6IC8vIE5leHQgaXNzdWVcbiAgICAgICAgICBzZXRGb2N1c2VkSXNzdWVJbmRleCgocHJldikgPT4gXG4gICAgICAgICAgICBwcmV2IDwgZmlsdGVyZWRJc3N1ZXMubGVuZ3RoIC0gMSA/IHByZXYgKyAxIDogcHJldlxuICAgICAgICAgICk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2onOiAvLyBQcmV2aW91cyBpc3N1ZVxuICAgICAgICAgIHNldEZvY3VzZWRJc3N1ZUluZGV4KChwcmV2KSA9PiAocHJldiA+IDAgPyBwcmV2IC0gMSA6IHByZXYpKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZCc6IC8vIE1hcmsvdW5tYXJrIGFzIGRvbmVcbiAgICAgICAgICBpZiAoZm9jdXNlZElzc3VlSW5kZXggPj0gMCAmJiBmb2N1c2VkSXNzdWVJbmRleCA8IGZpbHRlcmVkSXNzdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgb25NYXJrQXNSZXZpZXdlZChmaWx0ZXJlZElzc3Vlc1tmb2N1c2VkSXNzdWVJbmRleF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZic6IC8vIE5hdmlnYXRlIHRvIGZpbGVcbiAgICAgICAgICBpZiAoZm9jdXNlZElzc3VlSW5kZXggPj0gMCAmJiBmb2N1c2VkSXNzdWVJbmRleCA8IGZpbHRlcmVkSXNzdWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgaXNzdWUgPSBmaWx0ZXJlZElzc3Vlc1tmb2N1c2VkSXNzdWVJbmRleF07XG4gICAgICAgICAgICBwb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgIGNvbW1hbmQ6ICduYXZpZ2F0ZVRvRmlsZScsXG4gICAgICAgICAgICAgIGZpbGVQYXRoOiBpc3N1ZS5maWxlUGF0aCxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogaXNzdWUubGluZU51bWJlcixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlEb3duKTtcbiAgfSwgW2ZpbHRlcmVkSXNzdWVzLCBmb2N1c2VkSXNzdWVJbmRleCwgb25NYXJrQXNSZXZpZXdlZCwgcG9zdE1lc3NhZ2VdKTtcblxuICAvLyBSZXNldCBmb2N1c2VkIGlzc3VlIHdoZW4gZmlsdGVyZWQgaXNzdWVzIGNoYW5nZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZvY3VzZWRJc3N1ZUluZGV4KGZpbHRlcmVkSXNzdWVzLmxlbmd0aCA+IDAgPyAwIDogLTEpO1xuICB9LCBbZmlsdGVyZWRJc3N1ZXMubGVuZ3RoXSk7XG5cbiAgY29uc3QgaGFuZGxlTmF2aWdhdGVUb0ZpbGUgPSB1c2VDYWxsYmFjaygoaXNzdWU6IFJldmlld0lzc3VlKSA9PiB7XG4gICAgcG9zdE1lc3NhZ2Uoe1xuICAgICAgY29tbWFuZDogJ25hdmlnYXRlVG9GaWxlJyxcbiAgICAgIGZpbGVQYXRoOiBpc3N1ZS5maWxlUGF0aCxcbiAgICAgIGxpbmVOdW1iZXI6IGlzc3VlLmxpbmVOdW1iZXIsXG4gICAgfSk7XG4gIH0sIFtwb3N0TWVzc2FnZV0pO1xuXG4gIGlmIChmaWx0ZXJlZElzc3Vlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1pc3N1ZXNcIj5cbiAgICAgICAgPGgzPntzaG93UmV2aWV3ZWQgPyAnTm8gRG9uZSBJc3N1ZXMnIDogJ05vIFBlbmRpbmcgSXNzdWVzJ308L2gzPlxuICAgICAgICA8cD5cbiAgICAgICAgICB7c2hvd1Jldmlld2VkXG4gICAgICAgICAgICA/IFwiWW91IGhhdmVuJ3QgbWFya2VkIGFueSBpc3N1ZXMgYXMgZG9uZSB5ZXQuXCJcbiAgICAgICAgICAgIDogc2VhcmNoUXVlcnkgfHwgc2V2ZXJpdHlGaWx0ZXIgIT09ICdBbGwnIHx8IGNhdGVnb3J5RmlsdGVyICE9PSAnQWxsJ1xuICAgICAgICAgICAgPyAnTm8gaXNzdWVzIG1hdGNoIHRoZSBjdXJyZW50IGZpbHRlcnMuJ1xuICAgICAgICAgICAgOiAnR3JlYXQgam9iISBUaGUgY29kZSByZXZpZXcgZm91bmQgbm8gc2lnbmlmaWNhbnQgaXNzdWVzLid9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlcmVkLWNvdW50XCI+XG4gICAgICAgIDxzcGFuPlNob3dpbmcge2ZpbHRlcmVkSXNzdWVzLmxlbmd0aH0ge3Nob3dSZXZpZXdlZCA/ICdkb25lJyA6ICdwZW5kaW5nJ30gaXNzdWVzPC9zcGFuPlxuICAgICAgICB7ZmlsdGVyZWRJc3N1ZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXlib2FyZC1zaG9ydGN1dHNcIj5cbiAgICAgICAgICAgIDxzcGFuPktleWJvYXJkIHNob3J0Y3V0czogPC9zcGFuPlxuICAgICAgICAgICAgPGtiZD5qPC9rYmQ+XG4gICAgICAgICAgICA8c3Bhbj4gcHJldmlvdXMsIDwvc3Bhbj5cbiAgICAgICAgICAgIDxrYmQ+azwva2JkPlxuICAgICAgICAgICAgPHNwYW4+IG5leHQsIDwvc3Bhbj5cbiAgICAgICAgICAgIDxrYmQ+ZDwva2JkPlxuICAgICAgICAgICAgPHNwYW4+IG1hcmsgYXMgZG9uZSwgPC9zcGFuPlxuICAgICAgICAgICAgPGtiZD5mPC9rYmQ+XG4gICAgICAgICAgICA8c3Bhbj4gZ28gdG8gZmlsZTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3Vlcy1jb250YWluZXJcIj5cbiAgICAgICAge2ZpbHRlcmVkSXNzdWVzLm1hcCgoaXNzdWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNzdWVJZCA9IGAke2lzc3VlLmZpbGVQYXRofToke2lzc3VlLnNldmVyaXR5fToke2lzc3VlLmRlc2NyaXB0aW9ufWA7XG4gICAgICAgICAgY29uc3QgaXNSZXZpZXdlZCA9IHJldmlld2VkSXNzdWVzLmhhcyhpc3N1ZUlkKTtcbiAgICAgICAgICBjb25zdCBpc0ZvY3VzZWQgPSBpbmRleCA9PT0gZm9jdXNlZElzc3VlSW5kZXg7XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPElzc3VlSXRlbVxuICAgICAgICAgICAgICBrZXk9e2lzc3VlSWR9XG4gICAgICAgICAgICAgIGlzc3VlPXtpc3N1ZX1cbiAgICAgICAgICAgICAgaXNSZXZpZXdlZD17aXNSZXZpZXdlZH1cbiAgICAgICAgICAgICAgaXNGb2N1c2VkPXtpc0ZvY3VzZWR9XG4gICAgICAgICAgICAgIG9uTWFya0FzUmV2aWV3ZWQ9eygpID0+IG9uTWFya0FzUmV2aWV3ZWQoaXNzdWUpfVxuICAgICAgICAgICAgICBvbk5hdmlnYXRlVG9GaWxlPXsoKSA9PiBoYW5kbGVOYXZpZ2F0ZVRvRmlsZShpc3N1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFByUHJvZ3Jlc3NVcGRhdGUge1xuICBjb21wbGV0ZWQ6IG51bWJlcjtcbiAgdG90YWw6IG51bWJlcjtcbiAgY3VycmVudEZpbGU/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBQcm9ncmVzc0luZGljYXRvclByb3BzIHtcbiAgcHJvZ3Jlc3M6IFByUHJvZ3Jlc3NVcGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9ncmVzc0luZGljYXRvcih7IHByb2dyZXNzIH06IFByb2dyZXNzSW5kaWNhdG9yUHJvcHMpIHtcbiAgaWYgKCFwcm9ncmVzcykgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgeyBjb21wbGV0ZWQsIHRvdGFsLCBjdXJyZW50RmlsZSB9ID0gcHJvZ3Jlc3M7XG4gIGNvbnN0IHBlcmNlbnQgPSBNYXRoLmZsb29yKChjb21wbGV0ZWQgLyB0b3RhbCkgKiAxMDApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtaGVhZGVyXCI+XG4gICAgICAgIDxzcGFuPlByb2Nlc3Npbmcge2NvbXBsZXRlZH0gb2Yge3RvdGFsfSBmaWxlIGdyb3VwcyAoe3BlcmNlbnR9JSk8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXItY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyXCIgXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAke3BlcmNlbnR9JWAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICB7Y3VycmVudEZpbGUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWN1cnJlbnQtZmlsZVwiPlxuICAgICAgICAgIDxzcGFuPkN1cnJlbnRseSBwcm9jZXNzaW5nOiB7Y3VycmVudEZpbGV9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1vZGVsU2VsZWN0b3IsIEJ1dHRvbiB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzJztcbmltcG9ydCB7IE1vZGVsQ29uZmlnIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3R5cGVzJztcblxuaW50ZXJmYWNlIFJldmlld0NvbmZpZ3VyYXRpb25Qcm9wcyB7XG4gIGJyYW5jaGVzOiBzdHJpbmdbXTtcbiAgY3VycmVudEJyYW5jaDogc3RyaW5nO1xuICBzb3VyY2VCcmFuY2g6IHN0cmluZztcbiAgdGFyZ2V0QnJhbmNoOiBzdHJpbmc7XG4gIHNlbGVjdGVkTW9kZWw6IHN0cmluZztcbiAgbW9kZWxzOiBNb2RlbENvbmZpZ1tdO1xuICBpc0xvYWRpbmc6IGJvb2xlYW47XG4gIG9uU291cmNlQnJhbmNoQ2hhbmdlOiAoYnJhbmNoOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uVGFyZ2V0QnJhbmNoQ2hhbmdlOiAoYnJhbmNoOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uTW9kZWxDaGFuZ2U6IChtb2RlbDogc3RyaW5nKSA9PiB2b2lkO1xuICBvblJldmlldzogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJldmlld0NvbmZpZ3VyYXRpb24oe1xuICBicmFuY2hlcyxcbiAgY3VycmVudEJyYW5jaCxcbiAgc291cmNlQnJhbmNoLFxuICB0YXJnZXRCcmFuY2gsXG4gIHNlbGVjdGVkTW9kZWwsXG4gIG1vZGVscyxcbiAgaXNMb2FkaW5nLFxuICBvblNvdXJjZUJyYW5jaENoYW5nZSxcbiAgb25UYXJnZXRCcmFuY2hDaGFuZ2UsXG4gIG9uTW9kZWxDaGFuZ2UsXG4gIG9uUmV2aWV3LFxufTogUmV2aWV3Q29uZmlndXJhdGlvblByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItcm93XCI+XG4gICAgICAgIDxoMj5QUiBSZXZpZXcgQXNzaXN0YW50PC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlbC1zZWxlY3RvclwiPlxuICAgICAgICAgIDxNb2RlbFNlbGVjdG9yXG4gICAgICAgICAgICBzZWxlY3RlZE1vZGVsPXtzZWxlY3RlZE1vZGVsfVxuICAgICAgICAgICAgb25Nb2RlbENoYW5nZT17b25Nb2RlbENoYW5nZX1cbiAgICAgICAgICAgIG1vZGVscz17bW9kZWxzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmNoZXMtcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmNoLXNlbGVjdG9yXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzb3VyY2VCcmFuY2hcIj5Tb3VyY2UgQnJhbmNoICh3aXRoIGNoYW5nZXMpOjwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgaWQ9XCJzb3VyY2VCcmFuY2hcIlxuICAgICAgICAgICAgdmFsdWU9e3NvdXJjZUJyYW5jaH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25Tb3VyY2VCcmFuY2hDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YnJhbmNoZXMubWFwKChicmFuY2gpID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2JyYW5jaH0gdmFsdWU9e2JyYW5jaH0+XG4gICAgICAgICAgICAgICAge2JyYW5jaCArIChicmFuY2ggPT09IGN1cnJlbnRCcmFuY2ggPyAnIChjdXJyZW50KScgOiAnJyl9XG4gICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuY2gtc2VsZWN0b3JcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRhcmdldEJyYW5jaFwiPlRhcmdldCBCcmFuY2ggKGJhc2UgYnJhbmNoKTo8L2xhYmVsPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIGlkPVwidGFyZ2V0QnJhbmNoXCJcbiAgICAgICAgICAgIHZhbHVlPXt0YXJnZXRCcmFuY2h9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uVGFyZ2V0QnJhbmNoQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YnJhbmNoZXMubWFwKChicmFuY2gpID0+IChcbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2JyYW5jaH0gdmFsdWU9e2JyYW5jaH0+XG4gICAgICAgICAgICAgICAge2JyYW5jaH1cbiAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgb25DbGljaz17b25SZXZpZXd9XG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgICAgICAgICBsb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwicmV2aWV3LXByLWJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICB7aXNMb2FkaW5nID8gJ1Jldmlld2luZy4uLicgOiAnUmV2aWV3IFBSIENoYW5nZXMnfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2V2ZXJpdHlDaGFydCB9IGZyb20gJy4vU2V2ZXJpdHlDaGFydCc7XG5cbmludGVyZmFjZSBSZXZpZXdTdGF0cyB7XG4gIHRvdGFsOiBudW1iZXI7XG4gIHJldmlld2VkOiBudW1iZXI7XG4gIHBlbmRpbmc6IG51bWJlcjtcbiAgYnlTZXZlcml0eTogUmVjb3JkPHN0cmluZywgbnVtYmVyPjtcbiAgYnlDYXRlZ29yeTogUmVjb3JkPHN0cmluZywgbnVtYmVyPjtcbn1cblxuaW50ZXJmYWNlIFJldmlld0Rhc2hib2FyZFByb3BzIHtcbiAgc3RhdHM6IFJldmlld1N0YXRzIHwgbnVsbDtcbn1cblxuY29uc3QgY2F0ZWdvcnlFbW9qaXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIFNlY3VyaXR5OiAn8J+UkicsXG4gICdDb2RlIFN0eWxlJzogJ/CfjqgnLFxuICBQZXJmb3JtYW5jZTogJ+KaoScsXG4gICdCcmVha2luZyBDaGFuZ2UnOiAn8J+SpScsXG4gICdMb2dpY2FsIEVycm9yJzogJ/CfkJsnLFxuICAnVGVzdGluZyBHYXAnOiAn8J+nqicsXG4gIE90aGVyOiAn8J+TnScsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gUmV2aWV3RGFzaGJvYXJkKHsgc3RhdHMgfTogUmV2aWV3RGFzaGJvYXJkUHJvcHMpIHtcbiAgaWYgKCFzdGF0cykgcmV0dXJuIG51bGw7XG5cbiAgLy8gQ2FsY3VsYXRlIHBlcmNlbnRhZ2VzIGZvciB0aGUgc2V2ZXJpdHkgY2hhcnRcbiAgY29uc3Qgc2V2ZXJpdHlQZXJjZW50YWdlcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICghc3RhdHMudG90YWwpIHJldHVybiBbXTtcblxuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhzdGF0cy5ieVNldmVyaXR5KS5tYXAoKFtzZXZlcml0eSwgY291bnRdKSA9PiAoe1xuICAgICAgc2V2ZXJpdHksXG4gICAgICBjb3VudCxcbiAgICAgIHBlcmNlbnRhZ2U6IChjb3VudCAvIHN0YXRzLnRvdGFsKSAqIDEwMCxcbiAgICB9KSk7XG4gIH0sIFtzdGF0c10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkLXNlY3Rpb25cIj5cbiAgICAgICAgPGgzPlJldmlldyBQcm9ncmVzczwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3Mtc3RhdHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXQtaXRlbVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3RhdC1sYWJlbFwiPlRvdGFsIElzc3Vlczwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0YXQtdmFsdWVcIj57c3RhdHMudG90YWx9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdC1pdGVtXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGF0LWxhYmVsXCI+UmV2aWV3ZWQ8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGF0LXZhbHVlXCI+e3N0YXRzLnJldmlld2VkfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXQtaXRlbVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3RhdC1sYWJlbFwiPlBlbmRpbmc8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGF0LXZhbHVlXCI+e3N0YXRzLnBlbmRpbmd9PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyLWNvbnRhaW5lciBkYXNoYm9hcmQtcHJvZ3Jlc3NcIj5cbiAgICAgICAgICAgIDxkaXYgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByb2dyZXNzLWJhclwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IFxuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHtzdGF0cy50b3RhbCA+IDAgPyAoc3RhdHMucmV2aWV3ZWQgLyBzdGF0cy50b3RhbCkgKiAxMDAgOiAwfSVgIFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmQtc2VjdGlvblwiPlxuICAgICAgICA8aDM+SXNzdWVzIGJ5IFNldmVyaXR5PC9oMz5cbiAgICAgICAgPFNldmVyaXR5Q2hhcnQgc2V2ZXJpdHlQZXJjZW50YWdlcz17c2V2ZXJpdHlQZXJjZW50YWdlc30gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXZlcml0eS1zdGF0c1wiPlxuICAgICAgICAgIHtPYmplY3QuZW50cmllcyhzdGF0cy5ieVNldmVyaXR5KS5tYXAoKFtzZXZlcml0eSwgY291bnRdKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgICBrZXk9e3NldmVyaXR5fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzdGF0LWl0ZW0gc2V2ZXJpdHktc3RhdCBzZXZlcml0eS0ke3NldmVyaXR5LnRvTG93ZXJDYXNlKCl9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3RhdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNldmVyaXR5LWRvdFwiIC8+XG4gICAgICAgICAgICAgICAge3NldmVyaXR5fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0YXQtdmFsdWVcIj57Y291bnR9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaGJvYXJkLXNlY3Rpb25cIj5cbiAgICAgICAgPGgzPklzc3VlcyBieSBDYXRlZ29yeTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktc3RhdHNcIj5cbiAgICAgICAgICB7T2JqZWN0LmVudHJpZXMoc3RhdHMuYnlDYXRlZ29yeSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSkgLy8gU29ydCBieSBjb3VudCBkZXNjZW5kaW5nXG4gICAgICAgICAgICAubWFwKChbY2F0ZWdvcnksIGNvdW50XSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17Y2F0ZWdvcnl9IGNsYXNzTmFtZT1cInN0YXQtaXRlbSBjYXRlZ29yeS1zdGF0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3RhdC1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2NhdGVnb3J5RW1vamlzW2NhdGVnb3J5XSB8fCBjYXRlZ29yeUVtb2ppc1snT3RoZXInXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAge2NhdGVnb3J5fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGF0LXZhbHVlXCI+e2NvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIEljb24gfSBmcm9tICcuLi8uLi9zaGFyZWQvY29tcG9uZW50cyc7XG5cbmludGVyZmFjZSBSZXZpZXdTdW1tYXJ5RGF0YSB7XG4gIGFzc2Vzc21lbnQ6IHN0cmluZztcbiAgc3RyZW5ndGhzOiBzdHJpbmdbXTtcbiAgY3JpdGljYWxJc3N1ZXM6IHN0cmluZ1tdO1xuICByZWNvbW1lbmRhdGlvbnM6IHN0cmluZ1tdO1xufVxuXG5pbnRlcmZhY2UgUmV2aWV3U3VtbWFyeVByb3BzIHtcbiAgc3VtbWFyeTogUmV2aWV3U3VtbWFyeURhdGE7XG4gIGlzQ29sbGFwc2VkOiBib29sZWFuO1xuICBvblRvZ2dsZUNvbGxhcHNlOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgU3VtbWFyeVNlY3Rpb25Qcm9wcyB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGNvbnRlbnQ/OiBzdHJpbmc7XG4gIGl0ZW1zPzogc3RyaW5nW107XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbn1cblxuZnVuY3Rpb24gU3VtbWFyeVNlY3Rpb24oeyB0aXRsZSwgY29udGVudCwgaXRlbXMsIGNsYXNzTmFtZSB9OiBTdW1tYXJ5U2VjdGlvblByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BzdW1tYXJ5LXNlY3Rpb24gJHtjbGFzc05hbWUgfHwgJyd9YH0+XG4gICAgICA8aDM+e3RpdGxlfTwvaDM+XG4gICAgICB7Y29udGVudCAmJiA8cD57Y29udGVudH08L3A+fVxuICAgICAge2l0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8dWw+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57aXRlbX08L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJldmlld1N1bW1hcnkoeyBcbiAgc3VtbWFyeSwgXG4gIGlzQ29sbGFwc2VkLCBcbiAgb25Ub2dnbGVDb2xsYXBzZSBcbn06IFJldmlld1N1bW1hcnlQcm9wcykge1xuICBjb25zdCBbaXNDb3BpZWQsIHNldElzQ29waWVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBmb3JtYXRSZXZpZXdBc01hcmtkb3duID0gKHN1bW1hcnk6IFJldmlld1N1bW1hcnlEYXRhKSA9PiB7XG4gICAgbGV0IG1hcmtkb3duID0gJyMjIENvZGUgUmV2aWV3IFN1bW1hcnlcXG5cXG4nO1xuXG4gICAgLy8gQWRkIG92ZXJhbGwgYXNzZXNzbWVudFxuICAgIG1hcmtkb3duICs9ICcjIyMgT3ZlcmFsbCBBc3Nlc3NtZW50XFxuJztcbiAgICBtYXJrZG93biArPSBzdW1tYXJ5LmFzc2Vzc21lbnQgKyAnXFxuXFxuJztcblxuICAgIC8vIEFkZCBzdHJlbmd0aHNcbiAgICBpZiAoc3VtbWFyeS5zdHJlbmd0aHMgJiYgc3VtbWFyeS5zdHJlbmd0aHMubGVuZ3RoID4gMCkge1xuICAgICAgbWFya2Rvd24gKz0gJyMjIyBLZXkgU3RyZW5ndGhzIOKcqFxcbic7XG4gICAgICBzdW1tYXJ5LnN0cmVuZ3Rocy5mb3JFYWNoKChzdHJlbmd0aCkgPT4ge1xuICAgICAgICBtYXJrZG93biArPSBgKiAke3N0cmVuZ3RofVxcbmA7XG4gICAgICB9KTtcbiAgICAgIG1hcmtkb3duICs9ICdcXG4nO1xuICAgIH1cblxuICAgIC8vIEFkZCBjcml0aWNhbCBpc3N1ZXMgaWYgYW55XG4gICAgaWYgKHN1bW1hcnkuY3JpdGljYWxJc3N1ZXMgJiYgc3VtbWFyeS5jcml0aWNhbElzc3Vlcy5sZW5ndGggPiAwKSB7XG4gICAgICBtYXJrZG93biArPSAnIyMjIENyaXRpY2FsIElzc3VlcyB0byBBZGRyZXNzIPCfmqhcXG4nO1xuICAgICAgc3VtbWFyeS5jcml0aWNhbElzc3Vlcy5mb3JFYWNoKChpc3N1ZSkgPT4ge1xuICAgICAgICBtYXJrZG93biArPSBgKiAke2lzc3VlfVxcbmA7XG4gICAgICB9KTtcbiAgICAgIG1hcmtkb3duICs9ICdcXG4nO1xuICAgIH1cblxuICAgIC8vIEFkZCByZWNvbW1lbmRhdGlvbnNcbiAgICBpZiAoc3VtbWFyeS5yZWNvbW1lbmRhdGlvbnMgJiYgc3VtbWFyeS5yZWNvbW1lbmRhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgbWFya2Rvd24gKz0gJyMjIyBSZWNvbW1lbmRhdGlvbnMg8J+SoVxcbic7XG4gICAgICBzdW1tYXJ5LnJlY29tbWVuZGF0aW9ucy5mb3JFYWNoKChyZWMpID0+IHtcbiAgICAgICAgbWFya2Rvd24gKz0gYCogJHtyZWN9XFxuYDtcbiAgICAgIH0pO1xuICAgICAgbWFya2Rvd24gKz0gJ1xcbic7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcmtkb3duO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNvcHlNYXJrZG93biA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgbWFya2Rvd24gPSBmb3JtYXRSZXZpZXdBc01hcmtkb3duKHN1bW1hcnkpO1xuICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQobWFya2Rvd24pO1xuICAgICAgc2V0SXNDb3BpZWQodHJ1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldElzQ29waWVkKGZhbHNlKSwgMjAwMCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBjb3B5IHRvIGNsaXBib2FyZDonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LXRvZ2dsZVwiIG9uQ2xpY2s9e29uVG9nZ2xlQ29sbGFwc2V9PlxuICAgICAgICA8aDI+UmV2aWV3IFN1bW1hcnk8L2gyPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b2dnbGUtaWNvblwiPlxuICAgICAgICAgIHtpc0NvbGxhcHNlZCA/ICfilrYnIDogJ+KWvCd9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7IWlzQ29sbGFwc2VkICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwci1zdW1tYXJ5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5LWhlYWRlclwiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ29weU1hcmtkb3dufVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb3B5LW1hcmtkb3duLWJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uIG5hbWU9e2lzQ29waWVkID8gJ2NoZWNrJyA6ICdjb3B5J30gc2l6ZT17MTR9IC8+XG4gICAgICAgICAgICAgIHtpc0NvcGllZCA/ICdDb3BpZWQhJyA6ICdDb3B5IEFsbCBSZXZpZXcnfVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8U3VtbWFyeVNlY3Rpb25cbiAgICAgICAgICAgIHRpdGxlPVwiT3ZlcmFsbCBBc3Nlc3NtZW50XCJcbiAgICAgICAgICAgIGNvbnRlbnQ9e3N1bW1hcnkuYXNzZXNzbWVudH1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPFN1bW1hcnlTZWN0aW9uXG4gICAgICAgICAgICB0aXRsZT1cIktleSBTdHJlbmd0aHNcIlxuICAgICAgICAgICAgaXRlbXM9e3N1bW1hcnkuc3RyZW5ndGhzfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwia2V5LXN0cmVuZ3Roc1wiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIHtzdW1tYXJ5LmNyaXRpY2FsSXNzdWVzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgPFN1bW1hcnlTZWN0aW9uXG4gICAgICAgICAgICAgIHRpdGxlPVwiQ3JpdGljYWwgSXNzdWVzIHRvIEFkZHJlc3NcIlxuICAgICAgICAgICAgICBpdGVtcz17c3VtbWFyeS5jcml0aWNhbElzc3Vlc31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3JpdGljYWwtaXNzdWVzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxTdW1tYXJ5U2VjdGlvblxuICAgICAgICAgICAgdGl0bGU9XCJSZWNvbW1lbmRhdGlvbnNcIlxuICAgICAgICAgICAgaXRlbXM9e3N1bW1hcnkucmVjb21tZW5kYXRpb25zfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgU2V2ZXJpdHlQZXJjZW50YWdlIHtcbiAgc2V2ZXJpdHk6IHN0cmluZztcbiAgY291bnQ6IG51bWJlcjtcbiAgcGVyY2VudGFnZTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgU2V2ZXJpdHlDaGFydFByb3BzIHtcbiAgc2V2ZXJpdHlQZXJjZW50YWdlczogU2V2ZXJpdHlQZXJjZW50YWdlW107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTZXZlcml0eUNoYXJ0KHsgc2V2ZXJpdHlQZXJjZW50YWdlcyB9OiBTZXZlcml0eUNoYXJ0UHJvcHMpIHtcbiAgaWYgKHNldmVyaXR5UGVyY2VudGFnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V2ZXJpdHktY2hhcnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1kYXRhXCI+Tm8gaXNzdWVzIHRvIGRpc3BsYXk8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2V2ZXJpdHktY2hhcnRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhY2tlZC1iYXJcIj5cbiAgICAgICAge3NldmVyaXR5UGVyY2VudGFnZXMubWFwKCh7IHNldmVyaXR5LCBwZXJjZW50YWdlIH0pID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e3NldmVyaXR5fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgc2V2ZXJpdHktYmFyIHNldmVyaXR5LSR7c2V2ZXJpdHkudG9Mb3dlckNhc2UoKX1gfVxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAke3BlcmNlbnRhZ2V9JWAgfX1cbiAgICAgICAgICAgIHRpdGxlPXtgJHtzZXZlcml0eX06ICR7TWF0aC5yb3VuZChwZXJjZW50YWdlKX0lYH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSAncmVhY3QtZG9tL2NsaWVudCc7XG5pbXBvcnQgeyBFcnJvckJvdW5kYXJ5IH0gZnJvbSAnLi4vc2hhcmVkL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgUHJSZXZpZXdBcHAgfSBmcm9tICcuL1ByUmV2aWV3QXBwJztcbmltcG9ydCAnLi9zdHlsZXMvcHItcmV2aWV3LmNzcyc7XG5cbi8vIEluaXRpYWxpemUgdGhlIFJlYWN0IGFwcFxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbmlmIChjb250YWluZXIpIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoY29udGFpbmVyKTtcbiAgcm9vdC5yZW5kZXIoXG4gICAgPEVycm9yQm91bmRhcnk+XG4gICAgICA8UHJSZXZpZXdBcHAgLz5cbiAgICA8L0Vycm9yQm91bmRhcnk+XG4gICk7XG59IGVsc2Uge1xuICBjb25zb2xlLmVycm9yKCdSb290IGNvbnRhaW5lciBub3QgZm91bmQnKTtcbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS4yX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ByLXJldmlldy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANy4xLjJfd2VicGFja0A1LjEwMS4zL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcHItcmV2aWV3LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicHItcmV2aWV3XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2NvcGlsb3RfcGx1c19wbHVzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2NvcGlsb3RfcGx1c19wbHVzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIixcInNoYXJlZFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy93ZWJ2aWV3cy9wci1yZXZpZXcvaW5kZXgudHN4XCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=