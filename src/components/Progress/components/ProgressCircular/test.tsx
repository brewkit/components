import React from 'react';
import renderer from 'react-test-renderer';
import ProgressCircular from '.';


describe('ProgressCircular', () => {

    it('Renders correctly with defaults', () => {
        const tree = renderer
            .create(<ProgressCircular />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Renders correctly with property variants', () => {
        const tree = renderer
            .create((
                <React.Fragment>
                    <ProgressCircular color="primary" size="small" variant="indeterminate" />
                    <ProgressCircular color="secondary" size="medium" value={5} variant="determinate" />
                    <ProgressCircular color="tertiary" size="large" variant="static" />
                    <ProgressCircular color="success" />
                    <ProgressCircular color="error" />
                    <ProgressCircular color="warning" />
                    <ProgressCircular color="info" />
                </React.Fragment>
            ))
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
