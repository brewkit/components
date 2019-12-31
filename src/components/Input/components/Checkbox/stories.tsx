import React, { ReactElement } from 'react';
import Checkbox from './index';
import Label from '../../../Label';
import { boolean, text } from '@storybook/addon-knobs';


export default {
    component: Checkbox,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|User Input/Input/Checkbox',
};


export const Default = (): ReactElement => {
    const checked = boolean('checked', false);
    const disabled = boolean('disabled', false);
    const inputLabel = text('inputLabel', 'some label');
    const error = boolean('error', false);
    return <Checkbox checked={checked} disabled={disabled} error={error} inputLabel={inputLabel} />;
};
