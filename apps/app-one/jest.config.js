const nextJest = require("next/jest");
const sharedConfig = require("../../packages/config/jest/browser/jest-preset");

const createJestConfig = nextJest({
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  ...sharedConfig,
  testTimeout: 10000,
  coveragePathIgnorePatterns: ["<rootDir>/public/*.*"],
  modulePathIgnorePatterns: ["<rootDir>/public/*.*"],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: [
    "<rootDir>/.next/",
    "<rootDir>/node_modules/",
    "<rootDir>/public/scripts/*.*",
  ],
  coverageThreshold: {
    global: {
      lines: 70,
    },
  },
};

module.exports = createJestConfig(customJestConfig);
