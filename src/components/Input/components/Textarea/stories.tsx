import React, { ReactElement } from 'react';
import Textarea from './index';
import Flag from '@components/Flag';
import { boolean, text, number } from '@storybook/addon-knobs';


export default {
    component: Textarea,
    parameters: {
        componentSubtitle: <Flag color="warning">In Development</Flag>,
    },
    title: 'Components|User Input/Input/Textarea',
};


export const Default = (): ReactElement => {
    const disabled = boolean('disabled', false);
    const hasError = boolean('hasError', false);
    const placeholder = text('placeholder', '');
    const rows = number('rows', 4);

    return (
        <Textarea
            disabled={disabled}
            hasError={hasError}
            placeholder={placeholder}
            rows={rows}
        />
    );
};
