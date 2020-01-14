import {ReactNode} from 'react';


export type TriggerEvents = 'click' | 'hover';
export type Anchors = 'top' | 'right' | 'bottom' | 'left';
export type Colors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'shared' | 'light' | 'dark';


export interface Props {

    /**
     * Classes to be passed through to the component.
     */
    className?: string,

    /**
     * Type of event to trigger tooltip behavior.
     */
    triggerEvent?: TriggerEvents,

    /**
     * Content to be displayed inside the tooltip.
     */
    content: ReactNode,

    /**
     * Determines if tooltip defaults to open.
     */
    isOpen?: boolean,

    /**
     * Direction the tooltip will open from, default is top.
     */
    anchor?: Anchors,

    /**
     * Color of the tooltip, default is primary.
     */
    color?: Colors,

    /**
     * The static JSX clickable item to open/close tooltip.
     */
    children?: any,

}
