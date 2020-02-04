

export interface Props {

    /**
     * Name of the radio group.
     */
    name: string,

    /**
     *  Value for the radio inputs.  Use when the input is controlled.
     */
    value?: any,

    /**
     * The default value for the radio inputs.  Use when the input is not controlled.
     */
    defaultValue?: any,

    /**
     * An action to perform on change of radio selection.
     */
    onChange?: any,

    /**
     * The className for the component
     */
    className?: string,

    /**
     * Groups of Radio components
     */
    children: any,

}
