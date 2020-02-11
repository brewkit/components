import React, { ReactElement } from 'react';
import { button } from '@storybook/addon-knobs';
import SnackbarProvider from './index';
import { SnackbarContext } from './context';


export default {
    component: SnackbarProvider,
    title: 'Components|Display/Snackbar',
};


const Test = (): ReactElement => {
    const snackbar = React.useContext(SnackbarContext);
    const topLeft = (): any => snackbar.enqueue({ color: 'primary', content: 'topLeft', position: 'topLeft' });
    const topCenter = (): any => snackbar.enqueue({ color: 'secondary', content: 'topCenter', position: 'topCenter' });
    const topRight = (): any => snackbar.enqueue({ color: 'success', content: 'topRight', position: 'topRight' });
    const centerLeft = (): any => snackbar.enqueue({ color: 'warning', content: 'centerLeft', position: 'centerLeft' });
    const centerRight = (): any => snackbar.enqueue({ color: 'danger', content: 'centerRight', position: 'centerRight' });
    const bottomLeft = (): any => snackbar.enqueue({ color: 'info', content: 'bottomLeft', position: 'bottomLeft' });
    const bottomCenter = (): any => snackbar.enqueue({ color: 'dark', content: 'bottomCenter', position: 'bottomCenter' });
    const bottomRight = (): any => snackbar.enqueue({ color: 'primary', content: 'bottomRight', position: 'bottomRight' });

    button('topLeft', topLeft);
    button('topCenter', topCenter);
    button('topCenter', topCenter);
    button('topRight', topRight);
    button('centerLeft', centerLeft);
    button('centerRight', centerRight);
    button('bottomLeft', bottomLeft);
    button('bottomCenter', bottomCenter);
    button('bottomRight', bottomRight);

    return (
        <div>
            stuff
        </div>
    );
};


export const Default = (): ReactElement => (
    <SnackbarProvider>
        <Test />
    </SnackbarProvider>
);


