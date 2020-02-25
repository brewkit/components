import React, { ReactElement } from 'react';
import { button } from '@storybook/addon-knobs';
import SnackbarProvider, { useSnackbar } from './index';


export default {
    title: 'Components|Display/Snackbar',
};

// eslint-disable-next-line max-statements
const Snackaroo = (): ReactElement => {

    const { enqueue, remove } = useSnackbar();

    const positions = [
        'topRight',
        'topLeft',
        'topCenter',
        'bottomRight',
        'bottomLeft',
        'bottomCenter',
        'centerRight',
        'centerLeft',
    ];

    const colors = [
        'primary',
        'secondary',
        'success',
        'warning',
        'danger',
        'info',
        'light',
        'dark',
    ];

    const rando: number = parseFloat(Math.random().toFixed(1));

    const addSnackbar = (): void => enqueue({
        color: colors[Math.floor(Math.random() * 8)],
        message: rando,
        open: true,
        isCloseable: rando > 0.5,
        position: positions[Math.floor(Math.random() * 8)],
    });

    const customContent = (
        <div>
            <h3>foo</h3>
            <div>
                <h1>bar</h1>
            </div>
        </div>
    );

    const actionContent = (
        <div>
            <h1>helloooo</h1>
        </div>
    );

    const addCustomKey = (): void => enqueue({
        color: 'danger',
        message: customContent,
        action: actionContent,
        duration: 10000,
        open: true,
        isCloseable: true,
        key: 'testKey',
        position: 'bottomRight',
    });

    const removeSnackbar = (): void => remove('testKey');

    button('Add Random', addSnackbar);
    button('Add Custom Key', addCustomKey);
    button('Remove Custom Key', removeSnackbar);


    return <div />;
};


export const General = (): ReactElement => (
    <SnackbarProvider maxSnackbars={3}>
        <Snackaroo />
    </SnackbarProvider>
);