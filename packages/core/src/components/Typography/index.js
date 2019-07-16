import React from 'react';
import clsx from 'clsx';
import { Props } from './types';
import styles from './styles.scss';


function Type(props: Props) {


    const {
        variant = 'inherit',
        color = 'initial',
        display = 'initial',
        align = 'inherit',
        hasBottomMargin,
        shouldTruncate,
        className,
        ...otherProps
    } = props;


    const classes = clsx(
        styles.wrapper,
        styles[`variant--${variant}`],
        styles[`color--${color}`],
        styles[`display--${display}`],
        styles[`align--${align}`],
        { [styles.hasBottomMargin]: hasBottomMargin },
        { [styles.shouldTruncate]: shouldTruncate },
        className,
    );


    let TextElement = 'span';
    if (variant === 'h1' || variant === 'h2' || variant === 'h3') TextElement = variant;


    return (
        <TextElement className={classes} {...otherProps} />
    );


}


export default Type;
