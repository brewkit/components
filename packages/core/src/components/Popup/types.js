/** @flow */


import type { Node } from 'react';


export type Props = {
    children?: Node,
    className?: string,
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link',
    content: string,
}
