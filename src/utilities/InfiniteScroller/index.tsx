import React, { ReactElement } from 'react';
import ScrollToListener from '../ScrollToListener';
import { Props } from './types';


function InfiniteScroller({
    children,
    dataLength,
    endMessage,
    hasMore,
    loadingMessage,
    getMoreData,
}: Props): ReactElement {


    const [isLoading, setIsLoading] = React.useState(false);


    React.useEffect(() => {
        setIsLoading(false);
    }, [dataLength]);


    const loadMoreData = (): void => {
        if (!hasMore) return;
        setIsLoading(true);
        getMoreData();
    };


    return (
        <React.Fragment>
            <ScrollToListener
                applyToLastChild
                onScrollTo={loadMoreData}
            >
                {children}
            </ScrollToListener>
            {isLoading && loadingMessage}
            {!hasMore && endMessage}
        </React.Fragment>
    );


}


export default InfiniteScroller;
