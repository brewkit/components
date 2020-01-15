import { ReactNode } from 'react';
import { Props as ColumnProps } from './components/TableHeader/components/TableHeaderColumn/types';


export interface Props {


    /**
     * The custom JSX element to use for the Table (otherwise, it uses `<table />`)
     */
    as?: keyof JSX.IntrinsicElements | null,


    /**
     * Any custom content to fill the TableHeader that is different than default
     */
    children?: ReactNode,


    /**
     * The className for the TableHeader
     */
    className?: string,


    /**
     * The column data used to populate the Table's header
     */
    columns?: ColumnProps[],


    /**
     * The row data used to populate the TableBody
     */
    rows?: ReactNode[][],


}
