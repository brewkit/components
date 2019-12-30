import React from 'react';
import Input from './index';
import Checkbox from './components/Checkbox';
import Radio from './components/Radio';
import Select from './components/Select';
import TextInput from './components/TextInput';
import Textarea from './components/Textarea';
import { shallow, mount } from 'enzyme';

describe('Input', () => {


    it('renders a checkbox when the variant prop equals "checkbox"', () => {
        const checkboxInput = shallow(<Input variant="checkbox" />);
        expect(checkboxInput.equals(<Checkbox />)).toBe(true);
    });

    it('renders a radio input when the variant prop equals "radio"', () => {
        const input = shallow(<Input variant="radio" />);
        expect(input.equals(<Radio />)).toBe(true);
    });

    it('renders a text input when the variant prop equals "text"', () => {
        const input = shallow(<Input variant="text" />);
        expect(input.equals(<TextInput />)).toBe(true);
    });

    it('renders a textarea when the variant prop equals "textarea"', () => {
        const input = shallow(<Input variant="textarea" />);
        expect(input.equals(<Textarea />)).toBe(true);
    });

    it('renders a select box when the variant prop equals "select"', () => {
        const input = shallow(<Input variant="select" />);
        expect(input.equals(<Select />)).toBe(true);
    });
});