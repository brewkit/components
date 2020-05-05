import React from 'react';
import renderer from 'react-test-renderer';
import Tab from '.';


describe('Tab', () => {

    it('Renders correctly with defaults', () => {
        const tree = renderer
            .create(<Tab />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Renders correctly with property variants', () => {
        const tree = renderer
            .create((
                <React.Fragment>
                    <Tab label="label 1" />
                    <Tab label="label 2" />
                    <Tab icon="add_circle" label="label 1" />
                    <Tab icon="add_circle" label="label 1" />
                    <Tab icon="add_circle" label="label 1" disabled />
                </React.Fragment>
            ))
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
