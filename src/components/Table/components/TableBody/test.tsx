import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Table from '../../index';
import TableBody from './index';
import TableRow from '../TableRow';
import Typography from '../../../Typography';


describe('Table Body', () => {


    it('Renders correctly', () => {
        const content = renderer
            .create((
                <TableBody>
                    <TableRow>
                        <td>Row1-Col1</td><td>Row1-Col2</td><td>Row1-Col3</td>
                    </TableRow>
                    <TableRow>
                        <td>Row2-Col1</td><td>Row2-Col2</td><td>Row2-Col3</td>
                    </TableRow>
                </TableBody>
            ))
            .toJSON();

        expect(content).toMatchSnapshot();
    });


    it('Includes custom className', () => {
        const className = `class-${String(Math.floor(Math.random() * 1000))}`;
        const content = shallow((
            <Table>
                <TableBody className={className}>
                    <TableRow>
                        <td>Row1-Col1</td><td>Row1-Col2</td><td>Row1-Col3</td>

                    </TableRow>
                    <TableRow>
                        <td>Row2-Col1</td><td>Row2-Col2</td><td>Row2-Col3</td>
                    </TableRow>
                </TableBody>
            </Table>
        ));

        expect(content.children().first()
            .shallow()
            .hasClass(className))
            .toBe(true);
        expect(content.children().first()
            .shallow()
            .hasClass('brew-TableBody'))
            .toBe(true);
    });


});


describe('Table Body Props', () => {


    it('Renders "rows" prop correctly', () => {
        const content = renderer
            .create((
                <TableBody
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
            <Table>
                <TableBody
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
            </Table>
        ))
            .find(Typography)
            .find('[variant="body2"]')
            .children()
            .contains('Row1-Col3')).toBe(true);
    });


});
