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
}`, "",{"version":3,"sources":["webpack://./src/webviews/shared/styles/components.css"],"names":[],"mappings":"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","sourcesContent":["/* Shared component styles */\n\n/* Error Boundary */\n.error-boundary {\n  padding: 20px;\n  text-align: center;\n  border: 1px solid var(--vscode-errorForeground);\n  border-radius: 4px;\n  background-color: var(--vscode-inputValidation-errorBackground);\n  color: var(--vscode-errorForeground);\n}\n\n.error-content h3 {\n  margin-top: 0;\n  color: var(--vscode-errorForeground);\n}\n\n.error-details {\n  margin: 16px 0;\n  text-align: left;\n}\n\n.error-details summary {\n  cursor: pointer;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n\n.error-details pre {\n  background-color: var(--vscode-textCodeBlock-background);\n  padding: 8px;\n  border-radius: 2px;\n  font-size: 12px;\n  overflow-x: auto;\n}\n\n.error-fallback {\n  padding: 20px;\n  text-align: center;\n  border: 1px solid var(--vscode-errorForeground);\n  border-radius: 4px;\n  background-color: var(--vscode-inputValidation-errorBackground);\n  color: var(--vscode-errorForeground);\n}\n\n.error-fallback h2 {\n  margin-top: 0;\n  color: var(--vscode-errorForeground);\n}\n\n.error-fallback button {\n  margin-top: 10px;\n  padding: 8px 16px;\n  background-color: var(--vscode-button-background);\n  color: var(--vscode-button-foreground);\n  border: none;\n  border-radius: 2px;\n  cursor: pointer;\n}\n\n.error-fallback button:hover {\n  background-color: var(--vscode-button-hoverBackground);\n}\n\n/* Loading Spinner */\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n\n.spinner {\n  border: 2px solid var(--vscode-progressBar-background);\n  border-top: 2px solid var(--vscode-progressBar-foreground);\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n.spinner-small {\n  width: 16px;\n  height: 16px;\n}\n\n.spinner-medium {\n  width: 24px;\n  height: 24px;\n}\n\n.spinner-large {\n  width: 32px;\n  height: 32px;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n.loading-message {\n  margin-top: 10px;\n  color: var(--vscode-foreground);\n  font-size: 14px;\n}\n\n/* Button */\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: 6px 14px;\n  border: 1px solid transparent;\n  border-radius: 2px;\n  font-size: 13px;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  position: relative;\n}\n\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.btn-primary {\n  background-color: var(--vscode-button-background);\n  color: var(--vscode-button-foreground);\n}\n\n.btn-primary:hover:not(:disabled) {\n  background-color: var(--vscode-button-hoverBackground);\n}\n\n.btn-secondary {\n  background-color: var(--vscode-button-secondaryBackground);\n  color: var(--vscode-button-secondaryForeground);\n}\n\n.btn-secondary:hover:not(:disabled) {\n  background-color: var(--vscode-button-secondaryHoverBackground);\n}\n\n.btn-danger {\n  background-color: var(--vscode-inputValidation-errorBackground);\n  color: var(--vscode-errorForeground);\n  border-color: var(--vscode-errorForeground);\n}\n\n.btn-danger:hover:not(:disabled) {\n  opacity: 0.8;\n}\n\n.btn-small {\n  padding: 4px 8px;\n  font-size: 11px;\n}\n\n.btn-medium {\n  padding: 6px 14px;\n  font-size: 13px;\n}\n\n.btn-large {\n  padding: 8px 16px;\n  font-size: 14px;\n}\n\n.btn-loading {\n  color: transparent;\n}\n\n.btn-spinner {\n  position: absolute;\n  width: 14px;\n  height: 14px;\n  border: 2px solid transparent;\n  border-top: 2px solid currentColor;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n/* Model Selector */\n.model-selector {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 16px;\n}\n\n.model-selector label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--vscode-foreground);\n}\n\n.model-select {\n  padding: 4px 8px;\n  background-color: var(--vscode-input-background);\n  color: var(--vscode-input-foreground);\n  border: 1px solid var(--vscode-input-border);\n  border-radius: 2px;\n  font-size: 13px;\n  font-family: inherit;\n}\n\n.model-select:focus {\n  outline: 1px solid var(--vscode-focusBorder);\n  outline-offset: -1px;\n}\n\n/* Branch Selector */\n.branch-selector {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  margin-bottom: 16px;\n}\n\n.branch-selector label {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--vscode-foreground);\n}\n\n.branch-select {\n  padding: 4px 8px;\n  background-color: var(--vscode-input-background);\n  color: var(--vscode-input-foreground);\n  border: 1px solid var(--vscode-input-border);\n  border-radius: 2px;\n  font-size: 13px;\n  font-family: inherit;\n}\n\n.branch-select:focus {\n  outline: 1px solid var(--vscode-focusBorder);\n  outline-offset: -1px;\n}/* Ic\non */\n.icon {\n  display: inline-block;\n  vertical-align: middle;\n  fill: currentColor;\n  flex-shrink: 0;\n}\n\n.icon-copy {\n  cursor: pointer;\n}\n\n.icon-copy:hover {\n  opacity: 0.8;\n}\n\n.icon-loading {\n  animation: spin 1s linear infinite;\n}\n\n.icon-error {\n  color: var(--vscode-errorForeground);\n}\n\n.icon-warning {\n  color: var(--vscode-notificationsWarningIcon-foreground);\n}\n\n.icon-info {\n  color: var(--vscode-notificationsInfoIcon-foreground);\n}\n\n.icon-check {\n  color: var(--vscode-terminal-ansiGreen);\n}"],"sourceRoot":""}]);
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


class ErrorBoundary extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
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
    search: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })),
    branch: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { fillRule: "evenodd", d: "M10.5 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1v3c0 2 1.34 3.657 3.962 4.138C7.972 11.044 8 11 8 11h1V7.138C6.34 6.657 5 3 5 3H4zm6.5 0v3c0 2-1.34 3.657-3.962 4.138C6.528 11.044 6.5 11 6.5 11H5.5V7.138C7.16 6.657 8.5 3 8.5 3h2z" }))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztRQUNQLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL3N0eWxlcy9jb21wb25lbnRzLmNzcyIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9zaGFyZWQvY29tcG9uZW50cy9CcmFuY2hTZWxlY3Rvci50c3giLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL2NvbXBvbmVudHMvQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9zaGFyZWQvY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5LnRzeCIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9zaGFyZWQvY29tcG9uZW50cy9JY29uLnRzeCIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9zaGFyZWQvY29tcG9uZW50cy9Mb2FkaW5nU3Bpbm5lci50c3giLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL2NvbXBvbmVudHMvTW9kZWxTZWxlY3Rvci50c3giLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL2hvb2tzL3VzZVZTQ29kZUFQSS50cyIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9zaGFyZWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL3N0eWxlcy9jb21wb25lbnRzLmNzcz9mMmFiIiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL3NoYXJlZC90eXBlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9zaGFyZWQvdXRpbHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS4yX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANy4xLjJfd2VicGFja0A1LjEwMS4zL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogU2hhcmVkIGNvbXBvbmVudCBzdHlsZXMgKi9cblxuLyogRXJyb3IgQm91bmRhcnkgKi9cbi5lcnJvci1ib3VuZGFyeSB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0VmFsaWRhdGlvbi1lcnJvckJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XG59XG5cbi5lcnJvci1jb250ZW50IGgzIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xufVxuXG4uZXJyb3ItZGV0YWlscyB7XG4gIG1hcmdpbjogMTZweCAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZXJyb3ItZGV0YWlscyBzdW1tYXJ5IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5lcnJvci1kZXRhaWxzIHByZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS10ZXh0Q29kZUJsb2NrLWJhY2tncm91bmQpO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuXG4uZXJyb3ItZmFsbGJhY2sge1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1pbnB1dFZhbGlkYXRpb24tZXJyb3JCYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xufVxuXG4uZXJyb3ItZmFsbGJhY2sgaDIge1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XG59XG5cbi5lcnJvci1mYWxsYmFjayBidXR0b24ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tZm9yZWdyb3VuZCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lcnJvci1mYWxsYmFjayBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLWhvdmVyQmFja2dyb3VuZCk7XG59XG5cbi8qIExvYWRpbmcgU3Bpbm5lciAqL1xuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5zcGlubmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdnNjb2RlLXByb2dyZXNzQmFyLWJhY2tncm91bmQpO1xuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tdnNjb2RlLXByb2dyZXNzQmFyLWZvcmVncm91bmQpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi5zcGlubmVyLXNtYWxsIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLnNwaW5uZXItbWVkaXVtIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLnNwaW5uZXItbGFyZ2Uge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi5sb2FkaW5nLW1lc3NhZ2Uge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWZvcmVncm91bmQpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi8qIEJ1dHRvbiAqL1xuLmJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNnB4IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYnRuOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1mb3JlZ3JvdW5kKTtcbn1cblxuLmJ0bi1wcmltYXJ5OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1ob3ZlckJhY2tncm91bmQpO1xufVxuXG4uYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5QmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLXNlY29uZGFyeUZvcmVncm91bmQpO1xufVxuXG4uYnRuLXNlY29uZGFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5SG92ZXJCYWNrZ3JvdW5kKTtcbn1cblxuLmJ0bi1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXRWYWxpZGF0aW9uLWVycm9yQmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcbn1cblxuLmJ0bi1kYW5nZXI6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5idG4tc21hbGwge1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5idG4tbWVkaXVtIHtcbiAgcGFkZGluZzogNnB4IDE0cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmJ0bi1sYXJnZSB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5idG4tbG9hZGluZyB7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmJ0bi1zcGlubmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG4vKiBNb2RlbCBTZWxlY3RvciAqL1xuLm1vZGVsLXNlbGVjdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5tb2RlbC1zZWxlY3RvciBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1mb3JlZ3JvdW5kKTtcbn1cblxuLm1vZGVsLXNlbGVjdCB7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1pbnB1dC1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1pbnB1dC1mb3JlZ3JvdW5kKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWlucHV0LWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbn1cblxuLm1vZGVsLXNlbGVjdDpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtZm9jdXNCb3JkZXIpO1xuICBvdXRsaW5lLW9mZnNldDogLTFweDtcbn1cblxuLyogQnJhbmNoIFNlbGVjdG9yICovXG4uYnJhbmNoLXNlbGVjdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5icmFuY2gtc2VsZWN0b3IgbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZm9yZWdyb3VuZCk7XG59XG5cbi5icmFuY2gtc2VsZWN0IHtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0LWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0LWZvcmVncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtaW5wdXQtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xufVxuXG4uYnJhbmNoLXNlbGVjdDpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtZm9jdXNCb3JkZXIpO1xuICBvdXRsaW5lLW9mZnNldDogLTFweDtcbn0vKiBJY1xub24gKi9cbi5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uaWNvbi1jb3B5IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbi1jb3B5OmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uaWNvbi1sb2FkaW5nIHtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLmljb24tZXJyb3Ige1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XG59XG5cbi5pY29uLXdhcm5pbmcge1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLW5vdGlmaWNhdGlvbnNXYXJuaW5nSWNvbi1mb3JlZ3JvdW5kKTtcbn1cblxuLmljb24taW5mbyB7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtbm90aWZpY2F0aW9uc0luZm9JY29uLWZvcmVncm91bmQpO1xufVxuXG4uaWNvbi1jaGVjayB7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtdGVybWluYWwtYW5zaUdyZWVuKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy93ZWJ2aWV3cy9zaGFyZWQvc3R5bGVzL2NvbXBvbmVudHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDRCQUE0Qjs7QUFFNUIsbUJBQW1CO0FBQ25CO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwrQ0FBK0M7RUFDL0Msa0JBQWtCO0VBQ2xCLCtEQUErRDtFQUMvRCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVB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QUN0QixDQUFDO0lBQ0c7QUFDSjtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0UscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFNoYXJlZCBjb21wb25lbnQgc3R5bGVzICovXFxuXFxuLyogRXJyb3IgQm91bmRhcnkgKi9cXG4uZXJyb3ItYm91bmRhcnkge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0VmFsaWRhdGlvbi1lcnJvckJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xcbn1cXG5cXG4uZXJyb3ItY29udGVudCBoMyB7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xcbn1cXG5cXG4uZXJyb3ItZGV0YWlscyB7XFxuICBtYXJnaW46IDE2cHggMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5lcnJvci1kZXRhaWxzIHN1bW1hcnkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuXFxuLmVycm9yLWRldGFpbHMgcHJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS10ZXh0Q29kZUJsb2NrLWJhY2tncm91bmQpO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG59XFxuXFxuLmVycm9yLWZhbGxiYWNrIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1pbnB1dFZhbGlkYXRpb24tZXJyb3JCYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcXG59XFxuXFxuLmVycm9yLWZhbGxiYWNrIGgyIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XFxufVxcblxcbi5lcnJvci1mYWxsYmFjayBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLWZvcmVncm91bmQpO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZXJyb3ItZmFsbGJhY2sgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24taG92ZXJCYWNrZ3JvdW5kKTtcXG59XFxuXFxuLyogTG9hZGluZyBTcGlubmVyICovXFxuLmxvYWRpbmctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLnNwaW5uZXIge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdnNjb2RlLXByb2dyZXNzQmFyLWJhY2tncm91bmQpO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLXZzY29kZS1wcm9ncmVzc0Jhci1mb3JlZ3JvdW5kKTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcblxcbi5zcGlubmVyLXNtYWxsIHtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbn1cXG5cXG4uc3Bpbm5lci1tZWRpdW0ge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbi5zcGlubmVyLWxhcmdlIHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNwaW4ge1xcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxcbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cXG59XFxuXFxuLmxvYWRpbmctbWVzc2FnZSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1mb3JlZ3JvdW5kKTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLyogQnV0dG9uICovXFxuLmJ0biB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDZweCAxNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5idG46ZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC42O1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLmJ0bi1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tYmFja2dyb3VuZCk7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1mb3JlZ3JvdW5kKTtcXG59XFxuXFxuLmJ0bi1wcmltYXJ5OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24taG92ZXJCYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmJ0bi1zZWNvbmRhcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1zZWNvbmRhcnlCYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLXNlY29uZGFyeUZvcmVncm91bmQpO1xcbn1cXG5cXG4uYnRuLXNlY29uZGFyeTpob3Zlcjpub3QoOmRpc2FibGVkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLXNlY29uZGFyeUhvdmVyQmFja2dyb3VuZCk7XFxufVxcblxcbi5idG4tZGFuZ2VyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1pbnB1dFZhbGlkYXRpb24tZXJyb3JCYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XFxufVxcblxcbi5idG4tZGFuZ2VyOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmJ0bi1zbWFsbCB7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbn1cXG5cXG4uYnRuLW1lZGl1bSB7XFxuICBwYWRkaW5nOiA2cHggMTRweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG59XFxuXFxuLmJ0bi1sYXJnZSB7XFxuICBwYWRkaW5nOiA4cHggMTZweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmJ0bi1sb2FkaW5nIHtcXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmJ0bi1zcGlubmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgaGVpZ2h0OiAxNHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgY3VycmVudENvbG9yO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLyogTW9kZWwgU2VsZWN0b3IgKi9cXG4ubW9kZWwtc2VsZWN0b3Ige1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDRweDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5tb2RlbC1zZWxlY3RvciBsYWJlbCB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1mb3JlZ3JvdW5kKTtcXG59XFxuXFxuLm1vZGVsLXNlbGVjdCB7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0LWJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1pbnB1dC1mb3JlZ3JvdW5kKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1pbnB1dC1ib3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi5tb2RlbC1zZWxlY3Q6Zm9jdXMge1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1mb2N1c0JvcmRlcik7XFxuICBvdXRsaW5lLW9mZnNldDogLTFweDtcXG59XFxuXFxuLyogQnJhbmNoIFNlbGVjdG9yICovXFxuLmJyYW5jaC1zZWxlY3RvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmJyYW5jaC1zZWxlY3RvciBsYWJlbCB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1mb3JlZ3JvdW5kKTtcXG59XFxuXFxuLmJyYW5jaC1zZWxlY3Qge1xcbiAgcGFkZGluZzogNHB4IDhweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1pbnB1dC1iYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXQtZm9yZWdyb3VuZCk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtaW5wdXQtYm9yZGVyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG4uYnJhbmNoLXNlbGVjdDpmb2N1cyB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWZvY3VzQm9yZGVyKTtcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xcbn0vKiBJY1xcbm9uICovXFxuLmljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG5cXG4uaWNvbi1jb3B5IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmljb24tY29weTpob3ZlciB7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcblxcbi5pY29uLWxvYWRpbmcge1xcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLmljb24tZXJyb3Ige1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xcbn1cXG5cXG4uaWNvbi13YXJuaW5nIHtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtbm90aWZpY2F0aW9uc1dhcm5pbmdJY29uLWZvcmVncm91bmQpO1xcbn1cXG5cXG4uaWNvbi1pbmZvIHtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtbm90aWZpY2F0aW9uc0luZm9JY29uLWZvcmVncm91bmQpO1xcbn1cXG5cXG4uaWNvbi1jaGVjayB7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLXRlcm1pbmFsLWFuc2lHcmVlbik7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJhbmNoU2VsZWN0b3JQcm9wcyB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIEJyYW5jaFNlbGVjdG9yKHsgXG4gIGJyYW5jaGVzLCBcbiAgc2VsZWN0ZWRCcmFuY2gsIFxuICBvbkJyYW5jaENoYW5nZSwgXG4gIGxhYmVsIFxufTogQnJhbmNoU2VsZWN0b3JQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJhbmNoLXNlbGVjdG9yXCI+XG4gICAgICA8bGFiZWwgaHRtbEZvcj17YGJyYW5jaC1zZWxlY3QtJHtsYWJlbC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJy0nKX1gfT5cbiAgICAgICAge2xhYmVsfTpcbiAgICAgIDwvbGFiZWw+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIGlkPXtgYnJhbmNoLXNlbGVjdC0ke2xhYmVsLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnLScpfWB9XG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZEJyYW5jaH1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkJyYW5jaENoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGNsYXNzTmFtZT1cImJyYW5jaC1zZWxlY3RcIlxuICAgICAgPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IGEgYnJhbmNoLi4uPC9vcHRpb24+XG4gICAgICAgIHticmFuY2hlcy5tYXAoKGJyYW5jaCkgPT4gKFxuICAgICAgICAgIDxvcHRpb24ga2V5PXticmFuY2h9IHZhbHVlPXticmFuY2h9PlxuICAgICAgICAgICAge2JyYW5jaH1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgQnV0dG9uSFRNTEF0dHJpYnV0ZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b25Qcm9wcyBhcyBCYXNlQnV0dG9uUHJvcHMgfSBmcm9tICcuLi90eXBlcyc7XG5cbmludGVyZmFjZSBCdXR0b25Qcm9wcyBleHRlbmRzIEJhc2VCdXR0b25Qcm9wcywgT21pdDxCdXR0b25IVE1MQXR0cmlidXRlczxIVE1MQnV0dG9uRWxlbWVudD4sIGtleW9mIEJhc2VCdXR0b25Qcm9wcz4ge31cblxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbih7IFxuICB2YXJpYW50ID0gJ3ByaW1hcnknLCBcbiAgc2l6ZSA9ICdtZWRpdW0nLCBcbiAgbG9hZGluZyA9IGZhbHNlLFxuICBjaGlsZHJlbixcbiAgZGlzYWJsZWQsXG4gIGNsYXNzTmFtZSA9ICcnLFxuICAuLi5wcm9wcyBcbn06IEJ1dHRvblByb3BzKSB7XG4gIGNvbnN0IGJhc2VDbGFzcyA9ICdidG4nO1xuICBjb25zdCB2YXJpYW50Q2xhc3MgPSBgYnRuLSR7dmFyaWFudH1gO1xuICBjb25zdCBzaXplQ2xhc3MgPSBgYnRuLSR7c2l6ZX1gO1xuICBjb25zdCBsb2FkaW5nQ2xhc3MgPSBsb2FkaW5nID8gJ2J0bi1sb2FkaW5nJyA6ICcnO1xuICBcbiAgY29uc3QgY2xhc3NlcyA9IFtiYXNlQ2xhc3MsIHZhcmlhbnRDbGFzcywgc2l6ZUNsYXNzLCBsb2FkaW5nQ2xhc3MsIGNsYXNzTmFtZV1cbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLmpvaW4oJyAnKTtcblxuICByZXR1cm4gKFxuICAgIDxidXR0b24gXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgbG9hZGluZ31cbiAgICAgIHsuLi5wcm9wc31cbiAgICA+XG4gICAgICB7bG9hZGluZyAmJiA8c3BhbiBjbGFzc05hbWU9XCJidG4tc3Bpbm5lclwiPjwvc3Bhbj59XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEVycm9yQm91bmRhcnlQcm9wcyB9IGZyb20gJy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIFN0YXRlIHtcbiAgaGFzRXJyb3I6IGJvb2xlYW47XG4gIGVycm9yPzogRXJyb3I7XG59XG5cbmV4cG9ydCBjbGFzcyBFcnJvckJvdW5kYXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEVycm9yQm91bmRhcnlQcm9wcywgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IEVycm9yQm91bmRhcnlQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBoYXNFcnJvcjogZmFsc2UgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IoZXJyb3I6IEVycm9yKTogU3RhdGUge1xuICAgIHJldHVybiB7IGhhc0Vycm9yOiB0cnVlLCBlcnJvciB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBlcnJvckluZm86IFJlYWN0LkVycm9ySW5mbykge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1dlYnZpZXcgRXJyb3I6JywgZXJyb3IsIGVycm9ySW5mbyk7XG4gICAgXG4gICAgLy8gU2VuZCBlcnJvciB0byBleHRlbnNpb24gZm9yIGxvZ2dpbmdcbiAgICB0cnkge1xuICAgICAgY29uc3QgdnNjb2RlID0gKHdpbmRvdyBhcyBhbnkpLmFjcXVpcmVWc0NvZGVBcGk/LigpO1xuICAgICAgaWYgKHZzY29kZSkge1xuICAgICAgICB2c2NvZGUucG9zdE1lc3NhZ2Uoe1xuICAgICAgICAgIGNvbW1hbmQ6ICdlcnJvcicsXG4gICAgICAgICAgZGF0YTogeyBcbiAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLCBcbiAgICAgICAgICAgIHN0YWNrOiBlcnJvci5zdGFjayxcbiAgICAgICAgICAgIGNvbXBvbmVudFN0YWNrOiBlcnJvckluZm8uY29tcG9uZW50U3RhY2tcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBzZW5kIGVycm9yIHRvIGV4dGVuc2lvbjonLCBlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuaGFzRXJyb3IpIHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmZhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmZhbGxiYWNrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWJvdW5kYXJ5XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1jb250ZW50XCI+XG4gICAgICAgICAgICA8aDM+U29tZXRoaW5nIHdlbnQgd3Jvbmc8L2gzPlxuICAgICAgICAgICAgPHA+QW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcmVuZGVyaW5nIHRoaXMgY29tcG9uZW50LjwvcD5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmVycm9yICYmIChcbiAgICAgICAgICAgICAgPGRldGFpbHMgY2xhc3NOYW1lPVwiZXJyb3ItZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxzdW1tYXJ5PkVycm9yIGRldGFpbHM8L3N1bW1hcnk+XG4gICAgICAgICAgICAgICAgPHByZT57dGhpcy5zdGF0ZS5lcnJvci5tZXNzYWdlfTwvcHJlPlxuICAgICAgICAgICAgICA8L2RldGFpbHM+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGhhc0Vycm9yOiBmYWxzZSwgZXJyb3I6IHVuZGVmaW5lZCB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgVHJ5IGFnYWluXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEljb25Qcm9wcyB9IGZyb20gJy4uL3R5cGVzJztcblxuLy8gQ29tbW9uIFNWRyBpY29ucyB1c2VkIGluIHRoZSBleHRlbnNpb25cbmNvbnN0IGljb25zID0ge1xuICBjb3B5OiAoXG4gICAgPHBhdGggZD1cIk0xNiAxSDRjLTEuMSAwLTIgLjktMiAydjE0aDJWM2gxMlYxem0zIDRIOGMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxMWMxLjEgMCAyLS45IDItMlY3YzAtMS4xLS45LTItMi0yem0wIDE2SDhWN2gxMXYxNHpcIi8+XG4gICksXG4gIHJlZnJlc2g6IChcbiAgICA8cGF0aCBkPVwiTTE3LjY1IDYuMzVDMTYuMiA0LjkgMTQuMjEgNCAxMiA0Yy00LjQyIDAtNy45OSAzLjU4LTcuOTkgOHMzLjU3IDggNy45OSA4YzMuNzMgMCA2Ljg0LTIuNTUgNy43My02aC0yLjA4Yy0uODIgMi4zMy0zLjA0IDQtNS42NSA0LTMuMzEgMC02LTIuNjktNi02czIuNjktNiA2LTZjMS42NiAwIDMuMTQuNjkgNC4yMiAxLjc4TDEzIDExaDdWNGwtMi4zNSAyLjM1elwiLz5cbiAgKSxcbiAgY2hlY2s6IChcbiAgICA8cGF0aCBkPVwiTTkgMTYuMTdMNC44MyAxMmwtMS40MiAxLjQxTDkgMTkgMjEgN2wtMS40MS0xLjQxelwiLz5cbiAgKSxcbiAgZXJyb3I6IChcbiAgICA8cGF0aCBkPVwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bS0yIDE1bC01LTUgMS40MS0xLjQxTDEwIDE0LjE3bDcuNTktNy41OUwxOSA4bC05IDl6XCIvPlxuICApLFxuICB3YXJuaW5nOiAoXG4gICAgPHBhdGggZD1cIk0xIDIxaDIyTDEyIDIgMSAyMXptMTItM2gtMnYtMmgydjJ6bTAtNGgtMnYtNGgydjR6XCIvPlxuICApLFxuICBpbmZvOiAoXG4gICAgPHBhdGggZD1cIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0xIDE1aC0ydi02aDJ2NnptMC04aC0yVjdoMnYyelwiLz5cbiAgKSxcbiAgbG9hZGluZzogKFxuICAgIDxwYXRoIGQ9XCJNMTIgNnYzbDQtNC00LTR2M2MtNC40MiAwLTggMy41OC04IDggMCAxLjU3LjQ2IDMuMDMgMS4yNCA0LjI2TDYuNyAxNC44Yy0uNDUtLjgzLS43LTEuNzktLjctMi44IDAtMy4zMSAyLjY5LTYgNi02em02Ljc2IDEuNzRMMTcuMyA5LjJjLjQ0Ljg0LjcgMS43OS43IDIuOCAwIDMuMzEtMi42OSA2LTYgNnYtM2wtNCA0IDQgNHYtM2M0LjQyIDAgOC0zLjU4IDgtOCAwLTEuNTctLjQ2LTMuMDMtMS4yNC00LjI2elwiLz5cbiAgKSxcbiAgY2hldnJvbkRvd246IChcbiAgICA8cGF0aCBkPVwiTTcuNDEgOC41OUwxMiAxMy4xN2w0LjU5LTQuNThMMTggMTBsLTYgNi02LTYgMS40MS0xLjQxelwiLz5cbiAgKSxcbiAgY2hldnJvblVwOiAoXG4gICAgPHBhdGggZD1cIk03LjQxIDE1LjQxTDEyIDEwLjgzbDQuNTkgNC41OEwxOCAxNGwtNi02LTYgNnpcIi8+XG4gICksXG4gIHNlYXJjaDogKFxuICAgIDxwYXRoIGQ9XCJNMTUuNSAxNGgtLjc5bC0uMjgtLjI3QzE1LjQxIDEyLjU5IDE2IDExLjExIDE2IDkuNSAxNiA1LjkxIDEzLjA5IDMgOS41IDNTMyA1LjkxIDMgOS41IDUuOTEgMTYgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHpcIi8+XG4gICksXG4gIGJyYW5jaDogKFxuICAgIDxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTAuNSAzYTEuNSAxLjUgMCAxIDAgMC0zIDEuNSAxLjUgMCAwIDAgMCAzek00IDNhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDN6bTAgMXYzYzAgMiAxLjM0IDMuNjU3IDMuOTYyIDQuMTM4QzcuOTcyIDExLjA0NCA4IDExIDggMTFoMVY3LjEzOEM2LjM0IDYuNjU3IDUgMyA1IDNINHptNi41IDB2M2MwIDItMS4zNCAzLjY1Ny0zLjk2MiA0LjEzOEM2LjUyOCAxMS4wNDQgNi41IDExIDYuNSAxMUg1LjVWNy4xMzhDNy4xNiA2LjY1NyA4LjUgMyA4LjUgM2gyelwiLz5cbiAgKVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIEljb24oeyBuYW1lLCBzaXplID0gMjQsIGNsYXNzTmFtZSA9ICcnLCBjb2xvciB9OiBJY29uUHJvcHMpIHtcbiAgY29uc3QgaWNvblBhdGggPSBpY29uc1tuYW1lIGFzIGtleW9mIHR5cGVvZiBpY29uc107XG4gIFxuICBpZiAoIWljb25QYXRoKSB7XG4gICAgY29uc29sZS53YXJuKGBJY29uIFwiJHtuYW1lfVwiIG5vdCBmb3VuZGApO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBjbGFzc05hbWU9e2BpY29uIGljb24tJHtuYW1lfSAke2NsYXNzTmFtZX1gfVxuICAgICAgd2lkdGg9e3NpemV9XG4gICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIGZpbGw9e2NvbG9yIHx8ICdjdXJyZW50Q29sb3InfVxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgPlxuICAgICAge2ljb25QYXRofVxuICAgIDwvc3ZnPlxuICApO1xufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMb2FkaW5nU3Bpbm5lclByb3BzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gTG9hZGluZ1NwaW5uZXIoeyBzaXplID0gJ21lZGl1bScsIG1lc3NhZ2UgfTogTG9hZGluZ1NwaW5uZXJQcm9wcykge1xuICBjb25zdCBzaXplQ2xhc3MgPSB7XG4gICAgc21hbGw6ICdzcGlubmVyLXNtYWxsJyxcbiAgICBtZWRpdW06ICdzcGlubmVyLW1lZGl1bScsIFxuICAgIGxhcmdlOiAnc3Bpbm5lci1sYXJnZSdcbiAgfVtzaXplXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc3Bpbm5lciAke3NpemVDbGFzc31gfT48L2Rpdj5cbiAgICAgIHttZXNzYWdlICYmIDxwIGNsYXNzTmFtZT1cImxvYWRpbmctbWVzc2FnZVwiPnttZXNzYWdlfTwvcD59XG4gICAgPC9kaXY+XG4gICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1vZGVsU2VsZWN0b3JQcm9wcyB9IGZyb20gJy4uL3R5cGVzJztcblxuZXhwb3J0IGZ1bmN0aW9uIE1vZGVsU2VsZWN0b3IoeyBzZWxlY3RlZE1vZGVsLCBvbk1vZGVsQ2hhbmdlLCBtb2RlbHMgfTogTW9kZWxTZWxlY3RvclByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RlbC1zZWxlY3RvclwiPlxuICAgICAgPGxhYmVsIGh0bWxGb3I9XCJtb2RlbC1zZWxlY3RcIj5MYW5ndWFnZSBNb2RlbDo8L2xhYmVsPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBpZD1cIm1vZGVsLXNlbGVjdFwiXG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZE1vZGVsfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uTW9kZWxDaGFuZ2UoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBjbGFzc05hbWU9XCJtb2RlbC1zZWxlY3RcIlxuICAgICAgPlxuICAgICAgICB7bW9kZWxzLm1hcCgobW9kZWwpID0+IChcbiAgICAgICAgICA8b3B0aW9uIGtleT17bW9kZWwuaWR9IHZhbHVlPXttb2RlbC5pZH0+XG4gICAgICAgICAgICB7bW9kZWwubmFtZX1cbiAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iLCJleHBvcnQgeyBFcnJvckJvdW5kYXJ5IH0gZnJvbSAnLi9FcnJvckJvdW5kYXJ5JztcbmV4cG9ydCB7IExvYWRpbmdTcGlubmVyIH0gZnJvbSAnLi9Mb2FkaW5nU3Bpbm5lcic7XG5leHBvcnQgeyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XG5leHBvcnQgeyBNb2RlbFNlbGVjdG9yIH0gZnJvbSAnLi9Nb2RlbFNlbGVjdG9yJztcbmV4cG9ydCB7IEJyYW5jaFNlbGVjdG9yIH0gZnJvbSAnLi9CcmFuY2hTZWxlY3Rvcic7XG5leHBvcnQgeyBJY29uIH0gZnJvbSAnLi9JY29uJzsiLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWU0NvZGVBUEksIFdlYnZpZXdSZXF1ZXN0LCBFeHRlbnNpb25NZXNzYWdlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIGFjcXVpcmVWc0NvZGVBcGkoKTogVlNDb2RlQVBJO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VWU0NvZGVBUEkoKSB7XG4gIGNvbnN0IHZzY29kZVJlZiA9IHVzZVJlZjxWU0NvZGVBUEkgfCBudWxsPihudWxsKTtcblxuICBpZiAoIXZzY29kZVJlZi5jdXJyZW50KSB7XG4gICAgdnNjb2RlUmVmLmN1cnJlbnQgPSB3aW5kb3cuYWNxdWlyZVZzQ29kZUFwaSgpO1xuICB9XG5cbiAgY29uc3QgcG9zdE1lc3NhZ2UgPSAobWVzc2FnZTogV2Vidmlld1JlcXVlc3QpID0+IHtcbiAgICB2c2NvZGVSZWYuY3VycmVudD8ucG9zdE1lc3NhZ2UobWVzc2FnZSk7XG4gIH07XG5cbiAgY29uc3QgZ2V0U3RhdGUgPSAoKSA9PiB7XG4gICAgcmV0dXJuIHZzY29kZVJlZi5jdXJyZW50Py5nZXRTdGF0ZSgpO1xuICB9O1xuXG4gIGNvbnN0IHNldFN0YXRlID0gKHN0YXRlOiBhbnkpID0+IHtcbiAgICB2c2NvZGVSZWYuY3VycmVudD8uc2V0U3RhdGUoc3RhdGUpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcG9zdE1lc3NhZ2UsXG4gICAgZ2V0U3RhdGUsXG4gICAgc2V0U3RhdGUsXG4gICAgdnNjb2RlOiB2c2NvZGVSZWYuY3VycmVudFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVzc2FnZUxpc3RlbmVyKFxuICBvbk1lc3NhZ2U6IChtZXNzYWdlOiBFeHRlbnNpb25NZXNzYWdlKSA9PiB2b2lkXG4pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVNZXNzYWdlID0gKGV2ZW50OiBNZXNzYWdlRXZlbnQ8RXh0ZW5zaW9uTWVzc2FnZT4pID0+IHtcbiAgICAgIG9uTWVzc2FnZShldmVudC5kYXRhKTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBoYW5kbGVNZXNzYWdlKTtcbiAgfSwgW29uTWVzc2FnZV0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9hZGluZ1N0YXRlKGluaXRpYWxTdGF0ZTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShpbml0aWFsU3RhdGUpO1xuXG4gIGNvbnN0IHN0YXJ0TG9hZGluZyA9ICgpID0+IHNldElzTG9hZGluZyh0cnVlKTtcbiAgY29uc3Qgc3RvcExvYWRpbmcgPSAoKSA9PiBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuXG4gIHJldHVybiB7XG4gICAgaXNMb2FkaW5nLFxuICAgIHN0YXJ0TG9hZGluZyxcbiAgICBzdG9wTG9hZGluZyxcbiAgICBzZXRJc0xvYWRpbmdcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUVycm9yU3RhdGUoKSB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgY2xlYXJFcnJvciA9ICgpID0+IHNldEVycm9yKG51bGwpO1xuICBjb25zdCBzZXRFcnJvck1lc3NhZ2UgPSAobWVzc2FnZTogc3RyaW5nKSA9PiBzZXRFcnJvcihtZXNzYWdlKTtcblxuICByZXR1cm4ge1xuICAgIGVycm9yLFxuICAgIHNldEVycm9yOiBzZXRFcnJvck1lc3NhZ2UsXG4gICAgY2xlYXJFcnJvcixcbiAgICBoYXNFcnJvcjogZXJyb3IgIT09IG51bGxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVdlYnZpZXdTdGF0ZTxUPihpbml0aWFsU3RhdGU6IFQpIHtcbiAgY29uc3QgeyBnZXRTdGF0ZSwgc2V0U3RhdGUgfSA9IHVzZVZTQ29kZUFQSSgpO1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlSW50ZXJuYWxdID0gdXNlU3RhdGU8VD4oKCkgPT4ge1xuICAgIGNvbnN0IHNhdmVkU3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgIHJldHVybiBzYXZlZFN0YXRlIHx8IGluaXRpYWxTdGF0ZTtcbiAgfSk7XG5cbiAgY29uc3QgdXBkYXRlU3RhdGUgPSAobmV3U3RhdGU6IFQgfCAoKHByZXZTdGF0ZTogVCkgPT4gVCkpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkU3RhdGUgPSB0eXBlb2YgbmV3U3RhdGUgPT09ICdmdW5jdGlvbicgXG4gICAgICA/IChuZXdTdGF0ZSBhcyAocHJldlN0YXRlOiBUKSA9PiBUKShzdGF0ZSlcbiAgICAgIDogbmV3U3RhdGU7XG4gICAgXG4gICAgc2V0U3RhdGVJbnRlcm5hbCh1cGRhdGVkU3RhdGUpO1xuICAgIHNldFN0YXRlKHVwZGF0ZWRTdGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIFtzdGF0ZSwgdXBkYXRlU3RhdGVdIGFzIGNvbnN0O1xufSIsIi8vIEltcG9ydCBzaGFyZWQgc3R5bGVzXG5pbXBvcnQgJy4vc3R5bGVzL2NvbXBvbmVudHMuY3NzJztcblxuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vaG9va3MvdXNlVlNDb2RlQVBJJztcbmV4cG9ydCAqIGZyb20gJy4vdHlwZXMnO1xuZXhwb3J0ICogZnJvbSAnLi91dGlscyc7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwMS4zL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9zdHlsZS1sb2FkZXJANC4wLjBfd2VicGFja0A1LjEwMS4zL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA3LjEuMl93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21wb25lbnRzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA3LjEuMl93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb21wb25lbnRzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8vIFdlYnZpZXcg4oaUIEV4dGVuc2lvbiBjb21tdW5pY2F0aW9uIHR5cGVzXG5leHBvcnQgaW50ZXJmYWNlIFdlYnZpZXdNZXNzYWdlIHtcbiAgY29tbWFuZDogc3RyaW5nO1xuICBkYXRhPzogYW55O1xufVxuXG4vLyBFeHRlbnNpb24g4oaSIFdlYnZpZXcgbWVzc2FnZXNcbmV4cG9ydCBpbnRlcmZhY2UgRXh0ZW5zaW9uTWVzc2FnZSBleHRlbmRzIFdlYnZpZXdNZXNzYWdlIHtcbiAgY29tbWFuZDogJ2JyYW5jaGVzTGlzdCcgfCAncmVzdWx0JyB8ICdlcnJvcicgfCAncHJvZ3Jlc3NVcGRhdGUnIHwgJ3N0YXJ0TG9hZGluZycgfCAnc3RvcExvYWRpbmcnIHwgJ2dlbmVyYXRpb25Db21wbGV0ZScgfCAnYW5hbHl6aW5nJyB8ICdhbmFseXNpc1Jlc3VsdCc7XG4gIGJyYW5jaGVzPzogc3RyaW5nW107XG4gIGN1cnJlbnRCcmFuY2g/OiBzdHJpbmc7XG4gIGRlZmF1bHRUYXJnZXRCcmFuY2g/OiBzdHJpbmc7XG4gIGxhbmd1YWdlTW9kZWw/OiBzdHJpbmc7XG4gIHJlc3VsdD86IGFueTtcbiAgZXJyb3I/OiBzdHJpbmc7XG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG4gIHVwZGF0ZT86IFByb2dyZXNzVXBkYXRlO1xufVxuXG4vLyBXZWJ2aWV3IOKGkiBFeHRlbnNpb24gbWVzc2FnZXMgIFxuZXhwb3J0IGludGVyZmFjZSBXZWJ2aWV3UmVxdWVzdCBleHRlbmRzIFdlYnZpZXdNZXNzYWdlIHtcbiAgY29tbWFuZDogJ2dldEJyYW5jaGVzJyB8ICdnZW5lcmF0ZURlc2NyaXB0aW9uJyB8ICdnZW5lcmF0ZVByRGVzY3JpcHRpb24nIHwgJ3Jldmlld0NoYW5nZXMnIHwgJ2FuYWx5emVCcmVha2luZycgfCAnYW5hbHl6ZUJyZWFraW5nQ2hhbmdlcycgfCAnY29weVRvQ2xpcGJvYXJkJyB8ICdlcnJvcicgfCAnb3BlbkZpbGUnO1xuICBzb3VyY2VCcmFuY2g/OiBzdHJpbmc7XG4gIHRhcmdldEJyYW5jaD86IHN0cmluZztcbiAgc2VsZWN0ZWRNb2RlbD86IHN0cmluZztcbiAgbW9kZWxGYW1pbHk/OiBzdHJpbmc7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIGZpbGVQYXRoPzogc3RyaW5nO1xuICBsaW5lTnVtYmVyPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFByb2dyZXNzVXBkYXRlIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBwcm9ncmVzcz86IG51bWJlcjtcbiAgdG90YWw/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTW9kZWxDb25maWcge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2Vidmlld0NvbmZpZyB7XG4gIG1vZGVsczogTW9kZWxDb25maWdbXTtcbiAgZGVmYXVsdE1vZGVsOiBzdHJpbmc7XG59XG5cbi8vIFZTQ29kZSBBUEkgdHlwZXMgZm9yIHdlYnZpZXdzXG5leHBvcnQgaW50ZXJmYWNlIFZTQ29kZUFQSSB7XG4gIHBvc3RNZXNzYWdlKG1lc3NhZ2U6IFdlYnZpZXdSZXF1ZXN0KTogdm9pZDtcbiAgZ2V0U3RhdGUoKTogYW55O1xuICBzZXRTdGF0ZShzdGF0ZTogYW55KTogdm9pZDtcbn1cblxuLy8gQ29tcG9uZW50IHByb3AgdHlwZXNcbmV4cG9ydCBpbnRlcmZhY2UgTW9kZWxTZWxlY3RvclByb3BzIHtcbiAgc2VsZWN0ZWRNb2RlbDogc3RyaW5nO1xuICBvbk1vZGVsQ2hhbmdlOiAobW9kZWw6IHN0cmluZykgPT4gdm9pZDtcbiAgbW9kZWxzOiBNb2RlbENvbmZpZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJyYW5jaFNlbGVjdG9yUHJvcHMge1xuICBicmFuY2hlczogc3RyaW5nW107XG4gIHNlbGVjdGVkQnJhbmNoOiBzdHJpbmc7XG4gIG9uQnJhbmNoQ2hhbmdlOiAoYnJhbmNoOiBzdHJpbmcpID0+IHZvaWQ7XG4gIGxhYmVsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ1NwaW5uZXJQcm9wcyB7XG4gIHNpemU/OiAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnO1xuICBtZXNzYWdlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvblByb3BzIHtcbiAgdmFyaWFudD86ICdwcmltYXJ5JyB8ICdzZWNvbmRhcnknIHwgJ2Rhbmdlcic7XG4gIHNpemU/OiAnc21hbGwnIHwgJ21lZGl1bScgfCAnbGFyZ2UnO1xuICBsb2FkaW5nPzogYm9vbGVhbjtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEljb25Qcm9wcyB7XG4gIG5hbWU6IHN0cmluZztcbiAgc2l6ZT86IG51bWJlcjtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBjb2xvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFcnJvckJvdW5kYXJ5UHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBmYWxsYmFjaz86IFJlYWN0LlJlYWN0Tm9kZTtcbn0iLCIvLyBVdGlsaXR5IGZ1bmN0aW9ucyBmb3Igd2VidmlldyBjb21wb25lbnRzXG5cbmV4cG9ydCBmdW5jdGlvbiBkZWJvdW5jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+KFxuICBmdW5jOiBULFxuICB3YWl0OiBudW1iZXJcbik6ICguLi5hcmdzOiBQYXJhbWV0ZXJzPFQ+KSA9PiB2b2lkIHtcbiAgbGV0IHRpbWVvdXQ6IE5vZGVKUy5UaW1lb3V0O1xuICByZXR1cm4gKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pID0+IHtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gZnVuYyguLi5hcmdzKSwgd2FpdCk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnk+KFxuICBmdW5jOiBULFxuICBsaW1pdDogbnVtYmVyXG4pOiAoLi4uYXJnczogUGFyYW1ldGVyczxUPikgPT4gdm9pZCB7XG4gIGxldCBpblRocm90dGxlOiBib29sZWFuO1xuICByZXR1cm4gKC4uLmFyZ3M6IFBhcmFtZXRlcnM8VD4pID0+IHtcbiAgICBpZiAoIWluVGhyb3R0bGUpIHtcbiAgICAgIGZ1bmMoLi4uYXJncyk7XG4gICAgICBpblRocm90dGxlID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gKGluVGhyb3R0bGUgPSBmYWxzZSksIGxpbWl0KTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQodGV4dDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gIGlmIChuYXZpZ2F0b3IuY2xpcGJvYXJkICYmIHdpbmRvdy5pc1NlY3VyZUNvbnRleHQpIHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQodGV4dCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2sgZm9yIG9sZGVyIGJyb3dzZXJzIG9yIG5vbi1zZWN1cmUgY29udGV4dHNcbiAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgdGV4dEFyZWEudmFsdWUgPSB0ZXh0O1xuICAgIHRleHRBcmVhLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB0ZXh0QXJlYS5zdHlsZS5sZWZ0ID0gJy05OTk5OTlweCc7XG4gICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKHRleHRBcmVhKTtcbiAgICB0ZXh0QXJlYS5zZWxlY3QoKTtcbiAgICB0cnkge1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGNvcHkgdGV4dDogJywgZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0ZXh0QXJlYS5yZW1vdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRFcnJvcihlcnJvcjogdW5rbm93bik6IHN0cmluZyB7XG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yLm1lc3NhZ2U7XG4gIH1cbiAgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZXJyb3I7XG4gIH1cbiAgcmV0dXJuICdBbiB1bmtub3duIGVycm9yIG9jY3VycmVkJztcbn1leHBvcnRcbiBmdW5jdGlvbiBoYW5kbGVXZWJ2aWV3TWVzc2FnZTxUID0gYW55PihcbiAgbWVzc2FnZTogYW55LFxuICBleHBlY3RlZENvbW1hbmQ6IHN0cmluZyxcbiAgb25TdWNjZXNzOiAoZGF0YTogVCkgPT4gdm9pZCxcbiAgb25FcnJvcj86IChlcnJvcjogc3RyaW5nKSA9PiB2b2lkXG4pIHtcbiAgaWYgKG1lc3NhZ2UuY29tbWFuZCA9PT0gZXhwZWN0ZWRDb21tYW5kKSB7XG4gICAgaWYgKG1lc3NhZ2UuZXJyb3IgJiYgb25FcnJvcikge1xuICAgICAgb25FcnJvcihtZXNzYWdlLmVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb25TdWNjZXNzKG1lc3NhZ2UuZGF0YSB8fCBtZXNzYWdlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lc3NhZ2VIYW5kbGVyKGhhbmRsZXJzOiBSZWNvcmQ8c3RyaW5nLCAoZGF0YTogYW55KSA9PiB2b2lkPikge1xuICByZXR1cm4gKG1lc3NhZ2U6IGFueSkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBoYW5kbGVyc1ttZXNzYWdlLmNvbW1hbmRdO1xuICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICBoYW5kbGVyKG1lc3NhZ2UpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlUmVxdWlyZWRGaWVsZHM8VCBleHRlbmRzIFJlY29yZDxzdHJpbmcsIGFueT4+KFxuICBvYmo6IFQsXG4gIHJlcXVpcmVkRmllbGRzOiAoa2V5b2YgVClbXVxuKTogeyBpc1ZhbGlkOiBib29sZWFuOyBtaXNzaW5nRmllbGRzOiBzdHJpbmdbXSB9IHtcbiAgY29uc3QgbWlzc2luZ0ZpZWxkcyA9IHJlcXVpcmVkRmllbGRzLmZpbHRlcihmaWVsZCA9PiBcbiAgICBvYmpbZmllbGRdID09PSB1bmRlZmluZWQgfHwgb2JqW2ZpZWxkXSA9PT0gbnVsbCB8fCBvYmpbZmllbGRdID09PSAnJ1xuICApO1xuICBcbiAgcmV0dXJuIHtcbiAgICBpc1ZhbGlkOiBtaXNzaW5nRmllbGRzLmxlbmd0aCA9PT0gMCxcbiAgICBtaXNzaW5nRmllbGRzOiBtaXNzaW5nRmllbGRzIGFzIHN0cmluZ1tdXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYWZlSnNvblBhcnNlPFQgPSBhbnk+KGpzb25TdHJpbmc6IHN0cmluZywgZmFsbGJhY2s6IFQpOiBUIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbGxiYWNrO1xuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9