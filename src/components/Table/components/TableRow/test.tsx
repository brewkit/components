import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TableRow from './index';
import Typography from '../../../Typography';


describe('Table Row', () => {


    it('Renders correctly with children', () => {
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

describe('Table Row Props', () => {


    it('Renders `columnConfig` and `rowData` props correctly', () => {
        const content = renderer
            .create((
                <TableRow
                    columnConfig={[
                        { name: 'ColA' },
                        { name: 'ColB' },
                        { name: 'ColC' },
                    ]}
                    rowData={{
                        ColA: 'ColumnA',
                        ColB: 'ColumnB',
                        ColC: 'ColumnC',
                    }}
                />
            ))
            .toJSON();

        expect(content).toMatchSnapshot();

        expect(shallow((
            <TableRow
                columnConfig={[
                    { name: 'ColD' },
                    { name: 'ColE' },
                    { name: 'ColF' },
                ]}
                rowData={{
                    ColD: <Typography variant="body1">ColumnD</Typography>,
                    ColE: <Typography variant="body1">ColumnE</Typography>,
                    ColF: <Typography variant="body1">ColumnF</Typography>,
                }}
            />
        ))
            .find(Typography)
            .find('[variant="body1"]')
            .children()
            .contains('ColumnE')).toBe(true);
    });


});
