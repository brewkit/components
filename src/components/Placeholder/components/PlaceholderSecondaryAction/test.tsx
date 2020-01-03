import React from 'react';
import renderer from 'react-test-renderer';
import PlaceholderSecondaryAction from './index';
import { shallow } from 'enzyme';


describe('PlaceholderSecondaryAction', () => {

    it('renders correctly', () => {
        const tree = renderer
            .create(<PlaceholderSecondaryAction />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('mounts correctly', () => {
        const secondaryAction = shallow(<PlaceholderSecondaryAction />);
        expect(secondaryAction.hasClass('brew-Placeholder__SecondaryAction')).toBe(true);
    });

    it('correctly adds a className', () => {
        const className = `class-${Math.floor(Math.random() * 1000)}`;
        const secondaryAction = shallow(<PlaceholderSecondaryAction className={className} />);
        expect(secondaryAction.hasClass(className)).toBe(true);
    });

});
