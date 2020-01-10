import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Typography from './index';


it('renders correctly', () => {
    const tree = renderer
        .create(<Typography>Foo</Typography>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});


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
    expect(wrapper.hasClass('brew-Typography')).toEqual(true);
});


it('"variant" defaults to "inherit" and applies appropriate class', () => {
    const wrapper = shallow((
        <Typography>Lorem ipsum dolor sit amet.</Typography>
    ));
    expect(wrapper.hasClass('brew-Typography--variant-inherit')).toEqual(true);
});


it('"color" defaults to "initial" and applies appropriate class', () => {
    const wrapper = shallow((
        <Typography>Lorem ipsum dolor sit amet.</Typography>
    ));
    expect(wrapper.hasClass('brew-Typography--color-initial')).toEqual(true);
});


it('"display" defaults to "initial" and applies appropriate class', () => {
    const wrapper = shallow((
        <Typography>Lorem ipsum dolor sit amet.</Typography>
    ));
    expect(wrapper.hasClass('brew-Typography--display-initial')).toEqual(true);
});


it('"align" defaults to "inherit" and applies appropriate class', () => {
    const wrapper = shallow((
        <Typography>Lorem ipsum dolor sit amet.</Typography>
    ));
    expect(wrapper.hasClass('brew-Typography--align-inherit')).toEqual(true);
});
