import React from 'react';
import { StyledComponent } from '@components/types';


export interface Props extends StyledComponent {

    /**
     * The content of the component.
     */
    children?: React.ReactNode,

    /**
     * If `true`, the card will use raised styling.
     * @default true
     */
    isRaised?: boolean,

}
