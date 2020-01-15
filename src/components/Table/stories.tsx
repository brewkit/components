import React, { ReactElement, ReactNode } from 'react';
import { object, text } from '@storybook/addon-knobs';
import Label from '../Label';
import { Props as ColumnProps } from './components/TableHeader/components/TableHeaderColumn/types';
import Table from './index';


export default {
    component: Table,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|Display/Table',
};


export const General = (): ReactElement => {


    const colExample = [
        { label: 'Column 1' },
        { label: 'Column 2' },
        { label: 'Column 3' },
    ];

    const rowExample = [
        ['row1-col1', 'row1-col2', 'row1-col3'],
        ['row2-col1', 'row2-col2', 'row2-col3'],
        ['row3-col1', 'row3-col2', 'row3-col3'],
    ];

    const className: string = text('className', 'churros');
    const children: ReactNode = text('children', '');
    const columns: ColumnProps[] = object('columns', colExample);
    const rows: ReactNode[][] = object('rows', rowExample);


    return (
        <Table
            className={className}
            columns={columns}
            rows={rows}
        >
            {children}
        </Table>
    );
};
