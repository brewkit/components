import React from 'react';
import renderer from 'react-test-renderer';
import Flag from '@components/Flag';


it('renders correctly', () => {
    const tree = renderer
        .create((
            <React.Fragment>
                <Flag>Default</Flag>
                <Flag />
            </React.Fragment>
        ))
        .toJSON();
    expect(tree).toMatchSnapshot();
});


it('renders correctly with various props', () => {
    const tree = renderer
        .create((
            <React.Fragment>
                <Flag>Default</Flag>
                <Flag color="success">Default</Flag>
                <Flag color="warning">Default</Flag>
                <Flag color="danger">Default</Flag>
                <Flag color="light">Default</Flag>
                <Flag color="dark">Default</Flag>
            </React.Fragment>
        ))
        .toJSON();
    expect(tree).toMatchSnapshot();
});
