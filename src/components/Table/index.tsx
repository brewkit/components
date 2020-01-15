import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


import TableBody from './components/TableBody';
import TableHeader from './components/TableHeader';
import TableRow from './components/TableRow';


/**
 * The `<Table />` component is used to build a responsive table.
 */
function Table({
    as,
    className,
    children,
    columns,
    rows,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-Table',
        className,
    );


    let TableElement: keyof JSX.IntrinsicElements = 'table';
    if (as) TableElement = as;


    const content = children || (
        <React.Fragment>
            <TableHeader columns={columns} />
            <TableBody rows={rows} />
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
