import React from 'react';
import Radio from './index';
import { shallow, mount } from 'enzyme';

describe('Radio', () => {
    it('has the right classes on the root element', () => {
        const radio = shallow(<Radio />);
        expect(radio.hasClass('brew-Input--radio')).toBe(true);
    });

    it('renders with the correct input type', () => {
        const radio = shallow(<Radio />);
        expect(radio.prop('type')).toBe('radio');
    });

    it('correctly passes through the checked prop', () => {
        const radio = mount(<Radio checked readOnly />);
        const input = radio.find('input');
        expect(input.prop('checked')).toBe(true);
    });

    it('correctly passes through the disabled prop', () => {
        const radio = mount(<Radio disabled />);
        const input = radio.find('input');
        expect(input.prop('disabled')).toBe(true);
    });

    it('correctly adds a className', () => {
        const className = `class-${Math.floor(Math.random() * 1000)}`;
        const radio = shallow(<Radio className={className} />);
        expect(radio.hasClass(className)).toBe(true);
    });
});