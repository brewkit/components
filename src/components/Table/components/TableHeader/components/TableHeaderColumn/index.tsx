import React, { ReactElement } from 'react';
import clsx from 'clsx';
import TableCell from '../../../TableCell';
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
        { [`brew-TableHeaderColumn--${name}`]: Boolean(name) },
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
