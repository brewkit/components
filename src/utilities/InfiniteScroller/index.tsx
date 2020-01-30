/* eslint-disable no-console */
import React, { ReactElement } from 'react';
import ScrollToListener from '../ScrollToListener';
import { Props } from './types';


function InfiniteScroller({
    children,
    dataLength,
    loadingIndicator,
    next,
}: Props): ReactElement {


    const [isLoading, setIsLoading] = React.useState(false);


    React.useEffect(() => {
        console.log('got sum new DATAZ');
        setIsLoading(false);
    }, [dataLength]);


    const dOiT = (): any => {
        setIsLoading(true);
        next();
    };


    return (
        <div>
            <ScrollToListener applyToLastChild onScrollTo={dOiT} willListen>
                {children}
            </ScrollToListener>
            {isLoading && loadingIndicator}
        </div>
    );


}


export default InfiniteScroller;
