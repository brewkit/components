import React, { ReactElement } from 'react';
import { button } from '@storybook/addon-knobs';
import SnackbarProvider, { useSnackbar } from './index';


export default {
    title: 'Development|Display/Snackbar',
};

// eslint-disable-next-line max-statements
const Snackaroo = (): ReactElement => {

    const { enqueue, remove } = useSnackbar();

    const positions = [
        'top-right',
        'top-center',
        'top-left',
        'bottom-right',
        'bottom-center',
        'bottom-left',
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
        duration: 5000,
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
        position: 'bottom-right',
    });

    const removeSnackbar = (): void => remove('testKey');

    button('Add Random', addSnackbar);
    button('Add Custom Key', addCustomKey);
    button('Remove Custom Key', removeSnackbar);


    return <div />;
};


export const General = (): ReactElement => (
    <SnackbarProvider maxSnackbars={10}>
        <Snackaroo />
    </SnackbarProvider>
);