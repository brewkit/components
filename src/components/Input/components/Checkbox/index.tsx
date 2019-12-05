import React from "react";
import clsx from 'clsx';
import InputBase from '../InputBase';
import { Props } from '../InputBase/types';
import styles from './styles.scss';


function Checkbox({ className, type, error, customControl, disabled, ...otherProps }: Props) {

    const defaultCustomControl = () => {

        const classes = clsx(
            { [styles.hasError]: !!error },
            { [styles.isDisabled]: !!disabled },
            styles.checkbox,
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
        <InputBase type="checkbox" className={classes} customControl={customControl || defaultCustomControl} disabled={disabled} error={error} {...otherProps} />
    );
}

export default Checkbox;
