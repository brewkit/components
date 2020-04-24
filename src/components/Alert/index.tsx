import React from 'react';
import clsx from 'clsx';
import MuiAlert from '@material-ui/lab/Alert';
import Typography from '@components/Typography';
import { Props } from './types';


/**
 * An alert displays a short, important message in a way that attracts the user's attention without interrupting the
 * user's task.
 */
export const Alert = React.forwardRef(({
    title,
    children,
    severity = 'success',
    variant = 'standard',
    className,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classNames = clsx(
        'brew-Alert',
        `brew-Alert--severity-${severity}`,
        `brew-Alert--variant-${variant}`,
        className,
    );


    const classes = {
        message: 'brew-Alert__content',
        icon: 'brew-Alert__icon',
        action: 'brew-Alert__action',
    };


    return (
        <MuiAlert classes={classes} className={classNames} ref={ref} severity={severity} {...otherProps}>
            {title && (
                <Typography className="brew-Alert__title">{title}</Typography>
            )}
            {children && (
                <Typography className="brew-Alert__content" variant="caption">{children}</Typography>
            )}
        </MuiAlert>
    );


});


Alert.displayName = 'Alert';


export default Alert;
