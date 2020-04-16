import React from 'react';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { Props } from './types';


const ExpansionPanel = React.forwardRef(({
    children,
    details,
    summary,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    return (
        <MuiExpansionPanel {...otherProps}>
            <MuiExpansionPanelSummary>
                {summary}
            </MuiExpansionPanelSummary>
            <MuiExpansionPanelDetails>
                {details}
            </MuiExpansionPanelDetails>
        </MuiExpansionPanel>
    );


});


ExpansionPanel.displayName = 'ExpansionPanel';


export default ExpansionPanel;
