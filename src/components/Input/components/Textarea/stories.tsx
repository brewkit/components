import React, { ReactElement } from 'react';
import Textarea from './index';
import Label from '../../../Label';
import { boolean, text, number } from '@storybook/addon-knobs';


export default {
    component: Textarea,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|User Input/Input/Textarea',
};


export const Default = (): ReactElement => {
    const disabled = boolean('disabled', false);
    const error = boolean('error', false);
    const fullWidth = boolean('fullWidth', false);
    const placeholder = text('placeholder', '');
    const rows = number('rows', 4);

    return (
        <Textarea
            disabled={disabled}
            error={error}
            fullWidth={fullWidth}
            placeholder={placeholder}
            rows={rows}
        />
    );
};
