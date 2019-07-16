module.exports = {
    presets : [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-flow",
    ],
    plugins: [
        "@babel/plugin-transform-object-assign",
        "@babel/plugin-transform-flow-strip-types",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-dynamic-import",
    ],
    env: {
        "test": {
            "plugins": ["require-context-hook"],
        },
    },
};