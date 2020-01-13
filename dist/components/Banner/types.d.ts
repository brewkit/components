import { ReactNode } from 'react';
export declare type Variants = 'major' | 'minor' | 'alert';
export declare type Colors = 'success' | 'danger' | 'warning' | 'info';
export interface Props {
    children?: ReactNode;
    className?: string;
    color: Colors;
    iconName?: string;
    description?: string;
    isLoading?: boolean;
    title?: string;
    variant: Variants;
}
