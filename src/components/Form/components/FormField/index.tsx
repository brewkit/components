import React from 'react';
import clsx from 'clsx';
import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';
import FormHelperText from '../FormHelperText';
import styles from './styles.scss';
import { Props } from './types';

function FormField({ className, error, helperText, label, children }: Props) {
    const classes = clsx(
        { [styles.hasError]: !!error },
        className,
    );

    return (
        <FormGroup className={classes}>
            {label && (
                <FormLabel>{label}</FormLabel>
            )}
            {children}
            {helperText && (
                <FormHelperText>{helperText}</FormHelperText>
            )}
        </FormGroup>
    );
}

export default FormField;
