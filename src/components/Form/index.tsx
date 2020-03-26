import React from 'react';
import clsx from 'clsx';
import { useForm, FormContext } from 'react-hook-form';
import FormField from './components/FormField';
import FormSubmit from './components/FormSubmit';
import { FormComponent, Props } from './types';


/**
 * `Form` wraps around the actual body of the form and binds with any underlying `Form` based components. It also
 * handles the form's submission and can use validation schema to validate the content.
 */
export const Form: FormComponent = React.forwardRef(({
    children,
    className,
    onSubmit,
    validationSchema,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const formMethods = useForm({
        validationSchema,
        mode: 'onChange',
    });


    function submitForm(data: object): void {
        onSubmit(data);
    }


    const classNames = clsx(
        'brew-Form',
        className,
    );


    return (
        <FormContext {...formMethods}>
            <form className={classNames} onSubmit={formMethods.handleSubmit(submitForm)} ref={ref} {...otherProps}>
                {children}
            </form>
        </FormContext>
    );


});


Form.Field = FormField;
Form.Submit = FormSubmit;


Form.displayName = 'Form';


export default Form;
