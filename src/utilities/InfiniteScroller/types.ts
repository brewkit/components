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


}
