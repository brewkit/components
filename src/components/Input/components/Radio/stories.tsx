import React, { ReactElement } from 'react';
import Radio from './index';
import Label from '../../../Label';
import { boolean, text } from '@storybook/addon-knobs';


export default {
    component: Radio,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|User Input/Input/Radio',
};


export const Default = (): ReactElement => {
    const checked = boolean('checked', false);
    const disabled = boolean('disabled', false);
    const fullWidth = boolean('fullWidth', false);
    const inputLabel = text('inputLabel', 'Radio label');
    return (
        <Radio
            checked={checked}
            disabled={disabled}
            fullWidth={fullWidth}
            inputLabel={inputLabel}
            readOnly
        />
    );
};
