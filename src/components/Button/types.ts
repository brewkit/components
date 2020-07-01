import React from 'react';
import { Colors as GenericColors, StyledParentComponent } from '@components/types';


export type Variants = (
    | 'standard'
    | 'text'
);


export type Colors = (
    | GenericColors
    | 'link'
);


export type Sizes = (
    | 'small'
    | 'medium'
    | 'large'
);


export interface Props extends StyledParentComponent, React.ButtonHTMLAttributes<HTMLButtonElement> {

    /**
     * Fires when button is clicked.
     */
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,

    /**
     * Determines the display style of the button
     * @default 'standard'
     */
    variant?: Variants,

    /**
     * The color of the button.
     * @default 'primary'
     */
    color?: Colors,

    /**
     * The size of the button.
     * @default 'medium'
     */
    size?: Sizes,

    /**
     * If `true`, will disable the button.
     * @default false
     */
    isDisabled?: boolean,

    /**
     * If `true`, the button will be disabled and show a spinner.
     * @default false
     */
    isLoading?: boolean,

    /**
     * Reduces the padding of the button.
     * @default false
     */
    isCompact?: boolean,

    /**
     * Makes the button a full-width block element.
     * @default false
     */
    isFluid?: boolean,

    /**
     * Rounds the corners of the button to make a circle.
     * @default false
     */
    isCircular?: boolean,

    /**
     * The type of the button.
     * @default 'button'
     */
    type?: 'button' | 'submit' | 'reset',

    /**
     * JSX (preferably an Icon) to be injected before the children.
     */
    startIcon?: React.ReactNode,

    /**
     * JSX (preferably an Icon) to be injected after the children.
     */
    endIcon?: React.ReactNode,

    /**
     * Determines the component that is used to render. Accepts any React component, custom and HTML elements.
     */
    component?: React.ElementType,

}
