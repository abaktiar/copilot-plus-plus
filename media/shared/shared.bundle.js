"use strict";
(self["webpackChunkcopilot_plus_plus"] = self["webpackChunkcopilot_plus_plus"] || []).push([["shared"],{

/***/ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./src/webviews/shared/styles/components.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./src/webviews/shared/styles/components.css ***!
  \*********************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/* Shared component styles */

/* Error Boundary */
.error-boundary {
  padding: 20px;
  text-align: center;
  border: 1px solid var(--vscode-errorForeground);
  border-radius: 4px;
  background-color: var(--vscode-inputValidation-errorBackground);
  color: var(--vscode-errorForeground);
}

.error-content h3 {
  margin-top: 0;
  color: var(--vscode-errorForeground);
}

.error-details {
  margin: 16px 0;
  text-align: left;
}

.error-details summary {
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 8px;
}

.error-details pre {
  background-color: var(--vscode-textCodeBlock-background);
  padding: 8px;
  border-radius: 2px;
  font-size: 12px;
  overflow-x: auto;
}

.error-fallback {
  padding: 20px;
  text-align: center;
  border: 1px solid var(--vscode-errorForeground);
  border-radius: 4px;
  background-color: var(--vscode-inputValidation-errorBackground);
  color: var(--vscode-errorForeground);
}

.error-fallback h2 {
  margin-top: 0;
  color: var(--vscode-errorForeground);
}

.error-fallback button {
  margin-top: 10px;
  padding: 8px 16px;
  background-color: var(--vscode-button-background);
  color: var(--vscode-button-foreground);
  border: none;
  border-radius: 2px;
  cursor: pointer;
}

.error-fallback button:hover {
  background-color: var(--vscode-button-hoverBackground);
}

/* Loading Spinner */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.spinner {
  border: 2px solid var(--vscode-progressBar-background);
  border-top: 2px solid var(--vscode-progressBar-foreground);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.spinner-small {
  width: 16px;
  height: 16px;
}

.spinner-medium {
  width: 24px;
  height: 24px;
}

.spinner-large {
  width: 32px;
  height: 32px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-message {
  margin-top: 10px;
  color: var(--vscode-foreground);
  font-size: 14px;
}

/* Button */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 14px;
  border: 1px solid transparent;
  border-radius: 2px;
  font-size: 13px;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background-color: var(--vscode-button-background);
  color: var(--vscode-button-foreground);
}

.btn-primary:hover:not(:disabled) {
  background-color: var(--vscode-button-hoverBackground);
}

.btn-secondary {
  background-color: var(--vscode-button-secondaryBackground);
  color: var(--vscode-button-secondaryForeground);
}

.btn-secondary:hover:not(:disabled) {
  background-color: var(--vscode-button-secondaryHoverBackground);
}

.btn-danger {
  background-color: var(--vscode-inputValidation-errorBackground);
  color: var(--vscode-errorForeground);
  border-color: var(--vscode-errorForeground);
}

.btn-danger:hover:not(:disabled) {
  opacity: 0.8;
}

.btn-small {
  padding: 4px 8px;
  font-size: 11px;
}

.btn-medium {
  padding: 6px 14px;
  font-size: 13px;
}

.btn-large {
  padding: 8px 16px;
  font-size: 14px;
}

.btn-loading {
  color: transparent;
}

.btn-spinner {
  position: absolute;
  width: 14px;
  height: 14px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Model Selector */
.model-selector {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
}

.model-selector label {
  font-size: 13px;
  font-weight: 600;
  color: var(--vscode-foreground);
}

.model-select {
  padding: 4px 8px;
  background-color: var(--vscode-input-background);
  color: var(--vscode-input-foreground);
  border: 1px solid var(--vscode-input-border);
  border-radius: 2px;
  font-size: 13px;
  font-family: inherit;
}

.model-select:focus {
  outline: 1px solid var(--vscode-focusBorder);
  outline-offset: -1px;
}

/* Branch Selector */
.branch-selector {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
}

.branch-selector label {
  font-size: 13px;
  font-weight: 600;
  color: var(--vscode-foreground);
}

.branch-select {
  padding: 4px 8px;
  background-color: var(--vscode-input-background);
  color: var(--vscode-input-foreground);
  border: 1px solid var(--vscode-input-border);
  border-radius: 2px;
  font-size: 13px;
  font-family: inherit;
}

.branch-select:focus {
  outline: 1px solid var(--vscode-focusBorder);
  outline-offset: -1px;
}/* Ic
on */
.icon {
  display: inline-block;
  vertical-align: middle;
  fill: currentColor;
  flex-shrink: 0;
}

.icon-copy {
  cursor: pointer;
}

.icon-copy:hover {
  opacity: 0.8;
}

.icon-loading {
  animation: spin 1s linear infinite;
}

.icon-error {
  color: var(--vscode-errorForeground);
}

.icon-warning {
  color: var(--vscode-notificationsWarningIcon-foreground);
}

.icon-info {
  color: var(--vscode-notificationsInfoIcon-foreground);
}

.icon-check {
  color: var(--vscode-terminal-ansiGreen);
}`, "",{"version":3,"sources":["webpack://./src/webviews/shared/styles/components.css"],"names":[],"mappings":"AAAA,4BAA4B;;AAE5B,mBAAmB;AACnB;EACE,aAAa;EACb,kBAAkB;EAClB,+CAA+C;EAC/C,kBAAkB;EAClB,+DAA+D;EAC/D,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,wDAAwD;EACxD,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,+CAA+C;EAC/C,kBAAkB;EAClB,+DAA+D;EAC/D,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,iDAAiD;EACjD,sCAAsC;EACtC,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,sDAAsD;AACxD;;AAEA,oBAAoB;AACpB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,sDAAsD;EACtD,0DAA0D;EAC1D,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,KAAK,uBAAuB,EAAE;EAC9B,OAAO,yBAAyB,EAAE;AACpC;;AAEA;EACE,gBAAgB;EAChB,+BAA+B;EAC/B,eAAe;AACjB;;AAEA,WAAW;AACX;EACE,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,6BAA6B;EAC7B,kBAAkB;EAClB,eAAe;EACf,oBAAoB;EACpB,eAAe;EACf,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,iDAAiD;EACjD,sCAAsC;AACxC;;AAEA;EACE,sDAAsD;AACxD;;AAEA;EACE,0DAA0D;EAC1D,+CAA+C;AACjD;;AAEA;EACE,+DAA+D;AACjE;;AAEA;EACE,+DAA+D;EAC/D,oCAAoC;EACpC,2CAA2C;AAC7C;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,kCAAkC;EAClC,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA,mBAAmB;AACnB;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;EAChB,gDAAgD;EAChD,qCAAqC;EACrC,4CAA4C;EAC5C,kBAAkB;EAClB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,4CAA4C;EAC5C,oBAAoB;AACtB;;AAEA,oBAAoB;AACpB;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;EAChB,gDAAgD;EAChD,qCAAqC;EACrC,4CAA4C;EAC5C,kBAAkB;EAClB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,4CAA4C;EAC5C,oBAAoB;AACtB,CAAC;IACG;AACJ;EACE,qBAAqB;EACrB,sBAAsB;EACtB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,wDAAwD;AAC1D;;AAEA;EACE,qDAAqD;AACvD;;AAEA;EACE,uCAAuC;AACzC","sourcesContent":["/* Shared component styles */\n\n/* Error Boundary */\n.error-boundary {\n  padding: 20px;\n  text-align: center;\n  border: 1px solid var(--vscode-errorForeground);\n  border-radius: 4px;\n  background-color: var(--vscode-inputValidation-errorBackground);\n  color: var(--vscode-errorForeground);\n}\n\n.error-content h3 {\n  margin-top: 0;\n  color: var(--vscode-errorForeground);\n}\n\n.error-details {\n  margin: 16px 0;\n  text-align: left;\n}\n\n.error-details summary {\n  cursor: pointer;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n\n.error-details pre {\n  background-color: var(--vscode-textCodeBlock-background);\n  padding: 8px;\n  border-radius: 2px;\n  font-size: 12px;\n  overflow-x: auto;\n}\n\n.error-fallback {\n  padding: 20px;\n  text-align: center;\n  border: 1px solid var(--vscode-errorForeground);\n  border-radius: 4px;\n  background-color: var(--vscode-inputValidation-errorBackground);\n  color: var(--vscode-errorForeground);\n}\n\n.error-fallback h2 {\n  margin-top: 0;\n  color: var(--vscode-errorForeground);\n}\n\n.error-fallback button {\n  margin-top: 10px;\n  padding: 8px 16px;\n  background-color: var(--vscode-button-background);\n  color: var(--vscode-button-foreground);\n  border: none;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\n.error-fallback button:hover {\n  background-color: var(--vscode-button-hoverBackground);\n}\n\n/* Loading Spinner */\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n\n.spinner {\n  border: 2px solid var(--vscode-progressBar-background);\n  border-top: 2px solid var(--vscode-progressBar-foreground);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n.spinner-small {\n  width: 16px;\n  height: 16px;\n}\n\n.spinner-medium {\n  width: 24px;\n  height: 24px;\n}\n\n.spinner-large {\n  width: 32px;\n  height: 32px;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n.loading-message {\n  margin-top: 10px;\n  color: var(--vscode-foreground);\n  font-size: 14px;\n}\n\n/* Button */\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 6px 14px;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  font-size: 13px;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n}\n\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.btn-primary {\n  background-color: var(--vscode-button-background);\n  color: var(--vscode-button-foreground);\n}\n\n.btn-primary:hover:not(:disabled) {\n  background-color: var(--vscode-button-hoverBackground);\n}\n\n.btn-secondary {\n  background-color: var(--vscode-button-secondaryBackground);\n  color: var(--vscode-button-secondaryForeground);\n}\n\n.btn-secondary:hover:not(:disabled) {\n  background-color: var(--vscode-button-secondaryHoverBackground);\n}\n\n.btn-danger {\n  background-color: var(--vscode-inputValidation-errorBackground);\n  color: var(--vscode-errorForeground);\n  border-color: var(--vscode-errorForeground);\n}\n\n.btn-danger:hover:not(:disabled) {\n  opacity: 0.8;\n}\n\n.btn-small {\n  padding: 4px 8px;\n  font-size: 11px;\n}\n\n.btn-medium {\n  padding: 6px 14px;\n  font-size: 13px;\n}\n\n.btn-large {\n  padding: 8px 16px;\n  font-size: 14px;\n}\n\n.btn-loading {\n  color: transparent;\n}\n\n.btn-spinner {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n/* Model Selector */\n.model-selector {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 16px;\n}\n\n.model-selector label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--vscode-foreground);\n}\n\n.model-select {\n  padding: 4px 8px;\n  background-color: var(--vscode-input-background);\n  color: var(--vscode-input-foreground);\n  border: 1px solid var(--vscode-input-border);\n  border-radius: 2px;\n  font-size: 13px;\n  font-family: inherit;\n}\n\n.model-select:focus {\n  outline: 1px solid var(--vscode-focusBorder);\n  outline-offset: -1px;\n}\n\n/* Branch Selector */\n.branch-selector {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 16px;\n}\n\n.branch-selector label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--vscode-foreground);\n}\n\n.branch-select {\n  padding: 4px 8px;\n  background-color: var(--vscode-input-background);\n  color: var(--vscode-input-foreground);\n  border: 1px solid var(--vscode-input-border);\n  border-radius: 2px;\n  font-size: 13px;\n  font-family: inherit;\n}\n\n.branch-select:focus {\n  outline: 1px solid var(--vscode-focusBorder);\n  outline-offset: -1px;\n}/* Ic\non */\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n  fill: currentColor;\n  flex-shrink: 0;\n}\n\n.icon-copy {\n  cursor: pointer;\n}\n\n.icon-copy:hover {\n  opacity: 0.8;\n}\n\n.icon-loading {\n  animation: spin 1s linear infinite;\n}\n\n.icon-error {\n  color: var(--vscode-errorForeground);\n}\n\n.icon-warning {\n  color: var(--vscode-notificationsWarningIcon-foreground);\n}\n\n.icon-info {\n  color: var(--vscode-notificationsInfoIcon-foreground);\n}\n\n.icon-check {\n  color: var(--vscode-terminal-ansiGreen);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/webviews/shared/components/BranchSelector.tsx":
/*!***********************************************************!*\
  !*** ./src/webviews/shared/components/BranchSelector.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BranchSelector: () => (/* binding */ BranchSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js");

function BranchSelector({ branches, selectedBranch, onBranchChange, label }) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "branch-selector", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { htmlFor: `branch-select-${label.toLowerCase().replace(/\s+/g, '-')}`, children: [label, ":"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { id: `branch-select-${label.toLowerCase().replace(/\s+/g, '-')}`, value: selectedBranch, onChange: (e) => onBranchChange(e.target.value), className: "branch-select", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: "", children: "Select a branch..." }), branches.map((branch) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: branch, children: branch }, branch)))] })] }));
}


/***/ }),

/***/ "./src/webviews/shared/components/Button.tsx":
/*!***************************************************!*\
  !*** ./src/webviews/shared/components/Button.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js");

function Button({ variant = 'primary', size = 'medium', loading = false, children, disabled, className = '', ...props }) {
    const baseClass = 'btn';
    const variantClass = `btn-${variant}`;
    const sizeClass = `btn-${size}`;
    const loadingClass = loading ? 'btn-loading' : '';
    const classes = [baseClass, variantClass, sizeClass, loadingClass, className]
        .filter(Boolean)
        .join(' ');
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { className: classes, disabled: disabled || loading, ...props, children: [loading && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "btn-spinner" }), children] }));
}


/***/ }),

/***/ "./src/webviews/shared/components/ErrorBoundary.tsx":
/*!**********************************************************!*\
  !*** ./src/webviews/shared/components/ErrorBoundary.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorBoundary: () => (/* binding */ ErrorBoundary)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class ErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, errorInfo) {
        console.error('Webview Error:', error, errorInfo);
        // Send error to extension for logging
        try {
            const vscode = window.acquireVsCodeApi?.();
            if (vscode) {
                vscode.postMessage({
                    command: 'error',
                    data: {
                        error: error.message,
                        stack: error.stack,
                        componentStack: errorInfo.componentStack
                    }
                });
            }
        }
        catch (e) {
            console.error('Failed to send error to extension:', e);
        }
    }
    render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "error-boundary", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "error-content", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "Something went wrong" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: "An error occurred while rendering this component." }), this.state.error && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", { className: "error-details", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("summary", { children: "Error details" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: this.state.error.message })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "btn btn-primary", onClick: () => this.setState({ hasError: false, error: undefined }), children: "Try again" })] }) }));
        }
        return this.props.children;
    }
}


/***/ }),

/***/ "./src/webviews/shared/components/Icon.tsx":
/*!*************************************************!*\
  !*** ./src/webviews/shared/components/Icon.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Icon: () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js");

// Common SVG icons used in the extension
const icons = {
    copy: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" })),
    refresh: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })),
    check: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" })),
    error: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })),
    warning: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" })),
    info: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" })),
    loading: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" })),
    chevronDown: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" })),
    chevronUp: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" })),
    search: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }))
};
function Icon({ name, size = 24, className = '', color }) {
    const iconPath = icons[name];
    if (!iconPath) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { className: `icon icon-${name} ${className}`, width: size, height: size, viewBox: "0 0 24 24", fill: color || 'currentColor', xmlns: "http://www.w3.org/2000/svg", children: iconPath }));
}


/***/ }),

/***/ "./src/webviews/shared/components/LoadingSpinner.tsx":
/*!***********************************************************!*\
  !*** ./src/webviews/shared/components/LoadingSpinner.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingSpinner: () => (/* binding */ LoadingSpinner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js");

function LoadingSpinner({ size = 'medium', message }) {
    const sizeClass = {
        small: 'spinner-small',
        medium: 'spinner-medium',
        large: 'spinner-large'
    }[size];
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "loading-container", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: `spinner ${sizeClass}` }), message && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { className: "loading-message", children: message })] }));
}


/***/ }),

/***/ "./src/webviews/shared/components/ModelSelector.tsx":
/*!**********************************************************!*\
  !*** ./src/webviews/shared/components/ModelSelector.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModelSelector: () => (/* binding */ ModelSelector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js");

function ModelSelector({ selectedModel, onModelChange, models }) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "model-selector", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { htmlFor: "model-select", children: "Language Model:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("select", { id: "model-select", value: selectedModel, onChange: (e) => onModelChange(e.target.value), className: "model-select", children: models.map((model) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: model.id, children: model.name }, model.id))) })] }));
}


/***/ }),

/***/ "./src/webviews/shared/components/index.ts":
/*!*************************************************!*\
  !*** ./src/webviews/shared/components/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BranchSelector: () => (/* reexport safe */ _BranchSelector__WEBPACK_IMPORTED_MODULE_4__.BranchSelector),
/* harmony export */   Button: () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_2__.Button),
/* harmony export */   ErrorBoundary: () => (/* reexport safe */ _ErrorBoundary__WEBPACK_IMPORTED_MODULE_0__.ErrorBoundary),
/* harmony export */   Icon: () => (/* reexport safe */ _Icon__WEBPACK_IMPORTED_MODULE_5__.Icon),
/* harmony export */   LoadingSpinner: () => (/* reexport safe */ _LoadingSpinner__WEBPACK_IMPORTED_MODULE_1__.LoadingSpinner),
/* harmony export */   ModelSelector: () => (/* reexport safe */ _ModelSelector__WEBPACK_IMPORTED_MODULE_3__.ModelSelector)
/* harmony export */ });
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorBoundary */ "./src/webviews/shared/components/ErrorBoundary.tsx");
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingSpinner */ "./src/webviews/shared/components/LoadingSpinner.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./src/webviews/shared/components/Button.tsx");
/* harmony import */ var _ModelSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModelSelector */ "./src/webviews/shared/components/ModelSelector.tsx");
/* harmony import */ var _BranchSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BranchSelector */ "./src/webviews/shared/components/BranchSelector.tsx");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Icon */ "./src/webviews/shared/components/Icon.tsx");








/***/ }),

/***/ "./src/webviews/shared/hooks/useVSCodeAPI.ts":
/*!***************************************************!*\
  !*** ./src/webviews/shared/hooks/useVSCodeAPI.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useErrorState: () => (/* binding */ useErrorState),
/* harmony export */   useLoadingState: () => (/* binding */ useLoadingState),
/* harmony export */   useMessageListener: () => (/* binding */ useMessageListener),
/* harmony export */   useVSCodeAPI: () => (/* binding */ useVSCodeAPI),
/* harmony export */   useWebviewState: () => (/* binding */ useWebviewState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useVSCodeAPI() {
    const vscodeRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    if (!vscodeRef.current) {
        vscodeRef.current = window.acquireVsCodeApi();
    }
    const postMessage = (message) => {
        vscodeRef.current?.postMessage(message);
    };
    const getState = () => {
        return vscodeRef.current?.getState();
    };
    const setState = (state) => {
        vscodeRef.current?.setState(state);
    };
    return {
        postMessage,
        getState,
        setState,
        vscode: vscodeRef.current
    };
}
function useMessageListener(onMessage) {
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const handleMessage = (event) => {
            onMessage(event.data);
        };
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [onMessage]);
}
function useLoadingState(initialState = false) {
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);
    const startLoading = () => setIsLoading(true);
    const stopLoading = () => setIsLoading(false);
    return {
        isLoading,
        startLoading,
        stopLoading,
        setIsLoading
    };
}
function useErrorState() {
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const clearError = () => setError(null);
    const setErrorMessage = (message) => setError(message);
    return {
        error,
        setError: setErrorMessage,
        clearError,
        hasError: error !== null
    };
}
function useWebviewState(initialState) {
    const { getState, setState } = useVSCodeAPI();
    const [state, setStateInternal] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(() => {
        const savedState = getState();
        return savedState || initialState;
    });
    const updateState = (newState) => {
        const updatedState = typeof newState === 'function'
            ? newState(state)
            : newState;
        setStateInternal(updatedState);
        setState(updatedState);
    };
    return [state, updateState];
}


/***/ }),

/***/ "./src/webviews/shared/index.ts":
/*!**************************************!*\
  !*** ./src/webviews/shared/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BranchSelector: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.BranchSelector),
/* harmony export */   Button: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.Button),
/* harmony export */   ErrorBoundary: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.ErrorBoundary),
/* harmony export */   Icon: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.Icon),
/* harmony export */   LoadingSpinner: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.LoadingSpinner),
/* harmony export */   ModelSelector: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.ModelSelector),
/* harmony export */   copyToClipboard: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.copyToClipboard),
/* harmony export */   createMessageHandler: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.createMessageHandler),
/* harmony export */   debounce: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.debounce),
/* harmony export */   formatError: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.formatError),
/* harmony export */   handleWebviewMessage: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.handleWebviewMessage),
/* harmony export */   safeJsonParse: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.safeJsonParse),
/* harmony export */   throttle: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.throttle),
/* harmony export */   useErrorState: () => (/* reexport safe */ _hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__.useErrorState),
/* harmony export */   useLoadingState: () => (/* reexport safe */ _hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__.useLoadingState),
/* harmony export */   useMessageListener: () => (/* reexport safe */ _hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__.useMessageListener),
/* harmony export */   useVSCodeAPI: () => (/* reexport safe */ _hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__.useVSCodeAPI),
/* harmony export */   useWebviewState: () => (/* reexport safe */ _hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__.useWebviewState),
/* harmony export */   validateRequiredFields: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.validateRequiredFields)
/* harmony export */ });
/* harmony import */ var _styles_components_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/components.css */ "./src/webviews/shared/styles/components.css");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components */ "./src/webviews/shared/components/index.ts");
/* harmony import */ var _hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useVSCodeAPI */ "./src/webviews/shared/hooks/useVSCodeAPI.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./src/webviews/shared/types/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/webviews/shared/utils/index.ts");
// Import shared styles







/***/ }),

/***/ "./src/webviews/shared/styles/components.css":
/*!***************************************************!*\
  !*** ./src/webviews/shared/styles/components.css ***!
  \***************************************************/
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
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_components_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./components.css */ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./src/webviews/shared/styles/components.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_components_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_components_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_components_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_components_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/webviews/shared/types/index.ts":
/*!********************************************!*\
  !*** ./src/webviews/shared/types/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/webviews/shared/utils/index.ts":
/*!********************************************!*\
  !*** ./src/webviews/shared/utils/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyToClipboard: () => (/* binding */ copyToClipboard),
/* harmony export */   createMessageHandler: () => (/* binding */ createMessageHandler),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   formatError: () => (/* binding */ formatError),
/* harmony export */   handleWebviewMessage: () => (/* binding */ handleWebviewMessage),
/* harmony export */   safeJsonParse: () => (/* binding */ safeJsonParse),
/* harmony export */   throttle: () => (/* binding */ throttle),
/* harmony export */   validateRequiredFields: () => (/* binding */ validateRequiredFields)
/* harmony export */ });
// Utility functions for webview components
function debounce(func, wait) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}
function throttle(func, limit) {
    let inThrottle;
    return (...args) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    }
    else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'absolute';
        textArea.style.left = '-999999px';
        document.body.prepend(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
        }
        catch (error) {
            console.error('Failed to copy text: ', error);
        }
        finally {
            textArea.remove();
        }
        return Promise.resolve();
    }
}
function formatError(error) {
    if (error instanceof Error) {
        return error.message;
    }
    if (typeof error === 'string') {
        return error;
    }
    return 'An unknown error occurred';
}
function handleWebviewMessage(message, expectedCommand, onSuccess, onError) {
    if (message.command === expectedCommand) {
        if (message.error && onError) {
            onError(message.error);
        }
        else {
            onSuccess(message.data || message);
        }
    }
}
function createMessageHandler(handlers) {
    return (message) => {
        const handler = handlers[message.command];
        if (handler) {
            handler(message);
        }
    };
}
function validateRequiredFields(obj, requiredFields) {
    const missingFields = requiredFields.filter(field => obj[field] === undefined || obj[field] === null || obj[field] === '');
    return {
        isValid: missingFields.length === 0,
        missingFields: missingFields
    };
}
function safeJsonParse(jsonString, fallback) {
    try {
        return JSON.parse(jsonString);
    }
    catch {
        return fallback;
    }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL3NoYXJlZC9zdHlsZXMvY29tcG9uZW50cy5jc3MiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL2NvbXBvbmVudHMvQnJhbmNoU2VsZWN0b3IudHN4Iiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL3NoYXJlZC9jb21wb25lbnRzL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL2NvbXBvbmVudHMvRXJyb3JCb3VuZGFyeS50c3giLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL2NvbXBvbmVudHMvSWNvbi50c3giLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL2NvbXBvbmVudHMvTG9hZGluZ1NwaW5uZXIudHN4Iiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL3NoYXJlZC9jb21wb25lbnRzL01vZGVsU2VsZWN0b3IudHN4Iiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL3NoYXJlZC9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL3NoYXJlZC9ob29rcy91c2VWU0NvZGVBUEkudHMiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL2luZGV4LnRzIiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL3NoYXJlZC9zdHlsZXMvY29tcG9uZW50cy5jc3M/ZjJhYiIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9zaGFyZWQvdHlwZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL3V0aWxzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA3LjEuMl93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS4yX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFNoYXJlZCBjb21wb25lbnQgc3R5bGVzICovXG5cbi8qIEVycm9yIEJvdW5kYXJ5ICovXG4uZXJyb3ItYm91bmRhcnkge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1pbnB1dFZhbGlkYXRpb24tZXJyb3JCYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xufVxuXG4uZXJyb3ItY29udGVudCBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcbn1cblxuLmVycm9yLWRldGFpbHMge1xuICBtYXJnaW46IDE2cHggMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmVycm9yLWRldGFpbHMgc3VtbWFyeSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uZXJyb3ItZGV0YWlscyBwcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtdGV4dENvZGVCbG9jay1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxuLmVycm9yLWZhbGxiYWNrIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXRWYWxpZGF0aW9uLWVycm9yQmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcbn1cblxuLmVycm9yLWZhbGxiYWNrIGgyIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xufVxuXG4uZXJyb3ItZmFsbGJhY2sgYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLWZvcmVncm91bmQpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZXJyb3ItZmFsbGJhY2sgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1ob3ZlckJhY2tncm91bmQpO1xufVxuXG4vKiBMb2FkaW5nIFNwaW5uZXIgKi9cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uc3Bpbm5lciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXZzY29kZS1wcm9ncmVzc0Jhci1iYWNrZ3JvdW5kKTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLXZzY29kZS1wcm9ncmVzc0Jhci1mb3JlZ3JvdW5kKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uc3Bpbm5lci1zbWFsbCB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG5cbi5zcGlubmVyLW1lZGl1bSB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi5zcGlubmVyLWxhcmdlIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4ubG9hZGluZy1tZXNzYWdlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1mb3JlZ3JvdW5kKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4vKiBCdXR0b24gKi9cbi5idG4ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDZweCAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmJ0bjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tZm9yZWdyb3VuZCk7XG59XG5cbi5idG4tcHJpbWFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24taG92ZXJCYWNrZ3JvdW5kKTtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLXNlY29uZGFyeUJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1zZWNvbmRhcnlGb3JlZ3JvdW5kKTtcbn1cblxuLmJ0bi1zZWNvbmRhcnk6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLXNlY29uZGFyeUhvdmVyQmFja2dyb3VuZCk7XG59XG5cbi5idG4tZGFuZ2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0VmFsaWRhdGlvbi1lcnJvckJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XG59XG5cbi5idG4tZGFuZ2VyOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uYnRuLXNtYWxsIHtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uYnRuLW1lZGl1bSB7XG4gIHBhZGRpbmc6IDZweCAxNHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5idG4tbGFyZ2Uge1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnRuLWxvYWRpbmcge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5idG4tc3Bpbm5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE0cHg7XG4gIGhlaWdodDogMTRweDtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLyogTW9kZWwgU2VsZWN0b3IgKi9cbi5tb2RlbC1zZWxlY3RvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ubW9kZWwtc2VsZWN0b3IgbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZm9yZWdyb3VuZCk7XG59XG5cbi5tb2RlbC1zZWxlY3Qge1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXQtYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXQtZm9yZWdyb3VuZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1pbnB1dC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG59XG5cbi5tb2RlbC1zZWxlY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWZvY3VzQm9yZGVyKTtcbiAgb3V0bGluZS1vZmZzZXQ6IC0xcHg7XG59XG5cbi8qIEJyYW5jaCBTZWxlY3RvciAqL1xuLmJyYW5jaC1zZWxlY3RvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uYnJhbmNoLXNlbGVjdG9yIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWZvcmVncm91bmQpO1xufVxuXG4uYnJhbmNoLXNlbGVjdCB7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1pbnB1dC1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1pbnB1dC1mb3JlZ3JvdW5kKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWlucHV0LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cblxuLmJyYW5jaC1zZWxlY3Q6Zm9jdXMge1xuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWZvY3VzQm9yZGVyKTtcbiAgb3V0bGluZS1vZmZzZXQ6IC0xcHg7XG59LyogSWNcbm9uICovXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZmlsbDogY3VycmVudENvbG9yO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLmljb24tY29weSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb24tY29weTpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmljb24tbG9hZGluZyB7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5pY29uLWVycm9yIHtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xufVxuXG4uaWNvbi13YXJuaW5nIHtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1ub3RpZmljYXRpb25zV2FybmluZ0ljb24tZm9yZWdyb3VuZCk7XG59XG5cbi5pY29uLWluZm8ge1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLW5vdGlmaWNhdGlvbnNJbmZvSWNvbi1mb3JlZ3JvdW5kKTtcbn1cblxuLmljb24tY2hlY2sge1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLXRlcm1pbmFsLWFuc2lHcmVlbik7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvd2Vidmlld3Mvc2hhcmVkL3N0eWxlcy9jb21wb25lbnRzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSw0QkFBNEI7O0FBRTVCLG1CQUFtQjtBQUNuQjtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsK0NBQStDO0VBQy9DLGtCQUFrQjtFQUNsQiwrREFBK0Q7RUFDL0Qsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHdEQUF3RDtFQUN4RCxZQUFZO0VBQ1osa0JBQWtC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OztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHdEQUF3RDtBQUMxRDs7QUFFQTtFQUNFLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLHVDQUF1QztBQUN6Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBTaGFyZWQgY29tcG9uZW50IHN0eWxlcyAqL1xcblxcbi8qIEVycm9yIEJvdW5kYXJ5ICovXFxuLmVycm9yLWJvdW5kYXJ5IHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1pbnB1dFZhbGlkYXRpb24tZXJyb3JCYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcXG59XFxuXFxuLmVycm9yLWNvbnRlbnQgaDMge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcXG59XFxuXFxuLmVycm9yLWRldGFpbHMge1xcbiAgbWFyZ2luOiAxNnB4IDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4uZXJyb3ItZGV0YWlscyBzdW1tYXJ5IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcblxcbi5lcnJvci1kZXRhaWxzIHByZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtdGV4dENvZGVCbG9jay1iYWNrZ3JvdW5kKTtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxufVxcblxcbi5lcnJvci1mYWxsYmFjayB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXRWYWxpZGF0aW9uLWVycm9yQmFja2dyb3VuZCk7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XFxufVxcblxcbi5lcnJvci1mYWxsYmFjayBoMiB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xcbn1cXG5cXG4uZXJyb3ItZmFsbGJhY2sgYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tYmFja2dyb3VuZCk7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1mb3JlZ3JvdW5kKTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmVycm9yLWZhbGxiYWNrIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLWhvdmVyQmFja2dyb3VuZCk7XFxufVxcblxcbi8qIExvYWRpbmcgU3Bpbm5lciAqL1xcbi5sb2FkaW5nLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5zcGlubmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXZzY29kZS1wcm9ncmVzc0Jhci1iYWNrZ3JvdW5kKTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS12c2NvZGUtcHJvZ3Jlc3NCYXItZm9yZWdyb3VuZCk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4uc3Bpbm5lci1zbWFsbCB7XFxuICB3aWR0aDogMTZweDtcXG4gIGhlaWdodDogMTZweDtcXG59XFxuXFxuLnNwaW5uZXItbWVkaXVtIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4uc3Bpbm5lci1sYXJnZSB7XFxuICB3aWR0aDogMzJweDtcXG4gIGhlaWdodDogMzJweDtcXG59XFxuXFxuQGtleWZyYW1lcyBzcGluIHtcXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XFxufVxcblxcbi5sb2FkaW5nLW1lc3NhZ2Uge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZm9yZWdyb3VuZCk7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi8qIEJ1dHRvbiAqL1xcbi5idG4ge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA2cHggMTRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYnRuOmRpc2FibGVkIHtcXG4gIG9wYWNpdHk6IDAuNjtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5idG4tcHJpbWFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLWJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tZm9yZWdyb3VuZCk7XFxufVxcblxcbi5idG4tcHJpbWFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLWhvdmVyQmFja2dyb3VuZCk7XFxufVxcblxcbi5idG4tc2Vjb25kYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5QmFja2dyb3VuZCk7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1zZWNvbmRhcnlGb3JlZ3JvdW5kKTtcXG59XFxuXFxuLmJ0bi1zZWNvbmRhcnk6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1zZWNvbmRhcnlIb3ZlckJhY2tncm91bmQpO1xcbn1cXG5cXG4uYnRuLWRhbmdlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXRWYWxpZGF0aW9uLWVycm9yQmFja2dyb3VuZCk7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XFxuICBib3JkZXItY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xcbn1cXG5cXG4uYnRuLWRhbmdlcjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5idG4tc21hbGwge1xcbiAgcGFkZGluZzogNHB4IDhweDtcXG4gIGZvbnQtc2l6ZTogMTFweDtcXG59XFxuXFxuLmJ0bi1tZWRpdW0ge1xcbiAgcGFkZGluZzogNnB4IDE0cHg7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcblxcbi5idG4tbGFyZ2Uge1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5idG4tbG9hZGluZyB7XFxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5idG4tc3Bpbm5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTRweDtcXG4gIGhlaWdodDogMTRweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi8qIE1vZGVsIFNlbGVjdG9yICovXFxuLm1vZGVsLXNlbGVjdG9yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4ubW9kZWwtc2VsZWN0b3IgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZm9yZWdyb3VuZCk7XFxufVxcblxcbi5tb2RlbC1zZWxlY3Qge1xcbiAgcGFkZGluZzogNHB4IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1pbnB1dC1iYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXQtZm9yZWdyb3VuZCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtaW5wdXQtYm9yZGVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4ubW9kZWwtc2VsZWN0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtZm9jdXNCb3JkZXIpO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0xcHg7XFxufVxcblxcbi8qIEJyYW5jaCBTZWxlY3RvciAqL1xcbi5icmFuY2gtc2VsZWN0b3Ige1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDRweDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5icmFuY2gtc2VsZWN0b3IgbGFiZWwge1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZm9yZWdyb3VuZCk7XFxufVxcblxcbi5icmFuY2gtc2VsZWN0IHtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXQtYmFja2dyb3VuZCk7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0LWZvcmVncm91bmQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWlucHV0LWJvcmRlcik7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLmJyYW5jaC1zZWxlY3Q6Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1mb2N1c0JvcmRlcik7XFxuICBvdXRsaW5lLW9mZnNldDogLTFweDtcXG59LyogSWNcXG5vbiAqL1xcbi5pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBmaWxsOiBjdXJyZW50Q29sb3I7XFxuICBmbGV4LXNocmluazogMDtcXG59XFxuXFxuLmljb24tY29weSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pY29uLWNvcHk6aG92ZXIge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4uaWNvbi1sb2FkaW5nIHtcXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5pY29uLWVycm9yIHtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcXG59XFxuXFxuLmljb24td2FybmluZyB7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLW5vdGlmaWNhdGlvbnNXYXJuaW5nSWNvbi1mb3JlZ3JvdW5kKTtcXG59XFxuXFxuLmljb24taW5mbyB7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLW5vdGlmaWNhdGlvbnNJbmZvSWNvbi1mb3JlZ3JvdW5kKTtcXG59XFxuXFxuLmljb24tY2hlY2sge1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS10ZXJtaW5hbC1hbnNpR3JlZW4pO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJyYW5jaFNlbGVjdG9yUHJvcHMgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBCcmFuY2hTZWxlY3Rvcih7IFxuICBicmFuY2hlcywgXG4gIHNlbGVjdGVkQnJhbmNoLCBcbiAgb25CcmFuY2hDaGFuZ2UsIFxuICBsYWJlbCBcbn06IEJyYW5jaFNlbGVjdG9yUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5jaC1zZWxlY3RvclwiPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9e2BicmFuY2gtc2VsZWN0LSR7bGFiZWwudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICctJyl9YH0+XG4gICAgICAgIHtsYWJlbH06XG4gICAgICA8L2xhYmVsPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBpZD17YGJyYW5jaC1zZWxlY3QtJHtsYWJlbC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJy0nKX1gfVxuICAgICAgICB2YWx1ZT17c2VsZWN0ZWRCcmFuY2h9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25CcmFuY2hDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBjbGFzc05hbWU9XCJicmFuY2gtc2VsZWN0XCJcbiAgICAgID5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhIGJyYW5jaC4uLjwvb3B0aW9uPlxuICAgICAgICB7YnJhbmNoZXMubWFwKChicmFuY2gpID0+IChcbiAgICAgICAgICA8b3B0aW9uIGtleT17YnJhbmNofSB2YWx1ZT17YnJhbmNofT5cbiAgICAgICAgICAgIHticmFuY2h9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gICk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IEJ1dHRvbkhUTUxBdHRyaWJ1dGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uUHJvcHMgYXMgQmFzZUJ1dHRvblByb3BzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgQnV0dG9uUHJvcHMgZXh0ZW5kcyBCYXNlQnV0dG9uUHJvcHMsIE9taXQ8QnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+LCBrZXlvZiBCYXNlQnV0dG9uUHJvcHM+IHt9XG5cbmV4cG9ydCBmdW5jdGlvbiBCdXR0b24oeyBcbiAgdmFyaWFudCA9ICdwcmltYXJ5JywgXG4gIHNpemUgPSAnbWVkaXVtJywgXG4gIGxvYWRpbmcgPSBmYWxzZSxcbiAgY2hpbGRyZW4sXG4gIGRpc2FibGVkLFxuICBjbGFzc05hbWUgPSAnJyxcbiAgLi4ucHJvcHMgXG59OiBCdXR0b25Qcm9wcykge1xuICBjb25zdCBiYXNlQ2xhc3MgPSAnYnRuJztcbiAgY29uc3QgdmFyaWFudENsYXNzID0gYGJ0bi0ke3ZhcmlhbnR9YDtcbiAgY29uc3Qgc2l6ZUNsYXNzID0gYGJ0bi0ke3NpemV9YDtcbiAgY29uc3QgbG9hZGluZ0NsYXNzID0gbG9hZGluZyA/ICdidG4tbG9hZGluZycgOiAnJztcbiAgXG4gIGNvbnN0IGNsYXNzZXMgPSBbYmFzZUNsYXNzLCB2YXJpYW50Q2xhc3MsIHNpemVDbGFzcywgbG9hZGluZ0NsYXNzLCBjbGFzc05hbWVdXG4gICAgLmZpbHRlcihCb29sZWFuKVxuICAgIC5qb2luKCcgJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIFxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IGxvYWRpbmd9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge2xvYWRpbmcgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLXNwaW5uZXJcIj48L3NwYW4+fVxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYnV0dG9uPlxuICApO1xufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBFcnJvckJvdW5kYXJ5UHJvcHMgfSBmcm9tICcuLi90eXBlcyc7XG5cbmludGVyZmFjZSBTdGF0ZSB7XG4gIGhhc0Vycm9yOiBib29sZWFuO1xuICBlcnJvcj86IEVycm9yO1xufVxuXG5leHBvcnQgY2xhc3MgRXJyb3JCb3VuZGFyeSBleHRlbmRzIENvbXBvbmVudDxFcnJvckJvdW5kYXJ5UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBFcnJvckJvdW5kYXJ5UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgaGFzRXJyb3I6IGZhbHNlIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yKGVycm9yOiBFcnJvcik6IFN0YXRlIHtcbiAgICByZXR1cm4geyBoYXNFcnJvcjogdHJ1ZSwgZXJyb3IgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgZXJyb3JJbmZvOiBSZWFjdC5FcnJvckluZm8pIHtcbiAgICBjb25zb2xlLmVycm9yKCdXZWJ2aWV3IEVycm9yOicsIGVycm9yLCBlcnJvckluZm8pO1xuICAgIFxuICAgIC8vIFNlbmQgZXJyb3IgdG8gZXh0ZW5zaW9uIGZvciBsb2dnaW5nXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZzY29kZSA9ICh3aW5kb3cgYXMgYW55KS5hY3F1aXJlVnNDb2RlQXBpPy4oKTtcbiAgICAgIGlmICh2c2NvZGUpIHtcbiAgICAgICAgdnNjb2RlLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICBjb21tYW5kOiAnZXJyb3InLFxuICAgICAgICAgIGRhdGE6IHsgXG4gICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSwgXG4gICAgICAgICAgICBzdGFjazogZXJyb3Iuc3RhY2ssXG4gICAgICAgICAgICBjb21wb25lbnRTdGFjazogZXJyb3JJbmZvLmNvbXBvbmVudFN0YWNrXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gc2VuZCBlcnJvciB0byBleHRlbnNpb246JywgZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmhhc0Vycm9yKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5mYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5mYWxsYmFjaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1ib3VuZGFyeVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItY29udGVudFwiPlxuICAgICAgICAgICAgPGgzPlNvbWV0aGluZyB3ZW50IHdyb25nPC9oMz5cbiAgICAgICAgICAgIDxwPkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHJlbmRlcmluZyB0aGlzIGNvbXBvbmVudC48L3A+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5lcnJvciAmJiAoXG4gICAgICAgICAgICAgIDxkZXRhaWxzIGNsYXNzTmFtZT1cImVycm9yLWRldGFpbHNcIj5cbiAgICAgICAgICAgICAgICA8c3VtbWFyeT5FcnJvciBkZXRhaWxzPC9zdW1tYXJ5PlxuICAgICAgICAgICAgICAgIDxwcmU+e3RoaXMuc3RhdGUuZXJyb3IubWVzc2FnZX08L3ByZT5cbiAgICAgICAgICAgICAgPC9kZXRhaWxzPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBoYXNFcnJvcjogZmFsc2UsIGVycm9yOiB1bmRlZmluZWQgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFRyeSBhZ2FpblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgfVxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJY29uUHJvcHMgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vIENvbW1vbiBTVkcgaWNvbnMgdXNlZCBpbiB0aGUgZXh0ZW5zaW9uXG5jb25zdCBpY29ucyA9IHtcbiAgY29weTogKFxuICAgIDxwYXRoIGQ9XCJNMTYgMUg0Yy0xLjEgMC0yIC45LTIgMnYxNGgyVjNoMTJWMXptMyA0SDhjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTFjMS4xIDAgMi0uOSAyLTJWN2MwLTEuMS0uOS0yLTItMnptMCAxNkg4VjdoMTF2MTR6XCIvPlxuICApLFxuICByZWZyZXNoOiAoXG4gICAgPHBhdGggZD1cIk0xNy42NSA2LjM1QzE2LjIgNC45IDE0LjIxIDQgMTIgNGMtNC40MiAwLTcuOTkgMy41OC03Ljk5IDhzMy41NyA4IDcuOTkgOGMzLjczIDAgNi44NC0yLjU1IDcuNzMtNmgtMi4wOGMtLjgyIDIuMzMtMy4wNCA0LTUuNjUgNC0zLjMxIDAtNi0yLjY5LTYtNnMyLjY5LTYgNi02YzEuNjYgMCAzLjE0LjY5IDQuMjIgMS43OEwxMyAxMWg3VjRsLTIuMzUgMi4zNXpcIi8+XG4gICksXG4gIGNoZWNrOiAoXG4gICAgPHBhdGggZD1cIk05IDE2LjE3TDQuODMgMTJsLTEuNDIgMS40MUw5IDE5IDIxIDdsLTEuNDEtMS40MXpcIi8+XG4gICksXG4gIGVycm9yOiAoXG4gICAgPHBhdGggZD1cIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxNWwtNS01IDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5elwiLz5cbiAgKSxcbiAgd2FybmluZzogKFxuICAgIDxwYXRoIGQ9XCJNMSAyMWgyMkwxMiAyIDEgMjF6bTEyLTNoLTJ2LTJoMnYyem0wLTRoLTJ2LTRoMnY0elwiLz5cbiAgKSxcbiAgaW5mbzogKFxuICAgIDxwYXRoIGQ9XCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxNWgtMnYtNmgydjZ6bTAtOGgtMlY3aDJ2MnpcIi8+XG4gICksXG4gIGxvYWRpbmc6IChcbiAgICA8cGF0aCBkPVwiTTEyIDZ2M2w0LTQtNC00djNjLTQuNDIgMC04IDMuNTgtOCA4IDAgMS41Ny40NiAzLjAzIDEuMjQgNC4yNkw2LjcgMTQuOGMtLjQ1LS44My0uNy0xLjc5LS43LTIuOCAwLTMuMzEgMi42OS02IDYtNnptNi43NiAxLjc0TDE3LjMgOS4yYy40NC44NC43IDEuNzkuNyAyLjggMCAzLjMxLTIuNjkgNi02IDZ2LTNsLTQgNCA0IDR2LTNjNC40MiAwIDgtMy41OCA4LTggMC0xLjU3LS40Ni0zLjAzLTEuMjQtNC4yNnpcIi8+XG4gICksXG4gIGNoZXZyb25Eb3duOiAoXG4gICAgPHBhdGggZD1cIk03LjQxIDguNTlMMTIgMTMuMTdsNC41OS00LjU4TDE4IDEwbC02IDYtNi02IDEuNDEtMS40MXpcIi8+XG4gICksXG4gIGNoZXZyb25VcDogKFxuICAgIDxwYXRoIGQ9XCJNNy40MSAxNS40MUwxMiAxMC44M2w0LjU5IDQuNThMMTggMTRsLTYtNi02IDZ6XCIvPlxuICApLFxuICBzZWFyY2g6IChcbiAgICA8cGF0aCBkPVwiTTE1LjUgMTRoLS43OWwtLjI4LS4yN0MxNS40MSAxMi41OSAxNiAxMS4xMSAxNiA5LjUgMTYgNS45MSAxMy4wOSAzIDkuNSAzUzMgNS45MSAzIDkuNSA1LjkxIDE2IDkuNSAxNmMxLjYxIDAgMy4wOS0uNTkgNC4yMy0xLjU3bC4yNy4yOHYuNzlsNSA0Ljk5TDIwLjQ5IDE5bC00Ljk5LTV6bS02IDBDNy4wMSAxNCA1IDExLjk5IDUgOS41UzcuMDEgNSA5LjUgNSAxNCA3LjAxIDE0IDkuNSAxMS45OSAxNCA5LjUgMTR6XCIvPlxuICApXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gSWNvbih7IG5hbWUsIHNpemUgPSAyNCwgY2xhc3NOYW1lID0gJycsIGNvbG9yIH06IEljb25Qcm9wcykge1xuICBjb25zdCBpY29uUGF0aCA9IGljb25zW25hbWUgYXMga2V5b2YgdHlwZW9mIGljb25zXTtcbiAgXG4gIGlmICghaWNvblBhdGgpIHtcbiAgICBjb25zb2xlLndhcm4oYEljb24gXCIke25hbWV9XCIgbm90IGZvdW5kYCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGNsYXNzTmFtZT17YGljb24gaWNvbi0ke25hbWV9ICR7Y2xhc3NOYW1lfWB9XG4gICAgICB3aWR0aD17c2l6ZX1cbiAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgZmlsbD17Y29sb3IgfHwgJ2N1cnJlbnRDb2xvcid9XG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICB7aWNvblBhdGh9XG4gICAgPC9zdmc+XG4gICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExvYWRpbmdTcGlubmVyUHJvcHMgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2FkaW5nU3Bpbm5lcih7IHNpemUgPSAnbWVkaXVtJywgbWVzc2FnZSB9OiBMb2FkaW5nU3Bpbm5lclByb3BzKSB7XG4gIGNvbnN0IHNpemVDbGFzcyA9IHtcbiAgICBzbWFsbDogJ3NwaW5uZXItc21hbGwnLFxuICAgIG1lZGl1bTogJ3NwaW5uZXItbWVkaXVtJywgXG4gICAgbGFyZ2U6ICdzcGlubmVyLWxhcmdlJ1xuICB9W3NpemVdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BzcGlubmVyICR7c2l6ZUNsYXNzfWB9PjwvZGl2PlxuICAgICAge21lc3NhZ2UgJiYgPHAgY2xhc3NOYW1lPVwibG9hZGluZy1tZXNzYWdlXCI+e21lc3NhZ2V9PC9wPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTW9kZWxTZWxlY3RvclByb3BzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gTW9kZWxTZWxlY3Rvcih7IHNlbGVjdGVkTW9kZWwsIG9uTW9kZWxDaGFuZ2UsIG1vZGVscyB9OiBNb2RlbFNlbGVjdG9yUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsLXNlbGVjdG9yXCI+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIm1vZGVsLXNlbGVjdFwiPkxhbmd1YWdlIE1vZGVsOjwvbGFiZWw+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIGlkPVwibW9kZWwtc2VsZWN0XCJcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkTW9kZWx9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25Nb2RlbENoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGVsLXNlbGVjdFwiXG4gICAgICA+XG4gICAgICAgIHttb2RlbHMubWFwKChtb2RlbCkgPT4gKFxuICAgICAgICAgIDxvcHRpb24ga2V5PXttb2RlbC5pZH0gdmFsdWU9e21vZGVsLmlkfT5cbiAgICAgICAgICAgIHttb2RlbC5uYW1lfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICApO1xufSIsImV4cG9ydCB7IEVycm9yQm91bmRhcnkgfSBmcm9tICcuL0Vycm9yQm91bmRhcnknO1xuZXhwb3J0IHsgTG9hZGluZ1NwaW5uZXIgfSBmcm9tICcuL0xvYWRpbmdTcGlubmVyJztcbmV4cG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJztcbmV4cG9ydCB7IE1vZGVsU2VsZWN0b3IgfSBmcm9tICcuL01vZGVsU2VsZWN0b3InO1xuZXhwb3J0IHsgQnJhbmNoU2VsZWN0b3IgfSBmcm9tICcuL0JyYW5jaFNlbGVjdG9yJztcbmV4cG9ydCB7IEljb24gfSBmcm9tICcuL0ljb24nOyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZTQ29kZUFQSSwgV2Vidmlld1JlcXVlc3QsIEV4dGVuc2lvbk1lc3NhZ2UgfSBmcm9tICcuLi90eXBlcyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgYWNxdWlyZVZzQ29kZUFwaSgpOiBWU0NvZGVBUEk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVZTQ29kZUFQSSgpIHtcbiAgY29uc3QgdnNjb2RlUmVmID0gdXNlUmVmPFZTQ29kZUFQSSB8IG51bGw+KG51bGwpO1xuXG4gIGlmICghdnNjb2RlUmVmLmN1cnJlbnQpIHtcbiAgICB2c2NvZGVSZWYuY3VycmVudCA9IHdpbmRvdy5hY3F1aXJlVnNDb2RlQXBpKCk7XG4gIH1cblxuICBjb25zdCBwb3N0TWVzc2FnZSA9IChtZXNzYWdlOiBXZWJ2aWV3UmVxdWVzdCkgPT4ge1xuICAgIHZzY29kZVJlZi5jdXJyZW50Py5wb3N0TWVzc2FnZShtZXNzYWdlKTtcbiAgfTtcblxuICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdnNjb2RlUmVmLmN1cnJlbnQ/LmdldFN0YXRlKCk7XG4gIH07XG5cbiAgY29uc3Qgc2V0U3RhdGUgPSAoc3RhdGU6IGFueSkgPT4ge1xuICAgIHZzY29kZVJlZi5jdXJyZW50Py5zZXRTdGF0ZShzdGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwb3N0TWVzc2FnZSxcbiAgICBnZXRTdGF0ZSxcbiAgICBzZXRTdGF0ZSxcbiAgICB2c2NvZGU6IHZzY29kZVJlZi5jdXJyZW50XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXNzYWdlTGlzdGVuZXIoXG4gIG9uTWVzc2FnZTogKG1lc3NhZ2U6IEV4dGVuc2lvbk1lc3NhZ2UpID0+IHZvaWRcbikge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZU1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudDxFeHRlbnNpb25NZXNzYWdlPikgPT4ge1xuICAgICAgb25NZXNzYWdlKGV2ZW50LmRhdGEpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICB9LCBbb25NZXNzYWdlXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2FkaW5nU3RhdGUoaW5pdGlhbFN0YXRlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG5cbiAgY29uc3Qgc3RhcnRMb2FkaW5nID0gKCkgPT4gc2V0SXNMb2FkaW5nKHRydWUpO1xuICBjb25zdCBzdG9wTG9hZGluZyA9ICgpID0+IHNldElzTG9hZGluZyhmYWxzZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBpc0xvYWRpbmcsXG4gICAgc3RhcnRMb2FkaW5nLFxuICAgIHN0b3BMb2FkaW5nLFxuICAgIHNldElzTG9hZGluZ1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRXJyb3JTdGF0ZSgpIHtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBjbGVhckVycm9yID0gKCkgPT4gc2V0RXJyb3IobnVsbCk7XG4gIGNvbnN0IHNldEVycm9yTWVzc2FnZSA9IChtZXNzYWdlOiBzdHJpbmcpID0+IHNldEVycm9yKG1lc3NhZ2UpO1xuXG4gIHJldHVybiB7XG4gICAgZXJyb3IsXG4gICAgc2V0RXJyb3I6IHNldEVycm9yTWVzc2FnZSxcbiAgICBjbGVhckVycm9yLFxuICAgIGhhc0Vycm9yOiBlcnJvciAhPT0gbnVsbFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlV2Vidmlld1N0YXRlPFQ+KGluaXRpYWxTdGF0ZTogVCkge1xuICBjb25zdCB7IGdldFN0YXRlLCBzZXRTdGF0ZSB9ID0gdXNlVlNDb2RlQVBJKCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVJbnRlcm5hbF0gPSB1c2VTdGF0ZTxUPigoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRTdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgcmV0dXJuIHNhdmVkU3RhdGUgfHwgaW5pdGlhbFN0YXRlO1xuICB9KTtcblxuICBjb25zdCB1cGRhdGVTdGF0ZSA9IChuZXdTdGF0ZTogVCB8ICgocHJldlN0YXRlOiBUKSA9PiBUKSkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRTdGF0ZSA9IHR5cGVvZiBuZXdTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyBcbiAgICAgID8gKG5ld1N0YXRlIGFzIChwcmV2U3RhdGU6IFQpID0+IFQpKHN0YXRlKVxuICAgICAgOiBuZXdTdGF0ZTtcbiAgICBcbiAgICBzZXRTdGF0ZUludGVybmFsKHVwZGF0ZWRTdGF0ZSk7XG4gICAgc2V0U3RhdGUodXBkYXRlZFN0YXRlKTtcbiAgfTtcblxuICByZXR1cm4gW3N0YXRlLCB1cGRhdGVTdGF0ZV0gYXMgY29uc3Q7XG59IiwiLy8gSW1wb3J0IHNoYXJlZCBzdHlsZXNcbmltcG9ydCAnLi9zdHlsZXMvY29tcG9uZW50cy5jc3MnO1xuXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9ob29rcy91c2VWU0NvZGVBUEknO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJzsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS4yX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS4yX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLy8gV2VidmlldyDihpQgRXh0ZW5zaW9uIGNvbW11bmljYXRpb24gdHlwZXNcbmV4cG9ydCBpbnRlcmZhY2UgV2Vidmlld01lc3NhZ2Uge1xuICBjb21tYW5kOiBzdHJpbmc7XG4gIGRhdGE/OiBhbnk7XG59XG5cbi8vIEV4dGVuc2lvbiDihpIgV2VidmlldyBtZXNzYWdlc1xuZXhwb3J0IGludGVyZmFjZSBFeHRlbnNpb25NZXNzYWdlIGV4dGVuZHMgV2Vidmlld01lc3NhZ2Uge1xuICBjb21tYW5kOiAnYnJhbmNoZXNMaXN0JyB8ICdyZXN1bHQnIHwgJ2Vycm9yJyB8ICdwcm9ncmVzc1VwZGF0ZScgfCAnc3RhcnRMb2FkaW5nJyB8ICdzdG9wTG9hZGluZycgfCAnZ2VuZXJhdGlvbkNvbXBsZXRlJztcbiAgYnJhbmNoZXM/OiBzdHJpbmdbXTtcbiAgY3VycmVudEJyYW5jaD86IHN0cmluZztcbiAgZGVmYXVsdFRhcmdldEJyYW5jaD86IHN0cmluZztcbiAgbGFuZ3VhZ2VNb2RlbD86IHN0cmluZztcbiAgcmVzdWx0PzogYW55O1xuICBlcnJvcj86IHN0cmluZztcbiAgbWVzc2FnZT86IHN0cmluZztcbiAgdXBkYXRlPzogUHJvZ3Jlc3NVcGRhdGU7XG59XG5cbi8vIFdlYnZpZXcg4oaSIEV4dGVuc2lvbiBtZXNzYWdlcyAgXG5leHBvcnQgaW50ZXJmYWNlIFdlYnZpZXdSZXF1ZXN0IGV4dGVuZHMgV2Vidmlld01lc3NhZ2Uge1xuICBjb21tYW5kOiAnZ2V0QnJhbmNoZXMnIHwgJ2dlbmVyYXRlRGVzY3JpcHRpb24nIHwgJ2dlbmVyYXRlUHJEZXNjcmlwdGlvbicgfCAncmV2aWV3Q2hhbmdlcycgfCAnYW5hbHl6ZUJyZWFraW5nJyB8ICdjb3B5VG9DbGlwYm9hcmQnIHwgJ2Vycm9yJztcbiAgc291cmNlQnJhbmNoPzogc3RyaW5nO1xuICB0YXJnZXRCcmFuY2g/OiBzdHJpbmc7XG4gIHNlbGVjdGVkTW9kZWw/OiBzdHJpbmc7XG4gIG1vZGVsRmFtaWx5Pzogc3RyaW5nO1xuICB0ZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2dyZXNzVXBkYXRlIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBwcm9ncmVzcz86IG51bWJlcjtcbiAgdG90YWw/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kZWxDb25maWcge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2Vidmlld0NvbmZpZyB7XG4gIG1vZGVsczogTW9kZWxDb25maWdbXTtcbiAgZGVmYXVsdE1vZGVsOiBzdHJpbmc7XG59XG5cbi8vIFZTQ29kZSBBUEkgdHlwZXMgZm9yIHdlYnZpZXdzXG5leHBvcnQgaW50ZXJmYWNlIFZTQ29kZUFQSSB7XG4gIHBvc3RNZXNzYWdlKG1lc3NhZ2U6IFdlYnZpZXdSZXF1ZXN0KTogdm9pZDtcbiAgZ2V0U3RhdGUoKTogYW55O1xuICBzZXRTdGF0ZShzdGF0ZTogYW55KTogdm9pZDtcbn1cblxuLy8gQ29tcG9uZW50IHByb3AgdHlwZXNcbmV4cG9ydCBpbnRlcmZhY2UgTW9kZWxTZWxlY3RvclByb3BzIHtcbiAgc2VsZWN0ZWRNb2RlbDogc3RyaW5nO1xuICBvbk1vZGVsQ2hhbmdlOiAobW9kZWw6IHN0cmluZykgPT4gdm9pZDtcbiAgbW9kZWxzOiBNb2RlbENvbmZpZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJyYW5jaFNlbGVjdG9yUHJvcHMge1xuICBicmFuY2hlczogc3RyaW5nW107XG4gIHNlbGVjdGVkQnJhbmNoOiBzdHJpbmc7XG4gIG9uQnJhbmNoQ2hhbmdlOiAoYnJhbmNoOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ1NwaW5uZXJQcm9wcyB7XG4gIHNpemU/OiAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnO1xuICBtZXNzYWdlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvblByb3BzIHtcbiAgdmFyaWFudD86ICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknIHwgJ2Rhbmdlcic7XG4gIHNpemU/OiAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnO1xuICBsb2FkaW5nPzogYm9vbGVhbjtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEljb25Qcm9wcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgc2l6ZT86IG51bWJlcjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBjb2xvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFcnJvckJvdW5kYXJ5UHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBmYWxsYmFjaz86IFJlYWN0LlJlYWN0Tm9kZTtcbn0iLCIvLyBVdGlsaXR5IGZ1bmN0aW9ucyBmb3Igd2VidmlldyBjb21wb25lbnRzXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+KFxuICBmdW5jOiBULFxuICB3YWl0OiBudW1iZXJcbik6ICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSA9PiB2b2lkIHtcbiAgbGV0IHRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0O1xuICByZXR1cm4gKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gZnVuYyguLi5hcmdzKSwgd2FpdCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+KFxuICBmdW5jOiBULFxuICBsaW1pdDogbnVtYmVyXG4pOiAoLi4uYXJnczogUGFyYW1ldGVyczxUPikgPT4gdm9pZCB7XG4gIGxldCBpblRocm90dGxlOiBib29sZWFuO1xuICByZXR1cm4gKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pID0+IHtcbiAgICBpZiAoIWluVGhyb3R0bGUpIHtcbiAgICAgIGZ1bmMoLi4uYXJncyk7XG4gICAgICBpblRocm90dGxlID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gKGluVGhyb3R0bGUgPSBmYWxzZSksIGxpbWl0KTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQodGV4dDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkICYmIHdpbmRvdy5pc1NlY3VyZUNvbnRleHQpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2sgZm9yIG9sZGVyIGJyb3dzZXJzIG9yIG5vbi1zZWN1cmUgY29udGV4dHNcbiAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGV4dEFyZWEudmFsdWUgPSB0ZXh0O1xuICAgIHRleHRBcmVhLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB0ZXh0QXJlYS5zdHlsZS5sZWZ0ID0gJy05OTk5OTlweCc7XG4gICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKHRleHRBcmVhKTtcbiAgICB0ZXh0QXJlYS5zZWxlY3QoKTtcbiAgICB0cnkge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGNvcHkgdGV4dDogJywgZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0ZXh0QXJlYS5yZW1vdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRFcnJvcihlcnJvcjogdW5rbm93bik6IHN0cmluZyB7XG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gIH1cbiAgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbiAgcmV0dXJuICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkJztcbn1leHBvcnRcbiBmdW5jdGlvbiBoYW5kbGVXZWJ2aWV3TWVzc2FnZTxUID0gYW55PihcbiAgbWVzc2FnZTogYW55LFxuICBleHBlY3RlZENvbW1hbmQ6IHN0cmluZyxcbiAgb25TdWNjZXNzOiAoZGF0YTogVCkgPT4gdm9pZCxcbiAgb25FcnJvcj86IChlcnJvcjogc3RyaW5nKSA9PiB2b2lkXG4pIHtcbiAgaWYgKG1lc3NhZ2UuY29tbWFuZCA9PT0gZXhwZWN0ZWRDb21tYW5kKSB7XG4gICAgaWYgKG1lc3NhZ2UuZXJyb3IgJiYgb25FcnJvcikge1xuICAgICAgb25FcnJvcihtZXNzYWdlLmVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb25TdWNjZXNzKG1lc3NhZ2UuZGF0YSB8fCBtZXNzYWdlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lc3NhZ2VIYW5kbGVyKGhhbmRsZXJzOiBSZWNvcmQ8c3RyaW5nLCAoZGF0YTogYW55KSA9PiB2b2lkPikge1xuICByZXR1cm4gKG1lc3NhZ2U6IGFueSkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBoYW5kbGVyc1ttZXNzYWdlLmNvbW1hbmRdO1xuICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVyKG1lc3NhZ2UpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUmVxdWlyZWRGaWVsZHM8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+KFxuICBvYmo6IFQsXG4gIHJlcXVpcmVkRmllbGRzOiAoa2V5b2YgVClbXVxuKTogeyBpc1ZhbGlkOiBib29sZWFuOyBtaXNzaW5nRmllbGRzOiBzdHJpbmdbXSB9IHtcbiAgY29uc3QgbWlzc2luZ0ZpZWxkcyA9IHJlcXVpcmVkRmllbGRzLmZpbHRlcihmaWVsZCA9PiBcbiAgICBvYmpbZmllbGRdID09PSB1bmRlZmluZWQgfHwgb2JqW2ZpZWxkXSA9PT0gbnVsbCB8fCBvYmpbZmllbGRdID09PSAnJ1xuICApO1xuICBcbiAgcmV0dXJuIHtcbiAgICBpc1ZhbGlkOiBtaXNzaW5nRmllbGRzLmxlbmd0aCA9PT0gMCxcbiAgICBtaXNzaW5nRmllbGRzOiBtaXNzaW5nRmllbGRzIGFzIHN0cmluZ1tdXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWZlSnNvblBhcnNlPFQgPSBhbnk+KGpzb25TdHJpbmc6IHN0cmluZywgZmFsbGJhY2s6IFQpOiBUIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbGxiYWNrO1xuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9