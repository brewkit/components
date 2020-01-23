import React, { HTMLProps, ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


/**
 * The `<TableCell />` component represents a single cell in a `<TableRow />`
 */
function TableCell({
    as,
    className,
    children,
    label,
    ...otherProps
}: Props & HTMLProps<HTMLTableCellElement>): ReactElement {


    const classes = clsx(
        'brew-TableCell',
        className,
    );


    let CellElement: 'td' | 'th' = 'td';
    if (as) CellElement = as;


    const content = children || label;


    return (
        <CellElement className={classes} {...otherProps}>
            {content}
        </CellElement>
    );


}


export default TableCell;
