import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


/**
 * The `<Icon />` component renders an SVG icon. By default, it can render any of the icons available in
 * [Material Design (Outline)](https://material.io/tools/icons/?style=outline). Built-in sizing options are in `em`
 * units as to be similar to any neighboring fonts.
 */
function Icon({
    color = 'inherit',
    size,
    children,
    className,
    ...otherProps
}: Props): ReactElement {


    /** Combine our classes based on props */
    const classes = clsx(
        'brew-Icon',
        'material-icons',
        `brew-Icon--color-${color}`,
        { [`brew-Icon--size-${String(size)}`]: size },
        className,
    );


    return (
        <i className={classes} {...otherProps}>
            {children}
        </i>
    );

}


export default Icon;
