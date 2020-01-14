import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Drawer from './index';


describe('Drawer', () => {


    it('Renders correctly', () => {
        const tree = renderer
            .create(<Drawer anchorFrom="left">test</Drawer>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Has default classes on all elements; Does not contain \'brew-Drawer--isOpen\'', () => {
        const drawer = mount(<Drawer anchorFrom="left">hello</Drawer>);
        const classes = [
            '.brew-Drawer',
            '.brew-Drawer--anchorFrom-left',
            '.brew-Drawer__content',
            '.brew-Drawer__element',
            '.brew-Drawer__exit',
            '.brew-Drawer__mask',
        ];

        classes.forEach((className: string) => expect(drawer.exists(className)).toBe(true));

        expect(drawer.exists('.brew-Drawer--isOpen')).toBe(false);
    });

    it('Attaches a custom class name to wrapper and modifies anchor class to right', () => {
        const drawer = shallow(<Drawer anchorFrom="right" className="brew-Drawer--custom">test</Drawer>);

        expect(drawer.hasClass('brew-Drawer--custom')).toBe(true);
        expect(drawer.find('.brew-Drawer__element').hasClass('brew-Drawer--anchorFrom-right')).toBe(true);
    });

    it('Has \'brew-Drawer--isOpen\' class, when isOpen prop is true', () => {
        const drawer = shallow(<Drawer anchorFrom="right" isOpen>test</Drawer>);

        expect(drawer.find('.brew-Drawer__element').hasClass('brew-Drawer--isOpen')).toBe(true);
    });


});
