import React from 'react';
import { StyledParentComponent } from '@components/types';


export interface InputComponent extends React.ForwardRefExoticComponent<any> {
    TextField?: any,
    Select?: any,
    Checkbox?: any,
    Switch?: any,
    Radio?: any,
    RadioGroup?: any,
}


export { StyledParentComponent as Props };
