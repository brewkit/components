import React from 'react';


/**
 * Utility type for converting arrays to usable types to help with maintaining Storybook
 */
// eslint-disable-next-line @typescript-eslint/generic-type-naming
export type ElementType<T extends readonly unknown[]> = T extends readonly (infer ElementType)[] ? ElementType : never;


/**
 * Color options to be used throughout the component library
 */
export const Colors = [
    'primary',
    'secondary',
    'tertiary',
    'success',
    'danger',
    'warning',
    'info',
    'light',
    'dark',
];


export interface StyledComponent {

    /**
     * Additional classes to add to the underlying element
     */
    className?: string,

    /**
     * A ref to attach to the underlying element
     */
    ref?: React.Ref<unknown>,

    /**
     * CSS properties to add to the underlying element
     */
    style?: React.CSSProperties,

}


export interface StyledParentComponent extends StyledComponent{

    /**
     * The content of the component
     */
    children?: React.ReactNode,

}
