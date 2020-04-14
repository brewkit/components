import React from 'react';
import { boolean, text, select } from '@storybook/addon-knobs';
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from './index';
import Flag from '@components/Flag';
import { LabelPlacements } from './types';


export default {
    component: Radio,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Stable|User Input/Radio',
};


export const Sandbox = (): React.ReactElement => {

    const label = text('label', 'Form Label');
    const labelPlacement: LabelPlacements = select('labelPlacement', ['top', 'bottom', 'start', 'end'], 'end');
    const isDisabled = boolean('isDisabled', false);

    return (
        <RadioGroup>
            <Radio
                isDisabled={isDisabled}
                label={label}
                labelPlacement={labelPlacement}
                value="foo"
            />
            <Radio
                isDisabled={isDisabled}
                label={label}
                labelPlacement={labelPlacement}
                value="bar"
            />
        </RadioGroup>
    );

};


export const General = (): React.ReactElement => (
    <div style={{ display: 'inline-grid', gridAutoFlow: 'column', gridGap: '1rem' }}>
        <Radio value="1" />
        <Radio isChecked value="2" />
        <Radio isDisabled value="4" />
        <Radio isChecked isDisabled value="5" />
    </div>
);


export const WithLabels = (): React.ReactElement => (
    <div style={{ display: 'inline-grid', gridAutoFlow: 'column', gridGap: '1rem' }}>
        <Radio label="Top" labelPlacement="top" value="1" />
        <Radio label="Start" labelPlacement="start" value="2" />
        <Radio label="Bottom" labelPlacement="bottom" value="3" />
        <Radio label="End" labelPlacement="end" value="4" />
    </div>
);
