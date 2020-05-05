import React from 'react';
import renderer from 'react-test-renderer';
import Tabs from './index';


describe('Tabs', () => {

    it('Renders correctly with defaults', () => {
        const tree = renderer
            .create(<Tabs />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
