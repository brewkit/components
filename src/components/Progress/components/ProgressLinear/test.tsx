import React from 'react';
import renderer from 'react-test-renderer';
import ProgressLinear from '.';


describe('ProgressLinear', () => {

    it('Renders correctly with defaults', () => {
        const tree = renderer
            .create(<ProgressLinear />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Renders correctly with property variants', () => {
        const tree = renderer
            .create((
                <React.Fragment>
                    <ProgressLinear color="primary" size="small" variant="indeterminate" />
                    <ProgressLinear color="secondary" size="medium" value={40} variant="determinate" />
                    <ProgressLinear bufferValue={60} color="tertiary" size="large" value={40} variant="buffer" />
                    <ProgressLinear color="success" variant="query" />
                    <ProgressLinear color="danger" />
                    <ProgressLinear color="warning" />
                    <ProgressLinear color="info" />
                </React.Fragment>
            ))
            .toJSON();
        expect(tree).toMatchSnapshot();
    });


});
