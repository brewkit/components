import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';


/**
 * This component is made to be extended, not to be used directly
 */
const InputBase = ({
    after,
    as = 'input',
    before,
    checked,
    children,
    className,
    cols,
    customControl,
    defaultChecked,
    defaultValue,
    disabled,
    id,
    inputClassName,
    inputLabel,
    inputLabelClassName,
    name,
    onChange,
    placeholder,
    readOnly,
    required,
    rows,
    type = 'text',
    value,
    ...otherProps
}: Props): ReactElement => {


    const classes = clsx(className);
    const Element = as;
    const CustomControl = customControl;


    return (
        <Typography as="label" className={classes} {...otherProps}>


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
            >
                {children}
            </Element>

            {after}

            {customControl && (
                <CustomControl />
            )}

            {inputLabel && (type === 'checkbox' || type === 'radio') && (
                <span className={inputLabelClassName}>{inputLabel}</span>
            )}
        </Typography>
    );
};


export default InputBase;
