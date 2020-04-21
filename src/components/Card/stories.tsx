import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import Card from '@components/Card';


export default {
    Component: Card,
    title: 'Stable/Data Display/Card',
}


export const Sandbox = (): React.ReactElement => {
    const isRaised = boolean('isRaised', false);

    return (
        <Card isRaised={isRaised}>
            hello
        </Card>
    );
};
