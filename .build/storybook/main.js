module.exports = {
    typescript: {
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            tsconfigPath: '../../tsconfig.json',
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => {
                if (!prop.parent) return true;
                else if (prop.parent.name === 'DOMAttributes') return false;
                else if (prop.parent.name === 'AriaAttributes') return false;
                else if (prop.parent.name === 'RefAttributes') return false;
                else if (prop.parent.name === 'HTMLAttributes') return false;
                else return true;
            },
        },
    },
    addons: [
        '@storybook/addon-essentials',
        'storybook-dark-mode',
    ],
};
