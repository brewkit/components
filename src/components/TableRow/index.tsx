import React from 'react';
import clsx from 'clsx';
import { Props } from './types';
import MuiTableRow from '@material-ui/core/TableRow';

const TableRow = React.forwardRef(({ className, ...props }: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = {
        selected: 'brew-Table__row--isSelected',
        hover: 'brew-Table__row--isHovered',
    };

    const classNames = clsx(
        'brew-Table__row',
        className,
    );

    return (
        <MuiTableRow {...props} classes={classes} className={classNames} ref={ref} />
    );


});

TableRow.displayName = 'BrewTableRow';

export default TableRow;
