import { StyledParentComponent } from '@components/types';
import React from "react";


export type FormAPI = {
    register?: any,
    errors?: any,
    formState?: any,
};


export interface FormComponent extends React.ForwardRefExoticComponent<any> {
    Field?: any,
    Submit?: any,
}


export interface Props extends StyledParentComponent {

    /**
     * Callback fired when the form is submitted
     */
    onSubmit: (values: object) => void,

}
