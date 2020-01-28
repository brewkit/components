import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Badge from './index';


describe('Badge', () => {


    it('Renders correctly', () => {
        const tree = renderer
            .create(<Badge><div>child</div></Badge>)
            .toJSON();


        expect(tree).toMatchSnapshot();
    });


    it('Has default classes', () => {
        const badge = shallow(<Badge><div>child</div></Badge>);
        const classes = [
            '.brew-Badge',
            '.brew-Badge--anchorFrom-top-right',
            '.brew-Badge--color-info',
            '.brew-Badge__element',
        ];


        classes.forEach((className: string) => {
            expect(badge.exists(className)).toBe(true);
        });
    });


    it('Adds custom class', () => {
        const badge = shallow(<Badge className="customizer"><div>child</div></Badge>);


        expect(badge.hasClass('customizer'));
    });


    it('Has circular and inline modifier class', () => {
        const badge = shallow(<div>child <Badge isCircular /></div>);
        const classes = ['brew-Badge--isCircular', 'brew-Badge--inline'];


        classes.forEach((className: string) => {
            expect(badge.hasClass(className));
        });
    });


    it('Changes default classes to prop modifiers', () => {
        const badge = shallow(<div>child <Badge anchorFrom="bottom-right" color="danger" /></div>);
        const classes = ['brew-Badge--anchorFrom-bottom-right', 'brew-Badge--color-danger'];


        classes.forEach((className: string) => {
            expect(badge.hasClass(className));
        });
    });


});
