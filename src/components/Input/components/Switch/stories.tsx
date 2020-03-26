import React from 'react';
import { boolean, text, select } from '@storybook/addon-knobs';
import Switch from './index';
import Flag from '@components/Flag';
import { LabelPlacements } from './types';


export default {
    component: Switch,
    parameters: {
        componentSubtitle: <Flag color="warning">In Development</Flag>,
    },
    title: 'In Development|User Input/Switch',
};


export const Sandbox = (): React.ReactElement => {

    const label = text('label', 'Form Label');
    const labelPlacement: LabelPlacements = select('labelPlacement', ['top', 'bottom', 'start', 'end'], 'end');
    const isDisabled = boolean('isDisabled', false);

    return (
        <Switch
            isDisabled={isDisabled}
            label={label}
            labelPlacement={labelPlacement}
            value="foo"
        />
    );

};


export const General = (): React.ReactElement => (
    <div style={{ display: 'inline-grid', gridAutoFlow: 'column', gridGap: '1rem' }}>
        <Switch value="1" />
        <Switch isChecked value="2" />
        <Switch isDisabled value="4" />
        <Switch isChecked isDisabled value="5" />
    </div>
);


export const WithLabels = (): React.ReactElement => (
    <div style={{ display: 'inline-grid', gridAutoFlow: 'column', gridGap: '1rem' }}>
        <Switch label="Top" labelPlacement="top" value="1" />
        <Switch label="Start" labelPlacement="start" value="2" />
        <Switch label="Bottom" labelPlacement="bottom" value="3" />
        <Switch label="End" labelPlacement="end" value="4" />
    </div>
);
