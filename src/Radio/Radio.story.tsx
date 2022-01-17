import * as React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Story } from '@storybook/react';

import Radio, { BkRadioProps as RadioProps } from './';

export default {
    component: Radio,
    parameters: {
        // componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Inputs/Radio',
};

const defaultArgs = {
    disabled: false,
};

export const Sandbox: Story<RadioProps> = (args) => <Radio {...args} />;

Sandbox.args = {
    ...defaultArgs,
    checked: true,
    color: 'default',
};

export const WithLabel: Story<RadioProps> = (args) => (
    <div>
        <FormControlLabel
            control={<Radio defaultChecked name="WithLabel" {...args} />}
            label="Example 1"
        />

        <FormControlLabel
            control={<Radio name="WithLabel" {...args} />}
            label="Example 2"
        />
    </div>
);

WithLabel.args = {
    ...defaultArgs,
    color: 'default',
};

export const LabelPlacement: Story<RadioProps> = (args) => (
    <div>
        <FormControlLabel
            control={<Radio defaultChecked name="LabelPlacement" {...args} />}
            label="Top"
            labelPlacement="top"
            value="top"
        />

        <FormControlLabel
            control={<Radio name="LabelPlacement" {...args} />}
            label="Start"
            labelPlacement="start"
            value="start"
        />

        <FormControlLabel
            control={<Radio name="LabelPlacement" {...args} />}
            label="Bottom"
            labelPlacement="bottom"
            value="bottom"
        />

        <FormControlLabel
            control={<Radio name="LabelPlacement" {...args} />}
            label="End"
            labelPlacement="end"
            value="end"
        />
    </div>
);

LabelPlacement.args = {
    ...defaultArgs,
    color: 'default',
};
