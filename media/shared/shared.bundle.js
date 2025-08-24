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
}`, "",{"version":3,"sources":["webpack://./src/webviews/shared/styles/components.css"],"names":[],"mappings":"AAAA,4BAA4B;;AAE5B,mBAAmB;AACnB;EACE,aAAa;EACb,kBAAkB;EAClB,+CAA+C;EAC/C,kBAAkB;EAClB,+DAA+D;EAC/D,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,iDAAiD;EACjD,sCAAsC;EACtC,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,sDAAsD;AACxD;;AAEA,oBAAoB;AACpB;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,sDAAsD;EACtD,0DAA0D;EAC1D,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,KAAK,uBAAuB,EAAE;EAC9B,OAAO,yBAAyB,EAAE;AACpC;;AAEA;EACE,gBAAgB;EAChB,+BAA+B;EAC/B,eAAe;AACjB;;AAEA,WAAW;AACX;EACE,oBAAoB;EACpB,mBAAmB;EACnB,uBAAuB;EACvB,iBAAiB;EACjB,6BAA6B;EAC7B,kBAAkB;EAClB,eAAe;EACf,oBAAoB;EACpB,eAAe;EACf,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,iDAAiD;EACjD,sCAAsC;AACxC;;AAEA;EACE,sDAAsD;AACxD;;AAEA;EACE,0DAA0D;EAC1D,+CAA+C;AACjD;;AAEA;EACE,+DAA+D;AACjE;;AAEA;EACE,+DAA+D;EAC/D,oCAAoC;EACpC,2CAA2C;AAC7C;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,6BAA6B;EAC7B,kCAAkC;EAClC,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA,mBAAmB;AACnB;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;EAChB,gDAAgD;EAChD,qCAAqC;EACrC,4CAA4C;EAC5C,kBAAkB;EAClB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,4CAA4C;EAC5C,oBAAoB;AACtB;;AAEA,oBAAoB;AACpB;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;EAChB,gDAAgD;EAChD,qCAAqC;EACrC,4CAA4C;EAC5C,kBAAkB;EAClB,eAAe;EACf,oBAAoB;AACtB;;AAEA;EACE,4CAA4C;EAC5C,oBAAoB;AACtB","sourcesContent":["/* Shared component styles */\n\n/* Error Boundary */\n.error-fallback {\n  padding: 20px;\n  text-align: center;\n  border: 1px solid var(--vscode-errorForeground);\n  border-radius: 4px;\n  background-color: var(--vscode-inputValidation-errorBackground);\n  color: var(--vscode-errorForeground);\n}\n\n.error-fallback h2 {\n  margin-top: 0;\n  color: var(--vscode-errorForeground);\n}\n\n.error-fallback button {\n  margin-top: 10px;\n  padding: 8px 16px;\n  background-color: var(--vscode-button-background);\n  color: var(--vscode-button-foreground);\n  border: none;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\n.error-fallback button:hover {\n  background-color: var(--vscode-button-hoverBackground);\n}\n\n/* Loading Spinner */\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n\n.spinner {\n  border: 2px solid var(--vscode-progressBar-background);\n  border-top: 2px solid var(--vscode-progressBar-foreground);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n.spinner-small {\n  width: 16px;\n  height: 16px;\n}\n\n.spinner-medium {\n  width: 24px;\n  height: 24px;\n}\n\n.spinner-large {\n  width: 32px;\n  height: 32px;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n.loading-message {\n  margin-top: 10px;\n  color: var(--vscode-foreground);\n  font-size: 14px;\n}\n\n/* Button */\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 6px 14px;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  font-size: 13px;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n}\n\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.btn-primary {\n  background-color: var(--vscode-button-background);\n  color: var(--vscode-button-foreground);\n}\n\n.btn-primary:hover:not(:disabled) {\n  background-color: var(--vscode-button-hoverBackground);\n}\n\n.btn-secondary {\n  background-color: var(--vscode-button-secondaryBackground);\n  color: var(--vscode-button-secondaryForeground);\n}\n\n.btn-secondary:hover:not(:disabled) {\n  background-color: var(--vscode-button-secondaryHoverBackground);\n}\n\n.btn-danger {\n  background-color: var(--vscode-inputValidation-errorBackground);\n  color: var(--vscode-errorForeground);\n  border-color: var(--vscode-errorForeground);\n}\n\n.btn-danger:hover:not(:disabled) {\n  opacity: 0.8;\n}\n\n.btn-small {\n  padding: 4px 8px;\n  font-size: 11px;\n}\n\n.btn-medium {\n  padding: 6px 14px;\n  font-size: 13px;\n}\n\n.btn-large {\n  padding: 8px 16px;\n  font-size: 14px;\n}\n\n.btn-loading {\n  color: transparent;\n}\n\n.btn-spinner {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n/* Model Selector */\n.model-selector {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 16px;\n}\n\n.model-selector label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--vscode-foreground);\n}\n\n.model-select {\n  padding: 4px 8px;\n  background-color: var(--vscode-input-background);\n  color: var(--vscode-input-foreground);\n  border: 1px solid var(--vscode-input-border);\n  border-radius: 2px;\n  font-size: 13px;\n  font-family: inherit;\n}\n\n.model-select:focus {\n  outline: 1px solid var(--vscode-focusBorder);\n  outline-offset: -1px;\n}\n\n/* Branch Selector */\n.branch-selector {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 16px;\n}\n\n.branch-selector label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--vscode-foreground);\n}\n\n.branch-select {\n  padding: 4px 8px;\n  background-color: var(--vscode-input-background);\n  color: var(--vscode-input-foreground);\n  border: 1px solid var(--vscode-input-border);\n  border-radius: 2px;\n  font-size: 13px;\n  font-family: inherit;\n}\n\n.branch-select:focus {\n  outline: 1px solid var(--vscode-focusBorder);\n  outline-offset: -1px;\n}"],"sourceRoot":""}]);
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

// Simple error boundary wrapper - for now just render children
// In a real implementation, we'd use a proper error boundary library
function ErrorBoundary({ children, fallback }) {
    // For now, just render the children directly
    // TODO: Implement proper error boundary in a future task
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: children });
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
/* harmony export */   LoadingSpinner: () => (/* reexport safe */ _LoadingSpinner__WEBPACK_IMPORTED_MODULE_1__.LoadingSpinner),
/* harmony export */   ModelSelector: () => (/* reexport safe */ _ModelSelector__WEBPACK_IMPORTED_MODULE_3__.ModelSelector)
/* harmony export */ });
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorBoundary */ "./src/webviews/shared/components/ErrorBoundary.tsx");
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingSpinner */ "./src/webviews/shared/components/LoadingSpinner.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./src/webviews/shared/components/Button.tsx");
/* harmony import */ var _ModelSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModelSelector */ "./src/webviews/shared/components/ModelSelector.tsx");
/* harmony import */ var _BranchSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BranchSelector */ "./src/webviews/shared/components/BranchSelector.tsx");







/***/ }),

/***/ "./src/webviews/shared/hooks/useVSCodeAPI.ts":
/*!***************************************************!*\
  !*** ./src/webviews/shared/hooks/useVSCodeAPI.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMessageListener: () => (/* binding */ useMessageListener),
/* harmony export */   useVSCodeAPI: () => (/* binding */ useVSCodeAPI)
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
/* harmony export */   LoadingSpinner: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.LoadingSpinner),
/* harmony export */   ModelSelector: () => (/* reexport safe */ _components__WEBPACK_IMPORTED_MODULE_1__.ModelSelector),
/* harmony export */   copyToClipboard: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.copyToClipboard),
/* harmony export */   debounce: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.debounce),
/* harmony export */   formatError: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.formatError),
/* harmony export */   throttle: () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.throttle),
/* harmony export */   useMessageListener: () => (/* reexport safe */ _hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__.useMessageListener),
/* harmony export */   useVSCodeAPI: () => (/* reexport safe */ _hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__.useVSCodeAPI)
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
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   formatError: () => (/* binding */ formatError),
/* harmony export */   throttle: () => (/* binding */ throttle)
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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkL3NoYXJlZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN1SztBQUNqQjtBQUN0Siw4QkFBOEIsc0lBQTJCLENBQUMsK0lBQXFDO0FBQy9GO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1AsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG9IQUFvSCxhQUFhLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlB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QU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELE9BQU8sMkJBQTJCLENBQUM7QUFDckMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL3NoYXJlZC9zdHlsZXMvY29tcG9uZW50cy5jc3MiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL2NvbXBvbmVudHMvQnJhbmNoU2VsZWN0b3IudHN4Iiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL3NoYXJlZC9jb21wb25lbnRzL0J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL2NvbXBvbmVudHMvRXJyb3JCb3VuZGFyeS50c3giLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL2NvbXBvbmVudHMvTG9hZGluZ1NwaW5uZXIudHN4Iiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL3NoYXJlZC9jb21wb25lbnRzL01vZGVsU2VsZWN0b3IudHN4Iiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL3NoYXJlZC9jb21wb25lbnRzL2luZGV4LnRzIiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL3NoYXJlZC9ob29rcy91c2VWU0NvZGVBUEkudHMiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL2luZGV4LnRzIiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL3NoYXJlZC9zdHlsZXMvY29tcG9uZW50cy5jc3M/ZjJhYiIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9zaGFyZWQvdHlwZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL3V0aWxzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA3LjEuMl93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS4yX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIFNoYXJlZCBjb21wb25lbnQgc3R5bGVzICovXG5cbi8qIEVycm9yIEJvdW5kYXJ5ICovXG4uZXJyb3ItZmFsbGJhY2sge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1pbnB1dFZhbGlkYXRpb24tZXJyb3JCYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xufVxuXG4uZXJyb3ItZmFsbGJhY2sgaDIge1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XG59XG5cbi5lcnJvci1mYWxsYmFjayBidXR0b24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tZm9yZWdyb3VuZCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lcnJvci1mYWxsYmFjayBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLWhvdmVyQmFja2dyb3VuZCk7XG59XG5cbi8qIExvYWRpbmcgU3Bpbm5lciAqL1xuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5zcGlubmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdnNjb2RlLXByb2dyZXNzQmFyLWJhY2tncm91bmQpO1xuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tdnNjb2RlLXByb2dyZXNzQmFyLWZvcmVncm91bmQpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5zcGlubmVyLXNtYWxsIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLnNwaW5uZXItbWVkaXVtIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLnNwaW5uZXItbGFyZ2Uge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi5sb2FkaW5nLW1lc3NhZ2Uge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWZvcmVncm91bmQpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8qIEJ1dHRvbiAqL1xuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNnB4IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnRuOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1mb3JlZ3JvdW5kKTtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1ob3ZlckJhY2tncm91bmQpO1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5QmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLXNlY29uZGFyeUZvcmVncm91bmQpO1xufVxuXG4uYnRuLXNlY29uZGFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5SG92ZXJCYWNrZ3JvdW5kKTtcbn1cblxuLmJ0bi1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXRWYWxpZGF0aW9uLWVycm9yQmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcbn1cblxuLmJ0bi1kYW5nZXI6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5idG4tc21hbGwge1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5idG4tbWVkaXVtIHtcbiAgcGFkZGluZzogNnB4IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmJ0bi1sYXJnZSB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5idG4tbG9hZGluZyB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmJ0bi1zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG4vKiBNb2RlbCBTZWxlY3RvciAqL1xuLm1vZGVsLXNlbGVjdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5tb2RlbC1zZWxlY3RvciBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1mb3JlZ3JvdW5kKTtcbn1cblxuLm1vZGVsLXNlbGVjdCB7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1pbnB1dC1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1pbnB1dC1mb3JlZ3JvdW5kKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWlucHV0LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cblxuLm1vZGVsLXNlbGVjdDpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtZm9jdXNCb3JkZXIpO1xuICBvdXRsaW5lLW9mZnNldDogLTFweDtcbn1cblxuLyogQnJhbmNoIFNlbGVjdG9yICovXG4uYnJhbmNoLXNlbGVjdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5icmFuY2gtc2VsZWN0b3IgbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZm9yZWdyb3VuZCk7XG59XG5cbi5icmFuY2gtc2VsZWN0IHtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0LWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0LWZvcmVncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtaW5wdXQtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xufVxuXG4uYnJhbmNoLXNlbGVjdDpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtZm9jdXNCb3JkZXIpO1xuICBvdXRsaW5lLW9mZnNldDogLTFweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy93ZWJ2aWV3cy9zaGFyZWQvc3R5bGVzL2NvbXBvbmVudHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDRCQUE0Qjs7QUFFNUIsbUJBQW1CO0FBQ25CO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwrQ0FBK0M7RUFDL0Msa0JBQWtCO0VBQ2xCLCtEQUErRDtFQUMvRCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpREFBaUQ7RUFDakQsc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNEQUFzRDtBQUN4RDs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0RBQXNEO0VBQ3RELDBEQUEwRDtFQUMxRCxrQkFBa0I7RUFDbEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsS0FBSyx1QkFBdUIsRUFBRTtFQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ3BDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixlQUFlO0FBQ2pCOztBQUVBLFdBQVc7QUFDWDtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaURBQWlEO0VBQ2pELHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLDBEQUEwRDtFQUMxRCwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSwrREFBK0Q7QUFDakU7O0FBRUE7RUFDRSwrREFBK0Q7RUFDL0Qsb0NBQW9DO0VBQ3BDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGtDQUFrQztBQUNwQzs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnREFBZ0Q7RUFDaEQscUNBQXFDO0VBQ3JDLDRDQUE0QztFQUM1QyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxvQkFBb0I7QUFDdEI7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0RBQWdEO0VBQ2hELHFDQUFxQztFQUNyQyw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsb0JBQW9CO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFNoYXJlZCBjb21wb25lbnQgc3R5bGVzICovXFxuXFxuLyogRXJyb3IgQm91bmRhcnkgKi9cXG4uZXJyb3ItZmFsbGJhY2sge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0VmFsaWRhdGlvbi1lcnJvckJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xcbn1cXG5cXG4uZXJyb3ItZmFsbGJhY2sgaDIge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcXG59XFxuXFxuLmVycm9yLWZhbGxiYWNrIGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLWJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tZm9yZWdyb3VuZCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lcnJvci1mYWxsYmFjayBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1ob3ZlckJhY2tncm91bmQpO1xcbn1cXG5cXG4vKiBMb2FkaW5nIFNwaW5uZXIgKi9cXG4ubG9hZGluZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uc3Bpbm5lciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS12c2NvZGUtcHJvZ3Jlc3NCYXItYmFja2dyb3VuZCk7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tdnNjb2RlLXByb2dyZXNzQmFyLWZvcmVncm91bmQpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLnNwaW5uZXItc21hbGwge1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxufVxcblxcbi5zcGlubmVyLW1lZGl1bSB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG59XFxuXFxuLnNwaW5uZXItbGFyZ2Uge1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cXG5cXG4ubG9hZGluZy1tZXNzYWdlIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWZvcmVncm91bmQpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4vKiBCdXR0b24gKi9cXG4uYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogNnB4IDE0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJ0bjpkaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uYnRuLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLWZvcmVncm91bmQpO1xcbn1cXG5cXG4uYnRuLXByaW1hcnk6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1ob3ZlckJhY2tncm91bmQpO1xcbn1cXG5cXG4uYnRuLXNlY29uZGFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLXNlY29uZGFyeUJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5Rm9yZWdyb3VuZCk7XFxufVxcblxcbi5idG4tc2Vjb25kYXJ5OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5SG92ZXJCYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmJ0bi1kYW5nZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0VmFsaWRhdGlvbi1lcnJvckJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcXG59XFxuXFxuLmJ0bi1kYW5nZXI6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4uYnRuLXNtYWxsIHtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxuICBmb250LXNpemU6IDExcHg7XFxufVxcblxcbi5idG4tbWVkaXVtIHtcXG4gIHBhZGRpbmc6IDZweCAxNHB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4uYnRuLWxhcmdlIHtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uYnRuLWxvYWRpbmcge1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uYnRuLXNwaW5uZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDE0cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4vKiBNb2RlbCBTZWxlY3RvciAqL1xcbi5tb2RlbC1zZWxlY3RvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLm1vZGVsLXNlbGVjdG9yIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWZvcmVncm91bmQpO1xcbn1cXG5cXG4ubW9kZWwtc2VsZWN0IHtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXQtYmFja2dyb3VuZCk7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0LWZvcmVncm91bmQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWlucHV0LWJvcmRlcik7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLm1vZGVsLXNlbGVjdDpmb2N1cyB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWZvY3VzQm9yZGVyKTtcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xcbn1cXG5cXG4vKiBCcmFuY2ggU2VsZWN0b3IgKi9cXG4uYnJhbmNoLXNlbGVjdG9yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4uYnJhbmNoLXNlbGVjdG9yIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWZvcmVncm91bmQpO1xcbn1cXG5cXG4uYnJhbmNoLXNlbGVjdCB7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0LWJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1pbnB1dC1mb3JlZ3JvdW5kKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1pbnB1dC1ib3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi5icmFuY2gtc2VsZWN0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtZm9jdXNCb3JkZXIpO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0xcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJhbmNoU2VsZWN0b3JQcm9wcyB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIEJyYW5jaFNlbGVjdG9yKHsgXG4gIGJyYW5jaGVzLCBcbiAgc2VsZWN0ZWRCcmFuY2gsIFxuICBvbkJyYW5jaENoYW5nZSwgXG4gIGxhYmVsIFxufTogQnJhbmNoU2VsZWN0b3JQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmNoLXNlbGVjdG9yXCI+XG4gICAgICA8bGFiZWwgaHRtbEZvcj17YGJyYW5jaC1zZWxlY3QtJHtsYWJlbC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJy0nKX1gfT5cbiAgICAgICAge2xhYmVsfTpcbiAgICAgIDwvbGFiZWw+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIGlkPXtgYnJhbmNoLXNlbGVjdC0ke2xhYmVsLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnLScpfWB9XG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZEJyYW5jaH1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkJyYW5jaENoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGNsYXNzTmFtZT1cImJyYW5jaC1zZWxlY3RcIlxuICAgICAgPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IGEgYnJhbmNoLi4uPC9vcHRpb24+XG4gICAgICAgIHticmFuY2hlcy5tYXAoKGJyYW5jaCkgPT4gKFxuICAgICAgICAgIDxvcHRpb24ga2V5PXticmFuY2h9IHZhbHVlPXticmFuY2h9PlxuICAgICAgICAgICAge2JyYW5jaH1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQnV0dG9uSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBCdXR0b25Qcm9wcyBleHRlbmRzIEJ1dHRvbkhUTUxBdHRyaWJ1dGVzPEhUTUxCdXR0b25FbGVtZW50PiB7XG4gIHZhcmlhbnQ/OiAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICdkYW5nZXInO1xuICBzaXplPzogJ3NtYWxsJyB8ICdtZWRpdW0nIHwgJ2xhcmdlJztcbiAgbG9hZGluZz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCdXR0b24oeyBcbiAgdmFyaWFudCA9ICdwcmltYXJ5JywgXG4gIHNpemUgPSAnbWVkaXVtJywgXG4gIGxvYWRpbmcgPSBmYWxzZSxcbiAgY2hpbGRyZW4sXG4gIGRpc2FibGVkLFxuICBjbGFzc05hbWUgPSAnJyxcbiAgLi4ucHJvcHMgXG59OiBCdXR0b25Qcm9wcykge1xuICBjb25zdCBiYXNlQ2xhc3MgPSAnYnRuJztcbiAgY29uc3QgdmFyaWFudENsYXNzID0gYGJ0bi0ke3ZhcmlhbnR9YDtcbiAgY29uc3Qgc2l6ZUNsYXNzID0gYGJ0bi0ke3NpemV9YDtcbiAgY29uc3QgbG9hZGluZ0NsYXNzID0gbG9hZGluZyA/ICdidG4tbG9hZGluZycgOiAnJztcbiAgXG4gIGNvbnN0IGNsYXNzZXMgPSBbYmFzZUNsYXNzLCB2YXJpYW50Q2xhc3MsIHNpemVDbGFzcywgbG9hZGluZ0NsYXNzLCBjbGFzc05hbWVdXG4gICAgLmZpbHRlcihCb29sZWFuKVxuICAgIC5qb2luKCcgJyk7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIFxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxuICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkIHx8IGxvYWRpbmd9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgPlxuICAgICAge2xvYWRpbmcgJiYgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLXNwaW5uZXJcIj48L3NwYW4+fVxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYnV0dG9uPlxuICApO1xufSIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG4gIGZhbGxiYWNrPzogUmVhY3ROb2RlO1xufVxuXG4vLyBTaW1wbGUgZXJyb3IgYm91bmRhcnkgd3JhcHBlciAtIGZvciBub3cganVzdCByZW5kZXIgY2hpbGRyZW5cbi8vIEluIGEgcmVhbCBpbXBsZW1lbnRhdGlvbiwgd2UnZCB1c2UgYSBwcm9wZXIgZXJyb3IgYm91bmRhcnkgbGlicmFyeVxuZXhwb3J0IGZ1bmN0aW9uIEVycm9yQm91bmRhcnkoeyBjaGlsZHJlbiwgZmFsbGJhY2sgfTogUHJvcHMpIHtcbiAgLy8gRm9yIG5vdywganVzdCByZW5kZXIgdGhlIGNoaWxkcmVuIGRpcmVjdGx5XG4gIC8vIFRPRE86IEltcGxlbWVudCBwcm9wZXIgZXJyb3IgYm91bmRhcnkgaW4gYSBmdXR1cmUgdGFza1xuICByZXR1cm4gPD57Y2hpbGRyZW59PC8+O1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBMb2FkaW5nU3Bpbm5lclByb3BzIHtcbiAgc2l6ZT86ICdzbWFsbCcgfCAnbWVkaXVtJyB8ICdsYXJnZSc7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2FkaW5nU3Bpbm5lcih7IHNpemUgPSAnbWVkaXVtJywgbWVzc2FnZSB9OiBMb2FkaW5nU3Bpbm5lclByb3BzKSB7XG4gIGNvbnN0IHNpemVDbGFzcyA9IHtcbiAgICBzbWFsbDogJ3NwaW5uZXItc21hbGwnLFxuICAgIG1lZGl1bTogJ3NwaW5uZXItbWVkaXVtJywgXG4gICAgbGFyZ2U6ICdzcGlubmVyLWxhcmdlJ1xuICB9W3NpemVdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BzcGlubmVyICR7c2l6ZUNsYXNzfWB9PjwvZGl2PlxuICAgICAge21lc3NhZ2UgJiYgPHAgY2xhc3NOYW1lPVwibG9hZGluZy1tZXNzYWdlXCI+e21lc3NhZ2V9PC9wPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTW9kZWxTZWxlY3RvclByb3BzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gTW9kZWxTZWxlY3Rvcih7IHNlbGVjdGVkTW9kZWwsIG9uTW9kZWxDaGFuZ2UsIG1vZGVscyB9OiBNb2RlbFNlbGVjdG9yUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsLXNlbGVjdG9yXCI+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIm1vZGVsLXNlbGVjdFwiPkxhbmd1YWdlIE1vZGVsOjwvbGFiZWw+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIGlkPVwibW9kZWwtc2VsZWN0XCJcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkTW9kZWx9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25Nb2RlbENoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGVsLXNlbGVjdFwiXG4gICAgICA+XG4gICAgICAgIHttb2RlbHMubWFwKChtb2RlbCkgPT4gKFxuICAgICAgICAgIDxvcHRpb24ga2V5PXttb2RlbC5pZH0gdmFsdWU9e21vZGVsLmlkfT5cbiAgICAgICAgICAgIHttb2RlbC5uYW1lfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICApO1xufSIsImV4cG9ydCB7IEVycm9yQm91bmRhcnkgfSBmcm9tICcuL0Vycm9yQm91bmRhcnknO1xuZXhwb3J0IHsgTG9hZGluZ1NwaW5uZXIgfSBmcm9tICcuL0xvYWRpbmdTcGlubmVyJztcbmV4cG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJztcbmV4cG9ydCB7IE1vZGVsU2VsZWN0b3IgfSBmcm9tICcuL01vZGVsU2VsZWN0b3InO1xuZXhwb3J0IHsgQnJhbmNoU2VsZWN0b3IgfSBmcm9tICcuL0JyYW5jaFNlbGVjdG9yJzsiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZTQ29kZUFQSSwgV2Vidmlld1JlcXVlc3QsIEV4dGVuc2lvbk1lc3NhZ2UgfSBmcm9tICcuLi90eXBlcyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgYWNxdWlyZVZzQ29kZUFwaSgpOiBWU0NvZGVBUEk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVZTQ29kZUFQSSgpIHtcbiAgY29uc3QgdnNjb2RlUmVmID0gdXNlUmVmPFZTQ29kZUFQSSB8IG51bGw+KG51bGwpO1xuXG4gIGlmICghdnNjb2RlUmVmLmN1cnJlbnQpIHtcbiAgICB2c2NvZGVSZWYuY3VycmVudCA9IHdpbmRvdy5hY3F1aXJlVnNDb2RlQXBpKCk7XG4gIH1cblxuICBjb25zdCBwb3N0TWVzc2FnZSA9IChtZXNzYWdlOiBXZWJ2aWV3UmVxdWVzdCkgPT4ge1xuICAgIHZzY29kZVJlZi5jdXJyZW50Py5wb3N0TWVzc2FnZShtZXNzYWdlKTtcbiAgfTtcblxuICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdnNjb2RlUmVmLmN1cnJlbnQ/LmdldFN0YXRlKCk7XG4gIH07XG5cbiAgY29uc3Qgc2V0U3RhdGUgPSAoc3RhdGU6IGFueSkgPT4ge1xuICAgIHZzY29kZVJlZi5jdXJyZW50Py5zZXRTdGF0ZShzdGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwb3N0TWVzc2FnZSxcbiAgICBnZXRTdGF0ZSxcbiAgICBzZXRTdGF0ZSxcbiAgICB2c2NvZGU6IHZzY29kZVJlZi5jdXJyZW50XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXNzYWdlTGlzdGVuZXIoXG4gIG9uTWVzc2FnZTogKG1lc3NhZ2U6IEV4dGVuc2lvbk1lc3NhZ2UpID0+IHZvaWRcbikge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZU1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudDxFeHRlbnNpb25NZXNzYWdlPikgPT4ge1xuICAgICAgb25NZXNzYWdlKGV2ZW50LmRhdGEpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICB9LCBbb25NZXNzYWdlXSk7XG59IiwiLy8gSW1wb3J0IHNoYXJlZCBzdHlsZXNcbmltcG9ydCAnLi9zdHlsZXMvY29tcG9uZW50cy5jc3MnO1xuXG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9ob29rcy91c2VWU0NvZGVBUEknO1xuZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7XG5leHBvcnQgKiBmcm9tICcuL3V0aWxzJzsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS4yX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS4yX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbXBvbmVudHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiLy8gV2VidmlldyDihpQgRXh0ZW5zaW9uIGNvbW11bmljYXRpb24gdHlwZXNcbmV4cG9ydCBpbnRlcmZhY2UgV2Vidmlld01lc3NhZ2Uge1xuICBjb21tYW5kOiBzdHJpbmc7XG4gIGRhdGE/OiBhbnk7XG59XG5cbi8vIEV4dGVuc2lvbiDihpIgV2VidmlldyBtZXNzYWdlc1xuZXhwb3J0IGludGVyZmFjZSBFeHRlbnNpb25NZXNzYWdlIGV4dGVuZHMgV2Vidmlld01lc3NhZ2Uge1xuICBjb21tYW5kOiAnYnJhbmNoZXNMaXN0JyB8ICdyZXN1bHQnIHwgJ2Vycm9yJyB8ICdwcm9ncmVzc1VwZGF0ZSc7XG4gIGJyYW5jaGVzPzogc3RyaW5nW107XG4gIGN1cnJlbnRCcmFuY2g/OiBzdHJpbmc7XG4gIGRlZmF1bHRUYXJnZXRCcmFuY2g/OiBzdHJpbmc7XG4gIGxhbmd1YWdlTW9kZWw/OiBzdHJpbmc7XG4gIHJlc3VsdD86IGFueTtcbiAgZXJyb3I/OiBzdHJpbmc7XG4gIHVwZGF0ZT86IFByb2dyZXNzVXBkYXRlO1xufVxuXG4vLyBXZWJ2aWV3IOKGkiBFeHRlbnNpb24gbWVzc2FnZXMgIFxuZXhwb3J0IGludGVyZmFjZSBXZWJ2aWV3UmVxdWVzdCBleHRlbmRzIFdlYnZpZXdNZXNzYWdlIHtcbiAgY29tbWFuZDogJ2dldEJyYW5jaGVzJyB8ICdnZW5lcmF0ZURlc2NyaXB0aW9uJyB8ICdyZXZpZXdDaGFuZ2VzJyB8ICdhbmFseXplQnJlYWtpbmcnIHwgJ2Vycm9yJztcbiAgc291cmNlQnJhbmNoPzogc3RyaW5nO1xuICB0YXJnZXRCcmFuY2g/OiBzdHJpbmc7XG4gIHNlbGVjdGVkTW9kZWw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZ3Jlc3NVcGRhdGUge1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIHByb2dyZXNzPzogbnVtYmVyO1xuICB0b3RhbD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNb2RlbENvbmZpZyB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWJ2aWV3Q29uZmlnIHtcbiAgbW9kZWxzOiBNb2RlbENvbmZpZ1tdO1xuICBkZWZhdWx0TW9kZWw6IHN0cmluZztcbn1cblxuLy8gVlNDb2RlIEFQSSB0eXBlcyBmb3Igd2Vidmlld3NcbmV4cG9ydCBpbnRlcmZhY2UgVlNDb2RlQVBJIHtcbiAgcG9zdE1lc3NhZ2UobWVzc2FnZTogV2Vidmlld1JlcXVlc3QpOiB2b2lkO1xuICBnZXRTdGF0ZSgpOiBhbnk7XG4gIHNldFN0YXRlKHN0YXRlOiBhbnkpOiB2b2lkO1xufVxuXG4vLyBDb21wb25lbnQgcHJvcCB0eXBlc1xuZXhwb3J0IGludGVyZmFjZSBNb2RlbFNlbGVjdG9yUHJvcHMge1xuICBzZWxlY3RlZE1vZGVsOiBzdHJpbmc7XG4gIG9uTW9kZWxDaGFuZ2U6IChtb2RlbDogc3RyaW5nKSA9PiB2b2lkO1xuICBtb2RlbHM6IE1vZGVsQ29uZmlnW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnJhbmNoU2VsZWN0b3JQcm9wcyB7XG4gIGJyYW5jaGVzOiBzdHJpbmdbXTtcbiAgc2VsZWN0ZWRCcmFuY2g6IHN0cmluZztcbiAgb25CcmFuY2hDaGFuZ2U6IChicmFuY2g6IHN0cmluZykgPT4gdm9pZDtcbiAgbGFiZWw6IHN0cmluZztcbn0iLCIvLyBVdGlsaXR5IGZ1bmN0aW9ucyBmb3Igd2VidmlldyBjb21wb25lbnRzXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+KFxuICBmdW5jOiBULFxuICB3YWl0OiBudW1iZXJcbik6ICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSA9PiB2b2lkIHtcbiAgbGV0IHRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0O1xuICByZXR1cm4gKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gZnVuYyguLi5hcmdzKSwgd2FpdCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+KFxuICBmdW5jOiBULFxuICBsaW1pdDogbnVtYmVyXG4pOiAoLi4uYXJnczogUGFyYW1ldGVyczxUPikgPT4gdm9pZCB7XG4gIGxldCBpblRocm90dGxlOiBib29sZWFuO1xuICByZXR1cm4gKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pID0+IHtcbiAgICBpZiAoIWluVGhyb3R0bGUpIHtcbiAgICAgIGZ1bmMoLi4uYXJncyk7XG4gICAgICBpblRocm90dGxlID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gKGluVGhyb3R0bGUgPSBmYWxzZSksIGxpbWl0KTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQodGV4dDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkICYmIHdpbmRvdy5pc1NlY3VyZUNvbnRleHQpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2sgZm9yIG9sZGVyIGJyb3dzZXJzIG9yIG5vbi1zZWN1cmUgY29udGV4dHNcbiAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGV4dEFyZWEudmFsdWUgPSB0ZXh0O1xuICAgIHRleHRBcmVhLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB0ZXh0QXJlYS5zdHlsZS5sZWZ0ID0gJy05OTk5OTlweCc7XG4gICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKHRleHRBcmVhKTtcbiAgICB0ZXh0QXJlYS5zZWxlY3QoKTtcbiAgICB0cnkge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGNvcHkgdGV4dDogJywgZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0ZXh0QXJlYS5yZW1vdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRFcnJvcihlcnJvcjogdW5rbm93bik6IHN0cmluZyB7XG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gIH1cbiAgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbiAgcmV0dXJuICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkJztcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=