import React from 'react';
import { StyledParentComponent, Colors as GenericColors } from '@components/types';


export type Colors = GenericColors | 'inherit';
export type Sizes = 'small' | 'medium' | 'large';


export interface Props extends StyledParentComponent {

    /**
     * Determines the color of the rendered Icon.
     * @default 'inherit'
     */
    color?: Colors,

    /**
     * If set, forces the `Icon` to render at the specified size.
     */
    size?: Sizes,

    /**
     * Component to render as.
     * @default 'i'
     */
    component?: React.ElementType,

}
