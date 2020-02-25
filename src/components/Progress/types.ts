import React from 'react';
import { Colors as GenericColors, StyledParentComponent } from '@components/types';


export type Colors = GenericColors;


export type Sizes = 'small' | 'medium' | 'large' | 'inherit';


export interface ProgressComponent extends React.ForwardRefExoticComponent<any> {
    Linear?: any,
    Circular?: any,
}


export { StyledParentComponent as Props };
