import React from 'react';
import renderer from 'react-test-renderer';
import PlaceholderPrimaryAction from './index';
import { shallow } from 'enzyme';


describe('PlaceholderPrimaryAction', () => {

    it('renders correctly', () => {
        const tree = renderer
            .create(<PlaceholderPrimaryAction />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('mounts correctly', () => {
        const primaryAction = shallow(<PlaceholderPrimaryAction />);
        expect(primaryAction.hasClass('brew-Placeholder__PrimaryAction')).toBe(true);
    });

    it('correctly adds a className', () => {
        const className = `class-${Math.floor(Math.random() * 1000)}`;
        const primaryAction = shallow(<PlaceholderPrimaryAction className={className} />);
        expect(primaryAction.hasClass(className)).toBe(true);
    });

});
