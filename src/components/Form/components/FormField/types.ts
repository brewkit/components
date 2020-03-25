import { StyledParentComponent } from '@components/types';
import React from "react";


export type FormAPI = {};


export interface Props extends StyledParentComponent {

    /**
     * The type of input to render.
     * @default 'text'
     */
    type?: (
        | 'text'
        | 'checkbox'
        | 'radio'
        | 'switch'
    ),

    /**
     * The label of the input
     */
    label?: React.ReactNode,

    /**
     * The name of the input
     */
    name: string,

    /**
     * The validation object used to validate the input
     */
    validation?: object,

}
