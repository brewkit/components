import React from 'react';
import { ExpansionPanel as MuiExpansionPanel } from '@material-ui/core';
import { ExpansionPanelSummary as MuiExpansionPanelSummary } from '@material-ui/core';
import { ExpansionPanelDetails as MuiExpansionPanelDetails } from '@material-ui/core';
import { ExpansionPanelActions as MuiExpansionPanelActions } from '@material-ui/core';
import { Props } from './types';


/**
 * Expansion panels contain a summary of content that can be collapsible
 * Can be used as a standalone component or combined with other components like cards
 */
export const ExpansionPanel = React.forwardRef(({
    actions,
    details,
    expandIcon,
    hasDefaultExpanded,
    isDisabled,
    isExpanded,
    isSquare,
    onChange,
    summary,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const wrapperClasses = {
        root: 'brew-ExpansionPanel',
        rounded: 'brew-ExpansionPanel--isRounded',
        expanded: 'brew-ExpansionPanel--isExpanded',
        disabled: 'brew-ExpansionPanel--isDisabled',
    };


    const summaryClasses = {
        root: 'brew-ExpansionPanel__summary',
        content: 'brew-ExpansionPanel__summaryContent',
        expandIcon: 'brew-ExpansionPanel__expandIcon',
    };


    return (
        <MuiExpansionPanel
            classes={wrapperClasses}
            defaultExpanded={hasDefaultExpanded}
            disabled={isDisabled}
            expanded={isExpanded}
            onChange={onChange}
            ref={ref}
            square={isSquare}
            {...otherProps}
        >
            <MuiExpansionPanelSummary classes={summaryClasses} expandIcon={expandIcon}>
                {summary}
            </MuiExpansionPanelSummary>
            <MuiExpansionPanelDetails className="brew-ExpansionPanel__details">
                {details}
            </MuiExpansionPanelDetails>
            {actions && (
                <MuiExpansionPanelActions className="brew-ExpansionPanel__actions">
                    {actions}
                </MuiExpansionPanelActions>
            )}
        </MuiExpansionPanel>
    );


});


ExpansionPanel.displayName = 'ExpansionPanel';


export default ExpansionPanel;
