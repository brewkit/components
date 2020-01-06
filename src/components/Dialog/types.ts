import { ReactNode, MouseEvent } from 'react';

export interface Props {
    className?: string,
    children?: ReactNode,
    open: boolean,
    onBackgroundClick?: (event: MouseEvent) => any,
    variant?: 'info' | 'success' | 'warning' | 'danger',
}
