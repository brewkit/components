import { ReactNode } from 'react';


export interface Props {

    /**
     * Classes to be passed through to the component.
     */
    className?: string,

    /**
     * Static JSX, controls open/close functionality.
     */
    anchorContent: ReactNode,

    /**
     * Boolean to determine if collapse action should occur.
     */
    isCollapsed?: boolean,

    /**
     * Any custom content to fill the collapsible component.
     */
    children: ReactNode,

}
