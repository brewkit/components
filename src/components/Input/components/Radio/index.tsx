import React from "react";
import clsx from 'clsx';
import InputBase from '../InputBase';
import { Props } from './types';
import styles from './styles.scss';

function Radio({
    className = undefined, 
    customControl = undefined, 
    disabled = false,
    fullWidth = false,
    inputLabelClassName = undefined,
    ...otherProps
}: Props) {

    const defaultCustomControl = () => {
        const classes = clsx(
            styles.radio,
        );

        return (
            <div className={styles.radio} />
        );
    };

    const classes = clsx(
        styles.wrapper,
        { [styles.isDisabled]: !!disabled },
        { [styles.isFullWidth]: !!fullWidth },
        className,
    );

    const inputLabelClasses = clsx(
        styles.inputLabel,
        inputLabelClassName
    );

    return (
        <InputBase
            className={classes} 
            customControl={customControl || defaultCustomControl} 
            disabled={disabled}
            fullWidth={fullWidth}
            inputLabelClassName={inputLabelClasses}
            type="checkbox" 
            {...otherProps}
        />
    );
}

export default Radio;
