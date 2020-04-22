import React from 'react';
import { Colors } from '../types';


export interface Props {


    /**
     * The position in which the element is anchored from by default, responsiveness manipulate by css styling
     */
    anchorFrom?: 'top' | 'right' | 'bottom' | 'left',


    /**
     * Custom classname added to root
     */
    className?: string,


    /**
     * Any valid JSX
     */
    children?: React.ReactNode,


    /**
     * Background color of the element
     */
    color?: Colors,


}


export interface AppBarComponent extends React.ForwardRefExoticComponent<any> {
    Item?: any,
}
