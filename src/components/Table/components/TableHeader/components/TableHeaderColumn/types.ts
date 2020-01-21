import { ReactNode } from 'react';


export interface Props {


    /**
     * Any custom content to fill the TableHeaderColumn that is different than default
     */
    children?: ReactNode,


    /**
     * The className for the TableHeaderColumn
     */
    className?: string,


    /**
     * The label (text) to show in the TableHeaderColumn
     */
    label?: ReactNode,


    /**
     * The name of the TableHeaderColumn
     */
    name?: string,


}
