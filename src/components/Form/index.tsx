import React from 'react';
import clsx from 'clsx';
import { useForm, FormContext } from 'react-hook-form';
import FormField from './components/FormField';
import FormSubmit from './components/FormSubmit';
import { FormComponent, Props } from './types';


/**
 * Forms handle data, input validation, and submission.
 */
export const Form: FormComponent = React.forwardRef(({
    children,
    className,
    onSubmit,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const formMethods = useForm({
        mode: "onChange",
    });


    function submitForm(data: object) {
        console.log(formMethods);
        onSubmit && onSubmit(data);
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
