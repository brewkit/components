import React from 'react';
import clsx from 'clsx';
import { Props } from './types';


const variantMapping = {
    body1: 'p',
    body2: 'p',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    label: 'span',
    subtitle1: 'h6',
    subtitle2: 'h6',
};


/**
 * The `<Typography />` component renders text using the 'Roboto' font in various styles.
 */
export const Typography = React.forwardRef(({
    variant = 'body1',
    align,
    display = 'block',
    shouldTruncate = false,
    color,
    component = 'div',
    children,
    className,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = clsx(
        'brew-Typography',
        [`brew-Typography--display-${display}`],
        { [`brew-Typography--variant-${String(variant)}`]: variant },
        { [`brew-Typography--align-${String(align)}`]: align },
        { [`brew-Typography--color-${String(color)}`]: color },
        { 'brew-Typography--shouldTruncate': shouldTruncate },
        className,
    );


    const Component = component || variantMapping[variant] || 'span';


    return (
        <Component className={classes} ref={ref} {...otherProps}>
            {children}
        </Component>
    );


});


Typography.displayName = 'Typography';


export default Typography;
