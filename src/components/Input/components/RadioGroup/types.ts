import { ReactNode } from 'react';


export interface Props {

    /**
     * Classes to be passed through to the component.
     */
    className?: string,

    /**
     * Text that describes a radio grouping
     */
    inputLabel?: string,

    /**
     * Custom style for input label
     */
    inputLabelClassName?: string,

    /**
     * Groups of Radio components
     */
    children?: ReactNode,

}
