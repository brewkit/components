import React from 'react';
import MuiSnackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import Icon from '@components/Icon';
import Typography from '@components/Typography';
import { Props } from './types';


/**
 *  The `<Snackbar />` component provides a notification that pops up to alert the end user.
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


    const closeUncontrolled = (event?: React.SyntheticEvent, reason?: string): void => {

        if (event) event.stopPropagation();
        if (reason === 'clickaway') return;
        if (typeof isOpen === 'undefined') setUncontrolledIsOpen(false);

    };


    const classes = {
        root: `brew-Snackbar brew-Snackbar--${color} brew-Snackbar--${position}`,
    };


    /* Don't render anything if snackbar is hidden */
    if (isOpen === false || (typeof isOpen === 'undefined' && !uncontrolledIsOpen)) return null;


    return (
        <MuiSnackbar
            anchorOrigin={getAnchor()}
            autoHideDuration={duration || null}
            classes={classes}
            className={className}
            onClose={onClose ?? closeUncontrolled}
            open={isOpen ?? uncontrolledIsOpen}
            TransitionComponent={(props: any): React.ReactElement => (
                <Slide {...props} direction={slideDirection} in={isOpen ?? uncontrolledIsOpen} />
            )}
            {...otherProps}
        >
            <div className="brew-Snackbar__content">
                {iconName && <Icon className="brew-Snackbar__icon">{iconName}</Icon>}
                <div className="brew-Snackbar__message">
                    <Typography color="inherit" variant="caption">
                        {message}
                    </Typography>
                </div>
                {action && (
                    <span className="brew-Snackbar__action" onClick={closeUncontrolled}>
                        <Typography color="inherit" variant="caption">
                            {action}
                        </Typography>
                    </span>
                )}
            </div>
        </MuiSnackbar>
    );


};


Snackbar.displayName = 'Snackbar';


export default Snackbar;
