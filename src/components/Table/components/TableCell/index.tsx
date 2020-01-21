import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { Props } from './types';


/**
 * The `<TableCell />` component represents a single cell in a `<TableRow />`
 */
function TableCell({
    as,
    className,
    children,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-TableCell',
        className,
    );


    let CellElement: keyof JSX.IntrinsicElements = 'td';
    if (as) CellElement = as;


    return (
        <CellElement className={classes} {...otherProps}>
            {children}
        </CellElement>
    );


}


export default TableCell;
