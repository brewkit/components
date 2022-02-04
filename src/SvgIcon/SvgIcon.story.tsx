import * as React from 'react';
import { Story } from '@storybook/react';

import SvgIcon, { BkSvgIconProps as SvgIconProps } from './';

export default {
    component: SvgIcon,
    title: 'Data Display/SvgIcon',
};


export const Sandbox: Story<SvgIconProps> = (args) => <SvgIcon {...args} />;


Sandbox.args = {
    children: <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
};


export const WithStyles: Story<SvgIconProps> = (args) => <SvgIcon {...args} />;


WithStyles.args = {
    children: <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    color: 'secondary',
    fontSize: 'small'
};
