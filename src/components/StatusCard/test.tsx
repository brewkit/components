import React from 'react';
import { shallow } from 'enzyme';
import StatusCard from './index';
import StandardStatusCard from './components/Standard';
import CompactStatusCard from './components/Compact';


describe('Status Card', () => {


    it('Renders Standard Variant', () => {
        const card = shallow(<StatusCard variant="standard" color="success" header="hi" body="bye" icon="business" />);
        expect(card.find(StandardStatusCard)).toHaveLength(1);
    });

    it('Renders Compact Variant', () => {
        const card = shallow(<StatusCard variant="compact" color="success" header="hi" body="bye" icon="" />);
        expect(card.find(CompactStatusCard)).toHaveLength(1);
    });


});


describe('Standard Status Card', () => {


    it('Adds the "brew-StatusCard--isDisabled" class when "isDisabled" prop exists', () => {
        expect(shallow(<StandardStatusCard body="de nada" color="success" header="gracias" icon="business" isDisabled />).hasClass('brew-StatusCard--isDisabled')).toBe(true);
    });

    it('Adds the "brew-StatusCard--isFilled" class when "isFilled" prop exists', () => {
        expect(shallow(<StandardStatusCard body="de nada" color="success" header="gracias" icon="business" isFilled />).hasClass('brew-StatusCard--isFilled')).toBe(true);
    });

    it('Adds the "brew-StatusCard__color--success" class when "danger" is passed to color prop', () => {
        expect(shallow(<StandardStatusCard body="de nada" color="success" header="gracias" icon="business" />).hasClass('brew-StatusCard__color--success')).toBe(true);
    });


});


describe('Compact Status Card', () => {


    it('Adds the "brew-StatusCard--isDisabled" class when "isDisabled" prop exists', () => {
        expect(shallow(<CompactStatusCard body="de nada" color="success" header="gracias" isDisabled />).hasClass('brew-StatusCard--isDisabled')).toBe(true);
    });

    it('Adds the "brew-StatusCard--isFilled" class when "isFilled" prop exists', () => {
        expect(shallow(<CompactStatusCard body="de nada" color="success" header="gracias" isFilled />).hasClass('brew-StatusCard--isFilled')).toBe(true);
    });

    it('Adds the "brew-StatusCard__color--danger" class when "danger" is passed to color prop', () => {
        expect(shallow(<CompactStatusCard body="de nada" color="danger" header="gracias" />).hasClass('brew-StatusCard__color--danger')).toBe(true);
    });


});