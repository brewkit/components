import React, { ReactElement } from 'react';
import Collapsible from './index';
import Typography from '../Typography';
import Flag from '@components/Flag';
import { boolean } from '@storybook/addon-knobs';


export default {
    component: Collapsible,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'In Development|Display/Collapsible',
};


export const Default = (): ReactElement => {
    const isCollapsed = boolean('isCollapsed', true);
    const anchorContent = <Typography variant="h3">Click me to open</Typography>;

    return (
        <Collapsible anchorContent={anchorContent} isCollapsed={isCollapsed}>
            <Typography variant="body2">
                This is some content in a collapsible component.
            </Typography>
        </Collapsible>
    );
};
