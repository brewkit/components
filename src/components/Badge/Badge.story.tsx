import * as React from 'react';
import { Story } from '@storybook/react';
import Badge from './Badge';
import MailIcon from '@material-ui/icons/Mail';
import { Props } from './Badge.types';


export default {
    component: Badge,
    title: 'Data Display/Badge',
};


export const Sandbox: Story<Props> = (args) => <Badge {...args}><MailIcon /></Badge>;
Sandbox.args = {
    color: 'primary',
    invisible: false,
    variant: 'standard',
    overlap: 'rectangle',
    badgeContent: '4',
    showZero: false,
    max: 99,
    anchorOrigin: {
        vertical: 'top',
        horizontal: 'right',
    },
};


export const Basic: Story<Props> = (args) => (
    <div style={{ fontSize: '2rem' }}>
        <Badge badgeContent={4} color="primary">
            😀
        </Badge>
        <Badge badgeContent={4} color="secondary">
            😀
        </Badge>
        <Badge badgeContent={4} color="error">
            😀
        </Badge>
    </div>
);


export const MaxValue: Story<Props> = (args) => (
    <div style={{ fontSize: '2rem' }}>
        <Badge color="primary" badgeContent={99}>
            😀
        </Badge>
        <Badge color="secondary" badgeContent={100} max={99}>
            😀
        </Badge>
        <Badge color="error" badgeContent={1000} max={999}>
            😀
        </Badge>
    </div>
);


export const DotBadge: Story<Props> = (args) => (
    <div style={{ fontSize: '2rem' }}>

        <Badge color="primary" variant="dot">
            😀
        </Badge>
        <Badge color="secondary" variant="dot">
            😀
        </Badge>
        <Badge color="error" variant="dot">
            😀
        </Badge>

    </div>
);


export const Alignment: Story<Props> = (args) => (
    <div style={{ fontSize: '2rem' }}>

        <Badge badgeContent={99} color="primary" anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
            😀
        </Badge>
        <Badge badgeContent={99} color="secondary" anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
            😀
        </Badge>
        <Badge badgeContent={99} color="error" anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
            😀
        </Badge>
        <Badge badgeContent={99} color="primary" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
            😀
        </Badge>

    </div>
);
