(function() {
    const e = React.createElement;
    
    // Main Application Component
    function PrDescriptionApp() {
      const [branches, setBranches] = React.useState([]);
      const [sourceBranch, setSourceBranch] = React.useState('');
      const [targetBranch, setTargetBranch] = React.useState('');
      const [selectedModel, setSelectedModel] = React.useState('gpt-4o');
      const [isLoading, setIsLoading] = React.useState(false);
      const [error, setError] = React.useState('');
      const [result, setResult] = React.useState(null);
      const vscode = acquireVsCodeApi();

      // Model options
      const models = [
        { id: 'gpt-4o', name: 'GPT-4o : Most capable model, best for complex understanding' },
        { id: 'gpt-4o-mini', name: 'GPT-4o-mini : Faster variant with slightly reduced capabilities' },
        {
          id: 'claude-3.5-sonnet',
          name: "Claude 3.5 Sonnet : Anthropic's model with excellent context understanding",
        },
        { id: 'o1', name: 'o1 : OpenAI o1 model, highest reasoning capabilities' },
        { id: 'o1-mini', name: 'o1-mini : Smaller, faster OpenAI o1 model' },
      ];

      // Initial load - request branches
      React.useEffect(() => {
        window.addEventListener('message', handleMessage);
        vscode.postMessage({ command: 'getBranches' });

        return () => {
          window.removeEventListener('message', handleMessage);
        };
      }, []);

      // Handle messages from extension
      const handleMessage = (event) => {
        const message = event.data;
        switch (message.command) {
          case 'branchesList':
            setBranches(message.branches || []);
            setSourceBranch(message.currentBranch || '');

            // Set the selected model if provided from backend
            if (message.languageModel) {
              setSelectedModel(message.languageModel);
            }

            // First check for defaultTargetBranch from config
            if (message.defaultTargetBranch && message.branches.includes(message.defaultTargetBranch)) {
              setTargetBranch(message.defaultTargetBranch);
            } else {
              // Fall back to main/master/develop if available
              const defaultTarget = message.branches.find((b) =>
                ['main', 'master', 'develop'].includes(b.toLowerCase())
              );
              setTargetBranch(defaultTarget || '');
            }
            break;
          case 'startLoading':
            setIsLoading(true);
            setError('');
            setResult(null);
            break;
          case 'stopLoading':
            setIsLoading(false);
            break;
          case 'error':
            setError(message.message);
            setIsLoading(false);
            break;
          case 'generationComplete':
            // Ensure we have valid data before updating the state
            if (message.result) {
              // Sanitize the result to ensure it has the correct properties
              const sanitizedResult = {
                title: sanitizeText(message.result.title || ''),
                description: sanitizeText(message.result.description || ''),
              };
              setResult(sanitizedResult);
            } else {
              setError('Received empty result from the server');
            }
            setIsLoading(false);
            break;
        }
      };

      // Sanitize text content to ensure it's properly displayed
      const sanitizeText = (text) => {
        if (!text) return '';
        // Remove any JSON wrapper if present (sometimes occurs with Claude responses)
        if (text.includes('"title"') && text.includes('"description"')) {
          try {
            const jsonObj = JSON.parse(text);
            return jsonObj.description || text;
          } catch (e) {
            // Not valid JSON, continue with original text
          }
        }
        return text;
      };

      // Generate PR description
      const handleGenerate = () => {
        if (!sourceBranch || !targetBranch) {
          setError('Please select both source and target branches');
          return;
        }
        vscode.postMessage({
          command: 'generatePrDescription',
          sourceBranch,
          targetBranch,
          modelFamily: selectedModel,
        });
      };

      // Copy to clipboard
      const handleCopy = (text) => {
        vscode.postMessage({
          command: 'copyToClipboard',
          text,
        });
      };

      // Safely render markdown content
      const renderMarkdown = (content) => {
        try {
          return { __html: marked.parse(content) };
        } catch (err) {
          console.error('Error parsing markdown:', err);
          return { __html: `<pre>${content}</pre>` };
        }
      };

      // Render UI
      return e(
        'div',
        { className: 'container' },
        e('h1', { className: 'heading' }, 'PR Description Generator'),

        // Branch selection form
        e(
          'div',
          { className: 'branch-selection' },
          e(
            'div',
            { className: 'form-group' },
            e('label', null, 'Source Branch (with changes)'),
            e(
              'div',
              { className: 'select-wrapper' },
              e(
                'select',
                {
                  value: sourceBranch,
                  onChange: (e) => setSourceBranch(e.target.value),
                  className: 'select-branch',
                },
                e('option', { value: '' }, 'Select branch'),
                branches.map((branch) => e('option', { key: branch, value: branch }, branch))
              )
            )
          ),

          e(
            'div',
            { className: 'form-group' },
            e('label', null, 'Target Branch (merge into)'),
            e(
              'div',
              { className: 'select-wrapper' },
              e(
                'select',
                {
                  value: targetBranch,
                  onChange: (e) => setTargetBranch(e.target.value),
                  className: 'select-branch',
                },
                e('option', { value: '' }, 'Select branch'),
                branches
                  .filter((branch) => branch !== sourceBranch)
                  .map((branch) => e('option', { key: branch, value: branch }, branch))
              )
            )
          ),

          // Model selection
          e(
            'div',
            { className: 'form-group model-selector' },
            e('label', { htmlFor: 'modelSelect' }, 'Language Model'),
            e(
              'div',
              { className: 'select-wrapper' },
              e(
                'select',
                {
                  id: 'modelSelect',
                  value: selectedModel,
                  onChange: (e) => setSelectedModel(e.target.value),
                  className: 'select-branch',
                },
                models.map((model) => e('option', { key: model.id, value: model.id }, model.name))
              )
            )
          ),

          e(
            'button',
            {
              onClick: handleGenerate,
              disabled: isLoading || !sourceBranch || !targetBranch,
              className: 'generate-button',
            },
            isLoading
              ? 'Generating...'
              : e(React.Fragment, null, e('span', { className: 'icon' }, '✨'), 'Generate PR Description')
          )
        ),

        // Error message
        error && e('div', { className: 'error' }, error),

        // Loading indicator
        isLoading &&
          e(
            'div',
            { className: 'loading' },
            e('div', { className: 'spinner' }),
            e('div', null, 'Analyzing changes and generating description...')
          ),

        // Results
        result &&
          e(
            'div',
            { className: 'results' },
            e(
              'div',
              { className: 'result-section' },
              e(
                'div',
                { className: 'result-header' },
                e('h3', null, 'PR Title'),
                e(
                  'button',
                  {
                    className: 'copy-button',
                    onClick: () => handleCopy(result.title),
                  },
                  'Copy'
                )
              ),
              e('div', { className: 'result-content title-content' }, result.title)
            ),

            e(
              'div',
              { className: 'result-section' },
              e(
                'div',
                { className: 'result-header' },
                e('h3', null, 'PR Description'),
                e(
                  'button',
                  {
                    className: 'copy-button',
                    onClick: () => handleCopy(result.description),
                  },
                  'Copy'
                )
              ),
              e('div', {
                className: 'result-content description-content markdown-body',
                dangerouslySetInnerHTML: renderMarkdown(result.description),
              })
            ),

            e(
              'div',
              { className: 'copy-all' },
              e(
                'button',
                {
                  className: 'copy-all-button',
                  onClick: () => handleCopy(`# ${result.title}\n\n${result.description}`),
                },
                'Copy Complete PR (Title + Description)'
              )
            )
          )
      );
    }
    // Initialize React
    const domContainer = document.getElementById('root');
    const root = ReactDOM.createRoot(domContainer);
    root.render(e(PrDescriptionApp));
})();