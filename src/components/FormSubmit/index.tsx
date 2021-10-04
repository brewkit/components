import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import Button from '@components/Button';
import { Props } from './types';


/**
 * `FormSubmit` is a submit button with additional bindings to a parent `Form` to allow for better control and
 * validation. It automatically disables itself while it's parent `Form` is incomplete.
 */
export const FormSubmit = React.forwardRef(({
    children = 'Submit',
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const { formState: {

        /** In case we have async validators */
        isValidating,
        isSubmitting,
        isValid,
    } } = useFormContext();


    return (
        <Button
            disabled={!(isValid) || isSubmitting || isValidating}
            loading={isSubmitting}
            ref={ref}
            type="submit"
            {...otherProps}
        >
            {children}
        </Button>
    );


});


FormSubmit.displayName = 'FormSubmit';


export default FormSubmit;
