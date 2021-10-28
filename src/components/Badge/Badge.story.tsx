import * as React from 'react';
import { Story } from '@storybook/react';
import Badge from './Badge';
import MailIcon from '@material-ui/icons/Mail';
import { BadgeProps } from './Badge.types';


export default {
    component: Badge,
    title: 'Data Display/Badge',
};


export const Sandbox: Story<BadgeProps> = (args) => <Badge {...args}><MailIcon /></Badge>;
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


export const Basic: Story<BadgeProps> = (args) => (
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


export const MaxValue: Story<BadgeProps> = (args) => (
    <div style={{ fontSize: '2rem' }}>
        <Badge badgeContent={99} color="primary">
            😀
        </Badge>
        <Badge badgeContent={100} color="secondary" max={99}>
            😀
        </Badge>
        <Badge badgeContent={1000} color="error" max={999}>
            😀
        </Badge>
    </div>
);


export const DotBadge: Story<BadgeProps> = (args) => (
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


export const Alignment: Story<BadgeProps> = (args) => (
    <div style={{ fontSize: '2rem' }}>

        <Badge anchorOrigin={{ vertical: 'top', horizontal: 'left' }} badgeContent={99} color="primary">
            😀
        </Badge>
        <Badge anchorOrigin={{ vertical: 'top', horizontal: 'right' }} badgeContent={99} color="secondary">
            😀
        </Badge>
        <Badge anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} badgeContent={99} color="error">
            😀
        </Badge>
        <Badge anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} badgeContent={99} color="primary">
            😀
        </Badge>

    </div>
);
