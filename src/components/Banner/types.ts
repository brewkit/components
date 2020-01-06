import { ReactNode } from 'react';


export type Variants = 'major' | 'minor' | 'alert';
export type Colors = 'success' | 'danger' | 'warning' | 'info';


export interface Props {
    children?: ReactNode,
    className?: string,
    color: Colors,
    iconName: string,
    hasBodyInfo?: string,
    isLoading?: boolean,
    variant: Variants,
}
