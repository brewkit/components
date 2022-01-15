import React from 'react';
import {
    Tooltip as MUITooltip,
    TooltipProps as MUITooltipProps,
} from '@material-ui/core';
import useStyles from './Tooltip.styles';

export type BkTooltipProps = MUITooltipProps;

const Tooltip = React.forwardRef(
    (props: BkTooltipProps, ref: React.Ref<HTMLDivElement>) => {
        const classes = useStyles();

        return <MUITooltip ref={ref} classes={classes} {...props} />;
    },
);

Tooltip.displayName = 'BkTooltip';

export default Tooltip;
