import { ReactNode } from 'react';


export interface Props {

    /**
     * Classes to be passed through to the component.
     */
    className?: string,

    /**
     * Custom divider applied between crumbs.
     */
    divider?: ReactNode

    /**
     * Array of crumb content to display
     */
    crumbs: Array<{ title: ReactNode, url?: string }>,

}
