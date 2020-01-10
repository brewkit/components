import React from 'react';
import RadioGroup from './index';
import { mount, shallow } from 'enzyme';
import Radio from '../Radio';


const onChange = (): true => true;


describe('RadioGroup', () => {

    it('mounts correctly', () => {
        const radioGroup = shallow((
            <RadioGroup name="test">
                <Radio />
            </RadioGroup>
        ));
        expect(radioGroup.hasClass('brew-Input--radioGroup')).toBeTruthy();
    });

    it('correctly accepts and passes through a className prop', () => {
        const className = `class-${String(Math.floor(Math.random() * 1000))}`;
        const radioGroup = shallow((
            <RadioGroup className={className} name="test">
                <Radio />
            </RadioGroup>
        ));
        expect(radioGroup.hasClass(className)).toBeTruthy();
    });

    it('passes the name prop to each child Radio component', () => {
        const radioGroup = mount((
            <RadioGroup name="test">
                <Radio />
            </RadioGroup>
        ));
        expect(radioGroup.contains(<Radio name="test" />)).toBeTruthy();
    });

    it('passes the defaultValue prop to each child Radio component', () => {
        const radioGroup = mount((
            <RadioGroup defaultValue="theRightOne" name="test">
                <Radio value="theWrongOne" />
                <Radio value="theRightOne" />
            </RadioGroup>
        ));
        expect(radioGroup.contains(<Radio defaultChecked name="test" value="theRightOne" />)).toBe(true);
        expect(radioGroup.find('[value="theWrongOne"]').first()
            .prop('defaultChecked')).toBeUndefined();
    });

    it('passes the value prop to each child Radio component', () => {
        const radioGroup = mount((
            <RadioGroup name="test" value="theRightOne">
                <Radio value="theWrongOne" />
                <Radio value="theRightOne" />
            </RadioGroup>
        ));
        expect(radioGroup.find('[value="theRightOne"]').first()
            .prop('checked')).toBeTruthy();
        expect(radioGroup.find('[value="theWrongOne"]').first()
            .prop('checked')).toBeUndefined();
    });

    it('correctly applies an onchange handler to all children', () => {
        const radioGroupWithOnchange = mount((
            <RadioGroup name="test" onChange={onChange}>
                <Radio value="test" />
            </RadioGroup>
        ));
        expect(radioGroupWithOnchange.find('[value="test"]').first()
            .props().onChange).toBeTruthy();
    });

});
