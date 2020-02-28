import React from 'react';
import clsx from 'clsx';
import { Snackbar as MuiSnackbar, Slide, SlideProps } from '@material-ui/core';
import Icon from '@components/Icon';
import { Props } from './types';


/**
 * <Snackbar {...props} /> Notification that pops up to alert the end user
 * Visibility controlled by isOpen prop
 */
const Snackbar = ({
    action = '',
    color = 'primary',
    duration = 0,
    message,
    messageInfo,
    onClose,
    iconName,
    isOpen,
    position = 'top-right',
    ...otherProps
}: Props): React.ReactElement => {


    /* Converts a string position 'top-right' to { vertical: 'top', horizontal: 'right' } */
    const getAnchor = (): any => {

        const anchorArray = position.split('-');

        const [vertical, horizontal] = anchorArray;

        return {
            vertical,
            horizontal,
        };
    };


    return (
        <MuiSnackbar
            anchorOrigin={getAnchor()}
            autoHideDuration={duration * 1000 || null}
            onClose={onClose}
            open={isOpen}
            TransitionComponent={(props: any): React.ReactElement => <Slide {...props} direction="left" in={isOpen} />}
            {...otherProps}
        >
            <div className={`brew-Snackbar brew-Snackbar--${color}`}>
                {iconName && <Icon className="brew-Snackbar__icon">{iconName}</Icon>}
                <div className="brew-Snackbar__message">{message}</div>
                <div className="brew-Snackbar__messageInfo">{messageInfo}</div>
                {action && <span className="brew-Snackbar__action">{action}</span>}
            </div>
        </MuiSnackbar>
    );


};


Snackbar.displayName = 'Snackbar';


export default Snackbar;
