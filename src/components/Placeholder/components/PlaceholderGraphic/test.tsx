import React from 'react';
import renderer from 'react-test-renderer';
import PlaceholderGraphic from './index';
import { shallow } from 'enzyme';


describe('PlaceholderGraphic', () => {

    it('renders correctly', () => {
        const tree = renderer
            .create(<PlaceholderGraphic graphic="foo" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('mounts correctly', () => {
        const placeholderGraphic = shallow(<PlaceholderGraphic graphic="foo" />);
        expect(placeholderGraphic.hasClass('brew-Placeholder__graphic')).toBe(true);
    });

    it('correctly adds a className', () => {
        const className = `class-${Math.floor(Math.random() * 1000)}`;
        const placeholderGraphic = shallow(<PlaceholderGraphic className={className} graphic="foo" />);
        expect(placeholderGraphic.hasClass(className)).toBe(true);
    });

});
