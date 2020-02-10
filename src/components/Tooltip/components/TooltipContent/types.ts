import { ReactNode } from 'react';


export type Anchors = 'top' | 'right' | 'bottom' | 'left';
export type Colors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'shared' | 'light' | 'dark';


export interface Props {

    /**
     * Classes to be passed through to the component.
     */
    className?: string,

    /**
     * Default to open tooltip content
     */
    isVisible?: boolean,

    /**
     * Direction the tooltip will open from, default is top.
     */
    anchor?: Anchors,

    /**
     * Position data for the anchor used to reposition children
     */
    boundingRect: any,

    /**
     * Width of anchor content
     */
    anchorWidth: number,

    /**
     * Height of anchor content
     */
    anchorHeight: number,

    /**
     * Color of the tooltip, default is primary.
     */
    color?: Colors,

    /**
     * Content to be displayed inside the tooltip.
     */
    children: ReactNode,

    style?: any,

}
