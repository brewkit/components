import React from 'react';
import clsx from 'clsx';
import { Snackbar as MuiSnackbar, Slide } from '@material-ui/core';
import Icon from '@components/Icon';
import { Props } from './types';


/**
 * <Snackbar {...props} /> Notification that pops up to alert the end user
 * Visibility controlled by isOpen prop
 */
const Snackbar = ({
    action = '',
    className,
    color = 'primary',
    duration = 0,
    message,
    onClose,
    iconName,
    isOpen,
    position = 'top-right',
    slideDirection = 'left',
    ...otherProps
}: Props): React.ReactElement | null => {


    /* Allows the component to be uncontrolled by end user */
    const [uncontrolledIsOpen, setUncontrolledIsOpen] = React.useState(false);


    /* Converts a string position 'top-right' to { vertical: 'top', horizontal: 'right' } */
    const getAnchor = (): any => {

        const anchorArray = position.split('-');

        const [vertical, horizontal] = anchorArray;

        return {
            vertical,
            horizontal,
        };
    };


    React.useEffect(() => {

        if (typeof isOpen === 'undefined') setUncontrolledIsOpen(true);

    }, []);


    const closeUncontrolled = (): void => {

        if (typeof isOpen === 'undefined') setUncontrolledIsOpen(false);

    };


    const snackbarClasses = clsx(
        'brew-Snackbar',
        `brew-Snackbar--${color}`,
        `brew-Snackbar--${position}`,
        className,
    );


    /* Don't render anything if snackbar is hidden */
    if (isOpen === false || (typeof isOpen === 'undefined' && uncontrolledIsOpen === false)) return null;


    return (
        <MuiSnackbar
            anchorOrigin={getAnchor()}
            autoHideDuration={duration * 1000 || null}
            className={snackbarClasses}
            onClose={onClose ?? closeUncontrolled}
            open={isOpen ?? uncontrolledIsOpen}
            TransitionComponent={(props: any): React.ReactElement => (
                <Slide {...props} direction={slideDirection} in={isOpen ?? uncontrolledIsOpen} />
            )}
            {...otherProps}
        >
            <div className="brew-Snackbar__content">
                {iconName && <Icon className="brew-Snackbar__icon">{iconName}</Icon>}
                <div className="brew-Snackbar__message">{message}</div>
                {action && <span className="brew-Snackbar__action" onClick={closeUncontrolled}>{action}</span>}
            </div>
        </MuiSnackbar>
    );


};


Snackbar.displayName = 'Snackbar';


export default Snackbar;
