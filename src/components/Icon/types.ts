import React from 'react';
import { StyledParentComponent, Colors as GenericColors } from '@components/types';


export type Colors = GenericColors | 'inherit';
export type Sizes = 'inherit' | 'small' | 'large' | 'default';


export interface Props extends StyledParentComponent {

    /**
     * Determines the color of the rendered Icon.
     * @default 'inherit'
     */
    color?: Colors,

    /**
     * If set, forces the `Icon` to render at the specified size.
     * @default 'inherit'
     */
    size?: Sizes,

}


export interface IconComponent extends React.ForwardRefExoticComponent<any> {
    Svg?: any,
}
