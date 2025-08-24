import React from 'react';
import { Button } from '../../shared/components';
import { PrResult } from '../PrDescriptionApp';

interface ResultDisplayProps {
  result: PrResult;
  onCopy: (text: string) => void;
}

export function ResultDisplay({ result, onCopy }: ResultDisplayProps) {
  // Safely render markdown content
  const renderMarkdown = (content: string) => {
    try {
      if (window.marked?.parse) {
        return { __html: window.marked.parse(content) };
      }
      return { __html: `<pre>${content}</pre>` };
    } catch (err) {
      console.error('Error parsing markdown:', err);
      return { __html: `<pre>${content}</pre>` };
    }
  };

  return (
    <div className="results">
      <div className="result-section">
        <div className="result-header">
          <h3>PR Title</h3>
          <button
            className="copy-button"
            onClick={() => onCopy(result.title)}
          >
            Copy Title
          </button>
        </div>
        <div className="result-content title-content">
          {result.title}
        </div>
      </div>

      <div className="result-section">
        <div className="result-header">
          <h3>PR Description</h3>
          <button
            className="copy-button"
            onClick={() => onCopy(result.description)}
          >
            Copy Description
          </button>
        </div>
        <div 
          className="result-content description-content markdown-body"
          dangerouslySetInnerHTML={renderMarkdown(result.description)}
        />
      </div>

      <div className="copy-all">
        <button
          className="copy-all-button"
          onClick={() => onCopy(`${result.title}\n\n${result.description}`)}
        >
          Copy Complete PR (Title + Description)
        </button>
      </div>
    </div>
  );
}