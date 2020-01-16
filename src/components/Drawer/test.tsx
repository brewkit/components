import React, { ReactNode } from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Drawer from './index';


jest.mock('react-dom', () => ({
    createPortal: (node: ReactNode): ReactNode => node,
}));


describe('Drawer', () => {


    it('Renders correctly', () => {
        const tree = renderer
            .create(<Drawer anchorFrom="left" onCloseDrawer={(): true => true}>test</Drawer>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Has default classes on all elements; Does not contain \'brew-Drawer--isOpen\'', () => {
        const drawer = mount(<Drawer anchorFrom="left" onCloseDrawer={(): true => true}>hello</Drawer>);
        const classes = [
            '.brew-Drawer',
            '.brew-Drawer--anchorFrom-left',
            '.brew-Drawer__content',
            '.brew-Drawer__exit',
            '.brew-Drawer__mask',
        ];

        classes.forEach((className: string) => expect(drawer.exists(className)).toBe(true));

        expect(drawer.exists('.brew-Drawer--isOpen')).toBe(false);
    });

    it('Attaches a custom class name to wrapper and modifies anchor class to right', () => {
        const drawer = shallow((
            <Drawer anchorFrom="right" className="brew-Drawer--custom" onCloseDrawer={(): true => true}>test</Drawer>
        ));

        expect(drawer.find('.brew-Drawer').hasClass('brew-Drawer--custom')).toBe(true);
        expect(drawer.find('.brew-Drawer').hasClass('brew-Drawer--anchorFrom-right')).toBe(true);
    });

    it('Has \'brew-Drawer--isOpen\' class, when isOpen or isDefaultOpen prop is true', () => {
        const drawer = shallow(<Drawer anchorFrom="right" isOpen onCloseDrawer={(): true => true}>test</Drawer>);
        const drawerDefault = shallow((
            <Drawer anchorFrom="right" onCloseDrawer={(): true => true}>test</Drawer>
        ));

        expect(drawer.find('.brew-Drawer').hasClass('brew-Drawer--isOpen')).toBe(true);
        expect(drawerDefault.find('.brew-Drawer').hasClass('brew-Drawer--isOpen')).toBe(true);
    });

    it('Contains \'brew-Drawer__item\' class when Drawer.Item component is used', () => {
        const drawer = mount((
            <Drawer anchorFrom="right" isOpen onCloseDrawer={(): true => true}>
                <Drawer.Item>Clickable</Drawer.Item>
            </Drawer>
        ));

        expect(drawer.find(Drawer.Item).childAt(0)
            .hasClass('brew-Drawer__item')).toBe(true);
    });

    /*
     * it('Throws error when both isOpen and isDefaultOpen are defined', () => {
     *     const drawer = shallow()
     * });
     */

});
