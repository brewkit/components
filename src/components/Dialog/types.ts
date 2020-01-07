import { ReactNode, MouseEvent } from 'react';

export interface Props {
    /**
     * The className that will be added to the `Dialog` wrapper
     */
    className?: string,
    /**
     * The children of the component
     */
    children?: ReactNode,
    /**
     * Whether or not the modal is shown
     */
    open: boolean,
    /**
     * The event handler when the modal background is clicked
     */
    onBackgroundClick?: (event: MouseEvent) => any,
    /**
     * The modal variant
     */
    variant?: 'info' | 'success' | 'warning' | 'danger',
}
