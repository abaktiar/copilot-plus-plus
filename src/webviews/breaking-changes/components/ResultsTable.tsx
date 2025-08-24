import React from 'react';
import { BreakingChange } from '../BreakingChangesApp';
import { BreakingChangeItem } from './BreakingChangeItem';

interface ResultsTableProps {
  breakingChanges: BreakingChange[];
  onOpenFile: (filePath: string, lineNumber: number) => void;
}

export function ResultsTable({ breakingChanges, onOpenFile }: ResultsTableProps) {
  if (breakingChanges.length === 0) {
    return (
      <div className="breaking-changes-list">
        <p className="no-results">No breaking changes found matching the current filters.</p>
      </div>
    );
  }

  return (
    <div className="breaking-changes-list">
      {breakingChanges.map((change) => (
        <BreakingChangeItem
          key={change.id}
          change={change}
          onOpenFile={onOpenFile}
        />
      ))}
    </div>
  );
}