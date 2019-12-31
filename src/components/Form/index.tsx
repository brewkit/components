import React from 'react';
import { Props, FormComponent } from './types';
import FormGroup from './components/FormGroup';
import FormLabel from './components/FormLabel';
import FormField from './components/FormField';


const Form: FormComponent = ({
    children,
    ...otherProps
}: Props) => (


    <form {...otherProps}>
        {children}
    </form>


);


Form.Group = FormGroup;
Form.Label = FormLabel;
Form.Field = FormField;


export default Form;
