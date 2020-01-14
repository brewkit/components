import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


/**
 * The `<TableRow />` component
 */
function TableRow({
    className,
    children,
    cells,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-TableRow',
        className,
    );


    const data = children || (cells?.map((cell: ReactElement, index: number) => (
        <td key={index}>
            {cell}
        </td>
    )));


    return (
        <tr className={classes} {...otherProps}>
            {data}
        </tr>
    );


}


export default TableRow;
