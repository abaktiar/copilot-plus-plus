// Model configuration shared across all UI components
(function() {
    // Make the models array available globally
    window.sharedModelConfig = {
        models: [
            { id: 'gpt-4o', name: 'GPT-4o : Most capable model, best for complex understanding' },
            { id: 'gpt-4o-mini', name: 'GPT-4o-mini : Faster variant with slightly reduced capabilities' },
            {
              id: 'claude-3.5-sonnet',
              name: "Claude 3.5 Sonnet : Anthropic's model with excellent context understanding",
            },
            { id: 'o1', name: 'o1 : OpenAI o1 model, highest reasoning capabilities' },
            { id: 'o1-mini', name: 'o1-mini : Smaller, faster OpenAI o1 model' },
        ]
    };
})();