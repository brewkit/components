import { HTMLProps, ReactNode } from 'react';
import { Props as ColumnProps } from '../TableHeader/components/TableHeaderColumn/types';
import { Props as CellProps } from './components/TableCell/types';


export interface ColumnPropsWithName extends ColumnProps {

    /**
     * The name of the column
     */
    name: string,


}


export interface RowData {

    /**
     * Each key is the name of a column and represents a cell in a row
     */
    [key: string]: CellProps | ReactNode,
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
    columnConfig?: ColumnPropsWithName[],


    /**
     * The row data used to populate the TableRow
     */
    rowData?: RowData,


}
