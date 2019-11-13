import React, { ReactNode } from "react";

export type Variants = 'standard' | 'icon';
export type Colors = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
export type Sizes = 'small' | 'medium' | 'large';


export interface Props {
    /**
     * The content inside the button to be rendered or the icon to render if `variant="icon"`. Usually just a string, but can be any valid JSX.
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
    variant?: Variants,
    /**
     * The color of the button.
     */
    color?: Colors,
    /**
     * The size of the button.
     */
    size?: Sizes,
    /**
     * If `true`, will disable the button.
     */
    disabled?: boolean,
    /**
     * If `true`, the button will be disabled and show a spinner.
     */
    isLoading?: boolean,
    /**
     * Reduces the padding of the button.
     */
    isCompact?: boolean,
    /**
     * Makes the button a full-width block element.
     */
    isFluid?: boolean,
    /**
     * Rounds the corners of the button to make a circle.
     */
    isCircular?: boolean,
}
