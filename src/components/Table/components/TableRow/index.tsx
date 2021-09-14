
import * as React from 'react';
import clsx from 'clsx';
import MuiTableRow from '@material-ui/core/TableRow';
import Collapse from '@material-ui/core/Collapse';
import styles from './styles';
import { Props } from './types';


export const TableRowComponent = React.forwardRef(({
    canCollapse,
    children,
    className,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = styles();
    const classnames = clsx(
        classes.brewTableRow,
        className,
    );


    return (
        <MuiTableRow
            className={classnames}
            {...otherProps}
            ref={ref}
        >
            {canCollapse
                ? (
                    <Collapse timeout="auto" unmountOnExit>
                        {children}
                    </Collapse>
                )
                : children
            }
        </MuiTableRow>
    );

});


export default TableRowComponent;
