import React from 'react';
import { Tooltip as MuiTooltip } from '@material-ui/core';
import Typography from '@components/Typography';
import { Props } from './types';


/**
 * The `<Tooltip />` component interfaces easily with an icon font and uses it's `children` prop to render an
 * appropriate icon.
 */
export const Tooltip = ({
    color = 'primary',
    isInteractive = true,
    isOpen,
    title,
    children,
    ...otherProps
}: Props): React.ReactElement => {


    const classes = {
        tooltip: `brew-Tooltip brew-Tooltip--color-${color}`,
        arrow: 'brew-Tooltip__arrow',
    };


    const tooltipContent = (
        <Typography color="inherit" variant="caption">{title}</Typography>
    );


    return (
        <MuiTooltip
            arrow
            classes={classes}
            interactive={isInteractive}
            open={isOpen}
            title={tooltipContent}
            {...otherProps}
        >
            {children}
        </MuiTooltip>
    );

};


Tooltip.displayName = 'Tooltip';


export default Tooltip;
