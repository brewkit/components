/** @flow */


import type { Node } from 'react';


export type Props = {
    children?: Node,
    className?: string,
    variant?: 'standard' | 'icon',
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link',
    size?: 'small' | 'medium' | 'large',
    icon?: string,
    disabled?: boolean,
    isLoading?: boolean,
    isCompact?: boolean,
    isFluid?: boolean,
    isCircular?: boolean,
}
