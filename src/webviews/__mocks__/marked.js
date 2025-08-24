// Mock implementation of marked library for testing
export const marked = {
  parse: jest.fn((content) => {
    // Simple mock that wraps content in paragraph tags
    return `<p>${content}</p>`;
  }),
  setOptions: jest.fn()
};

// Default export for compatibility
export default marked;