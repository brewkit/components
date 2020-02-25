import React from 'react';
import { StyledComponent } from '@components/types';


export type LabelPlacements = (
    | 'top'
    | 'bottom'
    | 'start'
    | 'end'
);


export interface Props extends StyledComponent {

    /**
     * If `true`, the component is checked.
     */
    isChecked?: boolean,

    /**
     * If `true`, the checkbox will be disabled.
     */
    isDisabled?: boolean,

    /**
     * If `true`, the checkbox will be required.
     */
    isRequired?: boolean,

    /**
     * If `true`, the component appears indeterminate. This does not set the native input element to indeterminate due
     * to inconsistent behavior across browsers. However, we set a `data-indeterminate` attribute on the input.
     */
    isIndeterminate?: boolean,

    /**
     * The value of the component. The DOM API casts this to a string.
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

}
