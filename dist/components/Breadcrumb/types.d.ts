import { ReactNode } from 'react';
export interface Crumb {
    title: ReactNode;
    url?: string;
}
export interface Props {
    className?: string;
    divider?: ReactNode;
    crumbs: Array<Crumb>;
}
