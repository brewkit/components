import { ReactNode } from 'react';


export interface Props {


    /**
     * Custom class
     */
    className?: string,


    /**
     * Any valid JSX/String
     */
    children?: ReactNode,


    /**
     * Position of Container, defaults to topRight
     */
    position?: 'topRight' |
        'topCenter' | 'topLeft' | 'centerRight' | 'centerLeft' | 'bottomRight' | 'bottomCenter' | 'bottomLeft';


}
