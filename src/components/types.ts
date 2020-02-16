import React from 'react';


export interface StyledComponent {

    /**
     * Additional classes to add to the underlying element
     */
    className?: string,
    ref?: React.Ref<unknown>,
    style?: React.CSSProperties,
}
