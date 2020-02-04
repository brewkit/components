/* eslint-disable @typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unused-vars-experimental */
import React, { ReactElement } from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import Progress from '../../components/Progress';
import Table from '../../components/Table';
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

    const [state, setState] = React.useState(Array.from({ length: 8 }));
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
        >
            {state.map((item: any, index: number) => <div key={index}>{`hello - ${index}`}</div>)}
        </InfiniteScroller>
    );


};


export const InTable = (): ReactElement => {
    const hasMore = boolean('hasMore', true);
    const endMessage = text('endMessage', 'dunzo');
    const [state, setState] = React.useState(Array.from({ length: 30 }));
    const next = (): any => {
        setTimeout(() => {
            setState((prevState: any): [] => prevState.concat(Array.from({ length: 20 })));
        }, 1000);
    };
    const header = [{ label: 'Maths', name: 'ColA' }, { label: 'Index', name: 'ColA' }];
    const loadingMessage = (
        <Table.Row style={{ display: 'table', tableLayout: 'fixed', width: '100%' }}>
            <Table.Row.Cell
                as="th"
                colSpan={2}
                style={{ fontSize: '5rem', textAlign: 'center' }}
            >
                loading
            </Table.Row.Cell>
        </Table.Row>
    );

    return (
        <Table>
            <Table.Header columnConfig={header} style={{ display: 'table', tableLayout: 'fixed', width: '100%' }} />
            <Table.Body style={{ display: 'block', height: '200px', overflow: 'scroll' }}>
                <InfiniteScroller
                    dataLength={state.length}
                    endMessage={endMessage}
                    getMoreData={next}
                    hasMore={hasMore}
                    loadingMessage={loadingMessage}
                >
                    {state.map((item: any, index: number) => {
                        const math = Math.random();

                        return (
                            <Table.Row
                                columnConfig={[{ name: 'ColA' }, { name: 'ColB' }]}
                                key={index}
                                rowData={{ 'ColA': math, 'ColB': `${index}` }}
                                style={{ display: 'table', tableLayout: 'fixed', width: '100%' }}
                            />
                        );
                    })}
                </InfiniteScroller>
            </Table.Body>
        </Table>
    );


};
