import React from 'react';
import clsx from 'clsx';
import { Props } from './types';


/**
 * The `<Progress />` component renders a loading indicator.
 */
export const Progress = React.forwardRef(({
    variant = 'horizontal',
    color = 'primary',
    size = 'inherit',
    className,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = clsx(
        `brew-Progress--${variant}`,
        `brew-Progress__color--${color}`,
        `brew-Progress__size--${size}`,
        className,
    );


    return (
        <div className={classes} ref={ref} {...otherProps} />
    );


});


Progress.displayName = 'Progress';


export default Progress;
