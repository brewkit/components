import React, { ReactElement } from 'react';
import Checkbox from './index';
import Flag from '@components/Flag';
import { boolean, text } from '@storybook/addon-knobs';


export default {
    component: Checkbox,
    parameters: {
        componentSubtitle: <Flag color="warning">In Development</Flag>,
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
