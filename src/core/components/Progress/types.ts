export type Variants = 'circular' | 'horizontal';
export type Colors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
export type Sizes = 'small' | 'medium' | 'large' | 'inherit';


export type Props = {
    /**
     * Classes to be passed through to the component.
     */
    className?: string,
    /**
     * The overall display of the Progress indicator.
     */
    variant?: Variants,
    /**
     * The color of the progress indicator.
     */
    color?: Colors,
    /**
     * The size of the progress indicator.
     */
    size?: Sizes,
}
