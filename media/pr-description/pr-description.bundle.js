/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./src/webviews/pr-description/styles/pr-description.css":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./src/webviews/pr-description/styles/pr-description.css ***!
  \*********************************************************************************************************************************************************/
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
    --container-padding: 24px;
    --input-padding-vertical: 8px;
    --input-padding-horizontal: 12px;
    --border-radius: 8px;
    --border-radius-sm: 6px;
    --transition-speed: 0.2s;
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.06);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
    --gradient-primary: linear-gradient(145deg, var(--vscode-button-background), color-mix(in srgb, var(--vscode-button-background) 85%, black));
    --gradient-hover: linear-gradient(145deg, color-mix(in srgb, var(--vscode-button-background) 85%, white), var(--vscode-button-background));
}

body {
    padding: 0 var(--container-padding);
    color: var(--vscode-foreground);
    font-size: var(--vscode-font-size);
    font-weight: var(--vscode-font-weight);
    font-family: var(--vscode-font-family);
    background-color: var(--vscode-editor-background);
    line-height: 1.5;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 24px 0;
    animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.heading {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 24px;
    border-bottom: 1px solid var(--vscode-panel-border);
    padding-bottom: 12px;
    opacity: 0.95;
    letter-spacing: -0.02em;
}

.branch-selection {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 28px;
    padding: 24px;
    background: color-mix(in srgb, var(--vscode-editor-background) 97%, var(--vscode-button-background));
    border: 1px solid color-mix(in srgb, var(--vscode-panel-border) 90%, var(--vscode-button-background));
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-speed) cubic-bezier(0.4, 0, 0.2, 1);
}

.branch-selection:hover {
    box-shadow: var(--shadow-md);
    border-color: color-mix(in srgb, var(--vscode-panel-border) 75%, var(--vscode-button-background));
    transform: translateY(-1px);
}

.generation-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-bottom: 28px;
    padding: 24px;
    background: color-mix(in srgb, var(--vscode-editor-background) 97%, var(--vscode-button-background));
    border: 1px solid color-mix(in srgb, var(--vscode-panel-border) 90%, var(--vscode-button-background));
    border-radius: var(--border-radius);
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-speed) cubic-bezier(0.4, 0, 0.2, 1);
}

.generation-form:hover {
    box-shadow: var(--shadow-md);
    border-color: color-mix(in srgb, var(--vscode-panel-border) 75%, var(--vscode-button-background));
    transform: translateY(-1px);
}

.generate-button {
    margin-top: 16px;
    background: var(--gradient-primary);
    color: var(--vscode-button-foreground);
    border: none;
    padding: 8px 16px;
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    font-weight: 500;
    height: 36px;
    align-self: flex-start;
    transition: all var(--transition-speed) cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    box-shadow: var(--shadow-sm);
}

.generate-button:hover {
    background: var(--gradient-hover);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
}

.generate-button:active {
    transform: translateY(0);
    box-shadow: var(--shadow-sm);
}

.generate-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}

.error {
    color: var(--vscode-errorForeground);
    background-color: color-mix(in srgb, var(--vscode-inputValidation-errorBackground) 95%, transparent);
    border: 1px solid var(--vscode-inputValidation-errorBorder);
    padding: 12px 16px;
    margin-bottom: 16px;
    border-radius: var(--border-radius-sm);
    font-size: 13px;
    display: flex;
    align-items: center;
    gap: 10px;
    animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
    from { opacity: 0; transform: translateX(-10px); }
    to { opacity: 1; transform: translateX(0); }
}

.error:before {
    content: "⚠️";
    font-size: 14px;
}

.loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 32px;
    opacity: 0.8;
    text-align: center;
    animation: fadeIn 0.3s ease-out;
}

.results {
    display: flex;
    flex-direction: column;
    gap: 24px;
    animation: fadeIn 0.4s ease-out;
}

.result-section {
    border: 1px solid color-mix(in srgb, var(--vscode-panel-border) 90%, var(--vscode-button-background));
    border-radius: var(--border-radius);
    overflow: hidden;
    background: color-mix(in srgb, var(--vscode-editor-background) 97%, var(--vscode-button-background));
    box-shadow: var(--shadow-sm);
    transition: all var(--transition-speed) cubic-bezier(0.4, 0, 0.2, 1);
}

.result-section:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-1px);
}

.result-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: color-mix(in srgb, var(--vscode-editor-background) 95%, var(--vscode-button-background));
    padding: 12px 16px;
    border-bottom: 1px solid color-mix(in srgb, var(--vscode-panel-border) 90%, var(--vscode-button-background));
}

.result-header h3 {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    opacity: 0.95;
    letter-spacing: -0.01em;
}

.result-content {
    padding: 18px;
    background-color: var(--vscode-editor-background);
    white-space: pre-wrap;
    line-height: 1.6;
}

.title-content {
    font-weight: 600;
    font-size: 18px;
    letter-spacing: -0.01em;
}

.description-content {
    max-height: 500px;
    overflow-y: auto;
    padding-right: 8px;
}

.description-content::-webkit-scrollbar {
    width: 8px;
}

.description-content::-webkit-scrollbar-track {
    background: transparent;
}

.description-content::-webkit-scrollbar-thumb {
    background-color: color-mix(in srgb, var(--vscode-scrollbarSlider-background) 90%, transparent);
    border-radius: 4px;
}

.description-content::-webkit-scrollbar-thumb:hover {
    background-color: var(--vscode-scrollbarSlider-hoverBackground);
}

.copy-button, .copy-all-button {
    background: color-mix(in srgb, var(--vscode-button-secondaryBackground) 97%, transparent);
    color: var(--vscode-button-secondaryForeground);
    border: 1px solid color-mix(in srgb, var(--vscode-button-secondaryBackground) 80%, transparent);
    padding: 4px 10px;
    border-radius: var(--border-radius-sm);
    cursor: pointer;
    font-size: 12px;
    transition: all var(--transition-speed) cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    gap: 6px;
}

.copy-button:before {
    content: "📋";
    font-size: 12px;
    opacity: 0.9;
}

.copy-button:hover, .copy-all-button:hover {
    background: var(--vscode-button-secondaryHoverBackground);
    transform: translateY(-1px);
    border-color: var(--vscode-button-secondaryBackground);
}

.copy-button:active, .copy-all-button:active {
    transform: translateY(0);
}

.copy-all {
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
}

.copy-all-button {
    padding: 8px 16px;
    font-size: 13px;
    background: var(--gradient-primary);
    color: var(--vscode-button-foreground);
    font-weight: 500;
    border: none;
    box-shadow: var(--shadow-sm);
}

.copy-all-button:before {
    content: "📋";
    font-size: 14px;
}

.copy-all-button:hover {
    background: var(--gradient-hover);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
}

/* Markdown Styles */
.markdown-body {
    line-height: 1.6;
    font-size: 14px;
}

.markdown-body h1,
.markdown-body h2,
.markdown-body h3 {
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -0.02em;
}

.markdown-body h1 {
    font-size: 1.8em;
    border-bottom: 1px solid var(--vscode-panel-border);
    padding-bottom: 0.3em;
}

.markdown-body h2 {
    font-size: 1.5em;
    border-bottom: 1px solid var(--vscode-panel-border);
    padding-bottom: 0.3em;
}

.markdown-body h3 {
    font-size: 1.25em;
}

.markdown-body ul,
.markdown-body ol {
    padding-left: 2em;
    margin-bottom: 16px;
}

.markdown-body li {
    margin-bottom: 6px;
}

.markdown-body code {
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: color-mix(in srgb, var(--vscode-textCodeBlock-background) 97%, var(--vscode-button-background));
    border-radius: 4px;
    font-family: var(--vscode-editor-font-family);
}

.markdown-body pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: var(--vscode-textCodeBlock-background);
    border-radius: var(--border-radius-sm);
    margin-bottom: 16px;
    border: 1px solid color-mix(in srgb, var(--vscode-panel-border) 90%, transparent);
}

.markdown-body p {
    margin-bottom: 16px;
    margin-top: 0;
}

.markdown-body blockquote {
    padding: 0.8em 1em;
    color: var(--vscode-foreground);
    opacity: 0.8;
    border-left: 3px solid var(--vscode-button-background);
    margin: 0 0 16px 0;
    background: color-mix(in srgb, var(--vscode-editor-background) 97%, var(--vscode-button-background));
    border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;
}`, "",{"version":3,"sources":["webpack://./src/webviews/pr-description/styles/pr-description.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --container-padding: 24px;\n    --input-padding-vertical: 8px;\n    --input-padding-horizontal: 12px;\n    --border-radius: 8px;\n    --border-radius-sm: 6px;\n    --transition-speed: 0.2s;\n    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.06);\n    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);\n    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);\n    --gradient-primary: linear-gradient(145deg, var(--vscode-button-background), color-mix(in srgb, var(--vscode-button-background) 85%, black));\n    --gradient-hover: linear-gradient(145deg, color-mix(in srgb, var(--vscode-button-background) 85%, white), var(--vscode-button-background));\n}\n\nbody {\n    padding: 0 var(--container-padding);\n    color: var(--vscode-foreground);\n    font-size: var(--vscode-font-size);\n    font-weight: var(--vscode-font-weight);\n    font-family: var(--vscode-font-family);\n    background-color: var(--vscode-editor-background);\n    line-height: 1.5;\n}\n\n.container {\n    max-width: 800px;\n    margin: 0 auto;\n    padding: 24px 0;\n    animation: fadeIn 0.3s ease-out;\n}\n\n@keyframes fadeIn {\n    from { opacity: 0; transform: translateY(10px); }\n    to { opacity: 1; transform: translateY(0); }\n}\n\n.heading {\n    font-size: 24px;\n    font-weight: 500;\n    margin-bottom: 24px;\n    border-bottom: 1px solid var(--vscode-panel-border);\n    padding-bottom: 12px;\n    opacity: 0.95;\n    letter-spacing: -0.02em;\n}\n\n.branch-selection {\n    display: flex;\n    flex-direction: column;\n    gap: 18px;\n    margin-bottom: 28px;\n    padding: 24px;\n    background: color-mix(in srgb, var(--vscode-editor-background) 97%, var(--vscode-button-background));\n    border: 1px solid color-mix(in srgb, var(--vscode-panel-border) 90%, var(--vscode-button-background));\n    border-radius: var(--border-radius);\n    box-shadow: var(--shadow-sm);\n    transition: all var(--transition-speed) cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.branch-selection:hover {\n    box-shadow: var(--shadow-md);\n    border-color: color-mix(in srgb, var(--vscode-panel-border) 75%, var(--vscode-button-background));\n    transform: translateY(-1px);\n}\n\n.generation-form {\n    display: flex;\n    flex-direction: column;\n    gap: 18px;\n    margin-bottom: 28px;\n    padding: 24px;\n    background: color-mix(in srgb, var(--vscode-editor-background) 97%, var(--vscode-button-background));\n    border: 1px solid color-mix(in srgb, var(--vscode-panel-border) 90%, var(--vscode-button-background));\n    border-radius: var(--border-radius);\n    box-shadow: var(--shadow-sm);\n    transition: all var(--transition-speed) cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.generation-form:hover {\n    box-shadow: var(--shadow-md);\n    border-color: color-mix(in srgb, var(--vscode-panel-border) 75%, var(--vscode-button-background));\n    transform: translateY(-1px);\n}\n\n.generate-button {\n    margin-top: 16px;\n    background: var(--gradient-primary);\n    color: var(--vscode-button-foreground);\n    border: none;\n    padding: 8px 16px;\n    border-radius: var(--border-radius-sm);\n    cursor: pointer;\n    font-weight: 500;\n    height: 36px;\n    align-self: flex-start;\n    transition: all var(--transition-speed) cubic-bezier(0.4, 0, 0.2, 1);\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    font-size: 13px;\n    box-shadow: var(--shadow-sm);\n}\n\n.generate-button:hover {\n    background: var(--gradient-hover);\n    transform: translateY(-1px);\n    box-shadow: var(--shadow-md);\n}\n\n.generate-button:active {\n    transform: translateY(0);\n    box-shadow: var(--shadow-sm);\n}\n\n.generate-button:disabled {\n    opacity: 0.6;\n    cursor: not-allowed;\n    transform: none;\n    box-shadow: none;\n}\n\n.error {\n    color: var(--vscode-errorForeground);\n    background-color: color-mix(in srgb, var(--vscode-inputValidation-errorBackground) 95%, transparent);\n    border: 1px solid var(--vscode-inputValidation-errorBorder);\n    padding: 12px 16px;\n    margin-bottom: 16px;\n    border-radius: var(--border-radius-sm);\n    font-size: 13px;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    animation: slideIn 0.3s ease-out;\n}\n\n@keyframes slideIn {\n    from { opacity: 0; transform: translateX(-10px); }\n    to { opacity: 1; transform: translateX(0); }\n}\n\n.error:before {\n    content: \"⚠️\";\n    font-size: 14px;\n}\n\n.loading {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 16px;\n    padding: 32px;\n    opacity: 0.8;\n    text-align: center;\n    animation: fadeIn 0.3s ease-out;\n}\n\n.results {\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    animation: fadeIn 0.4s ease-out;\n}\n\n.result-section {\n    border: 1px solid color-mix(in srgb, var(--vscode-panel-border) 90%, var(--vscode-button-background));\n    border-radius: var(--border-radius);\n    overflow: hidden;\n    background: color-mix(in srgb, var(--vscode-editor-background) 97%, var(--vscode-button-background));\n    box-shadow: var(--shadow-sm);\n    transition: all var(--transition-speed) cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.result-section:hover {\n    box-shadow: var(--shadow-md);\n    transform: translateY(-1px);\n}\n\n.result-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-color: color-mix(in srgb, var(--vscode-editor-background) 95%, var(--vscode-button-background));\n    padding: 12px 16px;\n    border-bottom: 1px solid color-mix(in srgb, var(--vscode-panel-border) 90%, var(--vscode-button-background));\n}\n\n.result-header h3 {\n    margin: 0;\n    font-size: 14px;\n    font-weight: 600;\n    opacity: 0.95;\n    letter-spacing: -0.01em;\n}\n\n.result-content {\n    padding: 18px;\n    background-color: var(--vscode-editor-background);\n    white-space: pre-wrap;\n    line-height: 1.6;\n}\n\n.title-content {\n    font-weight: 600;\n    font-size: 18px;\n    letter-spacing: -0.01em;\n}\n\n.description-content {\n    max-height: 500px;\n    overflow-y: auto;\n    padding-right: 8px;\n}\n\n.description-content::-webkit-scrollbar {\n    width: 8px;\n}\n\n.description-content::-webkit-scrollbar-track {\n    background: transparent;\n}\n\n.description-content::-webkit-scrollbar-thumb {\n    background-color: color-mix(in srgb, var(--vscode-scrollbarSlider-background) 90%, transparent);\n    border-radius: 4px;\n}\n\n.description-content::-webkit-scrollbar-thumb:hover {\n    background-color: var(--vscode-scrollbarSlider-hoverBackground);\n}\n\n.copy-button, .copy-all-button {\n    background: color-mix(in srgb, var(--vscode-button-secondaryBackground) 97%, transparent);\n    color: var(--vscode-button-secondaryForeground);\n    border: 1px solid color-mix(in srgb, var(--vscode-button-secondaryBackground) 80%, transparent);\n    padding: 4px 10px;\n    border-radius: var(--border-radius-sm);\n    cursor: pointer;\n    font-size: 12px;\n    transition: all var(--transition-speed) cubic-bezier(0.4, 0, 0.2, 1);\n    display: flex;\n    align-items: center;\n    gap: 6px;\n}\n\n.copy-button:before {\n    content: \"📋\";\n    font-size: 12px;\n    opacity: 0.9;\n}\n\n.copy-button:hover, .copy-all-button:hover {\n    background: var(--vscode-button-secondaryHoverBackground);\n    transform: translateY(-1px);\n    border-color: var(--vscode-button-secondaryBackground);\n}\n\n.copy-button:active, .copy-all-button:active {\n    transform: translateY(0);\n}\n\n.copy-all {\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 20px;\n}\n\n.copy-all-button {\n    padding: 8px 16px;\n    font-size: 13px;\n    background: var(--gradient-primary);\n    color: var(--vscode-button-foreground);\n    font-weight: 500;\n    border: none;\n    box-shadow: var(--shadow-sm);\n}\n\n.copy-all-button:before {\n    content: \"📋\";\n    font-size: 14px;\n}\n\n.copy-all-button:hover {\n    background: var(--gradient-hover);\n    transform: translateY(-1px);\n    box-shadow: var(--shadow-md);\n}\n\n/* Markdown Styles */\n.markdown-body {\n    line-height: 1.6;\n    font-size: 14px;\n}\n\n.markdown-body h1,\n.markdown-body h2,\n.markdown-body h3 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    font-weight: 600;\n    line-height: 1.25;\n    letter-spacing: -0.02em;\n}\n\n.markdown-body h1 {\n    font-size: 1.8em;\n    border-bottom: 1px solid var(--vscode-panel-border);\n    padding-bottom: 0.3em;\n}\n\n.markdown-body h2 {\n    font-size: 1.5em;\n    border-bottom: 1px solid var(--vscode-panel-border);\n    padding-bottom: 0.3em;\n}\n\n.markdown-body h3 {\n    font-size: 1.25em;\n}\n\n.markdown-body ul,\n.markdown-body ol {\n    padding-left: 2em;\n    margin-bottom: 16px;\n}\n\n.markdown-body li {\n    margin-bottom: 6px;\n}\n\n.markdown-body code {\n    padding: 0.2em 0.4em;\n    margin: 0;\n    font-size: 85%;\n    background-color: color-mix(in srgb, var(--vscode-textCodeBlock-background) 97%, var(--vscode-button-background));\n    border-radius: 4px;\n    font-family: var(--vscode-editor-font-family);\n}\n\n.markdown-body pre {\n    padding: 16px;\n    overflow: auto;\n    font-size: 85%;\n    line-height: 1.45;\n    background-color: var(--vscode-textCodeBlock-background);\n    border-radius: var(--border-radius-sm);\n    margin-bottom: 16px;\n    border: 1px solid color-mix(in srgb, var(--vscode-panel-border) 90%, transparent);\n}\n\n.markdown-body p {\n    margin-bottom: 16px;\n    margin-top: 0;\n}\n\n.markdown-body blockquote {\n    padding: 0.8em 1em;\n    color: var(--vscode-foreground);\n    opacity: 0.8;\n    border-left: 3px solid var(--vscode-button-background);\n    margin: 0 0 16px 0;\n    background: color-mix(in srgb, var(--vscode-editor-background) 97%, var(--vscode-button-background));\n    border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/webviews/pr-description/PrDescriptionApp.tsx":
/*!**********************************************************!*\
  !*** ./src/webviews/pr-description/PrDescriptionApp.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrDescriptionApp: () => (/* binding */ PrDescriptionApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/hooks/useVSCodeAPI */ "./src/webviews/shared/hooks/useVSCodeAPI.ts");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components */ "./src/webviews/shared/components/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/webviews/pr-description/components/index.ts");
/* harmony import */ var _styles_pr_description_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/pr-description.css */ "./src/webviews/pr-description/styles/pr-description.css");






function PrDescriptionApp() {
    const { postMessage } = (0,_shared_hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__.useVSCodeAPI)();
    const { isLoading, startLoading, stopLoading } = (0,_shared_hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__.useLoadingState)();
    const { error, setError, clearError } = (0,_shared_hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__.useErrorState)();
    const [branches, setBranches] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [sourceBranch, setSourceBranch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [targetBranch, setTargetBranch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
    const [selectedModel, setSelectedModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('gpt-4o-mini');
    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    // Get models from shared config
    const models = window.sharedModelConfig?.models || [];
    // Handle messages from extension
    const handleMessage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((message) => {
        switch (message.command) {
            case 'branchesList':
                setBranches(message.branches || []);
                setSourceBranch(message.currentBranch || '');
                // Set the selected model if provided from backend
                if (message.languageModel) {
                    setSelectedModel(message.languageModel);
                }
                // First check for defaultTargetBranch from config
                if (message.defaultTargetBranch && message.branches?.includes(message.defaultTargetBranch)) {
                    setTargetBranch(message.defaultTargetBranch);
                }
                else {
                    // Fall back to main/master/develop if available
                    const defaultTarget = message.branches?.find((b) => ['main', 'master', 'develop'].includes(b.toLowerCase()));
                    setTargetBranch(defaultTarget || '');
                }
                break;
            case 'startLoading':
                startLoading();
                clearError();
                setResult(null);
                break;
            case 'stopLoading':
                stopLoading();
                break;
            case 'error':
                setError(message.error || 'An unknown error occurred');
                stopLoading();
                break;
            case 'generationComplete':
                // Ensure we have valid data before updating the state
                if (message.result) {
                    // Sanitize the result to ensure it has the correct properties
                    const sanitizedResult = {
                        title: sanitizeText(message.result.title || ''),
                        description: sanitizeText(message.result.description || ''),
                    };
                    setResult(sanitizedResult);
                }
                else {
                    setError('Received empty result from the server');
                }
                stopLoading();
                break;
        }
    }, [startLoading, stopLoading, setError, clearError]);
    (0,_shared_hooks_useVSCodeAPI__WEBPACK_IMPORTED_MODULE_2__.useMessageListener)(handleMessage);
    // Initial load - request branches
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        postMessage({ command: 'getBranches' });
    }, [postMessage]);
    // Sanitize text content to ensure it's properly displayed
    const sanitizeText = (text) => {
        if (!text)
            return '';
        // Remove any JSON wrapper if present (sometimes occurs with Claude responses)
        if (text.includes('"title"') && text.includes('"description"')) {
            try {
                const jsonObj = JSON.parse(text);
                return jsonObj.description || text;
            }
            catch (e) {
                // Not valid JSON, continue with original text
            }
        }
        return text;
    };
    // Generate PR description
    const handleGenerate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        if (!sourceBranch || !targetBranch) {
            setError('Please select both source and target branches');
            return;
        }
        clearError();
        const message = {
            command: 'generatePrDescription',
            sourceBranch,
            targetBranch,
            data: { modelFamily: selectedModel }
        };
        // The backend expects these properties directly on the message object
        message.modelFamily = selectedModel;
        postMessage(message);
    }, [sourceBranch, targetBranch, selectedModel, postMessage, setError, clearError]);
    // Copy to clipboard
    const handleCopy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((text) => {
        const message = {
            command: 'copyToClipboard',
            data: { text }
        };
        // The backend expects the text directly on the message object
        message.text = text;
        postMessage(message);
    }, [postMessage]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "container", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", { className: "heading", children: "PR Description Generator" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__.BranchSelection, { branches: branches, sourceBranch: sourceBranch, targetBranch: targetBranch, onSourceBranchChange: setSourceBranch, onTargetBranchChange: setTargetBranch }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__.GenerationForm, { models: models, selectedModel: selectedModel, onModelChange: setSelectedModel, onGenerate: handleGenerate, isLoading: isLoading, canGenerate: !!(sourceBranch && targetBranch) }), error && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "error", children: error })), isLoading && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "loading", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components__WEBPACK_IMPORTED_MODULE_3__.LoadingSpinner, { size: "medium" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: "Analyzing changes and generating description..." })] })), result && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components__WEBPACK_IMPORTED_MODULE_4__.ResultDisplay, { result: result, onCopy: handleCopy }))] }));
}


/***/ }),

/***/ "./src/webviews/pr-description/components/BranchSelection.tsx":
/*!********************************************************************!*\
  !*** ./src/webviews/pr-description/components/BranchSelection.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BranchSelection: () => (/* binding */ BranchSelection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components */ "./src/webviews/shared/components/index.ts");


function BranchSelection({ branches, sourceBranch, targetBranch, onSourceBranchChange, onTargetBranchChange }) {
    // Filter target branches to exclude the selected source branch
    const availableTargetBranches = branches.filter(branch => branch !== sourceBranch);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "branch-selection", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components__WEBPACK_IMPORTED_MODULE_1__.BranchSelector, { branches: branches, selectedBranch: sourceBranch, onBranchChange: onSourceBranchChange, label: "Source Branch (with changes)" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components__WEBPACK_IMPORTED_MODULE_1__.BranchSelector, { branches: availableTargetBranches, selectedBranch: targetBranch, onBranchChange: onTargetBranchChange, label: "Target Branch (merge into)" })] }));
}


/***/ }),

/***/ "./src/webviews/pr-description/components/GenerationForm.tsx":
/*!*******************************************************************!*\
  !*** ./src/webviews/pr-description/components/GenerationForm.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GenerationForm: () => (/* binding */ GenerationForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components */ "./src/webviews/shared/components/index.ts");


function GenerationForm({ models, selectedModel, onModelChange, onGenerate, isLoading, canGenerate }) {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "generation-form", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components__WEBPACK_IMPORTED_MODULE_1__.ModelSelector, { models: models, selectedModel: selectedModel, onModelChange: onModelChange }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_components__WEBPACK_IMPORTED_MODULE_1__.Button, { variant: "primary", onClick: onGenerate, disabled: isLoading || !canGenerate, loading: isLoading, className: "generate-button", children: isLoading ? ('Generating...') : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "icon", children: "\u2728" }), "Generate PR Description"] })) })] }));
}


/***/ }),

/***/ "./src/webviews/pr-description/components/ResultDisplay.tsx":
/*!******************************************************************!*\
  !*** ./src/webviews/pr-description/components/ResultDisplay.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResultDisplay: () => (/* binding */ ResultDisplay)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js");

function ResultDisplay({ result, onCopy }) {
    // Safely render markdown content
    const renderMarkdown = (content) => {
        try {
            if (window.marked?.parse) {
                return { __html: window.marked.parse(content) };
            }
            return { __html: `<pre>${content}</pre>` };
        }
        catch (err) {
            console.error('Error parsing markdown:', err);
            return { __html: `<pre>${content}</pre>` };
        }
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "results", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "result-section", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "result-header", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "PR Title" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "copy-button", onClick: () => onCopy(result.title), children: "Copy" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "result-content title-content", children: result.title })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "result-section", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "result-header", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children: "PR Description" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "copy-button", onClick: () => onCopy(result.description), children: "Copy" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "result-content description-content markdown-body", dangerouslySetInnerHTML: renderMarkdown(result.description) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "copy-all", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "copy-all-button", onClick: () => onCopy(`# ${result.title}\n\n${result.description}`), children: "Copy Complete PR (Title + Description)" }) })] }));
}


/***/ }),

/***/ "./src/webviews/pr-description/components/index.ts":
/*!*********************************************************!*\
  !*** ./src/webviews/pr-description/components/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BranchSelection: () => (/* reexport safe */ _BranchSelection__WEBPACK_IMPORTED_MODULE_0__.BranchSelection),
/* harmony export */   GenerationForm: () => (/* reexport safe */ _GenerationForm__WEBPACK_IMPORTED_MODULE_1__.GenerationForm),
/* harmony export */   ResultDisplay: () => (/* reexport safe */ _ResultDisplay__WEBPACK_IMPORTED_MODULE_2__.ResultDisplay)
/* harmony export */ });
/* harmony import */ var _BranchSelection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BranchSelection */ "./src/webviews/pr-description/components/BranchSelection.tsx");
/* harmony import */ var _GenerationForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GenerationForm */ "./src/webviews/pr-description/components/GenerationForm.tsx");
/* harmony import */ var _ResultDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResultDisplay */ "./src/webviews/pr-description/components/ResultDisplay.tsx");





/***/ }),

/***/ "./src/webviews/pr-description/index.tsx":
/*!***********************************************!*\
  !*** ./src/webviews/pr-description/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/.pnpm/react@19.1.1/node_modules/react/jsx-runtime.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/.pnpm/react-dom@19.1.1_react@19.1.1/node_modules/react-dom/client.js");
/* harmony import */ var _PrDescriptionApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrDescriptionApp */ "./src/webviews/pr-description/PrDescriptionApp.tsx");



// Initialize React application
const domContainer = document.getElementById('root');
if (domContainer) {
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(domContainer);
    root.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_PrDescriptionApp__WEBPACK_IMPORTED_MODULE_2__.PrDescriptionApp, {}));
}
else {
    console.error('Root element not found');
}


/***/ }),

/***/ "./src/webviews/pr-description/styles/pr-description.css":
/*!***************************************************************!*\
  !*** ./src/webviews/pr-description/styles/pr-description.css ***!
  \***************************************************************/
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
/* harmony import */ var _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_pr_description_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./pr-description.css */ "./node_modules/.pnpm/css-loader@7.1.2_webpack@5.101.3/node_modules/css-loader/dist/cjs.js!./src/webviews/pr-description/styles/pr-description.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_4_0_0_webpack_5_101_3_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_pr_description_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_pr_description_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_pr_description_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_7_1_2_webpack_5_101_3_node_modules_css_loader_dist_cjs_js_pr_description_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 			"pr-description": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors","shared"], () => (__webpack_require__("./src/webviews/pr-description/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHItZGVzY3JpcHRpb24vcHItZGVzY3JpcHRpb24uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3VLO0FBQ2pCO0FBQ3RKLDhCQUE4QixzSUFBMkIsQ0FBQywrSUFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLFNBQVMsWUFBWTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxZQUFZO0FBQ3ZCLFNBQVMsWUFBWTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdIQUF3SCxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLGdDQUFnQyxpQ0FBaUMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxnQ0FBZ0MsaUNBQWlDLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtB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QUVBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSw0Rzs7Ozs7V0NoREEsbUM7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL3ByLWRlc2NyaXB0aW9uL3N0eWxlcy9wci1kZXNjcmlwdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3MvcHItZGVzY3JpcHRpb24vUHJEZXNjcmlwdGlvbkFwcC50c3giLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3MvcHItZGVzY3JpcHRpb24vY29tcG9uZW50cy9CcmFuY2hTZWxlY3Rpb24udHN4Iiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL3ByLWRlc2NyaXB0aW9uL2NvbXBvbmVudHMvR2VuZXJhdGlvbkZvcm0udHN4Iiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzLy4vc3JjL3dlYnZpZXdzL3ByLWRlc2NyaXB0aW9uL2NvbXBvbmVudHMvUmVzdWx0RGlzcGxheS50c3giLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3MvcHItZGVzY3JpcHRpb24vY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy8uL3NyYy93ZWJ2aWV3cy9wci1kZXNjcmlwdGlvbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvLi9zcmMvd2Vidmlld3MvcHItZGVzY3JpcHRpb24vc3R5bGVzL3ByLWRlc2NyaXB0aW9uLmNzcz85ODU3Iiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29waWxvdC1wbHVzLXBsdXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2NvcGlsb3QtcGx1cy1wbHVzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jb3BpbG90LXBsdXMtcGx1cy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS4yX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2Nzcy1sb2FkZXJANy4xLjJfd2VicGFja0A1LjEwMS4zL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC0tY29udGFpbmVyLXBhZGRpbmc6IDI0cHg7XG4gICAgLS1pbnB1dC1wYWRkaW5nLXZlcnRpY2FsOiA4cHg7XG4gICAgLS1pbnB1dC1wYWRkaW5nLWhvcml6b250YWw6IDEycHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgLS1ib3JkZXItcmFkaXVzLXNtOiA2cHg7XG4gICAgLS10cmFuc2l0aW9uLXNwZWVkOiAwLjJzO1xuICAgIC0tc2hhZG93LXNtOiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA2KTtcbiAgICAtLXNoYWRvdy1tZDogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAtLXNoYWRvdy1sZzogMCAxMHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIC0tZ3JhZGllbnQtcHJpbWFyeTogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKSwgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXZzY29kZS1idXR0b24tYmFja2dyb3VuZCkgODUlLCBibGFjaykpO1xuICAgIC0tZ3JhZGllbnQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS12c2NvZGUtYnV0dG9uLWJhY2tncm91bmQpIDg1JSwgd2hpdGUpLCB2YXIoLS12c2NvZGUtYnV0dG9uLWJhY2tncm91bmQpKTtcbn1cblxuYm9keSB7XG4gICAgcGFkZGluZzogMCB2YXIoLS1jb250YWluZXItcGFkZGluZyk7XG4gICAgY29sb3I6IHZhcigtLXZzY29kZS1mb3JlZ3JvdW5kKTtcbiAgICBmb250LXNpemU6IHZhcigtLXZzY29kZS1mb250LXNpemUpO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS12c2NvZGUtZm9udC13ZWlnaHQpO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS12c2NvZGUtZm9udC1mYW1pbHkpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1lZGl0b3ItYmFja2dyb3VuZCk7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAyNHB4IDA7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlLW91dDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW4ge1xuICAgIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7IH1cbiAgICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxufVxuXG4uaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLXBhbmVsLWJvcmRlcik7XG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgb3BhY2l0eTogMC45NTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbn1cblxuLmJyYW5jaC1zZWxlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpIDk3JSwgdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXZzY29kZS1wYW5lbC1ib3JkZXIpIDkwJSwgdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKSk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbn1cblxuLmJyYW5jaC1zZWxlY3Rpb246aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgYm9yZGVyLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tdnNjb2RlLXBhbmVsLWJvcmRlcikgNzUlLCB2YXIoLS12c2NvZGUtYnV0dG9uLWJhY2tncm91bmQpKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG59XG5cbi5nZW5lcmF0aW9uLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICAgIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpIDk3JSwgdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXZzY29kZS1wYW5lbC1ib3JkZXIpIDkwJSwgdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKSk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbn1cblxuLmdlbmVyYXRpb24tZm9ybTpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICBib3JkZXItY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS12c2NvZGUtcGFuZWwtYm9yZGVyKSA3NSUsIHZhcigtLXZzY29kZS1idXR0b24tYmFja2dyb3VuZCkpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLmdlbmVyYXRlLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1mb3JlZ3JvdW5kKTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1zbSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG4gICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xufVxuXG4uZ2VuZXJhdGUtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1ob3Zlcik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG59XG5cbi5nZW5lcmF0ZS1idXR0b246YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbn1cblxuLmdlbmVyYXRlLWJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5lcnJvciB7XG4gICAgY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS12c2NvZGUtaW5wdXRWYWxpZGF0aW9uLWVycm9yQmFja2dyb3VuZCkgOTUlLCB0cmFuc3BhcmVudCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLWlucHV0VmFsaWRhdGlvbi1lcnJvckJvcmRlcik7XG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1zbSk7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgYW5pbWF0aW9uOiBzbGlkZUluIDAuM3MgZWFzZS1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbiB7XG4gICAgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7IH1cbiAgICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxufVxuXG4uZXJyb3I6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIuKaoO+4j1wiO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmxvYWRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbiAgICBwYWRkaW5nOiAzMnB4O1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC4zcyBlYXNlLW91dDtcbn1cblxuLnJlc3VsdHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDI0cHg7XG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC40cyBlYXNlLW91dDtcbn1cblxuLnJlc3VsdC1zZWN0aW9uIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tdnNjb2RlLXBhbmVsLWJvcmRlcikgOTAlLCB2YXIoLS12c2NvZGUtYnV0dG9uLWJhY2tncm91bmQpKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpIDk3JSwgdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKSk7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbn1cblxuLnJlc3VsdC1zZWN0aW9uOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbn1cblxuLnJlc3VsdC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXZzY29kZS1lZGl0b3ItYmFja2dyb3VuZCkgOTUlLCB2YXIoLS12c2NvZGUtYnV0dG9uLWJhY2tncm91bmQpKTtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS12c2NvZGUtcGFuZWwtYm9yZGVyKSA5MCUsIHZhcigtLXZzY29kZS1idXR0b24tYmFja2dyb3VuZCkpO1xufVxuXG4ucmVzdWx0LWhlYWRlciBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG9wYWNpdHk6IDAuOTU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XG59XG5cbi5yZXN1bHQtY29udGVudCB7XG4gICAgcGFkZGluZzogMThweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xufVxuXG4udGl0bGUtY29udGVudCB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XG59XG5cbi5kZXNjcmlwdGlvbi1jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cblxuLmRlc2NyaXB0aW9uLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogOHB4O1xufVxuXG4uZGVzY3JpcHRpb24tY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZGVzY3JpcHRpb24tY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS12c2NvZGUtc2Nyb2xsYmFyU2xpZGVyLWJhY2tncm91bmQpIDkwJSwgdHJhbnNwYXJlbnQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmRlc2NyaXB0aW9uLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtc2Nyb2xsYmFyU2xpZGVyLWhvdmVyQmFja2dyb3VuZCk7XG59XG5cbi5jb3B5LWJ1dHRvbiwgLmNvcHktYWxsLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5QmFja2dyb3VuZCkgOTclLCB0cmFuc3BhcmVudCk7XG4gICAgY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5Rm9yZWdyb3VuZCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5QmFja2dyb3VuZCkgODAlLCB0cmFuc3BhcmVudCk7XG4gICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1zbSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA2cHg7XG59XG5cbi5jb3B5LWJ1dHRvbjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwi8J+Ti1wiO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBvcGFjaXR5OiAwLjk7XG59XG5cbi5jb3B5LWJ1dHRvbjpob3ZlciwgLmNvcHktYWxsLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdnNjb2RlLWJ1dHRvbi1zZWNvbmRhcnlIb3ZlckJhY2tncm91bmQpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5QmFja2dyb3VuZCk7XG59XG5cbi5jb3B5LWJ1dHRvbjphY3RpdmUsIC5jb3B5LWFsbC1idXR0b246YWN0aXZlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG5cbi5jb3B5LWFsbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5jb3B5LWFsbC1idXR0b24ge1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICBjb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1mb3JlZ3JvdW5kKTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xufVxuXG4uY29weS1hbGwtYnV0dG9uOmJlZm9yZSB7XG4gICAgY29udGVudDogXCLwn5OLXCI7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY29weS1hbGwtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1ob3Zlcik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG59XG5cbi8qIE1hcmtkb3duIFN0eWxlcyAqL1xuLm1hcmtkb3duLWJvZHkge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWFya2Rvd24tYm9keSBoMSxcbi5tYXJrZG93bi1ib2R5IGgyLFxuLm1hcmtkb3duLWJvZHkgaDMge1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xufVxuXG4ubWFya2Rvd24tYm9keSBoMSB7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLXBhbmVsLWJvcmRlcik7XG4gICAgcGFkZGluZy1ib3R0b206IDAuM2VtO1xufVxuXG4ubWFya2Rvd24tYm9keSBoMiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLXBhbmVsLWJvcmRlcik7XG4gICAgcGFkZGluZy1ib3R0b206IDAuM2VtO1xufVxuXG4ubWFya2Rvd24tYm9keSBoMyB7XG4gICAgZm9udC1zaXplOiAxLjI1ZW07XG59XG5cbi5tYXJrZG93bi1ib2R5IHVsLFxuLm1hcmtkb3duLWJvZHkgb2wge1xuICAgIHBhZGRpbmctbGVmdDogMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5tYXJrZG93bi1ib2R5IGxpIHtcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5tYXJrZG93bi1ib2R5IGNvZGUge1xuICAgIHBhZGRpbmc6IDAuMmVtIDAuNGVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDg1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tdnNjb2RlLXRleHRDb2RlQmxvY2stYmFja2dyb3VuZCkgOTclLCB2YXIoLS12c2NvZGUtYnV0dG9uLWJhY2tncm91bmQpKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXZzY29kZS1lZGl0b3ItZm9udC1mYW1pbHkpO1xufVxuXG4ubWFya2Rvd24tYm9keSBwcmUge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZm9udC1zaXplOiA4NSU7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLXRleHRDb2RlQmxvY2stYmFja2dyb3VuZCk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1zbSk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tdnNjb2RlLXBhbmVsLWJvcmRlcikgOTAlLCB0cmFuc3BhcmVudCk7XG59XG5cbi5tYXJrZG93bi1ib2R5IHAge1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm1hcmtkb3duLWJvZHkgYmxvY2txdW90ZSB7XG4gICAgcGFkZGluZzogMC44ZW0gMWVtO1xuICAgIGNvbG9yOiB2YXIoLS12c2NvZGUtZm9yZWdyb3VuZCk7XG4gICAgb3BhY2l0eTogMC44O1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4IDA7XG4gICAgYmFja2dyb3VuZDogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXZzY29kZS1lZGl0b3ItYmFja2dyb3VuZCkgOTclLCB2YXIoLS12c2NvZGUtYnV0dG9uLWJhY2tncm91bmQpKTtcbiAgICBib3JkZXItcmFkaXVzOiAwIHZhcigtLWJvcmRlci1yYWRpdXMtc20pIHZhcigtLWJvcmRlci1yYWRpdXMtc20pIDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvd2Vidmlld3MvcHItZGVzY3JpcHRpb24vc3R5bGVzL3ByLWRlc2NyaXB0aW9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHlCQUF5QjtJ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QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtREFBbUQ7SUFDbkQscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1EQUFtRDtJQUNuRCxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixTQUFTO0lBQ1QsY0FBYztJQUNkLGlIQUFpSDtJQUNqSCxrQkFBa0I7SUFDbEIsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLHdEQUF3RDtJQUN4RCxzQ0FBc0M7SUFDdEMsbUJBQW1CO0lBQ25CLGlGQUFpRjtBQUNyRjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osc0RBQXNEO0lBQ3RELGtCQUFrQjtJQUNsQixvR0FBb0c7SUFDcEcsa0VBQWtFO0FBQ3RFXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1jb250YWluZXItcGFkZGluZzogMjRweDtcXG4gICAgLS1pbnB1dC1wYWRkaW5nLXZlcnRpY2FsOiA4cHg7XFxuICAgIC0taW5wdXQtcGFkZGluZy1ob3Jpem9udGFsOiAxMnB4O1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgLS1ib3JkZXItcmFkaXVzLXNtOiA2cHg7XFxuICAgIC0tdHJhbnNpdGlvbi1zcGVlZDogMC4ycztcXG4gICAgLS1zaGFkb3ctc206IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xcbiAgICAtLXNoYWRvdy1tZDogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgLS1zaGFkb3ctbGc6IDAgMTBweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgLS1ncmFkaWVudC1wcmltYXJ5OiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCB2YXIoLS12c2NvZGUtYnV0dG9uLWJhY2tncm91bmQpLCBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKSA4NSUsIGJsYWNrKSk7XFxuICAgIC0tZ3JhZGllbnQtaG92ZXI6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS12c2NvZGUtYnV0dG9uLWJhY2tncm91bmQpIDg1JSwgd2hpdGUpLCB2YXIoLS12c2NvZGUtYnV0dG9uLWJhY2tncm91bmQpKTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHBhZGRpbmc6IDAgdmFyKC0tY29udGFpbmVyLXBhZGRpbmcpO1xcbiAgICBjb2xvcjogdmFyKC0tdnNjb2RlLWZvcmVncm91bmQpO1xcbiAgICBmb250LXNpemU6IHZhcigtLXZzY29kZS1mb250LXNpemUpO1xcbiAgICBmb250LXdlaWdodDogdmFyKC0tdnNjb2RlLWZvbnQtd2VpZ2h0KTtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXZzY29kZS1mb250LWZhbWlseSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXZzY29kZS1lZGl0b3ItYmFja2dyb3VuZCk7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogMjRweCAwO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7IH1cXG4gICAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cXG59XFxuXFxuLmhlYWRpbmcge1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtcGFuZWwtYm9yZGVyKTtcXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XFxuICAgIG9wYWNpdHk6IDAuOTU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xcbn1cXG5cXG4uYnJhbmNoLXNlbGVjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMThweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjhweDtcXG4gICAgcGFkZGluZzogMjRweDtcXG4gICAgYmFja2dyb3VuZDogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXZzY29kZS1lZGl0b3ItYmFja2dyb3VuZCkgOTclLCB2YXIoLS12c2NvZGUtYnV0dG9uLWJhY2tncm91bmQpKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXZzY29kZS1wYW5lbC1ib3JkZXIpIDkwJSwgdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG59XFxuXFxuLmJyYW5jaC1zZWxlY3Rpb246aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xcbiAgICBib3JkZXItY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS12c2NvZGUtcGFuZWwtYm9yZGVyKSA3NSUsIHZhcigtLXZzY29kZS1idXR0b24tYmFja2dyb3VuZCkpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxufVxcblxcbi5nZW5lcmF0aW9uLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE4cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XFxuICAgIHBhZGRpbmc6IDI0cHg7XFxuICAgIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpIDk3JSwgdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS12c2NvZGUtcGFuZWwtYm9yZGVyKSA5MCUsIHZhcigtLXZzY29kZS1idXR0b24tYmFja2dyb3VuZCkpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxufVxcblxcbi5nZW5lcmF0aW9uLWZvcm06aG92ZXIge1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xcbiAgICBib3JkZXItY29sb3I6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS12c2NvZGUtcGFuZWwtYm9yZGVyKSA3NSUsIHZhcigtLXZzY29kZS1idXR0b24tYmFja2dyb3VuZCkpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxufVxcblxcbi5nZW5lcmF0ZS1idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcXG4gICAgY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tZm9yZWdyb3VuZCk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMtc20pO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogOHB4O1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XFxufVxcblxcbi5nZW5lcmF0ZS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1ob3Zlcik7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcXG59XFxuXFxuLmdlbmVyYXRlLWJ1dHRvbjphY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XFxufVxcblxcbi5nZW5lcmF0ZS1idXR0b246ZGlzYWJsZWQge1xcbiAgICBvcGFjaXR5OiAwLjY7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgY29sb3I6IHZhcigtLXZzY29kZS1lcnJvckZvcmVncm91bmQpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tdnNjb2RlLWlucHV0VmFsaWRhdGlvbi1lcnJvckJhY2tncm91bmQpIDk1JSwgdHJhbnNwYXJlbnQpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS12c2NvZGUtaW5wdXRWYWxpZGF0aW9uLWVycm9yQm9yZGVyKTtcXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzLXNtKTtcXG4gICAgZm9udC1zaXplOiAxM3B4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGFuaW1hdGlvbjogc2xpZGVJbiAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlSW4ge1xcbiAgICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTsgfVxcbiAgICB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxcbn1cXG5cXG4uZXJyb3I6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIuKaoO+4j1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmxvYWRpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDMycHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAwLjNzIGVhc2Utb3V0O1xcbn1cXG5cXG4ucmVzdWx0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjRweDtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMC40cyBlYXNlLW91dDtcXG59XFxuXFxuLnJlc3VsdC1zZWN0aW9uIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXZzY29kZS1wYW5lbC1ib3JkZXIpIDkwJSwgdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tdnNjb2RlLWVkaXRvci1iYWNrZ3JvdW5kKSA5NyUsIHZhcigtLXZzY29kZS1idXR0b24tYmFja2dyb3VuZCkpO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG59XFxuXFxuLnJlc3VsdC1zZWN0aW9uOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcbn1cXG5cXG4ucmVzdWx0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXZzY29kZS1lZGl0b3ItYmFja2dyb3VuZCkgOTUlLCB2YXIoLS12c2NvZGUtYnV0dG9uLWJhY2tncm91bmQpKTtcXG4gICAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXZzY29kZS1wYW5lbC1ib3JkZXIpIDkwJSwgdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKSk7XFxufVxcblxcbi5yZXN1bHQtaGVhZGVyIGgzIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIG9wYWNpdHk6IDAuOTU7XFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xcbn1cXG5cXG4ucmVzdWx0LWNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpO1xcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxufVxcblxcbi50aXRsZS1jb250ZW50IHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWNvbnRlbnQge1xcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogOHB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24tY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXZzY29kZS1zY3JvbGxiYXJTbGlkZXItYmFja2dyb3VuZCkgOTAlLCB0cmFuc3BhcmVudCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdnNjb2RlLXNjcm9sbGJhclNsaWRlci1ob3ZlckJhY2tncm91bmQpO1xcbn1cXG5cXG4uY29weS1idXR0b24sIC5jb3B5LWFsbC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kOiBjb2xvci1taXgoaW4gc3JnYiwgdmFyKC0tdnNjb2RlLWJ1dHRvbi1zZWNvbmRhcnlCYWNrZ3JvdW5kKSA5NyUsIHRyYW5zcGFyZW50KTtcXG4gICAgY29sb3I6IHZhcigtLXZzY29kZS1idXR0b24tc2Vjb25kYXJ5Rm9yZWdyb3VuZCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS12c2NvZGUtYnV0dG9uLXNlY29uZGFyeUJhY2tncm91bmQpIDgwJSwgdHJhbnNwYXJlbnQpO1xcbiAgICBwYWRkaW5nOiA0cHggMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1zbSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA2cHg7XFxufVxcblxcbi5jb3B5LWJ1dHRvbjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwi8J+Ti1xcXCI7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgb3BhY2l0eTogMC45O1xcbn1cXG5cXG4uY29weS1idXR0b246aG92ZXIsIC5jb3B5LWFsbC1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS12c2NvZGUtYnV0dG9uLXNlY29uZGFyeUhvdmVyQmFja2dyb3VuZCk7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS12c2NvZGUtYnV0dG9uLXNlY29uZGFyeUJhY2tncm91bmQpO1xcbn1cXG5cXG4uY29weS1idXR0b246YWN0aXZlLCAuY29weS1hbGwtYnV0dG9uOmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG59XFxuXFxuLmNvcHktYWxsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmNvcHktYWxsLWJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xcbiAgICBmb250LXNpemU6IDEzcHg7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xcbiAgICBjb2xvcjogdmFyKC0tdnNjb2RlLWJ1dHRvbi1mb3JlZ3JvdW5kKTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xcbn1cXG5cXG4uY29weS1hbGwtYnV0dG9uOmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCLwn5OLXFxcIjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4uY29weS1hbGwtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtaG92ZXIpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XFxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XFxufVxcblxcbi8qIE1hcmtkb3duIFN0eWxlcyAqL1xcbi5tYXJrZG93bi1ib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBoMSxcXG4ubWFya2Rvd24tYm9keSBoMixcXG4ubWFya2Rvd24tYm9keSBoMyB7XFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDEge1xcbiAgICBmb250LXNpemU6IDEuOGVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLXBhbmVsLWJvcmRlcik7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjNlbTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDIge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdnNjb2RlLXBhbmVsLWJvcmRlcik7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwLjNlbTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgaDMge1xcbiAgICBmb250LXNpemU6IDEuMjVlbTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgdWwsXFxuLm1hcmtkb3duLWJvZHkgb2wge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgbGkge1xcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGNvZGUge1xcbiAgICBwYWRkaW5nOiAwLjJlbSAwLjRlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDg1JTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29sb3ItbWl4KGluIHNyZ2IsIHZhcigtLXZzY29kZS10ZXh0Q29kZUJsb2NrLWJhY2tncm91bmQpIDk3JSwgdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXZzY29kZS1lZGl0b3ItZm9udC1mYW1pbHkpO1xcbn1cXG5cXG4ubWFya2Rvd24tYm9keSBwcmUge1xcbiAgICBwYWRkaW5nOiAxNnB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZm9udC1zaXplOiA4NSU7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjQ1O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS12c2NvZGUtdGV4dENvZGVCbG9jay1iYWNrZ3JvdW5kKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1zbSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS12c2NvZGUtcGFuZWwtYm9yZGVyKSA5MCUsIHRyYW5zcGFyZW50KTtcXG59XFxuXFxuLm1hcmtkb3duLWJvZHkgcCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxufVxcblxcbi5tYXJrZG93bi1ib2R5IGJsb2NrcXVvdGUge1xcbiAgICBwYWRkaW5nOiAwLjhlbSAxZW07XFxuICAgIGNvbG9yOiB2YXIoLS12c2NvZGUtZm9yZWdyb3VuZCk7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS12c2NvZGUtYnV0dG9uLWJhY2tncm91bmQpO1xcbiAgICBtYXJnaW46IDAgMCAxNnB4IDA7XFxuICAgIGJhY2tncm91bmQ6IGNvbG9yLW1peChpbiBzcmdiLCB2YXIoLS12c2NvZGUtZWRpdG9yLWJhY2tncm91bmQpIDk3JSwgdmFyKC0tdnNjb2RlLWJ1dHRvbi1iYWNrZ3JvdW5kKSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAgdmFyKC0tYm9yZGVyLXJhZGl1cy1zbSkgdmFyKC0tYm9yZGVyLXJhZGl1cy1zbSkgMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFxuICB1c2VWU0NvZGVBUEksIFxuICB1c2VNZXNzYWdlTGlzdGVuZXIsIFxuICB1c2VMb2FkaW5nU3RhdGUsIFxuICB1c2VFcnJvclN0YXRlIFxufSBmcm9tICcuLi9zaGFyZWQvaG9va3MvdXNlVlNDb2RlQVBJJztcbmltcG9ydCB7IFxuICBNb2RlbFNlbGVjdG9yLCBcbiAgQnJhbmNoU2VsZWN0b3IsIFxuICBCdXR0b24sIFxuICBMb2FkaW5nU3Bpbm5lciBcbn0gZnJvbSAnLi4vc2hhcmVkL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgXG4gIEV4dGVuc2lvbk1lc3NhZ2UsIFxuICBNb2RlbENvbmZpZywgXG4gIFdlYnZpZXdSZXF1ZXN0IFxufSBmcm9tICcuLi9zaGFyZWQvdHlwZXMnO1xuaW1wb3J0IHsgQnJhbmNoU2VsZWN0aW9uLCBHZW5lcmF0aW9uRm9ybSwgUmVzdWx0RGlzcGxheSB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgJy4vc3R5bGVzL3ByLWRlc2NyaXB0aW9uLmNzcyc7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgc2hhcmVkTW9kZWxDb25maWc/OiB7XG4gICAgICBtb2RlbHM6IE1vZGVsQ29uZmlnW107XG4gICAgfTtcbiAgICBtYXJrZWQ/OiB7XG4gICAgICBwYXJzZTogKGNvbnRlbnQ6IHN0cmluZykgPT4gc3RyaW5nO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQclJlc3VsdCB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQckRlc2NyaXB0aW9uQXBwKCkge1xuICBjb25zdCB7IHBvc3RNZXNzYWdlIH0gPSB1c2VWU0NvZGVBUEkoKTtcbiAgY29uc3QgeyBpc0xvYWRpbmcsIHN0YXJ0TG9hZGluZywgc3RvcExvYWRpbmcgfSA9IHVzZUxvYWRpbmdTdGF0ZSgpO1xuICBjb25zdCB7IGVycm9yLCBzZXRFcnJvciwgY2xlYXJFcnJvciB9ID0gdXNlRXJyb3JTdGF0ZSgpO1xuICBcbiAgY29uc3QgW2JyYW5jaGVzLCBzZXRCcmFuY2hlc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xuICBjb25zdCBbc291cmNlQnJhbmNoLCBzZXRTb3VyY2VCcmFuY2hdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdGFyZ2V0QnJhbmNoLCBzZXRUYXJnZXRCcmFuY2hdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VsZWN0ZWRNb2RlbCwgc2V0U2VsZWN0ZWRNb2RlbF0gPSB1c2VTdGF0ZSgnZ3B0LTRvLW1pbmknKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlPFByUmVzdWx0IHwgbnVsbD4obnVsbCk7XG5cbiAgLy8gR2V0IG1vZGVscyBmcm9tIHNoYXJlZCBjb25maWdcbiAgY29uc3QgbW9kZWxzID0gd2luZG93LnNoYXJlZE1vZGVsQ29uZmlnPy5tb2RlbHMgfHwgW107XG5cbiAgLy8gSGFuZGxlIG1lc3NhZ2VzIGZyb20gZXh0ZW5zaW9uXG4gIGNvbnN0IGhhbmRsZU1lc3NhZ2UgPSB1c2VDYWxsYmFjaygobWVzc2FnZTogRXh0ZW5zaW9uTWVzc2FnZSkgPT4ge1xuICAgIHN3aXRjaCAobWVzc2FnZS5jb21tYW5kKSB7XG4gICAgICBjYXNlICdicmFuY2hlc0xpc3QnOlxuICAgICAgICBzZXRCcmFuY2hlcyhtZXNzYWdlLmJyYW5jaGVzIHx8IFtdKTtcbiAgICAgICAgc2V0U291cmNlQnJhbmNoKG1lc3NhZ2UuY3VycmVudEJyYW5jaCB8fCAnJyk7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBzZWxlY3RlZCBtb2RlbCBpZiBwcm92aWRlZCBmcm9tIGJhY2tlbmRcbiAgICAgICAgaWYgKG1lc3NhZ2UubGFuZ3VhZ2VNb2RlbCkge1xuICAgICAgICAgIHNldFNlbGVjdGVkTW9kZWwobWVzc2FnZS5sYW5ndWFnZU1vZGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZpcnN0IGNoZWNrIGZvciBkZWZhdWx0VGFyZ2V0QnJhbmNoIGZyb20gY29uZmlnXG4gICAgICAgIGlmIChtZXNzYWdlLmRlZmF1bHRUYXJnZXRCcmFuY2ggJiYgbWVzc2FnZS5icmFuY2hlcz8uaW5jbHVkZXMobWVzc2FnZS5kZWZhdWx0VGFyZ2V0QnJhbmNoKSkge1xuICAgICAgICAgIHNldFRhcmdldEJyYW5jaChtZXNzYWdlLmRlZmF1bHRUYXJnZXRCcmFuY2gpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEZhbGwgYmFjayB0byBtYWluL21hc3Rlci9kZXZlbG9wIGlmIGF2YWlsYWJsZVxuICAgICAgICAgIGNvbnN0IGRlZmF1bHRUYXJnZXQgPSBtZXNzYWdlLmJyYW5jaGVzPy5maW5kKChiKSA9PlxuICAgICAgICAgICAgWydtYWluJywgJ21hc3RlcicsICdkZXZlbG9wJ10uaW5jbHVkZXMoYi50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICk7XG4gICAgICAgICAgc2V0VGFyZ2V0QnJhbmNoKGRlZmF1bHRUYXJnZXQgfHwgJycpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgICBcbiAgICAgIGNhc2UgJ3N0YXJ0TG9hZGluZyc6XG4gICAgICAgIHN0YXJ0TG9hZGluZygpO1xuICAgICAgICBjbGVhckVycm9yKCk7XG4gICAgICAgIHNldFJlc3VsdChudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgY2FzZSAnc3RvcExvYWRpbmcnOlxuICAgICAgICBzdG9wTG9hZGluZygpO1xuICAgICAgICBicmVhaztcbiAgICAgICAgXG4gICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgIHNldEVycm9yKG1lc3NhZ2UuZXJyb3IgfHwgJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQnKTtcbiAgICAgICAgc3RvcExvYWRpbmcoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgY2FzZSAnZ2VuZXJhdGlvbkNvbXBsZXRlJzpcbiAgICAgICAgLy8gRW5zdXJlIHdlIGhhdmUgdmFsaWQgZGF0YSBiZWZvcmUgdXBkYXRpbmcgdGhlIHN0YXRlXG4gICAgICAgIGlmIChtZXNzYWdlLnJlc3VsdCkge1xuICAgICAgICAgIC8vIFNhbml0aXplIHRoZSByZXN1bHQgdG8gZW5zdXJlIGl0IGhhcyB0aGUgY29ycmVjdCBwcm9wZXJ0aWVzXG4gICAgICAgICAgY29uc3Qgc2FuaXRpemVkUmVzdWx0OiBQclJlc3VsdCA9IHtcbiAgICAgICAgICAgIHRpdGxlOiBzYW5pdGl6ZVRleHQobWVzc2FnZS5yZXN1bHQudGl0bGUgfHwgJycpLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHNhbml0aXplVGV4dChtZXNzYWdlLnJlc3VsdC5kZXNjcmlwdGlvbiB8fCAnJyksXG4gICAgICAgICAgfTtcbiAgICAgICAgICBzZXRSZXN1bHQoc2FuaXRpemVkUmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZXRFcnJvcignUmVjZWl2ZWQgZW1wdHkgcmVzdWx0IGZyb20gdGhlIHNlcnZlcicpO1xuICAgICAgICB9XG4gICAgICAgIHN0b3BMb2FkaW5nKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSwgW3N0YXJ0TG9hZGluZywgc3RvcExvYWRpbmcsIHNldEVycm9yLCBjbGVhckVycm9yXSk7XG5cbiAgdXNlTWVzc2FnZUxpc3RlbmVyKGhhbmRsZU1lc3NhZ2UpO1xuXG4gIC8vIEluaXRpYWwgbG9hZCAtIHJlcXVlc3QgYnJhbmNoZXNcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwb3N0TWVzc2FnZSh7IGNvbW1hbmQ6ICdnZXRCcmFuY2hlcycgfSk7XG4gIH0sIFtwb3N0TWVzc2FnZV0pO1xuXG4gIC8vIFNhbml0aXplIHRleHQgY29udGVudCB0byBlbnN1cmUgaXQncyBwcm9wZXJseSBkaXNwbGF5ZWRcbiAgY29uc3Qgc2FuaXRpemVUZXh0ID0gKHRleHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgaWYgKCF0ZXh0KSByZXR1cm4gJyc7XG4gICAgLy8gUmVtb3ZlIGFueSBKU09OIHdyYXBwZXIgaWYgcHJlc2VudCAoc29tZXRpbWVzIG9jY3VycyB3aXRoIENsYXVkZSByZXNwb25zZXMpXG4gICAgaWYgKHRleHQuaW5jbHVkZXMoJ1widGl0bGVcIicpICYmIHRleHQuaW5jbHVkZXMoJ1wiZGVzY3JpcHRpb25cIicpKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBqc29uT2JqID0gSlNPTi5wYXJzZSh0ZXh0KTtcbiAgICAgICAgcmV0dXJuIGpzb25PYmouZGVzY3JpcHRpb24gfHwgdGV4dDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gTm90IHZhbGlkIEpTT04sIGNvbnRpbnVlIHdpdGggb3JpZ2luYWwgdGV4dFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGV4dDtcbiAgfTtcblxuICAvLyBHZW5lcmF0ZSBQUiBkZXNjcmlwdGlvblxuICBjb25zdCBoYW5kbGVHZW5lcmF0ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBpZiAoIXNvdXJjZUJyYW5jaCB8fCAhdGFyZ2V0QnJhbmNoKSB7XG4gICAgICBzZXRFcnJvcignUGxlYXNlIHNlbGVjdCBib3RoIHNvdXJjZSBhbmQgdGFyZ2V0IGJyYW5jaGVzJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGNsZWFyRXJyb3IoKTtcbiAgICBjb25zdCBtZXNzYWdlOiBXZWJ2aWV3UmVxdWVzdCA9IHtcbiAgICAgIGNvbW1hbmQ6ICdnZW5lcmF0ZVByRGVzY3JpcHRpb24nLFxuICAgICAgc291cmNlQnJhbmNoLFxuICAgICAgdGFyZ2V0QnJhbmNoLFxuICAgICAgZGF0YTogeyBtb2RlbEZhbWlseTogc2VsZWN0ZWRNb2RlbCB9XG4gICAgfTtcbiAgICAvLyBUaGUgYmFja2VuZCBleHBlY3RzIHRoZXNlIHByb3BlcnRpZXMgZGlyZWN0bHkgb24gdGhlIG1lc3NhZ2Ugb2JqZWN0XG4gICAgKG1lc3NhZ2UgYXMgYW55KS5tb2RlbEZhbWlseSA9IHNlbGVjdGVkTW9kZWw7XG4gICAgcG9zdE1lc3NhZ2UobWVzc2FnZSk7XG4gIH0sIFtzb3VyY2VCcmFuY2gsIHRhcmdldEJyYW5jaCwgc2VsZWN0ZWRNb2RlbCwgcG9zdE1lc3NhZ2UsIHNldEVycm9yLCBjbGVhckVycm9yXSk7XG5cbiAgLy8gQ29weSB0byBjbGlwYm9hcmRcbiAgY29uc3QgaGFuZGxlQ29weSA9IHVzZUNhbGxiYWNrKCh0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBtZXNzYWdlOiBXZWJ2aWV3UmVxdWVzdCA9IHtcbiAgICAgIGNvbW1hbmQ6ICdjb3B5VG9DbGlwYm9hcmQnLFxuICAgICAgZGF0YTogeyB0ZXh0IH1cbiAgICB9O1xuICAgIC8vIFRoZSBiYWNrZW5kIGV4cGVjdHMgdGhlIHRleHQgZGlyZWN0bHkgb24gdGhlIG1lc3NhZ2Ugb2JqZWN0XG4gICAgKG1lc3NhZ2UgYXMgYW55KS50ZXh0ID0gdGV4dDtcbiAgICBwb3N0TWVzc2FnZShtZXNzYWdlKTtcbiAgfSwgW3Bvc3RNZXNzYWdlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cImhlYWRpbmdcIj5QUiBEZXNjcmlwdGlvbiBHZW5lcmF0b3I8L2gxPlxuXG4gICAgICA8QnJhbmNoU2VsZWN0aW9uXG4gICAgICAgIGJyYW5jaGVzPXticmFuY2hlc31cbiAgICAgICAgc291cmNlQnJhbmNoPXtzb3VyY2VCcmFuY2h9XG4gICAgICAgIHRhcmdldEJyYW5jaD17dGFyZ2V0QnJhbmNofVxuICAgICAgICBvblNvdXJjZUJyYW5jaENoYW5nZT17c2V0U291cmNlQnJhbmNofVxuICAgICAgICBvblRhcmdldEJyYW5jaENoYW5nZT17c2V0VGFyZ2V0QnJhbmNofVxuICAgICAgLz5cblxuICAgICAgPEdlbmVyYXRpb25Gb3JtXG4gICAgICAgIG1vZGVscz17bW9kZWxzfVxuICAgICAgICBzZWxlY3RlZE1vZGVsPXtzZWxlY3RlZE1vZGVsfVxuICAgICAgICBvbk1vZGVsQ2hhbmdlPXtzZXRTZWxlY3RlZE1vZGVsfVxuICAgICAgICBvbkdlbmVyYXRlPXtoYW5kbGVHZW5lcmF0ZX1cbiAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgIGNhbkdlbmVyYXRlPXshIShzb3VyY2VCcmFuY2ggJiYgdGFyZ2V0QnJhbmNoKX1cbiAgICAgIC8+XG5cbiAgICAgIHtlcnJvciAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5cbiAgICAgICAgICB7ZXJyb3J9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAge2lzTG9hZGluZyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZ1wiPlxuICAgICAgICAgIDxMb2FkaW5nU3Bpbm5lciBzaXplPVwibWVkaXVtXCIgLz5cbiAgICAgICAgICA8ZGl2PkFuYWx5emluZyBjaGFuZ2VzIGFuZCBnZW5lcmF0aW5nIGRlc2NyaXB0aW9uLi4uPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAge3Jlc3VsdCAmJiAoXG4gICAgICAgIDxSZXN1bHREaXNwbGF5XG4gICAgICAgICAgcmVzdWx0PXtyZXN1bHR9XG4gICAgICAgICAgb25Db3B5PXtoYW5kbGVDb3B5fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJhbmNoU2VsZWN0b3IgfSBmcm9tICcuLi8uLi9zaGFyZWQvY29tcG9uZW50cyc7XG5cbmludGVyZmFjZSBCcmFuY2hTZWxlY3Rpb25Qcm9wcyB7XG4gIGJyYW5jaGVzOiBzdHJpbmdbXTtcbiAgc291cmNlQnJhbmNoOiBzdHJpbmc7XG4gIHRhcmdldEJyYW5jaDogc3RyaW5nO1xuICBvblNvdXJjZUJyYW5jaENoYW5nZTogKGJyYW5jaDogc3RyaW5nKSA9PiB2b2lkO1xuICBvblRhcmdldEJyYW5jaENoYW5nZTogKGJyYW5jaDogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gQnJhbmNoU2VsZWN0aW9uKHtcbiAgYnJhbmNoZXMsXG4gIHNvdXJjZUJyYW5jaCxcbiAgdGFyZ2V0QnJhbmNoLFxuICBvblNvdXJjZUJyYW5jaENoYW5nZSxcbiAgb25UYXJnZXRCcmFuY2hDaGFuZ2Vcbn06IEJyYW5jaFNlbGVjdGlvblByb3BzKSB7XG4gIC8vIEZpbHRlciB0YXJnZXQgYnJhbmNoZXMgdG8gZXhjbHVkZSB0aGUgc2VsZWN0ZWQgc291cmNlIGJyYW5jaFxuICBjb25zdCBhdmFpbGFibGVUYXJnZXRCcmFuY2hlcyA9IGJyYW5jaGVzLmZpbHRlcihicmFuY2ggPT4gYnJhbmNoICE9PSBzb3VyY2VCcmFuY2gpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJicmFuY2gtc2VsZWN0aW9uXCI+XG4gICAgICA8QnJhbmNoU2VsZWN0b3JcbiAgICAgICAgYnJhbmNoZXM9e2JyYW5jaGVzfVxuICAgICAgICBzZWxlY3RlZEJyYW5jaD17c291cmNlQnJhbmNofVxuICAgICAgICBvbkJyYW5jaENoYW5nZT17b25Tb3VyY2VCcmFuY2hDaGFuZ2V9XG4gICAgICAgIGxhYmVsPVwiU291cmNlIEJyYW5jaCAod2l0aCBjaGFuZ2VzKVwiXG4gICAgICAvPlxuXG4gICAgICA8QnJhbmNoU2VsZWN0b3JcbiAgICAgICAgYnJhbmNoZXM9e2F2YWlsYWJsZVRhcmdldEJyYW5jaGVzfVxuICAgICAgICBzZWxlY3RlZEJyYW5jaD17dGFyZ2V0QnJhbmNofVxuICAgICAgICBvbkJyYW5jaENoYW5nZT17b25UYXJnZXRCcmFuY2hDaGFuZ2V9XG4gICAgICAgIGxhYmVsPVwiVGFyZ2V0IEJyYW5jaCAobWVyZ2UgaW50bylcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTW9kZWxTZWxlY3RvciwgQnV0dG9uIH0gZnJvbSAnLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgTW9kZWxDb25maWcgfSBmcm9tICcuLi8uLi9zaGFyZWQvdHlwZXMnO1xuXG5pbnRlcmZhY2UgR2VuZXJhdGlvbkZvcm1Qcm9wcyB7XG4gIG1vZGVsczogTW9kZWxDb25maWdbXTtcbiAgc2VsZWN0ZWRNb2RlbDogc3RyaW5nO1xuICBvbk1vZGVsQ2hhbmdlOiAobW9kZWw6IHN0cmluZykgPT4gdm9pZDtcbiAgb25HZW5lcmF0ZTogKCkgPT4gdm9pZDtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBjYW5HZW5lcmF0ZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEdlbmVyYXRpb25Gb3JtKHtcbiAgbW9kZWxzLFxuICBzZWxlY3RlZE1vZGVsLFxuICBvbk1vZGVsQ2hhbmdlLFxuICBvbkdlbmVyYXRlLFxuICBpc0xvYWRpbmcsXG4gIGNhbkdlbmVyYXRlXG59OiBHZW5lcmF0aW9uRm9ybVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJnZW5lcmF0aW9uLWZvcm1cIj5cbiAgICAgIDxNb2RlbFNlbGVjdG9yXG4gICAgICAgIG1vZGVscz17bW9kZWxzfVxuICAgICAgICBzZWxlY3RlZE1vZGVsPXtzZWxlY3RlZE1vZGVsfVxuICAgICAgICBvbk1vZGVsQ2hhbmdlPXtvbk1vZGVsQ2hhbmdlfVxuICAgICAgLz5cblxuICAgICAgPEJ1dHRvblxuICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgIG9uQ2xpY2s9e29uR2VuZXJhdGV9XG4gICAgICAgIGRpc2FibGVkPXtpc0xvYWRpbmcgfHwgIWNhbkdlbmVyYXRlfVxuICAgICAgICBsb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgIGNsYXNzTmFtZT1cImdlbmVyYXRlLWJ1dHRvblwiXG4gICAgICA+XG4gICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgJ0dlbmVyYXRpbmcuLi4nXG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb25cIj7inKg8L3NwYW4+XG4gICAgICAgICAgICBHZW5lcmF0ZSBQUiBEZXNjcmlwdGlvblxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9CdXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL3NoYXJlZC9jb21wb25lbnRzJztcbmltcG9ydCB7IFByUmVzdWx0IH0gZnJvbSAnLi4vUHJEZXNjcmlwdGlvbkFwcCc7XG5cbmludGVyZmFjZSBSZXN1bHREaXNwbGF5UHJvcHMge1xuICByZXN1bHQ6IFByUmVzdWx0O1xuICBvbkNvcHk6ICh0ZXh0OiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBSZXN1bHREaXNwbGF5KHsgcmVzdWx0LCBvbkNvcHkgfTogUmVzdWx0RGlzcGxheVByb3BzKSB7XG4gIC8vIFNhZmVseSByZW5kZXIgbWFya2Rvd24gY29udGVudFxuICBjb25zdCByZW5kZXJNYXJrZG93biA9IChjb250ZW50OiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHdpbmRvdy5tYXJrZWQ/LnBhcnNlKSB7XG4gICAgICAgIHJldHVybiB7IF9faHRtbDogd2luZG93Lm1hcmtlZC5wYXJzZShjb250ZW50KSB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgX19odG1sOiBgPHByZT4ke2NvbnRlbnR9PC9wcmU+YCB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcGFyc2luZyBtYXJrZG93bjonLCBlcnIpO1xuICAgICAgcmV0dXJuIHsgX19odG1sOiBgPHByZT4ke2NvbnRlbnR9PC9wcmU+YCB9O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtc2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdC1oZWFkZXJcIj5cbiAgICAgICAgICA8aDM+UFIgVGl0bGU8L2gzPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvcHktYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ29weShyZXN1bHQudGl0bGUpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENvcHlcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LWNvbnRlbnQgdGl0bGUtY29udGVudFwiPlxuICAgICAgICAgIHtyZXN1bHQudGl0bGV9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0LXNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHQtaGVhZGVyXCI+XG4gICAgICAgICAgPGgzPlBSIERlc2NyaXB0aW9uPC9oMz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb3B5LWJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNvcHkocmVzdWx0LmRlc2NyaXB0aW9uKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDb3B5XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IFxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlc3VsdC1jb250ZW50IGRlc2NyaXB0aW9uLWNvbnRlbnQgbWFya2Rvd24tYm9keVwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3JlbmRlck1hcmtkb3duKHJlc3VsdC5kZXNjcmlwdGlvbil9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5LWFsbFwiPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY29weS1hbGwtYnV0dG9uXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNvcHkoYCMgJHtyZXN1bHQudGl0bGV9XFxuXFxuJHtyZXN1bHQuZGVzY3JpcHRpb259YCl9XG4gICAgICAgID5cbiAgICAgICAgICBDb3B5IENvbXBsZXRlIFBSIChUaXRsZSArIERlc2NyaXB0aW9uKVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufSIsImV4cG9ydCB7IEJyYW5jaFNlbGVjdGlvbiB9IGZyb20gJy4vQnJhbmNoU2VsZWN0aW9uJztcbmV4cG9ydCB7IEdlbmVyYXRpb25Gb3JtIH0gZnJvbSAnLi9HZW5lcmF0aW9uRm9ybSc7XG5leHBvcnQgeyBSZXN1bHREaXNwbGF5IH0gZnJvbSAnLi9SZXN1bHREaXNwbGF5JzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUm9vdCB9IGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xuaW1wb3J0IHsgUHJEZXNjcmlwdGlvbkFwcCB9IGZyb20gJy4vUHJEZXNjcmlwdGlvbkFwcCc7XG5cbi8vIEluaXRpYWxpemUgUmVhY3QgYXBwbGljYXRpb25cbmNvbnN0IGRvbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5pZiAoZG9tQ29udGFpbmVyKSB7XG4gIGNvbnN0IHJvb3QgPSBjcmVhdGVSb290KGRvbUNvbnRhaW5lcik7XG4gIHJvb3QucmVuZGVyKDxQckRlc2NyaXB0aW9uQXBwIC8+KTtcbn0gZWxzZSB7XG4gIGNvbnNvbGUuZXJyb3IoJ1Jvb3QgZWxlbWVudCBub3QgZm91bmQnKTtcbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vc3R5bGUtbG9hZGVyQDQuMC4wX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3N0eWxlLWxvYWRlckA0LjAuMF93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jc3MtbG9hZGVyQDcuMS4yX3dlYnBhY2tANS4xMDEuMy9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3ByLWRlc2NyaXB0aW9uLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vY3NzLWxvYWRlckA3LjEuMl93ZWJwYWNrQDUuMTAxLjMvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9wci1kZXNjcmlwdGlvbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcInByLWRlc2NyaXB0aW9uXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2NvcGlsb3RfcGx1c19wbHVzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2NvcGlsb3RfcGx1c19wbHVzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnNcIixcInNoYXJlZFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy93ZWJ2aWV3cy9wci1kZXNjcmlwdGlvbi9pbmRleC50c3hcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==