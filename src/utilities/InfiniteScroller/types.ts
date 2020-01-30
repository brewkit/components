import { ReactNode } from 'react';


export interface Props {
    children: ReactNode,
    dataLength: number,
    loadingIndicator: ReactNode,
    next: any,
}
