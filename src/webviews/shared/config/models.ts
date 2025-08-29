export interface ModelConfig {
  id: string;
  name: string;
  family?: string;
  contextWindow?: number;
  maxTokens?: number;
  supportsVision?: boolean;
  usageTag?: string;
  costPer1kTokens?: {
    input: number;
    output: number;
  };
}

export const AVAILABLE_MODELS: ModelConfig[] = [
  {
    id: 'gpt-4o',
    name: 'GPT-4o : Most capable model, best for complex understanding',
    family: 'openai',
    contextWindow: 128000,
    maxTokens: 4096,
    supportsVision: true,
    costPer1kTokens: {
      input: 0.005,
      output: 0.015
    }
  },
  {
    id: 'gpt-4o-mini',
    name: 'GPT-4o-mini : Faster variant with slightly reduced capabilities',
    family: 'openai',
    contextWindow: 128000,
    maxTokens: 16384,
    supportsVision: true,
    costPer1kTokens: {
      input: 0.00015,
      output: 0.0006
    }
  },
  {
    id: 'gpt-4.1',
    name: 'GPT-4.1 : Latest GPT-4 model with enhanced capabilities',
    family: 'openai',
    contextWindow: 128000,
    maxTokens: 4096,
    supportsVision: true,
    costPer1kTokens: {
      input: 0.01,
      output: 0.03
    }
  },
  {
    id: 'gpt-5',
    name: 'GPT-5 : Next generation GPT model with larger context and improved capability',
    family: 'openai',
    contextWindow: 200000,
    maxTokens: 8192,
    supportsVision: true
  },
  {
    id: 'gpt-5-mini',
    name: 'GPT-5 Mini : Next generation mini model with improved efficiency and capabilities',
    family: 'openai',
    contextWindow: 128000,
    maxTokens: 16384,
    supportsVision: true
  },
  {
    id: 'claude-3.5-sonnet',
    name: "Claude 3.5 Sonnet : Anthropic's most capable model with advanced reasoning",
    family: 'anthropic',
    contextWindow: 200000,
    maxTokens: 8192,
    supportsVision: true,
    costPer1kTokens: {
      input: 0.003,
      output: 0.015
    }
  },
  {
    id: 'claude-sonnet-4',
    name: 'Claude 4 Sonnet : Latest Anthropic model with enhanced capabilities',
    family: 'anthropic',
    contextWindow: 200000,
    maxTokens: 8192,
    supportsVision: true
  },
  {
    id: 'o1',
    name: 'o1 : OpenAI o1 model, highest reasoning capabilities',
    family: 'openai',
    contextWindow: 128000,
    maxTokens: 32768,
    costPer1kTokens: {
      input: 0.015,
      output: 0.06
    }
  },
  {
    id: 'o1-mini',
    name: 'o1-mini : Smaller, faster OpenAI o1 model',
    family: 'openai',
    contextWindow: 128000,
    maxTokens: 65536,
    costPer1kTokens: {
      input: 0.003,
      output: 0.012
    }
  }
];

export const DEFAULT_MODEL = 'gpt-5-mini';

// Helper functions
export function getModelById(id: string): ModelConfig | undefined {
  return AVAILABLE_MODELS.find(model => model.id === id);
}

export function getModelsByFamily(family: string): ModelConfig[] {
  return AVAILABLE_MODELS.filter(model => model.family === family);
}

export function getModelFamilies(): string[] {
  return [...new Set(AVAILABLE_MODELS.map(model => model.family).filter(Boolean))] as string[];
}
