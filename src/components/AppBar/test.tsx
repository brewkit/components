import React from 'react';
import renderer from 'react-test-renderer';
import AppBar from '@components/AppBar';


it('renders correctly', () => {
    const tree = renderer
        .create(<AppBar>Foo</AppBar>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
