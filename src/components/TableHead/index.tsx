import React from 'react';
import MuiTableHead from '@material-ui/core/TableHead';
import { TableLevel2Context } from '../Table/context';
import { Props } from './types';


const TableHead = React.forwardRef(({ ...props }: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = {
        root: 'brew-Table__head',
    };

    const value = {
        variant: 'head',
    };

    return (
        <TableLevel2Context.Provider value={value}>
            <MuiTableHead classes={classes} ref={ref} {...props} />
        </TableLevel2Context.Provider>
    );


});

TableHead.displayName = 'TableHead';

export default TableHead;
