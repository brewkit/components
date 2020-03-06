import React from 'react';
import { StyledParentComponent } from '../types';

export type TableCellBaseProps = React.HTMLAttributes<HTMLTableHeaderCellElement> & React.HTMLAttributes<HTMLTableDataCellElement>;

export interface Props extends StyledParentComponent {
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify',
    sortDirection?: 'asc' | 'desc' | false,
    isSortable?: boolean,
    component?: React.ElementType<TableCellBaseProps>,
}
