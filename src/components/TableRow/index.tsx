import React from 'react';
import clsx from 'clsx';
import { Props } from './types';
import MuiTableRow from '@material-ui/core/TableRow';

const TableRow = React.forwardRef(({ className, ...props }: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = {
        selected: 'brew-TableRow--isSelected',
        hover: 'brew-TableRow--isHovered',
    };

    const classNames = clsx(
        'brew-TableRow',
        className,
    );

    return (
        <MuiTableRow {...props} classes={classes} className={classNames} ref={ref} />
    );


});

TableRow.displayName = 'TableRow';

export default TableRow;
