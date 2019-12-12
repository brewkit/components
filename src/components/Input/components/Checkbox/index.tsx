import React from "react";
import clsx from 'clsx';
import Icon from '../../../Icon';
import InputBase from '../InputBase';
import { Props } from './types';
import styles from './styles.scss';


function Checkbox({ 
    className = undefined, 
    customControl = undefined, 
    disabled = false, 
    error = false,
    fullWidth = false,
    inputLabelClassName = undefined,
    ...otherProps
}: Props) {

    const defaultCustomControl = () => {
        return (
            <div className={styles.checkbox}>
                <Icon size="large" className={styles.check}>check</Icon>
            </div>
        );
    };

    const classes = clsx(
        styles.wrapper,
        { [styles.isDisabled]: !!disabled },
        { [styles.hasError]: !!error },
        { [styles.isFullWidth]: !!fullWidth },
        className,
    );

    const inputLabelClasses = clsx(
        styles.inputLabel,
        inputLabelClassName,
    );

    return (
        <InputBase 
            className={classes} 
            customControl={customControl || defaultCustomControl}
            disabled={disabled} 
            error={error}
            fullWidth={fullWidth}
            inputLabelClassName={inputLabelClasses}
            type="checkbox" 
            {...otherProps}
        />
    );
}

export default Checkbox;
