export type Colors = 'info' | 'success' | 'danger';

export interface Props {

    /**
     * Optional additional class names
     */
    className?: string,

    /**
     * The Material Icon to display
     */
    icon: string,

    /**
     * The color to render
     */
    color: Colors,

    /**
     * The header text to display
     */
    header: string,

    /**
     * The body text to display
     */
    body: string,

    /**
     * Optional disabled attribute to disable component
     */
    isDisabled?: boolean,

    /**
     * Optional fill attribute to fill background color
     */
    isFilled?: boolean,

}
