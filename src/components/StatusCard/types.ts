export type Variants = 'standard' | 'compact';
export type Colors = 'info' | 'success' | 'danger';

export interface Props {

    /**
     * Any optional additional class names
     */
    className?: string,

    /**
     * The variant of card you want to display
     */
    variant: Variants,

    /**
     * The colors available
     */
    color: Colors,

    /**
     * The header text to display
     */
    header: string,

    /**
     * The name of the Material Icon to display
     */
    icon: string,

    /**
     * The body text to display
     */
    body: string,

    /**
     * Optional disabled attribute to disable component
     */
    disabled?: boolean,

    /**
     * Optional fill attribute to fill background color
     */
    fill?: boolean,

}
