/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
    clearMocks: true,
    collectCoverage: true,
    coverageReporters: [
        'json',
        'json-summary',
        'text'
    ],
    coverageDirectory: `${process.cwd()}/coverage`,
    coveragePathIgnorePatterns: [
        '/node_modules/'
    ],
    collectCoverageFrom: [
        '!src/components/**/*.story.tsx',
        '!src/components/**/*.types.ts',
        '!src/components/**/*.styles.ts',
        '!src/components/**/index.tsx',

        // Old structure - remove after refactor
        '!src/components/**/stories.tsx',
        '!src/components/**/types.ts',
        '!src/components/**/styles.ts',

    ],
    errorOnDeprecated: true,
    moduleFileExtensions: [
        'js',
        'ts',
        'tsx'
    ],
    roots: [
        process.cwd() + '/src'
    ],
    setupFilesAfterEnv: [
        '<rootDir>/setupTestEnv.js'
    ],
    testEnvironment: 'jsdom',
    transform: {
        '.(ts)': 'ts-jest'
    }
}
