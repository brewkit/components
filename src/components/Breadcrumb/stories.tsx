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
    // const breadcrumbs: ReactNode = text('children', 'Breadcrumb');

    return (
        <Breadcrumb
            crumbs={[
                {
                    title: "Location 1",
                    url: "#",
                },
                {
                    title: "Location 2",
                    url: "#",
                },
                {
                    title: "Location 3",
                    url: "#",
                },
            ]}
            divider={<span> > </span>}
        />
    );
};

