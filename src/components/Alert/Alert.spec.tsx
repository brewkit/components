import { shallow, mount } from 'enzyme';
import React from 'react';

import Alert from '.'

describe('<Alert />', () => {


  test('to have child text node', () => {
    const wrapper = shallow(<Alert>Hello world</Alert>);
    expect(wrapper.children()).toHaveLength(1);
    expect(wrapper.contains('Hello world')).toEqual(true);
  });

  
  test('with `title` prop', () => {
    const wrapper = mount(<Alert title="Notice!">Hello world</Alert>);
    expect(wrapper.prop('title')).toEqual('Notice!');
  });

});
