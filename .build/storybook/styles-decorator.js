import React from 'react';
import { ThemeProvider, StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Cerveza from '../../themes/cerveza/index';


const generateClassName = createGenerateClassName({
    disableGlobal: true,
    productionPrefix: 'bk',
});


const StylesDecorator = storyFn => (
    <ThemeProvider theme={Cerveza}>
        {storyFn()}
    </ThemeProvider>
);


export default StylesDecorator;
