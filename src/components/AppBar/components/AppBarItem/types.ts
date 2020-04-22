import React from 'react';


export interface Props {


    /**
     * Any valid JSX
     */
    children?: React.ReactNode,


    /**
     * Custom class name
     */
    className?: string,


    /**
     * Icon name to render
     */
    iconName: string,


    /**
     * Used for tooltip to indicate what Icon represents
     */
    label: string,


    /**
     * Where to navigate to using react router dom
     */
    linkTo?: string,


    /**
     * Function to fire when clicking on an item
     */
    onClick?: () => void,


}
