import React, { useEffect, useId, useRef, useState } from 'react';
import { ModelConfig } from '../config/models';

interface ModelDropdownProps {
  models: ModelConfig[];
  selectedModel: string;
  onModelChange: (modelId: string) => void;
}

export function ModelDropdown({
  models,
  selectedModel,
  onModelChange
}: ModelDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const listboxId = useId();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setHighlightedIndex(-1);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleModelSelect = (modelId: string) => {
    onModelChange(modelId);
    setIsOpen(false);
    setQuery('');
    setHighlightedIndex(-1);
  };

  const selectedModelData = models.find(m => m.id === selectedModel);
  const filteredModels = models.filter((m) => {
    const hay = `${m.name} ${m.id} ${m.usageTag || ''}`.toLowerCase();
    return hay.includes(query.toLowerCase());
  });

  // Focus search when opening
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 0);
      const currentIndex = filteredModels.findIndex((m) => m.id === selectedModel);
      setHighlightedIndex(currentIndex >= 0 ? currentIndex : (filteredModels.length > 0 ? 0 : -1));
    }
  }, [isOpen]);

  // Reset highlight when filter changes
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const currentIndex = filteredModels.findIndex((m) => m.id === selectedModel);
    if (currentIndex >= 0) {
      setHighlightedIndex(currentIndex);
    } else {
      setHighlightedIndex(filteredModels.length > 0 ? 0 : -1);
    }
  }, [query]);

  const moveHighlight = (delta: number) => {
    if (filteredModels.length === 0) {
      return;
    }
    setHighlightedIndex((prev) => {
      const next = prev < 0 ? 0 : (prev + delta + filteredModels.length) % filteredModels.length;
      return next;
    });
  };

  const handleButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        moveHighlight(1);
        break;
      case 'ArrowUp':
        e.preventDefault();
        moveHighlight(-1);
        break;
      case 'Home':
        e.preventDefault();
        if (filteredModels.length > 0) {
          setHighlightedIndex(0);
        }
        break;
      case 'End':
        e.preventDefault();
        if (filteredModels.length > 0) {
          setHighlightedIndex(filteredModels.length - 1);
        }
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleModelSelect(filteredModels[highlightedIndex].id);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
    }
  };

  return (
    <div className="model-dropdown" ref={dropdownRef}>
      <button
        className={`model-button ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleButtonKeyDown}
        title="Click to select language model"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-label="Select language model"
      >
        <span className="model-label">model:</span>
        <code className="model-name">
          {selectedModelData
            ? `${selectedModelData.name.split(':')[0].trim()}${selectedModelData.usageTag ? ` — ${selectedModelData.usageTag}` : ''}`
            : selectedModel}
        </code>
        <span className="dropdown-arrow">▼</span>
      </button>
      
      {isOpen && (
        <div
          className="model-dropdown-menu"
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              e.preventDefault();
              setIsOpen(false);
              setHighlightedIndex(-1);
            }
          }}
        >
          <div className="model-search">
            <input
              ref={searchInputRef}
              className="model-search-input"
              type="text"
              placeholder="Search models"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              aria-controls={listboxId}
              aria-activedescendant={highlightedIndex >= 0 ? `${listboxId}-option-${highlightedIndex}` : undefined}
              aria-label="Search models"
            />
          </div>
          <div className="model-list" role="listbox" id={listboxId} aria-label="Language model options">
            {filteredModels.length === 0 ? (
              <div className="model-empty" role="status" aria-live="polite">No matches</div>
            ) : (
              filteredModels.map((model, idx) => (
                <button
                  key={model.id}
                  id={`${listboxId}-option-${idx}`}
                  className={`model-option ${model.id === selectedModel ? 'selected' : ''} ${highlightedIndex === idx ? 'highlighted' : ''}`}
                  onClick={() => handleModelSelect(model.id)}
                  role="option"
                  aria-selected={model.id === selectedModel}
                  onMouseEnter={() => setHighlightedIndex(idx)}
                >
                  <div className="model-option-content">
                    <span className="model-option-name">
                      {model.name.split(':')[0].trim()}
                      {model.usageTag ? ` — ${model.usageTag}` : ''}
                    </span>
                    {model.name.includes(':') && (
                      <span className="model-option-desc">{model.name.split(':')[1].trim()}</span>
                    )}
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
