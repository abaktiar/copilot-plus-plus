(function() {
    const e = React.createElement;
    // Get VS Code API instance once at the top level
    const vscode = acquireVsCodeApi();
    
    class ErrorBoundary extends React.Component {
        constructor(props) {
            super(props);
            this.state = { hasError: false, error: null };
        }
        
        static getDerivedStateFromError(error) {
            return { hasError: true, error };
        }
        
        render() {
            if (this.state.hasError) {
                // Log error to extension
                vscode.postMessage({
                    command: 'logError',
                    message: this.state.error?.message || 'Unknown error'
                });
                return e('div', { className: 'error' },
                    'Something went wrong: ',
                    this.state.error?.message || 'Unknown error'
                );
            }
            return this.props.children;
        }
    }
    
    function SidebarApp() {
        const [initialized, setInitialized] = React.useState(false);
        const [branches, setBranches] = React.useState([]);
        const [sourceBranch, setSourceBranch] = React.useState('');
        const [targetBranch, setTargetBranch] = React.useState('');
        const [isLoading, setIsLoading] = React.useState(false);
        const [error, setError] = React.useState('');
        const [result, setResult] = React.useState(null);

        // Initial load - request branches
        React.useEffect(() => {
            const handleMessage = (event) => {
                const message = event.data;
                
                // Log received message
                vscode.postMessage({
                    command: 'log',
                    message: `Received message: ${message.command}`
                });
                
                switch (message.command) {
                    case 'branchesList':
                        setBranches(message.branches || []);
                        setSourceBranch(message.currentBranch || '');
                        // Set target branch to main/master if available
                        const defaultTarget = message.branches.find(b => 
                            ['main', 'master', 'develop'].includes(b.toLowerCase())
                        );
                        setTargetBranch(defaultTarget || '');
                        setInitialized(true);
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
                        // Log error to extension
                        vscode.postMessage({
                            command: 'logError',
                            message: message.message
                        });
                        break;
                    case 'generationComplete':
                        setResult(message.result);
                        setIsLoading(false);
                        break;
                }
            };

            window.addEventListener('message', handleMessage);
            
            // Log initialization
            vscode.postMessage({
                command: 'log',
                message: 'Initializing PR Description view and requesting branches...'
            });
            
            vscode.postMessage({ command: 'getBranches' });
            
            return () => {
                window.removeEventListener('message', handleMessage);
            };
        }, []);

        // Generate PR description
        const handleGeneratePR = () => {
            if (!sourceBranch || !targetBranch) {
                const errorMsg = 'Please select both source and target branches';
                setError(errorMsg);
                vscode.postMessage({
                    command: 'logError',
                    message: errorMsg
                });
                return;
            }
            
            setIsLoading(true);
            setError('');
            
            vscode.postMessage({
                command: 'log',
                message: `Generating PR description for ${sourceBranch} → ${targetBranch}...`
            });
            
            vscode.postMessage({ 
                command: 'generatePrDescription',
                sourceBranch,
                targetBranch
            });
        };

        // Copy to clipboard
        const handleCopy = (text) => {
            vscode.postMessage({
                command: 'log',
                message: 'Copying content to clipboard...'
            });
            
            vscode.postMessage({
                command: 'copyToClipboard',
                text
            });
        };

        if (!initialized) {
            return e('div', { className: 'loading' },
                e('div', { className: 'spinner' }),
                e('div', null, 'Loading branches...')
            );
        }

        // Render UI
        return e('div', { className: 'container' },
            e('h1', { className: 'heading' }, 'PR Description Generator'),
            
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
                    onClick: handleGeneratePR,
                    disabled: isLoading || !sourceBranch || !targetBranch,
                    className: 'generate-button'
                }, 
                    isLoading ? 'Generating...' : 'Generate PR Description'
                )
            ),
            
            error && e('div', { className: 'error' }, error),
            
            isLoading && e('div', { className: 'loading' },
                e('div', { className: 'spinner' }),
                e('div', null, 'Analyzing changes and generating description...')
            ),
            
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

    // Initialize React with error boundary
    const domContainer = document.getElementById('root');
    const root = ReactDOM.createRoot(domContainer);
    root.render(e(ErrorBoundary, null,
        e(SidebarApp)
    ));
})();