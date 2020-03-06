import React from 'react';
import { StyledParentComponent } from '../types';

export type TableHeadBaseprops = React.HTMLAttributes<HTMLTableSectionElement>;

export interface Props extends StyledParentComponent {
    component?: React.ElementType<TableHeadBaseprops>,
}
