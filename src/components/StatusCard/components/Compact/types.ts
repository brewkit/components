export type Colors = 'info' | 'success' | 'danger';

export interface Props {

    /**
     * Optional additional class names
     */
    className?: string,

    /**
     * Color to render
     */
    color: Colors,

    /**
     * Header text to display
     */
    header: string,

    /**
     * Body text to display
     */
    body: string,

    /**
     * Optional disabled attribute to render disabled colors
     */
    isDisabled?: boolean,

    /**
     * Optional fill attribute to display background color
     */
    isFilled?: boolean,

}
