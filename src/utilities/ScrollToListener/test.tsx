import React from 'react';
import renderer from 'react-test-renderer';
import ScrollToListener from './index';


it('renders correctly', () => {
    const tree = renderer
        .create((
            <ScrollToListener onScrollTo={(): boolean => true}>
                <div>foo</div>
            </ScrollToListener>
        ))
        .toJSON();


    expect(tree).toMatchSnapshot();
});
