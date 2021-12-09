import * as React from 'react';
import { Story } from '@storybook/react';
import Alert from './Alert';
import { AlertProps } from './Alert.Types';


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
    children: 'I am a description of the alert!'
};


export const General : Story<AlertProps> = (args) => (
    <div style={{ display: 'grid', gridGap: '1rem' }}>
        <Alert severity="error" title="This is an error alert with no call to action." />
        <Alert severity="warning" title="This is an warning alert with no call to action." />
        <Alert severity="info" title="This is an info alert with no call to action." />
        <Alert severity="success" title="This is an success alert with no call to action." />
    </div>
);


export const Filled : Story<AlertProps> = (args) => (
    <div style={{ display: 'grid', gridGap: '1rem' }}>
        <Alert severity="error" title="This is an error alert with no call to action." variant="filled" />
        <Alert severity="warning" title="This is an warning alert with no call to action." variant="filled" />
        <Alert severity="info" title="This is an info alert with no call to action." variant="filled" />
        <Alert severity="success" title="This is an success alert with no call to action." variant="filled" />
    </div>
);


export const WithDescription : Story<AlertProps> = (args) => (
    <div style={{ display: 'grid', gridGap: '1rem' }}>
        <Alert severity="error" title="Error">
            This is an error alert with no call to action.
        </Alert>
        <Alert severity="warning" title="Warning">
            This is an warning alert with no call to action.
        </Alert>
        <Alert severity="info" title="Info">
            This is an info alert with no call to action.
        </Alert>
        <Alert severity="success" title="Success">
            This is an success alert with no call to action.
        </Alert>
    </div>
);
