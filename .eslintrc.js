/* eslint-disable max-lines */
module.exports = {
    root: true,

    settings: {
        react: {
            version: 'detect',
        },
    },

    parser: '@typescript-eslint/parser',

    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        project: ['./tsconfig.json'],
    },

    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parserOptions: {
                project: ['./tsconfig.json'],
            },
        },
    ],

    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],

    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },

    plugins: ['prettier', '@typescript-eslint'],

    globals: {
        __DEV__: true,
        React: 'writable',
    },

    rules: {},
};
