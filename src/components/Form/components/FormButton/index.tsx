import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';
import Button from '@components/Button';
import { Props } from './types';


function FormButton({
    className,
    ...otherProps
}: Props): ReactElement {


    const { formState } = useFormContext();
    const [isValid, setIsValid] = React.useState(formState.isValid);
    const [isSubmitting, setIsSubmitting] = React.useState(formState.isValid);


    React.useEffect(() => {
        setIsValid(formState.isValid);
        setIsSubmitting(formState.isSubmitting);
    }, [formState]);


    const classes = clsx(
        'brew-FormField',
        className,
    );


    return (
        <Button className={classes} isDisabled={!isValid} isLoading={isSubmitting} type="submit" {...otherProps}>
            Submit
        </Button>
    );


}


export default FormButton;
