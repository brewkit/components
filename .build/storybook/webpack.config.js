const path = require('path');
const projectRoot = process.cwd();


module.exports = async ({ config }) => {

    config.module.rules.push(
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'ts-loader',
                },
                {
                    loader: require.resolve('react-docgen-typescript-loader'),
                    options: {
                        tsconfigPath: path.resolve(__dirname, '../../tsconfig.json')
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

        extensions: ['.ts', '.tsx', '.js', '.jsx', '.md', '.mdx', '.scss'],

    };

    // Return the altered config
    return config;
};
