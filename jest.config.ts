/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  clearMocks: true,
  collectCoverage: true,
  coverageReporters: [
    'json',
    'json-summary',
    'text'
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules',
  ],
  errorOnDeprecated: true,
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  roots: [
    "<rootDir>/src"
  ],
  setupFilesAfterEnv: ["<rootDir>/enzyme.ts"],
  testEnvironment: 'jsdom',
  transform: {
    '.(ts)': 'ts-jest'
  }
}

export default config;
