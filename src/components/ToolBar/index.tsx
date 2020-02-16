import React from 'react';
import clsx from 'clsx';
import { Props } from './types';


/**
 * The `ToolBar` component provides a flex-based container that can be used for spacing out children more effectively.
 */
export const ToolBar = React.forwardRef(({
    className,
    component: Component = 'div',
    disableGutters,
    variant = 'regular',
    ...other
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = clsx(
        'brew-ToolBar',
        `brew-ToolBar--variant-${variant}`,
        { 'brew-ToolBar--disableGutters': disableGutters },
        className,
    );


    return <Component className={classes} ref={ref} {...other} />;


});


ToolBar.displayName = 'ToolBar';


export default ToolBar;
