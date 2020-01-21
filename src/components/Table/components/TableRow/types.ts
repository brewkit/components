import { ReactNode } from 'react';
import { Props as ColumnProps } from '../TableHeader/components/TableHeaderColumn/types';


export interface RowData {
    [key: string]: ReactNode
}


export interface Props {


    /**
     * Any custom content to fill the TableRow that is different than default
     */
    children?: ReactNode,


    /**
     * The className for the TableRow
     */
    className?: string,


    /**
     * The configuration that defines the columns in the TableRow
     */
    columnConfig?: ColumnProps[],


    /**
     * The row data used to populate the TableRow
     */
    rowData?: RowData,


}
