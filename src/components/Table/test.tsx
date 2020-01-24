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
                    <thead>
                        <th>Column1</th>
                        <th>Column2</th>
                        <th>Column3</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Row1-Col1</td><td>Row1-Col2</td><td>Row1-Col3</td>
                        </tr>
                        <tr>
                            <td>Row2-Col1</td><td>Row2-Col2</td><td>Row2-Col3</td>
                        </tr>
                    </tbody>
                </Table>
            ))
            .toJSON();
        expect(content).toMatchSnapshot();
    });


    it('Includes custom className', () => {
        const className = `class-${String(Math.floor(Math.random() * 1000))}`;
        const content = shallow((
            <Table className={className}>
                <thead>
                    <th>Column1</th>
                    <th>Column2</th>
                    <th>Column3</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Row1-Col1</td><td>Row1-Col2</td><td>Row1-Col3</td>
                    </tr>
                    <tr>
                        <td>Row2-Col1</td><td>Row2-Col2</td><td>Row2-Col3</td>
                    </tr>
                </tbody>
            </Table>
        ));

        expect(content.hasClass(className)).toBe(true);
        expect(content.hasClass('brew-Table')).toBe(true);
    });


});

describe('Table Props - `as`', () => {


    it('Renders `as` prop', () => {
        const content = renderer
            .create((
                <Table
                    as="div"
                    children="Hello"
                />
            ))
            .toJSON();
        expect(content).toMatchSnapshot();
    });


    it('Includes custom className', () => {
        const className = `class-${String(Math.floor(Math.random() * 1000))}`;
        const content = shallow((
            <Table
                as="p"
                children={<span>Hello</span>}
                className={className}
            />
        ));

        expect(content.hasClass(className)).toBe(true);
        expect(content.hasClass('brew-Table')).toBe(true);
    });


});


describe('Table Props - `columnConfig` only', () => {


    it('Renders `columnConfig` prop correctly (`label` and `name`)', () => {
        const content = renderer
            .create((
                <Table
                    columnConfig={[
                        {
                            label: 'ColumnA',
                            name: 'ColA',
                        },
                        {
                            label: 'ColumnB',
                            name: 'ColB',
                        },
                        {
                            label: 'ColumnC',
                            name: 'ColC',
                        },
                    ]}
                />
            ))
            .toJSON();
        expect(content).toMatchSnapshot();

        const mounted = mount(
            <Table
                columnConfig={[
                    {
                        label: <Typography variant="body1">ColumnA</Typography>,
                        name: 'ColA',
                    },
                    {
                        label: <Typography variant="body1">ColumnB</Typography>,
                        name: 'ColB',
                    },
                    {
                        label: <Typography variant="body1">ColumnC</Typography>,
                        name: 'ColC',
                    },
                ]}
            />
        );

        expect(mounted
            .find(Typography)
            .find('[variant="body1"]')
            .children()
            .contains('ColumnA')).toBe(true);
    });


});


describe('Table Props - `columnConfig` and `rows`', () => {


    it('Renders `rows` prop (without objects) correctly', () => {
        const content = renderer
            .create((
                <Table
                    columnConfig={[
                        { name: 'ColA' },
                        { name: 'ColB' },
                        { name: 'ColC' },
                    ]}
                    rows={[
                        {
                            ColA: 'Row1-ColA',
                            ColB: 'Row1-ColB',
                            ColC: 'Row1-ColC',
                        },
                        {
                            ColA: 'Row2-ColA',
                            ColB: 'Row2-ColB',
                            ColC: 'Row2-ColC',
                        },
                        {
                            ColA: 'Row3-ColA',
                            ColB: 'Row3-ColB',
                            ColC: 'Row3-ColC',
                        },
                    ]}
                />
            ))
            .toJSON();
        expect(content).toMatchSnapshot();

        expect(mount((
            <Table
                columnConfig={[
                    {
                        label: <Typography variant="h3">ColumnX</Typography>,
                        name: 'ColX',
                    },
                    {
                        label: <Typography variant="h3">ColumnY</Typography>,
                        name: 'ColY',
                    },
                    {
                        label: <Typography variant="h3">ColumnZ</Typography>,
                        name: 'ColZ',
                    },
                ]}
                rows={[
                    {
                        ColX: <Typography key="row1-colx" variant="body2">Row1-ColX</Typography>,
                        ColY: <Typography key="row1-coly" variant="body2">Row1-ColY</Typography>,
                        ColZ: <Typography key="row1-colz" variant="body2">Row1-ColZ</Typography>,
                    },
                    {
                        ColX: <Typography key="row2-colx" variant="body2">Row2-ColX</Typography>,
                        ColY: <Typography key="row2-coly" variant="body2">Row2-ColY</Typography>,
                        ColZ: <Typography key="row2-colz" variant="body2">Row2-ColZ</Typography>,
                    },
                    {
                        ColX: <Typography key="row3-colx" variant="body2">Row3-ColX</Typography>,
                        ColY: <Typography key="row3-coly" variant="body2">Row3-ColY</Typography>,
                        ColZ: <Typography key="row3-colz" variant="body2">Row3-ColZ</Typography>,
                    },
                ]}
            />
        ))
            .find(Typography)
            .find('[variant="body2"]')
            .children()
            .contains('Row2-ColY')).toBe(true);
    });


    it('Renders `rows` prop (with objects) correctly', () => {
        const content = renderer
            .create((
                <Table
                    columnConfig={[
                        { name: 'ColA' },
                        { name: 'ColB' },
                        { name: 'ColC' },
                    ]}
                    rows={[
                        {
                            ColA: 'Row1-ColA',
                            ColB: {
                                colspan: 2,
                                label: 'Row1-ColB&ColC',
                            },
                        },
                        {
                            ColA: 'Row2-ColA',
                            ColB: 'Row2-ColB',
                            ColC: 'Row2-ColC',
                        },
                    ]}
                />
            ))
            .toJSON();
        expect(content).toMatchSnapshot();

        const className = `class-${String(Math.floor(Math.random() * 1000))}`;
        const mounted = mount(
            <Table
                columnConfig={[
                    {
                        label: <Typography variant="h3">ColumnY</Typography>,
                        name: 'ColY',
                    },
                    {
                        label: <Typography variant="h3">ColumnZ</Typography>,
                        name: 'ColZ',
                    },
                ]}
                rows={[
                    {
                        ColX: <Typography key="row2-colx" variant="body2">Row1-ColX</Typography>,
                        ColY: {
                            className: className,
                            label: <Typography key="row2-coly" variant="body2">Row1-ColY</Typography>,
                        },
                        ColZ: <Typography key="row2-colz" variant="body2">Row1-ColZ</Typography>,
                    },
                    {
                        ColX: <Typography key="row3-colx" variant="body2">Row2-ColX</Typography>,
                        ColY: <Typography key="row3-coly" variant="body2">Row2-ColY</Typography>,
                        ColZ: <Typography key="row3-colz" variant="body2">Row2-ColZ</Typography>,
                    },
                ]}
            />
        );

        expect(mounted
            .find(Typography)
            .find('[variant="body2"]')
            .children()
            .contains('Row2-ColZ')).toBe(true);

        expect(mounted
            .find(`.${className}`)
            .children()
            .contains('Row1-ColY')).toBe(true);
    });


});


describe('Full Table Suite', () => {


    it('Renders correctly', () => {
        const content = renderer
            .create((
                <Table>
                    <TableHeader>
                        <TableHeaderColumn label='Column1' />
                        <TableHeaderColumn label='Column2' />
                        <TableHeaderColumn label='Column3' />
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


});