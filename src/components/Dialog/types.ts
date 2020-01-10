
import { ReactNode, MouseEvent } from 'react';

export interface Props {

    /**
     * The text for the cancel button
     */
    cancelText?: string,

    /**
     * The body of the Dailog
     */
    children?: ReactNode,

    /**
     * A custom class for the dialog component
     */
    className?: string,

    /**
     * A custom JSX close icon
     */
    closeIcon?: ReactNode,

    /**
     * The color of the dialog
     */
    color?: 'info' | 'warning' | 'danger' | 'success',

    /**
     * The text of the confirm button
     */
    confirmText?: string,

    /**
     * A custom footer for the dialog
     */
    footer?: ReactNode,

    /**
     * Whether or not the dialog has an icon
     */
    hasIcon?: boolean,

    /**
     * A custom icon to display
     */
    icon?: ReactNode,

    /**
     * An event that fires when the background of the modal is clicked
     */
    onBackgroundClick?: (event: MouseEvent) => any,

    /**
     * An event that fires when the confirm button is clicked
     */
    onConfirm?: (event: MouseEvent) => any,

    /**
     * An event that fires when the cancel button is clicked
     */
    onCancel?: (event: MouseEvent) => any,

    /**
     * Whether or not to show the dialog
     */
    isOpen?: boolean,

    /**
     * The title of the dialog component
     */
    title?: ReactNode,

    /**
     * The modal variant. Controls what buttons are shown
     */
    variant?: 'alert' | 'confirm',
}
