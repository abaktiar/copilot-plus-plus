import React, { useState, useEffect, useCallback } from 'react';
import { 
  useVSCodeAPI, 
  useMessageListener, 
  useLoadingState, 
  useErrorState 
} from '../shared/hooks/useVSCodeAPI';
import {
  ModelDropdown,
  BranchSelector,
  Button,
  LoadingSpinner,
  Icon,
  AVAILABLE_MODELS,
  DEFAULT_MODEL,
} from '../shared';
import { ExtensionMessage, WebviewRequest } from '../shared/types';
import { AnalysisConfiguration, ResultsTable, FilterControls } from './components';
import './styles/breaking-changes.css';

export interface BreakingChangeLocation {
  filePath: string;
  lineNumber: number;
  codeSnippet: string;
}

export interface BreakingChange {
  id: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  changeType: 'method-signature' | 'class-structure' | 'enum-value' | 'member-removal' | 'behavior-change' | 'other';
  description: string;
  recommendation: string;
  changeLocation: BreakingChangeLocation;
  affectedLocations: BreakingChangeLocation[];
}

export interface AnalysisResult {
  summary: {
    totalBreakingChanges: number;
    criticalCount: number;
    highCount: number;
    mediumCount: number;
    lowCount: number;
  };
  breakingChanges: BreakingChange[];
}

export function BreakingChangesApp() {
  const { postMessage, vscode } = useVSCodeAPI();
  const { isLoading, startLoading, stopLoading } = useLoadingState();
  const { error, setError, clearError } = useErrorState();

  // Don't render until VS Code API is available
  if (!vscode) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Breaking Changes Analyzer</h2>
        <p>Initializing...</p>
      </div>
    );
  }
  
  const [branches, setBranches] = useState<string[]>([]);
  const [currentBranch, setCurrentBranch] = useState('');
  const [sourceBranch, setSourceBranch] = useState('');
  const [targetBranch, setTargetBranch] = useState('');
  const [selectedModel, setSelectedModel] = useState(DEFAULT_MODEL);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [filterSeverity, setFilterSeverity] = useState<string>('all');
  const [filterChangeType, setFilterChangeType] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Use models from shared configuration (no external loading needed)
  const models = AVAILABLE_MODELS;

  // Handle messages from extension
  const handleMessage = useCallback((message: ExtensionMessage) => {
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
          } else {
            // Fall back to main/master if available, or first branch that's not the source
            const targetBranch =
              message.branches.find((b) => b === 'main' || b === 'master') ||
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

  useMessageListener(handleMessage);

  // Initial load - request branches (only once)
  useEffect(() => {
    postMessage({ command: 'getBranches' });
  }, []); // Empty dependency array to run only once

  // Handle analyze button click
  const handleAnalyze = useCallback(() => {
    if (!sourceBranch || !targetBranch) {
      setError('Please select both source and target branches');
      return;
    }

    clearError();
    const message: WebviewRequest = {
      command: 'analyzeBreakingChanges',
      sourceBranch,
      targetBranch,
      modelFamily: selectedModel,
    };
    postMessage(message);
  }, [sourceBranch, targetBranch, selectedModel, postMessage, setError, clearError]);

  // Handle opening a file at a specific location
  const handleOpenFile = useCallback((filePath: string, lineNumber: number) => {
    const message: WebviewRequest = {
      command: 'openFile',
      data: { filePath, lineNumber }
    };
    // The backend expects these properties directly on the message object
    (message as any).filePath = filePath;
    (message as any).lineNumber = lineNumber;
    postMessage(message);
  }, [postMessage]);

  // Get filtered breaking changes based on current filters
  const getFilteredBreakingChanges = useCallback(() => {
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
        return (
          (change.description && change.description.toLowerCase().includes(searchLower)) ||
          (change.changeLocation && change.changeLocation.filePath.toLowerCase().includes(searchLower)) ||
          (change.recommendation && change.recommendation.toLowerCase().includes(searchLower))
        );
      }

      return true;
    });
  }, [result, filterSeverity, filterChangeType, searchTerm]);

  const filteredBreakingChanges = getFilteredBreakingChanges();

  return (
    <div className='container'>
      <div className='section'>
        {/* Title and model selection row */}
        <div className='header-row'>
          <div className='title-section'>
            <Icon name='branch' />
            <h2 className='heading'>Breaking Changes Analysis</h2>
          </div>
          <div className='model-selector-top'>
            <ModelDropdown selectedModel={selectedModel} onModelChange={setSelectedModel} models={models} />
          </div>
        </div>

        <AnalysisConfiguration
          branches={branches}
          sourceBranch={sourceBranch}
          targetBranch={targetBranch}
          onSourceBranchChange={setSourceBranch}
          onTargetBranchChange={setTargetBranch}
          onAnalyze={handleAnalyze}
          isLoading={isLoading}
          canAnalyze={!!(sourceBranch && targetBranch)}
          currentBranch={currentBranch}
        />
      </div>

      {error && (
        <div className='error-message'>
          <h3>Error</h3>
          <p>{error}</p>
        </div>
      )}

      {isLoading && (
        <div className='loading-container'>
          <LoadingSpinner size='large' />
          <p>Analyzing breaking changes...</p>
        </div>
      )}

      {!isLoading && result && (
        <div className='section'>
          <h2>Analysis Results</h2>

          {/* Summary */}
          <div className='summary'>
            <h3>Summary</h3>
            <div className='summary-stats'>
              <div className='stat'>
                <span className='stat-label'>Total:</span>
                <span className='stat-value'>{result.summary.totalBreakingChanges}</span>
              </div>
              <div className='stat critical'>
                <span className='stat-label'>Critical:</span>
                <span className='stat-value'>{result.summary.criticalCount}</span>
              </div>
              <div className='stat high'>
                <span className='stat-label'>High:</span>
                <span className='stat-value'>{result.summary.highCount}</span>
              </div>
              <div className='stat medium'>
                <span className='stat-label'>Medium:</span>
                <span className='stat-value'>{result.summary.mediumCount}</span>
              </div>
              <div className='stat low'>
                <span className='stat-label'>Low:</span>
                <span className='stat-value'>{result.summary.lowCount}</span>
              </div>
            </div>
          </div>

          <FilterControls
            filterSeverity={filterSeverity}
            filterChangeType={filterChangeType}
            searchTerm={searchTerm}
            onFilterSeverityChange={setFilterSeverity}
            onFilterChangeTypeChange={setFilterChangeType}
            onSearchTermChange={setSearchTerm}
            filteredCount={filteredBreakingChanges.length}
          />

          <ResultsTable breakingChanges={filteredBreakingChanges} onOpenFile={handleOpenFile} />
        </div>
      )}
    </div>
  );
}