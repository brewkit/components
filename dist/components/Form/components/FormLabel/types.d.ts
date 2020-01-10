import { ReactNode } from 'react';
export interface Props {
    as?: 'label' | 'span' | 'div';
    className?: string;
    children?: ReactNode;
}
