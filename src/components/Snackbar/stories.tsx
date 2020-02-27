import React from 'react';
import { button, number, select, text } from '@storybook/addon-knobs';
import Snackbar from './index';


export default {
    title: 'Development|Snackbar',
};

export const General = (): React.ReactElement => {


    const [open, setOpen] = React.useState(false);


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


    const actionButton = (): void => setOpen(false);


    const colors = select(
        'color',
        ['primary', 'secondary', 'warning', 'success', 'danger', 'dark', 'light'],
        'primary',
    );


    const message = text('message', 'Message Default');
    const action = <div onClick={actionButton}>Close</div>;
    const duration = number('duration', 0);


    button('toggle', () => setOpen((prev: any) => !prev));


    return (
        <div>
            <Snackbar
                action={action}
                color={colors}
                duration={duration}
                message={message}
                onClose={onClose}
                open={open}
                position={position}
            />
        </div>
    );


};


export const WithChildren = (): React.ReactElement => {


    const [open, setOpen] = React.useState(false);


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


    const actionButton = (): void => setOpen(false);


    const colors = select(
        'color',
        ['primary', 'secondary', 'warning', 'success', 'danger', 'dark', 'light'],
        'primary',
    );


    const message = text('message', 'Message Default');
    const action = <div onClick={actionButton}>Close</div>;
    const duration = number('duration', 0);


    button('toggle', () => setOpen((prev: any) => !prev));


    return (
        <div>
            <Snackbar
                action={action}
                color={colors}
                duration={duration}
                message={message}
                onClose={onClose}
                open={open}
                position={position}
            >
                <div>
                    <h1>This is the message!</h1>
                    <div>Submessage!</div>
                    <span>&times;</span>
                </div>
            </Snackbar>
        </div>
    );


};
