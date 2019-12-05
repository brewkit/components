import { ReactNode } from 'react';

export interface Props {
    error?: boolean,
    helperText?: string,
    label?: ReactNode,
    className?: string,
    children?: ReactNode,
};
