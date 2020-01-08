import React from 'react';
import renderer from 'react-test-renderer';
import Collapsible from './index';
import {shallow} from 'enzyme';


describe('Collapsible', () => {

    it('renders correctly', () => {
        const tree = renderer
            .create(<Collapsible anchor={(<div>Testing</div>)}>Test</Collapsible>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('mounts correctly', () => {
        const collapsible = shallow(<Collapsible anchor={(<div>Testing</div>)}>Test</Collapsible>);
        expect(collapsible.hasClass('brew-Collapsible')).toEqual(true);
    });

    it('correctly adds a className', () => {
        const className = `class-${Math.floor(Math.random() * 1000)}`;
        const collapsible = shallow(<Collapsible anchor={(<div>Testing</div>)} className={className}>Test</Collapsible>);
        expect(collapsible.hasClass(className)).toEqual(true);
    });

});
