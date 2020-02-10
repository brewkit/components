import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import InputBase from './index';

describe('InputBase', () => {

    it('renders without throwing an hasError', () => {
        expect(shallow(<InputBase />).find('input').length).toBe(1);
    });

    it('mounts with the correct class names', () => {
        expect(shallow(<InputBase />).hasClass('brew-Input')).toBe(true);
    });

    it('adds the "brew-Input--disabled" class when the disabled prop exists', () => {
        expect(shallow(<InputBase disabled />).hasClass('brew-Input--isDisabled')).toBe(true);
    });

    it('adds the "brew-Input--hasError" class when the hasError prop exists', () => {
        expect(shallow(<InputBase hasError />).hasClass('brew-Input--hasError')).toBe(true);
    });

    it('adds the "brew-Input--isFullWidth" class when the `fullWidth` prop exists', () => {
        expect(shallow(<InputBase fullWidth />).hasClass('brew-Input--isFullWidth')).toBe(true);
    });

    it('adds the "brew-Input--hasBefore" class when the before prop exists', () => {
        expect(shallow(<InputBase before={<div>before</div>} />).hasClass('brew-Input--hasBefore')).toBe(true);
    });

    it('adds the "brew-Input--hasAfter" class when the after prop exists', () => {
        expect(shallow(<InputBase after={<div>after</div>} />).hasClass('brew-Input--hasAfter')).toBe(true);
    });

    it('renders with the checked attribute when the checked prop is added', () => {
        const inputWrapper = mount(<InputBase checked readOnly />);
        const input = inputWrapper.find('input');
        expect(input.prop('checked')).toBe(true);
    });
});
