import { ElementType, ReactNode } from 'react';
import { ColumnPropsWithName, RowData } from './components/TableRow/types';


export interface Props {


    /**
     * The JSX element to use for the Table 
     * 
     * @default table
     */
    as?: ElementType<any>,


    /**
     * Any custom content to fill the Table - including `children` overrides the
     * use of `columnConfig` and `rows`
     */
    children?: ReactNode,


    /**
     * The className for the Table
     */
    className?: string,


    /**
     * The column data used to populate the Table's header
     */
    columnConfig?: ColumnPropsWithName[],


    /**
     * The row data used to populate the Table's body
     */
    rows?: RowData[],


}
