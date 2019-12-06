import React from 'react';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';

/**
 * This component is made to be extended, not to be used directly
 */
const InputBase = ({
    as = 'input',
    checked = undefined,
    children = undefined,
    className = undefined,
    customControl = undefined,
    defaultChecked = undefined,
    defaultValue = undefined,
    disabled = undefined,
    error = false,
    fullWidth = false,
    id = undefined,
    inputClassName = undefined,
    inputLabel = undefined,
    inputLabelClassName = undefined,
    name = undefined,
    placeholder = undefined,
    required = undefined,
    type = 'text',
    value = undefined,
}: Props) => {
    const classes = clsx(
        className,
    );

    const Element = as;
    const CustomControl = customControl;

    return (
        <Typography as="label" className={classes}>
            <Element
                checked={checked}
                className={inputClassName}
                defaultChecked={defaultChecked}
                defaultValue={defaultValue}
                disabled={disabled}
                id={id}
                name={name}
                placeholder={placeholder}
                required={required}
                type={type}
                value={value}
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
