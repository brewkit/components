import React from 'react';
import { ElementType, StyledParentComponent } from '@components/types';


/**
 * Export the consts for easier management of the available options within storybook
 */
export const variants = ['regular', 'dense'];


/**
 * Convert and export the consts to usable types
 */
export type Variants = ElementType<typeof variants>;


export interface Props extends StyledParentComponent {

    /**
     * The component used for the root node.
     * Either a string to use a DOM element or a component.
     * @default 'div'
     */
    component?: React.ElementType,

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'primary'
     */
    variant?: Variants,

    /**
     * If `true`, adds class associated with disabling gutter padding.
     * @default false
     */
    disableGutters?: boolean,

}
