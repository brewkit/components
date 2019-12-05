import React from "react";
import { Props } from './types';

import FormGroup from './components/FormGroup';
import FormLabel from './components/FormLabel';

function Form({ children, ...otherProps }: Props) {
    return (
        <form {...otherProps}>{children}</form>
    );
}

Form.Group = FormGroup;
Form.Label = FormLabel;

export default Form;
