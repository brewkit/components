import * as React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Story } from '@storybook/react';

import Switch, { BkSwitchProps as Props } from './';

export default {
    component: Switch,
    parameters: {
        // componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Inputs/Switch',
};

const defaultArgs = {
    disabled: false,
};

export const Sandbox: Story<Props> = (args) => <Switch {...args} />;

Sandbox.args = {
    ...defaultArgs,
    checked: true,
    color: 'default',
};

export const WithLabel: Story<Props> = (args) => (
    <div>
        <FormControlLabel
            control={<Switch defaultChecked name="WithLabel" {...args} />}
            label="Example 1"
        />

        <FormControlLabel
            control={<Switch name="WithLabel" {...args} />}
            label="Example 2"
        />
    </div>
);

WithLabel.args = {
    ...defaultArgs,
    color: 'default',
};

export const LabelPlacement: Story<Props> = (args) => (
    <div>
        <FormControlLabel
            value="top"
            control={<Switch defaultChecked name="LabelPlacement" {...args} />}
            label="Top"
            labelPlacement="top"
        />

        <FormControlLabel
            value="start"
            control={<Switch name="LabelPlacement" {...args} />}
            label="Start"
            labelPlacement="start"
        />

        <FormControlLabel
            value="bottom"
            control={<Switch name="LabelPlacement" {...args} />}
            label="Bottom"
            labelPlacement="bottom"
        />

        <FormControlLabel
            value="end"
            control={<Switch name="LabelPlacement" {...args} />}
            label="End"
            labelPlacement="end"
        />
    </div>
);

LabelPlacement.args = {
    ...defaultArgs,
    color: 'default',
};
