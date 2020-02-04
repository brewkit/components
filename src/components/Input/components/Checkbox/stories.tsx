import React, { ReactElement } from 'react';
import Checkbox from './index';
import Label from '../../../Label';
import { boolean, text } from '@storybook/addon-knobs';


export default {
    component: Checkbox,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|User Input/Checkbox',
};


export const Default = (): ReactElement => {
    const checked = boolean('checked', false);
    const disabled = boolean('disabled', false);
    const children = text('children', 'some label');
    const hasError = boolean('hasError', false);
    return <Checkbox checked={checked} disabled={disabled} hasError={hasError}>{children}</Checkbox>;
};
