import React, { ReactElement } from 'react';
import clsx from 'clsx';
import TableCell from '../../../TableRow/components/TableCell';
import { Props } from './types';


/**
 * The `<TableHeaderColumn />` component represents a single column in the `<TableHeader />`.
 */
function TableHeaderColumn({
    children,
    className,
    label,
    name,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-TableHeaderColumn',
        className,
    );


    const content = children || label;


    return (
        <TableCell as="th" className={classes} {...otherProps}>
            {content}
        </TableCell>
    );


}


export default TableHeaderColumn;
