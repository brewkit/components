import React from 'react';
import { StyledParentComponent } from '@components/types';


export interface FormComponent extends React.ForwardRefExoticComponent<any> {
    Field?: any,
    Submit?: any,
}


export interface Props extends StyledParentComponent {

    /**
     * Callback fired when the form is submitted
     */
    onSubmit: (values: object) => void,

    /**
     * Validation schema used to validate the form. This is the preferred way to handle validation for Forms. Supports
     * [yup](https://github.com/jquense/yup)
     */
    validationSchema: object,

}
