import React from 'react';
import { StyledParentComponent, Colors } from '@components/types';


export interface Props extends StyledParentComponent {


    /**
     * Any valid JSX, normally used to fire a function when clicked and/or to dismiss snackbar.
     */
    action?: React.ReactNode,


    /**
     * The background color of the Snackbar.
     * @default 'primary'
     */
    color?: Colors,


    /**
     * The duration, in milliseconds, of the notification. Will not automatically dismiss by default.
     * @default '0'
     */
    duration?: number,


    /**
     * The name of the Icon to display.
     */
    iconName?: string,


    /**
     * The prop can be used to make the Snackbar component controlled.
     */
    isOpen?: boolean,


    /**
     * Any valid JSX, this is the main content of the Snackbar.
     */
    message: React.ReactNode,


    /**
     * The function to fire when the Snackbar is closed.
     */
    onClose?: (event: React.SyntheticEvent, reason: string) => any,


    /**
     * The anchor position of the snackbar
     * @default 'top-right'
     */
    position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left',


    /**
     * The Slide animation direction
     * @default 'left'
     */
    slideDirection?: 'up' | 'right' | 'down' | 'left',


}
