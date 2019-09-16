import React from 'react';
import clsx from 'clsx';
import { Props } from './types';
import styles from './styles.scss';


/**
 * The `Type` component renders text using the 'Roboto' font in various styles.
 */
function Typography({
    children = null,
    variant = 'inherit',
    color = 'initial',
    align = 'inherit',
    display = 'initial',
    hasBottomMargin = false,
    shouldTruncate = false,
    className = null,
    as = null,
    ...otherProps
}: Props) {


    const classes = clsx(
        styles.wrapper,
        styles[`variant--${variant}`],
        styles[`color--${color}`],
        styles[`align--${align}`],
        styles[`display--${display}`],
        { [styles.hasBottomMargin]: hasBottomMargin },
        { [styles.shouldTruncate]: shouldTruncate },
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
