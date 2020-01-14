import { ReactNode } from 'react';
import { Props as ColumnProps } from './components/TableHeaderColumn/types';


export interface Props {


    /**
     * Any custom content to fill the TableHeader that is different than default
     */
    children?: ReactNode,


    /**
     * The className for the TableHeader
     */
    className?: string,


    /**
     * The column data used to populate the TableHeader
     */
    columns?: ColumnProps[],


}
