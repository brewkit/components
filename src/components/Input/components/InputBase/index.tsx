import React, { ReactElement, Ref } from 'react';
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
    error,
    fullWidth,
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
}: Props, ref?: Ref<HTMLElement>): ReactElement => {
    const classes = clsx(
        'brew-Input',
        { 'brew-Input--isDisabled': Boolean(disabled) },
        { 'brew-Input--hasError': Boolean(error) },
        { 'brew-Input--isFullWidth': Boolean(fullWidth) },
        { 'brew-Input--hasBefore': Boolean(before) },
        { 'brew-Input--hasAfter': Boolean(after) || (!disabled && error) },
        className,
    );

    const Element = as;

    return (
        <Typography as="label" className={classes} ref={ref} {...otherProps}>
            {before}

            <Element
                checked={checked}
                className={clsx('brew-Input__element', inputClassName)}
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

            {Boolean(customControl) && customControl}

            {inputLabel && (type === 'checkbox' || type === 'radio') && (
                <span className={clsx('brew-Input__label', inputLabelClassName)}>{inputLabel}</span>
            )}
        </Typography>
    );
};

export default React.forwardRef(InputBase);
