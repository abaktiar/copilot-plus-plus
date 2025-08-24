/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./src/webviews/breaking-changes/styles/breaking-changes.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./src/webviews/breaking-changes/styles/breaking-changes.css ***!
  \*************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_shared_styles_components_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!../../shared/styles/components.css */ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./src/webviews/shared/styles/components.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_shared_styles_components_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Import shared component styles */

:root {
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

h4 {
  font-size: 14px;
  margin-bottom: 8px;
  font-weight: 500;
}

.section {
  background: var(--vscode-editor-background);
  border: 1px solid var(--vscode-widget-border);
  border-radius: var(--border-radius);
  padding: 24px;
  margin-bottom: 32px;
  box-shadow: var(--card-shadow);
}

.section h2 {
  margin: 0 0 24px 0;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--vscode-widget-border);
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--vscode-editor-foreground);
}

/* Header row styles */
.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--vscode-widget-border);
}

.title-section {
  display: flex;
  align-items: center;
  gap: 8px;
}

.title-section h2 {
  margin: 0;
  padding: 0;
  border: none;
}

.model-section {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Branch selection styles */
.branch-selection-row {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.branch-selector {
  flex: 1;
}

.analyze-button-row {
  display: flex;
  justify-content: flex-end;
}

/* Loading and error styles */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 32px;
  text-align: center;
}

.error-message {
  background: var(--vscode-inputValidation-errorBackground);
  color: var(--vscode-inputValidation-errorForeground);
  border: 1px solid var(--vscode-inputValidation-errorBorder);
  padding: 16px;
  border-radius: var(--border-radius);
  margin-bottom: 24px;
}

/* Summary styles */
.summary {
  margin-bottom: 24px;
}

.summary-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 12px;
}

.stat {
  background: var(--vscode-input-background);
  padding: 8px 16px;
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 80px;
}

.stat-label {
  font-size: 12px;
  color: var(--vscode-descriptionForeground);
}

.stat-value {
  font-size: 18px;
  font-weight: 600;
}

.stat.critical .stat-value {
  color: var(--vscode-errorForeground);
}

.stat.high .stat-value {
  color: var(--vscode-testing-iconFailed);
}

.stat.medium .stat-value {
  color: var(--vscode-testing-iconSkipped);
}

.stat.low .stat-value {
  color: var(--vscode-testing-iconQueued);
}

/* Filter styles */
.filters-section {
  margin-bottom: 24px;
  background-color: var(--vscode-editor-background);
}

.filters-section h3 {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 18px;
  font-weight: 500;
  color: var(--vscode-foreground);
}

.search-row {
  margin-bottom: 16px;
}

.filter-row {
  display: flex;
  gap: 24px;
  align-items: flex-start;
}

.filter-column {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  max-width: 50%;
}

.filter-column label {
  font-size: 14px;
  margin-bottom: 8px;
  color: var(--vscode-foreground);
}

.dark-select {
  width: 100%;
  padding: 8px 12px;
  background-color: var(--vscode-input-background);
  color: var(--vscode-input-foreground);
  border: 1px solid var(--vscode-input-border);
  border-radius: 4px;
  font-size: 14px;
  height: 36px;
  appearance: menulist;
}

.dark-select:focus {
  outline: 1px solid var(--vscode-focusBorder);
  border-color: var(--vscode-focusBorder);
}

.dark-input {
  width: 100%;
  padding: 8px 12px;
  background-color: var(--vscode-input-background);
  color: var(--vscode-input-foreground);
  border: 1px solid var(--vscode-input-border);
  border-radius: 4px;
  font-size: 14px;
  height: 24px;
}

.dark-input::placeholder {
  color: var(--vscode-input-placeholderForeground);
  opacity: 0.7;
}

.dark-input:focus {
  outline: 1px solid var(--vscode-focusBorder);
  border-color: var(--vscode-focusBorder);
}

.filter-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--vscode-widget-border);
}

.filter-actions h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
}

/* Breaking changes list styles */
.breaking-changes-list {
  margin-top: 16px;
}

.no-results {
  text-align: center;
  padding: 24px;
  background: var(--vscode-input-background);
  border-radius: var(--border-radius);
  color: var(--vscode-descriptionForeground);
}

.breaking-change-item {
  background: var(--vscode-input-background);
  border-radius: var(--border-radius);
  margin-bottom: 16px;
  overflow: hidden;
  transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;
}

.breaking-change-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--hover-shadow);
}

.breaking-change-header {
  padding: 12px 16px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.breaking-change-title {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.severity-badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
}

.severity-badge.severity-critical {
  background-color: var(--vscode-errorForeground);
  color: var(--vscode-editor-background);
}

.severity-badge.severity-high {
  background-color: var(--vscode-testing-iconFailed);
  color: var(--vscode-editor-background);
}

.severity-badge.severity-medium {
  background-color: var(--vscode-testing-iconSkipped);
  color: var(--vscode-editor-background);
}

.severity-badge.severity-low {
  background-color: var(--vscode-testing-iconQueued);
  color: var(--vscode-editor-background);
}

.change-type-badge {
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 12px;
  background: var(--vscode-button-secondaryBackground);
  color: var(--vscode-button-secondaryForeground);
}

.breaking-change-description {
  margin-left: 8px;
}

.breaking-change-location {
  display: flex;
  align-items: center;
  gap: 8px;
}

.file-location {
  font-family: var(--vscode-editor-font-family);
  font-size: 12px;
  cursor: pointer;
  text-decoration: underline;
  color: var(--vscode-textLink-foreground);
}

.file-location:hover {
  color: var(--vscode-textLink-activeForeground);
}

.expand-icon {
  font-size: 12px;
  color: var(--vscode-descriptionForeground);
}

.breaking-change-details {
  padding: 16px;
  border-top: 1px solid var(--vscode-widget-border);
  background: var(--vscode-editor-background);
}

.recommendation, .affected-locations {
  margin-bottom: 16px;
}

.locations-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.location-item {
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--vscode-widget-border);
}

.location-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.location-header {
  margin-bottom: 8px;
}

.code-snippet {
  background: var(--vscode-textBlockQuote-background);
  border-radius: var(--border-radius);
  overflow: hidden;
}

.code-snippet pre {
  margin: 0;
  padding: 12px;
  font-family: var(--vscode-editor-font-family);
  font-size: 13px;
  line-height: 1.5;
  overflow-x: auto;
  white-space: pre;
  word-wrap: normal;
}

/* Add horizontal scrollbar styling */
.code-snippet pre::-webkit-scrollbar {
  height: 8px;
  background-color: var(--vscode-scrollbarSlider-background);
}

.code-snippet pre::-webkit-scrollbar-thumb {
  background-color: var(--vscode-scrollbarSlider-hoverBackground);
  border-radius: 4px;
}

.code-snippet pre::-webkit-scrollbar-thumb:hover {
  background-color: var(--vscode-scrollbarSlider-activeBackground);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .header-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  
  .branch-selection-row {
    flex-direction: column;
  }
  
  .filter-row {
    flex-direction: column;
  }
  
  .filter-column {
    max-width: 100%;
  }
  
  .breaking-change-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .breaking-change-location {
    margin-top: 8px;
  }
}`, "",{"version":3,"sources":["webpack://./src/webviews/breaking-changes/styles/breaking-changes.css"],"names":[],"mappings":"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","sourcesContent":["/* Import shared component styles */\n@import '../../shared/styles/components.css';\n\n:root {\n  --container-padding: 20px;\n  --border-radius: 8px;\n  --transition-speed: 0.2s;\n  --card-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  --hover-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n\nbody {\n  padding: 24px;\n  color: var(--vscode-foreground);\n  font-size: var(--vscode-font-size);\n  font-weight: var(--vscode-font-weight);\n  font-family: var(--vscode-font-family);\n  background-color: var(--vscode-editor-background);\n  line-height: 1.5;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\nh1 {\n  font-size: 24px;\n  margin-bottom: 24px;\n  font-weight: 600;\n}\n\nh2 {\n  font-size: 20px;\n  margin-bottom: 16px;\n  font-weight: 500;\n}\n\nh3 {\n  font-size: 16px;\n  margin-bottom: 12px;\n  font-weight: 500;\n}\n\nh4 {\n  font-size: 14px;\n  margin-bottom: 8px;\n  font-weight: 500;\n}\n\n.section {\n  background: var(--vscode-editor-background);\n  border: 1px solid var(--vscode-widget-border);\n  border-radius: var(--border-radius);\n  padding: 24px;\n  margin-bottom: 32px;\n  box-shadow: var(--card-shadow);\n}\n\n.section h2 {\n  margin: 0 0 24px 0;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--vscode-widget-border);\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: var(--vscode-editor-foreground);\n}\n\n/* Header row styles */\n.header-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 1px solid var(--vscode-widget-border);\n}\n\n.title-section {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.title-section h2 {\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n\n.model-section {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n/* Branch selection styles */\n.branch-selection-row {\n  display: flex;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.branch-selector {\n  flex: 1;\n}\n\n.analyze-button-row {\n  display: flex;\n  justify-content: flex-end;\n}\n\n/* Loading and error styles */\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  padding: 32px;\n  text-align: center;\n}\n\n.error-message {\n  background: var(--vscode-inputValidation-errorBackground);\n  color: var(--vscode-inputValidation-errorForeground);\n  border: 1px solid var(--vscode-inputValidation-errorBorder);\n  padding: 16px;\n  border-radius: var(--border-radius);\n  margin-bottom: 24px;\n}\n\n/* Summary styles */\n.summary {\n  margin-bottom: 24px;\n}\n\n.summary-stats {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-top: 12px;\n}\n\n.stat {\n  background: var(--vscode-input-background);\n  padding: 8px 16px;\n  border-radius: var(--border-radius);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  min-width: 80px;\n}\n\n.stat-label {\n  font-size: 12px;\n  color: var(--vscode-descriptionForeground);\n}\n\n.stat-value {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.stat.critical .stat-value {\n  color: var(--vscode-errorForeground);\n}\n\n.stat.high .stat-value {\n  color: var(--vscode-testing-iconFailed);\n}\n\n.stat.medium .stat-value {\n  color: var(--vscode-testing-iconSkipped);\n}\n\n.stat.low .stat-value {\n  color: var(--vscode-testing-iconQueued);\n}\n\n/* Filter styles */\n.filters-section {\n  margin-bottom: 24px;\n  background-color: var(--vscode-editor-background);\n}\n\n.filters-section h3 {\n  margin-top: 0;\n  margin-bottom: 16px;\n  font-size: 18px;\n  font-weight: 500;\n  color: var(--vscode-foreground);\n}\n\n.search-row {\n  margin-bottom: 16px;\n}\n\n.filter-row {\n  display: flex;\n  gap: 24px;\n  align-items: flex-start;\n}\n\n.filter-column {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n  max-width: 50%;\n}\n\n.filter-column label {\n  font-size: 14px;\n  margin-bottom: 8px;\n  color: var(--vscode-foreground);\n}\n\n.dark-select {\n  width: 100%;\n  padding: 8px 12px;\n  background-color: var(--vscode-input-background);\n  color: var(--vscode-input-foreground);\n  border: 1px solid var(--vscode-input-border);\n  border-radius: 4px;\n  font-size: 14px;\n  height: 36px;\n  appearance: menulist;\n}\n\n.dark-select:focus {\n  outline: 1px solid var(--vscode-focusBorder);\n  border-color: var(--vscode-focusBorder);\n}\n\n.dark-input {\n  width: 100%;\n  padding: 8px 12px;\n  background-color: var(--vscode-input-background);\n  color: var(--vscode-input-foreground);\n  border: 1px solid var(--vscode-input-border);\n  border-radius: 4px;\n  font-size: 14px;\n  height: 24px;\n}\n\n.dark-input::placeholder {\n  color: var(--vscode-input-placeholderForeground);\n  opacity: 0.7;\n}\n\n.dark-input:focus {\n  outline: 1px solid var(--vscode-focusBorder);\n  border-color: var(--vscode-focusBorder);\n}\n\n.filter-actions {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 16px;\n  padding-top: 16px;\n  border-top: 1px solid var(--vscode-widget-border);\n}\n\n.filter-actions h3 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n/* Breaking changes list styles */\n.breaking-changes-list {\n  margin-top: 16px;\n}\n\n.no-results {\n  text-align: center;\n  padding: 24px;\n  background: var(--vscode-input-background);\n  border-radius: var(--border-radius);\n  color: var(--vscode-descriptionForeground);\n}\n\n.breaking-change-item {\n  background: var(--vscode-input-background);\n  border-radius: var(--border-radius);\n  margin-bottom: 16px;\n  overflow: hidden;\n  transition: transform var(--transition-speed) ease, box-shadow var(--transition-speed) ease;\n}\n\n.breaking-change-item:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--hover-shadow);\n}\n\n.breaking-change-header {\n  padding: 12px 16px;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n}\n\n.breaking-change-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n\n.severity-badge {\n  padding: 4px 8px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n\n.severity-badge.severity-critical {\n  background-color: var(--vscode-errorForeground);\n  color: var(--vscode-editor-background);\n}\n\n.severity-badge.severity-high {\n  background-color: var(--vscode-testing-iconFailed);\n  color: var(--vscode-editor-background);\n}\n\n.severity-badge.severity-medium {\n  background-color: var(--vscode-testing-iconSkipped);\n  color: var(--vscode-editor-background);\n}\n\n.severity-badge.severity-low {\n  background-color: var(--vscode-testing-iconQueued);\n  color: var(--vscode-editor-background);\n}\n\n.change-type-badge {\n  font-size: 12px;\n  padding: 4px 8px;\n  border-radius: 12px;\n  background: var(--vscode-button-secondaryBackground);\n  color: var(--vscode-button-secondaryForeground);\n}\n\n.breaking-change-description {\n  margin-left: 8px;\n}\n\n.breaking-change-location {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.file-location {\n  font-family: var(--vscode-editor-font-family);\n  font-size: 12px;\n  cursor: pointer;\n  text-decoration: underline;\n  color: var(--vscode-textLink-foreground);\n}\n\n.file-location:hover {\n  color: var(--vscode-textLink-activeForeground);\n}\n\n.expand-icon {\n  font-size: 12px;\n  color: var(--vscode-descriptionForeground);\n}\n\n.breaking-change-details {\n  padding: 16px;\n  border-top: 1px solid var(--vscode-widget-border);\n  background: var(--vscode-editor-background);\n}\n\n.recommendation, .affected-locations {\n  margin-bottom: 16px;\n}\n\n.locations-list {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.location-item {\n  margin-bottom: 12px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--vscode-widget-border);\n}\n\n.location-item:last-child {\n  margin-bottom: 0;\n  padding-bottom: 0;\n  border-bottom: none;\n}\n\n.location-header {\n  margin-bottom: 8px;\n}\n\n.code-snippet {\n  background: var(--vscode-textBlockQuote-background);\n  border-radius: var(--border-radius);\n  overflow: hidden;\n}\n\n.code-snippet pre {\n  margin: 0;\n  padding: 12px;\n  font-family: var(--vscode-editor-font-family);\n  font-size: 13px;\n  line-height: 1.5;\n  overflow-x: auto;\n  white-space: pre;\n  word-wrap: normal;\n}\n\n/* Add horizontal scrollbar styling */\n.code-snippet pre::-webkit-scrollbar {\n  height: 8px;\n  background-color: var(--vscode-scrollbarSlider-background);\n}\n\n.code-snippet pre::-webkit-scrollbar-thumb {\n  background-color: var(--vscode-scrollbarSlider-hoverBackground);\n  border-radius: 4px;\n}\n\n.code-snippet pre::-webkit-scrollbar-thumb:hover {\n  background-color: var(--vscode-scrollbarSlider-activeBackground);\n}\n\n/* Responsive adjustments */\n@media (max-width: 768px) {\n  .header-row {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  \n  .branch-selection-row {\n    flex-direction: column;\n  }\n  \n  .filter-row {\n    flex-direction: column;\n  }\n  \n  .filter-column {\n    max-width: 100%;\n  }\n  \n  .breaking-change-header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  \n  .breaking-change-location {\n    margin-top: 8px;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/webviews/breaking-changes/BreakingChangesApp.tsx":
/*!**************************************************************!*\
  !*** ./src/webviews/breaking-changes/BreakingChangesApp.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreakingChangesApp: () => (/* binding */ BreakingChangesApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webviews/breaking-changes/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./src/webviews/breaking-changes/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/hooks/useVSCodeAPI */ "./src/webviews/shared/hooks/useVSCodeAPI.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components */ "./src/webviews/shared/components/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/webviews/breaking-changes/components/index.ts");
/* harmony import */ var _styles_breaking_changes_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/breaking-changes.css */ "./src/webviews/breaking-changes/styles/breaking-changes.css");






function BreakingChangesApp() {
    const { postMessage } = (0,_shared_hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__.useVSCodeAPI)();
    const { isLoading, startLoading, stopLoading } = (0,_shared_hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__.useLoadingState)();
    const { error, setError, clearError } = (0,_shared_hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__.useErrorState)();
    const [branches, setBranches] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [currentBranch, setCurrentBranch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [sourceBranch, setSourceBranch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [targetBranch, setTargetBranch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [selectedModel, setSelectedModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('gpt-4o-mini');
    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [filterSeverity, setFilterSeverity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('all');
    const [filterChangeType, setFilterChangeType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('all');
    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    // Get models from shared config
    const models = window.sharedModelConfig?.models || [
        { id: 'gpt-4o', name: 'GPT-4o' },
        { id: 'gpt-4o-mini', name: 'GPT-4o-mini' },
        { id: 'gpt-4.1', name: 'GPT-4.1' },
        { id: 'gpt-5', name: 'GPT-5' },
        { id: 'gpt-5-mini', name: 'GPT-5 Mini' },
        { id: 'claude-3.5-sonnet', name: 'Claude 3.5 Sonnet' },
        { id: 'claude-sonnet-4', name: 'Claude 4 Sonnet' },
        { id: 'o1', name: 'o1' },
        { id: 'o1-mini', name: 'o1-mini' },
    ];
    // Handle messages from extension
    const handleMessage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((message) => {
        switch (message.command) {
            case 'branchesList':
                setBranches(message.branches || []);
                setCurrentBranch(message.currentBranch || '');
                setSourceBranch(message.currentBranch || '');
                // Set the selected model if provided from backend
                if (message.languageModel) {
                    setSelectedModel(message.languageModel);
                }
                // Set target branch with the same logic as original implementation
                if (message.branches && message.branches.length > 0) {
                    // First check for defaultTargetBranch from config
                    if (message.defaultTargetBranch && message.branches.includes(message.defaultTargetBranch)) {
                        setTargetBranch(message.defaultTargetBranch);
                    }
                    else {
                        // Fall back to main/master if available, or first branch that's not the source
                        const targetBranch = message.branches.find((b) => b === 'main' || b === 'master') ||
                            message.branches.find((b) => b !== message.currentBranch) ||
                            message.branches[0];
                        setTargetBranch(targetBranch);
                    }
                }
                break;
            case 'analyzing':
                startLoading();
                clearError();
                setResult(null);
                break;
            case 'analysisResult':
                stopLoading();
                setResult(message.result);
                clearError();
                break;
            case 'error':
                stopLoading();
                setError(message.message || 'An unknown error occurred');
                break;
        }
    }, [startLoading, stopLoading, setError, clearError]);
    (0,_shared_hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__.useMessageListener)(handleMessage);
    // Initial load - request branches
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        postMessage({ command: 'getBranches' });
    }, [postMessage]);
    // Handle analyze button click
    const handleAnalyze = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        if (!sourceBranch || !targetBranch) {
            setError('Please select both source and target branches');
            return;
        }
        clearError();
        const message = {
            command: 'analyzeBreakingChanges',
            sourceBranch,
            targetBranch,
            modelFamily: selectedModel,
        };
        postMessage(message);
    }, [sourceBranch, targetBranch, selectedModel, postMessage, setError, clearError]);
    // Handle opening a file at a specific location
    const handleOpenFile = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((filePath, lineNumber) => {
        const message = {
            command: 'openFile',
            data: { filePath, lineNumber }
        };
        // The backend expects these properties directly on the message object
        message.filePath = filePath;
        message.lineNumber = lineNumber;
        postMessage(message);
    }, [postMessage]);
    // Get filtered breaking changes based on current filters
    const getFilteredBreakingChanges = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
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
                return ((change.description && change.description.toLowerCase().includes(searchLower)) ||
                    (change.changeLocation && change.changeLocation.filePath.toLowerCase().includes(searchLower)) ||
                    (change.recommendation && change.recommendation.toLowerCase().includes(searchLower)));
            }
            return true;
        });
    }, [result, filterSeverity, filterChangeType, searchTerm]);
    const filteredBreakingChanges = getFilteredBreakingChanges();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "container", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "section", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "header-row", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "title-section", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components__WEBPACK_IMPORTED_MODULE_3__.Icon, { name: "branch" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { children: "Breaking Changes Analysis" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "model-section", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components__WEBPACK_IMPORTED_MODULE_3__.ModelSelector, { selectedModel: selectedModel, onModelChange: setSelectedModel, models: models }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__.AnalysisConfiguration, { branches: branches, sourceBranch: sourceBranch, targetBranch: targetBranch, onSourceBranchChange: setSourceBranch, onTargetBranchChange: setTargetBranch, onAnalyze: handleAnalyze, isLoading: isLoading, canAnalyze: !!(sourceBranch && targetBranch) })] }), error && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "error-message", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "Error" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: error })] })), isLoading && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "loading-container", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components__WEBPACK_IMPORTED_MODULE_3__.LoadingSpinner, { size: "large" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "Analyzing breaking changes..." })] })), !isLoading && result && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "section", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { children: "Analysis Results" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "summary", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "Summary" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "summary-stats", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "stat", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "stat-label", children: "Total:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "stat-value", children: result.summary.totalBreakingChanges })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "stat critical", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "stat-label", children: "Critical:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "stat-value", children: result.summary.criticalCount })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "stat high", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "stat-label", children: "High:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "stat-value", children: result.summary.highCount })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "stat medium", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "stat-label", children: "Medium:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "stat-value", children: result.summary.mediumCount })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "stat low", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "stat-label", children: "Low:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "stat-value", children: result.summary.lowCount })] })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__.FilterControls, { filterSeverity: filterSeverity, filterChangeType: filterChangeType, searchTerm: searchTerm, onFilterSeverityChange: setFilterSeverity, onFilterChangeTypeChange: setFilterChangeType, onSearchTermChange: setSearchTerm, filteredCount: filteredBreakingChanges.length }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__.ResultsTable, { breakingChanges: filteredBreakingChanges, onOpenFile: handleOpenFile })] }))] }));
}


/***/ }),

/***/ "./src/webviews/breaking-changes/components/AnalysisConfiguration.tsx":
/*!****************************************************************************!*\
  !*** ./src/webviews/breaking-changes/components/AnalysisConfiguration.tsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalysisConfiguration: () => (/* binding */ AnalysisConfiguration)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webviews/breaking-changes/node_modules/react/jsx-runtime.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components */ "./src/webviews/shared/components/index.ts");


function AnalysisConfiguration({ branches, sourceBranch, targetBranch, onSourceBranchChange, onTargetBranchChange, onAnalyze, isLoading, canAnalyze }) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "branch-selection-row", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "branch-selector", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components__WEBPACK_IMPORTED_MODULE_1__.BranchSelector, { branches: branches, selectedBranch: sourceBranch, onBranchChange: onSourceBranchChange, label: "Source Branch (PR branch)" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "branch-selector", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components__WEBPACK_IMPORTED_MODULE_1__.BranchSelector, { branches: branches, selectedBranch: targetBranch, onBranchChange: onTargetBranchChange, label: "Target Branch (base branch)" }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "analyze-button-row", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components__WEBPACK_IMPORTED_MODULE_1__.Button, { onClick: onAnalyze, disabled: isLoading || !canAnalyze, loading: isLoading, variant: "primary", children: isLoading ? 'Analyzing...' : 'Analyze Breaking Changes' }) })] }));
}


/***/ }),

/***/ "./src/webviews/breaking-changes/components/BreakingChangeItem.tsx":
/*!*************************************************************************!*\
  !*** ./src/webviews/breaking-changes/components/BreakingChangeItem.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BreakingChangeItem: () => (/* binding */ BreakingChangeItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webviews/breaking-changes/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./src/webviews/breaking-changes/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


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
function BreakingChangeItem({ change, onOpenFile }) {
    const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // Get severity class
    const severityClass = `severity-${change.severity}`;
    const handleFileClick = (event, filePath, lineNumber) => {
        event.stopPropagation();
        onOpenFile(filePath, lineNumber);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: `breaking-change-item ${severityClass}`, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "breaking-change-header", onClick: () => setExpanded(!expanded), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "breaking-change-title", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: `severity-badge ${severityClass}`, children: change.severity }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "change-type-badge", children: formatChangeType(change.changeType) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "breaking-change-description", children: change.description })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "breaking-change-location", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "file-location", onClick: (event) => handleFileClick(event, change.changeLocation.filePath, change.changeLocation.lineNumber), title: "Click to open file", children: `${change.changeLocation.filePath}:${change.changeLocation.lineNumber}` }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "expand-icon", children: expanded ? '▼' : '▶' })] })] }), expanded && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "breaking-change-details", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "recommendation", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { children: "Recommendation" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: change.recommendation })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "affected-locations", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", { children: ["Affected Locations (", change.affectedLocations.length, ")"] }), change.affectedLocations.length === 0 ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "No affected locations found." })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { className: "locations-list", children: change.affectedLocations.map((location, index) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { className: "location-item", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "location-header", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "file-location", onClick: () => onOpenFile(location.filePath, location.lineNumber), title: "Click to open file", children: `${location.filePath}:${location.lineNumber}` }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "code-snippet", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: location.codeSnippet }) })] }, index))) }))] })] }))] }));
}


/***/ }),

/***/ "./src/webviews/breaking-changes/components/FilterControls.tsx":
/*!*********************************************************************!*\
  !*** ./src/webviews/breaking-changes/components/FilterControls.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterControls: () => (/* binding */ FilterControls)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webviews/breaking-changes/node_modules/react/jsx-runtime.js");

function FilterControls({ filterSeverity, filterChangeType, searchTerm, onFilterSeverityChange, onFilterChangeTypeChange, onSearchTermChange, filteredCount }) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "filters-section", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "Filters" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "search-row", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "text", value: searchTerm, onChange: (e) => onSearchTermChange(e.target.value), placeholder: "Search in descriptions, files, etc.", className: "dark-input" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "filter-row", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "filter-column", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "Severity:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { value: filterSeverity, onChange: (e) => onFilterSeverityChange(e.target.value), className: "dark-select", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "all", children: "All Severities" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "critical", children: "Critical" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "high", children: "High" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "medium", children: "Medium" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "low", children: "Low" })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "filter-column", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { children: "Change Type:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { value: filterChangeType, onChange: (e) => onFilterChangeTypeChange(e.target.value), className: "dark-select", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "all", children: "All Types" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "method-signature", children: "Method Signature" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "class-structure", children: "Class Structure" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "enum-value", children: "Enum Value" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "member-removal", children: "Member Removal" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "behavior-change", children: "Behavior Change" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "other", children: "Other" })] })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "filter-actions", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", { children: ["Breaking Changes (", filteredCount, ")"] }) })] }));
}


/***/ }),

/***/ "./src/webviews/breaking-changes/components/ResultsTable.tsx":
/*!*******************************************************************!*\
  !*** ./src/webviews/breaking-changes/components/ResultsTable.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultsTable: () => (/* binding */ ResultsTable)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webviews/breaking-changes/node_modules/react/jsx-runtime.js");
/* harmony import */ var _BreakingChangeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BreakingChangeItem */ "./src/webviews/breaking-changes/components/BreakingChangeItem.tsx");


function ResultsTable({ breakingChanges, onOpenFile }) {
    if (breakingChanges.length === 0) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "breaking-changes-list", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "no-results", children: "No breaking changes found matching the current filters." }) }));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "breaking-changes-list", children: breakingChanges.map((change) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_BreakingChangeItem__WEBPACK_IMPORTED_MODULE_1__.BreakingChangeItem, { change: change, onOpenFile: onOpenFile }, change.id))) }));
}


/***/ }),

/***/ "./src/webviews/breaking-changes/components/index.ts":
/*!***********************************************************!*\
  !*** ./src/webviews/breaking-changes/components/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnalysisConfiguration: () => (/* reexport safe */ _AnalysisConfiguration__WEBPACK_IMPORTED_MODULE_0__.AnalysisConfiguration),
/* harmony export */   BreakingChangeItem: () => (/* reexport safe */ _BreakingChangeItem__WEBPACK_IMPORTED_MODULE_3__.BreakingChangeItem),
/* harmony export */   FilterControls: () => (/* reexport safe */ _FilterControls__WEBPACK_IMPORTED_MODULE_2__.FilterControls),
/* harmony export */   ResultsTable: () => (/* reexport safe */ _ResultsTable__WEBPACK_IMPORTED_MODULE_1__.ResultsTable)
/* harmony export */ });
/* harmony import */ var _AnalysisConfiguration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnalysisConfiguration */ "./src/webviews/breaking-changes/components/AnalysisConfiguration.tsx");
/* harmony import */ var _ResultsTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResultsTable */ "./src/webviews/breaking-changes/components/ResultsTable.tsx");
/* harmony import */ var _FilterControls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterControls */ "./src/webviews/breaking-changes/components/FilterControls.tsx");
/* harmony import */ var _BreakingChangeItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BreakingChangeItem */ "./src/webviews/breaking-changes/components/BreakingChangeItem.tsx");






/***/ }),

/***/ "./src/webviews/breaking-changes/index.tsx":
/*!*************************************************!*\
  !*** ./src/webviews/breaking-changes/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./src/webviews/breaking-changes/node_modules/react/jsx-runtime.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./src/webviews/breaking-changes/node_modules/react-dom/client.js");
/* harmony import */ var _BreakingChangesApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BreakingChangesApp */ "./src/webviews/breaking-changes/BreakingChangesApp.tsx");



// Render the React app
const domContainer = document.getElementById('root');
if (domContainer) {
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(domContainer);
    root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_BreakingChangesApp__WEBPACK_IMPORTED_MODULE_2__.BreakingChangesApp, {}));
}


/***/ }),

/***/ "./src/webviews/breaking-changes/styles/breaking-changes.css":
/*!*******************************************************************!*\
  !*** ./src/webviews/breaking-changes/styles/breaking-changes.css ***!
  \*******************************************************************/
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
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_breaking_changes_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./breaking-changes.css */ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./src/webviews/breaking-changes/styles/breaking-changes.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_breaking_changes_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_breaking_changes_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_breaking_changes_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_breaking_changes_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 			"breaking-changes": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors","shared"], () => (__webpack_require__("./src/webviews/breaking-changes/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWtpbmctY2hhbmdlcy9icmVha2luZy1jaGFuZ2VzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDdUs7QUFDakI7QUFDbUM7QUFDekwsOEJBQThCLHNJQUEyQixDQUFDLCtJQUFxQztBQUMvRiwwQkFBMEIsNEpBQWlDO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxvSUFBb0ksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZ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Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7V0NoREEsbUM7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL2JyZWFraW5nLWNoYW5nZXMvc3R5bGVzL2JyZWFraW5nLWNoYW5nZXMuY3NzIiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL2JyZWFraW5nLWNoYW5nZXMvQnJlYWtpbmdDaGFuZ2VzQXBwLnRzeCIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9icmVha2luZy1jaGFuZ2VzL2NvbXBvbmVudHMvQW5hbHlzaXNDb25maWd1cmF0aW9uLnRzeCIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9icmVha2luZy1jaGFuZ2VzL2NvbXBvbmVudHMvQnJlYWtpbmdDaGFuZ2VJdGVtLnRzeCIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9icmVha2luZy1jaGFuZ2VzL2NvbXBvbmVudHMvRmlsdGVyQ29udHJvbHMudHN4Iiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL2JyZWFraW5nLWNoYW5nZXMvY29tcG9uZW50cy9SZXN1bHRzVGFibGUudHN4Iiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL2JyZWFraW5nLWNoYW5nZXMvY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9icmVha2luZy1jaGFuZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9icmVha2luZy1jaGFuZ2VzL3N0eWxlcy9icmVha2luZy1jaGFuZ2VzLmNzcz8zZjgzIiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS4yX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANy4xLjJfd2VicGFja0A1LjEwMS4zL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANy4xLjJfd2VicGFja0A1LjEwMS4zL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL3NoYXJlZC9zdHlsZXMvY29tcG9uZW50cy5jc3NcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmkoX19fQ1NTX0xPQURFUl9BVF9SVUxFX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogSW1wb3J0IHNoYXJlZCBjb21wb25lbnQgc3R5bGVzICovXG5cbjpyb290IHtcbiAgLS1jb250YWluZXItcGFkZGluZzogMjBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC0tdHJhbnNpdGlvbi1zcGVlZDogMC4ycztcbiAgLS1jYXJkLXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIC0taG92ZXItc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuYm9keSB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZm9yZWdyb3VuZCk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tdnNjb2RlLWZvbnQtc2l6ZSk7XG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS12c2NvZGUtZm9udC13ZWlnaHQpO1xuICBmb250LWZhbWlseTogdmFyKC0tdnNjb2RlLWZvbnQtZmFtaWx5KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWVkaXRvci1iYWNrZ3JvdW5kKTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuaDEge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5oMyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtd2lkZ2V0LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XG59XG5cbi5zZWN0aW9uIGgyIHtcbiAgbWFyZ2luOiAwIDAgMjRweCAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXZzY29kZS13aWRnZXQtYm9yZGVyKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZWRpdG9yLWZvcmVncm91bmQpO1xufVxuXG4vKiBIZWFkZXIgcm93IHN0eWxlcyAqL1xuLmhlYWRlci1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLXdpZGdldC1ib3JkZXIpO1xufVxuXG4udGl0bGUtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4udGl0bGUtc2VjdGlvbiBoMiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ubW9kZWwtc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4vKiBCcmFuY2ggc2VsZWN0aW9uIHN0eWxlcyAqL1xuLmJyYW5jaC1zZWxlY3Rpb24tcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uYnJhbmNoLXNlbGVjdG9yIHtcbiAgZmxleDogMTtcbn1cblxuLmFuYWx5emUtYnV0dG9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi8qIExvYWRpbmcgYW5kIGVycm9yIHN0eWxlcyAqL1xuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICBwYWRkaW5nOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWlucHV0VmFsaWRhdGlvbi1lcnJvckJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0VmFsaWRhdGlvbi1lcnJvckZvcmVncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtaW5wdXRWYWxpZGF0aW9uLWVycm9yQm9yZGVyKTtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi8qIFN1bW1hcnkgc3R5bGVzICovXG4uc3VtbWFyeSB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5zdW1tYXJ5LXN0YXRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5zdGF0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWlucHV0LWJhY2tncm91bmQpO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogODBweDtcbn1cblxuLnN0YXQtbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZGVzY3JpcHRpb25Gb3JlZ3JvdW5kKTtcbn1cblxuLnN0YXQtdmFsdWUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zdGF0LmNyaXRpY2FsIC5zdGF0LXZhbHVlIHtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xufVxuXG4uc3RhdC5oaWdoIC5zdGF0LXZhbHVlIHtcbiAgY29sb3I6IHZhcigtLXZzY29kZS10ZXN0aW5nLWljb25GYWlsZWQpO1xufVxuXG4uc3RhdC5tZWRpdW0gLnN0YXQtdmFsdWUge1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLXRlc3RpbmctaWNvblNraXBwZWQpO1xufVxuXG4uc3RhdC5sb3cgLnN0YXQtdmFsdWUge1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLXRlc3RpbmctaWNvblF1ZXVlZCk7XG59XG5cbi8qIEZpbHRlciBzdHlsZXMgKi9cbi5maWx0ZXJzLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpO1xufVxuXG4uZmlsdGVycy1zZWN0aW9uIGgzIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWZvcmVncm91bmQpO1xufVxuXG4uc2VhcmNoLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5maWx0ZXItcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyNHB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmZpbHRlci1jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbiAgZmxleDogMTtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG5cbi5maWx0ZXItY29sdW1uIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZm9yZWdyb3VuZCk7XG59XG5cbi5kYXJrLXNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0LWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0LWZvcmVncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtaW5wdXQtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogMzZweDtcbiAgYXBwZWFyYW5jZTogbWVudWxpc3Q7XG59XG5cbi5kYXJrLXNlbGVjdDpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtZm9jdXNCb3JkZXIpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXZzY29kZS1mb2N1c0JvcmRlcik7XG59XG5cbi5kYXJrLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXQtYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXQtZm9yZWdyb3VuZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1pbnB1dC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uZGFyay1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0LXBsYWNlaG9sZGVyRm9yZWdyb3VuZCk7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmRhcmstaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWZvY3VzQm9yZGVyKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS12c2NvZGUtZm9jdXNCb3JkZXIpO1xufVxuXG4uZmlsdGVyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLXdpZGdldC1ib3JkZXIpO1xufVxuXG4uZmlsdGVyLWFjdGlvbnMgaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLyogQnJlYWtpbmcgY2hhbmdlcyBsaXN0IHN0eWxlcyAqL1xuLmJyZWFraW5nLWNoYW5nZXMtbGlzdCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5uby1yZXN1bHRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtaW5wdXQtYmFja2dyb3VuZCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWRlc2NyaXB0aW9uRm9yZWdyb3VuZCk7XG59XG5cbi5icmVha2luZy1jaGFuZ2UtaXRlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS1pbnB1dC1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKSBlYXNlLCBib3gtc2hhZG93IHZhcigtLXRyYW5zaXRpb24tc3BlZWQpIGVhc2U7XG59XG5cbi5icmVha2luZy1jaGFuZ2UtaXRlbTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgYm94LXNoYWRvdzogdmFyKC0taG92ZXItc2hhZG93KTtcbn1cblxuLmJyZWFraW5nLWNoYW5nZS1oZWFkZXIge1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE2cHg7XG59XG5cbi5icmVha2luZy1jaGFuZ2UtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uc2V2ZXJpdHktYmFkZ2Uge1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zZXZlcml0eS1iYWRnZS5zZXZlcml0eS1jcml0aWNhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWVkaXRvci1iYWNrZ3JvdW5kKTtcbn1cblxuLnNldmVyaXR5LWJhZGdlLnNldmVyaXR5LWhpZ2gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtdGVzdGluZy1pY29uRmFpbGVkKTtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lZGl0b3ItYmFja2dyb3VuZCk7XG59XG5cbi5zZXZlcml0eS1iYWRnZS5zZXZlcml0eS1tZWRpdW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtdGVzdGluZy1pY29uU2tpcHBlZCk7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpO1xufVxuXG4uc2V2ZXJpdHktYmFkZ2Uuc2V2ZXJpdHktbG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLXRlc3RpbmctaWNvblF1ZXVlZCk7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpO1xufVxuXG4uY2hhbmdlLXR5cGUtYmFkZ2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5QmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLXNlY29uZGFyeUZvcmVncm91bmQpO1xufVxuXG4uYnJlYWtpbmctY2hhbmdlLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmJyZWFraW5nLWNoYW5nZS1sb2NhdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4uZmlsZS1sb2NhdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS12c2NvZGUtZWRpdG9yLWZvbnQtZmFtaWx5KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLXRleHRMaW5rLWZvcmVncm91bmQpO1xufVxuXG4uZmlsZS1sb2NhdGlvbjpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtdGV4dExpbmstYWN0aXZlRm9yZWdyb3VuZCk7XG59XG5cbi5leHBhbmQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1kZXNjcmlwdGlvbkZvcmVncm91bmQpO1xufVxuXG4uYnJlYWtpbmctY2hhbmdlLWRldGFpbHMge1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLXdpZGdldC1ib3JkZXIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpO1xufVxuXG4ucmVjb21tZW5kYXRpb24sIC5hZmZlY3RlZC1sb2NhdGlvbnMge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ubG9jYXRpb25zLWxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5sb2NhdGlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtd2lkZ2V0LWJvcmRlcik7XG59XG5cbi5sb2NhdGlvbi1pdGVtOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmxvY2F0aW9uLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmNvZGUtc25pcHBldCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS10ZXh0QmxvY2tRdW90ZS1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jb2RlLXNuaXBwZXQgcHJlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMnB4O1xuICBmb250LWZhbWlseTogdmFyKC0tdnNjb2RlLWVkaXRvci1mb250LWZhbWlseSk7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgd29yZC13cmFwOiBub3JtYWw7XG59XG5cbi8qIEFkZCBob3Jpem9udGFsIHNjcm9sbGJhciBzdHlsaW5nICovXG4uY29kZS1zbmlwcGV0IHByZTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBoZWlnaHQ6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLXNjcm9sbGJhclNsaWRlci1iYWNrZ3JvdW5kKTtcbn1cblxuLmNvZGUtc25pcHBldCBwcmU6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLXNjcm9sbGJhclNsaWRlci1ob3ZlckJhY2tncm91bmQpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5jb2RlLXNuaXBwZXQgcHJlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1zY3JvbGxiYXJTbGlkZXItYWN0aXZlQmFja2dyb3VuZCk7XG59XG5cbi8qIFJlc3BvbnNpdmUgYWRqdXN0bWVudHMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuaGVhZGVyLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDE2cHg7XG4gIH1cbiAgXG4gIC5icmFuY2gtc2VsZWN0aW9uLXJvdyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBcbiAgLmZpbHRlci1yb3cge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgXG4gIC5maWx0ZXItY29sdW1uIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5icmVha2luZy1jaGFuZ2UtaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB9XG4gIFxuICAuYnJlYWtpbmctY2hhbmdlLWxvY2F0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy93ZWJ2aWV3cy9icmVha2luZy1jaGFuZ2VzL3N0eWxlcy9icmVha2luZy1jaGFuZ2VzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxtQ0FBbUM7O0FBR25DO0VBQ0UseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsNENBQTRDO0VBQzVDLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0Isa0NBQWtDO0VBQ2xDLHNDQUFzQztFQUN0QyxzQ0FBc0M7RUFDdEMsaURBQWlEO0VBQ2pELGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsNkNBQTZDO0VBQzdDLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0RBQW9EO0VBQ3BELGFB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RSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1EQUFtRDtFQUNuRCxtQ0FBbUM7RUFDbkMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYiw2Q0FBNkM7RUFDN0MsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQSxxQ0FBcUM7QUFDckM7RUFDRSxXQUFXO0VBQ1gsMERBQTBEO0FBQzVEOztBQUVBO0VBQ0UsK0RBQStEO0VBQy9ELGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdFQUFnRTtBQUNsRTs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsU0FBUztFQUNYOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHNCQUFzQjtJQUN0Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogSW1wb3J0IHNoYXJlZCBjb21wb25lbnQgc3R5bGVzICovXFxuQGltcG9ydCAnLi4vLi4vc2hhcmVkL3N0eWxlcy9jb21wb25lbnRzLmNzcyc7XFxuXFxuOnJvb3Qge1xcbiAgLS1jb250YWluZXItcGFkZGluZzogMjBweDtcXG4gIC0tYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgLS10cmFuc2l0aW9uLXNwZWVkOiAwLjJzO1xcbiAgLS1jYXJkLXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxuICAtLWhvdmVyLXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbmJvZHkge1xcbiAgcGFkZGluZzogMjRweDtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZm9yZWdyb3VuZCk7XFxuICBmb250LXNpemU6IHZhcigtLXZzY29kZS1mb250LXNpemUpO1xcbiAgZm9udC13ZWlnaHQ6IHZhcigtLXZzY29kZS1mb250LXdlaWdodCk7XFxuICBmb250LWZhbWlseTogdmFyKC0tdnNjb2RlLWZvbnQtZmFtaWx5KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1lZGl0b3ItYmFja2dyb3VuZCk7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogMTIwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbmg0IHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS1lZGl0b3ItYmFja2dyb3VuZCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtd2lkZ2V0LWJvcmRlcik7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xcbiAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xcbn1cXG5cXG4uc2VjdGlvbiBoMiB7XFxuICBtYXJnaW46IDAgMCAyNHB4IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtd2lkZ2V0LWJvcmRlcik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lZGl0b3ItZm9yZWdyb3VuZCk7XFxufVxcblxcbi8qIEhlYWRlciByb3cgc3R5bGVzICovXFxuLmhlYWRlci1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLXdpZGdldC1ib3JkZXIpO1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4udGl0bGUtc2VjdGlvbiBoMiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4ubW9kZWwtc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbn1cXG5cXG4vKiBCcmFuY2ggc2VsZWN0aW9uIHN0eWxlcyAqL1xcbi5icmFuY2gtc2VsZWN0aW9uLXJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxNnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmJyYW5jaC1zZWxlY3RvciB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uYW5hbHl6ZS1idXR0b24tcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4vKiBMb2FkaW5nIGFuZCBlcnJvciBzdHlsZXMgKi9cXG4ubG9hZGluZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxNnB4O1xcbiAgcGFkZGluZzogMzJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmVycm9yLW1lc3NhZ2Uge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWlucHV0VmFsaWRhdGlvbi1lcnJvckJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1pbnB1dFZhbGlkYXRpb24tZXJyb3JGb3JlZ3JvdW5kKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1pbnB1dFZhbGlkYXRpb24tZXJyb3JCb3JkZXIpO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG59XFxuXFxuLyogU3VtbWFyeSBzdHlsZXMgKi9cXG4uc3VtbWFyeSB7XFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbn1cXG5cXG4uc3VtbWFyeS1zdGF0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiAxNnB4O1xcbiAgbWFyZ2luLXRvcDogMTJweDtcXG59XFxuXFxuLnN0YXQge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWlucHV0LWJhY2tncm91bmQpO1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogODBweDtcXG59XFxuXFxuLnN0YXQtbGFiZWwge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1kZXNjcmlwdGlvbkZvcmVncm91bmQpO1xcbn1cXG5cXG4uc3RhdC12YWx1ZSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uc3RhdC5jcml0aWNhbCAuc3RhdC12YWx1ZSB7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XFxufVxcblxcbi5zdGF0LmhpZ2ggLnN0YXQtdmFsdWUge1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS10ZXN0aW5nLWljb25GYWlsZWQpO1xcbn1cXG5cXG4uc3RhdC5tZWRpdW0gLnN0YXQtdmFsdWUge1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS10ZXN0aW5nLWljb25Ta2lwcGVkKTtcXG59XFxuXFxuLnN0YXQubG93IC5zdGF0LXZhbHVlIHtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtdGVzdGluZy1pY29uUXVldWVkKTtcXG59XFxuXFxuLyogRmlsdGVyIHN0eWxlcyAqL1xcbi5maWx0ZXJzLXNlY3Rpb24ge1xcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1lZGl0b3ItYmFja2dyb3VuZCk7XFxufVxcblxcbi5maWx0ZXJzLXNlY3Rpb24gaDMge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1mb3JlZ3JvdW5kKTtcXG59XFxuXFxuLnNlYXJjaC1yb3cge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmZpbHRlci1yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjRweDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4uZmlsdGVyLWNvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogOHB4O1xcbiAgZmxleDogMTtcXG4gIG1heC13aWR0aDogNTAlO1xcbn1cXG5cXG4uZmlsdGVyLWNvbHVtbiBsYWJlbCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWZvcmVncm91bmQpO1xcbn1cXG5cXG4uZGFyay1zZWxlY3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA4cHggMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1pbnB1dC1iYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXQtZm9yZWdyb3VuZCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtaW5wdXQtYm9yZGVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGhlaWdodDogMzZweDtcXG4gIGFwcGVhcmFuY2U6IG1lbnVsaXN0O1xcbn1cXG5cXG4uZGFyay1zZWxlY3Q6Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1mb2N1c0JvcmRlcik7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXZzY29kZS1mb2N1c0JvcmRlcik7XFxufVxcblxcbi5kYXJrLWlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogOHB4IDEycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXQtYmFja2dyb3VuZCk7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0LWZvcmVncm91bmQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWlucHV0LWJvcmRlcik7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbi5kYXJrLWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0LXBsYWNlaG9sZGVyRm9yZWdyb3VuZCk7XFxuICBvcGFjaXR5OiAwLjc7XFxufVxcblxcbi5kYXJrLWlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtZm9jdXNCb3JkZXIpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS12c2NvZGUtZm9jdXNCb3JkZXIpO1xcbn1cXG5cXG4uZmlsdGVyLWFjdGlvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgcGFkZGluZy10b3A6IDE2cHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLXdpZGdldC1ib3JkZXIpO1xcbn1cXG5cXG4uZmlsdGVyLWFjdGlvbnMgaDMge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLyogQnJlYWtpbmcgY2hhbmdlcyBsaXN0IHN0eWxlcyAqL1xcbi5icmVha2luZy1jaGFuZ2VzLWxpc3Qge1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG59XFxuXFxuLm5vLXJlc3VsdHMge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMjRweDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS1pbnB1dC1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1kZXNjcmlwdGlvbkZvcmVncm91bmQpO1xcbn1cXG5cXG4uYnJlYWtpbmctY2hhbmdlLWl0ZW0ge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWlucHV0LWJhY2tncm91bmQpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKSBlYXNlLCBib3gtc2hhZG93IHZhcigtLXRyYW5zaXRpb24tc3BlZWQpIGVhc2U7XFxufVxcblxcbi5icmVha2luZy1jaGFuZ2UtaXRlbTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XFxuICBib3gtc2hhZG93OiB2YXIoLS1ob3Zlci1zaGFkb3cpO1xcbn1cXG5cXG4uYnJlYWtpbmctY2hhbmdlLWhlYWRlciB7XFxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLmJyZWFraW5nLWNoYW5nZS10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogOHB4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uc2V2ZXJpdHktYmFkZ2Uge1xcbiAgcGFkZGluZzogNHB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLnNldmVyaXR5LWJhZGdlLnNldmVyaXR5LWNyaXRpY2FsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lZGl0b3ItYmFja2dyb3VuZCk7XFxufVxcblxcbi5zZXZlcml0eS1iYWRnZS5zZXZlcml0eS1oaWdoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS10ZXN0aW5nLWljb25GYWlsZWQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lZGl0b3ItYmFja2dyb3VuZCk7XFxufVxcblxcbi5zZXZlcml0eS1iYWRnZS5zZXZlcml0eS1tZWRpdW0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLXRlc3RpbmctaWNvblNraXBwZWQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lZGl0b3ItYmFja2dyb3VuZCk7XFxufVxcblxcbi5zZXZlcml0eS1iYWRnZS5zZXZlcml0eS1sb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLXRlc3RpbmctaWNvblF1ZXVlZCk7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWVkaXRvci1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmNoYW5nZS10eXBlLWJhZGdlIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWJ1dHRvbi1zZWNvbmRhcnlCYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLXNlY29uZGFyeUZvcmVncm91bmQpO1xcbn1cXG5cXG4uYnJlYWtpbmctY2hhbmdlLWRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcblxcbi5icmVha2luZy1jaGFuZ2UtbG9jYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDhweDtcXG59XFxuXFxuLmZpbGUtbG9jYXRpb24ge1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLXZzY29kZS1lZGl0b3ItZm9udC1mYW1pbHkpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLXRleHRMaW5rLWZvcmVncm91bmQpO1xcbn1cXG5cXG4uZmlsZS1sb2NhdGlvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLXRleHRMaW5rLWFjdGl2ZUZvcmVncm91bmQpO1xcbn1cXG5cXG4uZXhwYW5kLWljb24ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1kZXNjcmlwdGlvbkZvcmVncm91bmQpO1xcbn1cXG5cXG4uYnJlYWtpbmctY2hhbmdlLWRldGFpbHMge1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtd2lkZ2V0LWJvcmRlcik7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpO1xcbn1cXG5cXG4ucmVjb21tZW5kYXRpb24sIC5hZmZlY3RlZC1sb2NhdGlvbnMge1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmxvY2F0aW9ucy1saXN0IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4ubG9jYXRpb24taXRlbSB7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLXdpZGdldC1ib3JkZXIpO1xcbn1cXG5cXG4ubG9jYXRpb24taXRlbTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi5sb2NhdGlvbi1oZWFkZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4uY29kZS1zbmlwcGV0IHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXZzY29kZS10ZXh0QmxvY2tRdW90ZS1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmNvZGUtc25pcHBldCBwcmUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS12c2NvZGUtZWRpdG9yLWZvbnQtZmFtaWx5KTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgd2hpdGUtc3BhY2U6IHByZTtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbn1cXG5cXG4vKiBBZGQgaG9yaXpvbnRhbCBzY3JvbGxiYXIgc3R5bGluZyAqL1xcbi5jb2RlLXNuaXBwZXQgcHJlOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICBoZWlnaHQ6IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1zY3JvbGxiYXJTbGlkZXItYmFja2dyb3VuZCk7XFxufVxcblxcbi5jb2RlLXNuaXBwZXQgcHJlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtc2Nyb2xsYmFyU2xpZGVyLWhvdmVyQmFja2dyb3VuZCk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5jb2RlLXNuaXBwZXQgcHJlOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtc2Nyb2xsYmFyU2xpZGVyLWFjdGl2ZUJhY2tncm91bmQpO1xcbn1cXG5cXG4vKiBSZXNwb25zaXZlIGFkanVzdG1lbnRzICovXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuaGVhZGVyLXJvdyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICBnYXA6IDE2cHg7XFxuICB9XFxuICBcXG4gIC5icmFuY2gtc2VsZWN0aW9uLXJvdyB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICBcXG4gIC5maWx0ZXItcm93IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIFxcbiAgLmZpbHRlci1jb2x1bW4ge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICB9XFxuICBcXG4gIC5icmVha2luZy1jaGFuZ2UtaGVhZGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICB9XFxuICBcXG4gIC5icmVha2luZy1jaGFuZ2UtbG9jYXRpb24ge1xcbiAgICBtYXJnaW4tdG9wOiA4cHg7XFxuICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBcbiAgdXNlVlNDb2RlQVBJLCBcbiAgdXNlTWVzc2FnZUxpc3RlbmVyLCBcbiAgdXNlTG9hZGluZ1N0YXRlLCBcbiAgdXNlRXJyb3JTdGF0ZSBcbn0gZnJvbSAnLi4vc2hhcmVkL2hvb2tzL3VzZVZTQ29kZUFQSSc7XG5pbXBvcnQgeyBcbiAgTW9kZWxTZWxlY3RvciwgXG4gIEJyYW5jaFNlbGVjdG9yLCBcbiAgQnV0dG9uLCBcbiAgTG9hZGluZ1NwaW5uZXIsXG4gIEljb25cbn0gZnJvbSAnLi4vc2hhcmVkL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgXG4gIEV4dGVuc2lvbk1lc3NhZ2UsIFxuICBNb2RlbENvbmZpZywgXG4gIFdlYnZpZXdSZXF1ZXN0IFxufSBmcm9tICcuLi9zaGFyZWQvdHlwZXMnO1xuaW1wb3J0IHsgQW5hbHlzaXNDb25maWd1cmF0aW9uLCBSZXN1bHRzVGFibGUsIEZpbHRlckNvbnRyb2xzIH0gZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCAnLi9zdHlsZXMvYnJlYWtpbmctY2hhbmdlcy5jc3MnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHNoYXJlZE1vZGVsQ29uZmlnPzoge1xuICAgICAgbW9kZWxzOiBNb2RlbENvbmZpZ1tdO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBCcmVha2luZ0NoYW5nZUxvY2F0aW9uIHtcbiAgZmlsZVBhdGg6IHN0cmluZztcbiAgbGluZU51bWJlcjogbnVtYmVyO1xuICBjb2RlU25pcHBldDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJyZWFraW5nQ2hhbmdlIHtcbiAgaWQ6IHN0cmluZztcbiAgc2V2ZXJpdHk6ICdjcml0aWNhbCcgfCAnaGlnaCcgfCAnbWVkaXVtJyB8ICdsb3cnO1xuICBjaGFuZ2VUeXBlOiAnbWV0aG9kLXNpZ25hdHVyZScgfCAnY2xhc3Mtc3RydWN0dXJlJyB8ICdlbnVtLXZhbHVlJyB8ICdtZW1iZXItcmVtb3ZhbCcgfCAnYmVoYXZpb3ItY2hhbmdlJyB8ICdvdGhlcic7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHJlY29tbWVuZGF0aW9uOiBzdHJpbmc7XG4gIGNoYW5nZUxvY2F0aW9uOiBCcmVha2luZ0NoYW5nZUxvY2F0aW9uO1xuICBhZmZlY3RlZExvY2F0aW9uczogQnJlYWtpbmdDaGFuZ2VMb2NhdGlvbltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFuYWx5c2lzUmVzdWx0IHtcbiAgc3VtbWFyeToge1xuICAgIHRvdGFsQnJlYWtpbmdDaGFuZ2VzOiBudW1iZXI7XG4gICAgY3JpdGljYWxDb3VudDogbnVtYmVyO1xuICAgIGhpZ2hDb3VudDogbnVtYmVyO1xuICAgIG1lZGl1bUNvdW50OiBudW1iZXI7XG4gICAgbG93Q291bnQ6IG51bWJlcjtcbiAgfTtcbiAgYnJlYWtpbmdDaGFuZ2VzOiBCcmVha2luZ0NoYW5nZVtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQnJlYWtpbmdDaGFuZ2VzQXBwKCkge1xuICBjb25zdCB7IHBvc3RNZXNzYWdlIH0gPSB1c2VWU0NvZGVBUEkoKTtcbiAgY29uc3QgeyBpc0xvYWRpbmcsIHN0YXJ0TG9hZGluZywgc3RvcExvYWRpbmcgfSA9IHVzZUxvYWRpbmdTdGF0ZSgpO1xuICBjb25zdCB7IGVycm9yLCBzZXRFcnJvciwgY2xlYXJFcnJvciB9ID0gdXNlRXJyb3JTdGF0ZSgpO1xuICBcbiAgY29uc3QgW2JyYW5jaGVzLCBzZXRCcmFuY2hlc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbY3VycmVudEJyYW5jaCwgc2V0Q3VycmVudEJyYW5jaF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzb3VyY2VCcmFuY2gsIHNldFNvdXJjZUJyYW5jaF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt0YXJnZXRCcmFuY2gsIHNldFRhcmdldEJyYW5jaF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzZWxlY3RlZE1vZGVsLCBzZXRTZWxlY3RlZE1vZGVsXSA9IHVzZVN0YXRlKCdncHQtNG8tbWluaScpO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGU8QW5hbHlzaXNSZXN1bHQgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW2ZpbHRlclNldmVyaXR5LCBzZXRGaWx0ZXJTZXZlcml0eV0gPSB1c2VTdGF0ZTxzdHJpbmc+KCdhbGwnKTtcbiAgY29uc3QgW2ZpbHRlckNoYW5nZVR5cGUsIHNldEZpbHRlckNoYW5nZVR5cGVdID0gdXNlU3RhdGU8c3RyaW5nPignYWxsJyk7XG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcblxuICAvLyBHZXQgbW9kZWxzIGZyb20gc2hhcmVkIGNvbmZpZ1xuICBjb25zdCBtb2RlbHMgPSB3aW5kb3cuc2hhcmVkTW9kZWxDb25maWc/Lm1vZGVscyB8fCBbXG4gICAgeyBpZDogJ2dwdC00bycsIG5hbWU6ICdHUFQtNG8nIH0sXG4gICAgeyBpZDogJ2dwdC00by1taW5pJywgbmFtZTogJ0dQVC00by1taW5pJyB9LFxuICAgIHsgaWQ6ICdncHQtNC4xJywgbmFtZTogJ0dQVC00LjEnIH0sXG4gICAgeyBpZDogJ2dwdC01JywgbmFtZTogJ0dQVC01JyB9LFxuICAgIHsgaWQ6ICdncHQtNS1taW5pJywgbmFtZTogJ0dQVC01IE1pbmknIH0sXG4gICAgeyBpZDogJ2NsYXVkZS0zLjUtc29ubmV0JywgbmFtZTogJ0NsYXVkZSAzLjUgU29ubmV0JyB9LFxuICAgIHsgaWQ6ICdjbGF1ZGUtc29ubmV0LTQnLCBuYW1lOiAnQ2xhdWRlIDQgU29ubmV0JyB9LFxuICAgIHsgaWQ6ICdvMScsIG5hbWU6ICdvMScgfSxcbiAgICB7IGlkOiAnbzEtbWluaScsIG5hbWU6ICdvMS1taW5pJyB9LFxuICBdO1xuXG4gIC8vIEhhbmRsZSBtZXNzYWdlcyBmcm9tIGV4dGVuc2lvblxuICBjb25zdCBoYW5kbGVNZXNzYWdlID0gdXNlQ2FsbGJhY2soKG1lc3NhZ2U6IEV4dGVuc2lvbk1lc3NhZ2UpID0+IHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UuY29tbWFuZCkge1xuICAgICAgY2FzZSAnYnJhbmNoZXNMaXN0JzpcbiAgICAgICAgc2V0QnJhbmNoZXMobWVzc2FnZS5icmFuY2hlcyB8fCBbXSk7XG4gICAgICAgIHNldEN1cnJlbnRCcmFuY2gobWVzc2FnZS5jdXJyZW50QnJhbmNoIHx8ICcnKTtcbiAgICAgICAgc2V0U291cmNlQnJhbmNoKG1lc3NhZ2UuY3VycmVudEJyYW5jaCB8fCAnJyk7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBzZWxlY3RlZCBtb2RlbCBpZiBwcm92aWRlZCBmcm9tIGJhY2tlbmRcbiAgICAgICAgaWYgKG1lc3NhZ2UubGFuZ3VhZ2VNb2RlbCkge1xuICAgICAgICAgIHNldFNlbGVjdGVkTW9kZWwobWVzc2FnZS5sYW5ndWFnZU1vZGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCB0YXJnZXQgYnJhbmNoIHdpdGggdGhlIHNhbWUgbG9naWMgYXMgb3JpZ2luYWwgaW1wbGVtZW50YXRpb25cbiAgICAgICAgaWYgKG1lc3NhZ2UuYnJhbmNoZXMgJiYgbWVzc2FnZS5icmFuY2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy8gRmlyc3QgY2hlY2sgZm9yIGRlZmF1bHRUYXJnZXRCcmFuY2ggZnJvbSBjb25maWdcbiAgICAgICAgICBpZiAobWVzc2FnZS5kZWZhdWx0VGFyZ2V0QnJhbmNoICYmIG1lc3NhZ2UuYnJhbmNoZXMuaW5jbHVkZXMobWVzc2FnZS5kZWZhdWx0VGFyZ2V0QnJhbmNoKSkge1xuICAgICAgICAgICAgc2V0VGFyZ2V0QnJhbmNoKG1lc3NhZ2UuZGVmYXVsdFRhcmdldEJyYW5jaCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEZhbGwgYmFjayB0byBtYWluL21hc3RlciBpZiBhdmFpbGFibGUsIG9yIGZpcnN0IGJyYW5jaCB0aGF0J3Mgbm90IHRoZSBzb3VyY2VcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEJyYW5jaCA9XG4gICAgICAgICAgICAgIG1lc3NhZ2UuYnJhbmNoZXMuZmluZCgoYikgPT4gYiA9PT0gJ21haW4nIHx8IGIgPT09ICdtYXN0ZXInKSB8fFxuICAgICAgICAgICAgICBtZXNzYWdlLmJyYW5jaGVzLmZpbmQoKGIpID0+IGIgIT09IG1lc3NhZ2UuY3VycmVudEJyYW5jaCkgfHxcbiAgICAgICAgICAgICAgbWVzc2FnZS5icmFuY2hlc1swXTtcblxuICAgICAgICAgICAgc2V0VGFyZ2V0QnJhbmNoKHRhcmdldEJyYW5jaCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgIGNhc2UgJ2FuYWx5emluZyc6XG4gICAgICAgIHN0YXJ0TG9hZGluZygpO1xuICAgICAgICBjbGVhckVycm9yKCk7XG4gICAgICAgIHNldFJlc3VsdChudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgY2FzZSAnYW5hbHlzaXNSZXN1bHQnOlxuICAgICAgICBzdG9wTG9hZGluZygpO1xuICAgICAgICBzZXRSZXN1bHQobWVzc2FnZS5yZXN1bHQpO1xuICAgICAgICBjbGVhckVycm9yKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgc3RvcExvYWRpbmcoKTtcbiAgICAgICAgc2V0RXJyb3IobWVzc2FnZS5tZXNzYWdlIHx8ICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkJyk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSwgW3N0YXJ0TG9hZGluZywgc3RvcExvYWRpbmcsIHNldEVycm9yLCBjbGVhckVycm9yXSk7XG5cbiAgdXNlTWVzc2FnZUxpc3RlbmVyKGhhbmRsZU1lc3NhZ2UpO1xuXG4gIC8vIEluaXRpYWwgbG9hZCAtIHJlcXVlc3QgYnJhbmNoZXNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwb3N0TWVzc2FnZSh7IGNvbW1hbmQ6ICdnZXRCcmFuY2hlcycgfSk7XG4gIH0sIFtwb3N0TWVzc2FnZV0pO1xuXG4gIC8vIEhhbmRsZSBhbmFseXplIGJ1dHRvbiBjbGlja1xuICBjb25zdCBoYW5kbGVBbmFseXplID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIGlmICghc291cmNlQnJhbmNoIHx8ICF0YXJnZXRCcmFuY2gpIHtcbiAgICAgIHNldEVycm9yKCdQbGVhc2Ugc2VsZWN0IGJvdGggc291cmNlIGFuZCB0YXJnZXQgYnJhbmNoZXMnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjbGVhckVycm9yKCk7XG4gICAgY29uc3QgbWVzc2FnZTogV2Vidmlld1JlcXVlc3QgPSB7XG4gICAgICBjb21tYW5kOiAnYW5hbHl6ZUJyZWFraW5nQ2hhbmdlcycsXG4gICAgICBzb3VyY2VCcmFuY2gsXG4gICAgICB0YXJnZXRCcmFuY2gsXG4gICAgICBtb2RlbEZhbWlseTogc2VsZWN0ZWRNb2RlbCxcbiAgICB9O1xuICAgIHBvc3RNZXNzYWdlKG1lc3NhZ2UpO1xuICB9LCBbc291cmNlQnJhbmNoLCB0YXJnZXRCcmFuY2gsIHNlbGVjdGVkTW9kZWwsIHBvc3RNZXNzYWdlLCBzZXRFcnJvciwgY2xlYXJFcnJvcl0pO1xuXG4gIC8vIEhhbmRsZSBvcGVuaW5nIGEgZmlsZSBhdCBhIHNwZWNpZmljIGxvY2F0aW9uXG4gIGNvbnN0IGhhbmRsZU9wZW5GaWxlID0gdXNlQ2FsbGJhY2soKGZpbGVQYXRoOiBzdHJpbmcsIGxpbmVOdW1iZXI6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2U6IFdlYnZpZXdSZXF1ZXN0ID0ge1xuICAgICAgY29tbWFuZDogJ29wZW5GaWxlJyxcbiAgICAgIGRhdGE6IHsgZmlsZVBhdGgsIGxpbmVOdW1iZXIgfVxuICAgIH07XG4gICAgLy8gVGhlIGJhY2tlbmQgZXhwZWN0cyB0aGVzZSBwcm9wZXJ0aWVzIGRpcmVjdGx5IG9uIHRoZSBtZXNzYWdlIG9iamVjdFxuICAgIChtZXNzYWdlIGFzIGFueSkuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgICAobWVzc2FnZSBhcyBhbnkpLmxpbmVOdW1iZXIgPSBsaW5lTnVtYmVyO1xuICAgIHBvc3RNZXNzYWdlKG1lc3NhZ2UpO1xuICB9LCBbcG9zdE1lc3NhZ2VdKTtcblxuICAvLyBHZXQgZmlsdGVyZWQgYnJlYWtpbmcgY2hhbmdlcyBiYXNlZCBvbiBjdXJyZW50IGZpbHRlcnNcbiAgY29uc3QgZ2V0RmlsdGVyZWRCcmVha2luZ0NoYW5nZXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgaWYgKCFyZXN1bHQgfHwgIXJlc3VsdC5icmVha2luZ0NoYW5nZXMpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0LmJyZWFraW5nQ2hhbmdlcy5maWx0ZXIoKGNoYW5nZSkgPT4ge1xuICAgICAgLy8gRmlsdGVyIGJ5IHNldmVyaXR5XG4gICAgICBpZiAoZmlsdGVyU2V2ZXJpdHkgIT09ICdhbGwnICYmIGNoYW5nZS5zZXZlcml0eSAhPT0gZmlsdGVyU2V2ZXJpdHkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBGaWx0ZXIgYnkgY2hhbmdlIHR5cGVcbiAgICAgIGlmIChmaWx0ZXJDaGFuZ2VUeXBlICE9PSAnYWxsJyAmJiBjaGFuZ2UuY2hhbmdlVHlwZSAhPT0gZmlsdGVyQ2hhbmdlVHlwZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIEZpbHRlciBieSBzZWFyY2ggdGVybVxuICAgICAgaWYgKHNlYXJjaFRlcm0pIHtcbiAgICAgICAgY29uc3Qgc2VhcmNoTG93ZXIgPSBzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgKGNoYW5nZS5kZXNjcmlwdGlvbiAmJiBjaGFuZ2UuZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hMb3dlcikpIHx8XG4gICAgICAgICAgKGNoYW5nZS5jaGFuZ2VMb2NhdGlvbiAmJiBjaGFuZ2UuY2hhbmdlTG9jYXRpb24uZmlsZVBhdGgudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hMb3dlcikpIHx8XG4gICAgICAgICAgKGNoYW5nZS5yZWNvbW1lbmRhdGlvbiAmJiBjaGFuZ2UucmVjb21tZW5kYXRpb24udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hMb3dlcikpXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xuICB9LCBbcmVzdWx0LCBmaWx0ZXJTZXZlcml0eSwgZmlsdGVyQ2hhbmdlVHlwZSwgc2VhcmNoVGVybV0pO1xuXG4gIGNvbnN0IGZpbHRlcmVkQnJlYWtpbmdDaGFuZ2VzID0gZ2V0RmlsdGVyZWRCcmVha2luZ0NoYW5nZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgey8qIFRpdGxlIGFuZCBtb2RlbCBzZWxlY3Rpb24gcm93ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1yb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJicmFuY2hcIiAvPlxuICAgICAgICAgICAgPGgyPkJyZWFraW5nIENoYW5nZXMgQW5hbHlzaXM8L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kZWwtc2VjdGlvblwiPlxuICAgICAgICAgICAgPE1vZGVsU2VsZWN0b3JcbiAgICAgICAgICAgICAgc2VsZWN0ZWRNb2RlbD17c2VsZWN0ZWRNb2RlbH1cbiAgICAgICAgICAgICAgb25Nb2RlbENoYW5nZT17c2V0U2VsZWN0ZWRNb2RlbH1cbiAgICAgICAgICAgICAgbW9kZWxzPXttb2RlbHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8QW5hbHlzaXNDb25maWd1cmF0aW9uXG4gICAgICAgICAgYnJhbmNoZXM9e2JyYW5jaGVzfVxuICAgICAgICAgIHNvdXJjZUJyYW5jaD17c291cmNlQnJhbmNofVxuICAgICAgICAgIHRhcmdldEJyYW5jaD17dGFyZ2V0QnJhbmNofVxuICAgICAgICAgIG9uU291cmNlQnJhbmNoQ2hhbmdlPXtzZXRTb3VyY2VCcmFuY2h9XG4gICAgICAgICAgb25UYXJnZXRCcmFuY2hDaGFuZ2U9e3NldFRhcmdldEJyYW5jaH1cbiAgICAgICAgICBvbkFuYWx5emU9e2hhbmRsZUFuYWx5emV9XG4gICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgY2FuQW5hbHl6ZT17ISEoc291cmNlQnJhbmNoICYmIHRhcmdldEJyYW5jaCl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAge2Vycm9yICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCI+XG4gICAgICAgICAgPGgzPkVycm9yPC9oMz5cbiAgICAgICAgICA8cD57ZXJyb3J9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctY29udGFpbmVyXCI+XG4gICAgICAgICAgPExvYWRpbmdTcGlubmVyIHNpemU9XCJsYXJnZVwiIC8+XG4gICAgICAgICAgPHA+QW5hbHl6aW5nIGJyZWFraW5nIGNoYW5nZXMuLi48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgeyFpc0xvYWRpbmcgJiYgcmVzdWx0ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgPGgyPkFuYWx5c2lzIFJlc3VsdHM8L2gyPlxuXG4gICAgICAgICAgey8qIFN1bW1hcnkgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdW1tYXJ5XCI+XG4gICAgICAgICAgICA8aDM+U3VtbWFyeTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1bW1hcnktc3RhdHNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3RhdC1sYWJlbFwiPlRvdGFsOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGF0LXZhbHVlXCI+e3Jlc3VsdC5zdW1tYXJ5LnRvdGFsQnJlYWtpbmdDaGFuZ2VzfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdCBjcml0aWNhbFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0YXQtbGFiZWxcIj5Dcml0aWNhbDo8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3RhdC12YWx1ZVwiPntyZXN1bHQuc3VtbWFyeS5jcml0aWNhbENvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdCBoaWdoXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3RhdC1sYWJlbFwiPkhpZ2g6PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0YXQtdmFsdWVcIj57cmVzdWx0LnN1bW1hcnkuaGlnaENvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdCBtZWRpdW1cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGF0LWxhYmVsXCI+TWVkaXVtOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGF0LXZhbHVlXCI+e3Jlc3VsdC5zdW1tYXJ5Lm1lZGl1bUNvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3RhdCBsb3dcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGF0LWxhYmVsXCI+TG93Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdGF0LXZhbHVlXCI+e3Jlc3VsdC5zdW1tYXJ5Lmxvd0NvdW50fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxGaWx0ZXJDb250cm9sc1xuICAgICAgICAgICAgZmlsdGVyU2V2ZXJpdHk9e2ZpbHRlclNldmVyaXR5fVxuICAgICAgICAgICAgZmlsdGVyQ2hhbmdlVHlwZT17ZmlsdGVyQ2hhbmdlVHlwZX1cbiAgICAgICAgICAgIHNlYXJjaFRlcm09e3NlYXJjaFRlcm19XG4gICAgICAgICAgICBvbkZpbHRlclNldmVyaXR5Q2hhbmdlPXtzZXRGaWx0ZXJTZXZlcml0eX1cbiAgICAgICAgICAgIG9uRmlsdGVyQ2hhbmdlVHlwZUNoYW5nZT17c2V0RmlsdGVyQ2hhbmdlVHlwZX1cbiAgICAgICAgICAgIG9uU2VhcmNoVGVybUNoYW5nZT17c2V0U2VhcmNoVGVybX1cbiAgICAgICAgICAgIGZpbHRlcmVkQ291bnQ9e2ZpbHRlcmVkQnJlYWtpbmdDaGFuZ2VzLmxlbmd0aH1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPFJlc3VsdHNUYWJsZVxuICAgICAgICAgICAgYnJlYWtpbmdDaGFuZ2VzPXtmaWx0ZXJlZEJyZWFraW5nQ2hhbmdlc31cbiAgICAgICAgICAgIG9uT3BlbkZpbGU9e2hhbmRsZU9wZW5GaWxlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJhbmNoU2VsZWN0b3IsIEJ1dHRvbiB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzJztcblxuaW50ZXJmYWNlIEFuYWx5c2lzQ29uZmlndXJhdGlvblByb3BzIHtcbiAgYnJhbmNoZXM6IHN0cmluZ1tdO1xuICBzb3VyY2VCcmFuY2g6IHN0cmluZztcbiAgdGFyZ2V0QnJhbmNoOiBzdHJpbmc7XG4gIG9uU291cmNlQnJhbmNoQ2hhbmdlOiAoYnJhbmNoOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uVGFyZ2V0QnJhbmNoQ2hhbmdlOiAoYnJhbmNoOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uQW5hbHl6ZTogKCkgPT4gdm9pZDtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBjYW5BbmFseXplOiBib29sZWFuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQW5hbHlzaXNDb25maWd1cmF0aW9uKHtcbiAgYnJhbmNoZXMsXG4gIHNvdXJjZUJyYW5jaCxcbiAgdGFyZ2V0QnJhbmNoLFxuICBvblNvdXJjZUJyYW5jaENoYW5nZSxcbiAgb25UYXJnZXRCcmFuY2hDaGFuZ2UsXG4gIG9uQW5hbHl6ZSxcbiAgaXNMb2FkaW5nLFxuICBjYW5BbmFseXplXG59OiBBbmFseXNpc0NvbmZpZ3VyYXRpb25Qcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogQnJhbmNoIHNlbGVjdGlvbiByb3cgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5jaC1zZWxlY3Rpb24tcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmNoLXNlbGVjdG9yXCI+XG4gICAgICAgICAgPEJyYW5jaFNlbGVjdG9yXG4gICAgICAgICAgICBicmFuY2hlcz17YnJhbmNoZXN9XG4gICAgICAgICAgICBzZWxlY3RlZEJyYW5jaD17c291cmNlQnJhbmNofVxuICAgICAgICAgICAgb25CcmFuY2hDaGFuZ2U9e29uU291cmNlQnJhbmNoQ2hhbmdlfVxuICAgICAgICAgICAgbGFiZWw9XCJTb3VyY2UgQnJhbmNoIChQUiBicmFuY2gpXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuY2gtc2VsZWN0b3JcIj5cbiAgICAgICAgICA8QnJhbmNoU2VsZWN0b3JcbiAgICAgICAgICAgIGJyYW5jaGVzPXticmFuY2hlc31cbiAgICAgICAgICAgIHNlbGVjdGVkQnJhbmNoPXt0YXJnZXRCcmFuY2h9XG4gICAgICAgICAgICBvbkJyYW5jaENoYW5nZT17b25UYXJnZXRCcmFuY2hDaGFuZ2V9XG4gICAgICAgICAgICBsYWJlbD1cIlRhcmdldCBCcmFuY2ggKGJhc2UgYnJhbmNoKVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEFuYWx5emUgYnV0dG9uIHJvdyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5hbHl6ZS1idXR0b24tcm93XCI+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtvbkFuYWx5emV9XG4gICAgICAgICAgZGlzYWJsZWQ9e2lzTG9hZGluZyB8fCAhY2FuQW5hbHl6ZX1cbiAgICAgICAgICBsb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICA+XG4gICAgICAgICAge2lzTG9hZGluZyA/ICdBbmFseXppbmcuLi4nIDogJ0FuYWx5emUgQnJlYWtpbmcgQ2hhbmdlcyd9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJlYWtpbmdDaGFuZ2UgfSBmcm9tICcuLi9CcmVha2luZ0NoYW5nZXNBcHAnO1xuXG5pbnRlcmZhY2UgQnJlYWtpbmdDaGFuZ2VJdGVtUHJvcHMge1xuICBjaGFuZ2U6IEJyZWFraW5nQ2hhbmdlO1xuICBvbk9wZW5GaWxlOiAoZmlsZVBhdGg6IHN0cmluZywgbGluZU51bWJlcjogbnVtYmVyKSA9PiB2b2lkO1xufVxuXG4vLyBIZWxwZXIgZnVuY3Rpb24gdG8gZm9ybWF0IGNoYW5nZSB0eXBlIGZvciBkaXNwbGF5XG5mdW5jdGlvbiBmb3JtYXRDaGFuZ2VUeXBlKGNoYW5nZVR5cGU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHN3aXRjaCAoY2hhbmdlVHlwZSkge1xuICAgIGNhc2UgJ21ldGhvZC1zaWduYXR1cmUnOlxuICAgICAgcmV0dXJuICdNZXRob2QgU2lnbmF0dXJlJztcbiAgICBjYXNlICdjbGFzcy1zdHJ1Y3R1cmUnOlxuICAgICAgcmV0dXJuICdDbGFzcyBTdHJ1Y3R1cmUnO1xuICAgIGNhc2UgJ2VudW0tdmFsdWUnOlxuICAgICAgcmV0dXJuICdFbnVtIFZhbHVlJztcbiAgICBjYXNlICdtZW1iZXItcmVtb3ZhbCc6XG4gICAgICByZXR1cm4gJ01lbWJlciBSZW1vdmFsJztcbiAgICBjYXNlICdiZWhhdmlvci1jaGFuZ2UnOlxuICAgICAgcmV0dXJuICdCZWhhdmlvciBDaGFuZ2UnO1xuICAgIGNhc2UgJ290aGVyJzpcbiAgICAgIHJldHVybiAnT3RoZXInO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gY2hhbmdlVHlwZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQnJlYWtpbmdDaGFuZ2VJdGVtKHsgY2hhbmdlLCBvbk9wZW5GaWxlIH06IEJyZWFraW5nQ2hhbmdlSXRlbVByb3BzKSB7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vIEdldCBzZXZlcml0eSBjbGFzc1xuICBjb25zdCBzZXZlcml0eUNsYXNzID0gYHNldmVyaXR5LSR7Y2hhbmdlLnNldmVyaXR5fWA7XG5cbiAgY29uc3QgaGFuZGxlRmlsZUNsaWNrID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50LCBmaWxlUGF0aDogc3RyaW5nLCBsaW5lTnVtYmVyOiBudW1iZXIpID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBvbk9wZW5GaWxlKGZpbGVQYXRoLCBsaW5lTnVtYmVyKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgYnJlYWtpbmctY2hhbmdlLWl0ZW0gJHtzZXZlcml0eUNsYXNzfWB9PlxuICAgICAgey8qIEhlYWRlciAoYWx3YXlzIHZpc2libGUpICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmVha2luZy1jaGFuZ2UtaGVhZGVyXCIgb25DbGljaz17KCkgPT4gc2V0RXhwYW5kZWQoIWV4cGFuZGVkKX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWtpbmctY2hhbmdlLXRpdGxlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgc2V2ZXJpdHktYmFkZ2UgJHtzZXZlcml0eUNsYXNzfWB9PntjaGFuZ2Uuc2V2ZXJpdHl9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNoYW5nZS10eXBlLWJhZGdlXCI+e2Zvcm1hdENoYW5nZVR5cGUoY2hhbmdlLmNoYW5nZVR5cGUpfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJicmVha2luZy1jaGFuZ2UtZGVzY3JpcHRpb25cIj57Y2hhbmdlLmRlc2NyaXB0aW9ufTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWtpbmctY2hhbmdlLWxvY2F0aW9uXCI+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpbGUtbG9jYXRpb25cIlxuICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBoYW5kbGVGaWxlQ2xpY2soZXZlbnQsIGNoYW5nZS5jaGFuZ2VMb2NhdGlvbi5maWxlUGF0aCwgY2hhbmdlLmNoYW5nZUxvY2F0aW9uLmxpbmVOdW1iZXIpfVxuICAgICAgICAgICAgdGl0bGU9XCJDbGljayB0byBvcGVuIGZpbGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtgJHtjaGFuZ2UuY2hhbmdlTG9jYXRpb24uZmlsZVBhdGh9OiR7Y2hhbmdlLmNoYW5nZUxvY2F0aW9uLmxpbmVOdW1iZXJ9YH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXhwYW5kLWljb25cIj57ZXhwYW5kZWQgPyAn4pa8JyA6ICfilrYnfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIERldGFpbHMgKHZpc2libGUgd2hlbiBleHBhbmRlZCkgKi99XG4gICAgICB7ZXhwYW5kZWQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFraW5nLWNoYW5nZS1kZXRhaWxzXCI+XG4gICAgICAgICAgey8qIFJlY29tbWVuZGF0aW9uICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVjb21tZW5kYXRpb25cIj5cbiAgICAgICAgICAgIDxoND5SZWNvbW1lbmRhdGlvbjwvaDQ+XG4gICAgICAgICAgICA8cD57Y2hhbmdlLnJlY29tbWVuZGF0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBBZmZlY3RlZCBsb2NhdGlvbnMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZmZlY3RlZC1sb2NhdGlvbnNcIj5cbiAgICAgICAgICAgIDxoND5BZmZlY3RlZCBMb2NhdGlvbnMgKHtjaGFuZ2UuYWZmZWN0ZWRMb2NhdGlvbnMubGVuZ3RofSk8L2g0PlxuICAgICAgICAgICAge2NoYW5nZS5hZmZlY3RlZExvY2F0aW9ucy5sZW5ndGggPT09IDAgPyAoXG4gICAgICAgICAgICAgIDxwPk5vIGFmZmVjdGVkIGxvY2F0aW9ucyBmb3VuZC48L3A+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibG9jYXRpb25zLWxpc3RcIj5cbiAgICAgICAgICAgICAgICB7Y2hhbmdlLmFmZmVjdGVkTG9jYXRpb25zLm1hcCgobG9jYXRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwibG9jYXRpb24taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvY2F0aW9uLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaWxlLWxvY2F0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uT3BlbkZpbGUobG9jYXRpb24uZmlsZVBhdGgsIGxvY2F0aW9uLmxpbmVOdW1iZXIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDbGljayB0byBvcGVuIGZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtsb2NhdGlvbi5maWxlUGF0aH06JHtsb2NhdGlvbi5saW5lTnVtYmVyfWB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2RlLXNuaXBwZXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cHJlPntsb2NhdGlvbi5jb2RlU25pcHBldH08L3ByZT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBGaWx0ZXJDb250cm9sc1Byb3BzIHtcbiAgZmlsdGVyU2V2ZXJpdHk6IHN0cmluZztcbiAgZmlsdGVyQ2hhbmdlVHlwZTogc3RyaW5nO1xuICBzZWFyY2hUZXJtOiBzdHJpbmc7XG4gIG9uRmlsdGVyU2V2ZXJpdHlDaGFuZ2U6IChzZXZlcml0eTogc3RyaW5nKSA9PiB2b2lkO1xuICBvbkZpbHRlckNoYW5nZVR5cGVDaGFuZ2U6IChjaGFuZ2VUeXBlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uU2VhcmNoVGVybUNoYW5nZTogKHNlYXJjaFRlcm06IHN0cmluZykgPT4gdm9pZDtcbiAgZmlsdGVyZWRDb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gRmlsdGVyQ29udHJvbHMoe1xuICBmaWx0ZXJTZXZlcml0eSxcbiAgZmlsdGVyQ2hhbmdlVHlwZSxcbiAgc2VhcmNoVGVybSxcbiAgb25GaWx0ZXJTZXZlcml0eUNoYW5nZSxcbiAgb25GaWx0ZXJDaGFuZ2VUeXBlQ2hhbmdlLFxuICBvblNlYXJjaFRlcm1DaGFuZ2UsXG4gIGZpbHRlcmVkQ291bnRcbn06IEZpbHRlckNvbnRyb2xzUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlcnMtc2VjdGlvblwiPlxuICAgICAgPGgzPkZpbHRlcnM8L2gzPlxuXG4gICAgICB7LyogU2VhcmNoIHJvdyAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLXJvd1wiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvblNlYXJjaFRlcm1DaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGluIGRlc2NyaXB0aW9ucywgZmlsZXMsIGV0Yy5cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImRhcmstaW5wdXRcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBGaWx0ZXIgc2VsZWN0IGlucHV0cyByb3cgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1yb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWx0ZXItY29sdW1uXCI+XG4gICAgICAgICAgPGxhYmVsPlNldmVyaXR5OjwvbGFiZWw+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgdmFsdWU9e2ZpbHRlclNldmVyaXR5fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkZpbHRlclNldmVyaXR5Q2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhcmstc2VsZWN0XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYWxsXCI+QWxsIFNldmVyaXRpZXM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJjcml0aWNhbFwiPkNyaXRpY2FsPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsdGVyLWNvbHVtblwiPlxuICAgICAgICAgIDxsYWJlbD5DaGFuZ2UgVHlwZTo8L2xhYmVsPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIHZhbHVlPXtmaWx0ZXJDaGFuZ2VUeXBlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkZpbHRlckNoYW5nZVR5cGVDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGFyay1zZWxlY3RcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJhbGxcIj5BbGwgVHlwZXM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZXRob2Qtc2lnbmF0dXJlXCI+TWV0aG9kIFNpZ25hdHVyZTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNsYXNzLXN0cnVjdHVyZVwiPkNsYXNzIFN0cnVjdHVyZTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVudW0tdmFsdWVcIj5FbnVtIFZhbHVlPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVtYmVyLXJlbW92YWxcIj5NZW1iZXIgUmVtb3ZhbDwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJlaGF2aW9yLWNoYW5nZVwiPkJlaGF2aW9yIENoYW5nZTwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm90aGVyXCI+T3RoZXI8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIEJyZWFraW5nIGNoYW5nZXMgY291bnQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbHRlci1hY3Rpb25zXCI+XG4gICAgICAgIDxoMz5CcmVha2luZyBDaGFuZ2VzICh7ZmlsdGVyZWRDb3VudH0pPC9oMz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcmVha2luZ0NoYW5nZSB9IGZyb20gJy4uL0JyZWFraW5nQ2hhbmdlc0FwcCc7XG5pbXBvcnQgeyBCcmVha2luZ0NoYW5nZUl0ZW0gfSBmcm9tICcuL0JyZWFraW5nQ2hhbmdlSXRlbSc7XG5cbmludGVyZmFjZSBSZXN1bHRzVGFibGVQcm9wcyB7XG4gIGJyZWFraW5nQ2hhbmdlczogQnJlYWtpbmdDaGFuZ2VbXTtcbiAgb25PcGVuRmlsZTogKGZpbGVQYXRoOiBzdHJpbmcsIGxpbmVOdW1iZXI6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJlc3VsdHNUYWJsZSh7IGJyZWFraW5nQ2hhbmdlcywgb25PcGVuRmlsZSB9OiBSZXN1bHRzVGFibGVQcm9wcykge1xuICBpZiAoYnJlYWtpbmdDaGFuZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyZWFraW5nLWNoYW5nZXMtbGlzdFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJuby1yZXN1bHRzXCI+Tm8gYnJlYWtpbmcgY2hhbmdlcyBmb3VuZCBtYXRjaGluZyB0aGUgY3VycmVudCBmaWx0ZXJzLjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJlYWtpbmctY2hhbmdlcy1saXN0XCI+XG4gICAgICB7YnJlYWtpbmdDaGFuZ2VzLm1hcCgoY2hhbmdlKSA9PiAoXG4gICAgICAgIDxCcmVha2luZ0NoYW5nZUl0ZW1cbiAgICAgICAgICBrZXk9e2NoYW5nZS5pZH1cbiAgICAgICAgICBjaGFuZ2U9e2NoYW5nZX1cbiAgICAgICAgICBvbk9wZW5GaWxlPXtvbk9wZW5GaWxlfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59IiwiZXhwb3J0IHsgQW5hbHlzaXNDb25maWd1cmF0aW9uIH0gZnJvbSAnLi9BbmFseXNpc0NvbmZpZ3VyYXRpb24nO1xuZXhwb3J0IHsgUmVzdWx0c1RhYmxlIH0gZnJvbSAnLi9SZXN1bHRzVGFibGUnO1xuZXhwb3J0IHsgRmlsdGVyQ29udHJvbHMgfSBmcm9tICcuL0ZpbHRlckNvbnRyb2xzJztcbmV4cG9ydCB7IEJyZWFraW5nQ2hhbmdlSXRlbSB9IGZyb20gJy4vQnJlYWtpbmdDaGFuZ2VJdGVtJzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IHsgQnJlYWtpbmdDaGFuZ2VzQXBwIH0gZnJvbSAnLi9CcmVha2luZ0NoYW5nZXNBcHAnO1xuXG4vLyBSZW5kZXIgdGhlIFJlYWN0IGFwcFxuY29uc3QgZG9tQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbmlmIChkb21Db250YWluZXIpIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZVJvb3QoZG9tQ29udGFpbmVyKTtcbiAgcm9vdC5yZW5kZXIoPEJyZWFraW5nQ2hhbmdlc0FwcCAvPik7XG59IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwMS4zL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwMS4zL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA3LjEuMl93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9icmVha2luZy1jaGFuZ2VzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA3LjEuMl93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9icmVha2luZy1jaGFuZ2VzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYnJlYWtpbmctY2hhbmdlc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb3BpbG90X3BsdXNfcGx1c1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb3BpbG90X3BsdXNfcGx1c1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzXCIsXCJzaGFyZWRcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvd2Vidmlld3MvYnJlYWtpbmctY2hhbmdlcy9pbmRleC50c3hcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==