import React from "react";
import clsx from 'clsx';
import Icon from '../../../Icon';
import InputBase from '../InputBase';
import { Props } from './types';
import styles from './styles.scss';


function Checkbox(
    { 
        checked = undefined, 
        className = undefined, 
        customControl = undefined, 
        defaultChecked = undefined,
        disabled = false, 
        error = false, 
        id = undefined,
        inputClassName = undefined,
        inputLabel = undefined,
        inputLabelClassName = undefined,
        name = undefined,
        required = false
    }: Props) {

    const defaultCustomControl = () => {

        const customControlClasses = clsx(
            { [styles.hasError]: !!error },
            { [styles.isDisabled]: !!disabled },
            styles.checkbox,
        );

        return (
            <div className={customControlClasses}>
                <Icon size="large" className={styles.check}>check</Icon>
            </div>
        );
    };

    const classes = clsx(
        styles.wrapper,
        className,
    );

    return (
        <InputBase 
            type="checkbox" 
            className={classes} 
            customControl={customControl || defaultCustomControl} 
            disabled={disabled} 
            error={error}
            checked={checked}
            required={required}
            inputLabel={inputLabel}
            inputClassName={inputClassName}
            inputLabelClassName={inputLabelClassName}
        />
    );
}

export default Checkbox;
