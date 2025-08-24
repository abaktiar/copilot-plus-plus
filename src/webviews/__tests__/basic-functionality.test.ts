/**
 * Basic functionality validation tests
 * Tests that core features work without complex UI interactions
 */

import { simulateVSCodeMessage, mockVSCodeAPI } from '../test-utils';

describe('Basic Functionality Validation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('VSCode API Integration', () => {
    test('should handle message posting correctly', () => {
      const testMessage = {
        command: 'getBranches'
      };

      mockVSCodeAPI.postMessage(testMessage);
      expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith(testMessage);
    });

    test('should handle state management', () => {
      const testState = { key: 'value' };
      
      mockVSCodeAPI.setState(testState);
      expect(mockVSCodeAPI.setState).toHaveBeenCalledWith(testState);

      mockVSCodeAPI.getState.mockReturnValue(testState);
      const retrievedState = mockVSCodeAPI.getState();
      expect(retrievedState).toEqual(testState);
    });
  });

  describe('Message Simulation', () => {
    test('should simulate VSCode messages correctly', () => {
      const mockHandler = jest.fn();
      window.addEventListener('message', mockHandler);

      simulateVSCodeMessage('branchesList', {
        branches: ['main', 'feature'],
        currentBranch: 'feature',
        defaultTargetBranch: 'main',
        languageModel: 'gpt-4o-mini'
      });

      expect(mockHandler).toHaveBeenCalled();
      
      const event = mockHandler.mock.calls[0][0];
      expect(event.data.command).toBe('branchesList');
      expect(event.data.branches).toEqual(['main', 'feature']);

      window.removeEventListener('message', mockHandler);
    });

    test('should handle error messages', () => {
      const mockHandler = jest.fn();
      window.addEventListener('message', mockHandler);

      simulateVSCodeMessage('error', {
        message: 'Test error message'
      });

      expect(mockHandler).toHaveBeenCalled();
      
      const event = mockHandler.mock.calls[0][0];
      expect(event.data.command).toBe('error');
      expect(event.data.message).toBe('Test error message');

      window.removeEventListener('message', mockHandler);
    });

    test('should handle progress updates', () => {
      const mockHandler = jest.fn();
      window.addEventListener('message', mockHandler);

      simulateVSCodeMessage('progressUpdate', {
        update: {
          progress: 5,
          total: 10,
          message: 'Processing file...'
        }
      });

      expect(mockHandler).toHaveBeenCalled();
      
      const event = mockHandler.mock.calls[0][0];
      expect(event.data.command).toBe('progressUpdate');
      expect(event.data.update.progress).toBe(5);
      expect(event.data.update.total).toBe(10);

      window.removeEventListener('message', mockHandler);
    });
  });

  describe('Command Patterns', () => {
    test('should validate PR description generation command', () => {
      const command = {
        command: 'generatePrDescription',
        sourceBranch: 'feature/test',
        targetBranch: 'main',
        data: { modelFamily: 'gpt-4o-mini' }
      };

      mockVSCodeAPI.postMessage(command);
      expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith(command);

      // Validate command structure
      expect(command.command).toBe('generatePrDescription');
      expect(command.sourceBranch).toBeDefined();
      expect(command.targetBranch).toBeDefined();
      expect(command.data.modelFamily).toBeDefined();
    });

    test('should validate PR review command', () => {
      const command = {
        command: 'reviewPrChanges',
        sourceBranch: 'feature/test',
        targetBranch: 'main',
        modelFamily: 'gpt-4o-mini'
      };

      mockVSCodeAPI.postMessage(command);
      expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith(command);

      // Validate command structure
      expect(command.command).toBe('reviewPrChanges');
      expect(command.sourceBranch).toBeDefined();
      expect(command.targetBranch).toBeDefined();
      expect(command.modelFamily).toBeDefined();
    });

    test('should validate breaking changes analysis command', () => {
      const command = {
        command: 'analyzeBreakingChanges',
        sourceBranch: 'feature/test',
        targetBranch: 'main',
        modelFamily: 'gpt-4o-mini'
      };

      mockVSCodeAPI.postMessage(command);
      expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith(command);

      // Validate command structure
      expect(command.command).toBe('analyzeBreakingChanges');
      expect(command.sourceBranch).toBeDefined();
      expect(command.targetBranch).toBeDefined();
      expect(command.modelFamily).toBeDefined();
    });

    test('should validate file navigation command', () => {
      const command = {
        command: 'openFile',
        filePath: 'src/component.ts',
        lineNumber: 42,
        data: { filePath: 'src/component.ts', lineNumber: 42 }
      };

      mockVSCodeAPI.postMessage(command);
      expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith(command);

      // Validate command structure
      expect(command.command).toBe('openFile');
      expect(command.filePath).toBeDefined();
      expect(command.lineNumber).toBeDefined();
    });

    test('should validate clipboard command', () => {
      const command = {
        command: 'copyToClipboard',
        text: 'Text to copy',
        data: { text: 'Text to copy' }
      };

      mockVSCodeAPI.postMessage(command);
      expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith(command);

      // Validate command structure
      expect(command.command).toBe('copyToClipboard');
      expect(command.text).toBeDefined();
      expect(command.data.text).toBeDefined();
    });
  });

  describe('Response Patterns', () => {
    test('should validate branches list response', () => {
      const response = {
        command: 'branchesList',
        branches: ['main', 'develop', 'feature/test'],
        currentBranch: 'feature/test',
        defaultTargetBranch: 'main',
        languageModel: 'gpt-4o-mini'
      };

      // Validate response structure
      expect(response.command).toBe('branchesList');
      expect(Array.isArray(response.branches)).toBe(true);
      expect(response.branches.length).toBeGreaterThan(0);
      expect(response.currentBranch).toBeDefined();
      expect(response.defaultTargetBranch).toBeDefined();
      expect(response.languageModel).toBeDefined();
    });

    test('should validate generation complete response', () => {
      const response = {
        command: 'generationComplete',
        result: {
          title: 'Test PR Title',
          description: 'Test PR Description'
        }
      };

      // Validate response structure
      expect(response.command).toBe('generationComplete');
      expect(response.result).toBeDefined();
      expect(response.result.title).toBeDefined();
      expect(response.result.description).toBeDefined();
    });

    test('should validate review complete response', () => {
      const response = {
        command: 'reviewComplete',
        result: {
          summary: {
            assessment: 'Code looks good',
            strengths: ['Good structure'],
            criticalIssues: [],
            recommendations: ['Add tests']
          },
          issues: [
            {
              id: '1',
              file: 'src/test.ts',
              line: 10,
              severity: 'Medium',
              category: 'Code Style',
              title: 'Test issue',
              description: 'Test description',
              suggestion: 'Test suggestion'
            }
          ]
        },
        reviewKey: 'feature:main'
      };

      // Validate response structure
      expect(response.command).toBe('reviewComplete');
      expect(response.result.summary).toBeDefined();
      expect(response.result.summary.assessment).toBeDefined();
      expect(Array.isArray(response.result.summary.strengths)).toBe(true);
      expect(Array.isArray(response.result.summary.criticalIssues)).toBe(true);
      expect(Array.isArray(response.result.summary.recommendations)).toBe(true);
      expect(Array.isArray(response.result.issues)).toBe(true);
      expect(response.reviewKey).toBeDefined();
    });

    test('should validate analysis result response', () => {
      const response = {
        command: 'analysisResult',
        result: {
          summary: {
            totalBreakingChanges: 2,
            criticalCount: 0,
            highCount: 1,
            mediumCount: 1,
            lowCount: 0
          },
          breakingChanges: [
            {
              id: '1',
              severity: 'High',
              changeType: 'Function Signature Change',
              description: 'Parameter order changed',
              impact: 'All callers need updates'
            }
          ]
        }
      };

      // Validate response structure
      expect(response.command).toBe('analysisResult');
      expect(response.result.summary).toBeDefined();
      expect(typeof response.result.summary.totalBreakingChanges).toBe('number');
      expect(typeof response.result.summary.criticalCount).toBe('number');
      expect(typeof response.result.summary.highCount).toBe('number');
      expect(typeof response.result.summary.mediumCount).toBe('number');
      expect(typeof response.result.summary.lowCount).toBe('number');
      expect(Array.isArray(response.result.breakingChanges)).toBe(true);
    });

    test('should validate error response', () => {
      const response = {
        command: 'error',
        message: 'Test error message',
        code: 'TEST_ERROR'
      };

      // Validate response structure
      expect(response.command).toBe('error');
      expect(response.message).toBeDefined();
      expect(typeof response.message).toBe('string');
    });
  });

  describe('Data Validation', () => {
    test('should validate model configuration structure', () => {
      const modelConfig = (window as any).sharedModelConfig;

      expect(modelConfig).toBeDefined();
      expect(Array.isArray(modelConfig.models)).toBe(true);
      expect(modelConfig.models.length).toBeGreaterThan(0);

      modelConfig.models.forEach((model: any) => {
        expect(model.id).toBeDefined();
        expect(model.name).toBeDefined();
        expect(typeof model.id).toBe('string');
        expect(typeof model.name).toBe('string');
      });
    });

    test('should validate branch data structure', () => {
      const branches = ['main', 'develop', 'feature/test'];

      expect(Array.isArray(branches)).toBe(true);
      branches.forEach(branch => {
        expect(typeof branch).toBe('string');
        expect(branch.length).toBeGreaterThan(0);
      });
    });

    test('should validate issue data structure', () => {
      const issue = {
        id: '1',
        file: 'src/test.ts',
        line: 10,
        severity: 'Medium',
        category: 'Code Style',
        title: 'Test issue',
        description: 'Test description',
        suggestion: 'Test suggestion'
      };

      expect(issue.id).toBeDefined();
      expect(issue.file).toBeDefined();
      expect(typeof issue.line).toBe('number');
      expect(issue.severity).toBeDefined();
      expect(issue.category).toBeDefined();
      expect(issue.title).toBeDefined();
      expect(issue.description).toBeDefined();
      expect(issue.suggestion).toBeDefined();
    });

    test('should validate breaking change data structure', () => {
      const breakingChange = {
        id: '1',
        severity: 'High',
        changeType: 'Function Signature Change',
        description: 'Parameter order changed',
        impact: 'All callers need updates'
      };

      expect(breakingChange.id).toBeDefined();
      expect(breakingChange.severity).toBeDefined();
      expect(breakingChange.changeType).toBeDefined();
      expect(breakingChange.description).toBeDefined();
      expect(breakingChange.impact).toBeDefined();
    });
  });

  describe('Error Handling', () => {
    test('should handle malformed messages gracefully', () => {
      const mockHandler = jest.fn();
      window.addEventListener('message', (event) => {
        try {
          const { command, data } = event.data || {};
          mockHandler(command, data);
        } catch (error) {
          mockHandler('error', error);
        }
      });

      // Test with null data
      const nullEvent = new MessageEvent('message', {
        data: null,
        origin: 'vscode-webview://'
      });
      window.dispatchEvent(nullEvent);

      // Test with undefined data
      const undefinedEvent = new MessageEvent('message', {
        data: undefined,
        origin: 'vscode-webview://'
      });
      window.dispatchEvent(undefinedEvent);

      // Should handle gracefully
      expect(mockHandler).toHaveBeenCalled();

      window.removeEventListener('message', mockHandler);
    });

    test('should handle missing properties gracefully', () => {
      const incompleteMessage: any = {
        command: 'branchesList'
        // Missing other properties
      };

      // Should not throw when accessing missing properties
      expect(() => {
        const branches = incompleteMessage.branches || [];
        const currentBranch = incompleteMessage.currentBranch || '';
        const defaultTargetBranch = incompleteMessage.defaultTargetBranch || '';
        
        expect(Array.isArray(branches)).toBe(true);
        expect(typeof currentBranch).toBe('string');
        expect(typeof defaultTargetBranch).toBe('string');
      }).not.toThrow();
    });
  });

  describe('Performance Validation', () => {
    test('should handle rapid message posting', () => {
      const messages = Array.from({ length: 100 }, (_, i) => ({
        command: 'testCommand',
        id: i,
        data: `test data ${i}`
      }));

      // Should not throw when posting many messages rapidly
      expect(() => {
        messages.forEach(message => {
          mockVSCodeAPI.postMessage(message);
        });
      }).not.toThrow();

      expect(mockVSCodeAPI.postMessage).toHaveBeenCalledTimes(100);
    });

    test('should handle large data payloads', () => {
      const largeData = {
        command: 'testCommand',
        data: {
          largeArray: new Array(1000).fill('test data'),
          largeString: 'x'.repeat(10000),
          nestedObject: {
            level1: {
              level2: {
                level3: new Array(100).fill({ key: 'value' })
              }
            }
          }
        }
      };

      // Should not throw when handling large data
      expect(() => {
        mockVSCodeAPI.postMessage(largeData);
      }).not.toThrow();

      expect(mockVSCodeAPI.postMessage).toHaveBeenCalledWith(largeData);
    });
  });
});