import React, { ElementType, ReactElement } from 'react';
import clsx from 'clsx';
import TableBody from './components/TableBody';
import TableHeader from './components/TableHeader';
import TableRow from './components/TableRow';
import { Props } from './types';


/**
 * The `<Table />` component is used to build a responsive table.
 */
function Table({
    as,
    className,
    children,
    columnConfig,
    rows,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-Table',
        className,
    );


    let TableElement: ElementType<any> = 'table';
    if (as) TableElement = as;


    const content = children || (
        <React.Fragment>
            <TableHeader columnConfig={columnConfig} />
            <TableBody columnConfig={columnConfig} rows={rows} />
        </React.Fragment>
    );


    return (
        <TableElement className={classes} {...otherProps}>
            {content}
        </TableElement>
    );


}


Table.Body = TableBody;
Table.Header = TableHeader;
Table.Row = TableRow;


export default Table;
