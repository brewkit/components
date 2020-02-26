import React from 'react';
import clsx from 'clsx';
import { Props } from './types';
import MuiTable from '@material-ui/core/Table';


const Table = React.forwardRef(({ className, ...props }: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = clsx(
        'brew-Table',
        className,
    );

    return (
        <MuiTable {...props} className={classes} ref={ref} />
    );

});


Table.displayName = 'Table';

export default Table;
