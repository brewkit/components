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
        <MuiTable className={classes} ref={ref} {...props} />
    );

});


Table.displayName = 'BrewkitTable';

export default Table;
