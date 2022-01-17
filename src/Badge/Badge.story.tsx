import * as React from 'react';
import { Story } from '@storybook/react';
import MailIcon from '@material-ui/icons/Mail';
import Badge, { BkBadgeProps as BadgeProps } from './Badge';

export default {
    component: Badge,
    title: 'Data Display/Badge',
};

const defaultArgs = {
    invisible: false,
    showZero: false,
    max: 99,
    badgeContent: '4',
    anchorOrigin: {
        vertical: 'top' as const,
        horizontal: 'right' as const,
    },
    overlap: 'rectangle' as const,
    variant: 'standard' as const,
};
export const Sandbox: Story<BadgeProps> = function sandbox(args) {
    return (
        <Badge {...args}>
            <MailIcon />
        </Badge>
    );
};

Sandbox.args = {
    ...defaultArgs,
    color: 'primary',
};

export const Basic: Story<BadgeProps> = function basic() {
    return (
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
};

export const MaxValue: Story<BadgeProps> = function storyMaxValue() {
    return (
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
};

export const DotBadge: Story<BadgeProps> = function storyDotBadge() {
    return (
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
};

export const Alignment: Story<BadgeProps> = function storyAlignment() {
    return (
        <div style={{ fontSize: '2rem' }}>
            <Badge
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                badgeContent={99}
                color="primary">
                😀
            </Badge>
            <Badge
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                badgeContent={99}
                color="secondary">
                😀
            </Badge>
            <Badge
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                badgeContent={99}
                color="error">
                😀
            </Badge>
            <Badge
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={99}
                color="primary">
                😀
            </Badge>
        </div>
    );
};