import * as React from 'react';
import { text, select } from '@storybook/addon-knobs';
import Alert from '@components/Alert';
import MuiAlert from '@material-ui/lab/Alert';
import MuiAlertTitle from '@material-ui/lab/AlertTitle';

export default {
    component: Alert,
    parameters: {
        jest: ['Alert.test']
    },
    title: 'Data Display/Alert',
};

export const Sandbox = (): React.ReactElement => {

    const title = text('title', 'Alert Title');
    const severity = select('severity', ['error', 'warning', 'info', 'success'], 'success');
    const children = text('children', 'Some content for the alert.');

    return (
        <Alert title={title} severity={severity} children={children} />
    );

};

export const General = (): React.ReactElement => (
    <div style={{ display: 'grid', gridGap: '1rem' }}>

        <MuiAlert severity="error">
            <MuiAlertTitle>This is an error alert with no call to action</MuiAlertTitle>
        </MuiAlert>

        <MuiAlert severity="warning">
            <MuiAlertTitle>This is a warning alert with no call to action</MuiAlertTitle>
        </MuiAlert>

        <MuiAlert severity="info">
            <MuiAlertTitle>This is an info alert with no call to action</MuiAlertTitle>
        </MuiAlert>

        <MuiAlert severity="success">
            <MuiAlertTitle>This is a success alert with no call to action</MuiAlertTitle>
        </MuiAlert>

    </div>
);


export const Filled = (): React.ReactElement => (
    <div style={{ display: 'grid', gridGap: '1rem' }}>

        <MuiAlert severity="error" variant="filled">
            <MuiAlertTitle>Error</MuiAlertTitle>
            This is an error alert with no call to action
        </MuiAlert>

        <MuiAlert severity="warning" variant="filled">
            <MuiAlertTitle>Warning</MuiAlertTitle>
            This is a warning alert with no call to action
        </MuiAlert>

        <MuiAlert severity="info" variant="filled">
            <MuiAlertTitle>Info</MuiAlertTitle>
            This is an info alert with no call to action
        </MuiAlert>

        <MuiAlert severity="success" variant="filled">
            <MuiAlertTitle>Success</MuiAlertTitle>
            This is a success alert with no call to action
        </MuiAlert>

    </div>
);


export const WithTitle = (): React.ReactElement => (
    <div style={{ display: 'grid', gridGap: '1rem' }}>

        <MuiAlert severity="error">
            <MuiAlertTitle>Error</MuiAlertTitle>
            This is an error alert with no call to action
        </MuiAlert>

        <MuiAlert severity="warning">
            <MuiAlertTitle>Warning</MuiAlertTitle>
            This is a warning alert with no call to action
        </MuiAlert>

        <MuiAlert severity="info">
            <MuiAlertTitle>Info</MuiAlertTitle>
            This is an info alert with no call to action
        </MuiAlert>

        <MuiAlert severity="success">
            <MuiAlertTitle>Success</MuiAlertTitle>
            This is a success alert with no call to action
        </MuiAlert>

    </div>
);
