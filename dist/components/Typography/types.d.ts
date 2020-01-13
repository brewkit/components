import { ReactNode } from 'react';
export declare type Variants = 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'label' | 'inherit';
export declare type Colors = ('primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'initial');
export declare type Alignments = 'inherit' | 'left' | 'center' | 'right' | 'justify';
export declare type Displays = 'initial' | 'block' | 'inline' | 'inline-block';
export interface Props {
    children: ReactNode;
    className?: string;
    variant?: Variants;
    color?: Colors;
    align?: Alignments;
    display?: Displays;
    shouldTruncate?: boolean;
    as?: keyof JSX.IntrinsicElements | null;
}
