import { ReactNode } from 'react';


export type Alignments = 'left' | 'center' | 'right';


export interface Props {

    /**
     * The optional content inside the divider.
     */
    children?: ReactNode,

    /**
     * Classes to be passed through to the component.
     */
    className?: string,

    /**
     * The alignment and placement of the content, if provided.
     */
    align?: Alignments,

}
