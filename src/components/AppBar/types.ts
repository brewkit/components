import React from 'react';
import { Colors } from '../types';


export interface Props {
    anchorFrom?: 'top' | 'right' | 'bottom' | 'left',
    className?: string,
    children?: React.ReactNode,
    color?: Colors,
}
