import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Modal from './index';

describe('Modal', () => {

    it('renders correctly', () => {
        const ModalComponent = renderer.create(<Modal open={false} />).toJSON();
        expect(ModalComponent).toMatchSnapshot();
    });

    it('accepts a className prop', () => {
        const className = `class-${Math.floor(Math.random() * 1000)}`;
        const component = shallow(<Modal open={true} className={className} />);
        expect(component.exists(`.${className}`)).toBe(true);
    });

    it('renders children', () => {
        const Child = () => <span>hello world</span>;
        const component = shallow(<Modal open={true}><Child /></Modal>);
        expect(component.contains(<Child />)).toBe(true);
    });

    it('only renders when open is true', () => {
        const closedModal = shallow(<Modal open={false} />);
        const openModal = shallow(<Modal open={true} />);
        expect(closedModal.equals(null)).toBeTruthy();
        expect(openModal.equals(null)).toBeFalsy();  
    });

    it('adds the proper classes depending on the variant', () => {
        const dangerModal = shallow(<Modal open={true} variant="danger" />);
        const infoModal = shallow(<Modal open={true} variant="info" />);
        expect(dangerModal.find('.brew-Modal--danger').length).toBe(1);
        expect(infoModal.find('.brew-Modal--info').length).toBe(1);
    });

    it('fires an event when the background is clicked', () => {
        const callback = jest.fn();
        const modal = shallow(<Modal open={true} onBackgroundClick={callback} />);
        modal.find('.brew-Modal__background').simulate('click');

        expect(callback.mock.calls.length).toBe(1);
    });
});