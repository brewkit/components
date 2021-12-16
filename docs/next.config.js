const { join, resolve } = require('path');

const workspaceRoot = join(__dirname, '../');

/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    webpack5: true,
    experimental: {
        externalDir: true,
    },
    webpack: (config) => {
        config.resolve.extensions = [
            '.js',
            '.ts',
            '.tsx',
            ...config.resolve.extensions,
        ];
        config.resolve.alias = {
            '@brewkit/themes': resolve(__dirname, '../packages/themes/src'),
            ...config.resolve.alias,
        };
        return config;
    },
};
