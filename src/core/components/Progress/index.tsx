import React from 'react';
import clsx from 'clsx';
import { Props } from './types';
import styles from './styles.scss';


/**
 * The `<Progress />` component renders a loading indicator.
 */
function Progress({
    variant = 'horizontal',
    color = 'primary',
    size = 'inherit',
    className,
    ...otherProps
}: Props) {

    const classes = clsx(
        styles[`variant--${variant}`],
        styles[`color--${color}`],
        styles[`size--${size}`],
        className,
    );

    return (
        <div className={classes} {...otherProps} />
    );

}


export default Progress;
