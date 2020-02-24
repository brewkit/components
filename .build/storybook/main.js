module.exports = {
    stories: ['../../src/**/stories.[tj]sx'],
    addons: [
        '@storybook/addon-knobs/register',
        '@storybook/addon-viewport/register',
        '@storybook/addon-backgrounds/register',
        '@storybook/addon-actions/register',
        '@storybook/addon-jest/register',
    ],
    presets: [
        '@storybook/addon-docs/preset',
        '@storybook/preset-typescript',
    ]
};
