import React, { ReactElement, ReactNode } from 'react';
// import { text } from '@storybook/addon-knobs';
import Breadcrumb from './index';
import Label from '../Label';


export default {
    component: Breadcrumb,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|Display/Breadcrumb',
};


export const General = (): ReactElement => {
    return (
        <Breadcrumb
            crumbs={[
                { title: "Location 1" },
                {
                    title: "Location 2",
                    url: "/location2",
                },
                { title: "Location 3" },
            ]}
        />
    );
};


export const CustomDivider = (): ReactElement => {
    return (
        <Breadcrumb
            crumbs={[
                {
                    title: (
                        <span className="brew-Breadcrumb--custom">Location 1</span>
                    ),
                },
                {
                    title: "Location 2",
                    url: "/location2",
                },
                { title: "Location 3" },
            ]}
            divider={<span>></span>}
        />
    );
};


