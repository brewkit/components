import * as React from 'react';
import MUIBadge, { BadgeProps as MUIBadgeProps } from '@material-ui/core/Badge';
import useStyles from './Badge.styles';

export type BkBadgeProps = MUIBadgeProps;

export const Badge = React.forwardRef(
    (props: BkBadgeProps, ref: React.Ref<any>): React.ReactElement => {
        const classes = useStyles();
        return <MUIBadge classes={classes} ref={ref} {...props} />;
    },
);

Badge.displayName = 'Badge';

export default Badge;
