import { StyledComponent } from '@components/types';
import React, { ChangeEvent } from 'react';


export interface Props extends StyledComponent {


    /**
     * The content of the actions wrapper
     */
    actions?: React.ReactNode,


    /**
     * The content of the expandable wrapper
     */
    details: React.ReactNode,


    /**
     * Content used to display as the expand indicator
     */
    expandIcon?: React.ReactElement,


    /**
     * Determines if the default state is open or closed
     * @default 'false'
     */
    isDefaultExpanded?: boolean,


    /**
     * Determines if the panel is disabled or not
     * @default 'false'
     */
    isDisabled?: boolean,


    /**
     * If true, expands the panel. Collapses the panel if false.
     * This enables control over the panel.
     * @default 'false'
     */
    isExpanded?: boolean,


    /**
     * The callback fired when a panel is opened or closed
     */
    onChange?: (event: ChangeEvent<{}>, expanded: boolean) => void,


    /**
     * The content to display at all times
     */
    summary: React.ReactNode,


}
