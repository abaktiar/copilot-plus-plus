import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { 
  useVSCodeAPI, 
  useMessageListener, 
  useLoadingState, 
  useErrorState,
  useWebviewState 
} from '../shared/hooks/useVSCodeAPI';
import { LoadingSpinner } from '../shared/components';
import { ExtensionMessage, ModelConfig } from '../shared/types';
import { ReviewConfiguration } from './components/ReviewConfiguration';
import { ProgressIndicator } from './components/ProgressIndicator';
import { ReviewDashboard } from './components/ReviewDashboard';
import { ReviewSummary } from './components/ReviewSummary';
import { IssuesList } from './components/IssuesList';
import { FilterBar } from './components/FilterBar';

interface ReviewResult {
  summary: {
    assessment: string;
    strengths: string[];
    criticalIssues: string[];
    recommendations: string[];
  };
  issues: ReviewIssue[];
}

interface ReviewIssue {
  filePath: string;
  lineNumber?: number;
  severity: 'Critical' | 'High' | 'Medium' | 'Low';
  category: string;
  description: string;
  suggestion?: string;
  suggestedCode?: string;
  justification?: string;
  lineContext?: {
    linesBefore?: string[];
    codeSnippet: string;
    linesAfter?: string[];
  };
}

interface PrProgressUpdate {
  completed: number;
  total: number;
  currentFile?: string;
}

interface ReviewState {
  reviewedIssues: string[];
  searchQuery: string;
  severityFilter: string;
  categoryFilter: string;
  showReviewed: boolean;
  isSummaryCollapsed: boolean;
}

export function PrReviewApp() {
  const { postMessage, getState, setState } = useVSCodeAPI();
  const { isLoading, startLoading, stopLoading } = useLoadingState();
  const { error, setError, clearError } = useErrorState();

  // Branch and model state
  const [branches, setBranches] = useState<string[]>([]);
  const [currentBranch, setCurrentBranch] = useState('');
  const [sourceBranch, setSourceBranch] = useState('');
  const [targetBranch, setTargetBranch] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [models, setModels] = useState<ModelConfig[]>([]);

  // Review state
  const [reviewResult, setReviewResult] = useState<ReviewResult | null>(null);
  const [progress, setProgress] = useState<PrProgressUpdate | null>(null);
  const [currentReviewKey, setCurrentReviewKey] = useState('');

  // UI state with persistence
  const [reviewState, setReviewState] = useWebviewState<ReviewState>({
    reviewedIssues: [],
    searchQuery: '',
    severityFilter: 'All',
    categoryFilter: 'All',
    showReviewed: false,
    isSummaryCollapsed: false,
  });

  // Load models from shared config
  useEffect(() => {
    const sharedConfig = (window as any).sharedModelConfig;
    if (sharedConfig?.models) {
      setModels(sharedConfig.models);
    }
  }, []);

  // Request branches on mount
  useEffect(() => {
    postMessage({ command: 'getBranches' });
  }, [postMessage]);

  // Handle messages from extension
  const handleMessage = useCallback((message: ExtensionMessage) => {
    switch (message.command) {
      case 'branchesList':
        setBranches(message.branches || []);
        setCurrentBranch(message.currentBranch || '');
        setSourceBranch(message.currentBranch || '');
        
        if (message.languageModel) {
          setSelectedModel(message.languageModel);
        }

        // Set target branch
        const branches = message.branches || [];
        if (message.defaultTargetBranch && branches.includes(message.defaultTargetBranch)) {
          setTargetBranch(message.defaultTargetBranch);
        } else {
          setTargetBranch(
            branches.find(b => b === 'main' || b === 'master') ||
            branches.find(b => b !== message.currentBranch) ||
            branches[0] || ''
          );
        }
        break;

      case 'startLoading':
        startLoading();
        clearError();
        setProgress(null);
        // Reset review state for new review
        setReviewState(prev => ({
          ...prev,
          reviewedIssues: [],
          searchQuery: '',
          severityFilter: 'All',
          categoryFilter: 'All',
          showReviewed: false,
        }));
        setCurrentReviewKey('');
        break;

      case 'progressUpdate':
        const update = message.update;
        if (update) {
          setProgress({
            completed: update.progress || 0,
            total: update.total || 0,
            currentFile: update.message,
          });
        } else {
          setProgress(null);
        }
        break;

      case 'reviewComplete':
        stopLoading();
        setReviewResult(message.result);
        clearError();
        setProgress(null);
        
        if (message.result?.reviewKey) {
          setCurrentReviewKey(message.result.reviewKey);
        }
        break;

      case 'error':
        stopLoading();
        setError(message.message || 'An error occurred');
        setReviewResult(null);
        setProgress(null);
        break;
    }
  }, [startLoading, stopLoading, clearError, setError, setReviewState]);

  useMessageListener(handleMessage);

  // Load saved reviewed issues when review is complete
  useEffect(() => {
    if (currentReviewKey && reviewResult) {
      try {
        const savedState = getState() || {};
        const savedReviewed = savedState[currentReviewKey] || [];
        
        if (savedReviewed.length > 0) {
          setReviewState(prev => ({
            ...prev,
            reviewedIssues: savedReviewed,
          }));
        }
      } catch (e) {
        console.error('Failed to load saved review state:', e);
      }
    }
  }, [currentReviewKey, reviewResult, getState, setReviewState]);

  const handleReview = useCallback(() => {
    if (sourceBranch === targetBranch) {
      setError('Source and target branches must be different');
      return;
    }

    setReviewResult(null);
    clearError();
    postMessage({
      command: 'reviewPr',
      sourceBranch,
      targetBranch,
      modelFamily: selectedModel,
    });
  }, [sourceBranch, targetBranch, selectedModel, setError, clearError, postMessage]);

  const handleMarkAsReviewed = useCallback((issue: ReviewIssue) => {
    const issueId = `${issue.filePath}:${issue.severity}:${issue.description}`;
    
    setReviewState(prev => {
      const newReviewedIssues = [...prev.reviewedIssues];
      const index = newReviewedIssues.indexOf(issueId);
      
      if (index >= 0) {
        newReviewedIssues.splice(index, 1);
      } else {
        newReviewedIssues.push(issueId);
      }

      // Save to storage if we have a review key
      if (currentReviewKey) {
        try {
          const savedState = getState() || {};
          savedState[currentReviewKey] = newReviewedIssues;
          setState(savedState);
        } catch (e) {
          console.error('Failed to save review state:', e);
        }
      }

      return {
        ...prev,
        reviewedIssues: newReviewedIssues,
      };
    });
  }, [currentReviewKey, getState, setState, setReviewState]);

  // Calculate statistics
  const stats = useMemo(() => {
    if (!reviewResult?.issues) return null;

    const reviewedSet = new Set(reviewState.reviewedIssues);
    const stats = {
      total: reviewResult.issues.length,
      reviewed: reviewedSet.size,
      pending: reviewResult.issues.length - reviewedSet.size,
      bySeverity: {
        Critical: 0,
        High: 0,
        Medium: 0,
        Low: 0,
      } as Record<string, number>,
      byCategory: {} as Record<string, number>,
    };

    reviewResult.issues.forEach(issue => {
      // Count by severity
      if (stats.bySeverity.hasOwnProperty(issue.severity)) {
        stats.bySeverity[issue.severity]++;
      }

      // Count by category
      if (!stats.byCategory[issue.category]) {
        stats.byCategory[issue.category] = 0;
      }
      stats.byCategory[issue.category]++;
    });

    return stats;
  }, [reviewResult, reviewState.reviewedIssues]);

  return (
    <div className="container">
      <ReviewConfiguration
        branches={branches}
        currentBranch={currentBranch}
        sourceBranch={sourceBranch}
        targetBranch={targetBranch}
        selectedModel={selectedModel}
        models={models}
        isLoading={isLoading}
        onSourceBranchChange={setSourceBranch}
        onTargetBranchChange={setTargetBranch}
        onModelChange={setSelectedModel}
        onReview={handleReview}
      />

      {isLoading && progress && (
        <ProgressIndicator progress={progress} />
      )}

      {isLoading && !progress && (
        <LoadingSpinner message="Analyzing PR changes..." />
      )}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {!isLoading && !error && reviewResult && (
        <>
          <ReviewDashboard stats={stats} />
          
          <ReviewSummary
            summary={reviewResult.summary}
            isCollapsed={reviewState.isSummaryCollapsed}
            onToggleCollapse={() => 
              setReviewState(prev => ({
                ...prev,
                isSummaryCollapsed: !prev.isSummaryCollapsed,
              }))
            }
          />

          <div className="issues-section">
            <h2 className="issues-heading">Issues</h2>
            
            <FilterBar
              searchQuery={reviewState.searchQuery}
              severityFilter={reviewState.severityFilter}
              categoryFilter={reviewState.categoryFilter}
              showReviewed={reviewState.showReviewed}
              reviewResult={reviewResult}
              onSearchChange={(query) => 
                setReviewState(prev => ({ ...prev, searchQuery: query }))
              }
              onSeverityFilterChange={(filter) => 
                setReviewState(prev => ({ ...prev, severityFilter: filter }))
              }
              onCategoryFilterChange={(filter) => 
                setReviewState(prev => ({ ...prev, categoryFilter: filter }))
              }
              onShowReviewedChange={(show) => 
                setReviewState(prev => ({ ...prev, showReviewed: show }))
              }
            />

            <IssuesList
              issues={reviewResult.issues}
              searchQuery={reviewState.searchQuery}
              severityFilter={reviewState.severityFilter}
              categoryFilter={reviewState.categoryFilter}
              showReviewed={reviewState.showReviewed}
              reviewedIssues={new Set(reviewState.reviewedIssues)}
              onMarkAsReviewed={handleMarkAsReviewed}
            />
          </div>
        </>
      )}
    </div>
  );
}