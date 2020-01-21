import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { Props } from './types';


import TableCell from '../TableCell';


/**
 * The `<TableRow />` component
 */
function TableRow({
    className,
    children,
    columnConfig,
    rowData,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-TableRow',
        className,
    );


    const content = children || (columnConfig?.map((col, index) => {
        if (rowData && col.name && rowData[col.name]) {
            return (
                <TableCell className={`brew-TableCell--column-${col.name}`} key={index}>
                    {rowData[col.name]}
                </TableCell>
            );
        }
    }));

    
    return (
        <tr className={classes} {...otherProps}>
            {content}
        </tr>
    );


}


export default TableRow;
