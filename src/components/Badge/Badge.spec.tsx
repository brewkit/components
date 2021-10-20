import React from 'react'
import { shallow } from 'enzyme';
import { Badge } from './Badge';

describe('<Badge />', () => {

    test('render component', () => {
        const wrapper = shallow(<Badge />);
        expect(wrapper.isEmptyRender()).toEqual(false);
    });
  
    
});