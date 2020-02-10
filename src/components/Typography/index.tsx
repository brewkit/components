import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


/**
 * The `<Typography />` component renders text using the 'Roboto' font in various styles.
 */
function Typography({
    variant,
    align,
    display = 'block',
    shouldTruncate = false,
    color,
    as = null,
    children,
    className,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-Typography',
        [`brew-Typography--display-${display}`],
        { [`brew-Typography--variant-${String(variant)}`]: variant },
        { [`brew-Typography--align-${String(align)}`]: align },
        { [`brew-Typography--color-${String(color)}`]: color },
        { 'brew-Typography--shouldTruncate': shouldTruncate },
        className,
    );


    let TextElement: keyof JSX.IntrinsicElements = 'span';
    if (as) TextElement = as;
    else if (variant === 'h1' || variant === 'h2' || variant === 'h3') TextElement = variant as 'div';


    return (
        <TextElement className={classes} {...otherProps}>
            {children}
        </TextElement>
    );


}


export default Typography;
