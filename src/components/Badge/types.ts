import {ReactNode} from "react";

export interface Props {

    /**
     * The child element you want to apply the badge to
     */
    children: ReactNode,

    /**
     * Additional custom class to attach
     */
    className?: string,

    /**
     *
     */
    content: any,

}