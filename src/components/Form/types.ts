import { FormHTMLAttributes } from 'react';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';


export type Props = FormHTMLAttributes<HTMLFormElement> & {

    /**
     * function to be called on form submission
     */
    onSubmit: SubmitHandler<Record<string, unknown>>,

    /**
     * configuration options to be passed to the underlying RHF `useForm` hook
     * (https://react-hook-form.com/api#useForm)
     */
    useFormMethods?: UseFormReturn,


};
