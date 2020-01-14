import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Table from '../../index';
import TableHeader from './index';
import TableHeaderColumn from './components/TableHeaderColumn';
import Typography from '../../../Typography';


describe('Table Header', () => {


    it('Renders correctly', () => {
        const header = renderer
            .create((
                <TableHeader>
                    <TableHeaderColumn>Column1</TableHeaderColumn>
                    <TableHeaderColumn>Column2</TableHeaderColumn>
                    <TableHeaderColumn>Column3</TableHeaderColumn>
                </TableHeader>
            )).toJSON();

        expect(header).toMatchSnapshot();
    });


    it('Includes custom className', () => {
        const className = `class-${String(Math.floor(Math.random() * 1000))}`;
        const content = shallow((
            <Table>
                <TableHeader className={className}>
                    <TableHeaderColumn>
                        Column4
                    </TableHeaderColumn>
                    <TableHeaderColumn>
                        Column5
                    </TableHeaderColumn>
                    <TableHeaderColumn>
                        Column6
                    </TableHeaderColumn>
                </TableHeader>
            </Table>
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


    it('Renders "columns" prop correctly', () => {
        const header = renderer
            .create((
                <TableHeader
                    columns={[
                        { label: 'ColumnA' },
                        { label: 'ColumnB' },
                        { label: 'ColumnC' },
                    ]}
                />
            ))
            .toJSON();

        expect(header).toMatchSnapshot();

        expect(mount((
            <Table>
                <TableHeader
                    columns={[
                        { label: <Typography variant="h3">ColumnA</Typography> },
                        { label: <Typography variant="h3">ColumnB</Typography> },
                        { label: <Typography variant="h3">ColumnC</Typography> },
                    ]}
                />
            </Table>
        ))
            .find(Typography)
            .find('[variant="h3"]')
            .children()
            .contains('ColumnB')).toBe(true);
    });

});
