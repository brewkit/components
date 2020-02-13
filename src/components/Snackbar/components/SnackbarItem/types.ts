import { ReactNode } from 'react';


export type Positions = 'topRight' |
    'topCenter' | 'topLeft' | 'centerLeft' | 'centerRight' | 'bottomRight' | 'bottomCenter' | 'bottomLeft';

export type Colors = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';


export interface Snackbar {


    /**
     * Displays an X that will close the snackbar
     */
    isCloseable?: boolean,


    /**
     * Provides the onClick action to the button
     */
    handleAction?: () => void,


    /**
     * Button component that can be provided an onClick action
     */
    buttonContent?: ReactNode,


    /**
     * Color of the Snackbar
     */
    color: Colors,


    /**
     * Content to display inside the snackbar
     */
    content: ReactNode,

    /**
     * Icon name to display
     */
    iconName?: string,


    /**
     * ID used for tracking snackbar status
     */
    id?: number,


    /**
     * Used in queueing system to determine which snackbars are shown
     */
    isLive?: boolean,


    /**
     * Number of seconds for Snackbar to appear
     * 1 = 1s, 10 = 10s
     */
    lifespan?: number,


    /**
     * Position of Snackbar
     */
    position: Positions,


}


export interface Props {


    /**
     * Custom class name
     */
    className?: string,


    /**
     * Snackbar config
     */
    itemConfig: Snackbar,


}
