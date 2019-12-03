import React from 'react';
import clsx from 'clsx';
import { Props } from './types';
import styles from './styles.scss';

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
    inputProps = {},
    children
}: Props) => {
    const classes = clsx(
        { [styles.hasError]: !!error },
        { [styles.fullWidth]: !!fullWidth },
        styles.inputWrapper,
        className,
    );

    const Element = as;

    const { className: inputClassName, ...otherInputProps } = inputProps;
    const inputClasses = clsx(
        inputClassName,
    );

    return (
        <div className={classes}>
            <Element
                id={id}
                name={name}
                type={type}
                required={required}
                disabled={disabled}
                value={value}
                defaultValue={defaultValue}
                placeholder={placeholder}
                className={inputClasses}
                {...otherInputProps}
            >{children}</Element>
        </div>
    );
};

export default InputBase;
