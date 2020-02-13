import React from 'react';
import { StyledComponent } from '@components/types';


export type Variants = 'elevation' | 'outlined';


export interface Props extends StyledComponent {

    /**
     * The content of the component.
     */
    children?: React.ReactNode,

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     * @default 'div'
     */
    component?: React.ElementType,

    /**
     * Shadow depth, corresponds to `dp` in the spec.
     * It accepts values between 0 and 24 inclusive.
     * @default 1
     */
    elevation?: number,

    /**
     * If `false`, rounded corners are disabled.
     * @default true
     */
    isRounded?: boolean,

    /**
     * The variant to use.
     * @default 'elevation'
     */
    variant?: Variants,

}
