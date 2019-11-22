import React, { ReactNode } from 'react';
import { text } from '@storybook/addon-knobs';
import Label from '../Label';
// import { action } from '@storybook/addon-actions';
// import { Variants, Colors, Sizes } from './types';

import Card from './index';


export default {
    title: 'Components|Display/Card',
    component: Card,
    parameters: {
        componentSubtitle: <Label color="warning">In Progress</Label>,
    },
};


export const BaseExample = () => {
    const children: ReactNode = text('children', 'Click me!');

    return (
        <Card>
            <Card.Header>
                <Card.Title>Card Header</Card.Title>
            </Card.Header>
            <Card.Body>{children}</Card.Body>
        </Card>
    );
};

export const CardExample = () => {
    return <Card>&nbsp;</Card>;
};

export const CardBodyExample = () => {
    const children: ReactNode = text('children', 'Card Content');

    return <Card.Body>{children}</Card.Body>
};

export const CardHeaderExample = () => {
    const children: ReactNode = text('children', '');

    return <Card.Header>{children}</Card.Header>
};

export const CardTitleExample = () => {
    const children: ReactNode = text('children', 'Card Title');

    return <Card.Title>{children}</Card.Title>
};




