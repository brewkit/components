import React from 'react';
import {
    AppBar as MuiAppBar,
    Toolbar as MuiToolbar
} from '@material-ui/core';
import AppBarItem from './components/AppBarItem';
import { AppBarComponent, Props } from './types';


/**
 * The `AppBar` component represents content and actions related to the current screen.
 * It can be used for navigation, actions, titles, or branding
 */
export const AppBar: AppBarComponent = React.forwardRef(({
    anchorFrom = 'left',
    children,
    className,
    color = 'dark',
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = {
        root: `brew-AppBar brew-AppBar--${color} brew-AppBar--${anchorFrom} ${className}`,
    };


    return (
        <MuiAppBar
            classes={classes}
            ref={ref}
            {...otherProps}
        >
            <MuiToolbar className="brew-AppBar__content">
                {children}
            </MuiToolbar>
        </MuiAppBar>
    );


});

AppBar.Item = AppBarItem;
AppBar.displayName = 'AppBar';


export default AppBar;
