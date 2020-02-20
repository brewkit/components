import React from 'react';
import { StyledParentComponent, Colors as GenericColors } from '@components/types';


export type Colors = GenericColors | 'inherit';
export type Sizes = 'small' | 'medium' | 'large';
export type Placements = (
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
);


export interface Props extends StyledParentComponent {

    /**
     * Determines the color of the rendered Icon.
     * @default 'primary'
     */
    color?: Colors,

    /**
     * Tooltip title. Zero-length titles string are never displayed.
     */
    title: React.ReactNode,

    /**
     * Tooltip reference element. Needs to be able to hold a ref.
     */
    children: React.ReactElement,

    /**
     * The placement / anchor point of the tooltip
     * @default 'bottom'
     */
    placement?: Placements,

    /**
     * Do not respond to focus events.
     * @default false
     */
    disableFocusListener?: boolean,

    /**
     * Do not respond to hover events.
     * @default false
     */
    disableHoverListener?: boolean,

    /**
     * Do not respond to touch events.
     * @default false
     */
    disableTouchListener?: boolean,

    /**
     * The number of milliseconds to wait before showing the tooltip. This prop won't impact the enter touch
     * delay (`enterTouchDelay`).
     * @default 0
     */
    enterDelay?: number,

    /**
     * The number of milliseconds a user must touch the element before showing the tooltip.
     * @default 700
     */
    enterTouchDelay?: number,

    /**
     * This prop is used to help implement the accessibility logic. If you don't provide this prop. It falls back to a
     * randomly generated id.
     */
    id?: string,

    /**
     * Makes a tooltip interactive, i.e. will not close when the user hovers over the tooltip before the `leaveDelay`
     * is expired.
     * @default true
     */
    isInteractive?: boolean,

    /**
     * The number of milliseconds to wait before hiding the tooltip. This prop won't impact the leave touch delay
     * (`leaveTouchDelay`).
     * @default 0
     */
    leaveDelay?: number,

    /**
     * The number of milliseconds after the user stops touching an element before hiding the tooltip.
     * @default 1500
     */
    leaveTouchDelay?: number,

    /**
     * Callback fired when the component requests to be closed.
     */
    onClose?: (event: object) => void,

    /**
     * Callback fired when the component requests to be opened.
     */
    onOpen?: (event: object) => void,

    /**
     * If `true`, the tooltip is shown.
     */
    isOpen?: boolean,

    /**
     * Props applied to the Popper element.
     */
    PopperProps?: object,

}
