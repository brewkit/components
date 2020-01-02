import React, { ReactElement } from 'react';
import Radio from '../Radio';
import RadioGroup from './index';
import Label from '../../../Label';
import { boolean } from '@storybook/addon-knobs';


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
    return (
        <RadioGroup name="testing" defaultValue="choice2" onChange={() => console.log('do something')}>
            <Radio
                checked={checked}
                disabled={disabled}
                fullWidth={fullWidth}
                inputLabel="Choice 1"
                value="choice1"
            />
            <Radio
                checked={checked}
                disabled={disabled}
                fullWidth={fullWidth}
                inputLabel="Choice 2"
                value="choice2"
            />
            <Radio
                checked={checked}
                disabled={disabled}
                fullWidth={fullWidth}
                inputLabel="Choice 3"
                value="choice3"
            />
            <Radio
                checked={checked}
                disabled={disabled}
                fullWidth={fullWidth}
                inputLabel="Choice 4"
                value="choice4"
            />
        </RadioGroup>
    );
};
