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
        ['text', { skipFull: true }]
    ],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/themes/',
        '/dist/',
        '/.build/'
    ],
    collectCoverageFrom: [
        '<rootDir>/src/**/*.tsx',
        '!<rootDir>/src/**/index.ts',
        '!<rootDir>/src/**/*.story.tsx',
        '!<rootDir>/src/**/stories.tsx',
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
