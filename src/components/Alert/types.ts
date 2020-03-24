import React from 'react';
import { StyledParentComponent } from '@components/types';


export type Severities = (
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
);


export type Variants = (
    | 'filled'
    | 'outlined'
    | 'standard'
);


export interface Props extends StyledParentComponent {

    /**
     * The title of the alert.
     */
    title?: React.ReactNode,

    /**
     * The action to display. It renders after the message, at the end of the alert.
     */
    action?: React.ReactNode,

    /**
     * Override the default label for the close popup icon button.
     * @default 'Close'
     */
    closeText?: string,

    /**
     * Override the icon displayed before the children. Unless provided, the icon is mapped to the value of the
     * severity prop.
     */
    icon?: React.ReactNode,

    /**
     * The component maps the severity prop to a range of different icons, for instance success to `<SuccessOutlined>`.
     * If you wish to change this mapping, you can provide your own. Alternatively, you can use the icon prop to
     * override the icon displayed.
     */
    iconMapping?: {
        error?: React.ReactNode,
        info?: React.ReactNode,
        success?: React.ReactNode,
        warning?: React.ReactNode,
    },

    /**
     * Callback fired when the component requests to be closed. When provided and no action prop is set, a close icon
     * button is displayed that triggers the callback when clicked.
     */
    onClose?: (event: object) => void,

    /**
     * The ARIA role attribute of the element.
     * @default 'alert'
     */
    role?: string,

    /**
     * The severity of the alert. This defines the color and icon used.
     * @default 'success'
     */
    severity?: Severities,

    /**
     * The variant to use.
     * @default 'standard'
     */
    variant?: Variants,

}
