import React from 'react';
import { boolean, text, select } from '@storybook/addon-knobs';
import Checkbox from './index';
import Flag from '@components/Flag';
import { LabelPlacements } from './types';


export default {
    component: Checkbox,
    parameters: {
        componentSubtitle: <Flag color="warning">In Development</Flag>,
    },
    title: 'In Development|User Input/Checkbox',
};


export const Sandbox = (): React.ReactElement => {

    const label = text('label', 'Form Label');
    const labelPlacement: LabelPlacements = select('labelPlacement', ['top', 'bottom', 'start', 'end'], 'end');
    const isDisabled = boolean('isDisabled', false);
    const isIndeterminate = boolean('isIndeterminate', false);

    return (
        <Checkbox
            isDisabled={isDisabled}
            isIndeterminate={isIndeterminate}
            label={label}
            labelPlacement={labelPlacement}
            value="foo"
        />
    );

};


export const General = (): React.ReactElement => (
    <div style={{ display: 'inline-grid', gridAutoFlow: 'column', gridGap: '1rem' }}>
        <Checkbox value="1" />
        <Checkbox isChecked value="2" />
        <Checkbox isIndeterminate value="3" />
        <Checkbox isDisabled value="4" />
        <Checkbox isChecked isDisabled value="5" />
        <Checkbox isDisabled isIndeterminate value="6" />
    </div>
);


export const WithLabels = (): React.ReactElement => (
    <div style={{ display: 'inline-grid', gridAutoFlow: 'column', gridGap: '1rem' }}>
        <Checkbox label="Top" labelPlacement="top" value="1" />
        <Checkbox label="Start" labelPlacement="start" value="2" />
        <Checkbox label="Bottom" labelPlacement="bottom" value="3" />
        <Checkbox label="End" labelPlacement="end" value="4" />
    </div>
);
