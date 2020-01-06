import React, { ReactElement } from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Dialog from './index';

describe('Dialog', () => {

    it('renders correctly', () => {
        const DialogComponent = renderer.create(<Dialog open={false} />).toJSON();
        expect(DialogComponent).toMatchSnapshot();
    });

    it('accepts a className prop', () => {
        const random = Math.floor(Math.random() * 1000).toString();
        const className = `class-${random}`;
        const component = shallow(<Dialog className={className} open />);
        expect(component.exists(`.${className}`)).toBe(true);
    });

    it('renders children', () => {
        const Child = (): ReactElement => <span>hello world</span>;
        const component = shallow(<Dialog open><Child /></Dialog>);
        expect(component.contains(<Child />)).toBe(true);
    });

    it('only renders when open is true', () => {
        const closedDialog = shallow(<Dialog open={false} />);
        const openDialog = shallow(<Dialog open />);
        expect(closedDialog.equals(null)).toBeTruthy();
        expect(openDialog.equals(null)).toBeFalsy();
    });

    it('adds the proper classes depending on the variant', () => {
        const dangerDialog = shallow(<Dialog open variant="danger" />);
        const infoDialog = shallow(<Dialog open variant="info" />);
        expect(dangerDialog.find('.brew-Dialog--danger').length).toBe(1);
        expect(infoDialog.find('.brew-Dialog--info').length).toBe(1);
    });

    it('fires an event when the background is clicked', () => {
        const callback = jest.fn();
        const modal = shallow(<Dialog onBackgroundClick={callback} open />);
        modal.find('.brew-Dialog__background').simulate('click');

        expect(callback.mock.calls.length).toBe(1);
    });
});
