import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import TableCell from './components/TableCell';
import { Props } from './types';


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
        if (rowData && col?.name && rowData[col.name]) {
            const cellData = rowData[col.name];
            if (cellData && typeof cellData === 'object' && 'label' in cellData) {
                return <TableCell key={index} {...cellData} />;
            }
            return (
                <TableCell key={index}>
                    {cellData}
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


TableRow.Cell = TableCell;

export default TableRow;
