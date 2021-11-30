

import * as React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Story } from '@storybook/react';

import Radio from './index';
import { RadioProps } from './Radio.types';


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


export const Sandbox: Story<Props> = (args) => <Radio {...args} />;

Sandbox.args = {
    ...defaultArgs,
    checked: true,
    color: 'default',
};


export const WithLabel: Story<Props> = (args) => (
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


export const LabelPlacement: Story<Props> = (args) => (
    <div>

        <FormControlLabel
            value="top"
            control={<Radio defaultChecked name="LabelPlacement" {...args} />}
            label="Top"
            labelPlacement="top"
        />

        <FormControlLabel
            value="start"
            control={<Radio name="LabelPlacement" {...args} />}
            label="Start"
            labelPlacement="start"
        />

        <FormControlLabel
            value="bottom"
            control={<Radio name="LabelPlacement" {...args} />}
            label="Bottom"
            labelPlacement="bottom"
        />

        <FormControlLabel
            value="end"
            control={<Radio name="LabelPlacement" {...args} />}
            label="End"
            labelPlacement="end"
        />

    </div>
);

LabelPlacement.args = {
    ...defaultArgs,
    color: 'default',
};

