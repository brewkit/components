import React, {Node, ReactNode} from "react";

export type Variants = 'standard' | 'icon';
export type Colors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
export type Sizes = 'small' | 'medium' | 'large';


export interface Props {
    /**
     * The content inside the tabs to be rendered or the icon to render if `variant="icon"`. Usually just a string, but can be any valid JSX.
     */
    children?: ReactNode,
    /**
     * Classes to be passed through to the component.
     */
    className?: string,
}
