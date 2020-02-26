import React from 'react';
import MuiTableHead from '@material-ui/core/TableHead';
import { Props } from './types';


const TableHead = React.forwardRef(({ ...props }: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = {
        root: 'brew-TableHead',
    };

    return (
        <MuiTableHead {...props} classes={classes} ref={ref} />
    );


});

TableHead.displayName = 'TableHead';

export default TableHead;
