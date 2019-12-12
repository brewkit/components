import React from 'react';
import TextInput from './index';
import Label from '../../../Label';
import { boolean, text } from '@storybook/addon-knobs';

export default {
    title: 'Components|User Input/Input/TextInput',
    component: TextInput,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
};

export const Default = () => {
    const disabled = boolean('disabled', false);
    const error = boolean('error', false);
    const fullWidth = boolean('fullWidth', false);
    const placeholder = text('placeholder', '');
    return (
        <TextInput 
            disabled={disabled}
            error={error}
            fullWidth={fullWidth}
            placeholder={placeholder}
        />
    );
};