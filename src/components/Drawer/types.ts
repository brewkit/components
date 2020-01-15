import { ReactNode } from 'react';


export type Anchors = 'top' | 'right' | 'bottom' | 'left';


export interface Props {

    /**
     * Where to position the drawer
     */
    anchorFrom: Anchors,

    /**
     * Children passed to the component (JSX, String)
     */
    children?: ReactNode,

    /**
     * Custom class to provide component
     */
    className?: string,

    /**
     * Controlled prop to determine drawer open state
     */
    isOpen?: boolean,

    /**
     * Default open state drawer
     */
    isDefaultOpen?: boolean,

    /**
     * Function passed to handle closing the drawer in a controlled state
     */
    onCloseDrawer?: () => void,

}
