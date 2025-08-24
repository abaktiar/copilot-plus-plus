import { useEffect, useRef, useState, useCallback } from "react";
import { VSCodeAPI, WebviewRequest, ExtensionMessage } from "../types";

declare global {
  interface Window {
    acquireVsCodeApi(): VSCodeAPI;
  }
}

// Global singleton to ensure VS Code API is only acquired once
let globalVSCodeAPI: VSCodeAPI | null = null;

function getVSCodeAPI(): VSCodeAPI {
  if (!globalVSCodeAPI) {
    globalVSCodeAPI = window.acquireVsCodeApi();
  }
  return globalVSCodeAPI;
}

export function useVSCodeAPI() {
  const vscodeRef = useRef<VSCodeAPI | null>(null);

  if (!vscodeRef.current) {
    vscodeRef.current = getVSCodeAPI();
  }

  const postMessage = useCallback((message: WebviewRequest) => {
    vscodeRef.current?.postMessage(message);
  }, []);

  const getState = useCallback(() => {
    return vscodeRef.current?.getState();
  }, []);

  const setState = useCallback((state: any) => {
    vscodeRef.current?.setState(state);
  }, []);

  return {
    postMessage,
    getState,
    setState,
    vscode: vscodeRef.current,
  };
}

export function useMessageListener(
  onMessage: (message: ExtensionMessage) => void
) {
  useEffect(() => {
    const handleMessage = (event: MessageEvent<ExtensionMessage>) => {
      onMessage(event.data);
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onMessage]);
}

export function useLoadingState(initialState: boolean = false) {
  const [isLoading, setIsLoading] = useState(initialState);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return {
    isLoading,
    startLoading,
    stopLoading,
    setIsLoading,
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
    hasError: error !== null,
  };
}

export function useWebviewState<T>(initialState: T) {
  const { getState, setState } = useVSCodeAPI();
  const [state, setStateInternal] = useState<T>(() => {
    const savedState = getState();
    return savedState || initialState;
  });

  const updateState = (newState: T | ((prevState: T) => T)) => {
    const updatedState =
      typeof newState === "function"
        ? (newState as (prevState: T) => T)(state)
        : newState;

    setStateInternal(updatedState);
    setState(updatedState);
  };

  return [state, updateState] as const;
}
