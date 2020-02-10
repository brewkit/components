import React, { ReactElement } from 'react';
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
}: Props): ReactElement {


    const classes = clsx(
        'brew-TableCell',
        className,
    );


    const CellElement: 'td' | 'th' = as ?? 'td';


    const content = (children ?? label) ?? '';


    return (
        <CellElement className={classes} {...otherProps}>
            {content}
        </CellElement>
    );


}


export default TableCell;
