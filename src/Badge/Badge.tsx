import * as React from 'react';
import { merge } from 'lodash';
import MUIBadge, { BadgeProps as MUIBadgeProps } from '@material-ui/core/Badge';
import useStyles from './Badge.styles';

export type BkBadgeProps = MUIBadgeProps;

export const Badge = React.forwardRef(
    (props: BkBadgeProps, ref: React.Ref<any>): React.ReactElement => {
        const { classes: userClasses = {}, color = 'primary' } = props;
        const classes = merge(useStyles(), userClasses);

        return (
            <MUIBadge color={color} classes={classes} ref={ref} {...props} />
        );
    },
);

Badge.displayName = 'Badge';

export default Badge;
