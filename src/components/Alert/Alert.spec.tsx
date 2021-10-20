import { shallow, mount } from 'enzyme';
import React from 'react';

import Alert from '.'

describe('<Alert />', () => {
    const wrapper = mount(<Alert title="Notice!">Hello world</Alert>);


    test('to have child text node', () => {
        expect(wrapper.children()).toHaveLength(1);
        expect(wrapper.contains('Hello world')).toEqual(true);
    });

    
    test('with `title` prop', () => {
        expect(wrapper.prop('title')).toEqual('Notice!');
    });

});
