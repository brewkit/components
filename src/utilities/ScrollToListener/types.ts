import { ReactNode } from 'react';


export interface Props {


    /**
     * Child element that the scroll to listener will be applied to
     */
    children: ReactNode,


    /**
     * Function to call when the element comes into the viewport
     */
    onScrollTo: () => void,


    /**
     * The element that is used as the viewport for checking visibility of the target.
     * Must be ancestor of target
     * Defaults to browser viewport if not specified/null
     */
    rootElement?: Element | null,


    /**
     * A string, formatted similarly to the CSS margin property.
     * Used to grow or shrink each side of the root element's bounding box before computing intersections
     * May use %'s
     */
    rootMargin?: string,


    /**
     * Either a number or array of numbers indicating when the callback should be executed
     * 0 or [0] or [0, 0.25, 0.50, 0.75, 1]
     */
    rootThreshold?: number[] | number,


    /**
     * Specifies if you want the callback to continuously listen when scrolling down and up
     * Default specifies to only fire callback once, when scrolling into view initially
     */
    willListen?: boolean,


}