import React from 'react';
import { Button, BranchDropdown, ModelDropdown } from '../../shared/components';
import { ModelConfig } from '../../shared/config/models';

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
    <div className='container'>
      <div className='header-row'>
        <h2 className='heading'>PR Review Assistant</h2>

        {/* Language Model Selector in top right */}
        <div className='model-selector-top'>
          <ModelDropdown models={models} selectedModel={selectedModel} onModelChange={onModelChange} />
        </div>
      </div>

      {/* Interactive Branch Selector with Review Button */}
      <div className='branch-selector-card'>
        <div className='branch-flow'>
          <BranchDropdown
            branches={branches}
            selectedBranch={sourceBranch}
            onBranchChange={onSourceBranchChange}
            label='source'
            placeholder='Select source branch'
            currentBranch={currentBranch}
          />
          <span className='branch-arrow'>→</span>
          <BranchDropdown
            branches={branches.filter((b) => b !== sourceBranch)}
            selectedBranch={targetBranch}
            onBranchChange={onTargetBranchChange}
            label='target'
            placeholder='Select target branch'
            currentBranch={currentBranch}
          />
        </div>

        <div className='generate-section'>
          <Button
            variant='primary'
            onClick={onReview}
            disabled={isLoading || !sourceBranch || !targetBranch}
            loading={isLoading}
            className='review-pr-button'>
            {isLoading ? (
              'Reviewing...'
            ) : (
              <>
                <span className='icon'>✨</span>
                Review PR Changes
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}