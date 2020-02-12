import React, { ReactElement } from 'react';
import Radio from './index';
import Flag from '@components/Flag';
import { boolean, text } from '@storybook/addon-knobs';


export default {
    component: Radio,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Components|User Input/Radio',
};


export const Default = (): ReactElement => {
    const checked = boolean('checked', false);
    const disabled = boolean('disabled', false);
    const children = text('children', 'Radio label');
    const hasError = boolean('hasError', false);

    return (
        <Radio checked={checked} disabled={disabled} hasError={hasError}>{children}</Radio>
    );
};
