import { ReactNode } from 'react';


export type Props = {
    /**
     * The content to trigger a popup.
     */
    children?: ReactNode,
    /**
     * Classes to be passed through to the component.
     */
    className?: string,
    /**
     * The color of the popup.
     */
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link',
    /**
     * The content inside the popup to be rendered.
     */
    content: string,
    /**
     * The anchor position of the popup.
     */
    position?: 'left' | 'right' | 'top-center' | 'bottom-center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right',
    /**
     * If `true`, the wrapping element will be rendered as a `block` element instead of `inline-block`.
     */
    isBlock?: boolean,
    /**
     * If `true`, the popup content will not overflow the trigger content.
     */
    isConstrained?: boolean,
}