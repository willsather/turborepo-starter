module.exports = {
  roots: ['<rootDir>'],
  verbose: true,
  testEnvironment: 'jsdom',
  testRegex: '(\\.|/)(test|spec)\\.[jt]sx?$',
  testPathIgnorePatterns: ['/dist', '/stubs'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': ['babel-jest', { presets: ['next/babel'] }],
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/tests/mocks/cssImportMock.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/packages/config/', '<rootDir>/dist'],
  preset: 'ts-jest',
};
