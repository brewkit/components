import * as React from 'react';
import { Story } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';
import { BreadcrumbsProps } from './Breadcrumbs.types';
import { Typography, Link } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Flare from '@material-ui/icons/Flare';
import GrainIcon from '@material-ui/icons/Grain';

export default {
    component: Breadcrumbs,
    title: 'Navigation/Breadcrumbs',
};

export const Sandbox: Story<BreadcrumbsProps> = (args) => (
    <Breadcrumbs {...args}>
        <Link href="/">
            MUI
        </Link>
        <Link href="/">
            Core
        </Link>
        <Link href="/">
            Test
        </Link>
        <Typography>Breadcrumbs</Typography>
    </Breadcrumbs>
);
Sandbox.args = {
    separator: '>',
    maxItems: 2,
};

export const WithIcons = (args: BreadcrumbsProps): React.ReactElement => (
    <Breadcrumbs aria-label="breadcrumb" {...args}>
        <Link
            href="/"
            underline="hover"
        >
            <HomeIcon />
            Home
        </Link>
        <Link
            href="/"
            underline="hover"
        >
            <Flare />
            Core
        </Link>
        <Typography>
            <GrainIcon />
            Breadcrumb
        </Typography>
    </Breadcrumbs>
);
WithIcons.args = {
    separator: '|',
};
