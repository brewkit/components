import React from 'react';


export interface Props {
    actions?: any,
    children?: React.ReactNode,
    className?: string,
    contentComponent?: React.ElementType,
    headerAction?: React.ReactNode,
    headerAvatar?: React.ReactNode,
    headerComponent?: React.ElementType,
    headerContent?: React.ReactNode,
    headerSubtitle?: React.ReactNode,
    headerTitle?: React.ReactNode,
    isRaised?: boolean,
}