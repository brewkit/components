import React from 'react';
import clsx from 'clsx';
import { Snackbar as MuiSnackbar, SnackbarContent as MuiSnackbarContent } from '@material-ui/core';
import Icon from '@components/Icon';
import { Props } from './types';


/**
 * <Snackbar {...props} /> Notification that pops up to alert the end user
 * Visibility controlled by isOpen prop
 */
const Snackbar = React.forwardRef(({
    action = '',
    className,
    useCustom = false,
    color = 'primary',
    duration = 0,
    message,
    messageInfo,
    onClose,
    iconName,
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
            anchorOrigin={getAnchor()}
            autoHideDuration={duration * 1000 || null}
            className={useCustom ? snackbarClasses : ''}
            onClose={onClose}
            open={isOpen}
            ref={ref}
            {...otherProps}
        >
            {useCustom
                ? (
                    <React.Fragment>
                        {iconName && <Icon className="brew-Snackbar__icon">{iconName}</Icon>}
                        <div className="brew-Snackbar__message">{message}</div>
                        <div className="brew-Snackbar__messageInfo">{messageInfo}</div>
                        {action && <span className="brew-Snackbar__action">{action}</span>}
                    </React.Fragment>
                )
                : (
                    <MuiSnackbarContent
                        action={action}
                        classes={contentClasses}
                        className={snackbarClasses}
                        message={message}
                    />
                )
            }
        </MuiSnackbar>
    );


});


Snackbar.displayName = 'Snackbar';


export default Snackbar;
