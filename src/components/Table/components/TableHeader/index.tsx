import React, { ReactElement } from 'react';
import clsx from 'clsx';
import TableHeaderColumn from './components/TableHeaderColumn';
import { Props as ColProps } from './components/TableHeaderColumn/types';
import TableRow from '../TableRow';
import { Props } from './types';


/**
 * The `<TableHeader />` component represents the standard header of a `<Table />` component.
 */
function TableHeader({
    children,
    className,
    columnConfig,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-TableHeader',
        className,
    );


    const content = children ?? (columnConfig?.map((colData: ColProps, index: number) => (
        <TableHeaderColumn key={index} {...colData} />
    )));


    return (
        <thead className={classes} {...otherProps}>
            <TableRow>
                {content}
            </TableRow>
        </thead>
    );


}


TableHeader.Column = TableHeaderColumn;


export default TableHeader;
