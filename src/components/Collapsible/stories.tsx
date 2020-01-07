import React, { ReactElement } from 'react';
import Collapsible from './index';
import Label from '../Label';


export default {
    component: Collapsible,
    parameters: {
        componentSubtitle: <Label color="warning">In Development</Label>,
    },
    title: 'Components|Display/Collapsible',
};


export const Default = (): ReactElement => {
    return (
        <Collapsible>
            <p>This is some content in a collapsible component.</p>
        </Collapsible>
    );
};
