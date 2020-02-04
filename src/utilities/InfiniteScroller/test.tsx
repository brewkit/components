import React from 'react';
import renderer from 'react-test-renderer';
import InfiniteScroller from './index';


it('renders correctly', () => {
    const tree = renderer
        .create((
            <InfiniteScroller
                dataLength={1}
                endMessage={<h1>msg</h1>}
                getMoreData={(): boolean => true}
                hasMore
                loadingMessage={<h1>msg</h1>}
            >
                <div>foo</div>
            </InfiniteScroller>
        ))
        .toJSON();


    expect(tree).toMatchSnapshot();
});
