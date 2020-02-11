import { ReactNode } from 'react';


export type Positions = 'topRight' |
    'topCenter' | 'topLeft' | 'centerLeft' | 'centerRight' | 'bottomRight' | 'bottomCenter' | 'bottomLeft';

export type Colors = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark';


export interface Snackbar {
    isCloseable?: boolean,
    buttonAction?: () => void,
    buttonContent?: ReactNode,
    color: Colors,
    content: ReactNode,
    id?: number,
    position: Positions,
}


export interface Props {
    className?: string,
    itemConfig: Snackbar,
}