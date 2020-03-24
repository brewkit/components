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
     * This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as it's
     * more like an autofill. You can learn more about it
     * [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
     */
    autoComplete?: string,

    /**
     * If `true`, the `input` element will be focused during the first mount.
     */
    shouldAutoFocus?: boolean,

    /**
     * If `true`, the input will take up the full width of its container.
     * @default false
     */
    isFluid?: boolean,

    /**
     * If `true`, the input will be marked as readonly.
     * @default false
     */
    isReadOnly?: boolean,

    /**
     * The id of the `input` element. Use this prop to make label and `helperText` accessible for screen readers.
     */
    id?: string,

    /**
     * The default value of the input element.
     */
    defaultValue?: any,

    /**
     * The value of the `input` element, required for a controlled component.
     */
    value?: any,

    /**
     * Type of the input element.
     * @default 'text'
     */
    type?: (
        | 'text'
        | 'password'
        | 'number'
        | 'search'
        | 'tel'
        | 'url'
    ),

    /**
     * The label of the input
     */
    label?: React.ReactNode,

    /**
     * Name attribute of the input element.
     */
    name?: string,

    /**
     * The short hint displayed in the input before the user enters a value.
     */
    placeholder?: string,

    /**
     * The helper text content.
     */
    helperText?: React.ReactNode,

    /**
     * If `true`, the input will indicate an error. This is normally obtained via context from FormControl.
     * @default false
     */
    hasError?: boolean,

    /**
     * If `true`, the input will be disabled
     * @default false
     */
    isDisabled?: boolean,

    /**
     * If `true`, a textarea element will be rendered.
     * @default false
     */
    isMultiline?: boolean,

    /**
     * Number of rows to display when multiline option is set to true.
     */
    rows?: string | number,

    /**
     * Maximum number of rows to display when multiline option is set to true.
     */
    maxRows?: string | number,

    /**
     * If `true`, the label is displayed as required and the `input` element will be required.
     * @default false
     */
    isRequired?: boolean,

    /**
     * Callback fired when the value is changed.
     */
    onChange?: (event: object) => void,

}
