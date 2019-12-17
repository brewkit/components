import React, { ReactElement } from 'react';
import { Props } from './types';
import FormGroup from './components/FormGroup';
import FormLabel from './components/FormLabel';
import FormField from './components/FormField';


function Form({
    children,
    ...otherProps
}: Props): ReactElement {


    return (
        <form {...otherProps}>
            {children}
        </form>
    );


}


Form.Group = FormGroup;
Form.Label = FormLabel;
Form.Field = FormField;


export default Form;
