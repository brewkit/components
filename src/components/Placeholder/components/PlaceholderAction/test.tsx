import React from 'react';
import renderer from 'react-test-renderer';
import PlaceholderAction from './index';
import { shallow } from 'enzyme';


describe('PlaceholderAction', () => {

    it('renders correctly', () => {
        const tree = renderer
            .create(<PlaceholderAction>Test</PlaceholderAction>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('mounts correctly', () => {
        const primaryAction = shallow(<PlaceholderAction>Test</PlaceholderAction>);
        expect(primaryAction.hasClass('brew-Placeholder__primaryAction')).toBe(true);
    });

    it('correctly adds a className', () => {
        const className = `class-${Math.floor(Math.random() * 1000)}`;
        const primaryAction = shallow(<PlaceholderAction className={className}>Test</PlaceholderAction>);
        expect(primaryAction.hasClass(className)).toBe(true);
    });

    it('variant defaults to "primary" and applies appropriate class', () => {
        const variant = shallow((
            <PlaceholderAction>Test</PlaceholderAction>
        ));
        expect(variant.hasClass('brew-Placeholder__primaryAction')).toEqual(true);
    });

    it('variant "secondary" applies appropriate class', () => {
        const variant = shallow((
            <PlaceholderAction variant="secondary">Test</PlaceholderAction>
        ));
        expect(variant.hasClass('brew-Placeholder__secondaryAction')).toEqual(true);
    });


});
