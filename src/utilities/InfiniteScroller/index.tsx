import React, { ReactElement } from 'react';
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
    ...otherProps
}: Props): ReactElement {


    const [isLoading, setIsLoading] = React.useState(false);


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
        <div className={scrollerClasses} {...otherProps}>
            <ScrollToListener applyToLastChild onScrollTo={loadMoreData}>
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
    );


}


export default InfiniteScroller;
