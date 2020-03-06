import React from 'react';
import MuiTableCell from '@material-ui/core/TableCell';
import MuiTableSortLabel from '@material-ui/core/TableSortLabel';
import { TableLevel2Context } from '../Table/context';
import { Props } from './types';
import clsx from 'clsx';


const TableCell = React.forwardRef(({ isSortable = false, sortDirection = false, className, children, ...props }: Props, ref: React.Ref<any>): React.ReactElement => {

    const tablelvl2 = React.useContext(TableLevel2Context);
    const { variant } = tablelvl2 || {};
    const isTableHeader = variant === 'head';
    console.log('isTableHeader', isTableHeader);

    const classes = {
        root: 'brew-Table__cell',
        alignLeft: 'brew-Table__cell--isLeftAligned',
        alignCenter: 'brew-Table__cell--isCenterAligned',
        alignRight: 'brew-Table__cell--isRightAligned',
        alignJustify: 'brew-Table__cell--isJustifyAligned',
        head: 'brew-Table__cell--head',
        body: 'brew-Table__cell--body',
    };

    const classNames = clsx(
        { 'brew-Table__cell--isSortable': isTableHeader && isSortable },
        { 'brew-Table__cell--isSorted': isTableHeader && isSortable && Boolean(sortDirection) },
        className,
    );

    const sortLabelClasses = {
        root: 'brew-Table__sortLabel',
        active: 'brew-Table__sortLabel--isActive',
        iconDirectionDesc: 'brew-Table__sortLabel--isSortedDesc',
        iconDirectionAsc: 'brew-Table__sortLabel--isSortedAsc',
    };

    return (
        <>
            <MuiTableCell  classes={classes} className={classNames} ref={ref} {...props}>
                {children}
                {isTableHeader && isSortable && (
                    <MuiTableSortLabel classes={sortLabelClasses} active={Boolean(sortDirection)} direction={sortDirection === false ? 'desc' : sortDirection} />
                )}
            </MuiTableCell>
        </>
    );


});

TableCell.displayName = 'BrewTableCell';

export default TableCell;
