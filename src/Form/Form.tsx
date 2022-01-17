import * as React from 'react';
import {
    useForm,
    FormProvider,
    SubmitHandler,
    UseFormReturn,
    FieldValues,
} from 'react-hook-form';
import { AnimateSharedLayout } from 'framer-motion';

export type BkFormProps<T> = JSX.IntrinsicElements['form'] & {
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
        props: BkFormProps<FieldValues>,
        ref: React.Ref<HTMLFormElement>,
    ): React.ReactElement => {
        const { children, onSubmit, useFormMethods, ...otherProps } = props;
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

Form.displayName = 'BkForm';

export default Form;
