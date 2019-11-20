import React from 'react';
import { shallow } from 'enzyme';
import Typography from './index';


it('renders children when passed in', () => {
    const wrapper = shallow((
        <Typography>
            <span>foo</span>
        </Typography>
    ));
    expect(wrapper.contains(<span>foo</span>)).toEqual(true);
});


it('accepts custom classes', () => {
    const wrapper = shallow((
        <Typography className="customClass">Lorem ipsum dolor sit amet.</Typography>
    ));
    expect(wrapper.hasClass('customClass')).toEqual(true);
    expect(wrapper.hasClass('wrapper')).toEqual(true);
});


it('"variant" defaults to "inherit" and applies appropriate class', () => {
    const wrapper = shallow((
        <Typography>Lorem ipsum dolor sit amet.</Typography>
    ));
    expect(wrapper.hasClass('variant--inherit')).toEqual(true);
});


it('"color" defaults to "initial" and applies appropriate class', () => {
    const wrapper = shallow((
        <Typography>Lorem ipsum dolor sit amet.</Typography>
    ));
    expect(wrapper.hasClass('color--initial')).toEqual(true);
});


it('"display" defaults to "initial" and applies appropriate class', () => {
    const wrapper = shallow((
        <Typography>Lorem ipsum dolor sit amet.</Typography>
    ));
    expect(wrapper.hasClass('display--initial')).toEqual(true);
});


it('"align" defaults to "inherit" and applies appropriate class', () => {
    const wrapper = shallow((
        <Typography>Lorem ipsum dolor sit amet.</Typography>
    ));
    expect(wrapper.hasClass('align--inherit')).toEqual(true);
});