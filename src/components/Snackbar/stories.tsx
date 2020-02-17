import React, { ReactElement } from 'react';
import { button } from '@storybook/addon-knobs';
import SnackbarProvider from './index';
import SnackbarContext from './context';


export default {
    title: 'Components|Display/Snackbar',
};

const Snackaroo = (): ReactElement => {

    const snackbar = React.useContext(SnackbarContext);
    const remove = () => snackbar.remove('test');
    const add = () => snackbar.add({ content: 'hello', position: 'bottomRight', key: 'test' });


    button('Remove', remove);
    button('Add', add);


    return <div>This is a test</div>;
};


export const General = (): ReactElement => (
    <SnackbarProvider>
        <Snackaroo />
    </SnackbarProvider>
);
