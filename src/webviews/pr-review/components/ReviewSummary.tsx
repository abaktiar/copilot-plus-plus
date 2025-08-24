import React, { useState } from 'react';
import { Button, Icon } from '../../shared/components';

interface ReviewSummaryData {
  assessment: string;
  strengths: string[];
  criticalIssues: string[];
  recommendations: string[];
}

interface ReviewSummaryProps {
  summary: ReviewSummaryData;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

interface SummarySectionProps {
  title: string;
  content?: string;
  items?: string[];
  className?: string;
}

function SummarySection({ title, content, items, className }: SummarySectionProps) {
  return (
    <div className={`summary-section ${className || ''}`}>
      <h3>{title}</h3>
      {content && <p>{content}</p>}
      {items && items.length > 0 && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ReviewSummary({ 
  summary, 
  isCollapsed, 
  onToggleCollapse 
}: ReviewSummaryProps) {
  const [isCopied, setIsCopied] = useState(false);

  const formatReviewAsMarkdown = (summary: ReviewSummaryData) => {
    let markdown = '## Code Review Summary\n\n';

    // Add overall assessment
    markdown += '### Overall Assessment\n';
    markdown += summary.assessment + '\n\n';

    // Add strengths
    if (summary.strengths && summary.strengths.length > 0) {
      markdown += '### Key Strengths ✨\n';
      summary.strengths.forEach((strength) => {
        markdown += `* ${strength}\n`;
      });
      markdown += '\n';
    }

    // Add critical issues if any
    if (summary.criticalIssues && summary.criticalIssues.length > 0) {
      markdown += '### Critical Issues to Address 🚨\n';
      summary.criticalIssues.forEach((issue) => {
        markdown += `* ${issue}\n`;
      });
      markdown += '\n';
    }

    // Add recommendations
    if (summary.recommendations && summary.recommendations.length > 0) {
      markdown += '### Recommendations 💡\n';
      summary.recommendations.forEach((rec) => {
        markdown += `* ${rec}\n`;
      });
      markdown += '\n';
    }

    return markdown;
  };

  const handleCopyMarkdown = async () => {
    try {
      const markdown = formatReviewAsMarkdown(summary);
      await navigator.clipboard.writeText(markdown);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
    }
  };

  return (
    <div className="summary-container">
      <div className="summary-toggle" onClick={onToggleCollapse}>
        <h2>Review Summary</h2>
        <span className="toggle-icon">
          {isCollapsed ? '▶' : '▼'}
        </span>
      </div>

      {!isCollapsed && (
        <div className="pr-summary">
          <div className="summary-header">
            <Button
              variant="secondary"
              size="small"
              onClick={handleCopyMarkdown}
              className="copy-markdown-button"
            >
              <Icon name={isCopied ? 'check' : 'copy'} size={14} />
              {isCopied ? 'Copied!' : 'Copy All Review'}
            </Button>
          </div>

          <SummarySection
            title="Overall Assessment"
            content={summary.assessment}
          />

          <SummarySection
            title="Key Strengths"
            items={summary.strengths}
            className="key-strengths"
          />

          {summary.criticalIssues.length > 0 && (
            <SummarySection
              title="Critical Issues to Address"
              items={summary.criticalIssues}
              className="critical-issues"
            />
          )}

          <SummarySection
            title="Recommendations"
            items={summary.recommendations}
          />
        </div>
      )}
    </div>
  );
}