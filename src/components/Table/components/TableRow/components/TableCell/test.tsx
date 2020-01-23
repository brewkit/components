import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TableCell from './index';
import Typography from '../../../../../Typography';


describe('Table Cell', () => {


    it('Renders correctly with text children', () => {
        const content = renderer
            .create(<TableCell>Column1</TableCell>)
            .toJSON();

        expect(content).toMatchSnapshot();
    });


    it('Renders correctly with component children', () => {
        const content = renderer
            .create(<TableCell><Typography variant="h3">Label</Typography></TableCell>)
            .toJSON();

        expect(content).toMatchSnapshot();
    });


    it('Includes custom className', () => {
        const className = `class-${String(Math.floor(Math.random() * 1000))}`;
        const content = shallow(<TableCell className={className}>Column1</TableCell>);

        expect(content.hasClass(className)).toBe(true);
        expect(content.hasClass('brew-TableCell')).toBe(true);
    });


});

describe('Table Cell Props', () => {


    it('Renders `as` prop correctly', () => {
        const content = renderer
            .create(<TableCell as="th">Column1</TableCell>)
            .toJSON();

        expect(content).toMatchSnapshot();

    });


});
