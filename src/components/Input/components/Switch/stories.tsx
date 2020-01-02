import React, { ReactElement } from 'react';
import Switch from './index';
import { boolean, text } from '@storybook/addon-knobs';


export default {
    component: Switch,
    title: 'Components|User Input/Input/Switch',
};


export const Default = (): ReactElement => {
    const disabled = boolean('disabled', false);
    const error = boolean('error', false);
    const inputLabel = text('inputLabel', 'hihello');
    return (
        <Switch
            disabled={disabled}
            error={error}
            inputLabel={inputLabel}
        />
    );
};
