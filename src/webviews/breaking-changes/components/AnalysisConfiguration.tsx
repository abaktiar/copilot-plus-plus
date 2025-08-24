import React from 'react';
import { BranchDropdown, Button } from '../../shared/components';

interface AnalysisConfigurationProps {
  branches: string[];
  sourceBranch: string;
  targetBranch: string;
  onSourceBranchChange: (branch: string) => void;
  onTargetBranchChange: (branch: string) => void;
  onAnalyze: () => void;
  isLoading: boolean;
  canAnalyze: boolean;
  currentBranch?: string;
}

export function AnalysisConfiguration({
  branches,
  sourceBranch,
  targetBranch,
  onSourceBranchChange,
  onTargetBranchChange,
  onAnalyze,
  isLoading,
  canAnalyze,
  currentBranch,
}: AnalysisConfigurationProps) {
  return (
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
          onClick={onAnalyze}
          disabled={isLoading || !canAnalyze}
          loading={isLoading}
          className='analyze-button'>
          {isLoading ? (
            'Analyzing...'
          ) : (
            <>
              <span className='icon'>✨</span>
              Analyze Breaking Changes
            </>
          )}
        </Button>
      </div>
    </div>
  );
}