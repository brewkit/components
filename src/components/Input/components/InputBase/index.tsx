import React from 'react';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';

/**
 * This component is made to be extended, not to be used directly
 */
const InputBase = ({
    as = 'input',
    type,
    required,
    error = false,
    className,
    name,
    id,
    fullWidth,
    disabled,
    value,
    defaultValue,
    placeholder,
    inputClassName,
    inputLabel,
    customControl,
    checked,
    children
}: Props) => {
    const classes = clsx(
        className,
    );

    const Element = as;
    const CustomControl = customControl;

    return (
        <Typography as="label" className={classes}>
            <Element
                id={id}
                name={name}
                type={type}
                required={required}
                disabled={disabled}
                value={value}
                defaultValue={defaultValue}
                placeholder={placeholder}
                checked={checked}
                className={inputClassName}
            >{children}</Element>
            {customControl && (
                <CustomControl />
            )}
            {inputLabel && ( type === 'checkbox' || type === 'radio' ) && (
                <span className={inputLabelClassName}>{inputLabel}</span>
            )}
        </Typography>
    );
};

export default InputBase;
