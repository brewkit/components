import React from 'react';
import Radio from './index';
import renderer from 'react-test-renderer';


describe('Radio', () => {

    it('renders correctly', () => {
        const tree = renderer
            .create(<Radio />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
