/* eslint-disable no-undef */
import React, { SyntheticEvent } from 'react';
import clsx from 'clsx';
import { Snackbar as MuiSnackbar, SnackbarContent as MuiSnackbarContent } from '@material-ui/core';


const Snackbar = React.forwardRef(({
    action,
    className,
    color,
    message,
    onClose = () => console.log('here'),
    open,
    position,
}: any, ref: React.Ref<any>): React.ReactElement | null => {


    const getAnchor = (): any => {

        const anchorArray = position.split('-');

        const [vertical, horizontal] = anchorArray;

        return {
            vertical,
            horizontal,
        };
    };


    const snackbarClasses = clsx(
        'brew-Snackbar',
        `brew-Snackbar--${color}`,
        className,
    );


    return (
        <MuiSnackbar
            action={action}
            anchorOrigin={getAnchor()}
            autoHideDuration={null}
            className={snackbarClasses}
            message={message}
            onClose={onClose}
            open={open}
            ref={ref}
        />
    );
});


Snackbar.displayName = 'Snackbar';


export default Snackbar;
