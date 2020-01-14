import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Table from './index';
import TableBody from './components/TableBody';
import TableHeader from './components/TableHeader';
import TableHeaderColumn from './components/TableHeader/components/TableHeaderColumn';
import TableRow from './components/TableRow';
import Typography from '../Typography';


describe('Table', () => {

    it('Renders correctly', () => {
        const content = renderer
            .create((
                <Table>
                    <TableHeader>
                        <TableHeaderColumn>Column1</TableHeaderColumn>
                        <TableHeaderColumn>Column2</TableHeaderColumn>
                        <TableHeaderColumn>Column3</TableHeaderColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <td>Row1-Col1</td><td>Row1-Col2</td><td>Row1-Col3</td>
                        </TableRow>
                        <TableRow>
                            <td>Row2-Col1</td><td>Row2-Col2</td><td>Row2-Col3</td>
                        </TableRow>
                    </TableBody>
                </Table>
            ))
            .toJSON();
        expect(content).toMatchSnapshot();
    });

    it('Includes custom className', () => {
        const className = `class-${String(Math.floor(Math.random() * 1000))}`;
        const content = shallow((
            <Table className={className}>
                <TableHeader>
                    <TableHeaderColumn>Column1</TableHeaderColumn>
                    <TableHeaderColumn>Column2</TableHeaderColumn>
                    <TableHeaderColumn>Column3</TableHeaderColumn>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <td>Row1-Col1</td><td>Row1-Col2</td><td>Row1-Col3</td>
                    </TableRow>
                    <TableRow>
                        <td>Row2-Col1</td><td>Row2-Col2</td><td>Row2-Col3</td>
                    </TableRow>
                </TableBody>
            </Table>
        ));

        expect(content.hasClass(className)).toBe(true);
        expect(content.hasClass('brew-Table')).toBe(true);
    });


});

// eslint-disable-next-line max-lines-per-function
describe('Table Props', () => {


    it('Renders "columns" prop correctly', () => {
        const content = renderer
            .create((
                <Table
                    columns={[
                        { label: 'ColumnA' },
                        { label: 'ColumnB' },
                        { label: 'ColumnC' },
                    ]}
                />
            ))
            .toJSON();
        expect(content).toMatchSnapshot();

        expect(mount((
            <Table
                columns={[
                    { label: <Typography variant="body1">ColumnA</Typography> },
                    { label: <Typography variant="body1">ColumnB</Typography> },
                    { label: <Typography variant="body1">ColumnC</Typography> },
                ]}
            />
        ))
            .find(Typography)
            .find('[variant="body1"]')
            .children()
            .contains('ColumnA')).toBe(true);
    });


    it('Renders "rows" prop correctly', () => {
        const content = renderer
            .create((
                <Table
                    rows={[
                        ['row1-col1', 'row1-col2', 'row1-col3'],
                        ['row2-col1', 'row2-col2', 'row2-col3'],
                        ['row3-col1', 'row3-col2', 'row3-col3'],
                    ]}
                />
            ))
            .toJSON();
        expect(content).toMatchSnapshot();

        expect(mount((
            <Table
                rows={[
                    [
                        <Typography key="row1-col1" variant="body2">Row1-Col1</Typography>,
                        <Typography key="row1-col2" variant="body2">Row1-Col2</Typography>,
                        <Typography key="row1-col3" variant="body2">Row1-Col3</Typography>,
                    ],
                    [
                        <Typography key="row2-col1" variant="body2">Row2-Col1</Typography>,
                        <Typography key="row2-col2" variant="body2">Row2-Col2</Typography>,
                        <Typography key="row2-col3" variant="body2">Row2-Col3</Typography>,
                    ],
                    [
                        <Typography key="row3-col1" variant="body2">Row3-Col1</Typography>,
                        <Typography key="row3-col2" variant="body2">Row3-Col2</Typography>,
                        <Typography key="row3-col3" variant="body2">Row3-Col3</Typography>,
                    ],
                ]}
            />
        ))
            .find(Typography)
            .find('[variant="body2"]')
            .children()
            .contains('Row3-Col3')).toBe(true);
    });

    it('Renders "columns" and "rows" prop correctly simultaneously', () => {
        const content = renderer
            .create((
                <Table
                    columns={[
                        { label: 'ColumnX' },
                        { label: 'ColumnY' },
                        { label: 'ColumnZ' },
                    ]}
                    rows={[
                        ['row1-colX', 'row1-colX', 'row1-colX'],
                        ['row2-colY', 'row2-colY', 'row2-colY'],
                        ['row3-colZ', 'row3-colZ', 'row3-colZ'],
                    ]}
                />
            ))
            .toJSON();
        expect(content).toMatchSnapshot();

        expect(mount((
            <Table
                columns={[
                    { label: <Typography variant="h3">ColumnX</Typography> },
                    { label: <Typography variant="h3">ColumnY</Typography> },
                    { label: <Typography variant="h3">ColumnZ</Typography> },
                ]}
                rows={[
                    [
                        <Typography key="row1-colx" variant="body2">Row1-ColX</Typography>,
                        <Typography key="row1-coly" variant="body2">Row1-ColY</Typography>,
                        <Typography key="row1-colz" variant="body2">Row1-ColZ</Typography>,
                    ],
                    [
                        <Typography key="row2-colx" variant="body2">Row2-ColX</Typography>,
                        <Typography key="row2-coly" variant="body2">Row2-ColY</Typography>,
                        <Typography key="row2-colz" variant="body2">Row2-ColZ</Typography>,
                    ],
                    [
                        <Typography key="row3-colx" variant="body2">Row3-ColX</Typography>,
                        <Typography key="row3-coly" variant="body2">Row3-ColY</Typography>,
                        <Typography key="row3-colz" variant="body2">Row3-ColZ</Typography>,
                    ],
                ]}
            />
        ))
            .find(Typography)
            .find('[variant="body2"]')
            .children()
            .contains('Row2-ColY')).toBe(true);
    });


});
