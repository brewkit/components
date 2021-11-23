import * as React from 'react';
import { Story } from '@storybook/react';
import Breadcrumbs from './Breadcrumbs';
import { BreadcrumbsProps } from './Breadcrumbs.types';
import { Typography, Link } from '@material-ui/core';

export default {
    component: Breadcrumbs,
    title: 'Navigation/Breadcrumbs',
};

export const Sandbox: Story<BreadcrumbsProps> = (args) => (
    <Breadcrumbs {...args}>
        <Link href="/">
            MUI
        </Link>
        <Link href="/getting-started/installation/">
            Core
        </Link>
        <Typography>Breadcrumbs</Typography>
    </Breadcrumbs>
);
Sandbox.args = {
    separator: '>',
    maxItems: 2,
};

