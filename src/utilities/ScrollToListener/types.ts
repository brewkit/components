import { ReactNode } from 'react';


export interface Bounding {
    top?: number,
    right?: number,
    bottom?: number,
    left?: number,
}


export interface Props {
    children: ReactNode,
    onScrollTo: (event: Event) => void,
}
