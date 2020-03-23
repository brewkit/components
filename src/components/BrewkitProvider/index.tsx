import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { Props } from './types';


const generateClassName = createGenerateClassName({
    productionPrefix: 'bk',
    disableGlobal: true,
});


/**
 * The `<BrewkitProvider />` component is intended to wrap your Brewkit application and helps to simplify configuration.
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

