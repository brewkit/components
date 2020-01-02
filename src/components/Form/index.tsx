import React from 'react';
import { Props, FormComponent } from './types';
import { withFormContext } from './context';
import FormGroup from './components/FormGroup';
import FormLabel from './components/FormLabel';
import FormField from './components/FormField';

const FormContent: FormComponent = ({
    children,
    ...otherProps
}: Props) => (
    <form {...otherProps}>
        {children}
    </form>
);

const Form = withFormContext(FormContent);

Form.Group = FormGroup;
Form.Label = FormLabel;
Form.Field = FormField;

export default Form;
