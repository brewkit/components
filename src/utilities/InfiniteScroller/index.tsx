/* eslint-disable no-console */
import React, { ReactElement } from 'react';
import ScrollToListener from '../ScrollToListener';
import { Props } from './types';


function InfiniteScroller({
    children,
    dataLength,
    endMessage,
    hasMore,
    loadingIndicator,
    getMoreData,
    rootElement = null,
}: Props): ReactElement {


    const [isLoading, setIsLoading] = React.useState(false);
    const ref = React.useRef(null);


    React.useEffect(() => {
        setIsLoading(false);
    }, [dataLength]);


    const loadMoreData = (): void => {
        setIsLoading(true);
        getMoreData();
    };


    return (
        <div className="brew-InfiniteScroller" ref={ref}>
            <ScrollToListener
                applyToLastChild
                onScrollTo={loadMoreData}
                rootElement={ref?.current ?? rootElement}
            >
                {children}
            </ScrollToListener>
            {isLoading && loadingIndicator}
            {!hasMore && endMessage}
        </div>
    );


}


export default InfiniteScroller;
