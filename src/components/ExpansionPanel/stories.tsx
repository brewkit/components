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


export const Sandbox = (): React.ReactElement => {


    const hasDefaultExpanded = boolean('isDefaultEnabled', false);
    const details = text('details', 'Surprise!');
    const isDisabled = boolean('isDisabled', false);
    const summary = text('summary', 'A summary reveals a...');
    const hasDefaultExpanded2 = boolean('isDefaultEnabled2', true);
    const details2 = text('details2', 'Thats the broom I rode on in on');
    const summary2 = text('summary2', 'What is that?');
    const hasDefaultExpanded3 = boolean('isDefaultEnabled3', false);
    const details3 = text('details3', 'Bar');
    const summary3 = text('summary3', 'Foo');


    return (
        <div>
            <ExpansionPanel
                details={details}
                isDisabled={isDisabled}
                expandIcon={<Icon>arrow_drop_up</Icon>}
                hasDefaultExpanded={hasDefaultExpanded}
                summary={summary}
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


};
