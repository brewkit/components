import React from 'react';


export interface Props {


    /**
     * The position in which the element is anchored from by default, responsiveness manipulated by css styling
     */
    anchorFrom?: 'top' | 'right' | 'bottom' | 'left',


    /**
     * Custom classname added to root
     */
    className?: string,


    /**
     * Any valid JSX
     */
    children?: React.ReactNode,


    /**
     * Shadow depth, corresponds to dp in the spec. It accepts values between 0 and 24 inclusive.
     * Will be applied to the `Paper` component, default is 1
     */
    elevation?: number,


    /**
     * The CSS positioning type
     */
    position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky',


    /**
     * Applied to the root `Paper` component, default is elevation
     */
    variant?: 'elevation' | 'outlined',


}
