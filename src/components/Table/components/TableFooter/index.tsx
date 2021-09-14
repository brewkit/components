
import * as React from 'react';
import clsx from 'clsx';
import MuiTableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import styles from './styles';
import { Props } from './types';


export const TableBodyFooter = React.forwardRef(({
    hasPagination,
    className,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = styles();
    const classnames = clsx(
        classes.brewTableBody,
        className,
    );


    return (
        <MuiTableFooter
            className={classnames}
            {...otherProps}
            ref={ref}
        >
            {hasPagination &&
                <TablePagination count={100} rowsPerPage={10} page={1} onPageChange={() => console.log('hey')} />
            }
        </MuiTableFooter>
    );

});


export default TableBodyFooter;
