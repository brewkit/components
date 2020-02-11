import React from 'react';
import { shallow } from 'enzyme';
import Icon from '../Icon';
import Tooltip from './index';
import TooltipContent from './components/TooltipContent';


describe('Tooltip', () => {

    it('mounts correctly', () => {
        const tooltip = shallow(<Tooltip content="Testing tooltips"><Icon>error</Icon></Tooltip>);
        expect(tooltip.hasClass('brew-Tooltip')).toBe(true);
    });

    it('correctly adds a className', () => {
        const className = `class-${String(Math.floor(Math.random() * 1000))}`;
        const tooltip = shallow(<Tooltip className={className} content="Testing tooltips"><Icon>error</Icon></Tooltip>);
        expect(tooltip.hasClass(className)).toBe(true);
    });

    it('Renders Tooltip Content', () => {
        const card = shallow(<Tooltip content="Testing tooltips"><Icon>error</Icon></Tooltip>);
        expect(card.find(TooltipContent)).toHaveLength(1);
    });

});
