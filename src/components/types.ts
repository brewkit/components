import React from 'react';


export interface StyledComponent {
    className?: string,
    ref?: React.Ref<unknown>,
    style?: React.CSSProperties,
}
