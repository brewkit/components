import { FormHTMLAttributes } from 'react';
import { SubmitHandler } from 'react-hook-form';


export type Props = FormHTMLAttributes<HTMLFormElement> & {

    /**
     * function to be called on form submission
     */
    onSubmit: SubmitHandler<Record<string, unknown>>

};
