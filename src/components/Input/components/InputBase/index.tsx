import React from 'react';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';

/**
 * This component is made to be extended, not to be used directly
 */
const InputBase = ({
    after = undefined,
    as = 'input',
    before = undefined,
    checked = undefined,
    children = undefined,
    className = undefined,
    cols = undefined,
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
    onChange = undefined,
    placeholder = undefined,
    readOnly = undefined,
    required = undefined,
    rows = undefined,
    type = 'text',
    value = undefined,
    ...otherProps
}: Props) => {
    const classes = clsx(
        className,
    );

    const Element = as;
    const CustomControl = customControl;
    const Before = before;
    const After = after;

    return (
        <Typography as="label" className={classes} for={id} {...otherProps}>
            {before}
            <Element
                checked={checked}
                className={inputClassName}
                cols={cols}
                defaultChecked={defaultChecked}
                defaultValue={defaultValue}
                disabled={disabled}
                id={id}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                readOnly={readOnly}
                required={required}
                rows={rows}
                type={type}
                value={value}
            >{children}</Element>
            {after}
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
