import React from 'react';
import { button } from '@storybook/addon-knobs';
import SnackbarProvider, { useSnackbar } from './index';


export default {
    title: 'Development|Snackbar',
};

const Test = (): React.ReactElement => {
    const { add } = useSnackbar();

    button('add', () => add({ anchorOrigin: 'top-right' }));
    button('add second', () => add({ anchorOrigin: 'top-right' }));
    button('add third', () => add({ anchorOrigin: 'bottom-center' }));

    return (
        <div>hello</div>
    );
};


export const General = (): React.ReactElement => (
    <SnackbarProvider>
        <Test />
    </SnackbarProvider>
);

