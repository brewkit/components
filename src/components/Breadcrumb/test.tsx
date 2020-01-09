import React from 'react';
import renderer from 'react-test-renderer';
import Breadcrumb from './index';
import { shallow } from 'enzyme';


describe('Breadcrumb', () => {

    it('renders correctly', () => {
        const tree = renderer
            .create(<Breadcrumb crumbs={[{ title: 'Test' }]} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('mounts correctly', () => {
        const breadcrumb = shallow(<Breadcrumb crumbs={[{ title: 'Test' }]} />);
        expect(breadcrumb.hasClass('brew-Breadcrumb')).toBe(true);
    });

    it('correctly adds a className', () => {
        const className = `class-${Math.floor(Math.random() * 1000)}`;
        const breadcrumb = shallow(<Breadcrumb crumbs={[{ title: 'Test' }]} className={className} />);
        expect(breadcrumb.hasClass(className)).toBe(true);
    });

    it('correctly passes divider prop to display', () => {
        const divider = (<>*</>);
        const breadcrumb = shallow(<Breadcrumb crumbs={[{ title: 'Test' }]} divider={divider} />);
        expect(breadcrumb.hasClass('brew-Breadcrumb--separator')).toBe(true);
    });

});
