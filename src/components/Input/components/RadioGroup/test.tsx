import React from 'react';
import RadioGroup from './index';
import {mount, shallow} from "enzyme";
import Radio from "../Radio";

describe('RadioGroup', () => {

    it('mounts correctly', () => {
        const radioGroup = shallow(<RadioGroup name="test"><Radio /></RadioGroup>);
        expect(radioGroup.hasClass('brew-RadioGroup')).toBe(true);
    });

    it('renders children when passed in', () => {
        const name = "Testing";
        const wrapper = mount(
            <RadioGroup name={name}>
                <Radio />
            </RadioGroup>
        );
        expect(wrapper.contains(<Radio />)).toEqual(true);
    });

    it('correctly accepts the name prop', () => {
        // const name = "Testing";
    });

    it('correctly accepts the defaultValue prop', () => {

    });

    it('correctly accepts the onChange prop', () => {

    });

});
