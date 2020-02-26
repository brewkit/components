import React from 'react';
import { StyledParentComponent } from '@components/types';

export type TableRowBaseProps = React.HTMLAttributes<HTMLTableRowElement>;

export interface Props extends StyledParentComponent {
    component?: React.ElementType<TableRowBaseProps>,
    hover?: boolean,
    selected?: boolean,
}
