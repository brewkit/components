import React from 'react';
import { useForm, FormContext } from 'react-hook-form';
import FormGroup from './components/FormGroup';
import FormLabel from './components/FormLabel';
import FormField from './components/FormField';
import FormHelperText from './components/FormHelperText';
import FormButton from './components/FormButton';
import { Props, FormComponent } from './types';


const Form: FormComponent = ({
    children,
    onSubmit,
    ...otherProps
}: Props) => {


    const methods = useForm({ mode: 'onChange' });


    return (
        <FormContext {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} {...otherProps}>
                {children}
            </form>
        </FormContext>
    );


};


Form.Field = FormField;
Form.Group = FormGroup;
Form.HelperText = FormHelperText;
Form.Label = FormLabel;
Form.Button = FormButton;


export default Form;
