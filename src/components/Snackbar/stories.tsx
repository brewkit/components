import React, { ReactElement } from 'react';
import { button } from '@storybook/addon-knobs';
import SnackbarProvider from './index';
import { SnackbarContext } from './context';


export default {
    component: SnackbarProvider,
    title: 'Components|Display/Snackbar',
};


// eslint-disable-next-line max-statements
const Test = (): ReactElement => {
    const snackbar = React.useContext(SnackbarContext);
    const handler = (
        iconName: string,
        position: string,
        color: string,
        content: string,
    ): any => snackbar.enqueue({ color, content, iconName, position });

    button('topLeft', () => handler('build', 'topLeft', 'primary', 'Hello Top Left'));
    button('topCenter', () => handler('build', 'topCenter', 'secondary', 'Hello Top center'));
    button('topRight', () => handler('build', 'topRight', 'success', 'Hello top right'));
    button('centerLeft', () => handler('build', 'centerLeft', 'warning', 'Hello center left'));
    button('centerRight', () => handler('build', 'centerRight', 'danger', 'Hello center right'));
    button('bottomLeft', () => handler('build', 'bottomLeft', 'light', 'Hello bottom left'));
    button('bottomCenter', () => handler('build', 'bottomCenter', 'dark', 'Hello bottom center'));
    button('bottomRight', () => handler('build', 'bottomRight', 'info', 'Hello bottomRight'));

    return (
        <div style={{ backgroundColor: 'black', height: '100%', position: 'fixed', width: '100%' }}>
            child
        </div>
    );
};


export const Default = (): ReactElement => (
    <SnackbarProvider>
        <Test />
    </SnackbarProvider>
);


