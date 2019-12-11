import React from 'react';
import Radio from './index';
import Label from '../../../Label';
import { boolean, text } from '@storybook/addon-knobs';

export default {
    title: 'Components|User Input/Input/Radio',
    component: Radio,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
};

export const Default = () => {
    const checked = boolean('checked', false);
    const disabled = boolean('disabled', false);
    const fullWidth = boolean('fullWidth', false);
    const inputLabel = text('inputLabel', '');
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