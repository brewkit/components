export type Colors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'inherit';
export type Sizes = 'small' | 'medium' | 'large' | 'inherit';


export interface Props {

    /**
     * Classes to be passed through to the component.
     */
    className?: string,

    /**
     * Determines the icon to render.
     */
    children: string,

    /**
     * Determines the color of the rendered Icon.
     */
    color?: Colors,

    /**
     * Determines the size of the rendered Icon.
     */
    size?: Sizes,

}
