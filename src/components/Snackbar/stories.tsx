/* eslint-disable no-console,sort-keys,max-params,max-len */
import React, { ReactElement, ReactNode } from 'react';
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
        isCloseable?: boolean,
        lifespan?: number,
        buttonContent?: ReactNode,
        handleAction?: () => void,
    ): any => {
        if (snackbar?.enqueue) return snackbar.enqueue({
            color,
            content,
            iconName,
            position,
            isCloseable,
            lifespan,
            buttonContent,
            handleAction });
        return null;
    };


    button('Closeable longer duration', () => handler('build', 'topLeft', 'primary', 'Hello Top Left', true, 10));
    button('default text only', () => handler('build', 'topCenter', 'secondary', 'Hello Top center'));
    button('closeable with button', () => handler('', 'topRight', 'success', 'Hello top right', true, undefined, 'Button String', () => console.log('clicked')));
    button('text icon', () => handler('build', 'centerLeft', 'warning', 'Hello center left'));
    button('text', () => handler('', 'centerRight', 'danger', 'Hello center right'));
    button('closeable button longer duration', () => handler('build', 'bottomLeft', 'light', 'Hello bottom left', true, 10, 'button', () => console.log('hello')));
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


