import React from 'react';
import { shallow } from 'enzyme';
import StatusCard from './index';
import StandardStatusCard from './components/Standard';
import CompactStatusCard from './components/Compact';
import Icon from '../Icon';
import Typography from '../Typography';


describe('Status Card', () => {


    it('Renders Standard Variant', () => {
        const card = shallow(<StatusCard body="bye" color="success" header="hi" icon="business" variant="standard" />);
        expect(card.find(StandardStatusCard)).toHaveLength(1);
    });

    it('Renders Compact Variant', () => {
        const card = shallow(<StatusCard body="bye" color="success" header="hi" icon="" variant="compact" />);
        expect(card.find(CompactStatusCard)).toHaveLength(1);
    });

    it('Includes custom className', () => {
        const card = shallow(<StatusCard
            body="bye"
            className="customClass__brew"
            color="success"
            header="hi"
            icon=""
            variant="compact" />);

        expect(card.hasClass('customClass__brew')).toBe(true);
    });


});


describe('Status Card Props', () => {


    it('Adds the "brew-StatusCard--isDisabled" class when "isDisabled" prop exists', () => {
        expect(shallow(<StandardStatusCard
            body="de nada"
            color="success"
            header="gracias"
            icon="business"
            isDisabled
        />).hasClass('brew-StatusCard--isDisabled')).toBe(true);
    });

    it('Adds the "brew-StatusCard--isFilled" class when "isFilled" prop exists', () => {
        expect(shallow(<StandardStatusCard
            body="de nada"
            color="success"
            header="gracias"
            icon="business"
            isFilled
        />).hasClass('brew-StatusCard--isFilled')).toBe(true);
    });

    it('Adds the correct color class', () => {
        expect(shallow(<StandardStatusCard
            body="de nada"
            color="success"
            header="gracias"
            icon="business"
        />).hasClass('brew-StatusCard--color-success')).toBe(true);

        expect(shallow(<StandardStatusCard
            body="de nada"
            color="info"
            header="gracias"
            icon="business"
        />).hasClass('brew-StatusCard--color-info')).toBe(true);

        expect(shallow(<StandardStatusCard
            body="de nada"
            color="danger"
            header="gracias"
            icon="business"
        />).hasClass('brew-StatusCard--color-danger')).toBe(true);
    });

    it('Renders the correct icon', () => {
        expect(shallow(<StandardStatusCard
            body="de nada"
            color="danger"
            header="gracias"
            icon="business"
        />).find(Icon)
            .children()
            .contains('business')).toBe(true);

        expect(shallow(<StandardStatusCard
            body="de nada"
            color="danger"
            header="gracias"
            icon="atm"
        />).find(Icon)
            .children()
            .contains('atm')).toBe(true);
    });

    it('Renders the correct header and body', () => {
        expect(shallow(<StandardStatusCard
            body="de nada"
            color="danger"
            header="gracias"
            icon="business"
        />).find(Typography)
            .find('[variant="h1"]')
            .children()
            .contains('gracias')).toBe(true);

        expect(shallow(<StandardStatusCard
            body="de nada"
            color="danger"
            header="gracias"
            icon="business"
        />).find(Typography)
            .find('[variant="body1"]')
            .children()
            .contains('de nada')).toBe(true);
    });


});
