import React, { useState, useEffect, useCallback } from 'react';
import { 
  useVSCodeAPI, 
  useMessageListener, 
  useLoadingState, 
  useErrorState 
} from '../shared/hooks/useVSCodeAPI';
import { 
  LoadingSpinner,
  AVAILABLE_MODELS,
  DEFAULT_MODEL
} from '../shared';
import { 
  ExtensionMessage, 
  ModelConfig, 
  WebviewRequest 
} from '../shared/types';
import { BranchSelection, GenerationForm, ResultDisplay } from './components';
import './styles/pr-description.css';

declare global {
  interface Window {
    marked?: {
      parse: (content: string) => string;
    };
  }
}

export interface PrResult {
  title: string;
  description: string;
}

export function PrDescriptionApp() {
  console.log('PrDescriptionApp: Component initializing');
  const { postMessage } = useVSCodeAPI();
  const { isLoading, startLoading, stopLoading } = useLoadingState();
  const { error, setError, clearError } = useErrorState();
  
  const [branches, setBranches] = useState<string[]>([]);
  const [sourceBranch, setSourceBranch] = useState('');
  const [targetBranch, setTargetBranch] = useState('');
  const [selectedModel, setSelectedModel] = useState(DEFAULT_MODEL);
  const [result, setResult] = useState<PrResult | null>(null);
  const [branchesLoaded, setBranchesLoaded] = useState(false);

  // Use models from shared configuration (no external loading needed)
  const models = AVAILABLE_MODELS;
  console.log('PrDescriptionApp: Using bundled models:', models.length, 'models available');

  // Handle messages from extension
  const handleMessage = useCallback((message: ExtensionMessage) => {
    switch (message.command) {
      case 'branchesList':
        setBranches(message.branches || []);
        setSourceBranch(message.currentBranch || '');
        setBranchesLoaded(true);

        // Set the selected model if provided from backend
        if (message.languageModel) {
          setSelectedModel(message.languageModel);
        }

        // First check for defaultTargetBranch from config
        if (message.defaultTargetBranch && message.branches?.includes(message.defaultTargetBranch)) {
          setTargetBranch(message.defaultTargetBranch);
        } else {
          // Fall back to main/master/develop if available
          const defaultTarget = message.branches?.find((b) =>
            ['main', 'master', 'develop'].includes(b.toLowerCase())
          );
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
          const sanitizedResult: PrResult = {
            title: sanitizeText(message.result.title || ''),
            description: sanitizeText(message.result.description || ''),
          };
          setResult(sanitizedResult);
        } else {
          setError('Received empty result from the server');
        }
        stopLoading();
        break;
    }
  }, [startLoading, stopLoading, setError, clearError]);

  useMessageListener(handleMessage);

  // Initial load - request branches (only once on mount)
  useEffect(() => {
    if (!branchesLoaded) {
      postMessage({ command: 'getBranches' });
    }
  }, []); // Empty dependency array to run only once

  // Sanitize text content to ensure it's properly displayed
  const sanitizeText = (text: string): string => {
    if (!text) return '';
    // Remove any JSON wrapper if present (sometimes occurs with Claude responses)
    if (text.includes('"title"') && text.includes('"description"')) {
      try {
        const jsonObj = JSON.parse(text);
        return jsonObj.description || text;
      } catch (e) {
        // Not valid JSON, continue with original text
      }
    }
    return text;
  };

  // Generate PR description
  const handleGenerate = useCallback(() => {
    if (!sourceBranch || !targetBranch) {
      setError('Please select both source and target branches');
      return;
    }
    
    clearError();
    const message: WebviewRequest = {
      command: 'generatePrDescription',
      sourceBranch,
      targetBranch,
      data: { modelFamily: selectedModel }
    };
    // The backend expects these properties directly on the message object
    (message as any).modelFamily = selectedModel;
    postMessage(message);
  }, [sourceBranch, targetBranch, selectedModel, postMessage, setError, clearError]);

  // Copy to clipboard
  const handleCopy = useCallback((text: string) => {
    const message: WebviewRequest = {
      command: 'copyToClipboard',
      data: { text }
    };
    // The backend expects the text directly on the message object
    (message as any).text = text;
    postMessage(message);
  }, [postMessage]);

  console.log('PrDescriptionApp: Rendering component', { branches, sourceBranch, targetBranch, models });
  
  return (
    <div className="container">
      <h1 className="heading">PR Description Generator</h1>

      <BranchSelection
        branches={branches}
        sourceBranch={sourceBranch}
        targetBranch={targetBranch}
        onSourceBranchChange={setSourceBranch}
        onTargetBranchChange={setTargetBranch}
      />

      <GenerationForm
        models={models}
        selectedModel={selectedModel}
        onModelChange={setSelectedModel}
        onGenerate={handleGenerate}
        isLoading={isLoading}
        canGenerate={!!(sourceBranch && targetBranch)}
      />

      {error && (
        <div className="error">
          {error}
        </div>
      )}

      {isLoading && (
        <div className="loading">
          <LoadingSpinner size="medium" />
          <div>Analyzing changes and generating description...</div>
        </div>
      )}

      {result && (
        <ResultDisplay
          result={result}
          onCopy={handleCopy}
        />
      )}
    </div>
  );
}