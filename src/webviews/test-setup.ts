import '@testing-library/jest-dom';

// Mock VSCode API
const mockVSCodeAPI = {
  postMessage: jest.fn(),
  getState: jest.fn(() => null as any),
  setState: jest.fn()
};

// Mock window.acquireVsCodeApi
Object.defineProperty(window, 'acquireVsCodeApi', {
  value: () => mockVSCodeAPI,
  writable: true,
  configurable: true
});

// Mock shared model config
Object.defineProperty(window, 'sharedModelConfig', {
  value: {
    models: [
      { id: 'gpt-4o-mini', name: 'GPT-4o Mini' },
      { id: 'gpt-4o', name: 'GPT-4o' },
      { id: 'claude-3.5-sonnet', name: 'Claude 3.5 Sonnet' }
    ]
  },
  writable: true,
  configurable: true
});

// Mock marked library
Object.defineProperty(window, 'marked', {
  value: {
    parse: (content: string) => `<p>${content}</p>`,
    setOptions: jest.fn()
  },
  writable: true,
  configurable: true
});

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock scrollTo
Object.defineProperty(window, 'scrollTo', {
  value: jest.fn(),
  writable: true
});

// Mock console methods to reduce noise in tests
const originalError = console.error;
const originalWarn = console.warn;

beforeEach(() => {
  // Clear all mocks before each test
  jest.clearAllMocks();
  
  // Reset VSCode API mock
  mockVSCodeAPI.postMessage.mockClear();
  mockVSCodeAPI.getState.mockReturnValue(null);
  mockVSCodeAPI.setState.mockClear();
});

afterEach(() => {
  // Clean up any side effects
  jest.restoreAllMocks();
});

// Suppress console errors/warnings for known issues
console.error = (...args: any[]) => {
  if (
    typeof args[0] === 'string' &&
    (args[0].includes('Warning: ReactDOM.render is deprecated') ||
     args[0].includes('Warning: componentWillMount has been renamed'))
  ) {
    return;
  }
  originalError.call(console, ...args);
};

console.warn = (...args: any[]) => {
  if (
    typeof args[0] === 'string' &&
    args[0].includes('componentWillMount has been renamed')
  ) {
    return;
  }
  originalWarn.call(console, ...args);
};

// Export mock for use in tests
export { mockVSCodeAPI };