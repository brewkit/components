import React, { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
// import { text, select, boolean } from '@storybook/addon-knobs';
// import { action } from '@storybook/addon-actions';
import Tabs from './index';
import Tab from './components/Tab';
// import { Variants, Colors, Sizes } from './types';
import Label from "../Label";


export default {
    title: 'Components|Display/Tabs',
    component: Tabs,
    parameters: {
        componentSubtitle: <Label color="success">Stable</Label>,
    },
};


export const General = () => {
    return (
        <MemoryRouter>
            <Tabs>
                <Tab>Foo</Tab>
                <Tab>Bar</Tab>
                <Tab>Buz</Tab>
                <Tab>Foo</Tab>
            </Tabs>
        </MemoryRouter>
    );
};