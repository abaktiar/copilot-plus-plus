import React from 'react';
import { BranchSelector, Button } from '../../shared/components';

interface AnalysisConfigurationProps {
  branches: string[];
  sourceBranch: string;
  targetBranch: string;
  onSourceBranchChange: (branch: string) => void;
  onTargetBranchChange: (branch: string) => void;
  onAnalyze: () => void;
  isLoading: boolean;
  canAnalyze: boolean;
}

export function AnalysisConfiguration({
  branches,
  sourceBranch,
  targetBranch,
  onSourceBranchChange,
  onTargetBranchChange,
  onAnalyze,
  isLoading,
  canAnalyze
}: AnalysisConfigurationProps) {
  return (
    <>
      {/* Branch selection row */}
      <div className="branch-selection-row">
        <div className="branch-selector">
          <BranchSelector
            branches={branches}
            selectedBranch={sourceBranch}
            onBranchChange={onSourceBranchChange}
            label="Source Branch (PR branch)"
          />
        </div>
        <div className="branch-selector">
          <BranchSelector
            branches={branches}
            selectedBranch={targetBranch}
            onBranchChange={onTargetBranchChange}
            label="Target Branch (base branch)"
          />
        </div>
      </div>

      {/* Analyze button row */}
      <div className="analyze-button-row">
        <Button
          onClick={onAnalyze}
          disabled={isLoading || !canAnalyze}
          loading={isLoading}
          variant="primary"
        >
          {isLoading ? 'Analyzing...' : 'Analyze Breaking Changes'}
        </Button>
      </div>
    </>
  );
}