import React from 'react';
import MuiSvgIcon from '@material-ui/core/SvgIcon';
import { Props } from './types';


/**
 * If you need a custom SVG icon (not available in the Material Icons default set) you can use the `SvgIcon` wrapper.
 * This component extends the native `<svg>` element:
 *
 * - It comes with built-in accessibility.
 * - SVG elements should be scaled for a 24x24px viewport, so the resulting icon can be used as is, or included as a
 * child for other Material-UI components that use icons. (This can be customized with the viewBox attribute).
 * - By default, the component inherits the current color. Optionally, you can apply one of the theme colors using the
 * color prop.
 */
export const SvgIcon = React.forwardRef(({
    color = 'inherit',
    size = 'inherit',
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = {
        root: `brew-SvgIcon brew-SvgIcon--color-${color} brew-SvgIcon--size-${size}`,
    };


    return (
        <MuiSvgIcon
            classes={classes}
            fontSize={size}
            ref={ref}
            {...otherProps}
        />
    );


});


SvgIcon.displayName = 'SvgIcon';


export default SvgIcon;
