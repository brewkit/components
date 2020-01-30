/* eslint-disable @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unused-vars-experimental */
import React, { ReactElement } from 'react';
import InfiniteScroller from './index';


export default {
    component: InfiniteScroller,
    title: 'Utilities|InfiniteScroller',
};


export const Default = (): ReactElement => {
    const [state, setState] = React.useState(Array.from({ length: 50 }));
    const next = (): any => {
        setTimeout(() => {
            setState((prevState: any): [] => prevState.concat(Array.from({ length: 10 })));
        }, 100);
    };


    return (
        <InfiniteScroller dataLength={state.length} loadingIndicator={<h1>LOADING BRUH...</h1>} next={next}>
            {state.map((item: any, index: number) => <div key={index}>{`hello - ${index}`}</div>)}
        </InfiniteScroller>
    );


};
