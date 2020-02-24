import React from 'react';
import { useForm, FormContext } from 'react-hook-form';
import FormGroup from './components/FormGroup';
import FormLabel from './components/FormLabel';
import FormField from './components/FormField';
import FormHelperText from './components/FormHelperText';
import FormButton from './components/FormButton';
import { Props, FormComponent } from './types';


export const Form: FormComponent = React.forwardRef(({
    children,
    onSubmit,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const methods = useForm({ mode: 'onChange' });


    return (
        <FormContext {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} ref={ref} {...otherProps}>
                {children}
            </form>
        </FormContext>
    );


});


Form.Field = FormField;
Form.Group = FormGroup;
Form.HelperText = FormHelperText;
Form.Label = FormLabel;
Form.Button = FormButton;


Form.displayName = 'Form';


export default Form;
