import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TableRow from './index';
import Typography from '../../../Typography';


describe('Table Row', () => {


    it('Renders correctly', () => {
        const content = renderer
            .create((
                <TableRow>
                    <td>Column1</td>
                    <td>Column2</td>
                    <td>Column3</td>
                </TableRow>
            ))
            .toJSON();

        expect(content).toMatchSnapshot();
    });


    it('Includes custom className', () => {
        const className = `class-${String(Math.floor(Math.random() * 1000))}`;
        const content = shallow((
            <TableRow className={className}>
                <td>Column4</td>
                <td>Column5</td>
                <td>Column6</td>
            </TableRow>
        ));

        expect(content.hasClass(className)).toBe(true);
        expect(content.hasClass('brew-TableRow')).toBe(true);
    });


});

describe('Table Header Props', () => {


    it('Renders "columns" prop correctly', () => {
        const content = renderer
            .create((
                <TableRow
                    cells={['ColumnA', 'ColumnB', 'ColumnC']}
                />
            ))
            .toJSON();

        expect(content).toMatchSnapshot();

        expect(shallow((
            <TableRow
                cells={[
                    <Typography key="colA" variant="body1">ColumnA</Typography>,
                    <Typography key="colB" variant="body1">ColumnB</Typography>,
                    <Typography key="colC" variant="body1">ColumnC</Typography>,
                ]}
            />
        ))
            .find(Typography)
            .find('[variant="body1"]')
            .children()
            .contains('ColumnB')).toBe(true);
    });


});
