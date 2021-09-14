
import * as React from 'react';
import clsx from 'clsx';
import Table from '@material-ui/core/Table';
import styles from './styles';
import { Props } from './types';


export const TableComponent = React.forwardRef(({
    className,
    children,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = styles();
    const classnames = clsx(
        classes.brewTable,
        className,
    );


    return (
        <Table
            className={classnames}
            {...otherProps}
            ref={ref}
        >
            {children}
        </Table>
    );

});


TableComponent.displayName = 'Table';


export default TableComponent;
