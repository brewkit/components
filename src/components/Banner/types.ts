import { ReactNode } from 'react';


export type Variants = 'major' | 'minor' | 'alert';
export type Colors = 'success' | 'danger' | 'warning' | 'info';


export interface Props {

    /**
     * Content passed inside the element, normally a string to render text or another JSX component
     * Can be any valid JSX
     */
    children?: ReactNode,

    /**
     * Custom class to provide the component
     */
    className?: string,

    /**
     * The color of the Banner
     */
    color: Colors,

    /**
     * Name of the icon to render
     */
    iconName?: string,

    /**
     * Attribute to render loading status
     */
    isLoading?: boolean,

    /**
     * Type of Banner to render
     */
    variant: Variants,

}
