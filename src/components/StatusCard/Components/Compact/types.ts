
export interface Props {
    /**
     * Optional additional class names
     */
    className?: string,
    /**
     * Color to render
     */
    color: 'info' | 'success' | 'danger',
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
    disabled?: boolean,
    /**
     * Optional fill attribute to display background color
     */
    fill?: boolean
}
