import { ReactNode } from 'react';
export declare type Alignments = 'left' | 'center' | 'right';
export interface Props {
    children?: ReactNode;
    className?: string;
    align?: Alignments;
}
