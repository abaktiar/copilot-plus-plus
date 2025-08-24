import React from 'react';
import { marked } from 'marked';
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
      // Use the imported marked library
      const html = marked.parse(content);
      return { __html: html };
    } catch (err) {
      console.error('Error parsing markdown:', err);
      
      // Fallback: Basic markdown-like rendering for common cases
      const basicMarkdownToHtml = (text: string) => {
        let html = text
          // Headers
          .replace(/^### (.*$)/gm, '<h3>$1</h3>')
          .replace(/^## (.*$)/gm, '<h2>$1</h2>')
          .replace(/^# (.*$)/gm, '<h1>$1</h1>')
          // Bold and italic
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          // Code blocks (must come before inline code)
          .replace(/```([^`]*?)```/gs, '<pre><code>$1</code></pre>')
          .replace(/`(.*?)`/g, '<code>$1</code>')
          // Lists
          .replace(/^\* (.*$)/gm, '<li>$1</li>')
          // Clean up excessive whitespace and convert double line breaks to paragraph breaks
          .replace(/\n{3,}/g, '\n\n') // Reduce multiple line breaks to just two
          .replace(/\n\n/g, '</p><p>') // Convert double line breaks to paragraph breaks
          .replace(/\n/g, '<br>'); // Convert single line breaks to <br>

        // Wrap consecutive list items in ul tags
        html = html.replace(/(<li>.*?<\/li>(?:<br><li>.*?<\/li>)*)/gs, '<ul>$1</ul>');

        // Remove <br> tags that appear right before or after block elements
        html = html
          .replace(/<br><\/p>/g, '</p>')
          .replace(/<p><br>/g, '<p>')
          .replace(/<br><ul>/g, '<ul>')
          .replace(/<\/ul><br>/g, '</ul>')
          .replace(/<br><h([1-6])>/g, '<h$1>')
          .replace(/<\/h([1-6])><br>/g, '</h$1>');

        // Wrap content in paragraph tags if not already wrapped
        if (!html.includes('<p>') && !html.startsWith('<h') && !html.startsWith('<ul')) {
          html = `<p>${html}</p>`;
        } else if (!html.startsWith('<')) {
          html = `<p>${html}`;
        }

        // Ensure we close any open paragraph tags
        if (html.includes('<p>') && !html.includes('</p>')) {
          html += '</p>';
        }
        
        return html;
      };

      return { __html: basicMarkdownToHtml(content) };
    }
  };

  return (
    <div className='results'>
      <div className='result-section'>
        <div className='result-header'>
          <h3>PR Title</h3>
          <button className='copy-button' onClick={() => onCopy(result.title)}>
            Copy Title
          </button>
        </div>
        <div className='result-content title-content'>{result.title}</div>
      </div>

      <div className='result-section'>
        <div className='result-header'>
          <h3>PR Description</h3>
          <button className='copy-button' onClick={() => onCopy(result.description)}>
            Copy Description
          </button>
        </div>
        <div
          className='result-content description-content markdown-body compact'
          dangerouslySetInnerHTML={renderMarkdown(result.description)}
        />
      </div>

      <div className='copy-all'>
        <button className='copy-all-button' onClick={() => onCopy(`${result.title}\n\n${result.description}`)}>
          Copy Complete PR (Title + Description)
        </button>
      </div>
    </div>
  );
}