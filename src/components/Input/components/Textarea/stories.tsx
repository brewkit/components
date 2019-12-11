import React from 'react';
import Textarea from './index';
import Label from '../../../Label';
import { boolean, text } from '@storybook/addon-knobs';

export default {
    title: 'Components|User Input/Input/Textarea',
    component: Textarea,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
};

export const Default = () => {
    const disabled = boolean('disabled', false);
    const error = boolean('error', false);
    const fullWidth = boolean('fullWidth', false);
    const placeholder = text('placeholder', '');
    const rows = text('rows', '4');

    return (
        <Textarea 
            disabled={disabled} 
            error={error} 
            fullWidth={fullWidth} 
            placeholder={placeholder} 
            rows={rows !== '' ? rows : '4'}
        />
    );
};