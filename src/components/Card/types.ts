import React from 'react';
import { StyledParentComponent } from '@components/types';


export interface Props extends StyledParentComponent {


    /**
     * The content to show actions available
     */
    actions?: React.ReactNode,


    /**
     * Shadow depth, corresponds to dp in the spec. It accepts values between 0 and 24 inclusive.
     * @default '1'
     */
    elevation?: number,


    /**
     * The content of the header
     */
    header?: React.ReactNode,


    /**
     * The variant to use
     * @default 'elevation'
     */
    variant?: 'elevation' | 'outlined',


}
