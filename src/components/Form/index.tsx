import * as React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { AnimateSharedLayout } from 'framer-motion';
import { Props } from './types';


/**
 * `Form` wraps around the actual body of the form and binds with any underlying `Form` based components. It also
 * handles the form's submission and can use validation schema to validate the content.
 *
 * > This component is not found in Material UI.
 */
export const Form = React.forwardRef(({
    children,
    onSubmit,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const methods = useForm({
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
