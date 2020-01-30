import { ReactNode } from 'react';


export interface Props {
    children: ReactNode,
    className?: string,
    dataLength: number,
    endMessage: ReactNode,
    getMoreData: () => void,
    hasMore: boolean,
    loadingMessage: ReactNode,
    rootElement?: Element | null,
}
