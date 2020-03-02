import React from 'react';
import { button, number, select, text } from '@storybook/addon-knobs';
import Snackbar from './index';


export default {
    component: Snackbar,
    title: 'Development|Snackbar',
};


export const Sandbox = (): React.ReactElement => {


    const [open, setOpen] = React.useState(true);


    const position = select(
        'position',
        ['top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'],
        'top-right',
    );


    const onClose = (event: React.SyntheticEvent, reason: string): void => {
        if (event) event.stopPropagation();
        if (reason === 'clickaway') return;

        setOpen(false);
    };


    const dismissSnackbar = (): void => setOpen(false);


    const colors = select(
        'color',
        ['primary', 'secondary', 'warning', 'success', 'danger', 'dark', 'light'],
        'primary',
    );


    const message = text('message', 'Message Default');
    const duration = number('duration', 0);
    const iconName = text('iconName', '');


    button('toggle', () => setOpen((prev: any) => !prev));


    return (
        <Snackbar
            action={<div onClick={dismissSnackbar}>Close</div>}
            color={colors}
            duration={duration}
            iconName={iconName}
            isOpen={open}
            message={message}
            onClose={onClose}
            position={position}
        />
    );


};
