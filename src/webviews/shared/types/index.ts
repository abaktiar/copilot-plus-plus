import React from "react";
import type { ModelConfig } from "../config/models";

// Webview ↔ Extension communication types
export interface WebviewMessage {
  command: string;
  data?: any;
}

// Extension → Webview messages
export interface ExtensionMessage extends WebviewMessage {
  command:
    | "branchesList"
    | "result"
    | "error"
    | "progressUpdate"
    | "startLoading"
    | "stopLoading"
    | "generationComplete"
    | "analyzing"
    | "analysisResult"
    | "reviewComplete";
  branches?: string[];
  currentBranch?: string;
  defaultTargetBranch?: string;
  languageModel?: string;
  result?: any;
  error?: string;
  message?: string;
  update?: ProgressUpdate;
  reviewKey?: string;
}

// Webview → Extension messages
export interface WebviewRequest extends WebviewMessage {
  command:
    | "getBranches"
    | "generateDescription"
    | "generatePrDescription"
    | "reviewChanges"
    | "reviewPr"
    | "analyzeBreaking"
    | "analyzeBreakingChanges"
    | "copyToClipboard"
    | "error"
    | "openFile"
    | "navigateToFile";
  sourceBranch?: string;
  targetBranch?: string;
  selectedModel?: string;
  modelFamily?: string;
  text?: string;
  filePath?: string;
  lineNumber?: number;
  codeContext?: string;
}

export interface ProgressUpdate {
  message: string;
  progress?: number;
  total?: number;
}

export interface WebviewConfig {
  models: ModelConfig[];
  defaultModel: string;
}

// VSCode API types for webviews
export interface VSCodeAPI {
  postMessage(message: WebviewRequest): void;
  getState(): any;
  setState(state: any): void;
}

// Component prop types
export interface ModelSelectorProps {
  selectedModel: string;
  onModelChange: (model: string) => void;
  models: ModelConfig[];
}

export interface BranchSelectorProps {
  branches: string[];
  selectedBranch: string;
  onBranchChange: (branch: string) => void;
  label: string;
}

export interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  message?: string;
}

export interface ButtonProps {
  variant?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export interface IconProps {
  name: string;
  size?: number;
  className?: string;
  color?: string;
}

export interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}
