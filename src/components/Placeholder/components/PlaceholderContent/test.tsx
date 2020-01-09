import React from 'react';
import renderer from 'react-test-renderer';
import PlaceholderContent from './index';
import { shallow } from 'enzyme';


describe('PlaceholderContent', () => {

    it('renders correctly', () => {
        const tree = renderer
            .create(<PlaceholderContent>Foo</PlaceholderContent>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('mounts correctly', () => {
        const placeholderContent = shallow(<PlaceholderContent>Foo</PlaceholderContent>);
        expect(placeholderContent.hasClass('brew-Placeholder__content')).toBe(true);
    });

    it('correctly adds a className', () => {
        const className = `class-${Math.floor(Math.random() * 1000)}`;
        const placeholderContent = shallow(<PlaceholderContent className={className} />);
        expect(placeholderContent.hasClass(className)).toBe(true);
    });

});
