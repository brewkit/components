import React from "react";
import clsx from 'clsx';
import InputBase from '../InputBase';
import { Props } from '../InputBase/types';
import styles from './styles.scss';

function Radio({ type, className, disabled, customControl, ...otherProps }: Props) {

    const defaultCustomControl = () => {
        const classes = clsx(
            { [styles.isDisabled]: !!disabled },
            styles.radio,
        );

        return (
            <div className={classes} />
        );
    };

    const classes = clsx(
        styles.wrapper, 
        className,
    );

    return (
        <InputBase type="radio" className={classes} customControl={customControl || defaultCustomControl} {...otherProps} />
    );
}

export default Radio;
