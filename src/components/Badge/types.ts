import { ReactNode } from 'react';


export type Anchors = 'top-right' | 'top-left' | 'bottom-left' | 'bottom-right';
export type Colors = 'success' | 'warning' | 'danger' | 'info';


export interface Props {

    /**
     * Where the badge is positioned
     */
    anchorFrom?: Anchors,

    /**
     * The child element you want to apply the badge to
     */
    children?: ReactNode,

    /**
     * Changes badge style to circular
     */
    isCircular?: boolean,

    /**
     * Additional custom class to attach
     */
    className?: string,

    /**
     *
     */
    content?: string,

    /**
     * Color of the badge
     */
    color?: Colors,

}
