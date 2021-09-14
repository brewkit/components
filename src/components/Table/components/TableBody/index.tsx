
import * as React from 'react';
import clsx from 'clsx';
import MuiTableBody from '@material-ui/core/TableBody';
import styles from './styles';
import { Props } from './types';


export const TableBodyComponent = React.forwardRef(({
    children,
    className,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = styles();
    const classnames = clsx(
        classes.brewTableBody,
        className,
    );


    return (
        <MuiTableBody
            className={classnames}
            {...otherProps}
            ref={ref}
        >
            {children}
        </MuiTableBody>
    );

});


export default TableBodyComponent;
