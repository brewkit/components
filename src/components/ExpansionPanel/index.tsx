import React from 'react';
import {
    ExpansionPanel as MuiExpansionPanel,
    ExpansionPanelSummary as MuiExpansionPanelSummary,
    ExpansionPanelDetails as MuiExpansionPanelDetails,
    ExpansionPanelActions as MuiExpansionPanelActions,
} from '@material-ui/core';
import Typography from '@components/Typography';
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
                <Typography>
                    {summary}
                </Typography>
            </MuiExpansionPanelSummary>
            <MuiExpansionPanelDetails className="brew-ExpansionPanel__details">
                <Typography>
                    {details}
                </Typography>
            </MuiExpansionPanelDetails>
            {actions && (
                <MuiExpansionPanelActions className="brew-ExpansionPanel__actions">
                    <Typography>
                        {actions}
                    </Typography>
                </MuiExpansionPanelActions>
            )}
        </MuiExpansionPanel>
    );


});


ExpansionPanel.displayName = 'ExpansionPanel';


export default ExpansionPanel;
