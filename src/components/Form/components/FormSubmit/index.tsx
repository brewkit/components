import React from 'react';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import Button from '@components/Button';
import { Props } from './types';


/**
 * `FormSubmit` is a submit button with additional binding to `Form` to allow for better control and validation.
 */
export const FormSubmit = React.forwardRef(({
    children = 'Submit',
    className,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const { register, formState } = useFormContext();


    const classNames = clsx(
        'brew-FormSubmit',
        className,
    );


    return (
        <Button
            className={classNames}
            disabled={false}
            isDisabled={!(formState.isValid)}
            ref={register}
            type="submit"
            {...otherProps}
        >
            {children}
        </Button>
    );


});


FormSubmit.displayName = 'FormSubmit';


export default FormSubmit;
