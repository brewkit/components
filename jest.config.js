/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

const { cwd } = process;

module.exports = {
    clearMocks: true,
    collectCoverage: true,
    coverageReporters: [
        'json',
        'json-summary',
        'text'
    ],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/themes/',
        '/dist/',
        '/.build/'
    ],
    collectCoverageFrom: [
        '<rootDir>/src/components/**/*.tsx',
        '!<rootDir>/src/components/**/index.ts',
        '!<rootDir>/src/components/**/*.story.tsx',
        '!<rootDir>/src/components/**/stories.tsx',
    ],
    errorOnDeprecated: true,
    moduleFileExtensions: [
        'js',
        'ts',
        'tsx'
    ],
    roots: [
        `<rootDir>/src`
    ],
    setupFilesAfterEnv: [
        '<rootDir>/.build/jest/setupTestEnv.js'
    ],
    testEnvironment: 'jsdom',
    transform: {
        '.(ts)': 'ts-jest'
    }
}
