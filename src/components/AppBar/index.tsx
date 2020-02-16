import React from 'react';
import clsx from 'clsx';
import Paper from '@components/Paper';
import ToolBar from '@components/ToolBar';
import { Props } from './types';


/**
 * The `Paper` component serves as a wrapping element that provides a card-like or paper-like appearance.
 */
export const AppBar = React.forwardRef(({
    className,
    children,
    color = 'transparent',
    position = 'fixed',
    ...other
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = clsx(
        'brew-AppBar',
        `brew-AppBar--color-${color}`,
        `brew-AppBar--position-${position}`,
        className,
    );


    return (
        <Paper
            className={classes}
            component="header"
            elevation={4}
            isRounded={false}
            ref={ref}
            {...other}
        >
            <ToolBar>{children}</ToolBar>
        </Paper>
    );


});


AppBar.displayName = 'AppBar';


export default AppBar;
