import {ReactNode, Ref} from "react";

export interface Props {
    /**
     * The component used for the `input` element
     */
    as?: 'input' | 'select',
    /**
     * The `input` element type.  Can be any valid HTML5 input type
     */
    type?: 'button'| 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel'	| 'text' | 'time' | 'url' | 'week',
    error?: boolean,
    name?: string, // The `input` element name
    id?: string, // The `input` element id
    fullWidth?: boolean, // If `true`, the input will be 100% of it's container width
    disabled?: boolean, // If `true`, the `input` will be disabled
    checked?: boolean, // Whether or not the radio or checkbox input is checked
    value?: any, // The `value` of the `input` element
    defaultValue?: any, // The `defaultValue` of the `input` element
    placeholder?: string, // The HTML5 placeholder applied to the `input` element
    inputProps?: object, // Attributes that are applied to the `input` element
    /**
     * The wrapper class
     */
    className?: string,
    children?: ReactNode,
    /**
     * If `true`, the `input` element will be required
     */
    required?: boolean,
};
