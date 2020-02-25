import React from 'react';
import renderer from 'react-test-renderer';
import Typography from './index';


it('renders correctly', () => {
    const tree = renderer
        .create(<Typography>Foo</Typography>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});


it('renders correctly with various props', () => {
    const tree = renderer
        .create((
            <React.Fragment>
                <Typography align="left" className="foo" color="primary" shouldTruncate>foo</Typography>
                <Typography align="right" color="secondary">foo</Typography>
                <Typography align="center" color="tertiary" variant="h4">foo</Typography>
            </React.Fragment>
        ))
        .toJSON();
    expect(tree).toMatchSnapshot();
});
