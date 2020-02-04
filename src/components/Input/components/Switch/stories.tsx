import React, { ReactElement } from 'react';
import Switch from './index';
import { boolean, text } from '@storybook/addon-knobs';


export default {
    component: Switch,
    title: 'Components|User Input/Switch',
};


export const Default = (): ReactElement => {
    const disabled = boolean('disabled', false);
    const hasError = boolean('hasError', false);
    const children = text('children', 'hihello');
    return (
        <Switch disabled={disabled} hasError={hasError}>
            {children}
        </Switch>
    );
};
