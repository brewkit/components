import React from 'react';
import { StyledParentComponent } from '@components/types';


export type Variants = 'h1' | 'h2' | 'h3' | 'body1' | 'body2' | 'label';
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


export interface Props extends StyledParentComponent {

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
    component?: React.ElementType,

    /**
     * A tab index to be passed to the underlying element
     */
    tabIndex?: number,

}
