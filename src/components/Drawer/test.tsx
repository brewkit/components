import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Drawer from './index';


describe('Drawer', () => {


    // it('renders correctly', () => {
    //     const tree = renderer
    //         .create(<Drawer>test</Drawer>)
    //         .toJSON();
    //     expect(tree).toMatchSnapshot();
    // })

    it('Has default classes on all elements; Does not contain \'brew-Drawer--isOpen\'', () => {
        const drawer = mount(<Drawer anchorFrom='left'>hello</Drawer>);
        const classes = [
            '.brew-Drawer',
            '.brew-Drawer--anchorFrom-left',
            '.brew-Drawer__content',
            '.brew-Drawer__exit',
            '.brew-Drawer__mask',
        ];

        classes.forEach(className => expect(drawer.exists(className)).toBe(true));

        expect(drawer.exists('.brew-Drawer--isOpen')).toBe(false);
    });

});
