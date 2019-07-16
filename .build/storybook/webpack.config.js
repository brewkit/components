module.exports = async ({ config }) => {

    config.module.rules.push(
        {
            test: /\.jsx?$/,
            exclude: [/node_modules/],
            use: [
                {
                    loader: 'eslint-loader',
                    options: { fix: true },
                },
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
                        sourceMap: true,
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

        extensions: ['.js', '.jsx', '.md', '.scss'],

    };

    // Return the altered config
    return config;
};