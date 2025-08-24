/** @type {import('jest').Config} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/webviews/test-setup.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@shared/(.*)$': '<rootDir>/src/webviews/shared/$1',
    '^@shared$': '<rootDir>/src/webviews/shared',
    '^marked$': '<rootDir>/src/webviews/__mocks__/marked.js'
  },
  testMatch: [
    '<rootDir>/src/webviews/**/__tests__/**/*.test.{ts,tsx}',
    '<rootDir>/src/webviews/**/*.test.{ts,tsx}'
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.vscode-test/',
    '/media/',
    '/dist/',
    '/out/'
  ],
  collectCoverageFrom: [
    'src/webviews/**/*.{ts,tsx}',
    '!src/webviews/**/*.d.ts',
    '!src/webviews/**/index.{ts,tsx}',
    '!src/webviews/**/__tests__/**',
    '!src/webviews/**/test-setup.ts'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      tsconfig: 'tsconfig.test.json'
    }]
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons']
  }
};