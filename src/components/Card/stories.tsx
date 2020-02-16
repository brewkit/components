import React from 'react';
import { text, boolean } from '@storybook/addon-knobs';
import Card from './index';
import Flag from '@components/Flag';


export default {
    component: Card,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Components|Surfaces/Card',
};


export const General = (): React.ReactElement => {

    const children: React.ReactNode = text('children', 'foo');
    const isRaised: boolean = boolean('isRaised', false);

    return (
        <Card isRaised={isRaised}>
            {children}
        </Card>
    );

};


export const Default = (): React.ReactElement => <Card>Default</Card>;
