import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import ExpansionPanel from '@components/ExpansionPanel';
import Flag from '@components/Flag';
import Icon from '@components/Icon';


export default {
    component: ExpansionPanel,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Stable|Data Display/ExpansionPanel',
}


export const Sandbox = (): React.ReactElement => (
        <div>
            <ExpansionPanel
                details={details}
            />
            <ExpansionPanel
                details={details2}
                expandIcon={<Icon>arrow_drop_up</Icon>}
                hasDefaultExpanded={hasDefaultExpanded2}
                summary={summary2}
            />
            <ExpansionPanel
                actions="Cancel -- Save"
                details={details3}
                expandIcon={<Icon>arrow_drop_up</Icon>}
                hasDefaultExpanded={hasDefaultExpanded3}
                summary={summary3}
            />
        </div>
);

@default 'left'
typescript docgen
extend styledparent component