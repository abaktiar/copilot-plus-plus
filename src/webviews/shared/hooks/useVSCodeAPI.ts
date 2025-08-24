import { useEffect, useRef } from 'react';
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
}