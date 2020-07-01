import React from 'react';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import Input from '@components/Input';
import { Props } from './types';


/* Map our input components for easier access */
const components = {
    checkbox: Input.Checkbox,
    radio: Input.Radio,
    switch: Input.Switch,
    text: Input.TextField,
};


/**
 * `FormField` is an abstraction of most inputs, additionally binding the rendered input to a `Form` so they can be
 * tracked and validated.
 */
export const FormField = React.forwardRef(({
    type = 'text',
    name,
    validation = {},
    className,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const { register, errors } = useFormContext();
    const Component: any = components[type] || Input.TextField;
    const supportsHelperText = Component === Input.TextField;


    const classNames = clsx(
        'brew-FormField',
        className,
    );


    return (
        <Component
            className={classNames}
            hasError={Boolean(errors[name])}
            helperText={supportsHelperText && Boolean(errors[name]) && errors[name].message}
            name={name}
            ref={register(validation)}
            {...otherProps}
        />
    );


});


FormField.displayName = 'FormField';


export default FormField;
