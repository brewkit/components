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
    hasError,
    fullWidth,
    id,
    inputClassName,
    label,
    inputLabelClassName,
    isMultiple,
    name,
    onChange,
    placeholder,
    readOnly,
    required,
    rows,
    type = 'text',
    value,
    formRef,
    tabIndex = 1,
    ...otherProps
}: Props): ReactElement => {


    const classes = clsx(
        'brew-Input',
        { 'brew-Input--isDisabled': Boolean(disabled) },
        { 'brew-Input--hasError': Boolean(hasError) },
        { 'brew-Input--isFullWidth': Boolean(fullWidth) },
        { 'brew-Input--hasBefore': Boolean(before) },
        { 'brew-Input--hasAfter': Boolean(after) || (!disabled && hasError) },
        className,
    );


    const Element = as;


    return (
        <Typography className={classes} component="label" tabIndex={tabIndex} {...otherProps}>
            {before}

            <Element
                checked={checked}
                className={clsx('brew-Input__element', inputClassName)}
                cols={cols}
                defaultChecked={defaultChecked}
                defaultValue={defaultValue}
                disabled={disabled}
                id={id}
                multiple={isMultiple}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                readOnly={readOnly}
                ref={formRef}
                required={required}
                rows={rows}
                type={type}
                value={value}
            >
                {children}
            </Element>

            {after}

            {Boolean(customControl) && customControl}

            {label && (type === 'checkbox' || type === 'radio') && (
                <span className={clsx('brew-Input__label', inputLabelClassName)}>{label}</span>
            )}

        </Typography>
    );


};


export default InputBase;
