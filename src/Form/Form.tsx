import * as React from 'react';
import {
    useForm,
    FormProvider,
    SubmitHandler,
    UseFormProps,
} from 'react-hook-form';
import { AnimateSharedLayout } from 'framer-motion';

export type BkFormProps<T> = React.FormHTMLAttributes<HTMLFormElement> & {
    /**
     * function to be called on form submission
     */
    onSubmit: SubmitHandler<T>;

    /**
     * configuration options to be passed to the underlying RHF `useForm` hook
     * (https://react-hook-form.com/api#useForm)
     */
    useFormMethods?: UseFormProps<T>;

    /**
     * Form ref object
     */
    formRef?: React.Ref<HTMLFormElement>;
};

export default function Form<T>(props: BkFormProps<T>) {
    const { children, formRef, onSubmit, useFormMethods, ...otherProps } =
        props;
    const methods = useForm({
        ...(useFormMethods || { mode: 'onChange' }),
    });

    return (
        <FormProvider {...methods}>
            <form
                noValidate
                onSubmit={methods.handleSubmit(onSubmit)}
                ref={formRef}
                {...otherProps}>
                <AnimateSharedLayout>{children}</AnimateSharedLayout>
            </form>
        </FormProvider>
    );
}

Form.displayName = 'BkForm';