import React from 'react';
import { Colors } from '@components/types';


export interface Snackbar {
    position: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left',
    message: React.ReactNode,
    key?: React.Key,
    duration?: number,
    color: Colors,
    open: boolean,
    otherProps: any,
}


export interface PositionsObject {
    'top-right'?: Snackbar[],
    'top-left'?: Snackbar[],
    'top-center'?: Snackbar[],
    'bottom-right'?: Snackbar[],
    'bottom-center'?: Snackbar[],
    'bottom-left'?: Snackbar[],
}
