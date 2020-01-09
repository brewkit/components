import React from 'react';
import RadioGroup from './index';
import {mount, shallow} from "enzyme";
import Radio from "../Radio";

describe('RadioGroup', () => {

    it('mounts correctly', () => {
        const radioGroup = shallow(<RadioGroup name="test"><Radio /></RadioGroup>);
        expect(radioGroup.hasClass('brew-Input--radioGroup')).toBe(true);
    });

    it('correctly accepts and passes through a className prop', () => {
        const className = `class-${Math.floor(Math.random() * 1000)}`;
        const radioGroup = shallow(<RadioGroup name="test" className={className}><Radio /></RadioGroup>);
        expect(radioGroup.hasClass(className)).toBe(true);
    });

    it('passes the name prop to each child Radio component', () => {
        const radioGroup = mount(<RadioGroup name="test"><Radio /></RadioGroup>);
        expect(radioGroup.contains(<Radio name="test" />)).toBe(true);
    });

    it('passes the defaultValue prop to each child Radio component', () => {
        const radioGroup = mount(<RadioGroup name="test" defaultValue="theRightOne"><Radio value="theWrongOne" /><Radio value="theRightOne" /></RadioGroup>);
        expect(radioGroup.contains(<Radio name="test" value="theRightOne" defaultChecked />)).toBe(true);
        expect(radioGroup.find('[value="theWrongOne"]').first().prop('defaultChecked')).toBe(undefined);
    });

    it('passes the value prop to each child Radio component', () => {
        const radioGroup = mount(<RadioGroup name="test" value="theRightOne"><Radio value="theWrongOne" /><Radio value="theRightOne" /></RadioGroup>);
        expect(radioGroup.contains(<Radio name="test" value="theRightOne" checked />)).toBe(true);
        expect(radioGroup.find('[value="theWrongOne"]').first().prop('checked')).toBe(undefined);
    });

    it('correctly applies an onchange handler to all children', () => {
        const radioGroupWithOnchange = mount(<RadioGroup name="test" onChange={() => {}}><Radio value={"test"} /></RadioGroup>);
        expect(radioGroupWithOnchange.find('[value="test"]').first().props().onChange).toBeTruthy();
    });

});
