import React, { ReactElement, RefObject } from 'react';
import clsx from 'clsx';
import ScrollToListener from '../ScrollToListener';
import { Props } from './types';


function InfiniteScroller({
    children,
    className,
    dataLength,
    endMessage,
    hasMore,
    loadingMessage,
    getMoreData,
    wrapperHeight,
    wrapperWidth,
    ...otherProps
}: Props): ReactElement {


    const [isLoading, setIsLoading] = React.useState(false);
    const scrollerRef: RefObject<HTMLDivElement> = React.createRef();


    const scrollerClasses = clsx(
        'brew-InfiniteScroller',
        className,
    );


    React.useEffect(() => {
        setIsLoading(false);
    }, [dataLength]);


    const loadMoreData = (): void => {
        if (!hasMore) return;
        setIsLoading(true);
        getMoreData();
    };


    return (
        <div
            className={scrollerClasses}
            ref={scrollerRef}
            style={{
                height: wrapperHeight,
                overflow: 'scroll',
                width: wrapperWidth,
            }}
            {...otherProps}>
            <div>
                <ScrollToListener
                    applyToLastChild
                    forwardedRef={scrollerRef}
                    onScrollTo={loadMoreData}
                >
                    {children}
                </ScrollToListener>
                {isLoading && (
                    <div className="brew-InfiniteScroller__loadingMessage">
                        {loadingMessage}
                    </div>
                )}
                {!hasMore && (
                    <div className="brew-InfiniteScroller__endMessage">
                        {endMessage}
                    </div>
                )}
            </div>
        </div>
    );


}


export default InfiniteScroller;
