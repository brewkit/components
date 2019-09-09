import React from 'react';
import clsx from 'clsx';
import { Props } from './types';
import styles from './styles.scss';


function Progress(props: Props) {


    const {
        variant = 'horizontal',
        color = 'primary',
        size = 'inherit',
        className,
        ...otherProps
    } = props;


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
