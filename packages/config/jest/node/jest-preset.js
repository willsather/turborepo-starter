module.exports = {
  roots: ['<rootDir>'],
  verbose: true,
  testEnvironment: 'node',
  testRegex: '(\\.|/)(test|spec)\\.[jt]sx?$',
  testPathIgnorePatterns: ['/dist', '/stubs'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePathIgnorePatterns: ['<rootDir>/node_modules', '<rootDir>/packages/config/', '<rootDir>/dist'],
  preset: 'ts-jest',
};
