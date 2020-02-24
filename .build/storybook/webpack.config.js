const path = require('path');
const projectRoot = process.cwd();
const tsConfig = require('../../tsconfig');


module.exports = async ({ config }) => {

    config.module.rules.push(
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'cache-loader'
                },
                {
                    loader: 'awesome-typescript-loader',
                },
                {
                    loader: 'react-docgen-typescript-loader',
                    options: {
                        compilerOptions: tsConfig.compilerOptions,
                    }
                },
            ],
        },
        {
            test: /stories\.[tj]sx?$/,
            loader: require.resolve('@storybook/source-loader'),
            enforce: 'pre',
            options: {
                injectParameters: true,
                inspectLocalDependencies: false,
                inspectDependencies: false
            }
        },
    );


    config.resolve = {

        alias: {
            "@components": path.resolve(projectRoot, 'src/components/'),
            "@utilities": path.resolve(projectRoot, 'src/utilities/'),
        },

        extensions: ['.ts', '.tsx', '.js', '.jsx', '.md', '.scss'],

    };

    // Return the altered config
    return config;
};
