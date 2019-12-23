import React, { ReactElement, ReactNode } from 'react';
import { text } from '@storybook/addon-knobs';
import Typography from '../Typography';
import Label from '../Label';
import Icon from '../Icon';
import Button from '../Button';
import Placeholder from './index';


export default {
    component: Placeholder,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|Display/Placeholder',
};


export const General = (): ReactElement => {
    const errorIcon: string = text('icon', 'business');
    const title: string = text('title', 'No Users Found');
    const description: string = text('description', 'Please create a new user.');

    return (
        <Placeholder
            icon={errorIcon}
            title={title}
            description={description}
        />
    );
};


export const WithChildren = (): ReactElement => {
    const childIcon: string = text('icon', 'business');
    const title: string = text('title', 'Error');

    return (
        <Placeholder>
            <Icon children={childIcon} size="large" />
            <Typography hasBottomMargin shouldTruncate variant="h1" color="tertiary">
                {title}
            </Typography>
        </Placeholder>
    );
};


export const WithAction = (): ReactElement => {
    const childIcon: string = text('icon', 'business');
    const title: string = text('title', 'No devices to display');
    const description: string = text('description', 'Please add a new device to continue');

    return (
        <Placeholder>
            <Icon children={childIcon} size="large" />
            <Typography hasBottomMargin shouldTruncate variant="h1" color="tertiary">
                {title}
            </Typography>
            <Typography as="p" hasBottomMargin variant="body1">
                {description}
            </Typography>
            <Button>Add Device</Button>
        </Placeholder>
    );
};
