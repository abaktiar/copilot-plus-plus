import React from 'react';
import { ModelSelector, Button } from '../../shared/components';
import { ModelConfig } from '../../shared/types';

interface GenerationFormProps {
  models: ModelConfig[];
  selectedModel: string;
  onModelChange: (model: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
  canGenerate: boolean;
}

export function GenerationForm({
  models,
  selectedModel,
  onModelChange,
  onGenerate,
  isLoading,
  canGenerate
}: GenerationFormProps) {
  return (
    <div className="generation-form">
      <ModelSelector
        models={models}
        selectedModel={selectedModel}
        onModelChange={onModelChange}
      />

      <Button
        variant="primary"
        onClick={onGenerate}
        disabled={isLoading || !canGenerate}
        loading={isLoading}
        className="generate-button"
      >
        {isLoading ? (
          'Generating...'
        ) : (
          <>
            <span className="icon">✨</span>
            Generate PR Description
          </>
        )}
      </Button>
    </div>
  );
}