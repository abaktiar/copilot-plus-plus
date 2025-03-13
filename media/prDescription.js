(function() {
    const e = React.createElement;
    
    // Main Application Component
    function PrDescriptionApp() {
        const [branches, setBranches] = React.useState([]);
        const [sourceBranch, setSourceBranch] = React.useState('');
        const [targetBranch, setTargetBranch] = React.useState('');
        const [isLoading, setIsLoading] = React.useState(false);
        const [error, setError] = React.useState('');
        const [result, setResult] = React.useState(null);
        const vscode = acquireVsCodeApi();

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
                    // Set target branch to main/master if available
                    const defaultTarget = message.branches.find(b => 
                        ['main', 'master', 'develop'].includes(b.toLowerCase())
                    );
                    setTargetBranch(defaultTarget || '');
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
                    setResult(message.result);
                    setIsLoading(false);
                    break;
            }
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
                targetBranch
            });
        };

        // Copy to clipboard
        const handleCopy = (text) => {
            vscode.postMessage({
                command: 'copyToClipboard',
                text
            });
        };

        // Render UI
        return e('div', { className: 'container' },
            e('h1', { className: 'heading' }, 'PR Description Generator'),
            
            // Branch selection form
            e('div', { className: 'branch-selection' },
                e('div', { className: 'form-group' },
                    e('label', null, 'Source Branch (with changes)'),
                    e('select', {
                        value: sourceBranch,
                        onChange: (e) => setSourceBranch(e.target.value),
                        className: 'select-branch'
                    },
                        e('option', { value: '' }, 'Select branch'),
                        branches.map(branch => 
                            e('option', { key: branch, value: branch }, branch)
                        )
                    )
                ),
                
                e('div', { className: 'form-group' },
                    e('label', null, 'Target Branch (merge into)'),
                    e('select', {
                        value: targetBranch,
                        onChange: (e) => setTargetBranch(e.target.value),
                        className: 'select-branch'
                    },
                        e('option', { value: '' }, 'Select branch'),
                        branches
                            .filter(branch => branch !== sourceBranch)
                            .map(branch => 
                                e('option', { key: branch, value: branch }, branch)
                            )
                    )
                ),
                
                e('button', {
                    onClick: handleGenerate,
                    disabled: isLoading || !sourceBranch || !targetBranch,
                    className: 'generate-button'
                }, 
                    isLoading ? 'Generating...' : 'Generate PR Description'
                )
            ),
            
            // Error message
            error && e('div', { className: 'error' }, error),
            
            // Loading indicator
            isLoading && e('div', { className: 'loading' },
                e('div', { className: 'spinner' }),
                e('div', null, 'Analyzing changes and generating description...')
            ),
            
            // Results
            result && e('div', { className: 'results' },
                e('div', { className: 'result-section' },
                    e('div', { className: 'result-header' },
                        e('h3', null, 'PR Title'),
                        e('button', { 
                            className: 'copy-button',
                            onClick: () => handleCopy(result.title)
                        }, 'Copy')
                    ),
                    e('div', { className: 'result-content title-content' }, result.title)
                ),
                
                e('div', { className: 'result-section' },
                    e('div', { className: 'result-header' },
                        e('h3', null, 'PR Description'),
                        e('button', { 
                            className: 'copy-button',
                            onClick: () => handleCopy(result.description)
                        }, 'Copy')
                    ),
                    e('div', { 
                        className: 'result-content description-content markdown-body',
                        dangerouslySetInnerHTML: { __html: marked.parse(result.description) }
                    })
                ),
                
                e('div', { className: 'copy-all' },
                    e('button', {
                        className: 'copy-all-button',
                        onClick: () => handleCopy(`# ${result.title}\n\n${result.description}`)
                    }, 'Copy Complete PR (Title + Description)')
                )
            )
        );
    }

    // Initialize React
    const domContainer = document.getElementById('root');
    const root = ReactDOM.createRoot(domContainer);
    root.render(e(PrDescriptionApp));
})();