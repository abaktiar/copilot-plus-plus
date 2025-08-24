// Webview ↔ Extension communication types
export interface WebviewMessage {
  command: string;
  data?: any;
}

// Extension → Webview messages
export interface ExtensionMessage extends WebviewMessage {
  command: 'branchesList' | 'result' | 'error' | 'progressUpdate';
  branches?: string[];
  currentBranch?: string;
  defaultTargetBranch?: string;
  languageModel?: string;
  result?: any;
  error?: string;
  update?: ProgressUpdate;
}

// Webview → Extension messages  
export interface WebviewRequest extends WebviewMessage {
  command: 'getBranches' | 'generateDescription' | 'reviewChanges' | 'analyzeBreaking' | 'error';
  sourceBranch?: string;
  targetBranch?: string;
  selectedModel?: string;
}

export interface ProgressUpdate {
  message: string;
  progress?: number;
  total?: number;
}

export interface ModelConfig {
  id: string;
  name: string;
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