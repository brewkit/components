import React, { ReactElement } from 'react';
import { useFormContext, ErrorMessage } from 'react-hook-form';
import clsx from 'clsx';
import Input from '@components/Input';
import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';
import FormHelperText from '../FormHelperText';
import { Props } from './types';


function FormField({
    className,
    inputClassName,
    error,
    helperText,
    label,
    variant,
    validation,
    name,
    onBlur,
    ...otherProps
}: Props): ReactElement {


    const { register, triggerValidation } = useFormContext();


    const classes = clsx(
        'brew-FormField',
        { 'brew-FormField--hasError': Boolean(error) },
        className,
    );


    function handleOnBlur(): void {
        if (name) triggerValidation(name).catch((err: PromiseRejectionEvent) => err);
        if (onBlur) onBlur();
    }


    return (
        <FormGroup className={classes}>

            {label && (
                <FormLabel>{label}</FormLabel>
            )}

            <Input
                className={inputClassName}
                formRef={validation ? register(validation) : register}
                name={name}
                onBlur={handleOnBlur}
                variant={variant}
                {...otherProps}
            />

            {name &&
                <ErrorMessage name={name} />
            }

            {helperText && (
                <FormHelperText>{helperText}</FormHelperText>
            )}

        </FormGroup>
    );


}


export default FormField;
