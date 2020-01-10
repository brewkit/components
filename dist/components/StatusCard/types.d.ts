export declare type Variants = 'standard' | 'compact';
export declare type Colors = 'info' | 'success' | 'danger';
export interface Props {
    className?: string;
    variant: Variants;
    color: Colors;
    header: string;
    icon: string;
    body: string;
    isDisabled?: boolean;
    isFilled?: boolean;
}
