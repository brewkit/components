import React from 'react';
import { StyledParentComponent } from '@components/types';


export interface InputComponent extends React.ForwardRefExoticComponent<any> {
    Checkbox?: any,
    Radio?: any,
}


export { StyledParentComponent as Props };
