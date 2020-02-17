import React, { ReactElement } from 'react';
import TextInput from './index';
import Flag from '@components/Flag';
import { boolean, text } from '@storybook/addon-knobs';


export default {
    component: TextInput,
    parameters: {
        componentSubtitle: <Flag color="warning">In Development</Flag>,
    },
    title: 'In Development|User Input/Input/TextInput',
};


export const Default = (): ReactElement => {
    const disabled = boolean('disabled', false);
    const hasError = boolean('hasError', false);
    const placeholder = text('placeholder', '');
    return (
        <TextInput
            disabled={disabled}
            hasError={hasError}
            placeholder={placeholder}
        />
    );
};
