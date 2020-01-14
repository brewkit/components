import { ReactNode } from 'react';


export interface Props {

    /**
     * The content to be wrapped and not trigger the `onClickAway` hook.
     */
    children?: ReactNode,

    /**
     * The callback function to fire when the user clicks on an element not within the wrapped content.
     */
    onClickAway: () => void,

}
