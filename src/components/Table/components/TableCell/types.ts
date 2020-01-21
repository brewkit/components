import { ReactNode } from 'react';


export interface Props {


    /**
     * The custom JSX element to use for the TableCell (otherwise, it uses `<td />`)
     */
    as?: keyof JSX.IntrinsicElements | null,


    /**
     * Any custom content to fill the TableCell that is different than default
     */
    children?: ReactNode,


    /**
     * The className for the TableCell
     */
    className?: string,


}
