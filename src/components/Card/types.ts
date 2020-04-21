import React from 'react';


export interface Props {


    /**
     *
     */
    actions?: React.ReactNode,


    /**
     * Any valid JSX to be wrapped in the main CardContent
     */
    children?: React.ReactNode,


    /**
     * Component used for the root node of children
     */
    contentComponent?: React.ElementType,


    /**
     * Any valid JSX to put before children
     */
    customContentBefore?: React.ReactNode,


    /**
     * Any valid JSX to put after children
     */
    customContentAfter?: React.ReactNode,


    /**
     * Action to appear in the header
     */
    headerAction?: React.ReactNode,


    /**
     * Avatar to appear in the header
     */
    headerAvatar?: React.ReactNode,


    /**
     * The root element for the header
     */
    headerComponent?: React.ElementType,


    /**
     * Subtitle for the header
     */
    headerSubtitle?: React.ReactNode,


    /**
     * Title for the header
     */
    headerTitle?: React.ReactNode,


    /**
     * Determines if the card is raised higher than normal
     */
    isRaised?: boolean,


}
