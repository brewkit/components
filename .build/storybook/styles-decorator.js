import React from 'react';
import { ThemeProvider, StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Cerveza from '../../themes/cerveza/index';


const generateClassName = createGenerateClassName({
    disableGlobal: true,
    productionPrefix: 'bk',
});


const StylesDecorator = storyFn => (
    <StylesProvider generateClassName={generateClassName}>
        <ThemeProvider theme={Cerveza}>
            {storyFn()}
        </ThemeProvider>
    </StylesProvider>
);


export default StylesDecorator;
