import React, { ReactElement } from 'react';
import Radio from '../Radio';
import RadioGroup from './index';
import Label from '../../../Label';
import { text } from '@storybook/addon-knobs';


export default {
    component: Radio,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|User Input/RadioGroup',
};


export const Default = (): ReactElement => (
    <RadioGroup defaultValue="choice1" name="test">
        <Radio value="choice1">This is a choice</Radio>
        <Radio value="choice2">Yet Another</Radio>
        <Radio value="choice3">More Choices!</Radio>
        <Radio value="choice4">Okay, moving on...</Radio>
        <Radio value="choice1">Choice 5</Radio>
        <Radio value="choice2">Choice 6</Radio>
        <Radio value="choice3">Choice 7</Radio>
        <Radio value="choice4">Choice 8</Radio>
    </RadioGroup>
);


export const Custom = (): ReactElement => (
    <RadioGroup className="brew-RadioGroup--variant-pill" defaultValue="choice1" name="test">
        <Radio value="choice1">This is a choice</Radio>
        <Radio value="choice2">Yet Another</Radio>
        <Radio value="choice3">More Choices!</Radio>
        <Radio value="choice4">Okay, moving on...</Radio>
        <Radio value="choice1">Choice 5</Radio>
        <Radio value="choice2">Choice 6</Radio>
        <Radio value="choice3">Choice 7</Radio>
        <Radio value="choice4">Choice 8</Radio>
    </RadioGroup>
);
