import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { RowData } from '../TableRow/types';
import { Props } from './types';


import TableRow from '../TableRow';


/**
 * The `<TableBody />` component represents the standard body of a `<Table />` component.
 */
function TableBody({
    className,
    children,
    columnConfig,
    rows,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-TableBody',
        className,
    );


    const content = children || (rows?.map((rowData: RowData, index: number) => (
        <TableRow columnConfig={columnConfig} key={index} rowData={rowData} />
    )));


    return (
        <tbody className={classes} {...otherProps}>
            {content}
        </tbody>
    );


}


export default TableBody;
