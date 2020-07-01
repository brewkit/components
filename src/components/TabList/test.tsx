import React from 'react';
import renderer from 'react-test-renderer';
import TabList from '.';


describe('TabList', () => {

    it('Renders correctly with defaults', () => {
        const tree = renderer
            .create(<TabList />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
