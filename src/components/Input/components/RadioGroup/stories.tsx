import React, { ReactElement } from 'react';
import Radio from '../Radio';
import RadioGroup from './index';
import Label from '../../../Label';
import {text} from "@storybook/addon-knobs";


export default {
    component: Radio,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|User Input/Input/RadioGroup',
};


export const Default = (): ReactElement => {
    const inputName = text('inputName', 'testing');
    const defaultValue = text('defaultValue', 'choice2');
    return (
        <RadioGroup name={inputName} defaultValue={defaultValue}>
            <Radio inputLabel="Choice 1" value="choice1" />
            <Radio inputLabel="Choice 2" value="choice2" />
            <Radio inputLabel="Choice 3" value="choice3" />
            <Radio inputLabel="Choice 4" value="choice4" />
        </RadioGroup>
    );
};
