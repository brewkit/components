import * as React from 'react';
import MUIBadge, { BadgeProps as MUIBadgeProps } from '@material-ui/core/Badge';

export type BkBadgeProps = MUIBadgeProps;

export const Badge = React.forwardRef(
  (props: BkBadgeProps, ref: React.Ref<any>): React.ReactElement => (
    <MUIBadge ref={ref} {...props} />
  )
);

Badge.displayName = 'Badge';

export default Badge;
