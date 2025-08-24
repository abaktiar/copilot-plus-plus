import React from 'react';
import { ModelSelectorProps } from '../types';

export function ModelSelector({ selectedModel, onModelChange, models }: ModelSelectorProps) {
  return (
    <div className="model-selector">
      <label htmlFor="model-select">Language Model:</label>
      <select
        id="model-select"
        value={selectedModel}
        onChange={(e) => onModelChange(e.target.value)}
        className="model-select"
      >
        {models.map((model) => (
          <option key={model.id} value={model.id}>
            {model.name}
          </option>
        ))}
      </select>
    </div>
  );
}