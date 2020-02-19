import React, { ReactElement } from 'react';
import { button } from '@storybook/addon-knobs';
import SnackbarProvider, { useSnackbar } from './index';


export default {
    title: 'Components|Display/Snackbar',
};

const Snackaroo = (): ReactElement => {

    const { enqueue, remove } = useSnackbar();

    const addSnackbar = (): void => enqueue({
        content: Math.random(),
        duration: 5,
        position: 'bottomRight',
    });

    const addCustomKey = (): void => enqueue({
        content: 'custom key provided',
        duration: 5, key: 'testKey',
        position: 'bottomRight',
    });

    const removeSnackbar = (): void => remove('testKey');

    button('Add', addSnackbar);
    button('Add Custom Key', addCustomKey);
    button('Remove Custom Key', removeSnackbar);


    return <div>This is a test</div>;
};


export const General = (): ReactElement => (
    <SnackbarProvider maxSnackbars={3}>
        <Snackaroo />
    </SnackbarProvider>
);
