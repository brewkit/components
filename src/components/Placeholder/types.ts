import { ReactNode } from 'react';


export interface Props {

    /**
     * Classes to be passed through to the component.
     */
    className?: string,

    /**
     * The icon or graphic to be displayed on top.
     */
    graphic?: string,

    /**
     * The title text of the placeholder.
     */
    title?: string,

    /**
     * The description text of the placeholder.
     */
    description?: string,

    /**
     * Any custom content to fill the placeholder that is different than default
     */
    children?: ReactNode,

}
