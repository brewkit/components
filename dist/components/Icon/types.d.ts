export declare type Colors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'inherit';
export declare type Sizes = 'small' | 'medium' | 'large' | 'inherit';
export interface Props {
    className?: string;
    children: string;
    color?: Colors;
    size?: Sizes;
}
