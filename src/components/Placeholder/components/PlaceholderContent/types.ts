import { ReactNode } from 'react';


export interface Props {

    /**
     * Classes to be passed through to the component.
     */
    className?: string,

    /**
     * Any custom content to fill the placeholder that is different than default
     */
    children?: ReactNode,

}
