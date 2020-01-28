import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TableHeader from './index';
import Typography from '../../../Typography';


describe('Table Header', () => {


    it('Renders correctly with children', () => {
        const header = renderer
            .create((
                <TableHeader>
                    <th>Column1</th>
                    <th>Column2</th>
                    <th>Column3</th>
                </TableHeader>
            )).toJSON();

        expect(header).toMatchSnapshot();
    });


    it('Includes custom className', () => {
        const className = `class-${String(Math.floor(Math.random() * 1000))}`;
        const content = shallow((
            <table>
                <TableHeader className={className}>
                    <th>Column4</th>
                    <th>Column5</th>
                    <th>Column6</th>
                </TableHeader>
            </table>
        ));

        expect(content.children().first()
            .shallow()
            .hasClass(className))
            .toBe(true);
        expect(content.children().first()
            .shallow()
            .hasClass('brew-TableHeader'))
            .toBe(true);
    });


});

describe('Table Header Props', () => {


    it('Renders `columnConfig`  prop correctly', () => {
        const header = renderer
            .create((
                <TableHeader
                    columnConfig={[
                        { label: 'ColumnA', name: 'ColA' },
                        { label: 'ColumnB', name: 'ColB' },
                        { label: 'ColumnC', name: 'ColC' },
                    ]}
                />
            ))
            .toJSON();

        expect(header).toMatchSnapshot();

        expect(mount((
            <table>
                <TableHeader
                    columnConfig={[
                        { label: <Typography variant="h3">ColumnD</Typography>, name: 'ColD' },
                        { label: <Typography variant="h3">ColumnE</Typography>, name: 'ColE' },
                        { label: <Typography variant="h3">ColumnF</Typography>, name: 'ColF' },
                    ]}
                />
            </table>
        ))
            .find(Typography)
            .find('[variant="h3"]')
            .children()
            .contains('ColumnF')).toBe(true);
    });


});
