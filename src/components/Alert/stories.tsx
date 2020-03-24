import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import SystemUpdateAltOutlined from '@material-ui/icons/SystemUpdateAltOutlined';
import Alert from './index';
import Button from '@components/Button';
import Flag from '@components/Flag';
import { Severities } from './types';


export default {
    component: Alert,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Stable|Data Display/Alert',
};


export const Sandbox = (): React.ReactElement => {

    const title = text('title', 'Alert Title');
    const severity: Severities = select('severity', ['error', 'warning', 'info', 'success'], 'success');
    const children = text('children', 'Some content for the alert.');

    return (
        <Alert title={title} severity={severity} children={children} />
    );

};


export const General = (): React.ReactElement => (
    <div style={{ display: 'grid', gridGap: '1rem' }}>
        <Alert title="This is a simple success banner." />
        <Alert title="This is a simple info banner." severity="info" />
        <Alert title="This is a simple warning banner." severity="warning" />
        <Alert title="This is a simple error banner." severity="error" />
    </div>
);

export const Filled = (): React.ReactElement => (
    <div style={{ display: 'grid', gridGap: '1rem' }}>
        <Alert title="This is a simple success banner." variant="filled" />
        <Alert title="This is a simple info banner." severity="info" variant="filled" />
        <Alert title="This is a simple warning banner." severity="warning" variant="filled">
            This banner has some supporting content.
        </Alert>
        <Alert title="This is a simple error banner." severity="error" variant="filled" />
    </div>
);

export const CustomIcon = (): React.ReactElement => (
    <Alert
        title="Device Firmware Update"
        severity="error"
        icon={<SystemUpdateAltOutlined style={{ fontSize: '2rem' }} />}
        action={<Button size="small">Update</Button>}
    >
        A device firmware update is available. Some features may not work until the update is applied.
    </Alert>
);
