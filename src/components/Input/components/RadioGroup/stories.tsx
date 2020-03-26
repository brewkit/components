import React from 'react';
import { boolean, text, select } from '@storybook/addon-knobs';
import RadioGroup from './index'
import Flag from '@components/Flag';
import Radio from '@components/Input/components/Radio';
import { LabelPlacements } from './types';


export default {
    component: Radio,
    parameters: {
        componentSubtitle: <Flag color="warning">In Development</Flag>,
    },
    title: 'In Development|User Input/RadioGroup',
};


export const Sandbox = (): React.ReactElement => {
    return (
        <RadioGroup defaultValue="3">
            <Radio label="1" value="1" />
            <Radio label="2" value="2" />
            <Radio label="3" value="3" />
            <Radio label="4" value="4" />
        </RadioGroup>
    );

};
