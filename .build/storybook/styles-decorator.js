import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';


const generateClassName = createGenerateClassName({
    productionPrefix: 'bk',
    disableGlobal: true,
});


const StylesDecorator = storyFn => (
    <StylesProvider generateClassName={generateClassName} injectFirst>
        {storyFn()}
    </StylesProvider>
);


export default StylesDecorator;
