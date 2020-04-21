import React from 'react';


export interface Props {


    /**
     * Any valid JSX
     */
    children?: React.ReactNode,


    /**
     * Either a string for a DOM element or Component
     */
    component?: React.ElementType,


    /**
     * Either img or src property must be specified, must specify height otherwise the image won't be visible
     */
    image?: string,


    /**
     * Alias for Image property. Available only with media components.
     * video, audio, picture, iframe, img
     */
    src?: string,


}
