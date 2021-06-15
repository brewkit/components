import React from 'react';
import { ThemeProvider, StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { useDarkMode } from 'storybook-dark-mode';
import { merge as _merge } from 'lodash';
import Cerveza from '../../themes/cerveza/index';
import CervezaDark from '../../themes/cerveza-dark/index';


const generateClassName = createGenerateClassName({
    disableGlobal: true,
    productionPrefix: 'bk',
});


const StylesDecorator = storyFn => (
    <ThemeProvider theme={useDarkMode() ? _merge({}, Cerveza, CervezaDark) : Cerveza}>
        {storyFn()}
    </ThemeProvider>
);


export default StylesDecorator;
