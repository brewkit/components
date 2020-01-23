import { ReactNode } from 'react';


export type Anchors = 'top-right'
    | 'top-middle' | 'top-left' | 'bottom-right' | 'bottom-middle' | 'bottom-left' | 'right' | 'left';

export type Colors = 'success' | 'warning' | 'danger' | 'info';


export interface Props {

    /**
     * Where the badge is positioned
     */
    anchorFrom: Anchors,

    /**
     * The child element you want to apply the badge to
     */
    children: ReactNode,

    /**
     * Changes badge style to circular
     */
    isCircular: boolean,

    /**
     * Additional custom class to attach
     */
    className?: string,

    /**
     *
     */
    content: any,

    /**
     * Color of the badge
     */
    color: Colors,

}
