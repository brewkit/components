/* eslint-disable @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unused-vars-experimental */
import React, { ReactElement } from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import Progress from '../../components/Progress';
import InfiniteScroller from './index';


export default {
    component: InfiniteScroller,
    title: 'Utilities|InfiniteScroller',
};


export const Default = (): ReactElement => {
    const hasMore = boolean('hasMore', true);
    const endMessage = text('endMessage', 'dunzo');
    const loadingMessage = (
        <React.Fragment>
            <h1>Loading <Progress /></h1>
            <h3>Be Patient</h3>
            <p>please..</p>
        </React.Fragment>
    );

    const [state, setState] = React.useState(Array.from({ length: 100 }));
    const next = (): any => {
        setTimeout(() => {
            setState((prevState: any): [] => prevState.concat(Array.from({ length: 20 })));
        }, 1000);
    };


    return (
        <InfiniteScroller
            dataLength={state.length}
            endMessage={endMessage}
            getMoreData={next}
            hasMore={hasMore}
            loadingMessage={loadingMessage}
            wrapperHeight="10rem"
            wrapperWidth="auto"
        >
            {state.map((item: any, index: number) => <div key={index}>{`hello - ${index}`}</div>)}
        </InfiniteScroller>
    );


};


export const RootElement = (): ReactElement => {
    const hasMore = boolean('hasMore', true);
    const endMessage = text('endMessage', 'dunzo');
    const loadingMessage = <h1>Loading <Progress /></h1>;
    const [state, setState] = React.useState(Array.from({ length: 30 }));
    const next = (): any => {
        setTimeout(() => {
            setState((prevState: any): [] => prevState.concat(Array.from({ length: 20 })));
        }, 1000);
    };


    return (
        <div style={{ height: '100px', overflow: 'scroll' }}>
            <InfiniteScroller
                dataLength={state.length}
                endMessage={endMessage}
                getMoreData={next}
                hasMore={hasMore}
                loadingMessage={loadingMessage}
                wrapperHeight="100%"
                wrapperWidth="auto"
            >
                {state.map((item: any, index: number) => <div key={index}>{`hello - ${index}`}</div>)}
            </InfiniteScroller>
        </div>

    );


};
