import React from 'react';
import renderer from 'react-test-renderer';
import Placeholder from './index';
import { shallow } from 'enzyme';


describe('Placeholder', () => {

    it('renders correctly', () => {
        const tree = renderer
            .create(<Placeholder>Foo</Placeholder>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('mounts correctly', () => {
        const placeholder = shallow(<Placeholder>Foo</Placeholder>);
        expect(placeholder.hasClass('brew-Placeholder')).toBe(true);
    });

    it('correctly adds a className', () => {
        const className = `class-${Math.floor(Math.random() * 1000)}`;
        const placeholder = shallow(<Placeholder className={className} />);
        expect(placeholder.hasClass(className)).toBe(true);
    });

});
