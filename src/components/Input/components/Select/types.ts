import React from 'react';
import { StyledComponent } from '@components/types';


export type LabelPlacements = (
    | 'top'
    | 'bottom'
    | 'start'
    | 'end'
);


export interface Option {
    value: any,
    label: React.ReactNode,
}


export interface Props extends StyledComponent {

    /**
     * If `true`, the Select is checked.
     */
    isChecked?: boolean,

    /**
     * If `true`, the Select will be disabled.
     */
    isDisabled?: boolean,

    /**
     * If `true`, the Select will be required.
     */
    isRequired?: boolean,

    /**
     * If `true`, the input will indicate an error. This is normally obtained via context from FormControl.
     * @default false
     */
    hasError?: boolean,

    /**
     * If `true`, the Select appears indeterminate. This does not set the native input element to indeterminate due
     * to inconsistent behavior across browsers. However, we set a `data-indeterminate` attribute on the input.
     */
    isIndeterminate?: boolean,

    /**
     * The value of the Select. The DOM API casts this to a string.
     */
    value?: any,

    /**
     * The label of the input
     */
    label?: React.ReactNode,

    /**
     * The placement of the label
     * @default 'end'
     */
    labelPlacement?: LabelPlacements,

    /**
     * Name attribute of the input element.
     */
    name?: string,

    /**
     * The options available to the Select
     */
    options: Option[],

}
