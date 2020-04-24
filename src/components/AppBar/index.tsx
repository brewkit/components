import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import MuiToolbar from '@material-ui/core/Toolbar';
import { Props } from './types';


/**
 * The `AppBar` component represents content and actions related to the current screen.
 * It can be used for navigation, actions, titles, or branding
 */
export const AppBar = React.forwardRef(({
    anchorFrom = 'left',
    children,
    className,
    position,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = {
        root: `brew-AppBar brew-AppBar-anchorFrom--${anchorFrom}`,
    };


    return (
        <MuiAppBar
            classes={classes}
            className={className}
            ref={ref}
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
