import React from 'react';
import renderer from 'react-test-renderer';
import Typography from './index';


it('renders correctly', () => {
    const tree = renderer
        .create(<Typography>Foo</Typography>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});


it('renders correctly with all props', () => {
    const tree = renderer
        .create((
            <Typography align="left" className="foo" color="secondary" shouldTruncate>
                <span>some child elements</span>
            </Typography>
        ))
        .toJSON();
    expect(tree).toMatchSnapshot();
});
