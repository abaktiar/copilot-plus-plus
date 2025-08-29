import React, { useState, useRef, useEffect } from 'react';
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
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
  };

  const selectedModelData = models.find(m => m.id === selectedModel);

  return (
    <div className="model-dropdown" ref={dropdownRef}>
      <button
        className={`model-button ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title="Click to select language model"
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
        <div className="model-dropdown-menu">
          {models.map((model) => (
            <button
              key={model.id}
              className={`model-option ${model.id === selectedModel ? 'selected' : ''}`}
              onClick={() => handleModelSelect(model.id)}
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
          ))}
        </div>
      )}
    </div>
  );
}
