import React from 'react';
import clsx from 'clsx';
import MuiAppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';
import { Props } from './types';


export const AppBar = React.forwardRef(({
    anchorFrom = 'left',
    children,
    className,
    color = 'dark',
    ...otherProps
}: Props): React.ReactElement => {


    const classes = {
        root: `brew-AppBar brew-AppBar--${color} brew-AppBar--${anchorFrom} ${className}`,
    };


    return (
        <MuiAppBar
            classes={classes}
            {...otherProps}
        >
            <MuiToolbar className="brew-AppBar__content">
                {children}
            </MuiToolbar>
        </MuiAppBar>
    );


});


AppBar.displayName = 'AppBar';


export default AppBar;
