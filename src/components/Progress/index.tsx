import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


/**
 * The `<Progress />` component renders a loading indicator.
 */
function Progress({
    variant = 'horizontal',
    color = 'primary',
    size = 'inherit',
    className,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        `brew-Progress--${variant}`,
        `brew-Progress__color--${color}`,
        `brew-Progress__size--${size}`,
        className,
    );


    return (
        <div className={classes} {...otherProps} />
    );


}


export default Progress;
