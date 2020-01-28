import { ReactNode } from 'react';

export interface Props {
    color?: 'danger' | 'info',
    className?: string,
    children?: ReactNode,
}
