
import * as React from 'react';
import clsx from 'clsx';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import styles from './styles';
import { Props } from './types';


export const TableCellComponent = React.forwardRef(({
    children,
    className,
    sortData,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = styles();
    const classnames = clsx(
        classes.brewTableCell,
        className,
    );


    return (
        <TableCell
            className={classnames}
            {...otherProps}
            ref={ref}
        >
            {sortData &&
                <TableSortLabel active={sortData.active} direction={sortData.direction}>
                    {sortData.label}
                </TableSortLabel>
            }
            {children}
        </TableCell>
    );

});


export default TableCellComponent;
