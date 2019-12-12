import React from 'react';
import clsx from 'clsx';
import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';
import FormHelperText from '../FormHelperText';
import Input from '../../../Input';
import styles from './styles.scss';
import { Props } from './types';

function FormField({ 
    className,
    inputClassName, 
    error, 
    helperText, 
    label, 
    variant, 
    children,
    ...otherProps
}: Props) {
    const classes = clsx(
        { [styles.hasError]: !!error },
        className,
    );

    return (
        <FormGroup className={classes}>
            {label && (
                <FormLabel>{label}</FormLabel>
            )}
            <Input variant={variant} className={inputClassName} {...otherProps} />
            {helperText && (
                <FormHelperText>{helperText}</FormHelperText>
            )}
        </FormGroup>
    );
}

export default FormField;
