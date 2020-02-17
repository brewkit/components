import React, { ReactElement } from 'react';
import Breadcrumb from './index';
import Flag from '@components/Flag';


export default {
    component: Breadcrumb,
    parameters: {
        componentSubtitle: <Flag color="warning">In Development</Flag>,
    },
    title: 'In Development|Display/Breadcrumb',
};


export const General = (): ReactElement => (
    <Breadcrumb
        crumbs={[
            { title: 'Location 1' },
            {
                title: 'Location 2',
                url: '/location2',
            },
            { title: 'Location 3' },
        ]}
    />
);


export const CustomDivider = (): ReactElement => (
    <Breadcrumb
        crumbs={[
            { title: (<span className="brew-Breadcrumb--custom">Location 1</span>) },
            {
                title: 'Location 2',
                url: '/location2',
            },
            { title: 'Location 3' },
        ]}
        divider={<span>></span>}
    />
);


