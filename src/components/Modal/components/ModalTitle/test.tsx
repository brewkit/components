import React from 'react';
import { shallow } from 'enzyme';
import ModalTitle from './index';

describe('ModalTitle', () => {
    it('mounts correctly', () => {
        expect(shallow(<ModalTitle />).exists()).toBe(true);
    });

    it('contains the correct className', () => {
        expect(shallow(<ModalTitle />).hasClass('brew-Modal__title')).toBe(true);
    });

    it('passes through a className properly', () => {
        const className = `class-${Math.floor(Math.random() * 1000)}`;
        const component = shallow(<ModalTitle className={className} />);
        expect(component.hasClass(className)).toBe(true);
    });

    it('passes through children correctly', () => {
        const Child = () => <span>hello world</span>;
        expect(shallow(<ModalTitle><Child /></ModalTitle>).exists(Child)).toBe(true);
    });
});