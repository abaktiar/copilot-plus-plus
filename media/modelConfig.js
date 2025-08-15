// Model configuration shared across all UI components
(function() {
    // Make the models array available globally
    window.sharedModelConfig = {
      models: [
        { id: 'gpt-4o', name: 'GPT-4o : Most capable model, best for complex understanding' },
        { id: 'gpt-4o-mini', name: 'GPT-4o-mini : Faster variant with slightly reduced capabilities' },
        { id: 'gpt-4.1', name: 'GPT-4.1 : Latest GPT-4 model with enhanced capabilities' },
        { id: 'gpt-5', name: 'GPT-5 : Next generation GPT model with larger context and improved capability' },
        { id: 'gpt-5-mini', name: 'GPT-5 Mini : Next generation mini model with improved efficiency and capabilities' },
        { id: 'claude-3.5-sonnet', name: "Claude 3.5 Sonnet : Anthropic's most capable model with advanced reasoning" },
        { id: 'claude-sonnet-4', name: 'Claude 4 Sonnet : Latest Anthropic model with enhanced capabilities' },
        { id: 'o1', name: 'o1 : OpenAI o1 model, highest reasoning capabilities' },
        { id: 'o1-mini', name: 'o1-mini : Smaller, faster OpenAI o1 model' },
      ],
    };
})();