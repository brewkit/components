import React from 'react';
import clsx from 'clsx';
import { Snackbar as MuiSnackbar, SnackbarContent as MuiSnackbarContent } from '@material-ui/core';
import { Props } from './types';


/**
 * Notification that pops up to alert the end user
 * <Snackbar {...props} />
 * Visibility controlled by isOpen prop
 */
const Snackbar = React.forwardRef(({
    action,
    className,
    children,
    color,
    duration = 0,
    message,
    onClose,
    isOpen,
    position = 'top-right',
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    /* Converts a string position 'top-right' to { vertical: 'top', horizontal: 'right' } */
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


    const contentClasses = {
        message: 'brew-Snackbar__message',
        action: 'brew-Snackbar__action',
    };


    return (
        <MuiSnackbar
            action={action}
            anchorOrigin={getAnchor()}
            autoHideDuration={duration * 1000 || null}
            className={children ? snackbarClasses : ''}
            message={message}
            onClose={onClose}
            open={isOpen}
            ref={ref}
            {...otherProps}
        >
            {children || (
                <MuiSnackbarContent
                    action={action}
                    classes={contentClasses}
                    className={snackbarClasses}
                    message={message}
                />
            )}
        </MuiSnackbar>
    );


});


Snackbar.displayName = 'Snackbar';


export default Snackbar;
