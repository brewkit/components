import React, { ReactElement, ReactNode } from 'react';
import { select, text } from '@storybook/addon-knobs';
import Divider from './index';
import Label from '../Label';
import { Alignments } from './types';


export default {
    component: Divider,
    parameters: {
        componentSubtitle: <Label color="success">stable</Label>,
    },
    title: 'Components|Display/Divider',
};


export const General = (): ReactElement => {
    const align: Alignments = select('align', ['left', 'center', 'right'], 'center');
    const children: ReactNode = text('children', 'divider');

    return (
        <Divider align={align}>{children}</Divider>
    );
};


export const Default = (): ReactElement => <Divider />;
export const LeftAligned = (): ReactElement => <Divider align="left">I am a divider!</Divider>;
export const CenterAligned = (): ReactElement => <Divider align="center">I am a divider!</Divider>;
export const RightAligned = (): ReactElement => <Divider align="right">I am a divider!</Divider>;
