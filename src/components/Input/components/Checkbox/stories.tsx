import React from 'react';
import Checkbox from './index';
import Label from '../../../Label';
import { boolean, text } from '@storybook/addon-knobs';

export default {
    title: 'Components|User Input/Input/Checkbox',
    component: Checkbox,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
};

export const Default = () => {
    const checked = boolean('checked', false);
    const disabled = boolean('disabled', false);
    const inputLabel = text('inputLabel');
    return <Checkbox checked={checked} disabled={disabled} inputLabel={inputLabel} readOnly />;
}