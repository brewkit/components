import React from 'react';
import { StyledParentComponent } from '@components/types';


export interface Props extends StyledParentComponent {
    onSubmit: (formValues: object) => void,
}


export interface FormComponent extends React.ForwardRefExoticComponent<any> {
    Button?: any,
    Group?: any,
    Label?: any,
    Field?: any,
    HelperText?: any,
}
