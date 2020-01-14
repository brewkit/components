import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';
import TableRow from '../TableRow';


/**
 * The `<TableBody />` component represents the standard body of a `<Table />` component.
 */
function TableBody({
    className,
    children,
    rows,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-TableBody',
        className,
    );


    const content = children || (rows?.map((row: ReactElement[], index: number) => (
        <TableRow cells={row} key={index} />
    )));


    return (
        <tbody className={classes} {...otherProps}>
            {content}
        </tbody>
    );


}


export default TableBody;
