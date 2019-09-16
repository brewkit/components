import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import theme from './theme';


addDecorator(withKnobs);


addParameters({
    options: { theme }
});


configure(require.context('../../src/core', true, /stories\.(ts|tsx|mdx)$/), module);