import React from 'react';
import {
    Tooltip as MUITooltip,
    TooltipProps as MUITooltipProps,
} from '@material-ui/core';
import useStyles from './Tooltip.styles';

export type BkTooltipProps = MUITooltipProps;

const Tooltip = (props: BkTooltipProps) => {
    const classes = useStyles();
    return <MUITooltip classes={classes} {...props} />;
};

Tooltip.displayName = 'Tooltip';

export default Tooltip;
