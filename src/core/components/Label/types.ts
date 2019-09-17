import { ReactNode } from 'react';


export type Colors = 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';


export type Props = {
    /**
     * The optional content inside the divider.
     */
    children?: ReactNode,
    /**
     * Optional content to render as a title of the label.
     */
    title?: ReactNode,
    /**
     * Classes to be passed through to the component.
     */
    className?: string,
    /**
     * The color of the label.
     */
    color?: Colors,
}
