import React from 'react';
import { Props, FormComponent } from './types';
import FormGroup from './components/FormGroup';
import FormLabel from './components/FormLabel';
import FormField from './components/FormField';
import FormHelperText from './components/FormHelperText';


const Form: FormComponent = ({
    children,
    ...otherProps
}: Props) => (


    <form {...otherProps}>
        {children}
    </form>


);


Form.Field = FormField;
Form.Group = FormGroup;
Form.HelperText = FormHelperText;
Form.Label = FormLabel;


export default Form;
