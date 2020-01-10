export declare type Variants = 'circular' | 'horizontal';
export declare type Colors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
export declare type Sizes = 'small' | 'medium' | 'large' | 'inherit';
export interface Props {
    className?: string;
    variant?: Variants;
    color?: Colors;
    size?: Sizes;
}
