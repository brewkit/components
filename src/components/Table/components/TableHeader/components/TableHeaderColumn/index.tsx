import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';


/**
 * The `<TableHeaderColumn />` component represents a single column in the `<TableHeader />`.
 */
function TableHeaderColumn({
    children,
    className,
    label,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-TableHeaderColumn',
        className,
    );


    const content = children || label;


    return (
        <th className={classes} {...otherProps}>
            {content}
        </th>
    );


}


export default TableHeaderColumn;
