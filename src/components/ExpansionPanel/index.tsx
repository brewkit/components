import React from 'react';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import MuiExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@components/Typography';
import { Props } from './types';


/**
 * The `<ExpansionPanel />` component is used to create expandable content.
 * It can be used as a standalone component or combined with others, like a card.
 */
export const ExpansionPanel = React.forwardRef(({
    actions,
    details,
    expandIcon,
    isDefaultExpanded,
    isDisabled,
    isExpanded,
    onChange,
    summary,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const wrapperClasses = {
        root: 'brew-ExpansionPanel',
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
            defaultExpanded={isDefaultExpanded}
            disabled={isDisabled}
            expanded={isExpanded}
            onChange={onChange}
            ref={ref}
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
