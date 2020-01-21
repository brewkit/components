import { ReactNode } from 'react';
import { Props as ColumnProps } from '../TableHeader/components/TableHeaderColumn/types';
import { RowData } from '../TableRow/types';


export interface Props {


    /**
     * Any custom content to fill the TableBody that is different than default
     */
    children?: ReactNode,


    /**
     * The className for the TableBody
     */
    className?: string,


    /**
     * The configuration that defines the columns in the TableBody
     */
    columnConfig?: ColumnProps[],


    /**
     * The row data used to populate the TableBody
     */
    rows?: RowData[],


}
