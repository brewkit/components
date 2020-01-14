import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TableHeaderColumn from './index';
import Typography from '../../../../../Typography';


describe('Table Header Column', () => {


    it('Renders correctly', () => {
        const header = renderer
            .create(<TableHeaderColumn>Label</TableHeaderColumn>)
            .toJSON();
        expect(header).toMatchSnapshot();
    });


    it('Includes custom className', () => {
        const className = `class-${String(Math.floor(Math.random() * 1000))}`;
        const header = shallow(<TableHeaderColumn className={className}>Label</TableHeaderColumn>);

        expect(header.hasClass(className)).toBe(true);
    });


});

describe('Table Header Column Props', () => {


    it('Renders correctly with text in "label" prop', () => {
        const header = renderer
            .create(<TableHeaderColumn label="Label1" />)
            .toJSON();
        expect(header).toMatchSnapshot();
    });


    it('Renders correctly with ReactNode in "label" prop', () => {
        const header = renderer
            .create(<TableHeaderColumn label={<Typography variant="h3">Label2</Typography>} />)
            .toJSON();

        expect(header).toMatchSnapshot();

        expect(shallow(<TableHeaderColumn label={<Typography variant="h3">Label2</Typography>} />)
            .find(Typography)
            .find('[variant="h3"]')
            .children()
            .contains('Label2')).toBe(true);
    });


});

