// import * as React from 'react';
import { StyledParentComponent } from '../types';

export interface Props extends StyledParentComponent {

    /**
     * Override or exted the styles applied to the component.
     */
    classes?: Object,

    /**
     * The component used for the root node.  Either a string to use a DOM element or a component.
     */
    component?: React.ElementType,

    /**
     * Callback fired when the value changes.
     */
    onChange?: (event: React.SyntheticEvent, value: any) => void,

    /**
     * The value of the currently selected Tab.  If you don't want any selected Tab, you can set this property to false.
     */
    value: any,
};