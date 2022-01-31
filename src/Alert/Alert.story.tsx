import * as React from 'react';
import { Story } from '@storybook/react';
import Alert, { BkAlertProps as AlertProps } from './';

export default {
    component: Alert,
    title: 'Data Display/Alert',
};

export const Sandbox: Story<AlertProps> = (args) => <Alert {...args} />;
Sandbox.args = {
    title: 'I am an alert!',
    severity: 'warning',
    variant: 'standard',
    square: false,
    children: 'I am a description of the alert!',
};

export const General: Story<AlertProps> = (args) => (
    <div style={{ display: 'grid', gridGap: '1rem' }}>
        <Alert
            {...args}
            severity="error"
            title="This is an error alert with no call to action."
        />
        <Alert
            {...args}
            severity="warning"
            title="This is an warning alert with no call to action."
        />
        <Alert
            {...args}
            severity="info"
            title="This is an info alert with no call to action."
        />
        <Alert
            {...args}
            severity="success"
            title="This is an success alert with no call to action."
        />
    </div>
);

export const Filled: Story<AlertProps> = (args) => (
    <div style={{ display: 'grid', gridGap: '1rem' }}>
        <Alert
            {...args}
            severity="error"
            title="This is an error alert with no call to action."
            variant="filled"
        />
        <Alert
            {...args}
            severity="warning"
            title="This is an warning alert with no call to action."
            variant="filled"
        />
        <Alert
            {...args}
            severity="info"
            title="This is an info alert with no call to action."
            variant="filled"
        />
        <Alert
            {...args}
            severity="success"
            title="This is an success alert with no call to action."
            variant="filled"
        />
    </div>
);

export const WithDescription: Story<AlertProps> = (args) => (
    <div style={{ display: 'grid', gridGap: '1rem' }}>
        <Alert severity="error" title="Error" {...args}>
            This is an error alert with no call to action.
        </Alert>
        <Alert severity="warning" title="Warning">
            This is an warning alert with no call to action.
        </Alert>
        <Alert severity="info" title="Info" {...args}>
            This is an info alert with no call to action.
        </Alert>
        <Alert severity="success" title="Success" {...args}>
            This is an success alert with no call to action.
        </Alert>
    </div>
);
