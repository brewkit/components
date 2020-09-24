import * as React from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';
import CircularProgress from '@components/CircularProgress';
import styles from './styles';
import { Props } from './types';


/**
 * Buttons allow users to take actions and make choices with a single tap.
 *
 * [Material-UI Docs](https://material-ui.com/components/buttons/)
 *
 *
 * ## Differences in Brewkit:
 *
 * - Adds a `loading` prop that automatically disables the button and shows a loading state. Loading class can be
 * styled with `bkOverrides.Button.loading` within your theme.
 */
export const Button = React.forwardRef(({
    loading,
    disabled,
    startIcon,
    endIcon,
    children,
    className,
    classes,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    /**
     * merge our custom classes into the ones passed to the component
     */
    const buttonClasses = clsx(
        classes.root,
        loading && classes.loading,
        className,
    );


    return (
        <MuiButton
            {...otherProps}
            className={buttonClasses}
            disabled={disabled ?? loading}
            ref={ref}
        >

            <div className={classes.content}>
                {startIcon}
                {children && <span>{children}</span>}
                {endIcon}
            </div>

            <div className={classes.loader}>
                <CircularProgress color="primary" size="1rem" thickness={5} />
            </div>

        </MuiButton>
    );


});


Button.displayName = 'Button';


export default withStyles(styles)(Button);
