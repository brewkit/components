import {ReactNode, Ref} from "react";

export interface Props {
    /**
     * The component used for the `input` element
     */
    as?: 'input' | 'select' | 'textarea',
    /**
     *  Whether or not the radio or checkbox input is checked
     *
     * @default false
     */
    checked?: boolean,
    /**
     * The `children` prop can be used for certain inputs like `select` and `textarea`
     */
    children?: ReactNode,
    /**
     * The wrapper class
     */
    className?: string,
    /**
     * The number of columns a textarea has.
     */
    cols?: string,
    /**
     * The custom control to show instead of the default control.  Can be used for any input type,
     * but is intended mostly for inputs that don't accept styling well like select boxes, radio buttons and
     * checkboxes.
     */
    customControl?: ReactNode,
    /**
     * Whether the `input` is checked by default.  Used for checkboxes.
     */
    defaultChecked?: boolean,
    /**
     *  The `defaultValue` of the `input` element
     * 
     * @default undefined
     */
    defaultValue?: any,
    /**
     *  If `true`, the `input` will be disabled
     */
    disabled?: boolean,
    /**
     * If `true`, the input will apply error styling
     */
    error?: boolean,
    /**
     *  If `true`, the input will be 100% of it's container width
     */
    fullWidth?: boolean,
    /**
     *  The `input` element id
     */
    id?: string,
    /**
     * The `input` element className.
     */
    inputClassName?: string,
    /**
     * The `input` label for radio buttons and checkboxes
     */
    inputLabel?: string,
    /**
     * The className for the input label
     */
    inputLabelClassName?: string,
    /**
     * The `input` element name
     */
    name?: string,
    /**
     * The `input` element onChange handler
     */
    onChange?: any, // TODO: Fix this
    /**
     *  The HTML5 placeholder applied to the `input` element
     */
    placeholder?: string,
    /**
     * Use this to define a read-only field
     */
    readOnly?: boolean,
    /**
     * If `true`, the `input` element will be required
     */
    required?: boolean,
    /**
     * The number of rows a textarea has.
     */
    rows?: string,
    /**
     * The `input` element type.  Can be any valid HTML5 input type
     */
    type?: 'button'| 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel'	| 'text' | 'time' | 'url' | 'week',
    /**
     *  The `value` of the `input` element
     */
    value?: any,
};
