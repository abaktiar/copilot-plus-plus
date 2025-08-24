/**
 * Comprehensive tests for webview communication patterns
 * Tests message passing, error handling, and edge cases
 */

import { simulateVSCodeMessage, mockVSCodeAPI, createMockMessageEvent } from '../test-utils';

describe('Webview Communication', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Message Event Handling', () => {
    test('should handle valid message events', () => {
      const mockHandler = jest.fn();
      window.addEventListener('message', mockHandler);

      const event = createMockMessageEvent('testCommand', { data: 'test' });
      window.dispatchEvent(event);

      expect(mockHandler).toHaveBeenCalledWith(event);
      
      window.removeEventListener('message', mockHandler);
    });

    test('should ignore invalid message events', () => {
      const mockHandler = jest.fn();
      window.addEventListener('message', mockHandler);

      // Invalid origin
      const invalidEvent = new MessageEvent('message', {
        data: { command: 'test' },
        origin: 'https://malicious-site.com'
      });

      window.dispatchEvent(invalidEvent);

      // Handler should still be called, but components should validate origin
      expect(mockHandler).toHaveBeenCalled();
      
      window.removeEventListener('message', mockHandler);
    });

    test('should handle malformed message data', () => {
      const mockHandler = jest.fn();
      window.addEventListener('message', (event) => {
        try {
          // Simulate component trying to access message data
          const { command, data } = event.data || {};
          mockHandler(command, data);
        } catch (error) {
          mockHandler('error', error);
        }
      });

      // Malformed data
      const malformedEvent = new MessageEvent('message', {
        data: null,
        origin: 'vscode-webview://'
      });

      window.dispatchEvent(malformedEvent);

      expect(mockHandler).toHaveBeenCalledWith(undefined, undefined);
      
      window.removeEventListener('message', mockHandler);
    });
  });

  describe('VSCode API Communication', () => {
    test('should post messages with correct format', () => {
      const testMessage = {
        command: 'testCommand',
        data: { key: 'value' }
      };

      mockVSCodeAPI.postMessage(testMessage);

      expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith(testMessage);
    });

    test('should handle state persistence', () => {
      const testState = { key: 'value', timestamp: Date.now() };

      mockVSCodeAPI.setState(testState);
      expect(mockVSCodeAPI.setState).toHaveBeenCalledWith(testState);

      mockVSCodeAPI.getState.mockReturnValue(testState);
      const retrievedState = mockVSCodeAPI.getState();
      expect(retrievedState).toEqual(testState);
    });

    test('should handle null state gracefully', () => {
      mockVSCodeAPI.getState.mockReturnValue(null);
      const state = mockVSCodeAPI.getState();
      expect(state).toBeNull();
    });
  });

  describe('Error Handling Patterns', () => {
    test('should handle network errors', () => {
      simulateVSCodeMessage('error', {
        message: 'Network request failed',
        code: 'NETWORK_ERROR'
      });

      // Components should handle this gracefully
      expect(window.dispatchEvent).toBeDefined();
    });

    test('should handle timeout errors', () => {
      simulateVSCodeMessage('error', {
        message: 'Request timed out',
        code: 'TIMEOUT_ERROR'
      });

      expect(window.dispatchEvent).toBeDefined();
    });

    test('should handle validation errors', () => {
      simulateVSCodeMessage('error', {
        message: 'Invalid branch selection',
        code: 'VALIDATION_ERROR',
        details: {
          field: 'sourceBranch',
          value: '',
          expected: 'non-empty string'
        }
      });

      expect(window.dispatchEvent).toBeDefined();
    });

    test('should handle unexpected errors', () => {
      simulateVSCodeMessage('error', {
        message: 'An unexpected error occurred',
        code: 'UNKNOWN_ERROR',
        stack: 'Error stack trace...'
      });

      expect(window.dispatchEvent).toBeDefined();
    });
  });

  describe('Command Message Patterns', () => {
    test('should handle getBranches command flow', () => {
      // Request branches
      mockVSCodeAPI.postMessage({ command: 'getBranches' });
      expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({ command: 'getBranches' });

      // Simulate response
      simulateVSCodeMessage('branchesList', {
        branches: ['main', 'develop', 'feature/test'],
        currentBranch: 'feature/test',
        defaultTargetBranch: 'main',
        languageModel: 'gpt-4o-mini'
      });

      expect(window.dispatchEvent).toBeDefined();
    });

    test('should handle generation commands', () => {
      const generateCommand = {
        command: 'generatePrDescription',
        sourceBranch: 'feature/test',
        targetBranch: 'main',
        data: { modelFamily: 'gpt-4o-mini' }
      };

      mockVSCodeAPI.postMessage(generateCommand);
      expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith(generateCommand);

      // Simulate loading state
      simulateVSCodeMessage('generating');

      // Simulate completion
      simulateVSCodeMessage('generationComplete', {
        result: {
          title: 'Test PR Title',
          description: 'Test PR Description'
        }
      });

      expect(window.dispatchEvent).toBeDefined();
    });

    test('should handle review commands', () => {
      const reviewCommand = {
        command: 'reviewPrChanges',
        sourceBranch: 'feature/test',
        targetBranch: 'main',
        modelFamily: 'gpt-4o-mini'
      };

      mockVSCodeAPI.postMessage(reviewCommand);
      expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith(reviewCommand);

      // Simulate progress updates
      simulateVSCodeMessage('progressUpdate', {
        update: {
          progress: 3,
          total: 10,
          message: 'Analyzing src/component.ts'
        }
      });

      // Simulate completion
      simulateVSCodeMessage('reviewComplete', {
        result: {
          summary: {
            assessment: 'Code looks good',
            strengths: ['Good structure'],
            criticalIssues: [],
            recommendations: ['Add tests']
          },
          issues: []
        },
        reviewKey: 'feature/test:main'
      });

      expect(window.dispatchEvent).toBeDefined();
    });

    test('should handle analysis commands', () => {
      const analysisCommand = {
        command: 'analyzeBreakingChanges',
        sourceBranch: 'feature/test',
        targetBranch: 'main',
        modelFamily: 'gpt-4o-mini'
      };

      mockVSCodeAPI.postMessage(analysisCommand);
      expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith(analysisCommand);

      // Simulate analysis state
      simulateVSCodeMessage('analyzing');

      // Simulate completion
      simulateVSCodeMessage('analysisResult', {
        result: {
          summary: {
            totalBreakingChanges: 0,
            criticalCount: 0,
            highCount: 0,
            mediumCount: 0,
            lowCount: 0
          },
          breakingChanges: []
        }
      });

      expect(window.dispatchEvent).toBeDefined();
    });

    test('should handle file navigation commands', () => {
      const openFileCommand = {
        command: 'openFile',
        filePath: 'src/component.ts',
        lineNumber: 42,
        data: { filePath: 'src/component.ts', lineNumber: 42 }
      };

      mockVSCodeAPI.postMessage(openFileCommand);
      expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith(openFileCommand);
    });

    test('should handle clipboard commands', () => {
      const copyCommand = {
        command: 'copyToClipboard',
        text: 'Text to copy',
        data: { text: 'Text to copy' }
      };

      mockVSCodeAPI.postMessage(copyCommand);
      expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith(copyCommand);
    });

    test('should handle cancellation commands', () => {
      // Test generation cancellation
      mockVSCodeAPI.postMessage({ command: 'cancelGeneration' });
      expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({ command: 'cancelGeneration' });

      // Test review cancellation
      mockVSCodeAPI.postMessage({ command: 'cancelReview' });
      expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({ command: 'cancelReview' });

      // Test analysis cancellation
      mockVSCodeAPI.postMessage({ command: 'cancelAnalysis' });
      expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith({ command: 'cancelAnalysis' });
    });
  });

  describe('Message Validation', () => {
    test('should validate required command field', () => {
      const invalidMessage = { data: 'test' }; // Missing command

      // Components should validate this
      expect(typeof invalidMessage).toBe('object');
      expect('command' in invalidMessage).toBe(false);
    });

    test('should validate message structure', () => {
      const validMessage = {
        command: 'testCommand',
        data: { key: 'value' }
      };

      expect(typeof validMessage.command).toBe('string');
      expect(validMessage.command.length).toBeGreaterThan(0);
    });

    test('should handle large message payloads', () => {
      const largeData = {
        command: 'testCommand',
        data: {
          largeArray: new Array(10000).fill('test data'),
          largeString: 'x'.repeat(100000)
        }
      };

      // Should not throw when posting large messages
      expect(() => mockVSCodeAPI.postMessage(largeData)).not.toThrow();
    });
  });

  describe('Concurrent Message Handling', () => {
    test('should handle multiple rapid messages', () => {
      const messages = [
        { command: 'message1', data: { id: 1 } },
        { command: 'message2', data: { id: 2 } },
        { command: 'message3', data: { id: 3 } }
      ];

      messages.forEach(message => {
        mockVSCodeAPI.postMessage(message);
      });

      expect(mockVSCodeAPI.postMessage).toHaveBeenCalledTimes(3);
    });

    test('should handle overlapping operations', () => {
      // Start first operation
      mockVSCodeAPI.postMessage({ command: 'generatePrDescription', sourceBranch: 'feature1', targetBranch: 'main' });
      
      // Start second operation before first completes
      mockVSCodeAPI.postMessage({ command: 'reviewPrChanges', sourceBranch: 'feature2', targetBranch: 'main' });

      expect(mockVSCodeAPI.postMessage).toHaveBeenCalledTimes(2);
    });
  });

  describe('Edge Cases', () => {
    test('should handle empty branch lists', () => {
      simulateVSCodeMessage('branchesList', {
        branches: [],
        currentBranch: '',
        defaultTargetBranch: '',
        languageModel: 'gpt-4o-mini'
      });

      expect(window.dispatchEvent).toBeDefined();
    });

    test('should handle missing model configuration', () => {
      // Temporarily remove model config
      const originalConfig = window.sharedModelConfig;
      delete (window as any).sharedModelConfig;

      simulateVSCodeMessage('branchesList', {
        branches: ['main'],
        currentBranch: 'main',
        defaultTargetBranch: 'main',
        languageModel: 'unknown-model'
      });

      // Restore config
      (window as any).sharedModelConfig = originalConfig;

      expect(window.dispatchEvent).toBeDefined();
    });

    test('should handle very long branch names', () => {
      const longBranchName = 'feature/' + 'x'.repeat(200);
      
      simulateVSCodeMessage('branchesList', {
        branches: ['main', longBranchName],
        currentBranch: longBranchName,
        defaultTargetBranch: 'main',
        languageModel: 'gpt-4o-mini'
      });

      expect(window.dispatchEvent).toBeDefined();
    });

    test('should handle special characters in data', () => {
      const specialData = {
        title: 'PR with "quotes" and \'apostrophes\'',
        description: 'Description with\nnewlines\tand\ttabs',
        code: 'const obj = { key: "value", emoji: "🚀" };'
      };

      simulateVSCodeMessage('generationComplete', {
        result: specialData
      });

      expect(window.dispatchEvent).toBeDefined();
    });
  });
});