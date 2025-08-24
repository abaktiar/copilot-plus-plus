import React from 'react';
import { ModelSelector, Button } from '../../shared/components';
import { ModelConfig } from '../../shared/types';

interface ReviewConfigurationProps {
  branches: string[];
  currentBranch: string;
  sourceBranch: string;
  targetBranch: string;
  selectedModel: string;
  models: ModelConfig[];
  isLoading: boolean;
  onSourceBranchChange: (branch: string) => void;
  onTargetBranchChange: (branch: string) => void;
  onModelChange: (model: string) => void;
  onReview: () => void;
}

export function ReviewConfiguration({
  branches,
  currentBranch,
  sourceBranch,
  targetBranch,
  selectedModel,
  models,
  isLoading,
  onSourceBranchChange,
  onTargetBranchChange,
  onModelChange,
  onReview,
}: ReviewConfigurationProps) {
  return (
    <div className="form-container">
      <div className="header-row">
        <h2>PR Review Assistant</h2>
        <div className="model-selector">
          <ModelSelector
            selectedModel={selectedModel}
            onModelChange={onModelChange}
            models={models}
          />
        </div>
      </div>

      <div className="branches-row">
        <div className="branch-selector">
          <label htmlFor="sourceBranch">Source Branch (with changes):</label>
          <select
            id="sourceBranch"
            value={sourceBranch}
            onChange={(e) => onSourceBranchChange(e.target.value)}
            disabled={isLoading}
          >
            {branches.map((branch) => (
              <option key={branch} value={branch}>
                {branch + (branch === currentBranch ? ' (current)' : '')}
              </option>
            ))}
          </select>
        </div>
        
        <div className="branch-selector">
          <label htmlFor="targetBranch">Target Branch (base branch):</label>
          <select
            id="targetBranch"
            value={targetBranch}
            onChange={(e) => onTargetBranchChange(e.target.value)}
          >
            {branches.map((branch) => (
              <option key={branch} value={branch}>
                {branch}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="button-container">
        <Button
          variant="primary"
          onClick={onReview}
          disabled={isLoading}
          loading={isLoading}
          className="review-pr-button"
        >
          {isLoading ? 'Reviewing...' : 'Review PR Changes'}
        </Button>
      </div>
    </div>
  );
}