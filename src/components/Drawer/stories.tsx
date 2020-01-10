import React, { ReactElement } from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import Drawer from './index';


export default {
    Component: Drawer,
    title: 'Components|Display/Drawer',
};


export const general = (): ReactElement => {
    const anchor = select('anchorConten', ['top', 'right', 'bottom', 'left'], 'left');
    const isOpen = boolean('isOpen', false);

    return (
        <Drawer anchor={anchor} isOpen={isOpen}>
            <Drawer.Item>Hello</Drawer.Item>
        </Drawer>
    );
};
