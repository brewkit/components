const path = require('path');
const projectRoot = process.cwd();


module.exports = async ({ config }) => {

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
