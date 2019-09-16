import React, { ReactNode } from 'react';
import { Preview } from '@storybook/addon-docs/blocks';
import { select, text } from '@storybook/addon-knobs';
import Divider from './index';
import { Alignments } from './types';


export default {
    title: 'Components|Display/Divider',
    component: Divider,
};


export const General = () => {
    const align: Alignments = select('align', ['left', 'center', 'right'], 'center');
    const children: ReactNode = text('children', 'divider');

    return (
        <Divider align={align}>{children}</Divider>
    );
};


export const LeftAligned = () => <Divider align="left">I'm a divider!</Divider>;
export const CenterAligned = () => <Divider align="center">I'm a divider!</Divider>;
export const RightAligned = () => <Divider align="right">I'm a divider!</Divider>;
export const WithoutContent = () => <Divider />;