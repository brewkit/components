import React from 'react';
import clsx from 'clsx';
import { Props } from './types';


/**
 * The `<Icon />` component interfaces easily with an icon font and uses it's `children` prop to render an appropriate icon.
 */
export const Icon = React.forwardRef(({
    color = 'inherit',
    size,
    children,
    className,
    component: Component = 'i',
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    /** Combine our classes based on props */
    const classes = clsx(
        'brew-Icon',
        'material-icons',
        `brew-Icon--color-${color}`,
        { [`brew-Icon--size-${String(size)}`]: size },
        className,
    );


    return (
        <Component className={classes} ref={ref} {...otherProps}>
            {children}
        </Component>
    );

});


Icon.displayName = 'Icon';


export default Icon;
