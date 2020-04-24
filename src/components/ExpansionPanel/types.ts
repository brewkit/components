import React, {ChangeEvent} from 'react';


export interface Props {


    /**
     * Any valid JSX that is used for providing actions in the collapsible content
     * Normally and cancel and save option
     */
    actions?: React.ReactNode,


    /**
     * Any valid JSX that contains the information that is collapsible
     */
    details: React.ReactNode,


    /**
     * Icon used to display as the expand indicator
     */
    expandIcon?: React.ReactElement,


    /**
     * Determines if the default state is open or closed
     */
    isDefaultExpanded?: boolean,


    /**
     * Determines if the panel is disabled or not
     */
    isDisabled?: boolean,


    /**
     * If true, expands he panel. Collapses the panel if false.
     * This enables control over the panel
     */
    isExpanded?: boolean,


    /**
     * If true, removes rounded corners
     */
    isSquare?: boolean,


    /**
     * Callback fired when a panel is opened or closed
     */
    onChange?: (event: ChangeEvent<{}>, expanded: boolean) => void,


    /**
     * Any valid JSX that gives a brief summary of the details
     */
    summary: React.ReactNode,


}