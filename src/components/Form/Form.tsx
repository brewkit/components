import * as React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { AnimateSharedLayout } from 'framer-motion';
import { FormProps } from './Form.types';


/**
 * `Form` wraps around underlying `Form` based components and provides a context provider for them to bind to. It also
 * handles the form's submission and can use validation schema to validate the content.
 *
 * > This component is not found in Material UI.
 */
export const Form = React.forwardRef(({
    children,
    onSubmit,
    useFormMethods,
    ...otherProps
}: FormProps, ref: React.Ref<any>): React.ReactElement => {


    const methods = useFormMethods ? useFormMethods : useForm({
        mode: 'onChange',
    });


    return (
        <FormProvider {...methods}>
            <form noValidate onSubmit={methods.handleSubmit(onSubmit)} ref={ref} {...otherProps}>
                <AnimateSharedLayout>
                    {children}
                </AnimateSharedLayout>
            </form>
        </FormProvider>
    );


});


Form.displayName = 'Form';


export default Form;
