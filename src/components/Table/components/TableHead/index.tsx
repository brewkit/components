
import * as React from 'react';
import clsx from 'clsx';
import MuiTableHead from '@material-ui/core/TableHead';
import styles from './styles';
import { Props } from './types';


export const TableHeadComponent = React.forwardRef(({
    children,
    className,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = styles();
    const classnames = clsx(
        classes.brewTableHead,
        className,
    );


    return (
        <MuiTableHead
            className={classnames}
            {...otherProps}
            ref={ref}
        >
            {children}
        </MuiTableHead>
    );

});


export default TableHeadComponent;
