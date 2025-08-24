import React from 'react';
import { BranchSelector } from '../../shared/components';

interface BranchSelectionProps {
  branches: string[];
  sourceBranch: string;
  targetBranch: string;
  onSourceBranchChange: (branch: string) => void;
  onTargetBranchChange: (branch: string) => void;
}

export function BranchSelection({
  branches,
  sourceBranch,
  targetBranch,
  onSourceBranchChange,
  onTargetBranchChange
}: BranchSelectionProps) {
  // Filter target branches to exclude the selected source branch
  const availableTargetBranches = branches.filter(branch => branch !== sourceBranch);

  return (
    <div className="branch-selection">
      <BranchSelector
        branches={branches}
        selectedBranch={sourceBranch}
        onBranchChange={onSourceBranchChange}
        label="Source Branch (with changes)"
      />

      <BranchSelector
        branches={availableTargetBranches}
        selectedBranch={targetBranch}
        onBranchChange={onTargetBranchChange}
        label="Target Branch (merge into)"
      />
    </div>
  );
}