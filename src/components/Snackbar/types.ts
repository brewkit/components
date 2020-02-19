import { ReactNode } from 'react';


export interface Snackbar {


    /**
     * Valid JSX/String
     */
    content: ReactNode,


    /**
     * Number of seconds till auto dismiss
     * 5 = 5 seconds
     */
    duration?: number,


    /**
     * Allows manual closing of snackbar by displaying an "X"
     */
    isCloseable?: boolean,


    /**
     * May provide a custom key to close a snackbar after an async call
     */
    key?: string | number,


    /**
     * Where to position the snackbar
     */
    position?: 'topLeft' | 'topCenter' | 'topRight' |
        'centerRight' | 'centerLeft' | 'bottomRight' | 'bottomLeft' | 'bottomCenter',


}


export interface State {
    snackbars: Snackbar[],
    queue: Snackbar[],
}


export interface Action {
    type: 'add' | 'remove' | 'processQueue',
    key?: number | string,
    snack?: Snackbar,
}


export interface PositionsObject {
    topRight?: Snackbar[],
    topLeft?: Snackbar[],
    topCenter?: Snackbar[],
    centerRight?: Snackbar[],
    centerLeft?: Snackbar[],
    bottomRight?: Snackbar[],
    bottomCenter?: Snackbar[],
    bottomLeft?: Snackbar[],
}
