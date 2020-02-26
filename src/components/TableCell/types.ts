import React from 'react';
import { StyledParentComponent } from '@components/types';

export type TableCellBaseProps = React.HTMLAttributes<HTMLTableHeaderCellElement> & React.HTMLAttributes<HTMLTableDataCellElement>;

export interface Props extends StyledParentComponent {
    align?: 'inherit' | 'left' | 'center' | 'right' | 'justify',
    component?: React.ElementType<TableCellBaseProps>,
}
