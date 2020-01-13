import { ReactNode } from 'react';
export declare type Colors = 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
export interface Props {
    children?: ReactNode;
    title?: ReactNode;
    className?: string;
    color?: Colors;
}
