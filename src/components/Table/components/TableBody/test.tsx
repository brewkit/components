import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import TableBody from './index';
import Typography from '../../../Typography';


describe('Table Body', () => {


    it('Renders correctly', () => {
        const content = renderer
            .create((
                <TableBody>
                    <tr>
                        <td>Row1-Col1</td><td>Row1-Col2</td><td>Row1-Col3</td>
                    </tr>
                    <tr>
                        <td>Row2-Col1</td><td>Row2-Col2</td><td>Row2-Col3</td>
                    </tr>
                </TableBody>
            ))
            .toJSON();

        expect(content).toMatchSnapshot();
    });


    it('Includes custom className', () => {
        const className = `class-${String(Math.floor(Math.random() * 1000))}`;
        const content = shallow((
            <table>
                <TableBody className={className}>
                    <tr>
                        <td>Row1-Col1</td><td>Row1-Col2</td><td>Row1-Col3</td>

                    </tr>
                    <tr>
                        <td>Row2-Col1</td><td>Row2-Col2</td><td>Row2-Col3</td>
                    </tr>
                </TableBody>
            </table>
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


    it('Renders `columnConfig` and `rowData` props correctly', () => {
        const content = renderer
            .create((
                <TableBody
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
                        }
                    ]}
                />
            ))
            .toJSON();

        expect(content).toMatchSnapshot()

        expect(mount((
            <table>
                <TableBody
                    columnConfig={[
                        { name: 'ColD' },
                        { name: 'ColE' },
                        { name: 'ColF' },
                    ]}
                    rows={[
                        {
                            ColD: <Typography variant="body1">Row1-ColD</Typography>,
                            ColE: <Typography variant="body1">Row1-ColE</Typography>,
                            ColF: <Typography variant="body1">Row1-ColF</Typography>,                    
                        },
                        {
                            ColD: <Typography variant="body1">Row2-ColD</Typography>,
                            ColE: <Typography variant="body1">Row2-ColE</Typography>,
                            ColF: <Typography variant="body1">Row2-ColF</Typography>,                    
                        },
                        {
                            ColD: <Typography variant="body1">Row3-ColD</Typography>,
                            ColE: <Typography variant="body1">Row3-ColE</Typography>,
                            ColF: <Typography variant="body1">Row3-ColF</Typography>,                    
                        }
                    ]}
                />
            </table>
        ))
            .find(Typography)
            .find('[variant="body1"]')
            .children()
            .contains('Row2-ColE')).toBe(true);
    });


});
