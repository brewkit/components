import React from 'react';
import { StyledParentComponent } from '@components/types';

export type TableBodyBaseProps = React.HTMLAttributes<HTMLTableSectionElement>;

export interface Props extends StyledParentComponent {
    component?: React.ElementType<TableBodyBaseProps>,
}
