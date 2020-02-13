import React, { ReactElement, ReactNode } from 'react';
import { button } from '@storybook/addon-knobs';
import Button from '../Button';
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
        isCloseable?: boolean,
        lifespan?: number,
        buttonContent?: ReactNode,
        handleAction?: () => void,
        // eslint-disable-next-line max-params
    ): any => {
        // eslint-disable-next-line sort-keys
        if (snackbar?.enqueue) return snackbar.enqueue({ color, content, iconName, position, isCloseable, lifespan, buttonContent, handleAction });
        return null;
    };


    button('topLeft', () => handler('build', 'topLeft', 'primary', 'Hello Top Left', true, 10));
    button('topCenter', () => handler('build', 'topCenter', 'secondary', 'Hello Top center'));
    button('topRight', () => handler('', 'topRight', 'success', 'Hello top right', true, undefined, 'Button String', () => console.log('clicked')));
    button('centerLeft', () => handler('build', 'centerLeft', 'warning', 'Hello center left'));
    button('centerRight', () => handler('', 'centerRight', 'danger', 'Hello center right'));
    button('bottomLeft', () => handler('build', 'bottomLeft', 'light', 'Hello bottom left', true, 10, 'button', () => console.log('hello')));
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


