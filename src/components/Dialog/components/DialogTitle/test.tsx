import React from 'react';
import { shallow } from 'enzyme';
import DialogTitle from './index';

describe('DialogTitle', () => {
    it('mounts correctly', () => {
        expect(shallow(<DialogTitle />).exists()).toBe(true);
    });

    it('contains the correct className', () => {
        expect(shallow(<DialogTitle />).hasClass('brew-Dialog__title')).toBe(true);
    });

    it('passes through a className properly', () => {
        const className = `class-${Math.floor(Math.random() * 1000).toString()}`;
        const component = shallow(<DialogTitle className={className} />);
        expect(component.hasClass(className)).toBe(true);
    });

    it('passes through children correctly', () => {
        const children = <span>hello world</span>;
        expect(shallow(<DialogTitle>{children}</DialogTitle>).contains(children)).toBe(true);
    });
});
