import React from 'react';
import { ModelSelector, Button } from '../../shared/components';
import { ModelConfig } from '../../shared';

interface GenerationFormProps {
  models: ModelConfig[];
  selectedModel: string;
  onModelChange: (model: string) => void;
  onGenerate: () => void;
  onCancel?: () => void;
  isLoading: boolean;
  canGenerate: boolean;
}

export function GenerationForm({
  models,
  selectedModel,
  onModelChange,
  onGenerate,
  onCancel,
  isLoading,
  canGenerate
}: GenerationFormProps) {
  return (
    <div className='generation-form'>
      <div className='model-and-action'>
        <ModelSelector models={models} selectedModel={selectedModel} onModelChange={onModelChange} />

        <div className='action-buttons'>
          <Button
            variant='primary'
            onClick={onGenerate}
            disabled={isLoading || !canGenerate}
            loading={isLoading}
            className='generate-button'>
            {isLoading ? (
              'Generating...'
            ) : (
              <>
                <span className='icon'>✨</span>
                Generate PR Description
              </>
            )}
          </Button>

          {isLoading && (
            <Button variant='secondary' onClick={onCancel} className='cancel-button'>
              Cancel
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}