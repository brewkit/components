import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import './assets/css/normalize.css';
import theme from './theme';


addDecorator(withKnobs);


addParameters({
    options: { theme }
});


configure(require.context('../../src', true, /stories\.(ts|tsx|mdx)$/), module);
