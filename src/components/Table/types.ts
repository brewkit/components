import React from 'react';
import { StyledParentComponent } from '@components/types';

export type Padding = 'default' | 'none';

export type Size = 'small' | 'medium';

export type TableBaseProps = React.TableHTMLAttributes<HTMLTableElement>;

export interface Props extends StyledParentComponent {
    component?: React.ElementType<TableBaseProps>,
}
