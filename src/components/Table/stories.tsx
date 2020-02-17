import React, { ReactElement, ReactNode } from 'react';
import { object, text } from '@storybook/addon-knobs';
import Flag from '@components/Flag';
import { ColumnPropsWithName, RowData } from './components/TableRow/types';
import Table from './index';


export default {
    component: Table,
    parameters: {
        componentSubtitle: <Flag color="warning">In Development</Flag>,
    },
    title: 'In Development|Display/Table',
};


export const General = (): ReactElement => {


    const colExample = [
        {
            label: 'Column A',
            name: 'ColA',
        },
        {
            label: 'Column B',
            name: 'ColB',
        },
        {
            label: 'Column C',
            name: 'ColC',
        },
    ];

    const rowExample = [
        {
            ColA: 'row1-colA',
            ColB: 'row1-colB',
            ColC: 'row1-colC',
        },
        {
            ColA: 'row2-colA',
            ColB: 'row2-colB',
            ColC: 'row2-colC',
        },
        {
            ColA: 'row3-colA',
            ColB: 'row3-colB',
            ColC: 'row3-colC',
        },
    ];

    const className: string = text('className', 'churros');
    const children: ReactNode = text('children', '');
    const columnConfig: ColumnPropsWithName[] = object('columnConfig', colExample);
    const rows: RowData[] = object('rows', rowExample);


    return (
        <Table
            className={className}
            columnConfig={columnConfig}
            rows={rows}
        >
            {children}
        </Table>
    );


};


export const TableBody = (): ReactElement => {


    const colExample = [
        { name: 'ColD' },
        { name: 'ColE' },
        { name: 'ColF' },
    ];

    const rowExample = [
        {
            ColD: 'row1-colD',
            ColE: 'row1-colE',
            ColF: 'row1-colF',
        },
        {
            ColD: 'row2-colD',
            ColE: 'row2-colE',
            ColF: 'row2-colF',
        },
        {
            ColD: 'row3-colD',
            ColE: 'row3-colE',
            ColF: 'row3-colF',
        },
    ];

    const className: string = text('className', 'churros');
    const children: ReactNode = text('children', '');
    const columnConfig: ColumnPropsWithName[] = object('columnConfig', colExample);
    const rows: RowData[] = object('rows', rowExample);


    return (
        <Table>
            <Table.Body
                className={className}
                columnConfig={columnConfig}
                rows={rows}
            >
                {children}
            </Table.Body>
        </Table>
    );


};


export const TableHeader = (): ReactElement => {


    const colExample = [
        {
            label: 'Column G',
            name: 'ColG',
        },
        {
            label: 'Column H',
            name: 'ColH',
        },
        {
            label: 'Column I',
            name: 'ColI',
        },
    ];

    const className: string = text('className', 'churros');
    const children: ReactNode = text('children', '');
    const columnConfig: ColumnPropsWithName[] = object('columns', colExample);


    return (
        <Table>
            <Table.Header
                className={className}
                columnConfig={columnConfig}
            >
                {children}
            </Table.Header>
        </Table>
    );


};


export const TableHeaderColumn = (): ReactElement => {


    const className: string = text('className', 'churros');
    const children: ReactNode = text('children', '');
    const label: ReactNode = text('label', 'Header');
    const name: string = text('name', 'column');


    return (
        <Table>
            <Table.Header>
                <Table.Header.Column
                    className={className}
                    label={label}
                    name={name}
                >
                    {children}
                </Table.Header.Column>
            </Table.Header>
        </Table>
    );


};


export const TableRow = (): ReactElement => {


    const colExample = [
        { name: 'ColJ' },
        { name: 'ColK' },
        { name: 'ColL' },
    ];

    const rowExample = {
        ColJ: 'row1-colJ',
        ColK: 'row1-colK',
        ColL: 'row1-colL',
    };

    const className: string = text('className', 'churros');
    const children: ReactNode = text('children', '');
    const columnConfig: ColumnPropsWithName[] = object('columnConfig', colExample);
    const rowData: RowData = object('rowData', rowExample);


    return (
        <Table>
            <Table.Body>
                <Table.Row
                    className={className}
                    columnConfig={columnConfig}
                    rowData={rowData}
                >
                    {children}
                </Table.Row>
            </Table.Body>
        </Table>
    );


};


export const TableCell = (): ReactElement => {


    const className: string = text('className', 'churros');
    const children: ReactNode = text('children', 'cell');


    return (
        <Table>
            <Table.Body>
                <Table.Row>
                    <Table.Row.Cell
                        className={className}
                    >
                        {children}
                    </Table.Row.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );


};
