import React, { ReactNode } from 'react';
export declare type Variants = 'standard' | 'text' | 'icon';
export declare type Colors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
export declare type Sizes = 'small' | 'medium' | 'large';
export interface Props {
    children?: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
    variant?: Variants;
    color?: Colors;
    size?: Sizes;
    isDisabled?: boolean;
    isLoading?: boolean;
    isCompact?: boolean;
    isFluid?: boolean;
    isCircular?: boolean;
}
