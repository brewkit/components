import React from 'react';
import MuiIcon from '@material-ui/core/Icon';
import SvgIcon from './components/SvgIcon';
import { IconComponent, Props } from './types';


/**
 * The `Icon` component will display an icon from any icon font that supports ligatures. As a prerequisite, you must
 * include one, such as the Material icon font in your project, for instance, via Google Web Fonts:
 *
 * ```
 * <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
 * ```
 *
 * Icon will set the correct class name for the Material icon font. For other fonts, you must supply the class name
 * using the Icon component's `className` property.
 *
 * To use an icon simply wrap the icon name (font ligature) with the `Icon` component, for example: `<Icon>star</Icon>`.
 */
export const Icon: IconComponent = React.forwardRef(({
    color = 'inherit',
    size = 'inherit',
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = {
        root: `brew-Icon brew-Icon--color-${color} brew-Icon--size-${size}`,
    };


    return (
        <MuiIcon
            classes={classes}
            component="i"
            fontSize={size}
            ref={ref}
            {...otherProps}
        />
    );


});


Icon.Svg = SvgIcon;


Icon.displayName = 'Icon';


export default Icon;
