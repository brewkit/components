import React from 'react';
import clsx from 'clsx';
import MuiTableCell from '@material-ui/core/TableCell';
import { Props } from './types';


const TableCell = React.forwardRef(({ className, ...props }: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = {
        alignLeft: 'brew-TableCell--isLeftAligned',
        alignCenter: 'brew-TableCell--isCenterAligned',
        alignRight: 'brew-TableCell--isRightAligned',
        alignJustify: 'brew-TableCell--isJustifyAligned',
    };

    const classNames = clsx(
        'brew-TableCell',
        className,
    );

    return (
        <MuiTableCell {...props} classes={classes} className={classNames} ref={ref} />
    );


});

TableCell.displayName = 'TableCell';

export default TableCell;
