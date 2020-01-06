

export type Variants = 'primary' | 'secondary';


export interface Props {

    /**
     * Classes to be passed through to the component.
     */
    className?: string,

    /**
     * Set to primary gives standard button. Set to secondary gives text button.
     */
    variant?: Variants,

    /**
     * Event to happen on click of action.
     */
    onClick?: any,

    /**
     * Text to display on the action button.
     */
    children?: string,

}
