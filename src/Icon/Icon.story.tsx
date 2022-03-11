

import * as React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Story } from '@storybook/react';

import Icon, { BkIconProps as IconProps } from './';


export default {
    component: Icon,
    title: 'Data Display/Icon',
};


export const Sandbox: Story<IconProps> = (args) => <Icon {...args} />;


Sandbox.args = {
    children: 'cloud_queue',
};



export const WithStyles: Story<IconProps> = (args) => <Icon {...args} />;

WithStyles.args = {
    children: 'star',
    color: 'primary',
    fontSize: 'large'
};
