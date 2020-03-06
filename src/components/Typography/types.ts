import React from 'react';
import { Colors as GenericColors, StyledParentComponent } from '../types';


export type Variants = (
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'body1'
    | 'body2'
    | 'subtitle1'
    | 'subtitle2'
    | 'caption'
    | 'button'
    | 'srOnly'
    | 'inherit'
);

export type Colors = (
    | GenericColors
    | 'inherit'
);

export type Alignments = (
    | 'inherit'
    | 'left'
    | 'center'
    | 'right'
    | 'justify'
);

export type Displays = (
    | 'initial'
    | 'block'
    | 'inline'
);


export interface Props extends StyledParentComponent {

    /**
     * The overall style to be applied to the typography.
     * @default 'body1'
     */
    variant?: Variants,

    /**
     * The font color of the content.
     */
    color?: Colors,

    /**
     * The text alignment of the content.
     * @default 'inherit'
     */
    align?: Alignments,

    /**
     * Can be used to override the display type of the wrapping element.
     * @default 'initial'
     */
    display?: Displays,

    /**
     * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
     * Note that text overflow can only happen with block or inline-block level elements
     * (the element needs to have a width in order to overflow).
     * @default false
     */
    shouldTruncate?: boolean,

    /**
     * If `true`, the text will have bottom margin.
     * @default false
     */
    hasGutter?: boolean,

    /**
     * Can be used to override the element used to wrap the content.
     */
    component?: React.ElementType,

}
