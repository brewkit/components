import React, { ReactElement } from 'react';
import Radio from '../Radio';
import RadioGroup from './index';
import Label from '../../../Label';
import { boolean, text } from '@storybook/addon-knobs';


export default {
    component: Radio,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|User Input/Input/RadioGroup',
};


export const Default = (): ReactElement => {
    const checked = boolean('checked', false);
    const disabled = boolean('disabled', false);
    const fullWidth = boolean('fullWidth', true);
    const radioName = text('radioName', 'testing');
    return (
        <RadioGroup name={radioName}>
            <Radio
                checked={checked}
                disabled={disabled}
                fullWidth={fullWidth}
                inputLabel="Choice 1"
            />
            <Radio
                checked={checked}
                disabled={disabled}
                fullWidth={fullWidth}
                inputLabel="Choice 2"
            />
            <Radio
                checked={checked}
                disabled={disabled}
                fullWidth={fullWidth}
                inputLabel="Choice 3"
            />
            <Radio
                checked={checked}
                disabled={disabled}
                fullWidth={fullWidth}
                inputLabel="Choice 4"
            />
        </RadioGroup>
    );
};
