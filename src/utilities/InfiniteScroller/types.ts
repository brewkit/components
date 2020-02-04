import { ReactNode } from 'react';


export interface Props {


    /**
     * Any valid JSX
     */
    children: ReactNode,


    /**
     * Custom class
     */
    className?: string,


    /**
     * Used to track number of children/loading state of scroll
     */
    dataLength: number,


    /**
     * Any valid JSX to show when there is no more data to load
     */
    endMessage: ReactNode,


    /**
     * Function to fire when you reach last element
     * Used to get more data for the infinite scroll
     */
    getMoreData: () => void,


    /**
     * Flag that determines if there is more data to load
     */
    hasMore: boolean,


    /**
     * Any valid JSX to show when loading more data
     */
    loadingMessage: ReactNode,


    /**
     * Must be ancestor of target.
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


}
