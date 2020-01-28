import React from 'react';
import { Props as FormButtonProps } from './components/FormButton/types';


export interface Props {
    children?: React.ReactNode,
    onSubmit: (formValues: object) => void,
}


export interface FormComponent {
    Button?: any,
    Group?: any,
    Label?: any,
    Field?: any,
    HelperText?: any,
    (props: Props): React.ReactElement,
}
