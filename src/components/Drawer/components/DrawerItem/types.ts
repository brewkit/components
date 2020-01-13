import { ReactNode } from 'react';


export interface Props {

    /**
     * Children passed to the component (JSX, String)
     */
    children?: ReactNode,

    /**
     * Custom class to provide component
     */
    className?: string,

    /**
     * onClick event to close Drawer
     */
    onClick?: any,
}
