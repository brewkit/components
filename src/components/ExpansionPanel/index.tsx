import React from 'react';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import MuiExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import { Props } from './types';


export const ExpansionPanel = React.forwardRef(({
    actions,
    children,
    details,
    hasDefaultExpanded,
    isDisabled,
    isExpanded,
    onChange,
    summary,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = {
        root: `brew-ExpansionPanel brew-ExpansionPanel--${isExpanded}`
    };


    return (
        <MuiExpansionPanel
            classes={classes}
            defaultExpanded={hasDefaultExpanded}
            disabled={isDisabled}
            expanded={isExpanded}
            onChange={onChange}
            ref={ref}
            {...otherProps}
        >
            <MuiExpansionPanelSummary className="brew-ExpansionPanel__summary">
                {summary}
            </MuiExpansionPanelSummary>
            <MuiExpansionPanelDetails className="brew-ExpansionPanel__details">
                {details}
            </MuiExpansionPanelDetails>
            <MuiExpansionPanelActions className="brew-ExpansionPanel__actions">
                {actions}
            </MuiExpansionPanelActions>
        </MuiExpansionPanel>
    );


});


ExpansionPanel.displayName = 'ExpansionPanel';


export default ExpansionPanel;
