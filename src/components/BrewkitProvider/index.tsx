import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { Props } from './types';


const generateClassName = createGenerateClassName({
    productionPrefix: 'bk',
    disableGlobal: true,
});


/**
 * The `<BrewkitProvider />` component renders text using the 'Roboto' font in various styles.
 */
export const BrewkitProvider = ({
    children,
}: Props): React.ReactElement => (

    <StylesProvider generateClassName={generateClassName} injectFirst>
        {children}
    </StylesProvider>

);


BrewkitProvider.displayName = 'BrewkitProvider';


export default BrewkitProvider;

