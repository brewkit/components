import { ReactNode } from 'react';

export interface Props {
    className?: string,
    children?: ReactNode,
    variant?: 'primary' | 'secondary',
}
