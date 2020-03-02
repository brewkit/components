import React from 'react';
import { Colors } from '@components/types';


export interface Props {


    /**
     * Any valid JSX, normally used to fire a function when clicked and dismiss snackbar
     */
    action?: React.ReactNode,


    /**
     * Custom class
     */
    className?: string,


    /**
     * Color of snackbar
     */
    color?: Colors,


    /**
     * Defaults to 0, which will not automatically dismiss
     * 1 = 1 second, 5 = 5 seconds
     */
    duration?: number,


    /**
     * Icon to display
     */
    iconName?: string,


    /**
     * Controlled prop to determine if snackbar is showing
     */
    isOpen: boolean,


    /**
     * Any valid JSX, main content of snackbar
     */
    message: React.ReactNode,


    /**
     * Function to fire when snackbar is closed
     * Change isOpen prop to false and any other side effects
     */
    onClose: (event: React.SyntheticEvent, reason: string) => any,


    /**
     * Anchor position of the snackbar
     */
    position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left',


}
