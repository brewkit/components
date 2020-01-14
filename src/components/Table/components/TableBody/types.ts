import { ReactNode } from 'react';


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
     * The row data used to populate the TableBody
     */
    rows?: ReactNode[],


}
