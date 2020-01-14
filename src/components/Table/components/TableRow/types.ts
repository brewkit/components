import { ReactNode } from 'react';


export interface Props {


    /**
     * The data for the cells used to populate this TableRow
     */
    cells?: ReactNode[],


    /**
     * Any custom content to fill the TableRow that is different than default
     */
    children?: ReactNode,


    /**
     * The className for the TableRow
     */
    className?: string,


}
