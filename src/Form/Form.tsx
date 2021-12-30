import * as React from 'react';
import {
    useForm,
    FormProvider,
    SubmitHandler,
    UseFormReturn,
} from 'react-hook-form';
import { AnimateSharedLayout } from 'framer-motion';

export type BkFormProps<T = never> =
    React.FormHTMLAttributes<HTMLFormElement> & {
        /**
         * function to be called on form submission
         */
        onSubmit: SubmitHandler<T>;

        /**
         * configuration options to be passed to the underlying RHF `useForm` hook
         * (https://react-hook-form.com/api#useForm)
         */
        useFormMethods?: UseFormReturn;
    };

export const Form = React.forwardRef(
    (
        { children, onSubmit, useFormMethods, ...otherProps }: BkFormProps,
        ref: React.Ref<any>,
    ): React.ReactElement => {
        const methods = useFormMethods
            ? useFormMethods
            : useForm({
                  mode: 'onChange',
              });

        return (
            <FormProvider {...methods}>
                <form
                    noValidate
                    onSubmit={methods.handleSubmit(onSubmit)}
                    ref={ref}
                    {...otherProps}>
                    <AnimateSharedLayout>{children}</AnimateSharedLayout>
                </form>
            </FormProvider>
        );
    },
);

Form.displayName = 'Form';

export default Form;
