import React from 'react';
import renderer from 'react-test-renderer';
import Breadcrumb from './index';
import { shallow } from 'enzyme';


describe('Breadcrumb', () => {

    it('renders correctly', () => {
        const tree = renderer
            .create(<Breadcrumb crumbs={[]} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('mounts correctly', () => {
        const breadcrumb = shallow(<Breadcrumb crumbs={[]} />);
        expect(breadcrumb.hasClass('brew-Placeholder')).toBe(true);
    });

    it('correctly adds a className', () => {
        const className = `class-${Math.floor(Math.random() * 1000)}`;
        const breadcrumb = shallow(<Breadcrumb crumbs={[]} className={className} />);
        expect(breadcrumb.hasClass(className)).toBe(true);
    });

});
