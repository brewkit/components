import { ReactNode } from 'react';


export type Variants = 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'label' | 'inherit';
export type Colors = (
    'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'inherit'
);
export type Alignments = 'inherit' | 'left' | 'center' | 'right' | 'justify';
export type Displays = 'initial' | 'block' | 'inline' | 'inline-block';


export interface Props {

    /**
     * The content or text to be rendered. Usually just a string, but can be any valid JSX.
     */
    children: ReactNode,

    /**
     * Classes to be passed through to the component.
     */
    className?: string,

    /**
     * The overall style to be applied to the typography.
     */
    variant?: Variants,

    /**
     * The font color of the content.
     */
    color?: Colors,

    /**
     * The text alignment of the content.
     */
    align?: Alignments,

    /**
     * Can be used to override the display type of the wrapping element.
     */
    display?: Displays,

    /**
     * Adds text truncation (ellipsis) to the wrapping element.
     */
    shouldTruncate?: boolean,

    /**
     * Can be used to override the element used to wrap the content.
     */
    as?: keyof JSX.IntrinsicElements | null,

    /**
     * A tab index to be passed to the underlying element
     */
    tabIndex?: number,

}
