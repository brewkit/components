const tsConfig = require('../../tsconfig');


module.exports = async ({ config }) => {

    config.module.rules.push(
        {
            test: /\.tsx?$/,
            exclude: [/node_modules/],
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            ["@babel/env", {
                                "modules": "cjs",
                            }],
                            "@babel/react",
                            "@babel/typescript"
                        ],
                        "plugins": [
                            "react-hot-loader/babel",
                            "@babel/proposal-class-properties",
                            "@babel/proposal-object-rest-spread",
                            "@babel/plugin-transform-object-assign",
                            "@babel/plugin-syntax-dynamic-import",
                        ]
                    },
                },
                {
                    loader: 'react-docgen-typescript-loader',
                    options: {
                        compilerOptions: tsConfig.compilerOptions,
                    }
                }
            ],
        },
        {
            test: /\.scss$/,
            use: [
                {
                    loader: 'style-loader', //  interprets @import and url() like import/require() and will resolve them.
                    options: { singleton: true }
                },
                {
                    loader: 'css-loader', //  interprets @import and url() like import/require() and will resolve them.
                    options: {
                        modules: {
                            localIdentName: "[local]_[hash:base64]",
                        },
                        importLoaders: 2,
                        sourceMap: false,
                    }
                },
                {
                    loader: 'postcss-loader', // postcss loader so we can use autoprefixer
                    options: {
                        plugins: function () {
                            return [
                                require('autoprefixer')({
                                    grid: true,
                                })
                            ]
                        }
                    }
                },
                {
                    loader: 'sass-loader', // compiles Sass to CSS
                    options: {
                        sourceMap: true,
                    },
                }
            ],
        },

    );


    config.resolve = {

        extensions: ['.ts', '.tsx', '.js', '.jsx', '.md', '.scss'],

    };

    // Return the altered config
    return config;
};