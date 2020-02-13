import { ReactNode } from 'react';
import { Snackbar } from './components/SnackbarItem/types';


export interface State {
    id: number,
    snackbarConfig?: Snackbar,
    snackbars: Snackbar[],
}


export interface Action {
    id?: number,
    snackbarConfig?: Snackbar,
    type: 'add' | 'clear' | 'enqueue',
}


export interface Props {
    children: ReactNode,
}
