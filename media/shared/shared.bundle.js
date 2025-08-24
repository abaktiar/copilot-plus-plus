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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxRQUFRLENBQUMsR0FBRywrQ0FBUSxDQUFnQixJQUFJLENBQUMsQ0FBQztJQUV4RCxNQUFNLFVBQVUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsTUFBTSxlQUFlLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUUvRCxPQUFPO1FBQ0wsS0FBSztRQUNMLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFVBQVU7UUFDVixRQUFRLEVBQUUsS0FBSyxLQUFLLElBQUk7S0FDekIsQ0FBQztBQUNKLENBQUM7QUFFTSxTQUFTLGVBQWUsQ0FBSSxZQUFlO0lBQ2hELE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsWUFBWSxFQUFFLENBQUM7SUFDOUMsTUFBTSxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLCtDQUFRLENBQUksR0FBRyxFQUFFO1FBQ2pELE1BQU0sVUFBVSxHQUFHLFFBQVEsRUFBRSxDQUFDO1FBQzlCLE9BQU8sVUFBVSxJQUFJLFlBQVksQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztJQUVILE1BQU0sV0FBVyxHQUFHLENBQUMsUUFBbUMsRUFBRSxFQUFFO1FBQzFELE1BQU0sWUFBWSxHQUFHLE9BQU8sUUFBUSxLQUFLLFVBQVU7WUFDakQsQ0FBQyxDQUFFLFFBQWdDLENBQUMsS0FBSyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFFYixnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQixRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekIsQ0FBQyxDQUFDO0lBRUYsT0FBTyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQVUsQ0FBQztBQUN2QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL3N0eWxlcy9jb21wb25lbnRzLmNzcyIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9zaGFyZWQvY29tcG9uZW50cy9CcmFuY2hTZWxlY3Rvci50c3giLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL2NvbXBvbmVudHMvQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9zaGFyZWQvY29tcG9uZW50cy9FcnJvckJvdW5kYXJ5LnRzeCIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9zaGFyZWQvY29tcG9uZW50cy9JY29uLnRzeCIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9zaGFyZWQvY29tcG9uZW50cy9Mb2FkaW5nU3Bpbm5lci50c3giLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL2NvbXBvbmVudHMvTW9kZWxTZWxlY3Rvci50c3giLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL2NvbXBvbmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3Mvc2hhcmVkL2hvb2tzL3VzZVZTQ29kZUFQSS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANy4xLjJfd2VicGFja0A1LjEwMS4zL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA3LjEuMl93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBTaGFyZWQgY29tcG9uZW50IHN0eWxlcyAqL1xuXG4vKiBFcnJvciBCb3VuZGFyeSAqL1xuLmVycm9yLWJvdW5kYXJ5IHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXRWYWxpZGF0aW9uLWVycm9yQmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcbn1cblxuLmVycm9yLWNvbnRlbnQgaDMge1xuICBtYXJnaW4tdG9wOiAwO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XG59XG5cbi5lcnJvci1kZXRhaWxzIHtcbiAgbWFyZ2luOiAxNnB4IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5lcnJvci1kZXRhaWxzIHN1bW1hcnkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmVycm9yLWRldGFpbHMgcHJlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLXRleHRDb2RlQmxvY2stYmFja2dyb3VuZCk7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbi5lcnJvci1mYWxsYmFjayB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0VmFsaWRhdGlvbi1lcnJvckJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XG59XG5cbi5lcnJvci1mYWxsYmFjayBoMiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcbn1cblxuLmVycm9yLWZhbGxiYWNrIGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1mb3JlZ3JvdW5kKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVycm9yLWZhbGxiYWNrIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24taG92ZXJCYWNrZ3JvdW5kKTtcbn1cblxuLyogTG9hZGluZyBTcGlubmVyICovXG4ubG9hZGluZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnNwaW5uZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS12c2NvZGUtcHJvZ3Jlc3NCYXItYmFja2dyb3VuZCk7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS12c2NvZGUtcHJvZ3Jlc3NCYXItZm9yZWdyb3VuZCk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuLnNwaW5uZXItc21hbGwge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xufVxuXG4uc3Bpbm5lci1tZWRpdW0ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuXG4uc3Bpbm5lci1sYXJnZSB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLmxvYWRpbmctbWVzc2FnZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZm9yZWdyb3VuZCk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLyogQnV0dG9uICovXG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA2cHggMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5idG46ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLWZvcmVncm91bmQpO1xufVxuXG4uYnRuLXByaW1hcnk6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLWhvdmVyQmFja2dyb3VuZCk7XG59XG5cbi5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1zZWNvbmRhcnlCYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5Rm9yZWdyb3VuZCk7XG59XG5cbi5idG4tc2Vjb25kYXJ5OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1zZWNvbmRhcnlIb3ZlckJhY2tncm91bmQpO1xufVxuXG4uYnRuLWRhbmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1pbnB1dFZhbGlkYXRpb24tZXJyb3JCYWNrZ3JvdW5kKTtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xuICBib3JkZXItY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xufVxuXG4uYnRuLWRhbmdlcjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmJ0bi1zbWFsbCB7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmJ0bi1tZWRpdW0ge1xuICBwYWRkaW5nOiA2cHggMTRweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uYnRuLWxhcmdlIHtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJ0bi1sb2FkaW5nIHtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uYnRuLXNwaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxNHB4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiAycHggc29saWQgY3VycmVudENvbG9yO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbi8qIE1vZGVsIFNlbGVjdG9yICovXG4ubW9kZWwtc2VsZWN0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLm1vZGVsLXNlbGVjdG9yIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWZvcmVncm91bmQpO1xufVxuXG4ubW9kZWwtc2VsZWN0IHtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0LWJhY2tncm91bmQpO1xuICBjb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0LWZvcmVncm91bmQpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtaW5wdXQtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xufVxuXG4ubW9kZWwtc2VsZWN0OmZvY3VzIHtcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1mb2N1c0JvcmRlcik7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xufVxuXG4vKiBCcmFuY2ggU2VsZWN0b3IgKi9cbi5icmFuY2gtc2VsZWN0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmJyYW5jaC1zZWxlY3RvciBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1mb3JlZ3JvdW5kKTtcbn1cblxuLmJyYW5jaC1zZWxlY3Qge1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXQtYmFja2dyb3VuZCk7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXQtZm9yZWdyb3VuZCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1pbnB1dC1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG59XG5cbi5icmFuY2gtc2VsZWN0OmZvY3VzIHtcbiAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1mb2N1c0JvcmRlcik7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xufS8qIEljXG5vbiAqL1xuLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5pY29uLWNvcHkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pY29uLWNvcHk6aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi5pY29uLWxvYWRpbmcge1xuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uaWNvbi1lcnJvciB7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcbn1cblxuLmljb24td2FybmluZyB7XG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtbm90aWZpY2F0aW9uc1dhcm5pbmdJY29uLWZvcmVncm91bmQpO1xufVxuXG4uaWNvbi1pbmZvIHtcbiAgY29sb3I6IHZhcigtLXZzY29kZS1ub3RpZmljYXRpb25zSW5mb0ljb24tZm9yZWdyb3VuZCk7XG59XG5cbi5pY29uLWNoZWNrIHtcbiAgY29sb3I6IHZhcigtLXZzY29kZS10ZXJtaW5hbC1hbnNpR3JlZW4pO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3dlYnZpZXdzL3NoYXJlZC9zdHlsZXMvY29tcG9uZW50cy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNEJBQTRCOztBQUU1QixtQkFBbUI7QUFDbkI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLCtDQUErQztFQUMvQyxrQkFBa0I7RUFDbEIsK0RBQStEO0VBQy9ELG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3REFBd0Q7RUFDeEQsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQiwrQ0FBK0M7RUFDL0Msa0JBQWtCO0VBQ2xCLCtEQUErRDtFQUMvRCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpREFBaUQ7RUFDakQsc0NBQXNDO0VBQ3RDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNEQUFzRDtBQUN4RDs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0RBQXNEO0VBQ3RELDBEQUEwRDtFQUMxRCxrQkFBa0I7RUFDbEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsS0FBSyx1QkFBdUIsRUFBRTtFQUM5QixPQUFPLHlCQUF5QixFQUFFO0FBQ3BDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixlQUFlO0FBQ2pCOztBQUVBLFdBQVc7QUFDWDtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaURBQWlEO0VBQ2pELHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLDBEQUEwRDtFQUMxRCwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRSwrREFBK0Q7QUFDakU7O0FBRUE7RUFDRSwrREFBK0Q7RUFDL0Qsb0NBQW9DO0VBQ3BDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGtDQUFrQztBQUNwQzs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7RUFDUixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnREFBZ0Q7RUFDaEQscUNBQXFDO0VBQ3JDLDRDQUE0QztFQUM1QyxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QyxvQkFBb0I7QUFDdEI7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0RBQWdEO0VBQ2hELHFDQUFxQztFQUNyQyw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw0Q0FBNEM7RUFDNUMsb0JBQW9CO0FBQ3RCLENBQUM7SUFDRztBQUNKO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogU2hhcmVkIGNvbXBvbmVudCBzdHlsZXMgKi9cXG5cXG4vKiBFcnJvciBCb3VuZGFyeSAqL1xcbi5lcnJvci1ib3VuZGFyeSB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXRWYWxpZGF0aW9uLWVycm9yQmFja2dyb3VuZCk7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XFxufVxcblxcbi5lcnJvci1jb250ZW50IGgzIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XFxufVxcblxcbi5lcnJvci1kZXRhaWxzIHtcXG4gIG1hcmdpbjogMTZweCAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLmVycm9yLWRldGFpbHMgc3VtbWFyeSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbn1cXG5cXG4uZXJyb3ItZGV0YWlscyBwcmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLXRleHRDb2RlQmxvY2stYmFja2dyb3VuZCk7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbn1cXG5cXG4uZXJyb3ItZmFsbGJhY2sge1xcbiAgcGFkZGluZzogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0VmFsaWRhdGlvbi1lcnJvckJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xcbn1cXG5cXG4uZXJyb3ItZmFsbGJhY2sgaDIge1xcbiAgbWFyZ2luLXRvcDogMDtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcXG59XFxuXFxuLmVycm9yLWZhbGxiYWNrIGJ1dHRvbiB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgcGFkZGluZzogOHB4IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLWJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tZm9yZWdyb3VuZCk7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lcnJvci1mYWxsYmFjayBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1ob3ZlckJhY2tncm91bmQpO1xcbn1cXG5cXG4vKiBMb2FkaW5nIFNwaW5uZXIgKi9cXG4ubG9hZGluZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uc3Bpbm5lciB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS12c2NvZGUtcHJvZ3Jlc3NCYXItYmFja2dyb3VuZCk7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgdmFyKC0tdnNjb2RlLXByb2dyZXNzQmFyLWZvcmVncm91bmQpO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuXFxuLnNwaW5uZXItc21hbGwge1xcbiAgd2lkdGg6IDE2cHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxufVxcblxcbi5zcGlubmVyLW1lZGl1bSB7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG59XFxuXFxuLnNwaW5uZXItbGFyZ2Uge1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxufVxcblxcbkBrZXlmcmFtZXMgc3BpbiB7XFxuICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XFxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxcbn1cXG5cXG4ubG9hZGluZy1tZXNzYWdlIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWZvcmVncm91bmQpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4vKiBCdXR0b24gKi9cXG4uYnRuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogNnB4IDE0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmJ0bjpkaXNhYmxlZCB7XFxuICBvcGFjaXR5OiAwLjY7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uYnRuLXByaW1hcnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKTtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLWZvcmVncm91bmQpO1xcbn1cXG5cXG4uYnRuLXByaW1hcnk6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1ob3ZlckJhY2tncm91bmQpO1xcbn1cXG5cXG4uYnRuLXNlY29uZGFyeSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLXNlY29uZGFyeUJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5Rm9yZWdyb3VuZCk7XFxufVxcblxcbi5idG4tc2Vjb25kYXJ5OmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5SG92ZXJCYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmJ0bi1kYW5nZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0VmFsaWRhdGlvbi1lcnJvckJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS12c2NvZGUtZXJyb3JGb3JlZ3JvdW5kKTtcXG59XFxuXFxuLmJ0bi1kYW5nZXI6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xcbiAgb3BhY2l0eTogMC44O1xcbn1cXG5cXG4uYnRuLXNtYWxsIHtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxuICBmb250LXNpemU6IDExcHg7XFxufVxcblxcbi5idG4tbWVkaXVtIHtcXG4gIHBhZGRpbmc6IDZweCAxNHB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG5cXG4uYnRuLWxhcmdlIHtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uYnRuLWxvYWRpbmcge1xcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uYnRuLXNwaW5uZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDE0cHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4vKiBNb2RlbCBTZWxlY3RvciAqL1xcbi5tb2RlbC1zZWxlY3RvciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLm1vZGVsLXNlbGVjdG9yIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWZvcmVncm91bmQpO1xcbn1cXG5cXG4ubW9kZWwtc2VsZWN0IHtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtaW5wdXQtYmFja2dyb3VuZCk7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0LWZvcmVncm91bmQpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWlucHV0LWJvcmRlcik7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuLm1vZGVsLXNlbGVjdDpmb2N1cyB7XFxuICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWZvY3VzQm9yZGVyKTtcXG4gIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xcbn1cXG5cXG4vKiBCcmFuY2ggU2VsZWN0b3IgKi9cXG4uYnJhbmNoLXNlbGVjdG9yIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbn1cXG5cXG4uYnJhbmNoLXNlbGVjdG9yIGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWZvcmVncm91bmQpO1xcbn1cXG5cXG4uYnJhbmNoLXNlbGVjdCB7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLWlucHV0LWJhY2tncm91bmQpO1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1pbnB1dC1mb3JlZ3JvdW5kKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXZzY29kZS1pbnB1dC1ib3JkZXIpO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbi5icmFuY2gtc2VsZWN0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtZm9jdXNCb3JkZXIpO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0xcHg7XFxufS8qIEljXFxub24gKi9cXG4uaWNvbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbiAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcbi5pY29uLWNvcHkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaWNvbi1jb3B5OmhvdmVyIHtcXG4gIG9wYWNpdHk6IDAuODtcXG59XFxuXFxuLmljb24tbG9hZGluZyB7XFxuICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xcbn1cXG5cXG4uaWNvbi1lcnJvciB7XFxuICBjb2xvcjogdmFyKC0tdnNjb2RlLWVycm9yRm9yZWdyb3VuZCk7XFxufVxcblxcbi5pY29uLXdhcm5pbmcge1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1ub3RpZmljYXRpb25zV2FybmluZ0ljb24tZm9yZWdyb3VuZCk7XFxufVxcblxcbi5pY29uLWluZm8ge1xcbiAgY29sb3I6IHZhcigtLXZzY29kZS1ub3RpZmljYXRpb25zSW5mb0ljb24tZm9yZWdyb3VuZCk7XFxufVxcblxcbi5pY29uLWNoZWNrIHtcXG4gIGNvbG9yOiB2YXIoLS12c2NvZGUtdGVybWluYWwtYW5zaUdyZWVuKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcmFuY2hTZWxlY3RvclByb3BzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gQnJhbmNoU2VsZWN0b3IoeyBcbiAgYnJhbmNoZXMsIFxuICBzZWxlY3RlZEJyYW5jaCwgXG4gIG9uQnJhbmNoQ2hhbmdlLCBcbiAgbGFiZWwgXG59OiBCcmFuY2hTZWxlY3RvclByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJicmFuY2gtc2VsZWN0b3JcIj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtgYnJhbmNoLXNlbGVjdC0ke2xhYmVsLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnLScpfWB9PlxuICAgICAgICB7bGFiZWx9OlxuICAgICAgPC9sYWJlbD5cbiAgICAgIDxzZWxlY3RcbiAgICAgICAgaWQ9e2BicmFuY2gtc2VsZWN0LSR7bGFiZWwudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICctJyl9YH1cbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkQnJhbmNofVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQnJhbmNoQ2hhbmdlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYnJhbmNoLXNlbGVjdFwiXG4gICAgICA+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY3QgYSBicmFuY2guLi48L29wdGlvbj5cbiAgICAgICAge2JyYW5jaGVzLm1hcCgoYnJhbmNoKSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiBrZXk9e2JyYW5jaH0gdmFsdWU9e2JyYW5jaH0+XG4gICAgICAgICAgICB7YnJhbmNofVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICApO1xufSIsImltcG9ydCBSZWFjdCwgeyBCdXR0b25IVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvblByb3BzIGFzIEJhc2VCdXR0b25Qcm9wcyB9IGZyb20gJy4uL3R5cGVzJztcblxuaW50ZXJmYWNlIEJ1dHRvblByb3BzIGV4dGVuZHMgQmFzZUJ1dHRvblByb3BzLCBPbWl0PEJ1dHRvbkhUTUxBdHRyaWJ1dGVzPEhUTUxCdXR0b25FbGVtZW50Piwga2V5b2YgQmFzZUJ1dHRvblByb3BzPiB7fVxuXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uKHsgXG4gIHZhcmlhbnQgPSAncHJpbWFyeScsIFxuICBzaXplID0gJ21lZGl1bScsIFxuICBsb2FkaW5nID0gZmFsc2UsXG4gIGNoaWxkcmVuLFxuICBkaXNhYmxlZCxcbiAgY2xhc3NOYW1lID0gJycsXG4gIC4uLnByb3BzIFxufTogQnV0dG9uUHJvcHMpIHtcbiAgY29uc3QgYmFzZUNsYXNzID0gJ2J0bic7XG4gIGNvbnN0IHZhcmlhbnRDbGFzcyA9IGBidG4tJHt2YXJpYW50fWA7XG4gIGNvbnN0IHNpemVDbGFzcyA9IGBidG4tJHtzaXplfWA7XG4gIGNvbnN0IGxvYWRpbmdDbGFzcyA9IGxvYWRpbmcgPyAnYnRuLWxvYWRpbmcnIDogJyc7XG4gIFxuICBjb25zdCBjbGFzc2VzID0gW2Jhc2VDbGFzcywgdmFyaWFudENsYXNzLCBzaXplQ2xhc3MsIGxvYWRpbmdDbGFzcywgY2xhc3NOYW1lXVxuICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICAuam9pbignICcpO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cbiAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCBsb2FkaW5nfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtsb2FkaW5nICYmIDxzcGFuIGNsYXNzTmFtZT1cImJ0bi1zcGlubmVyXCI+PC9zcGFuPn1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRXJyb3JCb3VuZGFyeVByb3BzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBoYXNFcnJvcjogYm9vbGVhbjtcbiAgZXJyb3I/OiBFcnJvcjtcbn1cblxuZXhwb3J0IGNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RXJyb3JCb3VuZGFyeVByb3BzLCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogRXJyb3JCb3VuZGFyeVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGhhc0Vycm9yOiBmYWxzZSB9O1xuICB9XG5cbiAgc3RhdGljIGdldERlcml2ZWRTdGF0ZUZyb21FcnJvcihlcnJvcjogRXJyb3IpOiBTdGF0ZSB7XG4gICAgcmV0dXJuIHsgaGFzRXJyb3I6IHRydWUsIGVycm9yIH07XG4gIH1cblxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcjogRXJyb3IsIGVycm9ySW5mbzogUmVhY3QuRXJyb3JJbmZvKSB7XG4gICAgY29uc29sZS5lcnJvcignV2VidmlldyBFcnJvcjonLCBlcnJvciwgZXJyb3JJbmZvKTtcbiAgICBcbiAgICAvLyBTZW5kIGVycm9yIHRvIGV4dGVuc2lvbiBmb3IgbG9nZ2luZ1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB2c2NvZGUgPSAod2luZG93IGFzIGFueSkuYWNxdWlyZVZzQ29kZUFwaT8uKCk7XG4gICAgICBpZiAodnNjb2RlKSB7XG4gICAgICAgIHZzY29kZS5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgY29tbWFuZDogJ2Vycm9yJyxcbiAgICAgICAgICBkYXRhOiB7IFxuICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsIFxuICAgICAgICAgICAgc3RhY2s6IGVycm9yLnN0YWNrLFxuICAgICAgICAgICAgY29tcG9uZW50U3RhY2s6IGVycm9ySW5mby5jb21wb25lbnRTdGFja1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIHNlbmQgZXJyb3IgdG8gZXh0ZW5zaW9uOicsIGUpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5oYXNFcnJvcikge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZmFsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZmFsbGJhY2s7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItYm91bmRhcnlcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoMz5Tb21ldGhpbmcgd2VudCB3cm9uZzwvaDM+XG4gICAgICAgICAgICA8cD5BbiBlcnJvciBvY2N1cnJlZCB3aGlsZSByZW5kZXJpbmcgdGhpcyBjb21wb25lbnQuPC9wPlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZXJyb3IgJiYgKFxuICAgICAgICAgICAgICA8ZGV0YWlscyBjbGFzc05hbWU9XCJlcnJvci1kZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPHN1bW1hcnk+RXJyb3IgZGV0YWlsczwvc3VtbWFyeT5cbiAgICAgICAgICAgICAgICA8cHJlPnt0aGlzLnN0YXRlLmVycm9yLm1lc3NhZ2V9PC9wcmU+XG4gICAgICAgICAgICAgIDwvZGV0YWlscz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaGFzRXJyb3I6IGZhbHNlLCBlcnJvcjogdW5kZWZpbmVkIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBUcnkgYWdhaW5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW47XG4gIH1cbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSWNvblByb3BzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vLyBDb21tb24gU1ZHIGljb25zIHVzZWQgaW4gdGhlIGV4dGVuc2lvblxuY29uc3QgaWNvbnMgPSB7XG4gIGNvcHk6IChcbiAgICA8cGF0aCBkPVwiTTE2IDFINGMtMS4xIDAtMiAuOS0yIDJ2MTRoMlYzaDEyVjF6bTMgNEg4Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDExYzEuMSAwIDItLjkgMi0yVjdjMC0xLjEtLjktMi0yLTJ6bTAgMTZIOFY3aDExdjE0elwiLz5cbiAgKSxcbiAgcmVmcmVzaDogKFxuICAgIDxwYXRoIGQ9XCJNMTcuNjUgNi4zNUMxNi4yIDQuOSAxNC4yMSA0IDEyIDRjLTQuNDIgMC03Ljk5IDMuNTgtNy45OSA4czMuNTcgOCA3Ljk5IDhjMy43MyAwIDYuODQtMi41NSA3LjczLTZoLTIuMDhjLS44MiAyLjMzLTMuMDQgNC01LjY1IDQtMy4zMSAwLTYtMi42OS02LTZzMi42OS02IDYtNmMxLjY2IDAgMy4xNC42OSA0LjIyIDEuNzhMMTMgMTFoN1Y0bC0yLjM1IDIuMzV6XCIvPlxuICApLFxuICBjaGVjazogKFxuICAgIDxwYXRoIGQ9XCJNOSAxNi4xN0w0LjgzIDEybC0xLjQyIDEuNDFMOSAxOSAyMSA3bC0xLjQxLTEuNDF6XCIvPlxuICApLFxuICBlcnJvcjogKFxuICAgIDxwYXRoIGQ9XCJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptLTIgMTVsLTUtNSAxLjQxLTEuNDFMMTAgMTQuMTdsNy41OS03LjU5TDE5IDhsLTkgOXpcIi8+XG4gICksXG4gIHdhcm5pbmc6IChcbiAgICA8cGF0aCBkPVwiTTEgMjFoMjJMMTIgMiAxIDIxem0xMi0zaC0ydi0yaDJ2MnptMC00aC0ydi00aDJ2NHpcIi8+XG4gICksXG4gIGluZm86IChcbiAgICA8cGF0aCBkPVwiTTEyIDJDNi40OCAyIDIgNi40OCAyIDEyczQuNDggMTAgMTAgMTAgMTAtNC40OCAxMC0xMFMxNy41MiAyIDEyIDJ6bTEgMTVoLTJ2LTZoMnY2em0wLThoLTJWN2gydjJ6XCIvPlxuICApLFxuICBsb2FkaW5nOiAoXG4gICAgPHBhdGggZD1cIk0xMiA2djNsNC00LTQtNHYzYy00LjQyIDAtOCAzLjU4LTggOCAwIDEuNTcuNDYgMy4wMyAxLjI0IDQuMjZMNi43IDE0LjhjLS40NS0uODMtLjctMS43OS0uNy0yLjggMC0zLjMxIDIuNjktNiA2LTZ6bTYuNzYgMS43NEwxNy4zIDkuMmMuNDQuODQuNyAxLjc5LjcgMi44IDAgMy4zMS0yLjY5IDYtNiA2di0zbC00IDQgNCA0di0zYzQuNDIgMCA4LTMuNTggOC04IDAtMS41Ny0uNDYtMy4wMy0xLjI0LTQuMjZ6XCIvPlxuICApLFxuICBjaGV2cm9uRG93bjogKFxuICAgIDxwYXRoIGQ9XCJNNy40MSA4LjU5TDEyIDEzLjE3bDQuNTktNC41OEwxOCAxMGwtNiA2LTYtNiAxLjQxLTEuNDF6XCIvPlxuICApLFxuICBjaGV2cm9uVXA6IChcbiAgICA8cGF0aCBkPVwiTTcuNDEgMTUuNDFMMTIgMTAuODNsNC41OSA0LjU4TDE4IDE0bC02LTYtNiA2elwiLz5cbiAgKSxcbiAgc2VhcmNoOiAoXG4gICAgPHBhdGggZD1cIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwiLz5cbiAgKSxcbiAgYnJhbmNoOiAoXG4gICAgPHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMC41IDNhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDN6TTQgM2ExLjUgMS41IDAgMSAwIDAtMyAxLjUgMS41IDAgMCAwIDAgM3ptMCAxdjNjMCAyIDEuMzQgMy42NTcgMy45NjIgNC4xMzhDNy45NzIgMTEuMDQ0IDggMTEgOCAxMWgxVjcuMTM4QzYuMzQgNi42NTcgNSAzIDUgM0g0em02LjUgMHYzYzAgMi0xLjM0IDMuNjU3LTMuOTYyIDQuMTM4QzYuNTI4IDExLjA0NCA2LjUgMTEgNi41IDExSDUuNVY3LjEzOEM3LjE2IDYuNjU3IDguNSAzIDguNSAzaDJ6XCIvPlxuICApXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gSWNvbih7IG5hbWUsIHNpemUgPSAyNCwgY2xhc3NOYW1lID0gJycsIGNvbG9yIH06IEljb25Qcm9wcykge1xuICBjb25zdCBpY29uUGF0aCA9IGljb25zW25hbWUgYXMga2V5b2YgdHlwZW9mIGljb25zXTtcbiAgXG4gIGlmICghaWNvblBhdGgpIHtcbiAgICBjb25zb2xlLndhcm4oYEljb24gXCIke25hbWV9XCIgbm90IGZvdW5kYCk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIGNsYXNzTmFtZT17YGljb24gaWNvbi0ke25hbWV9ICR7Y2xhc3NOYW1lfWB9XG4gICAgICB3aWR0aD17c2l6ZX1cbiAgICAgIGhlaWdodD17c2l6ZX1cbiAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgZmlsbD17Y29sb3IgfHwgJ2N1cnJlbnRDb2xvcid9XG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICA+XG4gICAgICB7aWNvblBhdGh9XG4gICAgPC9zdmc+XG4gICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExvYWRpbmdTcGlubmVyUHJvcHMgfSBmcm9tICcuLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2FkaW5nU3Bpbm5lcih7IHNpemUgPSAnbWVkaXVtJywgbWVzc2FnZSB9OiBMb2FkaW5nU3Bpbm5lclByb3BzKSB7XG4gIGNvbnN0IHNpemVDbGFzcyA9IHtcbiAgICBzbWFsbDogJ3NwaW5uZXItc21hbGwnLFxuICAgIG1lZGl1bTogJ3NwaW5uZXItbWVkaXVtJywgXG4gICAgbGFyZ2U6ICdzcGlubmVyLWxhcmdlJ1xuICB9W3NpemVdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BzcGlubmVyICR7c2l6ZUNsYXNzfWB9PjwvZGl2PlxuICAgICAge21lc3NhZ2UgJiYgPHAgY2xhc3NOYW1lPVwibG9hZGluZy1tZXNzYWdlXCI+e21lc3NhZ2V9PC9wPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTW9kZWxTZWxlY3RvclByb3BzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gTW9kZWxTZWxlY3Rvcih7IHNlbGVjdGVkTW9kZWwsIG9uTW9kZWxDaGFuZ2UsIG1vZGVscyB9OiBNb2RlbFNlbGVjdG9yUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGVsLXNlbGVjdG9yXCI+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIm1vZGVsLXNlbGVjdFwiPkxhbmd1YWdlIE1vZGVsOjwvbGFiZWw+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIGlkPVwibW9kZWwtc2VsZWN0XCJcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkTW9kZWx9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25Nb2RlbENoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIGNsYXNzTmFtZT1cIm1vZGVsLXNlbGVjdFwiXG4gICAgICA+XG4gICAgICAgIHttb2RlbHMubWFwKChtb2RlbCkgPT4gKFxuICAgICAgICAgIDxvcHRpb24ga2V5PXttb2RlbC5pZH0gdmFsdWU9e21vZGVsLmlkfT5cbiAgICAgICAgICAgIHttb2RlbC5uYW1lfVxuICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICApKX1cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuICApO1xufSIsImV4cG9ydCB7IEVycm9yQm91bmRhcnkgfSBmcm9tICcuL0Vycm9yQm91bmRhcnknO1xuZXhwb3J0IHsgTG9hZGluZ1NwaW5uZXIgfSBmcm9tICcuL0xvYWRpbmdTcGlubmVyJztcbmV4cG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJztcbmV4cG9ydCB7IE1vZGVsU2VsZWN0b3IgfSBmcm9tICcuL01vZGVsU2VsZWN0b3InO1xuZXhwb3J0IHsgQnJhbmNoU2VsZWN0b3IgfSBmcm9tICcuL0JyYW5jaFNlbGVjdG9yJztcbmV4cG9ydCB7IEljb24gfSBmcm9tICcuL0ljb24nOyIsImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFZTQ29kZUFQSSwgV2Vidmlld1JlcXVlc3QsIEV4dGVuc2lvbk1lc3NhZ2UgfSBmcm9tICcuLi90eXBlcyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgYWNxdWlyZVZzQ29kZUFwaSgpOiBWU0NvZGVBUEk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVZTQ29kZUFQSSgpIHtcbiAgY29uc3QgdnNjb2RlUmVmID0gdXNlUmVmPFZTQ29kZUFQSSB8IG51bGw+KG51bGwpO1xuXG4gIGlmICghdnNjb2RlUmVmLmN1cnJlbnQpIHtcbiAgICB2c2NvZGVSZWYuY3VycmVudCA9IHdpbmRvdy5hY3F1aXJlVnNDb2RlQXBpKCk7XG4gIH1cblxuICBjb25zdCBwb3N0TWVzc2FnZSA9IChtZXNzYWdlOiBXZWJ2aWV3UmVxdWVzdCkgPT4ge1xuICAgIHZzY29kZVJlZi5jdXJyZW50Py5wb3N0TWVzc2FnZShtZXNzYWdlKTtcbiAgfTtcblxuICBjb25zdCBnZXRTdGF0ZSA9ICgpID0+IHtcbiAgICByZXR1cm4gdnNjb2RlUmVmLmN1cnJlbnQ/LmdldFN0YXRlKCk7XG4gIH07XG5cbiAgY29uc3Qgc2V0U3RhdGUgPSAoc3RhdGU6IGFueSkgPT4ge1xuICAgIHZzY29kZVJlZi5jdXJyZW50Py5zZXRTdGF0ZShzdGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwb3N0TWVzc2FnZSxcbiAgICBnZXRTdGF0ZSxcbiAgICBzZXRTdGF0ZSxcbiAgICB2c2NvZGU6IHZzY29kZVJlZi5jdXJyZW50XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZXNzYWdlTGlzdGVuZXIoXG4gIG9uTWVzc2FnZTogKG1lc3NhZ2U6IEV4dGVuc2lvbk1lc3NhZ2UpID0+IHZvaWRcbikge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZU1lc3NhZ2UgPSAoZXZlbnQ6IE1lc3NhZ2VFdmVudDxFeHRlbnNpb25NZXNzYWdlPikgPT4ge1xuICAgICAgb25NZXNzYWdlKGV2ZW50LmRhdGEpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGhhbmRsZU1lc3NhZ2UpO1xuICB9LCBbb25NZXNzYWdlXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2FkaW5nU3RhdGUoaW5pdGlhbFN0YXRlOiBib29sZWFuID0gZmFsc2UpIHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGluaXRpYWxTdGF0ZSk7XG5cbiAgY29uc3Qgc3RhcnRMb2FkaW5nID0gKCkgPT4gc2V0SXNMb2FkaW5nKHRydWUpO1xuICBjb25zdCBzdG9wTG9hZGluZyA9ICgpID0+IHNldElzTG9hZGluZyhmYWxzZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBpc0xvYWRpbmcsXG4gICAgc3RhcnRMb2FkaW5nLFxuICAgIHN0b3BMb2FkaW5nLFxuICAgIHNldElzTG9hZGluZ1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRXJyb3JTdGF0ZSgpIHtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICBjb25zdCBjbGVhckVycm9yID0gKCkgPT4gc2V0RXJyb3IobnVsbCk7XG4gIGNvbnN0IHNldEVycm9yTWVzc2FnZSA9IChtZXNzYWdlOiBzdHJpbmcpID0+IHNldEVycm9yKG1lc3NhZ2UpO1xuXG4gIHJldHVybiB7XG4gICAgZXJyb3IsXG4gICAgc2V0RXJyb3I6IHNldEVycm9yTWVzc2FnZSxcbiAgICBjbGVhckVycm9yLFxuICAgIGhhc0Vycm9yOiBlcnJvciAhPT0gbnVsbFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlV2Vidmlld1N0YXRlPFQ+KGluaXRpYWxTdGF0ZTogVCkge1xuICBjb25zdCB7IGdldFN0YXRlLCBzZXRTdGF0ZSB9ID0gdXNlVlNDb2RlQVBJKCk7XG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVJbnRlcm5hbF0gPSB1c2VTdGF0ZTxUPigoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRTdGF0ZSA9IGdldFN0YXRlKCk7XG4gICAgcmV0dXJuIHNhdmVkU3RhdGUgfHwgaW5pdGlhbFN0YXRlO1xuICB9KTtcblxuICBjb25zdCB1cGRhdGVTdGF0ZSA9IChuZXdTdGF0ZTogVCB8ICgocHJldlN0YXRlOiBUKSA9PiBUKSkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRTdGF0ZSA9IHR5cGVvZiBuZXdTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyBcbiAgICAgID8gKG5ld1N0YXRlIGFzIChwcmV2U3RhdGU6IFQpID0+IFQpKHN0YXRlKVxuICAgICAgOiBuZXdTdGF0ZTtcbiAgICBcbiAgICBzZXRTdGF0ZUludGVybmFsKHVwZGF0ZWRTdGF0ZSk7XG4gICAgc2V0U3RhdGUodXBkYXRlZFN0YXRlKTtcbiAgfTtcblxuICByZXR1cm4gW3N0YXRlLCB1cGRhdGVTdGF0ZV0gYXMgY29uc3Q7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9