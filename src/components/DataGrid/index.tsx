
import * as React from 'react';
import clsx from 'clsx';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import styles from './styles';
import { Props } from './types';


export const DataGridComponent = React.forwardRef(({
    className,
    rows,
    columns,
    pageSize,
    checkboxSelection,
    disableSelectionOnClick,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = styles();
    const classnames = clsx(
        classes.dataGrid,
        className,
    );


    return (
        <React.Fragment>
            <DataGrid
                checkboxSelection={checkboxSelection}
                className={classnames}
                columns={columns}
                disableSelectionOnClick={disableSelectionOnClick}
                pageSize={pageSize}
                ref={ref}
                rows={rows}
                {...otherProps}
            />
        </React.Fragment>
    );

});


DataGridComponent.displayName = 'DataGrid';


export default DataGridComponent;
