import * as React from 'react';
import { Story } from '@storybook/react';
import { Typography, Link } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Flare from '@material-ui/icons/Flare';
import GrainIcon from '@material-ui/icons/Grain';
import { BreadcrumbsProps } from './Breadcrumbs.types';
import Breadcrumbs from './Breadcrumbs';

export default {
    component: Breadcrumbs,
    title: 'Navigation/Breadcrumbs',
};

export const Sandbox: Story<BreadcrumbsProps> = function sandbox(args) {
    return (
        <Breadcrumbs {...args}>
            <Link href="/">MUI</Link>
            <Link href="/">Core</Link>
            <Link href="/">Test</Link>
            <Typography>Breadcrumbs</Typography>
        </Breadcrumbs>
    );
};
Sandbox.args = {
    separator: '>',
    maxItems: 2,
};

export const WithIcons = function storyWithIcons(
    args: BreadcrumbsProps,
): React.ReactElement {
    return (
        <Breadcrumbs aria-label="breadcrumb" {...args}>
            <Link href="/" underline="hover">
                <HomeIcon />
                Home
            </Link>
            <Link href="/" underline="hover">
                <Flare />
                Core
            </Link>
            <Typography>
                <GrainIcon />
                Breadcrumb
            </Typography>
        </Breadcrumbs>
    );
};
WithIcons.args = {
    separator: '|',
};
