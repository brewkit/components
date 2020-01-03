import React from 'react';
import renderer from 'react-test-renderer';
import PlaceholderTitle from './index';
import { shallow } from 'enzyme';


describe('PlaceholderTitle', () => {

    it('renders correctly', () => {
        const tree = renderer
            .create(<PlaceholderTitle>Foo</PlaceholderTitle>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('mounts correctly', () => {
        const placeholderTitle = shallow(<PlaceholderTitle>Foo</PlaceholderTitle>);
        expect(placeholderTitle.hasClass('brew-Placeholder__title')).toBe(true);
    });

    it('correctly adds a className', () => {
        const className = `class-${Math.floor(Math.random() * 1000)}`;
        const placeholderTitle = shallow(<PlaceholderTitle className={className}>Foo</PlaceholderTitle>);
        expect(placeholderTitle.hasClass(className)).toBe(true);
    });

});
