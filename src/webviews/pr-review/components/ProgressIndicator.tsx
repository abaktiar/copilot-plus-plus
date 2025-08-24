import React from 'react';

interface PrProgressUpdate {
  completed: number;
  total: number;
  currentFile?: string;
}

interface ProgressIndicatorProps {
  progress: PrProgressUpdate;
}

export function ProgressIndicator({ progress }: ProgressIndicatorProps) {
  if (!progress) return null;

  const { completed, total, currentFile } = progress;
  const percent = Math.floor((completed / total) * 100);

  return (
    <div className="progress-container">
      <div className="progress-header">
        <span>Processing {completed} of {total} file groups ({percent}%)</span>
      </div>
      
      <div className="progress-bar-container">
        <div 
          className="progress-bar" 
          style={{ width: `${percent}%` }}
        />
      </div>
      
      {currentFile && (
        <div className="progress-current-file">
          <span>Currently processing: {currentFile}</span>
        </div>
      )}
    </div>
  );
}