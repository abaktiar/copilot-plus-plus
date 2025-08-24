import { useEffect, useRef, useState } from 'react';
import { VSCodeAPI, WebviewRequest, ExtensionMessage } from '../types';

declare global {
  interface Window {
    acquireVsCodeApi(): VSCodeAPI;
  }
}

export function useVSCodeAPI() {
  const vscodeRef = useRef<VSCodeAPI | null>(null);

  if (!vscodeRef.current) {
    vscodeRef.current = window.acquireVsCodeApi();
  }

  const postMessage = (message: WebviewRequest) => {
    vscodeRef.current?.postMessage(message);
  };

  const getState = () => {
    return vscodeRef.current?.getState();
  };

  const setState = (state: any) => {
    vscodeRef.current?.setState(state);
  };

  return {
    postMessage,
    getState,
    setState,
    vscode: vscodeRef.current
  };
}

export function useMessageListener(
  onMessage: (message: ExtensionMessage) => void
) {
  useEffect(() => {
    const handleMessage = (event: MessageEvent<ExtensionMessage>) => {
      onMessage(event.data);
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [onMessage]);
}export f
unction useLoadingState(initialState: boolean = false) {
  const [isLoading, setIsLoading] = useState(initialState);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return {
    isLoading,
    startLoading,
    stopLoading,
    setIsLoading
  };
}

export function useErrorState() {
  const [error, setError] = useState<string | null>(null);

  const clearError = () => setError(null);
  const setErrorMessage = (message: string) => setError(message);

  return {
    error,
    setError: setErrorMessage,
    clearError,
    hasError: error !== null
  };
}

export function useWebviewState<T>(initialState: T) {
  const { getState, setState } = useVSCodeAPI();
  const [state, setStateInternal] = useState<T>(() => {
    const savedState = getState();
    return savedState || initialState;
  });

  const updateState = (newState: T | ((prevState: T) => T)) => {
    const updatedState = typeof newState === 'function' 
      ? (newState as (prevState: T) => T)(state)
      : newState;
    
    setStateInternal(updatedState);
    setState(updatedState);
  };

  return [state, updateState] as const;
}