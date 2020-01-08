import React, { ReactElement } from 'react';
import Collapsible from './index';
import Typography from '../Typography';
import Label from '../Label';
import { boolean } from '@storybook/addon-knobs';


export default {
    component: Collapsible,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|Display/Collapsible',
};


export const Default = (): ReactElement => {
    const isCollapsed = boolean('isCollapsed', true);
    const anchorContent = <Typography variant="h3">Click me to open</Typography>;

    return (
        <Collapsible anchor={anchorContent} isCollapsed={isCollapsed}>
            <Typography variant="body2">
                This is some content in a collapsible component.
            </Typography>
        </Collapsible>
    );
};
