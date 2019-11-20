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
     * Fires when button is clicked.
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
    /**
     * Classes to be passed through to the component.
     */
    className?: string,
    /**
     * If set to "standard", the content of the button will be rendered as is. If set to "icon", the content is expected
     * to be a string and will determine what icon to render.
     */
    highlightStyle?: 'underline' | 'background',
    inline?: boolean,
    noSpread?: boolean,
    shadowless?: boolean,
    shouldPreserveContent?: boolean,
}
