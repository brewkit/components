import React from 'react';
import renderer from 'react-test-renderer';
import Snackbar from './index';


it('renders correctly', () => {


    const tree = renderer
        .create(
            <Snackbar
                action={<div onClick={() => console.log('bar')}>Close</div>}
                color="primary"
                isOpen
                message="foo"
                onClose={() => console.log('foo')}
                position="top-right"
            />,
            {
                createNodeMock: node => document.createElement(node.type as any),
            }).toJSON();


    expect(tree).toMatchSnapshot();


});
