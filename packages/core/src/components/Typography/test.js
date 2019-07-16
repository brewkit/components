import React from 'react';
import { shallow } from 'enzyme';
import Type from './index';


it('renders children when passed in', () => {
    const wrapper = shallow((
        <Type>
            <span>foo</span>
        </Type>
    ));
    expect(wrapper.contains(<span>foo</span>)).toEqual(true);
});


it('accepts custom classes', () => {
    const wrapper = shallow((
        <Type className="customClass" />
    ));
    expect(wrapper.hasClass('customClass')).toEqual(true);
    expect(wrapper.hasClass('wrapper')).toEqual(true);
});


it('"variant" defaults to "inherit" and applies appropriate class', () => {
    const wrapper = shallow((
        <Type />
    ));
    expect(wrapper.hasClass('variant--inherit')).toEqual(true);
});


it('"color" defaults to "initial" and applies appropriate class', () => {
    const wrapper = shallow((
        <Type />
    ));
    expect(wrapper.hasClass('color--initial')).toEqual(true);
});


it('"display" defaults to "initial" and applies appropriate class', () => {
    const wrapper = shallow((
        <Type />
    ));
    expect(wrapper.hasClass('display--initial')).toEqual(true);
});


it('"align" defaults to "inherit" and applies appropriate class', () => {
    const wrapper = shallow((
        <Type />
    ));
    expect(wrapper.hasClass('align--inherit')).toEqual(true);
});