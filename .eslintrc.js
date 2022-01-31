module.exports = {
    root: true,

    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                moduleDirectory: ['node_modules', './'],
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
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
        tsconfigRootDir: __dirname,
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
        'plugin:import/typescript',
        'plugin:jsx-a11y/recommended',
        'plugin:react-hooks/recommended',
        'airbnb',
        'airbnb-typescript',
        'plugin:prettier/recommended',
    ],

    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },

    plugins: ['prettier', 'simple-import-sort', '@typescript-eslint'],

    globals: {
        __DEV__: true,
        React: 'writable',
    },

    rules: {
        /**
         * * This kills the purpose of one liner export main index files for no good reason .
         */
        'no-restricted-exports': 'off',

        /**
         * * We rely on typescript, and ES6 default arg assignment
         */
        'react/require-default-props': 'off',

        /*
         * * Require braces in arrow function body
         * * https://eslint.org/docs/rules/arrow-body-style
         */
        'arrow-body-style': 'off',

        /*
         * * An unused expression which has no effect on the state of the program indicates a logic error
         * * https://eslint.org/docs/rules/no-unused-expressions
         */
        'no-unused-expressions': 'error',

        /*
         * * Prefer destructuring from arrays and objects
         * * http://eslint.org/docs/rules/prefer-destructuring
         */
        'prefer-destructuring': [
            'error',
            {
                VariableDeclarator: {
                    array: false,
                    object: true,
                },
                AssignmentExpression: {
                    array: false,
                    object: false,
                },
            },
            {
                enforceForRenamedProperties: false,
            },
        ],

        /*
         * * Require using arrow functions for callbacks
         * * https://eslint.org/docs/rules/prefer-arrow-callback
         */
        'prefer-arrow-callback': 'off',

        /*
         * * Require or disallow trailing commas
         * * https://eslint.org/docs/rules/comma-dangle
         */
        'comma-dangle': 'off',

        /*
         * * This rule extends the base eslint/comma-dangle rule. It adds support for TypeScript syntax
         * * https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/comma-dangle.md
         */
        '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],

        /*
         * * Allow .js files to use JSX or TSX syntax
         * * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
         */
        'react/jsx-filename-extension': [
            'error',
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],

        /*
         * * Functional and class components are equivalent from React’s point of view
         * * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
         */
        'react/prefer-stateless-function': 'off',

        /*
         * * By default this rule prevents vague prop types with more specific alternatives available
         * * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
         */
        'react/forbid-prop-types': 'off',

        /*
         * * Enforce consistent usage of destructuring assignment of props, state, and context
         * * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
         */
        'react/destructuring-assignment': 'off',

        /*
         * * Limits every line in JSX to one expression each
         * * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
         */
        'react/jsx-one-expression-per-line': 'off',

        /*
         * * Disallow JSX props spreading - custom set to ignore will ignore all custom jsx tags
         * * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
         */
        'react/jsx-props-no-spreading': 'off',

        /*
         * * ESLint plugin for prettier formatting
         * * https://github.com/prettier/eslint-plugin-prettier
         */
        'prettier/prettier': 'error',

        /*
         * * Ensure consistent use of file extension within the import path
         * * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
         */
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],

        /*
         * * Forbid the use of extraneous packages
         * * https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
         */
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: true },
        ],
    },
};
