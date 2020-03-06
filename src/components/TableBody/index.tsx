import React from 'react';
import clsx from 'clsx';
import MuiTableBody from '@material-ui/core/TableBody';
import { Props } from './types';

const TableBody = React.forwardRef(({ className, ...props }: Props, ref: React.Ref<any>): React.ReactElement => {

    const classes = clsx(
        'brew-Table__body',
        className,
    );

    return (
        <MuiTableBody {...props} className={classes} ref={ref} />
    );


});

TableBody.displayName = 'BrewkitTableBody';

export default TableBody;
