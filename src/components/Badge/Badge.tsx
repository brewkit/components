import * as React from 'react';
import MuiBadge from '@material-ui/core/Badge';
import { Props } from './Badge.types';


/**
 * Badge generates a small badge to the top-right of its child(ren).
 *
 * [Material-UI Docs](https://material-ui.com/components/badges/)
 *
 * > No differences in Brewkit.
 */
export const Badge = React.forwardRef(({
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => (


    <MuiBadge ref={ref} {...otherProps} />


));


Badge.displayName = 'Badge';


export default Badge;
