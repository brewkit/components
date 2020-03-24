import React from 'react';
import { boolean, text, select } from '@storybook/addon-knobs';
import Switch from './index';
import Flag from '@components/Flag';
import { LabelPlacements } from './types';


export default {
    component: Switch,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Stable|User Input/Switch',
};


export const Sandbox = (): React.ReactElement => {

    const label = text('label', 'Form Label');
    const labelPlacement: LabelPlacements = select('labelPlacement', ['top', 'bottom', 'start', 'end'], 'end');
    const isDisabled = boolean('isDisabled', false);
    const isIndeterminate = boolean('isIndeterminate', false);

    return (
        <Switch
            isDisabled={isDisabled}
            isIndeterminate={isIndeterminate}
            label={label}
            labelPlacement={labelPlacement}
            value="foo"
        />
    );

};


export const General = (): React.ReactElement => (
    <React.Fragment>
        <Switch value="1" />
        <Switch isChecked value="2" />
        <Switch isDisabled value="4" />
        <Switch isChecked isDisabled value="5" />
    </React.Fragment>
);


export const WithLabels = (): React.ReactElement => (
    <React.Fragment>
        <Switch label="Top" labelPlacement="top" value="1" />
        <Switch label="Start" labelPlacement="start" value="2" />
        <Switch label="Bottom" labelPlacement="bottom" value="3" />
        <Switch label="End" labelPlacement="end" value="4" />
    </React.Fragment>
);
