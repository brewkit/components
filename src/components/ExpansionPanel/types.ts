import React, {ChangeEvent} from 'react';


export interface Props {
    actions?: React.ReactNode,
    children?: React.ReactNode,
    details: React.ReactNode,


    /**
     * Determines if the default state is open or closed
     */
    hasDefaultExpanded?: boolean,


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
     * Callback fired when a panel is opened or closed
     */
    onChange?: (event: ChangeEvent<{}>, expanded: boolean) => void,


    summary: React.ReactNode,
}