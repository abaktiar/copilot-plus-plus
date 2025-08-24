import React from 'react';
import { BranchSelectorProps } from '../types';

export function BranchSelector({ 
  branches, 
  selectedBranch, 
  onBranchChange, 
  label 
}: BranchSelectorProps) {
  return (
    <div className="branch-selector">
      <label htmlFor={`branch-select-${label.toLowerCase().replace(/\s+/g, '-')}`}>
        {label}:
      </label>
      <select
        id={`branch-select-${label.toLowerCase().replace(/\s+/g, '-')}`}
        value={selectedBranch}
        onChange={(e) => onBranchChange(e.target.value)}
        className="branch-select"
      >
        <option value="">Select a branch...</option>
        {branches.map((branch) => (
          <option key={branch} value={branch}>
            {branch}
          </option>
        ))}
      </select>
    </div>
  );
}