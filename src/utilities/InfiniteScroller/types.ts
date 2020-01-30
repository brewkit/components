import { ReactNode } from 'react';


export interface Props {
    children: ReactNode,
    dataLength: number,
    endMessage: ReactNode,
    getMoreData: () => void,
    hasMore: boolean,
    loadingIndicator: ReactNode,
    rootElement: Element | null,
}
