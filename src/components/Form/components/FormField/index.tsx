import React, { ReactElement } from 'react';
import { useFormContext } from 'react-hook-form';
import clsx from 'clsx';
import Input from '@components/Input';
import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';
import FormHelperText from '../FormHelperText';
import { Props } from './types';


function FormField({
    className,
    inputClassName,
    helperText,
    label,
    variant,
    validation,
    name,
    ...otherProps
}: Props): ReactElement {


    const { register, errors } = useFormContext<Record<string, unknown>>();
    const hasError = Boolean(name && errors && errors[name]?.message);


    const classes = clsx(
        'brew-FormField',
        { 'brew-FormField--hasError': hasError },
        className,
    );


    return (
        <FormGroup className={classes}>

            {label && (
                <FormLabel>{label}</FormLabel>
            )}

            <Input
                className={inputClassName}
                formRef={validation ? register(validation) : register}
                name={name}
                variant={variant}
                {...otherProps}
            />

            {(helperText ?? hasError) && (
                <FormHelperText>{(name && errors[name]?.message) || helperText}</FormHelperText>
            )}

        </FormGroup>
    );


}


export default FormField;
